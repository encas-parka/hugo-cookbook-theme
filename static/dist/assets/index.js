(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const As=!1;var ea=Array.isArray,hi=Array.prototype.indexOf,pn=Array.from,tn=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,pi=Object.getOwnPropertyDescriptors,Ts=Object.prototype,gi=Array.prototype,gn=Object.getPrototypeOf,jn=Object.isExtensible;function Er(t){return typeof t=="function"}const ie=()=>{};function mi(t){for(var e=0;e<t.length;e++)t[e]()}function Ms(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function _a(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const mt=2,mn=4,_n=8,ir=16,Kt=32,br=64,bn=128,Et=256,ba=512,lt=1024,xt=2048,lr=4096,Nt=8192,yr=16384,$a=32768,cr=65536,Ln=1<<17,_i=1<<18,Or=1<<19,bi=1<<20,rn=1<<21,Pa=1<<22,hr=1<<23,pr=Symbol("$state"),Ds=Symbol("legacy props"),yi=Symbol(""),Qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ns(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function xi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Si(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function $i(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Pi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ki(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ei(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ai(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ti(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Mi(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ka=1,Ea=2,Cs=4,Di=8,Ni=16,Ci=1,Ii=2,Ri=4,Oi=8,qi=16,ji=4,Li=1,Bi=2,Xe=Symbol(),zi="http://www.w3.org/1999/xhtml",Ui="http://www.w3.org/2000/svg",Hi="@attach";function Wi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Gi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Qi=!1;function Is(t){return t===this.v}function Rs(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Vi(t,e){return t!==e}function Os(t){return!Rs(t,this.v)}let qr=!1,Fi=!1;function Ki(){qr=!0}const Ji=[];function Pr(t,e=!1,r=!1){return ha(t,new Map,"",Ji,null,r)}function ha(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ea(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var d=0;d<t.length;d+=1){var v=t[d];d in t&&(l[d]=ha(v,e,r,a,null,i))}return l}if(gn(t)===Ts){l={},e.set(t,l),n!==null&&e.set(n,l);for(var h in t)l[h]=ha(t[h],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ha(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Ke=null;function Tr(t){Ke=t}function J(t,e=!1,r){Ke={p:Ke,c:null,e:null,s:t,x:null,l:qr&&!e?{s:null,u:null,$:[]}:null}}function Y(t){var e=Ke,r=e.e;if(r!==null){e.e=null;for(var a of r)Js(a)}return Ke=e.p,{}}function jr(){return!qr||Ke!==null&&Ke.l===null}let dr=[];function qs(){var t=dr;dr=[],mi(t)}function ar(t){if(dr.length===0&&!Vr){var e=dr;queueMicrotask(()=>{e===dr&&qs()})}dr.push(t)}function Yi(){for(;dr.length>0;)qs()}const Zi=new WeakMap;function js(t){var e=Ce;if(e===null)return Re.f|=hr,t;if((e.f&$a)===0){if((e.f&bn)===0)throw!e.parent&&t instanceof Error&&Ls(t),t;e.b.error(t)}else Mr(t,e)}function Mr(t,e){for(;e!==null;){if((e.f&bn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Ls(t),t}function Ls(t){const e=Zi.get(t);e&&(tn(t,"message",{value:e.message}),tn(t,"stack",{value:e.stack}))}const la=new Set;let Be=null,pa=null,an=new Set,qt=[],Aa=null,nn=!1,Vr=!1;class kt{current=new Map;#e=new Map;#t=new Set;#a=0;#o=null;#d=[];#c=[];#u=[];#l=[];#v=[];#i=[];skipped_effects=new Set;process(e){qt=[],pa=null;var r=kt.apply(this);for(const i of e)this.#f(i);if(this.#a===0){this.#h();var a=this.#c,n=this.#u;this.#c=[],this.#u=[],this.#l=[],pa=this,Be=null,Bn(a),Bn(n),pa=null,this.#o?.resolve()}else this.#n(this.#c),this.#n(this.#u),this.#n(this.#l);r();for(const i of this.#d)Yr(i);this.#d=[]}#f(e){e.f^=lt;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Kt|br))!==0,i=n&&(a&lt)!==0,o=i||(a&Nt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=lt:(a&mn)!==0?this.#u.push(r):(a&lt)===0&&((a&Pa)!==0&&r.b?.is_pending()?this.#d.push(r):Ca(r)&&((r.f&ir)!==0&&this.#l.push(r),Yr(r)));var l=r.first;if(l!==null){r=l;continue}}var d=r.parent;for(r=r.next;r===null&&d!==null;)r=d.next,d=d.parent}}#n(e){for(const r of e)((r.f&xt)!==0?this.#v:this.#i).push(r),vt(r,lt);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){Be=this}deactivate(){Be=null}flush(){if(qt.length>0){if(this.activate(),Bs(),Be!==null&&Be!==this)return}else this.#a===0&&this.#h();this.deactivate();for(const e of an)if(an.delete(e),e(),Be!==null)break}#h(){for(const e of this.#t)e();if(this.#t.clear(),la.size>1){this.#e.clear();let e=!0;for(const r of la){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;zs(a)}if(qt.length>0){Be=r;const a=kt.apply(r);for(const n of qt)r.#f(n);qt=[],a()}}Be=null}la.delete(this)}increment(){this.#a+=1}decrement(){this.#a-=1;for(const e of this.#v)vt(e,xt),_r(e);for(const e of this.#i)vt(e,lr),_r(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Ms()).promise}static ensure(){if(Be===null){const e=Be=new kt;la.add(Be),Vr||kt.enqueue(()=>{Be===e&&e.flush()})}return Be}static enqueue(e){ar(e)}static apply(e){return ie}}function Xi(t){var e=Vr;Vr=!0;try{for(var r;;){if(Yi(),qt.length===0&&(Be?.flush(),qt.length===0))return Aa=null,r;Bs()}}finally{Vr=e}}function Bs(){var t=Ar;nn=!0;try{var e=0;for(Wn(!0);qt.length>0;){var r=kt.ensure();if(e++>1e3){var a,n;el()}r.process(qt),rr.clear()}}finally{nn=!1,Wn(t),Aa=null}}function el(){try{Pi()}catch(t){Mr(t,Aa)}}let ur=null;function Bn(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(yr|Nt))===0&&Ca(a)&&(ur=[],Yr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?Xs(a):a.fn=null),ur?.length>0)){rr.clear();for(const n of ur)Yr(n);ur=[]}}ur=null}}function zs(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&mt)!==0?zs(e):(r&(Pa|ir))!==0&&(vt(e,xt),_r(e))}}function _r(t){for(var e=Aa=t;e.parent!==null;){e=e.parent;var r=e.f;if(nn&&e===Ce&&(r&ir)!==0)return;if((r&(br|Kt))!==0){if((r&lt)===0)return;e.f^=lt}}qt.push(e)}function yn(t){let e=0,r=nr(0),a;return()=>{gl()&&(s(r),Pn(()=>(e===0&&(a=xr(()=>t(()=>jt(r)))),e+=1,()=>{ar(()=>{e-=1,e===0&&(a?.(),a=void 0,jt(r))})})))}}var tl=cr|Or|bn;function rl(t,e,r){new al(t,e,r)}class al{parent;#e=!1;#t;#a=null;#o;#d;#c;#u=null;#l=null;#v=null;#i=null;#f=0;#n=0;#h=!1;#p=null;#m=()=>{this.#p&&Dr(this.#p,this.#f)};#b=yn(()=>(this.#p=nr(this.#f),()=>{this.#p=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#d=a,this.parent=Ce.b,this.#e=!!this.#o.pending,this.#c=Zt(()=>{Ce.b=this;{try{this.#u=st(()=>a(this.#t))}catch(n){this.error(n)}this.#n>0?this.#g():this.#e=!1}},tl)}#s(){try{this.#u=st(()=>this.#d(this.#t))}catch(e){this.error(e)}this.#e=!1}#y(){const e=this.#o.pending;e&&(this.#l=st(()=>e(this.#t)),kt.enqueue(()=>{this.#u=this.#_(()=>(kt.ensure(),st(()=>this.#d(this.#t)))),this.#n>0?this.#g():(Qt(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#_(e){var r=Ce,a=Re,n=Ke;Lt(this.#c),pt(this.#c),Tr(this.#c.ctx);try{return e()}catch(i){return js(i),null}finally{Lt(r),pt(a),Tr(n)}}#g(){const e=this.#o.pending;this.#u!==null&&(this.#i=document.createDocumentFragment(),nl(this.#u,this.#i)),this.#l===null&&(this.#l=st(()=>e(this.#t)))}#x(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#x(e);return}this.#n+=e,this.#n===0&&(this.#e=!1,this.#l&&Qt(this.#l,()=>{this.#l=null}),this.#i&&(this.#t.before(this.#i),this.#i=null),ar(()=>{kt.ensure().flush()}))}update_pending_count(e){this.#x(e),this.#f+=e,an.add(this.#m)}get_effect_pending(){return this.#b(),s(this.#p)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#h||!r&&!a)throw e;this.#u&&(ot(this.#u),this.#u=null),this.#l&&(ot(this.#l),this.#l=null),this.#v&&(ot(this.#v),this.#v=null);var n=!1,i=!1;const o=()=>{if(n){Gi();return}n=!0,i&&Mi(),kt.ensure(),this.#f=0,this.#v!==null&&Qt(this.#v,()=>{this.#v=null}),this.#e=this.has_pending_snippet(),this.#u=this.#_(()=>(this.#h=!1,st(()=>this.#d(this.#t)))),this.#n>0?this.#g():this.#e=!1};var l=Re;try{pt(null),i=!0,r?.(e,o),i=!1}catch(d){Mr(d,this.#c&&this.#c.parent)}finally{pt(l)}a&&ar(()=>{this.#v=this.#_(()=>{this.#h=!0;try{return st(()=>{a(this.#t,()=>e,()=>o)})}catch(d){return Mr(d,this.#c.parent),null}finally{this.#h=!1}})})}}function nl(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:ta(r);e.append(r),r=n}}function Us(t,e,r){const a=jr()?Ta:wn;if(e.length===0){r(t.map(a));return}var n=Be,i=Ce,o=sl();Promise.all(e.map(l=>ol(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(d){(i.f&yr)===0&&Mr(d,i)}n?.deactivate(),Hs()}).catch(l=>{Mr(l,i)})}function sl(){var t=Ce,e=Re,r=Ke,a=Be;return function(){Lt(t),pt(e),Tr(r),a?.activate()}}function Hs(){Lt(null),pt(null),Tr(null)}function Ta(t){var e=mt|xt,r=Re!==null&&(Re.f&mt)!==0?Re:null;return Ce===null||r!==null&&(r.f&Et)!==0?e|=Et:Ce.f|=Or,{ctx:Ke,deps:null,effects:null,equals:Is,f:e,fn:t,reactions:null,rv:0,v:Xe,wv:0,parent:r??Ce,ac:null}}function ol(t,e){let r=Ce;r===null&&wi();var a=r.b,n=void 0,i=nr(Xe),o=!Re,l=new Map;return _l(()=>{var d=Ms();n=d.promise;try{Promise.resolve(t()).then(d.resolve,d.reject)}catch(m){d.reject(m)}var v=Be,h=a.is_pending();o&&(a.update_pending_count(1),h||(v.increment(),l.get(v)?.reject(Qr),l.set(v,d)));const p=(m,g=void 0)=>{h||v.activate(),g?g!==Qr&&(i.f|=hr,Dr(i,g)):((i.f&hr)!==0&&(i.f^=hr),Dr(i,m)),o&&(a.update_pending_count(-1),h||v.decrement()),Hs()};d.promise.then(p,m=>p(null,m||"unknown"))}),$n(()=>{for(const d of l.values())d.reject(Qr)}),new Promise(d=>{function v(h){function p(){h===n?d(i):v(n)}h.then(p,p)}v(n)})}function Z(t){const e=Ta(t);return ro(e),e}function wn(t){const e=Ta(t);return e.equals=Os,e}function Ws(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)ot(e[r])}}function il(t){for(var e=t.parent;e!==null;){if((e.f&mt)===0)return e;e=e.parent}return null}function xn(t){var e,r=Ce;Lt(il(t));try{Ws(t),e=oo(t)}finally{Lt(r)}return e}function Gs(t){var e=xn(t);if(t.equals(e)||(t.v=e,t.wv=no()),!wr){var r=(Xt||(t.f&Et)!==0)&&t.deps!==null?lr:lt;vt(t,r)}}const rr=new Map;function nr(t,e){var r={f:0,v:t,reactions:null,equals:Is,rv:0,wv:0};return r}function U(t,e){const r=nr(t);return ro(r),r}function ll(t,e=!1,r=!0){const a=nr(t);return e||(a.equals=Os),qr&&r&&Ke!==null&&Ke.l!==null&&(Ke.l.s??=[]).push(a),a}function b(t,e,r=!1){Re!==null&&(!Mt||(Re.f&Ln)!==0)&&jr()&&(Re.f&(mt|ir|Pa|Ln))!==0&&!Vt?.includes(t)&&Ti();let a=r?Oe(e):e;return Dr(t,a)}function Dr(t,e){if(!t.equals(e)){var r=t.v;wr?rr.set(t,e):rr.set(t,r),t.v=e;var a=kt.ensure();a.capture(t,r),(t.f&mt)!==0&&((t.f&xt)!==0&&xn(t),vt(t,(t.f&Et)===0?lt:lr)),t.wv=no(),Qs(t,xt),jr()&&Ce!==null&&(Ce.f&lt)!==0&&(Ce.f&(Kt|br))===0&&(Pt===null?wl([t]):Pt.push(t))}return e}function jt(t){b(t,t.v+1)}function Qs(t,e){var r=t.reactions;if(r!==null)for(var a=jr(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Ce)){var d=(l&xt)===0;d&&vt(o,e),(l&mt)!==0?Qs(o,lr):d&&((l&ir)!==0&&ur!==null&&ur.push(o),_r(o))}}}function Oe(t){if(typeof t!="object"||t===null||pr in t)return t;const e=gn(t);if(e!==Ts&&e!==gi)return t;var r=new Map,a=ea(t),n=U(0),i=Ft,o=l=>{if(Ft===i)return l();var d=Re,v=Ft;pt(null),Qn(i);var h=l();return pt(d),Qn(v),h};return a&&r.set("length",U(t.length)),new Proxy(t,{defineProperty(l,d,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&Ei();var h=r.get(d);return h===void 0?h=o(()=>{var p=U(v.value);return r.set(d,p),p}):b(h,v.value,!0),!0},deleteProperty(l,d){var v=r.get(d);if(v===void 0){if(d in l){const h=o(()=>U(Xe));r.set(d,h),jt(n)}}else b(v,Xe),jt(n);return!0},get(l,d,v){if(d===pr)return t;var h=r.get(d),p=d in l;if(h===void 0&&(!p||tr(l,d)?.writable)&&(h=o(()=>{var g=Oe(p?l[d]:Xe),_=U(g);return _}),r.set(d,h)),h!==void 0){var m=s(h);return m===Xe?void 0:m}return Reflect.get(l,d,v)},getOwnPropertyDescriptor(l,d){var v=Reflect.getOwnPropertyDescriptor(l,d);if(v&&"value"in v){var h=r.get(d);h&&(v.value=s(h))}else if(v===void 0){var p=r.get(d),m=p?.v;if(p!==void 0&&m!==Xe)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return v},has(l,d){if(d===pr)return!0;var v=r.get(d),h=v!==void 0&&v.v!==Xe||Reflect.has(l,d);if(v!==void 0||Ce!==null&&(!h||tr(l,d)?.writable)){v===void 0&&(v=o(()=>{var m=h?Oe(l[d]):Xe,g=U(m);return g}),r.set(d,v));var p=s(v);if(p===Xe)return!1}return h},set(l,d,v,h){var p=r.get(d),m=d in l;if(a&&d==="length")for(var g=v;g<p.v;g+=1){var _=r.get(g+"");_!==void 0?b(_,Xe):g in l&&(_=o(()=>U(Xe)),r.set(g+"",_))}if(p===void 0)(!m||tr(l,d)?.writable)&&(p=o(()=>U(void 0)),b(p,Oe(v)),r.set(d,p));else{m=p.v!==Xe;var y=o(()=>Oe(v));b(p,y)}var x=Reflect.getOwnPropertyDescriptor(l,d);if(x?.set&&x.set.call(h,v),!m){if(a&&typeof d=="string"){var $=r.get("length"),C=Number(d);Number.isInteger(C)&&C>=$.v&&b($,C+1)}jt(n)}return!0},ownKeys(l){s(n);var d=Reflect.ownKeys(l).filter(p=>{var m=r.get(p);return m===void 0||m.v!==Xe});for(var[v,h]of r)h.v!==Xe&&!(v in l)&&d.push(v);return d},setPrototypeOf(){Ai()}})}function zn(t){try{if(t!==null&&typeof t=="object"&&pr in t)return t[pr]}catch{}return t}function cl(t,e){return Object.is(zn(t),zn(e))}var Un,Vs,Fs,Ks;function ul(){if(Un===void 0){Un=window,Vs=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Fs=tr(e,"firstChild").get,Ks=tr(e,"nextSibling").get,jn(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),jn(r)&&(r.__t=void 0)}}function Jt(t=""){return document.createTextNode(t)}function Nr(t){return Fs.call(t)}function ta(t){return Ks.call(t)}function c(t,e){return Nr(t)}function O(t,e=!1){{var r=Nr(t);return r instanceof Comment&&r.data===""?ta(r):r}}function u(t,e=1,r=!1){let a=t;for(;e--;)a=ta(a);return a}function dl(t){t.textContent=""}function Ma(){return!1}function vl(t,e){if(e){const r=document.body;t.autofocus=!0,ar(()=>{document.activeElement===r&&t.focus()})}}let Hn=!1;function fl(){Hn||(Hn=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Lr(t){var e=Re,r=Ce;pt(null),Lt(null);try{return t()}finally{pt(e),Lt(r)}}function Sn(t,e,r,a=r){t.addEventListener(e,()=>Lr(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),fl()}function hl(t){Ce===null&&Re===null&&$i(),Re!==null&&(Re.f&Et)!==0&&Ce===null&&Si(),wr&&xi()}function pl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Yt(t,e,r,a=!0){var n=Ce;n!==null&&(n.f&Nt)!==0&&(t|=Nt);var i={ctx:Ke,deps:null,nodes_start:null,nodes_end:null,f:t|xt,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Yr(i),i.f|=$a}catch(d){throw ot(i),d}else e!==null&&_r(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Or)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&pl(o,n),Re!==null&&(Re.f&mt)!==0&&(t&br)===0)){var l=Re;(l.effects??=[]).push(o)}}return i}function gl(){return Re!==null&&!Mt}function $n(t){const e=Yt(_n,null,!1);return vt(e,lt),e.teardown=t,e}function Bt(t){hl();var e=Ce.f,r=!Re&&(e&Kt)!==0&&(e&$a)===0;if(r){var a=Ke;(a.e??=[]).push(t)}else return Js(t)}function Js(t){return Yt(mn|bi,t,!1)}function ml(t){kt.ensure();const e=Yt(br|Or,t,!0);return(r={})=>new Promise(a=>{r.outro?Qt(e,()=>{ot(e),a(void 0)}):(ot(e),a(void 0))})}function Da(t){return Yt(mn,t,!1)}function _l(t){return Yt(Pa|Or,t,!0)}function Pn(t,e=0){return Yt(_n|e,t,!0)}function R(t,e=[],r=[]){Us(e,r,a=>{Yt(_n,()=>t(...a.map(s)),!0)})}function Zt(t,e=0){var r=Yt(ir|e,t,!0);return r}function st(t,e=!0){return Yt(Kt|Or,t,!0,e)}function Ys(t){var e=t.teardown;if(e!==null){const r=wr,a=Re;Gn(!0),pt(null);try{e.call(null)}finally{Gn(r),pt(a)}}}function Zs(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&Lr(()=>{n.abort(Qr)});var a=r.next;(r.f&br)!==0?r.parent=null:ot(r,e),r=a}}function bl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Kt)===0&&ot(e),e=r}}function ot(t,e=!0){var r=!1;(e||(t.f&_i)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(yl(t.nodes_start,t.nodes_end),r=!0),Zs(t,e&&!r),ya(t,0),vt(t,yr);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Ys(t);var n=t.parent;n!==null&&n.first!==null&&Xs(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function yl(t,e){for(;t!==null;){var r=t===e?null:ta(t);t.remove(),t=r}}function Xs(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Qt(t,e){var r=[];kn(t,r,!0),eo(r,()=>{ot(t),e&&e()})}function eo(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function kn(t,e,r){if((t.f&Nt)===0){if(t.f^=Nt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&cr)!==0||(a.f&Kt)!==0;kn(a,e,i?r:!1),a=n}}}function Na(t){to(t,!0)}function to(t,e){if((t.f&Nt)!==0){t.f^=Nt,(t.f&lt)===0&&(vt(t,xt),_r(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&cr)!==0||(r.f&Kt)!==0;to(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Ar=!1;function Wn(t){Ar=t}let wr=!1;function Gn(t){wr=t}let Re=null,Mt=!1;function pt(t){Re=t}let Ce=null;function Lt(t){Ce=t}let Vt=null;function ro(t){Re!==null&&(Vt===null?Vt=[t]:Vt.push(t))}let dt=null,wt=0,Pt=null;function wl(t){Pt=t}let ao=1,Jr=0,Ft=Jr;function Qn(t){Ft=t}let Xt=!1;function no(){return++ao}function Ca(t){var e=t.f;if((e&xt)!==0)return!0;if((e&lr)!==0){var r=t.deps,a=(e&Et)!==0;if(r!==null){var n,i,o=(e&ba)!==0,l=a&&Ce!==null&&!Xt,d=r.length;if((o||l)&&(Ce===null||(Ce.f&yr)===0)){var v=t,h=v.parent;for(n=0;n<d;n++)i=r[n],(o||!i?.reactions?.includes(v))&&(i.reactions??=[]).push(v);o&&(v.f^=ba),l&&h!==null&&(h.f&Et)===0&&(v.f^=Et)}for(n=0;n<d;n++)if(i=r[n],Ca(i)&&Gs(i),i.wv>t.wv)return!0}(!a||Ce!==null&&!Xt)&&vt(t,lt)}return!1}function so(t,e,r=!0){var a=t.reactions;if(a!==null&&!Vt?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&mt)!==0?so(i,e,!1):e===i&&(r?vt(i,xt):(i.f&lt)!==0&&vt(i,lr),_r(i))}}function oo(t){var e=dt,r=wt,a=Pt,n=Re,i=Xt,o=Vt,l=Ke,d=Mt,v=Ft,h=t.f;dt=null,wt=0,Pt=null,Xt=(h&Et)!==0&&(Mt||!Ar||Re===null),Re=(h&(Kt|br))===0?t:null,Vt=null,Tr(t.ctx),Mt=!1,Ft=++Jr,t.ac!==null&&(Lr(()=>{t.ac.abort(Qr)}),t.ac=null);try{t.f|=rn;var p=t.fn,m=p(),g=t.deps;if(dt!==null){var _;if(ya(t,wt),g!==null&&wt>0)for(g.length=wt+dt.length,_=0;_<dt.length;_++)g[wt+_]=dt[_];else t.deps=g=dt;if(!Xt||(h&mt)!==0&&t.reactions!==null)for(_=wt;_<g.length;_++)(g[_].reactions??=[]).push(t)}else g!==null&&wt<g.length&&(ya(t,wt),g.length=wt);if(jr()&&Pt!==null&&!Mt&&g!==null&&(t.f&(mt|lr|xt))===0)for(_=0;_<Pt.length;_++)so(Pt[_],t);return n!==null&&n!==t&&(Jr++,Pt!==null&&(a===null?a=Pt:a.push(...Pt))),(t.f&hr)!==0&&(t.f^=hr),m}catch(y){return js(y)}finally{t.f^=rn,dt=e,wt=r,Pt=a,Re=n,Xt=i,Vt=o,Tr(l),Mt=d,Ft=v}}function xl(t,e){let r=e.reactions;if(r!==null){var a=hi.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&mt)!==0&&(dt===null||!dt.includes(e))&&(vt(e,lr),(e.f&(Et|ba))===0&&(e.f^=ba),Ws(e),ya(e,0))}function ya(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)xl(t,r[a])}function Yr(t){var e=t.f;if((e&yr)===0){vt(t,lt);var r=Ce,a=Ar;Ce=t,Ar=!0;try{(e&ir)!==0?bl(t):Zs(t),Ys(t);var n=oo(t);t.teardown=typeof n=="function"?n:null,t.wv=ao;var i;As&&Fi&&(t.f&xt)!==0&&t.deps}finally{Ar=a,Ce=r}}}async function Sl(){await Promise.resolve(),Xi()}function s(t){var e=t.f,r=(e&mt)!==0;if(Re!==null&&!Mt){var a=Ce!==null&&(Ce.f&yr)!==0;if(!a&&!Vt?.includes(t)){var n=Re.deps;if((Re.f&rn)!==0)t.rv<Jr&&(t.rv=Jr,dt===null&&n!==null&&n[wt]===t?wt++:dt===null?dt=[t]:(!Xt||!dt.includes(t))&&dt.push(t));else{(Re.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Re]:i.includes(Re)||i.push(Re)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&Et)===0&&(o.f^=Et)}if(wr){if(rr.has(t))return rr.get(t);if(r){o=t;var d=o.v;return((o.f&lt)===0&&o.reactions!==null||io(o))&&(d=xn(o)),rr.set(o,d),d}}else r&&(o=t,Ca(o)&&Gs(o));if((t.f&hr)!==0)throw t.v;return t.v}function io(t){if(t.v===Xe)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(rr.has(e)||(e.f&mt)!==0&&io(e))return!0;return!1}function xr(t){var e=Mt;try{return Mt=!0,t()}finally{Mt=e}}const $l=-7169;function vt(t,e){t.f=t.f&$l|e}function Pl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const kl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function El(t){return kl.includes(t)}const Al={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Tl(t){return t=t.toLowerCase(),Al[t]??t}const Ml=["touchstart","touchmove"];function Dl(t){return Ml.includes(t)}const lo=new Set,sn=new Set;function En(t,e,r,a={}){function n(i){if(a.capture||Gr.call(e,i),!i.cancelBubble)return Lr(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?ar(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function on(t,e,r,a={}){var n=En(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function ga(t,e,r,a,n){var i={capture:a,passive:n},o=En(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&$n(()=>{e.removeEventListener(t,o,i)})}function Ve(t){for(var e=0;e<t.length;e++)lo.add(t[e]);for(var r of sn)r(t)}let Vn=null;function Gr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Vn=t;var o=0,l=Vn===t&&t.__root;if(l){var d=n.indexOf(l);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var v=n.indexOf(e);if(v===-1)return;d<=v&&(o=d)}if(i=n[o]||t.target,i!==e){tn(t,"currentTarget",{configurable:!0,get(){return i||r}});var h=Re,p=Ce;pt(null),Lt(null);try{for(var m,g=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+a];if(y!=null&&(!i.disabled||t.target===i))if(ea(y)){var[x,...$]=y;x.apply(i,[t,...$])}else y.call(i,t)}catch(C){m?g.push(C):m=C}if(t.cancelBubble||_===e||_===null)break;i=_}if(m){for(let C of g)queueMicrotask(()=>{throw C});throw m}}finally{t.__root=e,delete t.currentTarget,pt(h),Lt(p)}}}function co(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Cr(t,e){var r=Ce;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function w(t,e){var r=(e&Li)!==0,a=(e&Bi)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=co(i?t:"<!>"+t),r||(n=Nr(n)));var o=a||Vs?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=Nr(o),d=o.lastChild;Cr(l,d)}else Cr(o,o);return o}}function Nl(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=co(n),l=Nr(o);i=Nr(l)}var d=i.cloneNode(!0);return Cr(d,d),d}}function Cl(t,e){return Nl(t,e,"svg")}function gt(t=""){{var e=Jt(t+"");return Cr(e,e),e}}function ee(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Jt();return t.append(e,r),Cr(e,r),t}function f(t,e){t!==null&&t.before(e)}let wa=!0;function Fn(t){wa=t}function N(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Il(t,e){return Rl(t,e)}const kr=new Map;function Rl(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){ul();var l=new Set,d=p=>{for(var m=0;m<p.length;m++){var g=p[m];if(!l.has(g)){l.add(g);var _=Dl(g);e.addEventListener(g,Gr,{passive:_});var y=kr.get(g);y===void 0?(document.addEventListener(g,Gr,{passive:_}),kr.set(g,1)):kr.set(g,y+1)}}};d(pn(lo)),sn.add(d);var v=void 0,h=ml(()=>{var p=r??e.appendChild(Jt());return rl(p,{pending:()=>{}},m=>{if(i){J({});var g=Ke;g.c=i}n&&(a.$$events=n),wa=o,v=t(m,a)||{},wa=!0,i&&Y()}),()=>{for(var m of l){e.removeEventListener(m,Gr);var g=kr.get(m);--g===0?(document.removeEventListener(m,Gr),kr.delete(m)):kr.set(m,g)}sn.delete(d),p!==r&&p.parentNode?.removeChild(p)}});return Ol.set(v,h),v}let Ol=new WeakMap;function k(t,e,r=!1){var a=t,n=null,i=null,o=Xe,l=r?cr:0,d=!1;const v=(g,_=!0)=>{d=!0,m(_,g)};var h=null;function p(){h!==null&&(h.lastChild.remove(),a.before(h),h=null);var g=o?n:i,_=o?i:n;g&&Na(g),_&&Qt(_,()=>{o?i=null:n=null})}const m=(g,_)=>{if(o!==(o=g)){var y=Ma(),x=a;if(y&&(h=document.createDocumentFragment(),h.append(x=Jt())),o?n??=_&&st(()=>_(x)):i??=_&&st(()=>_(x)),y){var $=Be,C=o?n:i,S=o?i:n;C&&$.skipped_effects.delete(C),S&&$.skipped_effects.add(S),$.add_callback(p)}else p()}};Zt(()=>{d=!1,e(v),d||m(null,null)},l)}function ql(t,e,r){var a=t,n=Xe,i,o,l=null,d=jr()?Vi:Rs;function v(){i&&Qt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Zt(()=>{if(d(n,n=e())){var h=a,p=Ma();p&&(l=document.createDocumentFragment(),l.append(h=Jt())),o=st(()=>r(h)),p?Be.add_callback(v):v()}})}function Ir(t,e){return e}function jl(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)kn(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var d=r.parentNode;dl(d),d.append(r),a.clear(),Ot(t,e[0].prev,e[i-1].next)}eo(n,()=>{for(var v=0;v<i;v++){var h=e[v];l||(a.delete(h.k),Ot(t,h.prev,h.next)),ot(h.e,!l)}})}function tt(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},d=(e&Cs)!==0;if(d){var v=t;o=v.appendChild(Jt())}var h=null,p=!1,m=new Map,g=wn(()=>{var $=r();return ea($)?$:$==null?[]:pn($)}),_,y;function x(){Ll(y,_,l,m,o,n,e,a,r),i!==null&&(_.length===0?h?Na(h):h=st(()=>i(o)):h!==null&&Qt(h,()=>{h=null}))}Zt(()=>{y??=Ce,_=s(g);var $=_.length;if(!(p&&$===0)){p=$===0;var C,S,A,P;if(Ma()){var M=new Set,E=Be;for(S=0;S<$;S+=1){A=_[S],P=a(A,S);var T=l.items.get(P)??m.get(P);T?(e&(ka|Ea))!==0&&uo(T,A,S,e):(C=vo(null,l,null,null,A,P,S,n,e,r,!0),m.set(P,C)),M.add(P)}for(const[te,B]of l.items)M.has(te)||E.skipped_effects.add(B.e);E.add_callback(x)}else x();s(g)}})}function Ll(t,e,r,a,n,i,o,l,d){var v=(o&Di)!==0,h=(o&(ka|Ea))!==0,p=e.length,m=r.items,g=r.first,_=g,y,x=null,$,C=[],S=[],A,P,M,E;if(v)for(E=0;E<p;E+=1)A=e[E],P=l(A,E),M=m.get(P),M!==void 0&&(M.a?.measure(),($??=new Set).add(M));for(E=0;E<p;E+=1){if(A=e[E],P=l(A,E),M=m.get(P),M===void 0){var T=a.get(P);if(T!==void 0){a.delete(P),m.set(P,T);var te=x?x.next:_;Ot(r,x,T),Ot(r,T,te),Qa(T,te,n),x=T}else{var B=_?_.e.nodes_start:n;x=vo(B,r,x,x===null?r.first:x.next,A,P,E,i,o,d)}m.set(P,x),C=[],S=[],_=x.next;continue}if(h&&uo(M,A,E,o),(M.e.f&Nt)!==0&&(Na(M.e),v&&(M.a?.unfix(),($??=new Set).delete(M))),M!==_){if(y!==void 0&&y.has(M)){if(C.length<S.length){var z=S[0],W;x=z.prev;var he=C[0],ye=C[C.length-1];for(W=0;W<C.length;W+=1)Qa(C[W],z,n);for(W=0;W<S.length;W+=1)y.delete(S[W]);Ot(r,he.prev,ye.next),Ot(r,x,he),Ot(r,ye,z),_=z,x=ye,E-=1,C=[],S=[]}else y.delete(M),Qa(M,_,n),Ot(r,M.prev,M.next),Ot(r,M,x===null?r.first:x.next),Ot(r,x,M),x=M;continue}for(C=[],S=[];_!==null&&_.k!==P;)(_.e.f&Nt)===0&&(y??=new Set).add(_),S.push(_),_=_.next;if(_===null)continue;M=_}C.push(M),x=M,_=M.next}if(_!==null||y!==void 0){for(var ge=y===void 0?[]:pn(y);_!==null;)(_.e.f&Nt)===0&&ge.push(_),_=_.next;var H=ge.length;if(H>0){var le=(o&Cs)!==0&&p===0?n:null;if(v){for(E=0;E<H;E+=1)ge[E].a?.measure();for(E=0;E<H;E+=1)ge[E].a?.fix()}jl(r,ge,le)}}v&&ar(()=>{if($!==void 0)for(M of $)M.a?.apply()}),t.first=r.first&&r.first.e,t.last=x&&x.e;for(var re of a.values())ot(re.e);a.clear()}function uo(t,e,r,a){(a&ka)!==0&&Dr(t.v,e),(a&Ea)!==0?Dr(t.i,r):t.i=r}function vo(t,e,r,a,n,i,o,l,d,v,h){var p=(d&ka)!==0,m=(d&Ni)===0,g=p?m?ll(n,!1,!1):nr(n):n,_=(d&Ea)===0?o:nr(o),y={i:_,v:g,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var x=document.createDocumentFragment();x.append(t=Jt())}return y.e=st(()=>l(t,g,_,v),Qi),y.e.prev=r&&r.e,y.e.next=a&&a.e,r===null?h||(e.first=y):(r.next=y,r.e.next=y.e),a!==null&&(a.prev=y,a.e.prev=y.e),y}finally{}}function Qa(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=ta(i);n.before(i),i=o}}function Ot(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ve(t,e,...r){var a=t,n=ie,i;Zt(()=>{n!==(n=e())&&(i&&(ot(i),i=null),i=st(()=>n(a,...r)))},cr)}function gr(t,e,r){var a=t,n,i,o=null,l=null;function d(){i&&(Qt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Zt(()=>{if(n!==(n=e())){var v=Ma();if(n){var h=a;v&&(o=document.createDocumentFragment(),o.append(h=Jt()),i&&Be.skipped_effects.add(i)),l=st(()=>r(h,n))}v?Be.add_callback(d):d()}},cr)}function Bl(t,e,r,a,n,i){var o,l,d=null,v=t,h;Zt(()=>{const p=e()||null;var m=Ui;p!==o&&(h&&(p===null?Qt(h,()=>{h=null,l=null}):p===l?Na(h):(ot(h),Fn(!1))),p&&p!==l&&(h=st(()=>{if(d=document.createElementNS(m,p),Cr(d,d),a){var g=d.appendChild(Jt());a(d,g)}Ce.nodes_end=d,v.before(d)})),o=p,o&&(l=o),Fn(!0))},cr)}function zl(t,e){var r=void 0,a;Zt(()=>{r!==(r=e())&&(a&&(ot(a),a=null),r&&(a=st(()=>{Da(()=>r(t))})))})}function fo(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=fo(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Ul(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=fo(t))&&(a&&(a+=" "),a+=e);return a}function Hl(t){return typeof t=="object"?Ul(t):t??""}const Kn=[...` 	
\r\f \v\uFEFF`];function Wl(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Kn.includes(a[o-1]))&&(l===a.length||Kn.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Jn(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Va(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Gl(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];a&&d.push(...Object.keys(a).map(Va)),n&&d.push(...Object.keys(n).map(Va));var v=0,h=-1;const y=t.length;for(var p=0;p<y;p++){var m=t[p];if(l?m==="/"&&t[p-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[p+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&h===-1)h=p;else if(m===";"||p===y-1){if(h!==-1){var g=Va(t.substring(v,h).trim());if(!d.includes(g)){m!==";"&&p++;var _=t.substring(v,p).trim();r+=" "+_+";"}}v=p+1,h=-1}}}}return a&&(r+=Jn(a)),n&&(r+=Jn(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Ne(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=Wl(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var d in i){var v=!!i[d];(n==null||v!==!!n[d])&&t.classList.toggle(d,v)}return i}function Fa(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function ho(t,e,r,a){var n=t.__style;if(n!==e){var i=Gl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Fa(t,r?.[0],a[0]),Fa(t,r?.[1],a[1],"important")):Fa(t,r,a));return a}function xa(t,e,r=!1){if(t.multiple){if(e==null)return;if(!ea(e))return Wi();for(var a of t.options)a.selected=e.includes(Fr(a));return}for(a of t.options){var n=Fr(a);if(cl(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function po(t){var e=new MutationObserver(()=>{xa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),$n(()=>{e.disconnect()})}function Sa(t,e,r=e){var a=!0;Sn(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Fr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Fr(l)}r(o)}),Da(()=>{var n=e();if(xa(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=Fr(i),r(n))}t.__value=n,a=!1}),po(t)}function Fr(t){return"__value"in t?t.__value:t.value}const Hr=Symbol("class"),Wr=Symbol("style"),go=Symbol("is custom element"),mo=Symbol("is html");function Ql(t,e){var r=Ia(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Ka(t,e){var r=Ia(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function Vl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function sr(t,e,r,a){var n=Ia(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[yi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&_o(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Fl(t,e,r,a,n=!1,i=!1){var o=Ia(t),l=o[go],d=!o[mo],v=e||{},h=t.tagName==="OPTION";for(var p in e)p in r||(r[p]=null);r.class?r.class=Hl(r.class):r[Hr]&&(r.class=null),r[Wr]&&(r.style??=null);var m=_o(t);for(const A in r){let P=r[A];if(h&&A==="value"&&P==null){t.value=t.__value="",v[A]=P;continue}if(A==="class"){var g=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(t,g,P,a,e?.[Hr],r[Hr]),v[A]=P,v[Hr]=r[Hr];continue}if(A==="style"){ho(t,P,e?.[Wr],r[Wr]),v[A]=P,v[Wr]=r[Wr];continue}var _=v[A];if(!(P===_&&!(P===void 0&&t.hasAttribute(A)))){v[A]=P;var y=A[0]+A[1];if(y!=="$$")if(y==="on"){const M={},E="$$"+A;let T=A.slice(2);var x=El(T);if(Pl(T)&&(T=T.slice(0,-7),M.capture=!0),!x&&_){if(P!=null)continue;t.removeEventListener(T,v[E],M),v[E]=null}if(P!=null)if(x)t[`__${T}`]=P,Ve([T]);else{let te=function(B){v[A].call(this,B)};var S=te;v[E]=En(T,t,te,M)}else x&&(t[`__${T}`]=void 0)}else if(A==="style")sr(t,A,P);else if(A==="autofocus")vl(t,!!P);else if(!l&&(A==="__value"||A==="value"&&P!=null))t.value=t.__value=P;else if(A==="selected"&&h)Vl(t,P);else{var $=A;d||($=Tl($));var C=$==="defaultValue"||$==="defaultChecked";if(P==null&&!l&&!C)if(o[A]=null,$==="value"||$==="checked"){let M=t;const E=e===void 0;if($==="value"){let T=M.defaultValue;M.removeAttribute($),M.defaultValue=T,M.value=M.__value=E?T:null}else{let T=M.defaultChecked;M.removeAttribute($),M.defaultChecked=T,M.checked=E?T:!1}}else t.removeAttribute(A);else C||m.includes($)&&(l||typeof P!="string")?(t[$]=P,$ in o&&(o[$]=Xe)):typeof P!="function"&&sr(t,$,P)}}}return v}function ln(t,e,r=[],a=[],n,i=!1,o=!1){Us(r,a,l=>{var d=void 0,v={},h=t.nodeName==="SELECT",p=!1;if(Zt(()=>{var g=e(...l.map(s)),_=Fl(t,d,g,n,i,o);p&&h&&"value"in g&&xa(t,g.value);for(let x of Object.getOwnPropertySymbols(v))g[x]||ot(v[x]);for(let x of Object.getOwnPropertySymbols(g)){var y=g[x];x.description===Hi&&(!d||y!==d[x])&&(v[x]&&ot(v[x]),v[x]=st(()=>zl(t,()=>y))),_[x]=y}d=_}),h){var m=t;Da(()=>{xa(m,d.value,!0),po(m)})}p=!0})}function Ia(t){return t.__attributes??={[go]:t.nodeName.includes("-"),[mo]:t.namespaceURI===zi}}var Yn=new Map;function _o(t){var e=t.getAttribute("is")||t.nodeName,r=Yn.get(e);if(r)return r;Yn.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=pi(n);for(var o in a)a[o].set&&r.push(o);n=gn(n)}return r}const Kl=()=>performance.now(),Gt={tick:t=>requestAnimationFrame(t),now:()=>Kl(),tasks:new Set};function bo(){const t=Gt.now();Gt.tasks.forEach(e=>{e.c(t)||(Gt.tasks.delete(e),e.f())}),Gt.tasks.size!==0&&Gt.tick(bo)}function Jl(t){let e;return Gt.tasks.size===0&&Gt.tick(bo),{promise:new Promise(r=>{Gt.tasks.add(e={c:t,f:r})}),abort(){Gt.tasks.delete(e)}}}function Zn(t,e){Lr(()=>{t.dispatchEvent(new CustomEvent(e))})}function Yl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Xn(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Yl(n.trim());e[o]=i.trim()}return e}const Zl=t=>t;function Xl(t,e,r,a){var n=(t&ji)!==0,i="in",o,l=e.inert,d=e.style.overflow,v,h;function p(){return Lr(()=>o??=r()(e,a?.()??{},{direction:i}))}var m={is_global:n,in(){e.inert=l,v?.abort(),Zn(e,"introstart"),v=yo(e,p(),h,1,()=>{Zn(e,"introend"),v?.abort(),v=o=void 0,e.style.overflow=d})},out(x){{x?.(),o=void 0;return}},stop:()=>{v?.abort()}},g=Ce;if((g.transitions??=[]).push(m),wa){var _=n;if(!_){for(var y=g.parent;y&&(y.f&cr)!==0;)for(;(y=y.parent)&&(y.f&ir)===0;);_=!y||(y.f&$a)!==0}_&&Da(()=>{xr(()=>m.in())})}}function yo(t,e,r,a,n){if(Er(e)){var i,o=!1;return ar(()=>{if(!o){var y=e({direction:"in"});i=yo(t,y,r,a,n)}}),{abort:()=>{o=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!e?.duration)return n(),{abort:ie,deactivate:ie,reset:ie,t:()=>a};const{delay:l=0,css:d,tick:v,easing:h=Zl}=e;var p=[];if(v&&v(0,1),d){var m=Xn(d(0,1));p.push(m,m)}var g=()=>1-a,_=t.animate(p,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var y=1-a,x=a-y,$=e.duration*Math.abs(x),C=[];if($>0){var S=!1;if(d)for(var A=Math.ceil($/16.666666666666668),P=0;P<=A;P+=1){var M=y+x*h(P/A),E=Xn(d(M,1-M));C.push(E),S||=E.overflow==="hidden"}S&&(t.style.overflow="hidden"),g=()=>{var T=_.currentTime;return y+x*h(T/$)},v&&Jl(()=>{if(_.playState!=="running")return!1;var T=g();return v(T,1-T),!0})}_=t.animate(C,{duration:$,fill:"forwards"}),_.onfinish=()=>{g=()=>a,v?.(a,1-a),n()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=ie)},deactivate:()=>{n=ie},reset:()=>{},t:()=>g()}}function Qe(t,e,r=e){var a=new WeakSet;Sn(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ja(t)?Ya(i):i,r(i),Be!==null&&a.add(Be),await Sl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),xr(e)==null&&t.value&&(r(Ja(t)?Ya(t.value):t.value),Be!==null&&a.add(Be)),Pn(()=>{var n=e();if(t===document.activeElement){var i=pa??Be;if(a.has(i))return}Ja(t)&&n===Ya(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function cn(t,e,r=e){Sn(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),xr(e)==null&&r(t.checked),Pn(()=>{var a=e();t.checked=!!a})}function Ja(t){var e=t.type;return e==="number"||e==="range"}function Ya(t){return t===""?null:+t}let ca=!1;function ec(t){var e=ca;try{return ca=!1,[t(),ca]}finally{ca=e}}const tc={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function pe(t,e,r){return new Proxy({props:t,exclude:e},tc)}const rc={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Er(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];Er(n)&&(n=n());const i=tr(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Er(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=tr(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===pr||e===Ds)return!1;for(let r of t.props)if(Er(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Er(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function _e(...t){return new Proxy({props:t},rc)}function de(t,e,r,a){var n=!qr||(r&Ii)!==0,i=(r&Oi)!==0,o=(r&qi)!==0,l=a,d=!0,v=()=>(d&&(d=!1,l=o?xr(a):a),l),h;if(i){var p=pr in t||Ds in t;h=tr(t,e)?.set??(p&&e in t?S=>t[e]=S:void 0)}var m,g=!1;i?[m,g]=ec(()=>t[e]):m=t[e],m===void 0&&a!==void 0&&(m=v(),h&&(n&&ki(),h(m)));var _;if(n?_=()=>{var S=t[e];return S===void 0?v():(d=!0,S)}:_=()=>{var S=t[e];return S!==void 0&&(l=void 0),S===void 0?l:S},n&&(r&Ri)===0)return _;if(h){var y=t.$$legacy;return(function(S,A){return arguments.length>0?((!n||!A||y||g)&&h(A?_():S),S):_()})}var x=!1,$=((r&Ci)!==0?Ta:wn)(()=>(x=!1,_()));i&&s($);var C=Ce;return(function(S,A){if(arguments.length>0){const P=A?s($):n&&i?Oe(S):S;return b($,P),x=!0,l!==void 0&&(l=P),S}return wr&&x||(C.f&yr)!==0?$.v:s($)})}function wo(t){Ke===null&&Ns(),qr&&Ke.l!==null?nc(Ke).m.push(t):Bt(()=>{const e=xr(t);if(typeof e=="function")return e})}function ac(t){Ke===null&&Ns(),wo(()=>()=>xr(t))}function nc(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const sc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(sc);const oc="modulepreload",ic=function(t){return"/"+t},es={},un=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let v=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var o=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");n=v(r.map(h=>{if(h=ic(h),h in es)return;es[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":oc,p||(g.as="script"),g.crossOrigin="",g.href=h,d&&g.setAttribute("nonce",d),document.head.appendChild(g),p)return new Promise((_,y)=>{g.addEventListener("load",_),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return n.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return e().catch(i)})};class ts extends Map{#e=new Map;#t=U(0);#a=U(0);#o=Ft||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#a.v=super.size}}#d(e){return Ft===this.#o?U(e):nr(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#c(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#d(0),a.set(e,n),b(this.#a,super.size),jt(l);else if(i!==r){jt(n);var d=l.reactions===null?null:new Set(l.reactions),v=d===null||!n.reactions?.every(h=>d.has(h));v&&jt(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#a,super.size),b(a,-1),jt(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#a,0);for(var r of e.values())b(r,-1);jt(this.#t),e.clear()}}#c(){s(this.#t);var e=this.#e;if(this.#a.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#d(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#c(),super.values()}entries(){return this.#c(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#a),super.size}}class lc{#e;#t;constructor(e,r){this.#e=e,this.#t=yn(r)}get current(){return this.#t(),this.#e()}}const cc=/\(.+\)/,uc=new Set(["all","print","screen","and","or","not","only"]);class dc extends lc{constructor(e,r){let a=cc.test(e)||e.split(/[\s,]+/).some(i=>uc.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>on(n,"change",i))}}const vc=typeof window<"u"?window:void 0;function fc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class hc{#e;#t;constructor(e={}){const{window:r=vc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=yn(n=>{const i=on(r,"focusin",n),o=on(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?fc(this.#e):null}}new hc;function pc(t){return typeof t=="function"}function gc(t,e){if(pc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function mc(t,e){let r=U(null);const a=Z(()=>gc(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const d=new Promise((v,h)=>{o=v,l=h});b(r,{timeout:null,runner:null,promise:d,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Dt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function ra(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function aa(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function na(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(d=>er(d.q.toString(),d.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const d=parseFloat(l.q);isNaN(d)||r.set(l.u,(r.get(l.u)||0)+d)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,d)=>{const v=a.get(d)||0,h=l-v;h>0&&(n.push({q:h,u:d}),i.push(er(h.toString(),d)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function ct(t){return t?.length?t.map(e=>er(e.q.toString(),e.u)).join(" et "):"-"}function er(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function Ra(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function xo(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function So(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function Oa(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Ra(e)}function An(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,d=a.get(o)||0,v=l-d;Math.abs(v)>.001&&n.push({q:v,u:o})}return n}function qa(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>er(i.q.toString(),i.u)).join(" et "),n=r.map(i=>er(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+er(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>er(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function $o(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function _c(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const bc=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Ra,calculateAndFormatMissing:na,calculateGlobalTotal:Oa,calculateTotalQuantityArray:aa,formatSingleQuantity:er,formatStockResult:qa,formatTotalQuantity:ct,generateRecipesWithDates:So,hasConversions:xo,matchesFilters:$o,safeJsonParse:Dt,slugify:_c,subtractQuantities:An,transformPurchasesToNumericQuantity:ra},Symbol.toStringTag,{value:"Module"}));function rs(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function yc(t){const e=Dt(t.specs)??null,r=aa(ra(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=na(a,r),o=Dt(t.stockReel)??null,l=ct(r),d=t.store?Dt(t.store):null,v=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:d,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:v,displayTotalNeeded:ct(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Dt(t.totalNeededOverride),displayTotalOverride:(()=>{const h=Dt(t.totalNeededOverride);return h?ct([h.totalOverride]):""})()}}function ua(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Dt(a):e.specsParsed,i=aa(ra(r??[])),o=ct(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:d,display:v}=na(l,i),h=t.stockReel??e.stockReel,p=h?Dt(h):e.stockParsed,m=t.store??e.store,g=m?Dt(m):e.storeInfo,_=p?`${p.quantity} ${p.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:m,stockReel:h,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:g,stockParsed:p,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:d,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:v,displayTotalNeeded:ct(l),totalNeededOverrideParsed:Dt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const y=Dt(t.totalNeededOverride??e.totalNeededOverride);return y?ct([y.totalOverride]):""})()}}class wc{#e=U(Oe([]));MAX_TOASTS=3;get toasts(){return[...s(this.#e)].sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,action:e.action};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source,action:r.action||n.action},this.#a(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#a(e)}#a(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const He=new wc;function ja(t){return[...t].sort()}function xc(t){return new Date(t)<new Date}function Sc(t){if(t.length===0)return!0;const e=new Date(La(t));return e.setHours(23,59,59,999),e<new Date}function Po(t){return t.length===0?null:ja(t)[0]}function La(t){return t.length===0?null:ja(t).pop()??null}function $c(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),ja(t).find(r=>new Date(r)>=e)||null}function Pc(t){if(t.length===0)return null;const e=ja(t),r=Sc(t),a=xc(e[0]),n=new Date;let i;return r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],{start:i,end:e[e.length-1]}}function ko(t){const e=$c(t),r=La(t);return!e||!r?null:{start:e,end:r}}function kc(t){const e=Po(t),r=La(t);return!e||!r?null:{start:e,end:r}}function Eo(t,e){const r=kc(e);return r?t.start===r.start&&t.end===r.end:!1}function Ec(t,e){const r=ko(e);return r?t.start===r.start&&t.end===r.end:!1}function Ac(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Kr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Za(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Tc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ct(i):"-",l=Mc(t,e,i),d=l.filter(h=>h.q>0),v=l.filter(h=>h.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:d,missingStockQuantities:v,availableStockFormatted:qa(l),missingStockFormatted:ct(v.map(h=>({q:Math.abs(h.q),u:h.u}))),hasAvailableStock:d.length>0,hasMissingStock:v.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function Mc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const d of t.purchases)Dc(d,e,n)&&i.push({q:d.quantity,u:d.unit});const o=[...a,...i],l=Ra(o);return An(l,r)}function Dc(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Nc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ct(r):"-",n=Ao(t,e[0],e[e.length-1],r),i=n.filter(v=>v.q>0),o=n.filter(v=>v.q<0),l=[...e].sort(),d=new Map;if(t.byDate)for(const[v,h]of Object.entries(t.byDate))h.recipes?.length&&d.set(v,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:qa(n),missingStockFormatted:ct(o.map(v=>({q:Math.abs(v.q),u:v.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:d}}function Cc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let d=0,v=0;for(const[y,x]of Object.entries(t.byDate)){const $=new Date(y);$>=a&&$<=n&&(i.push(y),d+=x.totalAssiettes||0,x.recipes?.length&&(o.set(y,x.recipes),v+=x.recipes.length),x.totalConsolidated&&x.totalConsolidated.forEach(({q:C,u:S})=>{l.set(S,(l.get(S)||0)+C)}))}const h=Array.from(l.entries()).map(([y,x])=>({q:x,u:y})),p=h.length>0?ct(h):"-",m=Ao(t,e,r,h),g=m.filter(y=>y.q>0),_=m.filter(y=>y.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:p,stockBalance:m,availableStockQuantities:g,missingStockQuantities:_,availableStockFormatted:qa(m),missingStockFormatted:ct(_.map(y=>({q:Math.abs(y.q),u:y.u}))),hasAvailableStock:g.length>0,hasMissingStock:_.length>0,totalRecipesInRange:v,totalPortionsInRange:d,datesInSelectedRange:i,recipesByDate:o}}function Ao(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const v of t.purchases)Ic(v,e,r,i)&&o.push({q:v.quantity,u:v.unit});const l=[...n,...o],d=Ra(l);return An(d,a)}function Ic(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n>=e&&n<=r}function Rc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class j{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}j.equal=(t,e)=>new j("equal",t,e).toString();j.notEqual=(t,e)=>new j("notEqual",t,e).toString();j.lessThan=(t,e)=>new j("lessThan",t,e).toString();j.lessThanEqual=(t,e)=>new j("lessThanEqual",t,e).toString();j.greaterThan=(t,e)=>new j("greaterThan",t,e).toString();j.greaterThanEqual=(t,e)=>new j("greaterThanEqual",t,e).toString();j.isNull=t=>new j("isNull",t).toString();j.isNotNull=t=>new j("isNotNull",t).toString();j.between=(t,e,r)=>new j("between",t,[e,r]).toString();j.startsWith=(t,e)=>new j("startsWith",t,e).toString();j.endsWith=(t,e)=>new j("endsWith",t,e).toString();j.select=t=>new j("select",void 0,t).toString();j.search=(t,e)=>new j("search",t,e).toString();j.orderDesc=t=>new j("orderDesc",t).toString();j.orderAsc=t=>new j("orderAsc",t).toString();j.orderRandom=()=>new j("orderRandom").toString();j.cursorAfter=t=>new j("cursorAfter",void 0,t).toString();j.cursorBefore=t=>new j("cursorBefore",void 0,t).toString();j.limit=t=>new j("limit",void 0,t).toString();j.offset=t=>new j("offset",void 0,t).toString();j.contains=(t,e)=>new j("contains",t,e).toString();j.notContains=(t,e)=>new j("notContains",t,e).toString();j.notSearch=(t,e)=>new j("notSearch",t,e).toString();j.notBetween=(t,e,r)=>new j("notBetween",t,[e,r]).toString();j.notStartsWith=(t,e)=>new j("notStartsWith",t,e).toString();j.notEndsWith=(t,e)=>new j("notEndsWith",t,e).toString();j.createdBefore=t=>j.lessThan("$createdAt",t);j.createdAfter=t=>j.greaterThan("$createdAt",t);j.createdBetween=(t,e)=>j.between("$createdAt",t,e);j.updatedBefore=t=>j.lessThan("$updatedAt",t);j.updatedAfter=t=>j.greaterThan("$updatedAt",t);j.updatedBetween=(t,e)=>j.between("$updatedAt",t,e);j.or=t=>new j("or",void 0,t.map(e=>JSON.parse(e))).toString();j.and=t=>new j("and",void 0,t.map(e=>JSON.parse(e))).toString();j.distanceEqual=(t,e,r,a=!0)=>new j("distanceEqual",t,[[e,r,a]]).toString();j.distanceNotEqual=(t,e,r,a=!0)=>new j("distanceNotEqual",t,[[e,r,a]]).toString();j.distanceGreaterThan=(t,e,r,a=!0)=>new j("distanceGreaterThan",t,[[e,r,a]]).toString();j.distanceLessThan=(t,e,r,a=!0)=>new j("distanceLessThan",t,[[e,r,a]]).toString();j.intersects=(t,e)=>new j("intersects",t,[e]).toString();j.notIntersects=(t,e)=>new j("notIntersects",t,[e]).toString();j.crosses=(t,e)=>new j("crosses",t,[e]).toString();j.notCrosses=(t,e)=>new j("notCrosses",t,[e]).toString();j.overlaps=(t,e)=>new j("overlaps",t,[e]).toString();j.notOverlaps=(t,e)=>new j("notOverlaps",t,[e]).toString();j.touches=(t,e)=>new j("touches",t,[e]).toString();j.notTouches=(t,e)=>new j("notTouches",t,[e]).toString();var as;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(as||(as={}));var To,Mo;class or{static custom(e){return e}static unique(e=7){const r=Rc(or,To,"m",Mo).call(or);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}To=or,Mo=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var ns;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(ns||(ns={}));var ss;(function(t){t.Totp="totp"})(ss||(ss={}));var os;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(os||(os={}));var is;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(is||(is={}));var ls;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(ls||(ls={}));var cs;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(cs||(cs={}));var us;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(us||(us={}));var ds;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(ds||(ds={}));var vs;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(vs||(vs={}));var fs;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(fs||(fs={}));var hs;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(hs||(hs={}));var ps;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(ps||(ps={}));function Do(t,e){const{operationName:r,maxAutoRetries:a=1,autoRetryDelay:n=1e3}=e;let i=1,o=null;return new Promise((l,d)=>{const v=async(h=!1)=>{try{h?o=He.loading(`Tentative de ${r}...`):i>1?o?He.update(o,{state:"loading",message:`${r} (Tentative ${i}/${a+1})...`}):o=He.loading(`${r} (Tentative ${i}/${a+1})...`):o=He.loading(`${r} en cours...`);const p=await t();o&&He.update(o,{state:"success",message:e.successMessage||`${r} réussie !`,action:void 0}),e.onSuccess?.(p),l(p)}catch(p){console.error(`[RetryUtils] Erreur ${r} (Tentative ${i}):`,p);const m=p instanceof Error?p.message:"Erreur inconnue";if(i<=a){i++,o&&He.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${n/1e3}s...`}),setTimeout(()=>v(!1),n);return}o&&He.update(o,{state:"error",message:`Échec ${r}: ${m}`,action:{label:"Réessayer",onClick:()=>{He.dismiss(o),v(!0)}}}),e.onError?.(p)}};v(!1)})}function No(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function _t(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Oc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function vr(){return localStorage.getItem("appwrite-user-name")||""}async function qc(t,e,r=100){try{const{databases:a,config:n}=await _t(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[j.greaterThan("$updatedAt",e),j.equal("mainId",t),j.limit(r),j.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function Co(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await _t();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[j.equal("mainId",t),j.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),j.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[j.greaterThan("$updatedAt",r),j.equal("mainId",t),j.limit(a),j.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Sr(t,e,r=!0){const{databases:a,config:n}=await _t();return r&&(e.updatedBy=vr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function Wt(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=No(a,e),i=await Oc(n),{databases:o,config:l}=await _t(),d=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),d}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function Io(t,e){try{const{databases:r,config:a}=await _t(),{slugify:n}=await un(async()=>{const{slugify:h}=await Promise.resolve().then(()=>bc);return{slugify:h}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},d={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:vr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,d);const v=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,d);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),v}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function Ro(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await Sr(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Oo(t,e){return Sr(t,{who:e})}async function dn(t,e){return Sr(t,{stockReel:e})}async function Tn(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await Sr(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function qo(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await Sr(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function jo(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await Sr(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Wt(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function Lo(t){const{databases:e,config:r}=await _t(),a={...t,createdBy:vr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,or.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Mn(t,e){try{const{databases:r,config:a}=await _t(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function Bo(t){try{const{databases:e,config:r}=await _t();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function zo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await _t(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[j.equal("$id",t),j.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Uo(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const d=o.some(g=>g.includes("products.")),v=o.some(g=>g.includes("purchases.")),h=o.some(g=>g.includes(".create")),p=o.some(g=>g.includes(".update")),m=o.some(g=>g.includes(".delete"));if(d){const g=l;g.updatedBy&&g.updatedBy!==vr()&&(h||p?He.info(`${g.updatedBy} a modifié le produit "${g.productName}"`,{source:"realtime-other"}):m&&He.info(`${g.updatedBy} a supprimé un produit`,{source:"realtime-other"})),h&&e.onProductCreate?e.onProductCreate(g):p&&e.onProductUpdate?e.onProductUpdate(g):m&&e.onProductDelete&&e.onProductDelete(g.$id)}else if(v){const g=l;if(g.createdBy&&g.createdBy!==vr()){const _=g.products?.[0]?.productName||"un produit";h&&g.who!==vr()?He.info(`${g.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):p&&g.who!==vr()?He.info(`${g.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):m&&He.info(`${g.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}h&&e.onPurchaseCreate?e.onPurchaseCreate(g):p&&e.onPurchaseUpdate?e.onPurchaseUpdate(g):m&&e.onPurchaseDelete&&e.onPurchaseDelete(g.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Ho(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await _t(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Wo(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await _t(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Dn(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await Do(()=>e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST"),{operationName:`batchUpdateProducts (${t.productIds.length} products, type: ${t.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!n)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr||n.responseBody}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Go(t,e,r,a){return Dn({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Qo(t,e,r,a="replace"){return Dn({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Vo(t,e,r,a={}){try{const{databases:n,config:i}=await _t(),d=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const h of r){const p={products:[e],mainId:t,quantity:h.q,unit:h.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:d.name,price:null,orderDate:null,deliveryDate:null,createdBy:d.$id,invoiceId:a.invoiceId,invoiceTotal:null},m=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,or.unique(),p);v.push(m)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${e}`),v}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Fo(t,e,r,a,n,i){try{const{databases:o,config:l}=await _t(),h=await(await window.AppwriteClient.getAccount()).get(),p=e||or.unique(),m=h.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const g={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:m||h.name,price:r,invoiceId:p,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:h.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,or.unique(),g);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function jc(t){try{const{databases:e,config:r}=await _t(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[j.equal("mainId",t),j.equal("status","expense"),j.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const gs=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Dn,batchUpdateStore:Go,batchUpdateWho:Qo,createExpensePurchase:Fo,createMainDocument:Wo,createManualProduct:Io,createPurchase:Lo,createQuickValidationPurchases:Vo,deletePurchase:Bo,enrichedProductToAppwriteProduct:No,loadMainEventData:Ho,loadOrphanPurchases:jc,loadPurchasesListByIds:zo,loadUpdatedPurchases:qc,removeTotalOverride:qo,subscribeToRealtime:Uo,syncProductsWithPurchases:Co,updateProduct:Sr,updateProductBatch:jo,updateProductStock:dn,updateProductStore:Ro,updateProductWho:Oo,updatePurchase:Mn,updateTotalOverride:Tn,upsertProduct:Wt},Symbol.toStringTag,{value:"Module"}));async function Lc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function ms(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Bc(t,e){if(!t)return!0;try{return(await Lc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Ko(t,e){const r=Oa(t.byDate),a=aa(ra([])),{numeric:n,display:i}=na(r,a);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:ct(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:""}}function zc(t,e){return t.map(r=>Ko(r,e))}class Uc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(d=>{d.key===this.LAST_SYNC_KEY?l.lastSync=d.value:d.key===this.ALL_DATES_KEY?l.allDates=d.value||[]:d.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=d.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Hc(t){const e=new Uc(t);return await e.open(),e}function Wc(t){return!!(t.isMerged||t.totalNeededOverride)}function Gc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function Qc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Map;for(const[i,o]of t)a.set(o.productHugoUuid,i);const n=new Set;for(const i of e.ingredients){const o=i.productSemanticKey||`${e.mainGroup_id}_${i.ingredientHugoUuid}`;n.add(o);const l=a.get(i.ingredientHugoUuid),d=l?t.get(l):void 0;if(d){if(Gc(d.totalNeededRaw,i.totalNeededRaw)){const h=Vc(d,i);if(h&&r.overrideConflicts.push(h),d.isMerged){const p=d.displayTotalNeeded;_s(d,i),r.mergedProductsUpdated.push({product:d,oldDisplayTotal:p,newDisplayTotal:d.displayTotalNeeded,currentOverride:d.totalNeededOverrideParsed,semanticKey:o})}else _s(d,i);r.updated.push(o)}t.set(o,d)}else{r.added.push(i);const v=Ko(i,e.mainGroup_id);t.set(v.$id,v)}}for(const[i,o]of t)n.has(i)||(r.removed.push(o),!Wc(o)&&!o.purchases?.length&&!o.stockReel&&!o.who?.length&&t.delete(i));return r.overrideConflicts.length>0&&await Fc(r.overrideConflicts),r.summary=Jc(r),r}function Vc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=Oa(e.byDate),a=ct(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Fc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await Tn(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function _s(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Kc(t)}function Kc(t){t.totalNeededArray=Oa(t.byDate),t.displayTotalNeeded=ct(t.totalNeededArray);const e=aa(ra(t.purchases)),{numeric:r,display:a}=na(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Jc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Yc{isMobileQuery=new dc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return He.toasts}get toast(){return He}#e=U(Oe({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=U(Oe({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}#a=U(Oe({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return s(this.#a)}set backgroundOperation(e){b(this.#a,e,!0)}}const At=new Yc;class da{#e=U();get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}#t;#a;constructor(e,r,a){this.data=e,this.#t=r,this.#a=a}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#o=Z(()=>{const e=this.#t(),r=this.#a();let a;if(e.start&&e.start===e.end)a=Tc(this.data,e.start);else if(Eo(e,r))a=Nc(this.data,r),a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]);else if(e.start&&e.end)a=Cc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#o)}set stats(e){b(this.#o,e)}}const bs=1e3;class Zc{#e=new ts;#t=new ts;#a=U(null);#o=U(null);#d=U(!1);#c=U(!1);#u=U(null);#l=U(!1);#v=U(!1);#i=U(null);#f=U(null);get currentMainId(){return s(this.#a)}#n=U(Oe([]));#h=U(Oe({start:null,end:null}));get dateRange(){return s(this.#h)}set dateRange(e){b(this.#h,e,!0)}#p=Z(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#p)}set hasSingleDateInRange(e){b(this.#p,e)}#m=Z(()=>s(this.#n).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(e){b(this.#m,e)}#b=Z(()=>{if(s(this.#n).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#b)}set isEventPassed(e){b(this.#b,e)}#s=null;#y=null;#_=U(!1);#g=null;#x=U(!1);#q=U();#S=U(Oe([]));get hasPendingConflicts(){return s(this.#S).length>0}get pendingConflicts(){return s(this.#S)}#r=U(Oe({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#c)}get error(){return s(this.#u)}get lastSync(){return s(this.#i)}get syncing(){return s(this.#l)}get availableDates(){return s(this.#n)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;this.dateRange={start:a,end:n}}isFullRange(){return Eo(this.dateRange,s(this.#n))}initializeDateRange(){const e=Pc(s(this.#n));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=ko(s(this.#n));e&&(this.dateRange=e)}isUpcomingRange(){return Ec(this.dateRange,s(this.#n))}get firstAvailableDate(){return Po(s(this.#n))}get lastAvailableDate(){return La(s(this.#n))}get realtimeConnected(){return s(this.#v)}#k=Z(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#k)}set enrichedProducts(e){b(this.#k,e)}#E=Z(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!$o(o,s(this.#r)))continue;let v=!1;o.byDate&&(v=Object.keys(o.byDate).some(h=>{const p=new Date(h);return p>=e&&p<=r})),(v||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#E)}set filteredProductsMap(e){b(this.#E,e)}#A=Z(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#A)}set stats(e){b(this.#A,e)}#T=Z(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#T)}set uniqueStores(e){b(this.#T,e)}#M=Z(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#M)}set uniqueWho(e){b(this.#M,e)}#D=Z(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#D)}set uniqueProductTypes(e){b(this.#D,e)}#N=Z(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#r).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#r).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#N)}set groupedFilteredProducts(e){b(this.#N,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#a)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#a,e,!0),b(this.#o,r,!0);try{this.#s=await Hc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#u,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await ms(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#f,n.hugoContentHash,!0),zc(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new da(l,()=>this.dateRange,()=>s(this.#n)))}),b(this.#n,[...n.allDates],!0),await Ho(e)||await Wo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#C()}this.initializeDateRange(),await this.#L(),await this.#Y(),b(this.#d,!0);const a=this.#J();this.#y=Uo(e,a),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#u,n,!0),console.error("[ProductsStore]",n,a),a}}async#j(){if(this.#s)try{const e=await this.#s.loadProducts();e.forEach((a,n)=>{a.status==="isSyncing"&&(a.status="active"),this.#e.set(n,new da(a,()=>this.dateRange,()=>s(this.#n)))});const r=await this.#s.loadMetadata();b(this.#i,r.lastSync,!0),b(this.#n,[...r.allDates],!0),b(this.#f,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#L(){if(s(this.#a)){b(this.#l,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#a)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#i)}`);const e=await Co(s(this.#a),{lastSync:s(this.#i),limit:bs});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#R(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new da(n,()=>this.dateRange,()=>s(this.#n)))}),s(this.#i)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#i)}`);const{loadUpdatedPurchases:r}=await un(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>gs);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#a),s(this.#i),bs);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#P(i,n)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#l,!1)}}}async#B(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Pr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#s.saveProducts(e),await this.#s.saveMetadata({lastSync:s(this.#i),allDates:[...s(this.#n)],hugoContentHash:s(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#Z(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Pr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#s.saveProducts(e),await this.#s.updateLastSync(s(this.#i)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#C(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Pr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#s.saveProducts(e),await this.#s.updateLastSync(s(this.#i)),await this.#s.updateAllDates([...s(this.#n)]),await this.#s.updateHugoContentHash(s(this.#f)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#$(e){if(!(!this.#s||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>{const n=Pr(a);return n.status==="isSyncing"&&(n.status="active"),this.#s.upsertProduct(n)});r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#i,new Date().toISOString(),!0)}async#I(){if(!s(this.#o)||s(this.#c))return!1;try{const e=await Bc(s(this.#f),s(this.#o));return e&&!s(this.#_)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#_,!0),await this.#U()),b(this.#q,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#U(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await ms(s(this.#o)),r=new Map;this.#e.forEach((n,i)=>r.set(i,n.data));const a=await Qc(r,e);if(console.log(`[ProductsStore  - hugo change] ${a.summary}`),a.overrideConflicts.length>0&&(b(this.#S,a.overrideConflicts,!0),He.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>At.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const n=a.removed.filter(i=>i.purchases?.length||i.stockReel||i.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#n,[...e.allDates],!0),b(this.#f,e.hugoContentHash,!0),this.initializeDateRange(),await this.#C(),(a.added.length||a.updated.length||a.removed.length)&&He.success(a.summary),b(this.#_,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),He.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#g&&clearInterval(this.#g),this.#g=setInterval(async()=>{await this.#I()},6e4)}#W(){this.#g&&(clearInterval(this.#g),this.#g=null)}#R(e,r){return r?ua(e,r):yc(e)}#X(e){e.length&&(e.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#w(e){const r=this.#e.get(e.$id),a=this.#R(e,r?.data);r?r.update(a):this.#e.set(e.$id,new da(a,()=>this.dateRange,()=>s(this.#n)))}#G(e){this.#e.delete(e)}async#Q(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#K(r,e),r}async#V(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await zo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#F(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#w(a)}),r.map(a=>a.$id)}#K(e,r){const a=rs(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[];if(!d.some(v=>v.$id===a.$id)){const v=ua({...l,purchases:[...d,a],status:"active"},l);n.push(v)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#P(e,r){const a=rs(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[],v=d.findIndex(h=>h.$id===a.$id);if(v>=0){const h=[...d];h[v]=a;const p=ua({...l,purchases:h,status:"active"},l);n.push(p)}else{const h=ua({...l,purchases:[...d,r],status:"active"},l);n.push(h)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#J(){return{onProductCreate:e=>{if(this.#w(e),this.#s){const r=this.#e.get(e.$id);r&&this.#s.upsertProduct(Pr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#w(e),this.#s){const r=this.#e.get(e.$id);r&&this.#s.upsertProduct(Pr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#G(e),this.#s&&this.#s.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#Q(e);await this.#$(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#V(e);await this.#$(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#F(e);await this.#$(r)},onConnect:()=>{b(this.#v,!0)},onDisconnect:()=>{b(this.#v,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=mc(e=>{s(this.#r).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#r).selectedProductTypes.indexOf(e);r>-1?s(this.#r).selectedProductTypes.splice(r,1):s(this.#r).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#r).selectedTemperatures.indexOf(e);r>-1?s(this.#r).selectedTemperatures.splice(r,1):s(this.#r).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#r).selectedProductTypes=[],s(this.#r).selectedTemperatures=[]}setGroupBy(e){s(this.#r).groupBy=e}toggleStore(e){const r=s(this.#r).selectedStores.indexOf(e);r>-1?s(this.#r).selectedStores.splice(r,1):s(this.#r).selectedStores.push(e)}toggleWho(e){const r=s(this.#r).selectedWho.indexOf(e);r>-1?s(this.#r).selectedWho.splice(r,1):s(this.#r).selectedWho.push(e)}clearStoreFilters(){s(this.#r).selectedStores=[]}clearWhoFilters(){s(this.#r).selectedWho=[]}handleSort(e){s(this.#r).sortColumn===e?s(this.#r).sortDirection=s(this.#r).sortDirection==="asc"?"desc":"asc":(s(this.#r).sortColumn=e,s(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#r).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#r).sortColumn],i=a[s(this.#r).sortColumn];return s(this.#r).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#r).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#r).sortDirection==="asc"?-1:1:n>i?s(this.#r).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?xo(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#n,[],!0),b(this.#i,null),this.#s&&await this.#s.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#y?.(),this.#y=null,this.#W(),this.#s&&(this.#s.close(),this.#s=null),console.log("[ProductsStore] Ressources nettoyées")}async#Y(){if(s(this.#a))try{const{loadOrphanPurchases:e}=await un(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>gs);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#a));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#O=Z(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const d=i.who||"Non défini";a[d]=(a[d]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const d=l.store||"Non défini";r[d]=(r[d]||0)+l.price;const v=l.who||"Non défini";a[v]=(a[v]||0)+l.price;const h={...l,_productName:o.productName};n.push(h)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#O)}set financialStats(e){b(this.#O,e)}}const K=new Zc;function ys(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Xc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const eu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var tu=Cl("<svg><!><!></svg>");function be(t,e){J(e,!0);const r=de(e,"color",3,"currentColor"),a=de(e,"size",3,24),n=de(e,"strokeWidth",3,2),i=de(e,"absoluteStrokeWidth",3,!1),o=de(e,"iconNode",19,()=>[]),l=pe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var d=tu();ln(d,p=>({...eu,...l,width:a(),height:a(),stroke:r(),"stroke-width":p,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var v=c(d);tt(v,17,o,Ir,(p,m)=>{var g=Z(()=>_a(s(m),2));let _=()=>s(g)[0],y=()=>s(g)[1];var x=ee(),$=O(x);Bl($,_,!0,(C,S)=>{ln(C,()=>({...y()}))}),f(p,x)});var h=u(v);ve(h,()=>e.children??ie),f(t,d),Y()}function Jo(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];be(t,_e({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Yo(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];be(t,_e({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ru(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];be(t,_e({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function au(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];be(t,_e({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function nu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];be(t,_e({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function su(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];be(t,_e({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Rr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];be(t,_e({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ou(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];be(t,_e({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Zo(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];be(t,_e({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function iu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];be(t,_e({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function lu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];be(t,_e({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function cu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];be(t,_e({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ws(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];be(t,_e({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function uu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];be(t,_e({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function du(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];be(t,_e({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function vu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];be(t,_e({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function xs(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];be(t,_e({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function fu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];be(t,_e({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function hu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];be(t,_e({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Ba(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];be(t,_e({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function pu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];be(t,_e({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function gu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];be(t,_e({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function va(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];be(t,_e({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Xo(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];be(t,_e({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ei(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];be(t,_e({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function mu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];be(t,_e({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function _u(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];be(t,_e({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function bu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];be(t,_e({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function yu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];be(t,_e({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ti(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];be(t,_e({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function wu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];be(t,_e({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function xu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];be(t,_e({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Su(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];be(t,_e({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function $u(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];be(t,_e({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ri(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];be(t,_e({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ai(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];be(t,_e({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Pu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];be(t,_e({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ku(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];be(t,_e({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function za(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];be(t,_e({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Eu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];be(t,_e({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Au(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];be(t,_e({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Nn(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];be(t,_e({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Tu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];be(t,_e({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Mu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];be(t,_e({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Du(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];be(t,_e({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Nu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];be(t,_e({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ni(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];be(t,_e({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function mr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];be(t,_e({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Cn(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];be(t,_e({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Zr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];be(t,_e({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function fr(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];be(t,_e({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function si(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];be(t,_e({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Cu(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];be(t,_e({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function oi(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];be(t,_e({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function sa(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];be(t,_e({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ii(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];be(t,_e({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function In(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];be(t,_e({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function ma(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];be(t,_e({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function li(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];be(t,_e({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Ct(t,e){J(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=pe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];be(t,_e({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=O(o);ve(l,()=>e.children??ie),f(n,o)},$$slots:{default:!0}})),Y()}function Iu(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function Ru(t,e){const r=t.filter(d=>!d.isSynced).map(d=>({productId:d.productId,productData:d.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(d){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",d)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(d=>d.missingQuantities.map(v=>({productId:d.productId,quantity:v.q,unit:v.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function Ou(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(m=>{m.productData&&(m.productData.mainId=t)});const a=Iu(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let m=[],g=0;for(const _ of e){const y=(_.isSynced?0:1)+_.missingQuantities.length;g+y>n?(m.length>0&&i.push(m),m=[_],g=y):(m.push(_),g+=y)}m.length>0&&i.push(m)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,d=0,v=0;for(let m=0;m<i.length;m++){const g=i[m];console.log(`[Appwrite Interactions] Exécution du lot ${m+1}/${i.length} (${g.length} produits)`);try{const _=await Ru(g,r),y=await Do(()=>qu(_),{operationName:`Lot ${m+1}/${i.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!y)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(y),y.success)l+=y.productsCreated,d+=y.purchasesCreated,v+=y.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${m+1}: ${y.error}`);break}}catch(_){const y=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${m+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:y,timestamp:new Date().toISOString()});break}}const h=o.every(m=>m.success),p=o.some(m=>!m.success);return{success:h,results:o,totalProductsCreated:l,totalPurchasesCreated:d,totalExpensesCreated:v,error:p?"Un ou plusieurs lots ont échoué":void 0}}async function qu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var ju=(t,e,r)=>e(s(r).id),Lu=w("<span> </span>"),Bu=w('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),zu=w('<span class="flex items-center gap-1"><!> </span>'),Uu=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Hu=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function Xr(t,e){J(e,!0);let r=de(e,"badgeSize",3,"btn-lg"),a=de(e,"color",3,"primary"),n=de(e,"badgeStyle",3,""),i=de(e,"onToggleItem",3,()=>{}),o=de(e,"showStats",3,!1),l=de(e,"showIcon",3,!0),d=U(Oe({}));Bt(()=>{const x={};e.items.forEach($=>{x[$.id]=$.selected??!0}),b(d,x,!0)});function v(x){s(d)[x]=!s(d)[x],i()(x)}const h=Z(()=>Object.values(s(d)).filter(Boolean).length),p=Z(()=>Object.values(s(d)).filter(x=>!x).length);var m=Hu(),g=O(m);tt(g,21,()=>e.items,x=>x.id,(x,$)=>{const C=Z(()=>s(d)[s($).id]);var S=Bu();S.__click=[ju,v,$];var A=c(S);{var P=W=>{var he=ee(),ye=O(he);gr(ye,()=>s($).icon,(ge,H)=>{H(ge,{class:"h-3 w-3",get title(){return s($).title}})}),f(W,he)};k(A,W=>{s($).icon&&W(P)})}var M=u(A,2),E=c(M),T=u(M,2);{var te=W=>{var he=Lu(),ye=c(he);R(()=>{Ne(he,1,`badge badge-sm badge-${a()??""}`),N(ye,s($).badge)}),f(W,he)};k(T,W=>{s($).badge&&W(te)})}var B=u(T,2);{var z=W=>{var he=ee(),ye=O(he);{var ge=le=>{Rr(le,{size:16})},H=le=>{Nn(le,{size:16})};k(ye,le=>{s(C)?le(ge):le(H,!1)})}f(W,he)};k(B,W=>{l()&&W(z)})}R(()=>{Ne(S,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(C)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),sr(S,"title",s(C)?"Retirer de la liste":"Réajouter à la liste"),N(E,s($).label)}),f(x,S)});var _=u(g,2);{var y=x=>{var $=Uu(),C=c($),S=c(C),A=c(S);Rr(A,{class:"text-success h-3 w-3"});var P=u(A),M=u(S,2);{var E=B=>{var z=zu(),W=c(z);Ct(W,{class:"text-error h-3 w-3"});var he=u(W);R(()=>N(he,` ${s(p)??""} retirés`)),f(B,z)};k(M,B=>{s(p)>0&&B(E)})}var T=u(C,2),te=c(T);R(()=>{N(P,` ${s(h)??""} actifs`),N(te,`Total: ${e.items.length??""} items`)}),f(x,$)};k(_,x=>{o()&&x(y)})}f(t,m),Y()}Ve(["click"]);function Wu(t,e){b(e,!s(e))}var Gu=w('<span class="text-base-content font-semibold"> </span>'),Qu=w('<div class="text-base-content/80 flex-1"> </div>'),Vu=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Fu=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Ku=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function ci(t,e){let r=de(e,"icon",3,mu),a=de(e,"class",3,""),n=de(e,"initiallyOpen",3,!1),i=r(),o=U(Oe(n())),l=Oe(e.children);var d=Ku(),v=c(d);v.__click=[Wu,o];var h=c(v),p=c(h);i(p,{size:24,class:"text-base-content me-4 flex-shrink-0"});var m=u(p,2);{var g=A=>{var P=Gu(),M=c(P);R(()=>N(M,e.title)),f(A,P)};k(m,A=>{e.title&&A(g)})}var _=u(h,2);{var y=A=>{var P=Qu(),M=c(P);R(()=>N(M,e.contentVisible)),f(A,P)};k(_,A=>{e.contentVisible&&A(y)})}var x=u(_,2);{var $=A=>{var P=Vu(),M=c(P),E=c(M);{var T=z=>{var W=gt("en savoir plus");f(z,W)},te=z=>{var W=gt("masquer");f(z,W)};k(E,z=>{s(o)?z(te,!1):z(T)})}var B=u(M,2);{let z=Z(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Zo(B,{get class(){return s(z)}})}f(A,P)};k(x,A=>{l&&A($)})}var C=u(v,2);{var S=A=>{var P=Fu(),M=c(P),E=c(M);ve(E,()=>e.children??ie),R(()=>Ne(P,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),f(A,P)};k(C,A=>{l&&A(S)})}R(()=>{Ne(d,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),ho(d,e.style),Ne(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),sr(v,"aria-expanded",s(o))}),f(t,d)}Ve(["click"]);var Ju=w('<div class="mb-1 text-xs opacity-70"> </div>'),Yu=(t,e,r)=>e(s(r)),Zu=w("<button><!> </button>"),Xu=w('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function Rn(t,e){J(e,!0);let r=de(e,"maxSuggestions",3,8),a=de(e,"buttonSize",3,"btn-xs"),n=de(e,"buttonVariant",3,"btn-soft"),i=de(e,"disabled",3,!1);const o=Z(()=>e.suggestions.slice(0,r()));function l(p){!i()&&!p.disabled&&e.onSuggestionClick(p)}var d=ee(),v=O(d);{var h=p=>{var m=Xu(),g=c(m);{var _=C=>{var S=Ju(),A=c(S);R(()=>N(A,e.title)),f(C,S)};k(g,C=>{e.title&&C(_)})}var y=u(g,2),x=c(y);Au(x,{class:"text-base-content/70 mr-1",size:14});var $=u(x,2);tt($,17,()=>s(o),C=>C.id,(C,S)=>{var A=Zu();A.__click=[Yu,l,S];var P=c(A);{var M=T=>{var te=ee(),B=O(te);gr(B,()=>s(S).icon,(z,W)=>{W(z,{class:"h-3 w-3"})}),f(T,te)};k(P,T=>{s(S).icon&&T(M)})}var E=u(P);R(()=>{Ne(A,1,`btn btn-primary ${a()??""} ${n()??""}`),A.disabled=i()||s(S).disabled,sr(A,"title",s(S).disabled?"Déjà sélectionné":s(S).label),N(E,` ${s(S).label??""}`)}),f(C,A)}),f(p,m)};k(v,p=>{s(o).length>0&&p(h)})}f(t,d),Y()}Ve(["click"]);const ed=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var td=w("<option> </option>"),rd=w('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function Ua(t,e){J(e,!0);let r=de(e,"quantity",15),a=de(e,"unit",15),n=de(e,"disabled",3,!1);var i=rd(),o=c(i),l=c(o),d=c(l);za(d,{class:"h-4 w-4 opacity-50"});var v=u(d,2),h=u(l,2),p=c(h);p.value=p.__value="";var m=u(p);tt(m,17,()=>ed,Ir,(g,_)=>{let y=()=>s(_).value,x=()=>s(_).label;var $=td(),C=c($),S={};R(()=>{N(C,x()),S!==(S=y())&&($.value=($.__value=y())??"")}),f(g,$)}),R(()=>{v.disabled=n(),h.disabled=n()}),Qe(v,r),Sa(h,a),f(t,i),Y()}var ad=w('<div><label class="input w-72"><!> <input/></label> <!></div>');function Br(t,e){J(e,!0);let r=de(e,"value",15),a=de(e,"suggestions",19,()=>[]),n=de(e,"disabled",3,!1),i=de(e,"flexCol",3,!1),o=pe(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=Z(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var d=ad(),v=c(d),h=c(v);fr(h,{class:"h-4 w-4 opacity-50"});var p=u(h,2);ln(p,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var m=u(v,2);{var g=_=>{Rn(_,{get suggestions(){return s(l)},onSuggestionClick:y=>r(y.label),buttonSize:"btn-xs"})};k(m,_=>{a().length>0&&_(g)})}R(()=>Ne(d,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Qe(p,r),f(t,d),Y()}var nd=w('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function oa(t,e){J(e,!0);let r=de(e,"value",15),a=de(e,"suggestions",19,()=>[]),n=de(e,"disabled",3,!1),i=de(e,"flexCol",3,!1);const o=Z(()=>a().map(g=>({id:g,label:g,disabled:g===r()})));var l=nd(),d=c(l),v=c(d);In(v,{class:"h-4 w-4 opacity-50"});var h=u(v,2);h.__keydown=function(...g){e.onkeydown?.apply(this,g)};var p=u(d,2);{var m=g=>{Rn(g,{get suggestions(){return s(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};k(p,g=>{a().length>0&&g(m)})}R(()=>{Ne(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),h.disabled=n()}),Qe(h,r),f(t,l),Y()}Ve(["keydown"]);var sd=w('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function zr(t,e){J(e,!0);let r=de(e,"value",15),a=de(e,"disabled",3,!1);var n=sd();R(()=>n.disabled=a()),Qe(n,r),f(t,n),Y()}var od=w('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function On(t,e){J(e,!0);let r=de(e,"value",15),a=de(e,"disabled",3,!1);var n=od(),i=c(n);gu(i,{class:"h-4 w-4 opacity-50"});var o=u(i,2);R(()=>o.disabled=a()),Qe(o,r),f(t,n),Y()}var id=w('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),ld=w(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function ui(t,e){J(e,!0);let r=de(e,"status",15),a=de(e,"deliveryDate",15),n=de(e,"disabled",3,!1);var i=ld(),o=c(i),l=c(o),d=c(l);d.value=d.__value="delivered";var v=u(d);v.value=v.__value="ordered";var h=u(l,2),p=u(o,2);{var m=g=>{var _=id(),y=u(c(_),2);R(()=>y.disabled=n()),Qe(y,a),f(g,_)};k(p,g=>{r()==="ordered"&&g(m)})}R(()=>{l.disabled=n(),Ne(h,1,`label ${r()==="delivered"?"":"hidden"}`)}),Sa(l,r),f(t,i),Y()}function Ss(t,e,r){s(e)||r.onClose()}var cd=w('<div class="alert alert-error"><!> <span> </span></div>'),ud=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),dd=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),vd=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),fd=w("<!> ",1),hd=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!> <!></div> <!> <div><!></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function pd(t,e){J(e,!0);let r=U(!1),a=U(null),n=U(null),i=Oe({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=U(Oe(new Set));Bt(()=>{b(o,new Set(e.products.map(I=>I.$id)),!0)});const l=Z(()=>e.products.filter(I=>s(o).has(I.$id))),d=Z(()=>s(l).length!==0),v=Z(()=>{const I=K.dateRange;let D="";return I?.start&&I?.end&&(I.start===I.end?D=` - ${Kr(I.start)}`:D=` - Du ${Kr(I.start)} au ${Kr(I.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${D}`});async function h(){if(!s(d)||s(r))return;b(r,!0),b(a,null),b(n,null);const I=`FACTURE_${Date.now()}`,D=s(l).map(oe=>oe.$id);K.setSyncStatus(D,!0),At.backgroundOperation={isRunning:!0,name:`Achat groupé (${s(l).length} produits)`,progress:0};const Q=[];for(const oe of s(l)){const se=(K.getProductModelById(oe.$id)?.stats.missingQuantities||[]).filter(fe=>fe.q<0).map(fe=>({...fe,q:Math.abs(fe.q)}));Q.push({productId:oe.$id,isSynced:oe.isSynced,productData:oe,missingQuantities:se})}const ce={invoiceId:I,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(l).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${Q.length} produits...`),e.onClose();try{const oe=await Ou(K.currentMainId,Q,ce);if(oe.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${oe.totalProductsCreated} produits synchronisés, ${oe.totalPurchasesCreated} achats créés, ${oe.totalExpensesCreated} dépenses globales`),He.success(`Achat groupé réussi ! ${oe.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(oe.error||"Erreur lors de la création de l'achat groupé")}catch(oe){const Pe=oe instanceof Error?oe.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",oe),He.error(`Erreur achat groupé: ${Pe}`),K.clearSyncStatus()}finally{b(r,!1),At.backgroundOperation={isRunning:!1,name:"",progress:0}}}function p(I){const D=new Set(s(o));D.has(I)?D.delete(I):D.add(I),b(o,D,!0)}const m=Z(()=>e.products.map(I=>{const D=K.getProductModelById(I.$id);return{id:I.$id,label:I.productName,title:`${I.productName} - Manque: ${D?.stats.formattedMissingQuantities||"-"}`,badge:D?.stats.formattedMissingQuantities||"-"}}));var g=hd(),_=c(g),y=c(_),x=c(y),$=c(x);mr($,{class:"h-5 w-5"});var C=u($),S=u(x,2);S.__click=[Ss,r,e];var A=c(S);Ct(A,{class:"h-4 w-4"});var P=u(y,2),M=c(P);{var E=I=>{var D=cd(),Q=c(D);sa(Q,{class:"h-4 w-4"});var ce=u(Q,2),oe=c(ce);R(()=>N(oe,s(a))),f(I,D)};k(M,I=>{s(a)&&I(E)})}var T=u(M,2);{var te=I=>{var D=ud(),Q=c(D);Rr(Q,{class:"h-4 w-4"});var ce=u(Q,2),oe=c(ce),Pe=u(oe);{var se=Ee=>{var qe=gt("+ 1 dépense globale");f(Ee,qe)};k(Pe,Ee=>{s(n).expense&&Ee(se)})}var fe=u(Pe,2);{var xe=Ee=>{var qe=gt();R(()=>N(qe,`(traité en ${s(n).batches??""} lots)`)),f(Ee,qe)};k(fe,Ee=>{s(n).batches&&s(n).batches>1&&Ee(xe)})}R(()=>N(oe,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),f(I,D)};k(T,I=>{s(n)&&I(te)})}var B=u(T,2),z=c(B);ci(z,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(I,D)=>{var Q=dd();f(I,Q)},$$slots:{default:!0}});var W=u(B,2),he=u(c(W),2),ye=c(he);Br(ye,{get suggestions(){return K.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(I){i.store=I}});var ge=u(ye,2);oa(ge,{get suggestions(){return K.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(I){i.who=I}});var H=u(ge,2);On(H,{get disabled(){return s(r)},get value(){return i.expense},set value(I){i.expense=I}});var le=u(he,2);ui(le,{get disabled(){return s(r)},get status(){return i.status},set status(I){i.status=I},get deliveryDate(){return i.deliveryDate},set deliveryDate(I){i.deliveryDate=I}});var re=u(le,2),X=c(re);zr(X,{get disabled(){return s(r)},get value(){return i.notes},set value(I){i.notes=I}});var ae=u(W,2),$e=u(c(ae),2);Xr($e,{get items(){return s(m)},onToggleItem:p,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ke=u(ae,2),G=c(ke);G.__click=[Ss,r,e];var F=u(G,2);F.__click=h;var q=c(F);{var ne=I=>{var D=vd();f(I,D)},L=I=>{var D=fd(),Q=O(D);mr(Q,{class:"h-4 w-4"});var ce=u(Q);R(()=>N(ce,` Valider ${s(l).length??""} produit(s)`)),f(I,D)};k(q,I=>{s(r)?I(ne):I(L,!1)})}R(()=>{N(C,` ${s(v)??""}`),S.disabled=s(r),G.disabled=s(r),F.disabled=s(r)||!s(d)}),f(t,g),Y()}Ve(["click"]);function Xa(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var gd=w('<div class="alert alert-error text-sm"><!> <span> </span></div>'),md=(t,e)=>e(!0),_d=w('<span class="loading loading-spinner"></span>'),bd=w('<span class="loading loading-spinner"></span>'),yd=w('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function wd(t,e){J(e,!0);let r=de(e,"open",15,!1),a=U(!1),n=U(null),i=U(!1),o=U(Oe({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=Z(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),d=Z(()=>K.uniqueProductTypes.map(V=>({id:V,label:V})));async function v(V=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!K.currentMainId)throw new Error("Aucun événement principal sélectionné");const Se={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await Io(Se,K.currentMainId),b(i,!0),V?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(Se){console.error("Error creating product:",Se),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Bt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var h=yd();let p;var m=c(h),g=c(m);g.__click=[Xa,r,o,n];var _=c(g);Ct(_,{size:20});var y=u(g,4),x=c(y);{var $=V=>{var Se=gd(),ze=c(Se);sa(ze,{size:18});var rt=u(ze,2),at=c(rt);R(()=>N(at,s(n))),f(V,Se)};k(x,V=>{s(n)&&V($)})}var C=u(x,2),S=c(C),A=c(S),P=c(A),M=c(P);ku(M,{class:"text-base-content/50 h-5 w-5"});var E=u(M,2),T=u(A,2);Ua(T,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(V){s(o).quantity=V},get unit(){return s(o).unit},set unit(V){s(o).unit=V}});var te=u(S,2),B=c(te),z=c(B),W=c(z);Cu(W,{class:"text-base-content/50 h-5 w-5"});var he=u(W,2),ye=u(z,2);Rn(ye,{get suggestions(){return s(d)},onSuggestionClick:V=>s(o).productType=V.label,get disabled(){return s(a)}});var ge=u(te,2);Br(ge,{get suggestions(){return K.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(V){s(o).store=V}});var H=u(ge,2);oa(H,{get suggestions(){return K.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(V){s(o).who=V}});var le=u(H,2),re=c(le),X=c(re),ae=u(X,2),$e=c(ae);oi($e,{class:"h-4 w-4"});var ke=u(le,2),G=c(ke),F=c(G),q=u(F,2),ne=c(q);Cn(ne,{class:"h-4 w-4"});var L=u(C,2),I=c(L);I.__click=[Xa,r,o,n];var D=u(I,2),Q=c(D);Q.__click=[md,v];var ce=c(Q);{var oe=V=>{var Se=_d();f(V,Se)},Pe=V=>{Nn(V,{size:18})};k(ce,V=>{s(a)?V(oe):V(Pe,!1)})}var se=u(Q,2),fe=c(se);{var xe=V=>{var Se=bd();f(V,Se)};k(fe,V=>{s(a)&&V(xe)})}var Ee=u(m,2),qe=c(Ee);qe.__click=[Xa,r,o,n],R(V=>{p=Ne(h,1,"modal",null,p,V),C.disabled=s(a),E.disabled=s(a),he.disabled=s(a),X.disabled=s(a),F.disabled=s(a),I.disabled=s(a),Q.disabled=s(a)||!s(o).productName,se.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),ga("submit",y,V=>{V.preventDefault(),v(!1)}),Qe(E,()=>s(o).productName,V=>s(o).productName=V),Qe(he,()=>s(o).productType,V=>s(o).productType=V),cn(X,()=>s(o).pFrais,V=>s(o).pFrais=V),cn(F,()=>s(o).pSurgel,V=>s(o).pSurgel=V),f(t,h),Y()}Ve(["click"]);function vn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:ru};case"animaux":return{displayName:"Viandes et Poissons",icon:au};case"legumes":return{displayName:"Fruits et Légumes",icon:su};case"sucres":return{displayName:"Sucrées",icon:nu};case"lof":return{displayName:"L.O.F",icon:pu};case"autres":return{displayName:"Autres",icon:ou};case"epices":return{displayName:"Assaisonnements",icon:bu};case"frais":return{displayName:"Produits Frais",icon:Mu};default:return{displayName:t,icon:za}}}function fn(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function qn(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=en(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=en(n),a="l"}else r=en(t),a=e;return`${r} ${a}`}function en(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Ha(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function xd(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function hn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function $s(t){return t?Ha(t):"-"}function Sd(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=hn(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:$d(n),deliveryDate:n==="ordered"&&a.deliveryDate?xd(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:qn(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function $d(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class Pd{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=U(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=U(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#a=U("recettes");get currentTab(){return s(this.#a)}set currentTab(e){b(this.#a,e,!0)}#o=Z(()=>{const e=this.productId;return K.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#d=Z(()=>this.product?.who??[]);get whoList(){return s(this.#d)}set whoList(e){b(this.#d,e)}#c=Z(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#c)}set stockParsed(e){b(this.#c,e)}#u=Z(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#u)}set purchasesList(e){b(this.#u,e)}#l=Z(()=>this.product?.byDate?So(this.product.byDate):[]);get recipes(){return s(this.#l)}set recipes(e){b(this.#l,e)}#v=U(Oe({purchase:{quantity:null,unit:"",store:"",who:At.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#v)}set forms(e){b(this.#v,e,!0)}#i=U(Oe({overrideManagerEditMode:!1}));get uiStates(){return s(this.#i)}set uiStates(e){b(this.#i,e,!0)}#f=U(null);get editingPurchaseId(){return s(this.#f)}set editingPurchaseId(e){b(this.#f,e,!0)}#n=Z(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#n)}set editingPurchaseData(e){b(this.#n,e)}#h=U(null);get originalFormsSnapshot(){return s(this.#h)}set originalFormsSnapshot(e){b(this.#h,e,!0)}initForms(){const e=K.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=At.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#p=Z(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#p)}set hasChanges(e){b(this.#p,e)}#m=Z(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#m)}set hasAnyChanges(e){b(this.#m,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!K.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=fn(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Wt(this.product.$id,{},i=>K.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await Lo({products:[this.product.$id],mainId:K.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=fn(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Mn(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await Bo(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await dn(this.product.$id,JSON.stringify(e)):await Wt(this.product.$id,{stockReel:JSON.stringify(e)},r=>K.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await dn(this.product.$id,null):await Wt(this.product.$id,{stockReel:null},e=>K.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Oo(this.product.$id,e):await Wt(this.product.$id,{who:e},r=>K.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Ro(this.product.$id,e):await Wt(this.product.$id,{store:JSON.stringify(e)},r=>K.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Tn(this.product.$id,e,!0):await Wt(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>K.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await qo(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await jo(this.product.$id,e,r=>K.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=qn;formatDate=Ha}var kd=w('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Ed=w('<div class="text-xs text-base-content/60 mt-1"> </div>'),Ad=w('<div class="font-medium"> </div> <!>',1),Td=w('<pre class="text-xs"> </pre>'),Md=w('<span class="text-base-content/50 italic">Non défini</span>'),Dd=w('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Nd=w('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Wa(t,e){J(e,!0);let r=de(e,"title",3,"Événement terminé"),a=de(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=de(e,"showData",3,!0),i=de(e,"data",3,null),o=de(e,"dataLabel",3,"");var l=Nd(),d=c(l),v=c(d);ei(v,{class:"h-5 w-5 text-warning"});var h=u(v,2);wu(h,{class:"h-4 w-4 text-warning/70"});var p=u(h,2),m=c(p),g=u(d,2),_=c(g),y=u(g,2);{var x=$=>{var C=Dd(),S=c(C);{var A=te=>{var B=kd(),z=c(B);R(()=>N(z,`${o()??""} :`)),f(te,B)};k(S,te=>{o()&&te(A)})}var P=u(S,2),M=c(P);{var E=te=>{var B=gt();R(()=>N(B,i())),f(te,B)},T=te=>{var B=ee(),z=O(B);{var W=ye=>{var ge=gt();R(H=>N(ge,H),[()=>i().join(", ")]),f(ye,ge)},he=ye=>{var ge=ee(),H=O(ge);{var le=X=>{var ae=ee(),$e=O(ae);{var ke=F=>{var q=Ad(),ne=O(q),L=c(ne),I=u(ne,2);{var D=Q=>{var ce=Ed(),oe=c(ce);R(()=>N(oe,i().storeComment)),f(Q,ce)};k(I,Q=>{i().storeComment&&Q(D)})}R(()=>N(L,i().storeName)),f(F,q)},G=F=>{var q=Td(),ne=c(q);R(L=>N(ne,L),[()=>JSON.stringify(i(),null,2)]),f(F,q)};k($e,F=>{i().storeName?F(ke):F(G,!1)})}f(X,ae)},re=X=>{var ae=Md();f(X,ae)};k(H,X=>{typeof i()=="object"&&i()!==null?X(le):X(re,!1)},!0)}f(ye,ge)};k(z,ye=>{Array.isArray(i())&&i().length>0?ye(W):ye(he,!1)},!0)}f(te,B)};k(M,te=>{typeof i()=="string"||typeof i()=="number"?te(E):te(T,!1)})}f($,C)};k(y,$=>{n()&&i()&&$(x)})}R(()=>{N(m,r()),N(_,a())}),f(t,l),Y()}function Cd(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function Id(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function Rd(t,e){e().cancelEditPurchase()}var Od=w('<span class="loading loading-spinner loading-sm"></span>'),qd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),jd=w('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ld=w("<th>Actions</th>"),Bd=w('<span class="loading loading-spinner loading-sm"></span>'),zd=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Ud=(t,e,r)=>e(s(r)),Hd=(t,e,r)=>e(s(r).$id),Wd=w('<span class="loading loading-spinner loading-sm"></span>'),Gd=w('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Qd=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Vd=w('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Fd=w('<div class="space-y-4"><!></div> <!>',1);function Kd(t,e){J(e,!0);let r=de(e,"modalState",7),a=de(e,"isArchiveMode",3,!1);function n(y){return y.quantity!==null&&y.quantity!==0&&y.unit?.trim()!==""}function i(y){r().removePurchase(y)}function o(y){r().startEditPurchase(y)}var l=Fd(),d=O(l),v=c(d);{var h=y=>{Wa(y,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},p=y=>{var x=qd(),$=c(x),C=u(c($),2),S=c(C),A=c(S);Ua(A,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(H){r().forms.purchase.quantity=H},get unit(){return r().forms.purchase.unit},set unit(H){r().forms.purchase.unit=H}});var P=u(A,2);On(P,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(H){r().forms.purchase.price=H}});var M=u(P,2);Br(M,{get suggestions(){return K.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(H){r().forms.purchase.store=H}});var E=u(M,2);oa(E,{get suggestions(){return K.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(H){r().forms.purchase.who=H}});var T=u(S,2),te=c(T);zr(te,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(H){r().forms.purchase.notes=H}});var B=u(T,2);ui(B,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(H){r().forms.purchase.status=H},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(H){r().forms.purchase.deliveryDate=H}});var z=u(C,2),W=c(z);W.__click=[Cd,r];var he=c(W);{var ye=H=>{var le=Od();f(H,le)},ge=H=>{var le=gt("Ajouter l'achat");f(H,le)};k(he,H=>{r().loading?H(ye):H(ge,!1)})}R(()=>W.disabled=r().loading||!r().isPurchaseFormValid),f(y,x)};k(v,y=>{a()?y(h):y(p,!1)})}var m=u(d,2);{var g=y=>{var x=jd(),$=c(x);mr($,{class:"mx-auto mb-2 h-12 w-12"}),f(y,x)},_=y=>{var x=Vd(),$=c(x),C=c($),S=c(C),A=u(c(S),8);{var P=E=>{var T=Ld();f(E,T)};k(A,E=>{a()||E(P)})}var M=u(C);tt(M,21,()=>r().purchasesList,E=>E.$id,(E,T,te)=>{var B=ee(),z=O(B);{var W=ye=>{var ge=zd(),H=c(ge),le=c(H),re=c(le),X=u(re,2),ae=c(X);ae.value=ae.__value="kg";var $e=u(ae);$e.value=$e.__value="gr.";var ke=u($e);ke.value=ke.__value="l.";var G=u(ke);G.value=G.__value="ml";var F=u(G);F.value=F.__value="unité";var q=u(F);q.value=q.__value="bottes";var ne=u(H),L=c(ne),I=u(ne),D=c(I),Q=u(I),ce=c(Q),oe=c(ce);oe.value=oe.__value="ordered";var Pe=u(oe);Pe.value=Pe.__value="delivered";var se=u(Q),fe=c(se),xe=u(se),Ee=c(xe),qe=u(xe),V=c(qe),Se=u(qe),ze=c(Se),rt=u(Se),at=c(rt),Ie=c(at);Ie.__click=[Id,r,n];var Ze=c(Ie);{var zt=Ae=>{var Je=Bd();f(Ae,Je)},we=Ae=>{Du(Ae,{class:"h-3 w-3"})};k(Ze,Ae=>{r().loading?Ae(zt):Ae(we,!1)})}var De=u(Ie,2);De.__click=[Rd,r];var je=c(De);Ct(je,{class:"h-3 w-3"}),R(Ae=>Ie.disabled=Ae,[()=>r().loading||!n(s(T))]),Qe(re,()=>s(T).quantity,Ae=>s(T).quantity=Ae),Sa(X,()=>s(T).unit,Ae=>s(T).unit=Ae),Qe(L,()=>s(T).store,Ae=>s(T).store=Ae),Qe(D,()=>s(T).who,Ae=>s(T).who=Ae),Sa(ce,()=>s(T).status,Ae=>s(T).status=Ae),Qe(fe,()=>s(T).orderDate,Ae=>s(T).orderDate=Ae),Qe(Ee,()=>s(T).deliveryDate,Ae=>s(T).deliveryDate=Ae),Qe(V,()=>s(T).price,Ae=>s(T).price=Ae),Qe(ze,()=>s(T).notes,Ae=>s(T).notes=Ae),f(ye,ge)},he=ye=>{var ge=Qd(),H=c(ge),le=c(H),re=u(H),X=c(re),ae=u(re),$e=c(ae),ke=u(ae),G=c(ke),F=c(G),q=u(ke),ne=c(q),L=u(q),I=c(L),D=u(L),Q=c(D),ce=u(D),oe=c(ce),Pe=u(ce);{var se=fe=>{var xe=Gd(),Ee=c(xe),qe=c(Ee);qe.__click=[Ud,o,T];var V=c(qe);Zr(V,{class:"h-4 w-4"});var Se=u(qe,2);Se.__click=[Hd,i,T];var ze=c(Se);{var rt=Ie=>{var Ze=Wd();f(Ie,Ze)},at=Ie=>{Ct(Ie,{class:"h-4 w-4"})};k(ze,Ie=>{r().loading?Ie(rt):Ie(at,!1)})}R(()=>Se.disabled=r().loading),f(fe,xe)};k(Pe,fe=>{a()||fe(se)})}R((fe,xe,Ee,qe,V)=>{N(le,fe),N(X,s(T).store||"-"),N($e,s(T).who||"-"),Ne(G,1,`badge badge-sm ${xe??""}`),N(F,Ee),N(ne,qe),N(I,V),N(Q,s(T).price?`${s(T).price}€`:"-"),N(oe,s(T).notes||"-")},[()=>qn(s(T).quantity,s(T).unit),()=>hn(s(T).status).class,()=>hn(s(T).status).text,()=>$s(s(T).orderDate),()=>$s(s(T).deliveryDate)]),f(ye,ge)};k(z,ye=>{r().editingPurchaseId===s(T).$id?ye(W):ye(he,!1)})}f(E,B)}),f(y,x)};k(m,y=>{r().purchasesList.length===0?y(g):y(_,!1)})}f(t,l),Y()}Ve(["click"]);async function Jd(t,e){await e()?.removeStock()}var Yd=w(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Zd=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Xd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),ev=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),tv=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),rv=w('<span class="loading loading-spinner loading-xs"></span>'),av=w('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),nv=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),sv=w('<div class="space-y-4"><!></div> <!>',1);function ov(t,e){J(e,!0);let r=de(e,"modalState",7),a=de(e,"isArchiveMode",3,!1);var n=sv(),i=O(n),o=c(i);{var l=m=>{Wa(m,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},d=m=>{var g=Xd(),_=c(g),y=c(_),x=c(y),$=u(y,2),C=c($);ci(C,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(te,B)=>{var z=Yd();f(te,z)},$$slots:{default:!0}});var S=u($,2),A=c(S);Ua(A,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(te){r().forms.stock.quantity=te},get unit(){return r().forms.stock.unit},set unit(te){r().forms.stock.unit=te}});var P=u(S,2),M=c(P);zr(M,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(te){r().forms.stock.notes=te}});var E=u(P,2),T=c(E);T.__click=[Zd,r],R(te=>{N(x,`Déclarer le stock réel du ${te??""}`),T.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),f(m,g)};k(o,m=>{a()?m(l):m(d,!1)})}var v=u(i,2);{var h=m=>{var g=ev(),_=c(g);Jo(_,{class:"mx-auto mb-2 h-12 w-12"}),f(m,g)},p=m=>{var g=nv(),_=c(g),y=u(c(_),2),x=c(y),$=u(c(x),2),C=c($),S=u(x,2),A=u(c(S),2),P=c(A),M=u(S,2);{var E=B=>{var z=tv(),W=u(c(z),2),he=c(W);R(()=>N(he,r().stockParsed.notes)),f(B,z)};k(M,B=>{r().stockParsed.notes&&B(E)})}var T=u(y,2);{var te=B=>{var z=av(),W=c(z);W.__click=[Jd,r];var he=c(W);{var ye=H=>{var le=rv();f(H,le)},ge=H=>{var le=gt("Supprimer le stock");f(H,le)};k(he,H=>{r().loading?H(ye):H(ge,!1)})}R(()=>W.disabled=r().loading),f(B,z)};k(T,B=>{a()||B(te)})}R(B=>{N(C,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),N(P,B)},[()=>Ha(r().stockParsed.dateTime)]),f(m,g)};k(v,m=>{r().stockParsed?m(p,!1):m(h)})}f(t,n),Y()}Ve(["click"]);function iv(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var lv=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},cv=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),uv=w('<div class="space-y-4"><!></div>');function dv(t,e){J(e,!0);let r=de(e,"modalState",7),a=de(e,"isArchiveMode",3,!1),n=U("");const i=Z(()=>{const _=new Set([...K.uniqueWho,...r().forms.who]);return Array.from(_).map(y=>({id:y,label:y,selected:r().forms.who.includes(y)}))});function o(_){const y=_.trim();y&&!r().forms.who.includes(y)&&(r().forms.who=[...r().forms.who,y])}function l(_){r().forms.who=r().forms.who.filter(y=>y!==_)}function d(_){r().forms.who.includes(_)?l(_):o(_)}function v(){s(n).trim()&&(o(s(n)),b(n,""))}var h=uv(),p=c(h);{var m=_=>{Wa(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},g=_=>{var y=cv(),x=c(y),$=u(c(x),4),C=c($),S=c(C),A=c(S);In(A,{class:"h-4 w-4 opacity-50"});var P=u(A,2);P.__keydown=[lv,v];var M=u(S,2);M.__click=v;var E=c(M);ii(E,{size:16});var T=u(C,2),te=u(c(T),2);Xr(te,{get items(){return s(i)},onToggleItem:d,showIcon:!0,badgeSize:"btn-sm"});var B=u(x,2),z=c(B);z.__click=[iv,r,n],R(W=>{P.disabled=r().loading,M.disabled=W,z.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Qe(P,()=>s(n),W=>b(n,W)),f(_,y)};k(p,_=>{a()?_(m):_(g,!1)})}f(t,h),Y()}Ve(["keydown","click"]);var vv=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},fv=w(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),hv=w('<div class="space-y-4"><!></div>');function pv(t,e){J(e,!0);let r=de(e,"modalState",7),a=de(e,"isArchiveMode",3,!1);const n=Z(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var o=hv(),l=c(o);{var d=h=>{{let p=Z(()=>r().product?.storeInfo);Wa(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(p)},dataLabel:"Magasin actuel"})}},v=h=>{var p=fv(),m=c(p),g=u(c(m),4),_=c(g),y=c(_);Br(y,{get suggestions(){return K.uniqueStores},get disabled(){return r().loading},onkeydown:S=>{S.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(S){r().forms.store.name=S}});var x=u(_,2);zr(x,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(S){r().forms.store.comment=S}});var $=u(g,2),C=c($);C.__click=[vv,r],R(()=>C.disabled=r().loading),f(h,p)};k(l,h=>{a()?h(d):h(v,!1)})}f(t,o),Y()}Ve(["click"]);var gv=w('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function mv(t,e){J(e,!0);let r=de(e,"value",15);de(e,"disabled",3,!1);var a=gv(),n=c(a);ri(n,{size:20,class:"text-base-centent/70"});var i=u(n,2);Qe(i,r),f(t,a),Y()}function _v(t){const e=t-1;return e*e*e+1}function bv(t,{delay:e=0,duration:r=400,easing:a=_v,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",d=parseFloat(i[l]),v=n==="y"?["top","bottom"]:["left","right"],h=v.map($=>`${$[0].toUpperCase()}${$.slice(1)}`),p=parseFloat(i[`padding${h[0]}`]),m=parseFloat(i[`padding${h[1]}`]),g=parseFloat(i[`margin${h[0]}`]),_=parseFloat(i[`margin${h[1]}`]),y=parseFloat(i[`border${h[0]}Width`]),x=parseFloat(i[`border${h[1]}Width`]);return{delay:e,duration:r,easing:a,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*o};${l}: ${$*d}px;padding-${v[0]}: ${$*p}px;padding-${v[1]}: ${$*m}px;margin-${v[0]}: ${$*g}px;margin-${v[1]}: ${$*_}px;border-${v[0]}-width: ${$*y}px;border-${v[1]}-width: ${$*x}px;min-${l}: 0`}}async function yv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function wv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var xv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Sv=w('<div class="stat-desc italic">Recettes actuelles</div>'),$v=w('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),Pv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),kv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,Ev=w('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),Av=(t,e)=>e().uiStates.overrideManagerEditMode=!1,Tv=w('<span class="loading loading-spinner loading-sm"></span>'),Mv=w('<span class="loading loading-spinner loading-sm"></span>'),Dv=w('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),Nv=w('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function Cv(t,e){J(e,!0);let r=de(e,"modalState",7);const a=Z(()=>r().product?.totalNeededOverrideParsed),n=Z(()=>r().product?.displayTotalOverride);let i=Z(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=Z(()=>r().uiStates.overrideManagerEditMode),l=U(Oe(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),d=U(Oe(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),v=U(Oe(r().product?.totalNeededOverrideParsed?.comment||"")),h=Z(()=>s(l)>0&&s(d).trim()!=="");var p=ee(),m=O(p);{var g=_=>{var y=Nv(),x=c(y),$=c(x),C=c($),S=c(C);{var A=G=>{var F=xv(),q=u(c(F),2),ne=c(q);R(()=>N(ne,s(a)?.oldTotalDisplay)),f(G,F)};k(S,G=>{s(a)?.oldTotalDisplay&&s(i)&&G(A)})}var P=u(S,2),M=u(c(P),2),E=c(M),T=u(M,2),te=c(T),B=c(te),z=u(B);Ba(z,{class:"h-3 w-3"});var W=u(te,2),he=c(W),ye=u(he);li(ye,{class:"h-3 w-3"});var ge=u(T,2);{var H=G=>{var F=Sv();f(G,F)};k(ge,G=>{s(a)?.oldTotalDisplay&&s(i)&&G(H)})}var le=u(P,2);{var re=G=>{var F=Pv(),q=u(c(F),2),ne=c(q),L=u(q,2);{var I=D=>{var Q=$v(),ce=c(Q),oe=u(ce);ri(oe,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),R(()=>N(ce,`${s(a).comment??""} `)),f(D,Q)};k(L,D=>{s(a).comment&&D(I)})}R(()=>N(ne,s(n))),f(G,F)};k(le,G=>{s(n)&&s(a)&&G(re)})}var X=u(le,2);{var ae=G=>{var F=Ev(),q=c(F);q.__click=[kv,r];var ne=c(q);{var L=Q=>{var ce=gt("Redéfinir les besoins");f(Q,ce)},I=Q=>{var ce=gt("Définir manuellement les besoins");f(Q,ce)};k(ne,Q=>{s(a)?Q(L):Q(I,!1)})}var D=u(ne,2);Zr(D,{size:16}),f(G,F)};k(X,G=>{!e.isArchiveMode&&!s(o)&&G(ae)})}var $e=u(C,2);{var ke=G=>{var F=Dv(),q=c(F);Ua(q,{get quantity(){return s(l)},set quantity(Ee){b(l,Ee,!0)},get unit(){return s(d)},set unit(Ee){b(d,Ee,!0)}});var ne=u(q,2);mv(ne,{get value(){return s(v)},set value(Ee){b(v,Ee,!0)}});var L=u(ne,2),I=c(L);I.__click=[Av,r];var D=u(I,2);D.__click=[wv,r];var Q=c(D);{var ce=Ee=>{var qe=Tv();f(Ee,qe)},oe=Ee=>{var qe=gt();R(()=>N(qe,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),f(Ee,qe)};k(Q,Ee=>{r().loading?Ee(ce):Ee(oe,!1)})}var Pe=u(D,2);Pe.__click=[yv,r,l,d,v];var se=c(Pe);{var fe=Ee=>{var qe=Mv();f(Ee,qe)},xe=Ee=>{var qe=gt("Appliquer");f(Ee,qe)};k(se,Ee=>{r().loading?Ee(fe):Ee(xe,!1)})}R(()=>{D.disabled=r().loading,Pe.disabled=r().loading||!s(h)}),Xl(1,F,()=>bv),f(G,F)};k($e,G=>{s(o)&&G(ke)})}R(()=>{N(E,r().product.displayTotalNeeded),N(B,`${r().product.nbRecipes??""} `),N(he,`${r().product.totalAssiettes??""} `)}),f(_,y)};k(m,_=>{r().product&&_(g)})}f(t,p),Y()}Ve(["click"]);var Iv=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Rv=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Ov=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),qv=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function jv(t,e){J(e,!0);const r=Z(()=>e.modalState.recipes);var a=qv(),n=O(a);Cv(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=u(n,2),o=c(i),l=c(o);Ba(l,{class:"h-5 w-5"});var d=u(o,2);{var v=p=>{var m=Iv(),g=c(m);za(g,{class:"mx-auto mb-2 h-12 w-12"}),f(p,m)},h=p=>{var m=Ov(),g=c(m),_=u(c(g));tt(_,21,()=>s(r),Ir,(y,x)=>{var $=Rv(),C=c($),S=c(C),A=u(C),P=c(A),M=u(A),E=c(M);R(T=>{N(S,`${s(x).r??""} (${(s(x).a||"-")??""} c.)`),N(P,`${(s(x).q||s(x).qEq)??""} ${(s(x).u||s(x).uEq)??""}`),N(E,T)},[()=>Ha(s(x).date)]),f(y,$)}),f(p,m)};k(d,p=>{s(r).length===0?p(v):p(h,!1)})}f(t,a),Y()}function Lv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function Ps(t,e,r){s(e)?.resetForms(),r.onClose()}var Bv=w('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),zv=w('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Uv=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Hv=(t,e)=>e("recettes"),Wv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qv=(t,e)=>e("magasins"),Vv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fv=(t,e)=>e("volontaires"),Kv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Jv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Yv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Zv=(t,e)=>e("stock"),Xv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ef=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),tf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rf=(t,e)=>e("achats"),af=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),nf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),sf=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),of=w('<span class="loading loading-spinner loading-sm"></span>'),lf=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),cf=w('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function uf(t,e){J(e,!0);let r=de(e,"initialTab",3,"recettes"),a=U(null);Bt(()=>{b(a,new Pd(e.productId,r()),!0)});let n=Z(()=>K.isEventPassed);function i(x){s(a)?.setCurrentTab(x)}var o=cf(),l=c(o),d=c(l),v=c(d);{var h=x=>{var $=zv(),C=O($),S=c(C),A=u(C,2);{var P=z=>{var W=Bv(),he=c(W);ei(he,{class:"h-4 w-4"}),f(z,W)};k(A,z=>{s(a)&&s(n)&&z(P)})}var M=u(A,2),E=c(M),T=c(E),te=u(E,2),B=u(c(te));R(()=>{N(S,s(a).product?.productName),N(T,s(a).product?.productType),N(B,` ${s(a).product?.displayTotalNeeded??""}`)}),f(x,$)},p=x=>{var $=Uv();f(x,$)};k(v,x=>{s(a)&&s(a).product?x(h):x(p,!1)})}var m=u(v,2);m.__click=[Ps,a,e];var g=c(m);Ct(g,{class:"h-4 w-4"});var _=u(d,2);{var y=x=>{var $=lf(),C=O($),S=c(C);S.__click=[Hv,i];var A=c(S);Ba(A,{class:"mr-1 h-5 w-5"});var P=u(A,2);{var M=V=>{var Se=Wv(),ze=c(Se);R(()=>N(ze,s(a).product?.nbRecipes)),f(V,Se)},E=V=>{var Se=Gv();f(V,Se)};k(P,V=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?V(M):V(E,!1)})}var T=u(S,2);T.__click=[Qv,i];var te=c(T);fr(te,{class:"mr-1 h-5 w-5"});var B=u(te,2);{var z=V=>{var Se=Vv();f(V,Se)};k(B,V=>{s(a).hasChanges?.store&&V(z)})}var W=u(T,2);W.__click=[Fv,i];var he=c(W);ma(he,{class:"mr-1 h-5 w-5"});var ye=u(he,2);{var ge=V=>{var Se=Kv();f(V,Se)},H=V=>{var Se=ee(),ze=O(Se);{var rt=Ie=>{var Ze=Jv(),zt=c(Ze);R(()=>N(zt,s(a).product?.who.length)),f(Ie,Ze)},at=Ie=>{var Ze=Yv();f(Ie,Ze)};k(ze,Ie=>{s(a).product?.who&&s(a).product?.who.length>0?Ie(rt):Ie(at,!1)},!0)}f(V,Se)};k(ye,V=>{s(a).hasChanges?.who?V(ge):V(H,!1)})}var le=u(W,2);le.__click=[Zv,i];var re=c(le);Jo(re,{class:"mr-1 h-5 w-5"});var X=u(re,2);{var ae=V=>{var Se=Xv();f(V,Se)},$e=V=>{var Se=ee(),ze=O(Se);{var rt=Ie=>{var Ze=ef();f(Ie,Ze)},at=Ie=>{var Ze=tf();f(Ie,Ze)};k(ze,Ie=>{s(a).stockParsed?Ie(rt):Ie(at,!1)},!0)}f(V,Se)};k(X,V=>{s(a).hasChanges?.stock?V(ae):V($e,!1)})}var ke=u(le,2);ke.__click=[rf,i];var G=c(ke);mr(G,{class:"mr-1 h-5 w-5"});var F=u(G,2);{var q=V=>{var Se=af(),ze=c(Se);R(()=>N(ze,s(a).purchasesList.length)),f(V,Se)},ne=V=>{var Se=nf();f(V,Se)};k(F,V=>{s(a).purchasesList.length>0?V(q):V(ne,!1)})}var L=u(C,2),I=c(L);{var D=V=>{var Se=sf(),ze=c(Se);Ct(ze,{class:"h-4 w-4"});var rt=u(ze,2),at=c(rt);R(()=>N(at,`erreur : ${s(a).error??""}`)),f(V,Se)};k(I,V=>{s(a).error&&V(D)})}var Q=u(I,2),ce=c(Q);ql(ce,()=>s(a).currentTab,V=>{var Se=ee(),ze=O(Se);{var rt=Ie=>{jv(Ie,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},at=Ie=>{var Ze=ee(),zt=O(Ze);{var we=je=>{Kd(je,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},De=je=>{var Ae=ee(),Je=O(Ae);{var nt=et=>{ov(et,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},ut=et=>{var bt=ee(),St=O(bt);{var $t=ft=>{dv(ft,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},It=ft=>{var Rt=ee(),ue=O(Rt);{var me=Te=>{pv(Te,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};k(ue,Te=>{s(a).currentTab==="magasins"&&Te(me)},!0)}f(ft,Rt)};k(St,ft=>{s(a).currentTab==="volontaires"?ft($t):ft(It,!1)},!0)}f(et,bt)};k(Je,et=>{s(a).currentTab==="stock"?et(nt):et(ut,!1)},!0)}f(je,Ae)};k(zt,je=>{s(a).currentTab==="achats"?je(we):je(De,!1)},!0)}f(Ie,Ze)};k(ze,Ie=>{s(a).currentTab==="recettes"?Ie(rt):Ie(at,!1)})}f(V,Se)});var oe=u(L,2),Pe=c(oe);Pe.__click=[Ps,a,e];var se=c(Pe),fe=u(Pe,2);fe.__click=[Lv,a,e];var xe=c(fe);{var Ee=V=>{var Se=of();f(V,Se)},qe=V=>{var Se=gt("Tout enregistrer");f(V,Se)};k(xe,V=>{s(a).loading?V(Ee):V(qe,!1)})}R(()=>{Ne(S,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),Ne(T,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),Ne(W,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),Ne(le,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),Ne(ke,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),N(se,s(a)?.hasAnyChanges?"Annuler":"Fermer"),fe.disabled=s(a).loading||!s(a).hasAnyChanges}),f(x,$)};k(_,x=>{s(a)&&x(y)})}R(()=>Ne(o,1,`modal ${(e.productId&&"modal-open")??""}`)),f(t,o),Y()}Ve(["click"]);var df=(t,e,r)=>e(r),vf=w("<button><span> </span> <!></button>"),ff=w('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),hf=(t,e)=>e(),pf=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),gf=(t,e)=>e(),mf=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),_f=w('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),bf=w('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),yf=w('<div class=" flex flex-wrap gap-1"></div> <!>',1);function wf(t,e){J(e,!0);let r=de(e,"availableDates",19,()=>[]),a=de(e,"currentRange",19,()=>({start:null,end:null})),n=U(Oe(a().start)),i=U(Oe(a().end));const o=Z(()=>r().length>0&&s(n)===r()[0]&&s(i)===r()[r().length-1]),l=Z(()=>{if(r().length===0)return!1;const S=new Date;S.setHours(0,0,0,0);const P=[...r()].sort().find(M=>new Date(M)>=S);return P&&s(n)===P&&s(i)===r()[r().length-1]}),d=Z(()=>{if(r().length===0)return!0;const S=new Date(r()[r().length-1]);return S.setHours(23,59,59,999),S<new Date}),v=Z(()=>{if(r().length===0)return!1;const S=new Date;return S.setHours(0,0,0,0),[...r()].some(A=>new Date(A)>=S)});Bt(()=>{b(n,a().start,!0),b(i,a().end,!0)});function h(S){s(n)===S&&s(i)===S?m():new Date(S)<new Date(s(n))?b(n,S,!0):(new Date(S)>new Date(s(i))||b(n,S,!0),b(i,S,!0)),e.onRangeChange(s(n),s(i))}function p(S){return s(o)?"btn-soft":new Date(S)>=new Date(s(n))&&new Date(S)<=new Date(s(i))?"":"btn-dash"}function m(){r().length!==0&&(b(n,r()[0],!0),b(i,r()[r().length-1],!0),e.onRangeChange(s(n),s(i)))}function g(){if(r().length===0)return;const S=new Date;S.setHours(0,0,0,0);const P=[...r()].sort().find(M=>new Date(M)>=S);P&&(b(n,P,!0),b(i,r()[r().length-1],!0),e.onRangeChange(s(n),s(i)))}var _=yf(),y=O(_);tt(y,22,r,S=>S,(S,A)=>{var P=vf();P.__click=[df,h,A];var M=c(P),E=c(M),T=u(M,2);{var te=z=>{si(z,{size:16})},B=z=>{var W=ee(),he=O(W);{var ye=H=>{ai(H,{size:16})},ge=H=>{var le=ee(),re=O(le);{var X=ae=>{hu(ae,{size:16})};k(re,ae=>{Za(A)==="cloud"&&ae(X)},!0)}f(H,le)};k(he,H=>{Za(A)==="moon"?H(ye):H(ge,!1)},!0)}f(z,W)};k(T,z=>{Za(A)==="sun"?z(te):z(B,!1)})}R((z,W)=>{Ne(P,1,`btn btn-sm btn-secondary ${z??""}`),N(E,W)},[()=>p(A),()=>Ac(A)]),f(S,P)});var x=u(y,2);{var $=S=>{var A=ff();f(S,A)},C=S=>{var A=bf(),P=c(A);{var M=B=>{var z=pf();z.__click=[hf,g],f(B,z)};k(P,B=>{s(v)&&!s(l)&&B(M)})}var E=u(P,2);{var T=B=>{var z=mf();z.__click=[gf,m],f(B,z)},te=B=>{var z=_f();f(B,z)};k(E,B=>{s(o)?B(te,!1):B(T)})}f(S,A)};k(x,S=>{s(d)?S($):S(C,!1)})}f(t,_),Y()}Ve(["click"]);var xf=w("<fieldset><legend><!> </legend> <!></fieldset>");function fa(t,e){let r=de(e,"bgClass",3,"bg-base-100");var a=xf(),n=c(a),i=c(n);{var o=v=>{const h=Z(()=>e.iconComponent);var p=ee(),m=O(p);gr(m,()=>s(h),(g,_)=>{_(g,{size:16,class:"mr-1"})}),f(v,p)};k(i,v=>{e.iconComponent&&v(o)})}var l=u(i),d=u(n,2);ve(d,()=>e.children??ie),R(()=>{Ne(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Ne(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),N(l,` ${e.legend??""}`)}),f(t,a)}var Sf=()=>K.clearFilters(),$f=t=>K.setSearchQuery(t.currentTarget.value),Pf=()=>K.setSearchQuery(""),kf=()=>K.setGroupBy("none"),Ef=()=>K.setGroupBy("store"),Af=()=>K.setGroupBy("productType"),Tf=(t,e)=>K.toggleProductType(e),Mf=w("<button><!> </button>"),Df=()=>K.toggleTemperature("frais"),Nf=()=>K.toggleTemperature("surgele"),Cf=()=>K.clearTypeAndTemperatureFilters(),If=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Rf=w('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Of=w('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),qf=(t,e)=>K.toggleStore(e),jf=w("<button> </button>"),Lf=()=>K.clearStoreFilters(),Bf=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),zf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Uf=(t,e)=>K.toggleWho(e),Hf=w("<button> </button>"),Wf=()=>K.clearWhoFilters(),Gf=w('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Qf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Vf=w('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Ff(t,e){J(e,!0);const r=Z(()=>K.filters),a=Z(()=>K.uniqueStores),n=Z(()=>K.uniqueWho),i=Z(()=>K.uniqueProductTypes);var o=Vf(),l=O(o),d=c(l),v=c(d);Xo(v,{class:"h-5 w-5"});var h=u(d,2);h.__click=[Sf];var p=c(h);va(p,{class:"h-4 w-4"});var m=u(l,2),g=c(m),_=u(c(g),2),y=c(_);Nu(y,{class:"h-4 w-4"});var x=u(y,2);x.__input=[$f];var $=u(x,2);$.__click=[Pf];var C=c($);Ct(C,{class:"h-4 w-4"});var S=u(g,2),A=u(c(S),2),P=c(A);P.__change=[kf];var M=u(P,2);M.__change=[Ef];var E=u(M,2);E.__change=[Af];var T=u(S,2);{var te=H=>{fa(H,{legend:"Date incluses",bgClass:"bg-base-100",children:(le,re)=>{wf(le,{get availableDates(){return K.availableDates},get currentRange(){return K.dateRange},onRangeChange:(X,ae)=>K.setDateRange(X,ae)})},$$slots:{default:!0}})};k(T,H=>{K.hasSingleDateEvent||H(te)})}var B=u(T,2);{var z=H=>{fa(H,{legend:"Types & Température",get iconComponent(){return oi},children:(le,re)=>{var X=Of(),ae=O(X);tt(ae,20,()=>s(i),D=>D,(D,Q)=>{const ce=Z(()=>vn(Q));var oe=Mf();oe.__click=[Tf,Q];var Pe=c(oe);gr(Pe,()=>s(ce).icon,(fe,xe)=>{xe(fe,{class:"mr-1 h-5 w-5"})});var se=u(Pe);R(fe=>{Ne(oe,1,`btn btn-sm ${fe??""}`),N(se,` ${s(ce).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(Q)?"btn-secondary":"btn-dash btn-secondary"]),f(D,oe)});var $e=u(ae,2),ke=c($e);ke.__click=[Df];var G=c(ke);ni(G,{class:"h-5 w-5"});var F=u(ke,2);F.__click=[Nf];var q=c(F);Cn(q,{class:"h-5 w-5"});var ne=u($e,2);{var L=D=>{var Q=If();Q.__click=[Cf];var ce=c(Q);va(ce,{size:16}),f(D,Q)},I=D=>{var Q=Rf();f(D,Q)};k(ne,D=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?D(L):D(I,!1)})}R((D,Q)=>{Ne(ke,1,`btn btn-sm ${D??""}`),Ne(F,1,`btn btn-sm ${Q??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(le,X)},$$slots:{default:!0}})};k(B,H=>{s(i).length>0&&H(z)})}var W=u(B,2);{var he=H=>{fa(H,{legend:"Magasins",get iconComponent(){return fr},children:(le,re)=>{var X=zf(),ae=c(X);tt(ae,16,()=>s(a),G=>G,(G,F)=>{var q=jf();q.__click=[qf,F];var ne=c(q);R(L=>{Ne(q,1,`btn btn-sm ${L??""}`),N(ne,F)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(F)?"btn-secondary":"btn-dash btn-secondary"]),f(G,q)});var $e=u(ae,2);{var ke=G=>{var F=Bf();F.__click=[Lf];var q=c(F);va(q,{size:16}),f(G,F)};k($e,G=>{s(r).selectedStores.length>0&&G(ke)})}f(le,X)},$$slots:{default:!0}})};k(W,H=>{s(a).length>0&&H(he)})}var ye=u(W,2);{var ge=H=>{fa(H,{legend:"Qui",get iconComponent(){return In},children:(le,re)=>{var X=Qf(),ae=c(X);tt(ae,16,()=>s(n),G=>G,(G,F)=>{var q=Hf();q.__click=[Uf,F];var ne=c(q);R(L=>{Ne(q,1,`btn btn-sm ${L??""}`),N(ne,F)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(F)?" btn-secondary":"btn-dash btn-secondary"]),f(G,q)});var $e=u(ae,2);{var ke=G=>{var F=Gf();F.__click=[Wf];var q=c(F);va(q,{size:16}),f(G,F)};k($e,G=>{s(r).selectedWho.length>0&&G(ke)})}f(le,X)},$$slots:{default:!0}})};k(ye,H=>{s(n).length>0&&H(ge)})}R(()=>{h.disabled=!K.hasFilters,Ql(x,s(r).searchQuery),$.disabled=!s(r).searchQuery,Ka(P,s(r).groupBy==="none"),Ka(M,s(r).groupBy==="store"),Ka(E,s(r).groupBy==="productType")}),f(t,o),Y()}Ve(["click","input","change"]);var di=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},Kf={weekdays:{shorthand:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],longhand:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},months:{shorthand:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],longhand:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},ordinal:function(){return"º"},firstDayOfWeek:1,rangeSeparator:" a ",time_24hr:!0};di.l10ns.es=Kf;di.l10ns;var Jf=w('<div class="tooltip text-xs font-normal"><!></div>');function Yf(t,e){let r=de(e,"iconSize",3,24),a=e.icon||void 0;var n=Jf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};k(i,l=>{e.icon&&l(o)})}R(()=>sr(n,"data-tip",e.tip)),f(t,n)}var Zf=w('<div class="text-primary-content flex items-center gap-2"><!> </div>'),Xf=w('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),eh=w('<div class="font-semibold">Sur toute la période</div>'),th=w('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),rh=w('le <span class="font-semibold"> </span>',1),ah=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),nh=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),sh=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),oh=w(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),ih=w('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),lh=w('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),ch=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),uh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),dh=w('<div class="text-base-content/60 text-sm font-normal"> </div>'),vh=w('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),fh=w('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),hh=w('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),ph=w('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),gh=w('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),mh=w('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),_h=w('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),bh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),yh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),wh=w('<div class="ml-1"><!></div>'),xh=w('<div class="ml-1"> </div> <!>',1),Sh=w('<div class="ml-1 text-sm font-medium">?</div>'),$h=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),Ph=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),kh=w('<span class="text-base-content/50 text-xs"> </span>'),Eh=w('<div class="ml-1 flex gap-1"> <!></div>'),Ah=w('<div class="ml-1 text-sm font-medium">?</div>'),Th=w('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Mh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Dh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Nh=w('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),Ch=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Ih=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Rh=w('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Oh=w("<span> </span>"),qh=w('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),jh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Lh=w('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Bh=w(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),zh=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Uh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Hh=w('<span class="text-xs opacity-75"> </span>'),Wh=w('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Gh=w('<span class="text-base-content/50 text-xs italic">aucun</span>'),Qh=w('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Vh=w('<!> <div class="space-y-1"></div>',1),Fh=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Kh=w('<div class="space-y-4 rounded-lg"></div> <!>',1);function Jh(t,e){J(e,!0);const r={Package:za,MessageCircleQuestionMark:$u,ShoppingCart:mr,Clock:fu,CircleCheck:uu,CircleX:du,ClipboardCheck:vu,PackageCheck:Pu,Check:Rr},a=Z(()=>K.groupedFilteredProducts),n=Z(()=>K.filters),i=Z(()=>Kr(K.dateRange.start)),o=Z(()=>Kr(K.dateRange.end));var l=Kh(),d=O(l);tt(d,21,()=>Object.entries(s(a)),([p,m])=>p,(p,m)=>{var g=Z(()=>_a(s(m),2));let _=()=>s(g)[0];const x=Z(()=>s(g)[1]);var $=Vh(),C=O($);{var S=P=>{const M=Z(()=>vn(_()));var E=lh(),T=c(E),te=c(T);{var B=re=>{var X=Zf(),ae=c(X);fr(ae,{size:20});var $e=u(ae);R(()=>N($e,` ${_()??""} (${s(x).length??""})`)),f(re,X)},z=re=>{var X=ee(),ae=O(X);{var $e=G=>{var F=Xf(),q=c(F);gr(q,()=>s(M).icon,(Q,ce)=>{ce(Q,{size:20})});var ne=u(q,2),L=c(ne),I=u(ne,2),D=c(I);R(()=>{N(L,s(M).displayName),N(D,`(${s(x).length??""})`)}),f(G,F)},ke=G=>{var F=gt();R(()=>N(F,`📦 ${_()??""} (${s(x).length??""})`)),f(G,F)};k(ae,G=>{s(n).groupBy==="productType"?G($e):G(ke,!1)},!0)}f(re,X)};k(te,re=>{s(n).groupBy==="store"?re(B):re(z,!1)})}var W=u(T,2),he=c(W);{var ye=re=>{var X=eh();f(re,X)},ge=re=>{var X=ee(),ae=O(X);{var $e=G=>{var F=th(),q=u(O(F)),ne=c(q),L=u(q,2),I=c(L);R(()=>{N(ne,s(i)),N(I,s(o))}),f(G,F)},ke=G=>{var F=rh(),q=u(O(F)),ne=c(q);R(()=>N(ne,s(i))),f(G,F)};k(ae,G=>{K.dateRange.start!==K.dateRange.end?G($e):G(ke,!1)},!0)}f(re,X)};k(he,re=>{K.isFullRange()?re(ye):re(ge,!1)})}var H=u(W,2);{var le=re=>{var X=ih(),ae=c(X);ae.__click=[ah,e,x];var $e=c(ae);fr($e,{size:16});var ke=u($e,4);Zr(ke,{size:16});var G=u(ae,2);G.__click=[nh,e,x];var F=c(G);ma(F,{size:16});var q=u(F,4);Zr(q,{size:16});var ne=u(G,2);{var L=I=>{var D=oh();D.__click=[sh,e,x];var Q=c(D);mr(Q,{size:16});var ce=u(Q,4);ws(ce,{size:16}),f(I,D)};k(ne,I=>{s(x).some(D=>D.data.displayMissingQuantity!=="✅ Complet")&&I(L)})}f(re,X)};k(H,re=>{K.isEventPassed||re(le)})}f(P,E)};k(C,P=>{_()!==""&&P(S)})}var A=u(C,2);tt(A,21,()=>s(x),P=>P.data.$id,(P,M)=>{const E=Z(()=>s(M).data),T=Z(()=>s(M).stats),te=Z(()=>vn(s(E).productType)),B=Z(()=>Sd(s(E).purchases||[])),z=Z(()=>s(E).totalNeededOverrideParsed);var W=Qh(),he=c(W),ye=c(he),ge=c(ye);ge.__click=[ch,e,E],ge.__keydown=[uh,e,E];var H=c(ge),le=c(H);gr(le,()=>s(te).icon,(ue,me)=>{me(ue,{class:"text-base-content/80 h-4 w-4"})});var re=u(le),X=u(re);{var ae=ue=>{var me=dh(),Te=c(me);R(()=>N(Te,`Ancien: ${s(E).previousNames[0]??""}`)),f(ue,me)};k(X,ue=>{s(E).previousNames&&s(E).previousNames.length>0&&ue(ae)})}var $e=u(X,2);{var ke=ue=>{var me=vh(),Te=c(me);xs(Te,{class:"text-warning h-4 w-4"}),f(ue,me)};k($e,ue=>{s(E).productHugoUuid||ue(ke)})}var G=u(H,2),F=c(G);{var q=ue=>{var me=fh(),Te=c(me);ni(Te,{class:"text-success h-4 w-4"}),f(ue,me)};k(F,ue=>{s(E).pFrais&&ue(q)})}var ne=u(F,2);{var L=ue=>{var me=hh(),Te=c(me);Cn(Te,{class:"text-info h-4 w-4"}),f(ue,me)};k(ne,ue=>{s(E).pSurgel&&ue(L)})}var I=u(G,2);{var D=ue=>{var me=ph(),Te=c(me);ti(Te,{class:"h-4 w-4 animate-spin"}),f(ue,me)};k(I,ue=>{s(E).status==="isSyncing"&&ue(D)})}var Q=u(I,2);{var ce=ue=>{var me=_h(),Te=c(me);tt(Te,20,()=>s(T).concernedDates,We=>We,(We,Me)=>{const Le=Z(()=>s(T).recipesByDate.get(Me)||[]);var Ue=ee(),Ge=O(Ue);{var ht=Ye=>{var it=gh(),Fe=c(it),yt=c(Fe);R((Ut,Ur)=>{sr(it,"data-tip",Ut),N(yt,Ur)},[()=>s(Le).map(Ut=>Ut.r).join(", "),()=>new Date(Me).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),f(Ye,it)},Tt=Ye=>{var it=mh(),Fe=c(it);R(yt=>N(Fe,yt),[()=>new Date(Me).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),f(Ye,it)};k(Ge,Ye=>{s(Le).length>0?Ye(ht):Ye(Tt,!1)})}f(We,Ue)}),f(ue,me)};k(Q,ue=>{s(T).concernedDates.length>0&&ue(ce)})}var oe=u(ge,2);{var Pe=ue=>{var me=Th(),Te=c(me);Te.__click=[bh,e,E],Te.__keydown=[yh,e,E];var We=c(Te);fr(We,{size:18});var Me=u(We,2);{var Le=Fe=>{var yt=xh(),Ut=O(yt),Ur=c(Ut),Ga=u(Ut,2);{var Ht=$r=>{var ia=wh(),fi=c(ia);Yf(fi,{get tip(){return s(E).storeInfo.storeComment},get icon(){return Su},iconSize:14}),f($r,ia)};k(Ga,$r=>{s(E).storeInfo?.storeComment&&$r(Ht)})}R(()=>N(Ur,s(E).storeInfo.storeName)),f(Fe,yt)},Ue=Fe=>{var yt=Sh();f(Fe,yt)};k(Me,Fe=>{s(E).storeInfo?.storeName?Fe(Le):Fe(Ue,!1)})}var Ge=u(Te,2);Ge.__click=[$h,e,E],Ge.__keydown=[Ph,e,E];var ht=c(Ge);ma(ht,{size:18});var Tt=u(ht,2);{var Ye=Fe=>{var yt=Eh(),Ut=c(yt),Ur=u(Ut);{var Ga=Ht=>{var $r=kh(),ia=c($r);R(()=>N(ia,`+${s(E).who.length-2}`)),f(Ht,$r)};k(Ur,Ht=>{s(E).who.length>2&&Ht(Ga)})}R(Ht=>N(Ut,`${Ht??""} `),[()=>s(E).who.slice(0,2).map(Ht=>Ht.slice(0,3)).join(" | ")]),f(Fe,yt)},it=Fe=>{var yt=Ah();f(Fe,yt)};k(Tt,Fe=>{s(E).who&&s(E).who.length>0?Fe(Ye):Fe(it,!1)})}R(()=>{Ne(Te,1,`btn btn-soft btn-sm group relative ${s(E).storeInfo?.storeName?"btn-success":""}`),Ne(Ge,1,`btn btn-sm btn-soft group relative ${s(E).who&&s(E).who?.length>0?"btn-success":""}`)}),f(ue,me)},se=ue=>{var me=Nh(),Te=c(me);{var We=Ue=>{var Ge=Mh(),ht=c(Ge);fr(ht,{size:16});var Tt=u(ht);R(()=>N(Tt,` ${s(E).storeInfo.storeName??""}`)),f(Ue,Ge)};k(Te,Ue=>{s(E).storeInfo?.storeName&&Ue(We)})}var Me=u(Te,2);{var Le=Ue=>{var Ge=Dh(),ht=c(Ge);ma(ht,{size:16});var Tt=u(ht);R(Ye=>N(Tt,` ${Ye??""}`),[()=>s(E).who.join(", ")]),f(Ue,Ge)};k(Me,Ue=>{s(E).who&&s(E).who.length>0&&Ue(Le)})}f(ue,me)};k(oe,ue=>{K.isEventPassed?ue(se,!1):ue(Pe)})}var fe=u(ye,2),xe=c(fe);xe.__click=[Ch,e,E],xe.__keydown=[Ih,e,E];var Ee=c(xe),qe=c(Ee),V=c(qe);yu(V,{class:"h-4 w-4"});var Se=u(qe,2),ze=c(Se),rt=c(ze);{var at=ue=>{var me=Rh(),Te=c(me),We=c(Te),Me=u(Te,2);xs(Me,{class:"h-4 w-4"});var Le=u(Me);R(()=>{N(We,s(T).formattedQuantities),N(Le,` ${s(z).totalOverride.q??""}
                          ${s(z).totalOverride.u??""}`)}),f(ue,me)},Ie=ue=>{var me=Oh(),Te=c(me);R(()=>N(Te,s(T).formattedQuantities)),f(ue,me)};k(rt,ue=>{s(z)?.totalOverride?ue(at):ue(Ie,!1)})}var Ze=u(ze,2);{var zt=ue=>{var me=qh(),Te=c(me),We=c(Te),Me=u(We);Ba(Me,{class:"h-3 w-3"});var Le=u(Te,2),Ue=c(Le),Ge=u(Ue);li(Ge,{class:"h-3 w-3"}),R(()=>{N(We,`${s(T).nbRecipes??""} `),N(Ue,`${s(T).totalAssiettes??""} `)}),f(ue,me)};k(Ze,ue=>{(s(T).nbRecipes||s(T).totalAssiettes)&&ue(zt)})}var we=u(Ee,2);{var De=ue=>{var me=Lh();me.__click=[jh,e,E,T];var Te=u(c(me),2),We=c(Te),Me=u(Te,2);{var Le=Ge=>{lu(Ge,{size:18})},Ue=Ge=>{cu(Ge,{size:18})};k(Me,Ge=>{At.isMobile?Ge(Le):Ge(Ue,!1)})}R(()=>{sr(me,"title",`Acheter le manquant (${s(T).formattedMissingQuantities??""})`),N(We,s(T).formattedMissingQuantities)}),f(ue,me)},je=ue=>{var me=ee(),Te=O(me);{var We=Me=>{ws(Me,{size:24,class:"text-success ms-auto"})};k(Te,Me=>{K.isEventPassed||Me(We)},!0)}f(ue,me)};k(we,ue=>{!K.isEventPassed&&s(T).hasMissing?ue(De):ue(je,!1)})}var Ae=u(we,2);{var Je=ue=>{var me=Bh(),Te=c(me);iu(Te,{size:18}),f(ue,me)};k(Ae,ue=>{!K.isEventPassed&&s(z)?.hasUnresolvedChangedSinceOverride&&ue(Je)})}var nt=u(xe,2);nt.__click=[zh,e,E],nt.__keydown=[Uh,e,E];var ut=c(nt),et=c(ut),bt=c(et);mr(bt,{class:"h-4 w-4"});var St=u(et,2),$t=u(ut,2),It=c($t);tt(It,17,()=>s(B),Ir,(ue,me)=>{const Te=Z(()=>r[s(me).icon]);var We=Wh(),Me=c(We),Le=c(Me);gr(Le,()=>s(Te),(Ye,it)=>{it(Ye,{class:"h-4 w-4"})});var Ue=u(Le,2),Ge=c(Ue),ht=u(Me,2);{var Tt=Ye=>{var it=Hh(),Fe=c(it);R(()=>N(Fe,`livré le: ${s(me).deliveryDate??""}`)),f(Ye,it)};k(ht,Ye=>{s(me).deliveryDate&&Ye(Tt)})}R(()=>{Ne(We,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(me).badgeClass??""}`),N(Ge,`${s(me).quantity??""}
                          ${s(me).unit??""}`)}),f(ue,We)});var ft=u(It,2);{var Rt=ue=>{var me=Gh();f(ue,me)};k(ft,ue=>{s(B).length===0&&ue(Rt)})}R(()=>{Ne(W,1,`card bg-base-100 border-base-300 ${s(E).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),N(re,`${s(E).productName??""} `),Ne(ze,1,`text-base font-bold ${s(T).hasMissing&&!K.isEventPassed?"text-error":"text-success"}`),Ne(St,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${K.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),f(P,W)}),f(p,$)});var v=u(d,2);{var h=p=>{var m=Fh();f(p,m)};k(v,p=>{Object.values(s(a)).flat().length===0&&p(h)})}f(t,l),Y()}Ve(["click","keydown"]);function ks(t,e,r){s(e)||r.onClose()}var Yh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Zh=(t,e)=>b(e,"empty"),Xh=(t,e)=>b(e,"all"),ep=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),tp=w("<!> ",1),rp=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function ap(t,e){J(e,!0);let r=U(!1),a=U(null),n=U(null),i=U(Oe(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=U(Oe(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=U(Oe({})),d=U("empty");Bt(()=>{const q={};e.products.forEach(ne=>{e.productIds.includes(ne.$id)&&(s(d)==="empty"?q[ne.$id]=!ne.storeInfo||!ne.storeInfo.storeName:q[ne.$id]=!0)}),b(l,q,!0)});const v=Z(()=>e.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:s(l)[q.$id]}))),h=Z(()=>s(v).filter(q=>q.selected)),p=Z(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),m=Z(()=>s(h).length===0?!1:s(i).trim().length>0);async function g(){if(!s(m)||s(r))return;b(a,null),b(n,null);const q=s(h).map(L=>L.id),ne=e.products.filter(L=>q.includes(L.$id));K.setSyncStatus(q,!0),At.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${q.length} produits)`,progress:0},e.onClose();try{const L={storeName:s(i).trim(),storeComment:s(o).trim()},I=await Go(q,ne,L);if(I.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${I.updatedCount} produits modifiés`),He.success(`Magasin mis à jour pour ${I.updatedCount} produits.`),e.onSuccess?.(I);else throw new Error(I.error||"Erreur lors de la mise à jour")}catch(L){const I=L instanceof Error?L.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",L),He.error(`Erreur mise à jour magasin: ${I}`),K.clearSyncStatus()}finally{b(r,!1),At.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(q){s(l)[q]=!s(l)[q]}var y=rp(),x=c(y),$=c(x),C=c($),S=c(C),A=u(C,2);A.__click=[ks,r,e];var P=c(A);Ct(P,{class:"h-4 w-4"});var M=u($,2),E=c(M);{var T=q=>{var ne=Yh(),L=c(ne);sa(L,{class:"h-4 w-4"});var I=u(L,2),D=c(I);R(()=>N(D,s(a))),f(q,ne)};k(E,q=>{s(a)&&q(T)})}var te=u(E,2),B=c(te),z=c(B);Br(z,{get suggestions(){return K.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(q){b(i,q,!0)}});var W=u(B,2),he=c(W);zr(he,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(q){b(o,q,!0)}});var ye=u(te,2),ge=u(c(ye),2),H=c(ge);H.__click=[Zh,d];var le=u(H,2);le.__click=[Xh,d];var re=u(ge,2);Xr(re,{get items(){return s(v)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var X=u(M,2),ae=c(X);ae.__click=[ks,r,e];var $e=u(ae,2);$e.__click=g;var ke=c($e);{var G=q=>{var ne=ep();f(q,ne)},F=q=>{var ne=tp(),L=O(ne);Rr(L,{class:"h-4 w-4"});var I=u(L);R(()=>N(I,` Appliquer à ${s(h).length??""} produit(s)`)),f(q,ne)};k(ke,q=>{s(r)?q(G):q(F,!1)})}R(()=>{N(S,s(p)),A.disabled=s(r),Ne(H,1,`tab ${s(d)==="empty"?"tab-active":""}`),Ne(le,1,`tab ${s(d)==="all"?"tab-active":""}`),ae.disabled=s(r),$e.disabled=s(r)||!s(m)}),f(t,y),Y()}Ve(["click"]);function Es(t,e,r){s(e)||r.onClose()}var np=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),sp=(t,e)=>b(e,"empty"),op=(t,e)=>b(e,"all"),ip=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),lp=w("<!> ",1),cp=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function up(t,e){J(e,!0);let r=U(!1),a=U(null),n=U(null),i=U(Oe([])),o=U(""),l=U("empty"),d=U(Oe({}));Bt(()=>{const se={};e.products.forEach(fe=>{e.productIds.includes(fe.$id)&&(s(l)==="empty"?se[fe.$id]=!fe.who||fe.who.length===0:se[fe.$id]=!0)}),b(d,se,!0)});const v=Z(()=>e.products.map(se=>({id:se.$id,label:se.productName,title:se.productName,selected:s(d)[se.$id]}))),h=Z(()=>s(v).filter(se=>se.selected)),p=Z(()=>{const se=new Set([...K.uniqueWho,...s(i)]);return Array.from(se).map(fe=>({id:fe,label:fe,selected:s(i).includes(fe)}))}),m=Z(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),g=Z(()=>s(h).length===0?!1:s(i).length>0);async function _(){if(!s(g)||s(r))return;b(a,null),b(n,null);const se=s(h).map(xe=>xe.id),fe=e.products.filter(xe=>se.includes(xe.$id));K.setSyncStatus(se,!0),At.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${se.length} produits)`,progress:0},e.onClose();try{const xe=await Qo(se,fe,s(i),"replace");if(xe.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${xe.updatedCount} produits modifiés`),He.success(`Volontaires mis à jour pour ${xe.updatedCount} produits.`),e.onSuccess?.(xe);else throw new Error(xe.error||"Erreur lors de la mise à jour")}catch(xe){const Ee=xe instanceof Error?xe.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",xe),He.error(`Erreur mise à jour volontaires: ${Ee}`),K.clearSyncStatus()}finally{b(r,!1),At.backgroundOperation={isRunning:!1,name:"",progress:0}}}function y(se){const fe=se.trim();fe&&!s(i).includes(fe)&&b(i,[...s(i),fe],!0)}function x(se){b(i,s(i).filter(fe=>fe!==se),!0)}function $(se){s(i).includes(se)?x(se):y(se)}function C(){s(o).trim()&&(y(s(o)),b(o,""))}function S(se){s(d)[se]=!s(d)[se]}var A=cp(),P=c(A),M=c(P),E=c(M),T=c(E),te=u(E,2);te.__click=[Es,r,e];var B=c(te);Ct(B,{class:"h-4 w-4"});var z=u(M,2),W=c(z);{var he=se=>{var fe=np(),xe=c(fe);sa(xe,{class:"h-4 w-4"});var Ee=u(xe,2),qe=c(Ee);R(()=>N(qe,s(a))),f(se,fe)};k(W,se=>{s(a)&&se(he)})}var ye=u(W,2),ge=c(ye),H=c(ge),le=c(H),re=c(le);oa(re,{get disabled(){return s(r)},onkeydown:se=>{se.key==="Enter"&&(se.preventDefault(),C())},get value(){return s(o)},set value(se){b(o,se,!0)}});var X=u(le,2);X.__click=C;var ae=c(X);ii(ae,{size:16});var $e=u(H,2),ke=u(c($e),2);Xr(ke,{get items(){return s(p)},onToggleItem:$,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var G=u(ye,2),F=u(c(G),2),q=c(F);q.__click=[sp,l];var ne=u(q,2);ne.__click=[op,l];var L=u(F,2);Xr(L,{get items(){return s(v)},onToggleItem:S,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var I=u(z,2),D=c(I);D.__click=[Es,r,e];var Q=u(D,2);Q.__click=_;var ce=c(Q);{var oe=se=>{var fe=ip();f(se,fe)},Pe=se=>{var fe=lp(),xe=O(fe);Rr(xe,{class:"h-4 w-4"});var Ee=u(xe);R(()=>N(Ee,` Appliquer à ${s(h).length??""} produit(s)`)),f(se,fe)};k(ce,se=>{s(r)?se(oe):se(Pe,!1)})}R(se=>{N(T,s(m)),te.disabled=s(r),X.disabled=se,Ne(q,1,`tab ${s(l)==="empty"?"tab-active":""}`),Ne(ne,1,`tab ${s(l)==="all"?"tab-active":""}`),D.disabled=s(r),Q.disabled=s(r)||!s(g)},[()=>s(r)||!s(o).trim()]),f(t,A),Y()}Ve(["click"]);async function dp(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=K.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Mn(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Fo(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var vp=(t,e)=>e(!1),fp=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),hp=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),pp=(t,e)=>b(e,!0),gp=w('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),mp=w('<span class="loading loading-spinner loading-xs"></span>'),_p=w('<div class="text-error mt-2 text-xs"> </div>'),bp=w('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),yp=(t,e)=>e("date"),wp=(t,e)=>e("store"),xp=(t,e)=>e("who"),Sp=(t,e)=>e("amount"),$p=w('<span class="text-base-content/70 italic"> </span>'),Pp=w('<span class="text-base-content/50 ml-1 text-xs"> </span>'),kp=w('<span class="font-medium"> </span> <!>',1),Ep=(t,e,r)=>e(s(r)),Ap=w('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),Tp=w('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),Mp=(t,e)=>e(!1),Dp=(t,e)=>e(!1),Np=w('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function Cp(t,e){J(e,!0);let r=de(e,"isOpen",15,!1),a=U(!1),n=U(null),i=U(!1),o=U(Oe({invoiceTotal:0,store:"",notes:"",who:""})),l=U(null);Bt(()=>{if(r()&&!s(l)){const we=localStorage.getItem("appwrite-user-name");we&&(s(o).who=we)}});let d=U("date"),v=U("desc"),h=Z(()=>K.financialStats),p=Z(()=>s(h).allPurchases),m=Z(()=>{let we=[...s(p)];return we.sort((De,je)=>{let Ae,Je;switch(s(d)){case"date":Ae=new Date(De.orderDate||De.$createdAt).getTime(),Je=new Date(je.orderDate||je.$createdAt).getTime();break;case"amount":Ae=De.invoiceTotal||De.price||0,Je=je.invoiceTotal||je.price||0;break;case"store":Ae=(De.store||"").toLowerCase(),Je=(je.store||"").toLowerCase();break;case"who":Ae=(De.who||"").toLowerCase(),Je=(je.who||"").toLowerCase();break}return Ae<Je?s(v)==="asc"?-1:1:Ae>Je?s(v)==="asc"?1:-1:0}),we});function g(we){s(d)===we?b(v,s(v)==="asc"?"desc":"asc",!0):(b(d,we,!0),b(v,"desc"))}function _(){const we=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:we},!0),b(l,null),b(i,!1)}function y(we){b(o,{invoiceTotal:we.invoiceTotal||we.price||0,store:we.store||"",notes:we.notes||"",who:we.who||""},!0),b(l,we.$id,!0),b(i,!0)}function x(we){return we?new Date(we).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function $(we){return(we||0).toFixed(2)+" €"}var C=Np(),S=c(C),A=c(S),P=c(A),M=c(P);Yo(M,{});var E=u(P,2);E.__click=[vp,r];var T=u(A,2),te=c(T),B=c(te),z=c(B),W=u(c(z),2),he=c(W),ye=u(W,2),ge=c(ye),H=u(B,2),le=u(c(H),2);tt(le,21,()=>Object.entries(s(h).byStore).sort((we,De)=>De[1]-we[1]),Ir,(we,De)=>{var je=Z(()=>_a(s(De),2));let Ae=()=>s(je)[0],Je=()=>s(je)[1];var nt=fp(),ut=c(nt),et=c(ut),bt=u(ut,2),St=c(bt);R($t=>{N(et,Ae()),N(St,$t)},[()=>$(Je())]),f(we,nt)});var re=u(H,2),X=u(c(re),2);tt(X,21,()=>Object.entries(s(h).byWho).sort((we,De)=>De[1]-we[1]),Ir,(we,De)=>{var je=Z(()=>_a(s(De),2));let Ae=()=>s(je)[0],Je=()=>s(je)[1];var nt=hp(),ut=c(nt),et=c(ut),bt=u(ut,2),St=c(bt);R($t=>{N(et,Ae()),N(St,$t)},[()=>$(Je())]),f(we,nt)});var ae=u(te,2),$e=u(c(ae),2);{var ke=we=>{var De=gp();De.__click=[pp,i],f(we,De)};k($e,we=>{s(i)||we(ke)})}var G=u(ae,2);{var F=we=>{var De=bp(),je=c(De),Ae=c(je),Je=c(Ae),nt=u(Ae,2),ut=c(nt);On(ut,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(Me){s(o).invoiceTotal=Me}});var et=u(ut,2);Br(et,{get suggestions(){return K.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(Me){s(o).store=Me}});var bt=u(et,2);oa(bt,{get suggestions(){return K.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(Me){s(o).who=Me}});var St=u(bt,2);zr(St,{get disabled(){return s(a)},get value(){return s(o).notes},set value(Me){s(o).notes=Me}});var $t=u(nt,2),It=c($t);It.__click=_;var ft=u(It,2);ft.__click=[dp,o,n,a,l,_];var Rt=c(ft);{var ue=Me=>{var Le=mp();f(Me,Le)};k(Rt,Me=>{s(a)&&Me(ue)})}var me=u(Rt),Te=u($t,2);{var We=Me=>{var Le=_p(),Ue=c(Le);R(()=>N(Ue,s(n))),f(Me,Le)};k(Te,Me=>{s(n)&&Me(We)})}R(()=>{N(Je,s(l)?"Modifier la dépense":"Nouvelle Dépense"),ft.disabled=s(a),N(me,` ${s(l)?"Enregistrer":"Ajouter"}`)}),f(we,De)};k(G,we=>{s(i)&&we(F)})}var q=u(G,2),ne=c(q),L=c(ne),I=c(L),D=c(I);D.__click=[yp,g];var Q=c(D),ce=u(D,2);ce.__click=[wp,g];var oe=c(ce),Pe=u(ce);Pe.__click=[xp,g];var se=c(Pe),fe=u(Pe);fe.__click=[Sp,g];var xe=c(fe),Ee=u(fe),qe=c(Ee);Eu(qe,{size:14});var V=u(L),Se=c(V);tt(Se,17,()=>s(m),we=>we.$id,(we,De)=>{var je=Ap(),Ae=c(je),Je=c(Ae),nt=u(Ae),ut=c(nt);{var et=Me=>{var Le=$p(),Ue=c(Le);R(()=>N(Ue,s(De).notes||"-")),f(Me,Le)},bt=Me=>{var Le=kp(),Ue=O(Le),Ge=c(Ue),ht=u(Ue,2);{var Tt=Ye=>{var it=Pp(),Fe=c(it);R(()=>N(Fe,`- ${s(De).notes??""}`)),f(Ye,it)};k(ht,Ye=>{s(De).notes&&Ye(Tt)})}R(()=>N(Ge,s(De)._productName||"Produit inconnu")),f(Me,Le)};k(ut,Me=>{s(De).status==="expense"?Me(et):Me(bt,!1)})}var St=u(nt),$t=c(St),It=u(St),ft=c(It),Rt=u(It),ue=c(Rt),me=u(Rt),Te=c(me);Te.__click=[Ep,y,De];var We=c(Te);Zr(We,{size:14}),R((Me,Le)=>{N(Je,Me),N($t,s(De).store||"-"),N(ft,s(De).who||"-"),N(ue,Le)},[()=>x(s(De).orderDate||s(De).$createdAt),()=>$(s(De).invoiceTotal||s(De).price)]),f(we,je)});var ze=u(Se);{var rt=we=>{var De=Tp();f(we,De)};k(ze,we=>{s(m).length===0&&we(rt)})}var at=u(T,2),Ie=c(at);Ie.__click=[Mp,r];var Ze=u(S,2),zt=c(Ze);zt.__click=[Dp,r],R(we=>{Ne(C,1,`modal ${r()?"modal-open":""}`),N(he,we),N(ge,`${s(p).length??""} transactions`),N(Q,`Date ${s(d)==="date"?s(v)==="asc"?"↑":"↓":""}`),N(oe,`Magasin ${s(d)==="store"?s(v)==="asc"?"↑":"↓":""}`),N(se,`Qui ${s(d)==="who"?s(v)==="asc"?"↑":"↓":""}`),N(xe,`Montant ${s(d)==="amount"?s(v)==="asc"?"↑":"↓":""}`)},[()=>$(s(h).totalGlobal)]),f(t,C),Y()}Ve(["click"]);var Ip=w("<div><!></div>"),Rp=w('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Op(t,e){J(e,!0);let r=U(!1),a=de(e,"width",3,"80"),n=de(e,"bgClass",3,"bg-base-300");const i=Z(()=>"w-"+a());var o=ee(),l=O(o);{var d=h=>{var p=Ip(),m=c(p);ve(m,()=>e.children??ie),R(()=>Ne(p,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),f(h,p)},v=h=>{var p=Rp(),m=O(p),g=c(m),_=u(g,2),y=u(c(_),2),x=c(y);ve(x,()=>e.children??ie);var $=u(m,2),C=c($),S=c(C);Xo(S,{class:"h-6 w-6"}),cn(g,()=>s(r),A=>b(r,A)),f(h,p)};k(l,h=>{At.isMobile?h(v,!1):h(d)})}f(t,o),Y()}function qp(t,e){b(e,!0)}var jp=(t,e)=>b(e,!0),Lp=w('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Bp(t,e){J(e,!0);const r="100",a=Z(()=>K.stats);let n=U(null),i=U("recettes"),o=U(!1),l=U(!1),d=U(Oe([])),v=U(Oe([])),h=U(!1),p=U(Oe([])),m=U(!1);function g(L,I="recettes"){b(i,I,!0),b(n,L,!0)}function _(){b(n,null)}function y(L,I,D){b(d,I,!0),b(v,D,!0),b(L==="who"?o:l,!0)}function x(L){(!L||L==="who")&&b(o,!1),(!L||L==="store")&&b(l,!1),b(d,[],!0),b(v,[],!0)}function $(L){console.log(`[ProductsTable] Modification groupée réussie: ${L.updatedCount} produits`)}function C(L){const I=L.filter(D=>K.getProductModelById(D.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${L.length} produits reçus → ${I.length} produits avec quantités manquantes`),b(p,I,!0),b(h,!0)}function S(){b(h,!1),b(p,[],!0)}function A(){console.log("[ProductsTable] Achat groupé créé avec succès"),S()}async function P(L,I){try{if(!K.currentMainId)throw new Error("mainId non disponible");const D=I.missingQuantities||[];if(D.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const Q=D.filter(oe=>oe.q<0).map(oe=>({...oe,q:Math.abs(oe.q)})).map(oe=>{const{quantity:Pe,unit:se}=fn(oe.q,oe.u);return{q:Pe,u:se}});let ce=L.$id;L.isSynced||(console.log(`[ProductsTable] Produit ${L.$id} local, création pour validation rapide...`),ce=(await Wt(L.$id,{},Pe=>K.getEnrichedProductById(Pe))).$id,console.log(`[ProductsTable] Produit sync créé: ${ce}`)),await Vo(K.currentMainId,ce,Q,{store:L.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${L.productName}`)}catch(D){console.error("[ProductsTable] Erreur validation rapide:",D),alert("Erreur lors de la validation rapide: "+D.message)}}let M=U(!1);var E=Lp(),T=c(E),te=c(T),B=c(te);_u(B,{class:"mr-1 h-4 w-4"});var z=u(B),W=u(te,2);W.__click=[jp,M];var he=c(W);Yo(he,{class:"mr-1 h-4 w-4"});var ye=u(W,2);ye.__click=[qp,m];var ge=c(ye);Nn(ge,{class:"mr-1 h-4 w-4"});var H=u(T,2);Op(H,{width:r,children:(L,I)=>{Ff(L,{})},$$slots:{default:!0}});var le=u(H,2);Jh(le,{onOpenModal:g,onOpenGroupEditModal:y,onOpenGroupPurchaseModal:C,onQuickValidation:P});var re=u(le,2);{let L=Z(()=>s(n)||"");uf(re,{get productId(){return s(L)},get initialTab(){return s(i)},onClose:_})}var X=u(re,2);{var ae=L=>{up(L,{get productIds(){return s(d)},get products(){return s(v)},onClose:()=>x("who"),onSuccess:$})};k(X,L=>{s(o)&&L(ae)})}var $e=u(X,2);{var ke=L=>{ap(L,{get productIds(){return s(d)},get products(){return s(v)},onClose:()=>x("store"),onSuccess:$})};k($e,L=>{s(l)&&L(ke)})}var G=u($e,2);{var F=L=>{pd(L,{get products(){return s(p)},onClose:S,onSuccess:A})};k(G,L=>{s(h)&&L(F)})}var q=u(G,2);wd(q,{get open(){return s(m)},set open(L){b(m,L,!0)}});var ne=u(q,2);Cp(ne,{get isOpen(){return s(M)},set isOpen(L){b(M,L,!0)}}),R(()=>{Ne(E,1,`space-y-6 ${At.isMobile?"":"ml-100"}`),N(z,` ${s(a).total??""}`)}),f(t,E),Y()}Ve(["click"]);Ki();var zp=w('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Up(t){var e=zp();f(t,e)}var Hp=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Wp(t,e){var r=Hp(),a=u(c(r),2),n=u(c(a),2),i=c(n);R(()=>N(i,e.message)),f(t,r)}var Gp=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Qp(t,e){var r=Gp(),a=c(r),n=c(a);sa(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=u(n,2),o=u(c(i),2),l=c(o);R(()=>N(l,e.message||"Erreur inconnue")),f(t,r)}function Vp(t){t.stopPropagation()}var Fp=(t,e)=>t.key==="Escape"&&e(),Kp=w('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Jp=w('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Yp=(t,e)=>b(e,!1),Zp=w('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Xp=(t,e)=>b(e,!0),eg=(t,e)=>b(e,!1),tg=w(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),rg=(t,e)=>b(e,!0),ag=w('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),ng=w('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function sg(t,e){J(e,!0);let r=de(e,"onClose",3,()=>{}),a=de(e,"onAuthSuccess",3,()=>{}),n=U(!0),i=U(!1),o=U(""),l=U(""),d=U(""),v=U(""),h=U(""),p=U(""),m=U(""),g=U(""),_=U(!1);function y(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function x(re){if(re.preventDefault(),!s(d)||!s(v)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createEmailPasswordSession(s(d),s(v)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(X){console.error("Erreur de connexion:",X),b(o,X.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function $(re){if(re.preventDefault(),!s(h)||!s(p)||!s(m)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const ae=await y().getAccount();await ae.create("unique()",s(p),s(m),s(h)),await ae.createEmailPasswordSession(s(p),s(m)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(X){console.error("Erreur d'inscription:",X),b(o,X.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function C(re){if(re.preventDefault(),!s(g)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createRecovery(s(g),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(g,"")},2e3)}catch(X){console.error("Erreur mot de passe oublié:",X),b(o,X.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function S(){s(i)||r()()}Bt(()=>{(s(n)||s(_))&&(b(o,""),b(l,""))});var A=ng();A.__click=S,A.__keydown=[Fp,S];var P=c(A);P.__click=[Vp];var M=c(P),E=c(M),T=c(E),te=u(E,2);te.__click=S;var B=u(M,2),z=c(B);{var W=re=>{var X=Kp(),ae=c(X);R(()=>N(ae,s(o))),f(re,X)};k(z,re=>{s(o)&&re(W)})}var he=u(z,2);{var ye=re=>{var X=Jp(),ae=c(X);R(()=>N(ae,s(l))),f(re,X)};k(he,re=>{s(l)&&re(ye)})}var ge=u(he,2);{var H=re=>{var X=Zp(),ae=O(X),$e=c(ae),ke=u(c($e),2),G=u($e,2),F=c(G),q=u(ae,2),ne=c(q);ne.__click=[Yp,_],R(()=>{ke.disabled=s(i),G.disabled=s(i),N(F,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),ne.disabled=s(i)}),ga("submit",ae,C),Qe(ke,()=>s(g),L=>b(g,L)),f(re,X)},le=re=>{var X=ee(),ae=O(X);{var $e=G=>{var F=tg(),q=O(F),ne=c(q),L=u(c(ne),2),I=u(ne,2),D=u(c(I),2),Q=u(I,2),ce=c(Q),oe=u(q,2),Pe=c(oe);Pe.__click=[Xp,_];var se=u(Pe,2),fe=u(c(se));fe.__click=[eg,n],R(()=>{L.disabled=s(i),D.disabled=s(i),Q.disabled=s(i),N(ce,s(i)?"Connexion...":"Se connecter"),Pe.disabled=s(i),fe.disabled=s(i)}),ga("submit",q,x),Qe(L,()=>s(d),xe=>b(d,xe)),Qe(D,()=>s(v),xe=>b(v,xe)),f(G,F)},ke=G=>{var F=ag(),q=O(F),ne=c(q),L=u(c(ne),2),I=u(ne,2),D=u(c(I),2),Q=u(I,2),ce=u(c(Q),2),oe=u(Q,2),Pe=c(oe),se=u(q,2),fe=u(c(se));fe.__click=[rg,n],R(()=>{L.disabled=s(i),D.disabled=s(i),ce.disabled=s(i),oe.disabled=s(i),N(Pe,s(i)?"Création...":"Créer un compte"),fe.disabled=s(i)}),ga("submit",q,$),Qe(L,()=>s(h),xe=>b(h,xe)),Qe(D,()=>s(p),xe=>b(p,xe)),Qe(ce,()=>s(m),xe=>b(m,xe)),f(G,F)};k(ae,G=>{s(n)?G($e):G(ke,!1)},!0)}f(re,X)};k(ge,re=>{s(_)?re(H):re(le,!1)})}R(()=>{N(T,s(_)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),te.disabled=s(i)}),f(t,A),Y()}Ve(["click","keydown"]);var og=w('<button class="btn btn-sm btn-primary"> </button>'),ig=(t,e,r)=>e(s(r)),lg=w('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),cg=(t,e,r)=>e(s(r)),ug=w('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),dg=w('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),vg=w("<div></div>");function fg(t,e){J(e,!0);let r=de(e,"position",3,"toast-right toast-bottom"),a=de(e,"padding",3,"md");const n=Z(()=>a()==="sm"?"px-2 py-0.5":""),i=Z(()=>He.toasts);function o(h){return h==="success"||h==="info"}function l(h){He.dismiss(h.id)}function d(h){e.onShowDetails?.({id:h.id,message:h.message,details:h.details})}var v=vg();tt(v,21,()=>s(i),h=>h.id,(h,p)=>{var m=dg(),g=c(m),_=c(g),y=c(_);{var x=B=>{ti(B,{class:"h-5 w-5 animate-spin"})};k(y,B=>{s(p).state==="loading"&&B(x)})}var $=u(y,2),C=c($),S=u(_,2),A=c(S);{var P=B=>{var z=og();z.__click=function(...he){s(p).action.onClick?.apply(this,he)};var W=c(z);R(()=>N(W,s(p).action.label)),f(B,z)};k(A,B=>{s(p).action&&B(P)})}var M=u(A,2);{var E=B=>{var z=lg();z.__click=[ig,d,p];var W=c(z);Zo(W,{class:"h-3 w-3"}),f(B,z)};k(M,B=>{s(p).details&&B(E)})}var T=u(M,2);{var te=B=>{var z=ug();z.__click=[cg,l,p];var W=c(z);Ct(W,{class:"ms-1 h-4 w-4"}),f(B,z)};k(T,B=>{(s(p).state==="error"||!o(s(p).state))&&B(te)})}R(()=>{Ne(m,1,`alert alert-${s(p).state??""} max-w-sm ${s(n)??""} shadow-lg`),N(C,s(p).message)}),f(h,m)}),R(()=>Ne(v,1,`toast ${r()??""} z-50`)),f(t,v),Y()}Ve(["click"]);var hg=w('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function pg(t){var e=hg(),r=c(e),a=u(r,2);si(a,{class:"swap-on fill-current"});var n=u(a,2);ai(n,{class:"swap-off fill-current"}),f(t,e)}function gg(t,e){b(e,!0)}var mg=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),_g=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),bg=w('<div class="text-base-content/60"> </div>'),yg=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),wg=w('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),xg=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Sg=w('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),$g=w('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Pg(t,e){J(e,!0);let r,a=U(null),n=U(!0),i=U(!1),o=U(!1);function l(P,M,E){localStorage.setItem("appwrite-user-email",P),localStorage.setItem("appwrite-user-name",M)}async function d(){const P=ys();r=Xc(P);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const T=await(await window.AppwriteClient.getAccount()).get();l(T.email,T.name),await K.initialize(r,P)}catch(M){const E=M instanceof Error?M.message:"Erreur lors de l'initialisation";b(a,E,!0),console.error("[App] Erreur initialisation:",M)}finally{b(n,!1)}}wo(async()=>{await d()});async function v(){b(o,!1),b(n,!0),b(a,null),await d()}ac(()=>{K.destroy()});async function h(){if(!(!r||s(i))){b(i,!0);try{const P=ys();await K.forceReload(r,P)}catch(P){console.error("[App] Erreur lors du rechargement forcé:",P)}finally{b(i,!1)}}}const p=Z(()=>s(a)||K.error),m=Z(()=>s(n)||K.loading);var g=$g(),_=O(g),y=c(_);fg(y,{});var x=u(y,2);{var $=P=>{Up(P)},C=P=>{var M=Sg(),E=O(M),T=c(E),te=c(T),B=u(c(te),2),z=c(B);{var W=D=>{var Q=mg();f(D,Q)};k(z,D=>{K.realtimeConnected&&D(W)})}var he=u(z,2);{var ye=D=>{var Q=_g();f(D,Q)};k(he,D=>{K.syncing&&D(ye)})}var ge=u(he,2);{var H=D=>{var Q=bg(),ce=c(Q);R(oe=>N(ce,`Maj: ${oe??""}`),[()=>new Date(K.lastSync).toLocaleTimeString()]),f(D,Q)};k(ge,D=>{K.lastSync&&D(H)})}var le=u(ge,2);pg(le);var re=u(le,2);{var X=D=>{var Q=yg();let ce;Q.__click=h;var oe=c(Q);Tu(oe,{class:"h-4 w-4"}),R(Pe=>{ce=Ne(Q,1,"btn btn-outline btn-sm",null,ce,Pe),Q.disabled=s(i)||K.loading},[()=>({loading:s(i)||K.loading})]),f(D,Q)};k(re,D=>{s(a)||D(X)})}var ae=u(re,2);{var $e=D=>{var Q=wg(),ce=c(Q);ce.__click=[gg,o];var oe=c(ce);xu(oe,{class:"mr-2 h-4 w-4"}),f(D,Q)};k(ae,D=>{s(a)&&D($e)})}var ke=u(E,2),G=c(ke);{var F=D=>{Qp(D,{get message(){return s(p)}})},q=D=>{var Q=ee(),ce=O(Q);{var oe=Pe=>{Wp(Pe,{get message(){return s(p)}})};k(ce,Pe=>{s(p)&&Pe(oe)},!0)}f(D,Q)};k(G,D=>{s(a)?D(F):D(q,!1)})}var ne=u(G,2);{var L=D=>{Bp(D,{})},I=D=>{var Q=ee(),ce=O(Q);{var oe=Pe=>{var se=xg();f(Pe,se)};k(ce,Pe=>{!K.loading&&!s(a)&&Pe(oe)},!0)}f(D,Q)};k(ne,D=>{K.enrichedProducts.length>0?D(L):D(I,!1)})}f(P,M)};k(x,P=>{s(m)?P($):P(C,!1)})}var S=u(_,2);{var A=P=>{sg(P,{onClose:()=>b(o,!1),onAuthSuccess:v})};k(S,P=>{s(o)&&P(A)})}f(t,g),Y()}Ve(["click"]);const vi=document.getElementById("app_products");if(!vi)throw new Error("Élément target non trouvé: #app_products");Il(Pg,{target:vi});
