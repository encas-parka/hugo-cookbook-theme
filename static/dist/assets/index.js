(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const As=!1;var ea=Array.isArray,fi=Array.prototype.indexOf,pn=Array.from,tn=Object.defineProperty,er=Object.getOwnPropertyDescriptor,hi=Object.getOwnPropertyDescriptors,Ts=Object.prototype,pi=Array.prototype,gn=Object.getPrototypeOf,jn=Object.isExtensible;function kr(t){return typeof t=="function"}const se=()=>{};function gi(t){for(var e=0;e<t.length;e++)t[e]()}function Ms(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function _a(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const gt=2,mn=4,_n=8,or=16,Ft=32,_r=64,bn=128,Et=256,ba=512,it=1024,wt=2048,ir=4096,Dt=8192,br=16384,$a=32768,lr=65536,Ln=1<<17,mi=1<<18,Rr=1<<19,_i=1<<20,rn=1<<21,Pa=1<<22,fr=1<<23,hr=Symbol("$state"),Ds=Symbol("legacy props"),bi=Symbol(""),Qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ns(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function wi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Si(t){throw new Error("https://svelte.dev/e/effect_orphan")}function $i(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Pi(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ki(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ei(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ai(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ti(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ka=1,Ea=2,Cs=4,Mi=8,Di=16,Ni=1,Ci=2,Ii=4,Oi=8,Ri=16,qi=4,ji=1,Li=2,Ze=Symbol(),Bi="http://www.w3.org/1999/xhtml",zi="http://www.w3.org/2000/svg",Ui="@attach";function Hi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Wi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Gi=!1;function Is(t){return t===this.v}function Os(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Qi(t,e){return t!==e}function Rs(t){return!Os(t,this.v)}let qr=!1,Vi=!1;function Fi(){qr=!0}const Ki=[];function $r(t,e=!1,r=!1){return ha(t,new Map,"",Ki,null,r)}function ha(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ea(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var u=0;u<t.length;u+=1){var v=t[u];u in t&&(l[u]=ha(v,e,r,a,null,i))}return l}if(gn(t)===Ts){l={},e.set(t,l),n!==null&&e.set(n,l);for(var f in t)l[f]=ha(t[f],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ha(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Fe=null;function Ar(t){Fe=t}function F(t,e=!1,r){Fe={p:Fe,c:null,e:null,s:t,x:null,l:qr&&!e?{s:null,u:null,$:[]}:null}}function K(t){var e=Fe,r=e.e;if(r!==null){e.e=null;for(var a of r)Js(a)}return Fe=e.p,{}}function jr(){return!qr||Fe!==null&&Fe.l===null}let ur=[];function qs(){var t=ur;ur=[],gi(t)}function rr(t){if(ur.length===0&&!Vr){var e=ur;queueMicrotask(()=>{e===ur&&qs()})}ur.push(t)}function Ji(){for(;ur.length>0;)qs()}const Yi=new WeakMap;function js(t){var e=Ce;if(e===null)return Oe.f|=fr,t;if((e.f&$a)===0){if((e.f&bn)===0)throw!e.parent&&t instanceof Error&&Ls(t),t;e.b.error(t)}else Tr(t,e)}function Tr(t,e){for(;e!==null;){if((e.f&bn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Ls(t),t}function Ls(t){const e=Yi.get(t);e&&(tn(t,"message",{value:e.message}),tn(t,"stack",{value:e.stack}))}const la=new Set;let Le=null,pa=null,an=new Set,Rt=[],Aa=null,nn=!1,Vr=!1;class kt{current=new Map;#e=new Map;#t=new Set;#n=0;#o=null;#d=[];#c=[];#u=[];#l=[];#v=[];#i=[];skipped_effects=new Set;process(e){Rt=[],pa=null;var r=kt.apply(this);for(const i of e)this.#f(i);if(this.#n===0){this.#h();var a=this.#c,n=this.#u;this.#c=[],this.#u=[],this.#l=[],pa=this,Le=null,Bn(a),Bn(n),pa=null,this.#o?.resolve()}else this.#a(this.#c),this.#a(this.#u),this.#a(this.#l);r();for(const i of this.#d)Yr(i);this.#d=[]}#f(e){e.f^=it;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Ft|_r))!==0,i=n&&(a&it)!==0,o=i||(a&Dt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=it:(a&mn)!==0?this.#u.push(r):(a&it)===0&&((a&Pa)!==0&&r.b?.is_pending()?this.#d.push(r):Ca(r)&&((r.f&or)!==0&&this.#l.push(r),Yr(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#a(e){for(const r of e)((r.f&wt)!==0?this.#v:this.#i).push(r),dt(r,it);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){Le=this}deactivate(){Le=null}flush(){if(Rt.length>0){if(this.activate(),Bs(),Le!==null&&Le!==this)return}else this.#n===0&&this.#h();this.deactivate();for(const e of an)if(an.delete(e),e(),Le!==null)break}#h(){for(const e of this.#t)e();if(this.#t.clear(),la.size>1){this.#e.clear();let e=!0;for(const r of la){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;zs(a)}if(Rt.length>0){Le=r;const a=kt.apply(r);for(const n of Rt)r.#f(n);Rt=[],a()}}Le=null}la.delete(this)}increment(){this.#n+=1}decrement(){this.#n-=1;for(const e of this.#v)dt(e,wt),mr(e);for(const e of this.#i)dt(e,ir),mr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Ms()).promise}static ensure(){if(Le===null){const e=Le=new kt;la.add(Le),Vr||kt.enqueue(()=>{Le===e&&e.flush()})}return Le}static enqueue(e){rr(e)}static apply(e){return se}}function Zi(t){var e=Vr;Vr=!0;try{for(var r;;){if(Ji(),Rt.length===0&&(Le?.flush(),Rt.length===0))return Aa=null,r;Bs()}}finally{Vr=e}}function Bs(){var t=Er;nn=!0;try{var e=0;for(Wn(!0);Rt.length>0;){var r=kt.ensure();if(e++>1e3){var a,n;Xi()}r.process(Rt),tr.clear()}}finally{nn=!1,Wn(t),Aa=null}}function Xi(){try{$i()}catch(t){Tr(t,Aa)}}let cr=null;function Bn(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(br|Dt))===0&&Ca(a)&&(cr=[],Yr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?Xs(a):a.fn=null),cr?.length>0)){tr.clear();for(const n of cr)Yr(n);cr=[]}}cr=null}}function zs(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&gt)!==0?zs(e):(r&(Pa|or))!==0&&(dt(e,wt),mr(e))}}function mr(t){for(var e=Aa=t;e.parent!==null;){e=e.parent;var r=e.f;if(nn&&e===Ce&&(r&or)!==0)return;if((r&(_r|Ft))!==0){if((r&it)===0)return;e.f^=it}}Rt.push(e)}function yn(t){let e=0,r=ar(0),a;return()=>{pl()&&(s(r),Pn(()=>(e===0&&(a=wr(()=>t(()=>qt(r)))),e+=1,()=>{rr(()=>{e-=1,e===0&&(a?.(),a=void 0,qt(r))})})))}}var el=lr|Rr|bn;function tl(t,e,r){new rl(t,e,r)}class rl{parent;#e=!1;#t;#n=null;#o;#d;#c;#u=null;#l=null;#v=null;#i=null;#f=0;#a=0;#h=!1;#p=null;#m=()=>{this.#p&&Mr(this.#p,this.#f)};#b=yn(()=>(this.#p=ar(this.#f),()=>{this.#p=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#d=a,this.parent=Ce.b,this.#e=!!this.#o.pending,this.#c=Yt(()=>{Ce.b=this;{try{this.#u=nt(()=>a(this.#t))}catch(n){this.error(n)}this.#a>0?this.#g():this.#e=!1}},el)}#s(){try{this.#u=nt(()=>this.#d(this.#t))}catch(e){this.error(e)}this.#e=!1}#y(){const e=this.#o.pending;e&&(this.#l=nt(()=>e(this.#t)),kt.enqueue(()=>{this.#u=this.#_(()=>(kt.ensure(),nt(()=>this.#d(this.#t)))),this.#a>0?this.#g():(Gt(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#_(e){var r=Ce,a=Oe,n=Fe;jt(this.#c),ht(this.#c),Ar(this.#c.ctx);try{return e()}catch(i){return js(i),null}finally{jt(r),ht(a),Ar(n)}}#g(){const e=this.#o.pending;this.#u!==null&&(this.#i=document.createDocumentFragment(),al(this.#u,this.#i)),this.#l===null&&(this.#l=nt(()=>e(this.#t)))}#x(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#x(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#l&&Gt(this.#l,()=>{this.#l=null}),this.#i&&(this.#t.before(this.#i),this.#i=null),rr(()=>{kt.ensure().flush()}))}update_pending_count(e){this.#x(e),this.#f+=e,an.add(this.#m)}get_effect_pending(){return this.#b(),s(this.#p)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#h||!r&&!a)throw e;this.#u&&(st(this.#u),this.#u=null),this.#l&&(st(this.#l),this.#l=null),this.#v&&(st(this.#v),this.#v=null);var n=!1,i=!1;const o=()=>{if(n){Wi();return}n=!0,i&&Ti(),kt.ensure(),this.#f=0,this.#v!==null&&Gt(this.#v,()=>{this.#v=null}),this.#e=this.has_pending_snippet(),this.#u=this.#_(()=>(this.#h=!1,nt(()=>this.#d(this.#t)))),this.#a>0?this.#g():this.#e=!1};var l=Oe;try{ht(null),i=!0,r?.(e,o),i=!1}catch(u){Tr(u,this.#c&&this.#c.parent)}finally{ht(l)}a&&rr(()=>{this.#v=this.#_(()=>{this.#h=!0;try{return nt(()=>{a(this.#t,()=>e,()=>o)})}catch(u){return Tr(u,this.#c.parent),null}finally{this.#h=!1}})})}}function al(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:ta(r);e.append(r),r=n}}function Us(t,e,r){const a=jr()?Ta:wn;if(e.length===0){r(t.map(a));return}var n=Le,i=Ce,o=nl();Promise.all(e.map(l=>sl(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(u){(i.f&br)===0&&Tr(u,i)}n?.deactivate(),Hs()}).catch(l=>{Tr(l,i)})}function nl(){var t=Ce,e=Oe,r=Fe,a=Le;return function(){jt(t),ht(e),Ar(r),a?.activate()}}function Hs(){jt(null),ht(null),Ar(null)}function Ta(t){var e=gt|wt,r=Oe!==null&&(Oe.f&gt)!==0?Oe:null;return Ce===null||r!==null&&(r.f&Et)!==0?e|=Et:Ce.f|=Rr,{ctx:Fe,deps:null,effects:null,equals:Is,f:e,fn:t,reactions:null,rv:0,v:Ze,wv:0,parent:r??Ce,ac:null}}function sl(t,e){let r=Ce;r===null&&yi();var a=r.b,n=void 0,i=ar(Ze),o=!Oe,l=new Map;return ml(()=>{var u=Ms();n=u.promise;try{Promise.resolve(t()).then(u.resolve,u.reject)}catch(g){u.reject(g)}var v=Le,f=a.is_pending();o&&(a.update_pending_count(1),f||(v.increment(),l.get(v)?.reject(Qr),l.set(v,u)));const m=(g,p=void 0)=>{f||v.activate(),p?p!==Qr&&(i.f|=fr,Mr(i,p)):((i.f&fr)!==0&&(i.f^=fr),Mr(i,g)),o&&(a.update_pending_count(-1),f||v.decrement()),Hs()};u.promise.then(m,g=>m(null,g||"unknown"))}),$n(()=>{for(const u of l.values())u.reject(Qr)}),new Promise(u=>{function v(f){function m(){f===n?u(i):v(n)}f.then(m,m)}v(n)})}function Y(t){const e=Ta(t);return ro(e),e}function wn(t){const e=Ta(t);return e.equals=Rs,e}function Ws(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)st(e[r])}}function ol(t){for(var e=t.parent;e!==null;){if((e.f&gt)===0)return e;e=e.parent}return null}function xn(t){var e,r=Ce;jt(ol(t));try{Ws(t),e=oo(t)}finally{jt(r)}return e}function Gs(t){var e=xn(t);if(t.equals(e)||(t.v=e,t.wv=no()),!yr){var r=(Zt||(t.f&Et)!==0)&&t.deps!==null?ir:it;dt(t,r)}}const tr=new Map;function ar(t,e){var r={f:0,v:t,reactions:null,equals:Is,rv:0,wv:0};return r}function L(t,e){const r=ar(t);return ro(r),r}function il(t,e=!1,r=!0){const a=ar(t);return e||(a.equals=Rs),qr&&r&&Fe!==null&&Fe.l!==null&&(Fe.l.s??=[]).push(a),a}function b(t,e,r=!1){Oe!==null&&(!Tt||(Oe.f&Ln)!==0)&&jr()&&(Oe.f&(gt|or|Pa|Ln))!==0&&!Qt?.includes(t)&&Ai();let a=r?Re(e):e;return Mr(t,a)}function Mr(t,e){if(!t.equals(e)){var r=t.v;yr?tr.set(t,e):tr.set(t,r),t.v=e;var a=kt.ensure();a.capture(t,r),(t.f&gt)!==0&&((t.f&wt)!==0&&xn(t),dt(t,(t.f&Et)===0?it:ir)),t.wv=no(),Qs(t,wt),jr()&&Ce!==null&&(Ce.f&it)!==0&&(Ce.f&(Ft|_r))===0&&($t===null?yl([t]):$t.push(t))}return e}function qt(t){b(t,t.v+1)}function Qs(t,e){var r=t.reactions;if(r!==null)for(var a=jr(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Ce)){var u=(l&wt)===0;u&&dt(o,e),(l&gt)!==0?Qs(o,ir):u&&((l&or)!==0&&cr!==null&&cr.push(o),mr(o))}}}function Re(t){if(typeof t!="object"||t===null||hr in t)return t;const e=gn(t);if(e!==Ts&&e!==pi)return t;var r=new Map,a=ea(t),n=L(0),i=Vt,o=l=>{if(Vt===i)return l();var u=Oe,v=Vt;ht(null),Qn(i);var f=l();return ht(u),Qn(v),f};return a&&r.set("length",L(t.length)),new Proxy(t,{defineProperty(l,u,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&ki();var f=r.get(u);return f===void 0?f=o(()=>{var m=L(v.value);return r.set(u,m),m}):b(f,v.value,!0),!0},deleteProperty(l,u){var v=r.get(u);if(v===void 0){if(u in l){const f=o(()=>L(Ze));r.set(u,f),qt(n)}}else b(v,Ze),qt(n);return!0},get(l,u,v){if(u===hr)return t;var f=r.get(u),m=u in l;if(f===void 0&&(!m||er(l,u)?.writable)&&(f=o(()=>{var p=Re(m?l[u]:Ze),_=L(p);return _}),r.set(u,f)),f!==void 0){var g=s(f);return g===Ze?void 0:g}return Reflect.get(l,u,v)},getOwnPropertyDescriptor(l,u){var v=Reflect.getOwnPropertyDescriptor(l,u);if(v&&"value"in v){var f=r.get(u);f&&(v.value=s(f))}else if(v===void 0){var m=r.get(u),g=m?.v;if(m!==void 0&&g!==Ze)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return v},has(l,u){if(u===hr)return!0;var v=r.get(u),f=v!==void 0&&v.v!==Ze||Reflect.has(l,u);if(v!==void 0||Ce!==null&&(!f||er(l,u)?.writable)){v===void 0&&(v=o(()=>{var g=f?Re(l[u]):Ze,p=L(g);return p}),r.set(u,v));var m=s(v);if(m===Ze)return!1}return f},set(l,u,v,f){var m=r.get(u),g=u in l;if(a&&u==="length")for(var p=v;p<m.v;p+=1){var _=r.get(p+"");_!==void 0?b(_,Ze):p in l&&(_=o(()=>L(Ze)),r.set(p+"",_))}if(m===void 0)(!g||er(l,u)?.writable)&&(m=o(()=>L(void 0)),b(m,Re(v)),r.set(u,m));else{g=m.v!==Ze;var y=o(()=>Re(v));b(m,y)}var x=Reflect.getOwnPropertyDescriptor(l,u);if(x?.set&&x.set.call(f,v),!g){if(a&&typeof u=="string"){var k=r.get("length"),N=Number(u);Number.isInteger(N)&&N>=k.v&&b(k,N+1)}qt(n)}return!0},ownKeys(l){s(n);var u=Reflect.ownKeys(l).filter(m=>{var g=r.get(m);return g===void 0||g.v!==Ze});for(var[v,f]of r)f.v!==Ze&&!(v in l)&&u.push(v);return u},setPrototypeOf(){Ei()}})}function zn(t){try{if(t!==null&&typeof t=="object"&&hr in t)return t[hr]}catch{}return t}function ll(t,e){return Object.is(zn(t),zn(e))}var Un,Vs,Fs,Ks;function cl(){if(Un===void 0){Un=window,Vs=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Fs=er(e,"firstChild").get,Ks=er(e,"nextSibling").get,jn(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),jn(r)&&(r.__t=void 0)}}function Kt(t=""){return document.createTextNode(t)}function Dr(t){return Fs.call(t)}function ta(t){return Ks.call(t)}function c(t,e){return Dr(t)}function q(t,e=!1){{var r=Dr(t);return r instanceof Comment&&r.data===""?ta(r):r}}function d(t,e=1,r=!1){let a=t;for(;e--;)a=ta(a);return a}function ul(t){t.textContent=""}function Ma(){return!1}function dl(t,e){if(e){const r=document.body;t.autofocus=!0,rr(()=>{document.activeElement===r&&t.focus()})}}let Hn=!1;function vl(){Hn||(Hn=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Lr(t){var e=Oe,r=Ce;ht(null),jt(null);try{return t()}finally{ht(e),jt(r)}}function Sn(t,e,r,a=r){t.addEventListener(e,()=>Lr(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),vl()}function fl(t){Ce===null&&Oe===null&&Si(),Oe!==null&&(Oe.f&Et)!==0&&Ce===null&&xi(),yr&&wi()}function hl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Jt(t,e,r,a=!0){var n=Ce;n!==null&&(n.f&Dt)!==0&&(t|=Dt);var i={ctx:Fe,deps:null,nodes_start:null,nodes_end:null,f:t|wt,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Yr(i),i.f|=$a}catch(u){throw st(i),u}else e!==null&&mr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Rr)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&hl(o,n),Oe!==null&&(Oe.f&gt)!==0&&(t&_r)===0)){var l=Oe;(l.effects??=[]).push(o)}}return i}function pl(){return Oe!==null&&!Tt}function $n(t){const e=Jt(_n,null,!1);return dt(e,it),e.teardown=t,e}function Lt(t){fl();var e=Ce.f,r=!Oe&&(e&Ft)!==0&&(e&$a)===0;if(r){var a=Fe;(a.e??=[]).push(t)}else return Js(t)}function Js(t){return Jt(mn|_i,t,!1)}function gl(t){kt.ensure();const e=Jt(_r|Rr,t,!0);return(r={})=>new Promise(a=>{r.outro?Gt(e,()=>{st(e),a(void 0)}):(st(e),a(void 0))})}function Da(t){return Jt(mn,t,!1)}function ml(t){return Jt(Pa|Rr,t,!0)}function Pn(t,e=0){return Jt(_n|e,t,!0)}function O(t,e=[],r=[]){Us(e,r,a=>{Jt(_n,()=>t(...a.map(s)),!0)})}function Yt(t,e=0){var r=Jt(or|e,t,!0);return r}function nt(t,e=!0){return Jt(Ft|Rr,t,!0,e)}function Ys(t){var e=t.teardown;if(e!==null){const r=yr,a=Oe;Gn(!0),ht(null);try{e.call(null)}finally{Gn(r),ht(a)}}}function Zs(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&Lr(()=>{n.abort(Qr)});var a=r.next;(r.f&_r)!==0?r.parent=null:st(r,e),r=a}}function _l(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Ft)===0&&st(e),e=r}}function st(t,e=!0){var r=!1;(e||(t.f&mi)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(bl(t.nodes_start,t.nodes_end),r=!0),Zs(t,e&&!r),ya(t,0),dt(t,br);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Ys(t);var n=t.parent;n!==null&&n.first!==null&&Xs(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function bl(t,e){for(;t!==null;){var r=t===e?null:ta(t);t.remove(),t=r}}function Xs(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Gt(t,e){var r=[];kn(t,r,!0),eo(r,()=>{st(t),e&&e()})}function eo(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function kn(t,e,r){if((t.f&Dt)===0){if(t.f^=Dt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&lr)!==0||(a.f&Ft)!==0;kn(a,e,i?r:!1),a=n}}}function Na(t){to(t,!0)}function to(t,e){if((t.f&Dt)!==0){t.f^=Dt,(t.f&it)===0&&(dt(t,wt),mr(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&lr)!==0||(r.f&Ft)!==0;to(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Er=!1;function Wn(t){Er=t}let yr=!1;function Gn(t){yr=t}let Oe=null,Tt=!1;function ht(t){Oe=t}let Ce=null;function jt(t){Ce=t}let Qt=null;function ro(t){Oe!==null&&(Qt===null?Qt=[t]:Qt.push(t))}let ut=null,yt=0,$t=null;function yl(t){$t=t}let ao=1,Jr=0,Vt=Jr;function Qn(t){Vt=t}let Zt=!1;function no(){return++ao}function Ca(t){var e=t.f;if((e&wt)!==0)return!0;if((e&ir)!==0){var r=t.deps,a=(e&Et)!==0;if(r!==null){var n,i,o=(e&ba)!==0,l=a&&Ce!==null&&!Zt,u=r.length;if((o||l)&&(Ce===null||(Ce.f&br)===0)){var v=t,f=v.parent;for(n=0;n<u;n++)i=r[n],(o||!i?.reactions?.includes(v))&&(i.reactions??=[]).push(v);o&&(v.f^=ba),l&&f!==null&&(f.f&Et)===0&&(v.f^=Et)}for(n=0;n<u;n++)if(i=r[n],Ca(i)&&Gs(i),i.wv>t.wv)return!0}(!a||Ce!==null&&!Zt)&&dt(t,it)}return!1}function so(t,e,r=!0){var a=t.reactions;if(a!==null&&!Qt?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&gt)!==0?so(i,e,!1):e===i&&(r?dt(i,wt):(i.f&it)!==0&&dt(i,ir),mr(i))}}function oo(t){var e=ut,r=yt,a=$t,n=Oe,i=Zt,o=Qt,l=Fe,u=Tt,v=Vt,f=t.f;ut=null,yt=0,$t=null,Zt=(f&Et)!==0&&(Tt||!Er||Oe===null),Oe=(f&(Ft|_r))===0?t:null,Qt=null,Ar(t.ctx),Tt=!1,Vt=++Jr,t.ac!==null&&(Lr(()=>{t.ac.abort(Qr)}),t.ac=null);try{t.f|=rn;var m=t.fn,g=m(),p=t.deps;if(ut!==null){var _;if(ya(t,yt),p!==null&&yt>0)for(p.length=yt+ut.length,_=0;_<ut.length;_++)p[yt+_]=ut[_];else t.deps=p=ut;if(!Zt||(f&gt)!==0&&t.reactions!==null)for(_=yt;_<p.length;_++)(p[_].reactions??=[]).push(t)}else p!==null&&yt<p.length&&(ya(t,yt),p.length=yt);if(jr()&&$t!==null&&!Tt&&p!==null&&(t.f&(gt|ir|wt))===0)for(_=0;_<$t.length;_++)so($t[_],t);return n!==null&&n!==t&&(Jr++,$t!==null&&(a===null?a=$t:a.push(...$t))),(t.f&fr)!==0&&(t.f^=fr),g}catch(y){return js(y)}finally{t.f^=rn,ut=e,yt=r,$t=a,Oe=n,Zt=i,Qt=o,Ar(l),Tt=u,Vt=v}}function wl(t,e){let r=e.reactions;if(r!==null){var a=fi.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&gt)!==0&&(ut===null||!ut.includes(e))&&(dt(e,ir),(e.f&(Et|ba))===0&&(e.f^=ba),Ws(e),ya(e,0))}function ya(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)wl(t,r[a])}function Yr(t){var e=t.f;if((e&br)===0){dt(t,it);var r=Ce,a=Er;Ce=t,Er=!0;try{(e&or)!==0?_l(t):Zs(t),Ys(t);var n=oo(t);t.teardown=typeof n=="function"?n:null,t.wv=ao;var i;As&&Vi&&(t.f&wt)!==0&&t.deps}finally{Er=a,Ce=r}}}async function xl(){await Promise.resolve(),Zi()}function s(t){var e=t.f,r=(e&gt)!==0;if(Oe!==null&&!Tt){var a=Ce!==null&&(Ce.f&br)!==0;if(!a&&!Qt?.includes(t)){var n=Oe.deps;if((Oe.f&rn)!==0)t.rv<Jr&&(t.rv=Jr,ut===null&&n!==null&&n[yt]===t?yt++:ut===null?ut=[t]:(!Zt||!ut.includes(t))&&ut.push(t));else{(Oe.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Oe]:i.includes(Oe)||i.push(Oe)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&Et)===0&&(o.f^=Et)}if(yr){if(tr.has(t))return tr.get(t);if(r){o=t;var u=o.v;return((o.f&it)===0&&o.reactions!==null||io(o))&&(u=xn(o)),tr.set(o,u),u}}else r&&(o=t,Ca(o)&&Gs(o));if((t.f&fr)!==0)throw t.v;return t.v}function io(t){if(t.v===Ze)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(tr.has(e)||(e.f&gt)!==0&&io(e))return!0;return!1}function wr(t){var e=Tt;try{return Tt=!0,t()}finally{Tt=e}}const Sl=-7169;function dt(t,e){t.f=t.f&Sl|e}function $l(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Pl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function kl(t){return Pl.includes(t)}const El={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Al(t){return t=t.toLowerCase(),El[t]??t}const Tl=["touchstart","touchmove"];function Ml(t){return Tl.includes(t)}const lo=new Set,sn=new Set;function En(t,e,r,a={}){function n(i){if(a.capture||Gr.call(e,i),!i.cancelBubble)return Lr(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?rr(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function on(t,e,r,a={}){var n=En(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function ga(t,e,r,a,n){var i={capture:a,passive:n},o=En(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&$n(()=>{e.removeEventListener(t,o,i)})}function Qe(t){for(var e=0;e<t.length;e++)lo.add(t[e]);for(var r of sn)r(t)}let Vn=null;function Gr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Vn=t;var o=0,l=Vn===t&&t.__root;if(l){var u=n.indexOf(l);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var v=n.indexOf(e);if(v===-1)return;u<=v&&(o=u)}if(i=n[o]||t.target,i!==e){tn(t,"currentTarget",{configurable:!0,get(){return i||r}});var f=Oe,m=Ce;ht(null),jt(null);try{for(var g,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+a];if(y!=null&&(!i.disabled||t.target===i))if(ea(y)){var[x,...k]=y;x.apply(i,[t,...k])}else y.call(i,t)}catch(N){g?p.push(N):g=N}if(t.cancelBubble||_===e||_===null)break;i=_}if(g){for(let N of p)queueMicrotask(()=>{throw N});throw g}}finally{t.__root=e,delete t.currentTarget,ht(f),jt(m)}}}function co(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Nr(t,e){var r=Ce;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function w(t,e){var r=(e&ji)!==0,a=(e&Li)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=co(i?t:"<!>"+t),r||(n=Dr(n)));var o=a||Vs?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=Dr(o),u=o.lastChild;Nr(l,u)}else Nr(o,o);return o}}function Dl(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=co(n),l=Dr(o);i=Dr(l)}var u=i.cloneNode(!0);return Nr(u,u),u}}function Nl(t,e){return Dl(t,e,"svg")}function pt(t=""){{var e=Kt(t+"");return Nr(e,e),e}}function X(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Kt();return t.append(e,r),Nr(e,r),t}function h(t,e){t!==null&&t.before(e)}let wa=!0;function Fn(t){wa=t}function I(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Cl(t,e){return Il(t,e)}const Pr=new Map;function Il(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){cl();var l=new Set,u=m=>{for(var g=0;g<m.length;g++){var p=m[g];if(!l.has(p)){l.add(p);var _=Ml(p);e.addEventListener(p,Gr,{passive:_});var y=Pr.get(p);y===void 0?(document.addEventListener(p,Gr,{passive:_}),Pr.set(p,1)):Pr.set(p,y+1)}}};u(pn(lo)),sn.add(u);var v=void 0,f=gl(()=>{var m=r??e.appendChild(Kt());return tl(m,{pending:()=>{}},g=>{if(i){F({});var p=Fe;p.c=i}n&&(a.$$events=n),wa=o,v=t(g,a)||{},wa=!0,i&&K()}),()=>{for(var g of l){e.removeEventListener(g,Gr);var p=Pr.get(g);--p===0?(document.removeEventListener(g,Gr),Pr.delete(g)):Pr.set(g,p)}sn.delete(u),m!==r&&m.parentNode?.removeChild(m)}});return Ol.set(v,f),v}let Ol=new WeakMap;function E(t,e,r=!1){var a=t,n=null,i=null,o=Ze,l=r?lr:0,u=!1;const v=(p,_=!0)=>{u=!0,g(_,p)};var f=null;function m(){f!==null&&(f.lastChild.remove(),a.before(f),f=null);var p=o?n:i,_=o?i:n;p&&Na(p),_&&Gt(_,()=>{o?i=null:n=null})}const g=(p,_)=>{if(o!==(o=p)){var y=Ma(),x=a;if(y&&(f=document.createDocumentFragment(),f.append(x=Kt())),o?n??=_&&nt(()=>_(x)):i??=_&&nt(()=>_(x)),y){var k=Le,N=o?n:i,S=o?i:n;N&&k.skipped_effects.delete(N),S&&k.skipped_effects.add(S),k.add_callback(m)}else m()}};Yt(()=>{u=!1,e(v),u||g(null,null)},l)}function Rl(t,e,r){var a=t,n=Ze,i,o,l=null,u=jr()?Qi:Os;function v(){i&&Gt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Yt(()=>{if(u(n,n=e())){var f=a,m=Ma();m&&(l=document.createDocumentFragment(),l.append(f=Kt())),o=nt(()=>r(f)),m?Le.add_callback(v):v()}})}function Cr(t,e){return e}function ql(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)kn(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var u=r.parentNode;ul(u),u.append(r),a.clear(),Ot(t,e[0].prev,e[i-1].next)}eo(n,()=>{for(var v=0;v<i;v++){var f=e[v];l||(a.delete(f.k),Ot(t,f.prev,f.next)),st(f.e,!l)}})}function et(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},u=(e&Cs)!==0;if(u){var v=t;o=v.appendChild(Kt())}var f=null,m=!1,g=new Map,p=wn(()=>{var k=r();return ea(k)?k:k==null?[]:pn(k)}),_,y;function x(){jl(y,_,l,g,o,n,e,a,r),i!==null&&(_.length===0?f?Na(f):f=nt(()=>i(o)):f!==null&&Gt(f,()=>{f=null}))}Yt(()=>{y??=Ce,_=s(p);var k=_.length;if(!(m&&k===0)){m=k===0;var N,S,T,P;if(Ma()){var D=new Set,A=Le;for(S=0;S<k;S+=1){T=_[S],P=a(T,S);var $=l.items.get(P)??g.get(P);$?(e&(ka|Ea))!==0&&uo($,T,S,e):(N=vo(null,l,null,null,T,P,S,n,e,r,!0),g.set(P,N)),D.add(P)}for(const[V,G]of l.items)D.has(V)||A.skipped_effects.add(G.e);A.add_callback(x)}else x();s(p)}})}function jl(t,e,r,a,n,i,o,l,u){var v=(o&Mi)!==0,f=(o&(ka|Ea))!==0,m=e.length,g=r.items,p=r.first,_=p,y,x=null,k,N=[],S=[],T,P,D,A;if(v)for(A=0;A<m;A+=1)T=e[A],P=l(T,A),D=g.get(P),D!==void 0&&(D.a?.measure(),(k??=new Set).add(D));for(A=0;A<m;A+=1){if(T=e[A],P=l(T,A),D=g.get(P),D===void 0){var $=a.get(P);if($!==void 0){a.delete(P),g.set(P,$);var V=x?x.next:_;Ot(r,x,$),Ot(r,$,V),Qa($,V,n),x=$}else{var G=_?_.e.nodes_start:n;x=vo(G,r,x,x===null?r.first:x.next,T,P,A,i,o,u)}g.set(P,x),N=[],S=[],_=x.next;continue}if(f&&uo(D,T,A,o),(D.e.f&Dt)!==0&&(Na(D.e),v&&(D.a?.unfix(),(k??=new Set).delete(D))),D!==_){if(y!==void 0&&y.has(D)){if(N.length<S.length){var H=S[0],Q;x=H.prev;var fe=N[0],_e=N[N.length-1];for(Q=0;Q<N.length;Q+=1)Qa(N[Q],H,n);for(Q=0;Q<S.length;Q+=1)y.delete(S[Q]);Ot(r,fe.prev,_e.next),Ot(r,x,fe),Ot(r,_e,H),_=H,x=_e,A-=1,N=[],S=[]}else y.delete(D),Qa(D,_,n),Ot(r,D.prev,D.next),Ot(r,D,x===null?r.first:x.next),Ot(r,x,D),x=D;continue}for(N=[],S=[];_!==null&&_.k!==P;)(_.e.f&Dt)===0&&(y??=new Set).add(_),S.push(_),_=_.next;if(_===null)continue;D=_}N.push(D),x=D,_=D.next}if(_!==null||y!==void 0){for(var he=y===void 0?[]:pn(y);_!==null;)(_.e.f&Dt)===0&&he.push(_),_=_.next;var B=he.length;if(B>0){var ie=(o&Cs)!==0&&m===0?n:null;if(v){for(A=0;A<B;A+=1)he[A].a?.measure();for(A=0;A<B;A+=1)he[A].a?.fix()}ql(r,he,ie)}}v&&rr(()=>{if(k!==void 0)for(D of k)D.a?.apply()}),t.first=r.first&&r.first.e,t.last=x&&x.e;for(var ae of a.values())st(ae.e);a.clear()}function uo(t,e,r,a){(a&ka)!==0&&Mr(t.v,e),(a&Ea)!==0?Mr(t.i,r):t.i=r}function vo(t,e,r,a,n,i,o,l,u,v,f){var m=(u&ka)!==0,g=(u&Di)===0,p=m?g?il(n,!1,!1):ar(n):n,_=(u&Ea)===0?o:ar(o),y={i:_,v:p,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var x=document.createDocumentFragment();x.append(t=Kt())}return y.e=nt(()=>l(t,p,_,v),Gi),y.e.prev=r&&r.e,y.e.next=a&&a.e,r===null?f||(e.first=y):(r.next=y,r.e.next=y.e),a!==null&&(a.prev=y,a.e.prev=y.e),y}finally{}}function Qa(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=ta(i);n.before(i),i=o}}function Ot(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ue(t,e,...r){var a=t,n=se,i;Yt(()=>{n!==(n=e())&&(i&&(st(i),i=null),i=nt(()=>n(a,...r)))},lr)}function pr(t,e,r){var a=t,n,i,o=null,l=null;function u(){i&&(Gt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Yt(()=>{if(n!==(n=e())){var v=Ma();if(n){var f=a;v&&(o=document.createDocumentFragment(),o.append(f=Kt()),i&&Le.skipped_effects.add(i)),l=nt(()=>r(f,n))}v?Le.add_callback(u):u()}},lr)}function Ll(t,e,r,a,n,i){var o,l,u=null,v=t,f;Yt(()=>{const m=e()||null;var g=zi;m!==o&&(f&&(m===null?Gt(f,()=>{f=null,l=null}):m===l?Na(f):(st(f),Fn(!1))),m&&m!==l&&(f=nt(()=>{if(u=document.createElementNS(g,m),Nr(u,u),a){var p=u.appendChild(Kt());a(u,p)}Ce.nodes_end=u,v.before(u)})),o=m,o&&(l=o),Fn(!0))},lr)}function Bl(t,e){var r=void 0,a;Yt(()=>{r!==(r=e())&&(a&&(st(a),a=null),r&&(a=nt(()=>{Da(()=>r(t))})))})}function fo(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=fo(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function zl(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=fo(t))&&(a&&(a+=" "),a+=e);return a}function Ul(t){return typeof t=="object"?zl(t):t??""}const Kn=[...` 	
\r\f \v\uFEFF`];function Hl(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Kn.includes(a[o-1]))&&(l===a.length||Kn.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Jn(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Va(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Wl(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];a&&u.push(...Object.keys(a).map(Va)),n&&u.push(...Object.keys(n).map(Va));var v=0,f=-1;const y=t.length;for(var m=0;m<y;m++){var g=t[m];if(l?g==="/"&&t[m-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&t[m+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&f===-1)f=m;else if(g===";"||m===y-1){if(f!==-1){var p=Va(t.substring(v,f).trim());if(!u.includes(p)){g!==";"&&m++;var _=t.substring(v,m).trim();r+=" "+_+";"}}v=m+1,f=-1}}}}return a&&(r+=Jn(a)),n&&(r+=Jn(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Me(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=Hl(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var u in i){var v=!!i[u];(n==null||v!==!!n[u])&&t.classList.toggle(u,v)}return i}function Fa(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function ho(t,e,r,a){var n=t.__style;if(n!==e){var i=Wl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Fa(t,r?.[0],a[0]),Fa(t,r?.[1],a[1],"important")):Fa(t,r,a));return a}function xa(t,e,r=!1){if(t.multiple){if(e==null)return;if(!ea(e))return Hi();for(var a of t.options)a.selected=e.includes(Fr(a));return}for(a of t.options){var n=Fr(a);if(ll(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function po(t){var e=new MutationObserver(()=>{xa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),$n(()=>{e.disconnect()})}function Sa(t,e,r=e){var a=!0;Sn(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Fr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Fr(l)}r(o)}),Da(()=>{var n=e();if(xa(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=Fr(i),r(n))}t.__value=n,a=!1}),po(t)}function Fr(t){return"__value"in t?t.__value:t.value}const Hr=Symbol("class"),Wr=Symbol("style"),go=Symbol("is custom element"),mo=Symbol("is html");function Gl(t,e){var r=Ia(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Ka(t,e){var r=Ia(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function Ql(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function nr(t,e,r,a){var n=Ia(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[bi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&_o(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Vl(t,e,r,a,n=!1,i=!1){var o=Ia(t),l=o[go],u=!o[mo],v=e||{},f=t.tagName==="OPTION";for(var m in e)m in r||(r[m]=null);r.class?r.class=Ul(r.class):r[Hr]&&(r.class=null),r[Wr]&&(r.style??=null);var g=_o(t);for(const T in r){let P=r[T];if(f&&T==="value"&&P==null){t.value=t.__value="",v[T]=P;continue}if(T==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";Me(t,p,P,a,e?.[Hr],r[Hr]),v[T]=P,v[Hr]=r[Hr];continue}if(T==="style"){ho(t,P,e?.[Wr],r[Wr]),v[T]=P,v[Wr]=r[Wr];continue}var _=v[T];if(!(P===_&&!(P===void 0&&t.hasAttribute(T)))){v[T]=P;var y=T[0]+T[1];if(y!=="$$")if(y==="on"){const D={},A="$$"+T;let $=T.slice(2);var x=kl($);if($l($)&&($=$.slice(0,-7),D.capture=!0),!x&&_){if(P!=null)continue;t.removeEventListener($,v[A],D),v[A]=null}if(P!=null)if(x)t[`__${$}`]=P,Qe([$]);else{let V=function(G){v[T].call(this,G)};var S=V;v[A]=En($,t,V,D)}else x&&(t[`__${$}`]=void 0)}else if(T==="style")nr(t,T,P);else if(T==="autofocus")dl(t,!!P);else if(!l&&(T==="__value"||T==="value"&&P!=null))t.value=t.__value=P;else if(T==="selected"&&f)Ql(t,P);else{var k=T;u||(k=Al(k));var N=k==="defaultValue"||k==="defaultChecked";if(P==null&&!l&&!N)if(o[T]=null,k==="value"||k==="checked"){let D=t;const A=e===void 0;if(k==="value"){let $=D.defaultValue;D.removeAttribute(k),D.defaultValue=$,D.value=D.__value=A?$:null}else{let $=D.defaultChecked;D.removeAttribute(k),D.defaultChecked=$,D.checked=A?$:!1}}else t.removeAttribute(T);else N||g.includes(k)&&(l||typeof P!="string")?(t[k]=P,k in o&&(o[k]=Ze)):typeof P!="function"&&nr(t,k,P)}}}return v}function ln(t,e,r=[],a=[],n,i=!1,o=!1){Us(r,a,l=>{var u=void 0,v={},f=t.nodeName==="SELECT",m=!1;if(Yt(()=>{var p=e(...l.map(s)),_=Vl(t,u,p,n,i,o);m&&f&&"value"in p&&xa(t,p.value);for(let x of Object.getOwnPropertySymbols(v))p[x]||st(v[x]);for(let x of Object.getOwnPropertySymbols(p)){var y=p[x];x.description===Ui&&(!u||y!==u[x])&&(v[x]&&st(v[x]),v[x]=nt(()=>Bl(t,()=>y))),_[x]=y}u=_}),f){var g=t;Da(()=>{xa(g,u.value,!0),po(g)})}m=!0})}function Ia(t){return t.__attributes??={[go]:t.nodeName.includes("-"),[mo]:t.namespaceURI===Bi}}var Yn=new Map;function _o(t){var e=t.getAttribute("is")||t.nodeName,r=Yn.get(e);if(r)return r;Yn.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=hi(n);for(var o in a)a[o].set&&r.push(o);n=gn(n)}return r}const Fl=()=>performance.now(),Wt={tick:t=>requestAnimationFrame(t),now:()=>Fl(),tasks:new Set};function bo(){const t=Wt.now();Wt.tasks.forEach(e=>{e.c(t)||(Wt.tasks.delete(e),e.f())}),Wt.tasks.size!==0&&Wt.tick(bo)}function Kl(t){let e;return Wt.tasks.size===0&&Wt.tick(bo),{promise:new Promise(r=>{Wt.tasks.add(e={c:t,f:r})}),abort(){Wt.tasks.delete(e)}}}function Zn(t,e){Lr(()=>{t.dispatchEvent(new CustomEvent(e))})}function Jl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Xn(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Jl(n.trim());e[o]=i.trim()}return e}const Yl=t=>t;function Zl(t,e,r,a){var n=(t&qi)!==0,i="in",o,l=e.inert,u=e.style.overflow,v,f;function m(){return Lr(()=>o??=r()(e,a?.()??{},{direction:i}))}var g={is_global:n,in(){e.inert=l,v?.abort(),Zn(e,"introstart"),v=yo(e,m(),f,1,()=>{Zn(e,"introend"),v?.abort(),v=o=void 0,e.style.overflow=u})},out(x){{x?.(),o=void 0;return}},stop:()=>{v?.abort()}},p=Ce;if((p.transitions??=[]).push(g),wa){var _=n;if(!_){for(var y=p.parent;y&&(y.f&lr)!==0;)for(;(y=y.parent)&&(y.f&or)===0;);_=!y||(y.f&$a)!==0}_&&Da(()=>{wr(()=>g.in())})}}function yo(t,e,r,a,n){if(kr(e)){var i,o=!1;return rr(()=>{if(!o){var y=e({direction:"in"});i=yo(t,y,r,a,n)}}),{abort:()=>{o=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!e?.duration)return n(),{abort:se,deactivate:se,reset:se,t:()=>a};const{delay:l=0,css:u,tick:v,easing:f=Yl}=e;var m=[];if(v&&v(0,1),u){var g=Xn(u(0,1));m.push(g,g)}var p=()=>1-a,_=t.animate(m,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var y=1-a,x=a-y,k=e.duration*Math.abs(x),N=[];if(k>0){var S=!1;if(u)for(var T=Math.ceil(k/16.666666666666668),P=0;P<=T;P+=1){var D=y+x*f(P/T),A=Xn(u(D,1-D));N.push(A),S||=A.overflow==="hidden"}S&&(t.style.overflow="hidden"),p=()=>{var $=_.currentTime;return y+x*f($/k)},v&&Kl(()=>{if(_.playState!=="running")return!1;var $=p();return v($,1-$),!0})}_=t.animate(N,{duration:k,fill:"forwards"}),_.onfinish=()=>{p=()=>a,v?.(a,1-a),n()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=se)},deactivate:()=>{n=se},reset:()=>{},t:()=>p()}}function Ge(t,e,r=e){var a=new WeakSet;Sn(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ja(t)?Ya(i):i,r(i),Le!==null&&a.add(Le),await xl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),wr(e)==null&&t.value&&(r(Ja(t)?Ya(t.value):t.value),Le!==null&&a.add(Le)),Pn(()=>{var n=e();if(t===document.activeElement){var i=pa??Le;if(a.has(i))return}Ja(t)&&n===Ya(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function cn(t,e,r=e){Sn(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),wr(e)==null&&r(t.checked),Pn(()=>{var a=e();t.checked=!!a})}function Ja(t){var e=t.type;return e==="number"||e==="range"}function Ya(t){return t===""?null:+t}let ca=!1;function Xl(t){var e=ca;try{return ca=!1,[t(),ca]}finally{ca=e}}const ec={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function ve(t,e,r){return new Proxy({props:t,exclude:e},ec)}const tc={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(kr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];kr(n)&&(n=n());const i=er(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(kr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=er(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===hr||e===Ds)return!1;for(let r of t.props)if(kr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(kr(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function ge(...t){return new Proxy({props:t},tc)}function ce(t,e,r,a){var n=!qr||(r&Ci)!==0,i=(r&Oi)!==0,o=(r&Ri)!==0,l=a,u=!0,v=()=>(u&&(u=!1,l=o?wr(a):a),l),f;if(i){var m=hr in t||Ds in t;f=er(t,e)?.set??(m&&e in t?S=>t[e]=S:void 0)}var g,p=!1;i?[g,p]=Xl(()=>t[e]):g=t[e],g===void 0&&a!==void 0&&(g=v(),f&&(n&&Pi(),f(g)));var _;if(n?_=()=>{var S=t[e];return S===void 0?v():(u=!0,S)}:_=()=>{var S=t[e];return S!==void 0&&(l=void 0),S===void 0?l:S},n&&(r&Ii)===0)return _;if(f){var y=t.$$legacy;return(function(S,T){return arguments.length>0?((!n||!T||y||p)&&f(T?_():S),S):_()})}var x=!1,k=((r&Ni)!==0?Ta:wn)(()=>(x=!1,_()));i&&s(k);var N=Ce;return(function(S,T){if(arguments.length>0){const P=T?s(k):n&&i?Re(S):S;return b(k,P),x=!0,l!==void 0&&(l=P),S}return yr&&x||(N.f&br)!==0?k.v:s(k)})}function wo(t){Fe===null&&Ns(),qr&&Fe.l!==null?ac(Fe).m.push(t):Lt(()=>{const e=wr(t);if(typeof e=="function")return e})}function rc(t){Fe===null&&Ns(),wo(()=>()=>wr(t))}function ac(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const nc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(nc);const sc="modulepreload",oc=function(t){return"/"+t},es={},un=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let v=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");n=v(r.map(f=>{if(f=oc(f),f in es)return;es[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":sc,m||(p.as="script"),p.crossOrigin="",p.href=f,u&&p.setAttribute("nonce",u),document.head.appendChild(p),m)return new Promise((_,y)=>{p.addEventListener("load",_),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&i(u.reason);return e().catch(i)})};class ts extends Map{#e=new Map;#t=L(0);#n=L(0);#o=Vt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#n.v=super.size}}#d(e){return Vt===this.#o?L(e):ar(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#c(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#d(0),a.set(e,n),b(this.#n,super.size),qt(l);else if(i!==r){qt(n);var u=l.reactions===null?null:new Set(l.reactions),v=u===null||!n.reactions?.every(f=>u.has(f));v&&qt(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#n,super.size),b(a,-1),qt(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#n,0);for(var r of e.values())b(r,-1);qt(this.#t),e.clear()}}#c(){s(this.#t);var e=this.#e;if(this.#n.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#d(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#c(),super.values()}entries(){return this.#c(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#n),super.size}}class ic{#e;#t;constructor(e,r){this.#e=e,this.#t=yn(r)}get current(){return this.#t(),this.#e()}}const lc=/\(.+\)/,cc=new Set(["all","print","screen","and","or","not","only"]);class uc extends ic{constructor(e,r){let a=lc.test(e)||e.split(/[\s,]+/).some(i=>cc.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>on(n,"change",i))}}const dc=typeof window<"u"?window:void 0;function vc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class fc{#e;#t;constructor(e={}){const{window:r=dc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=yn(n=>{const i=on(r,"focusin",n),o=on(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?vc(this.#e):null}}new fc;function hc(t){return typeof t=="function"}function pc(t,e){if(hc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function gc(t,e){let r=L(null);const a=Y(()=>pc(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const u=new Promise((v,f)=>{o=v,l=f});b(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Mt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function ra(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function aa(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function na(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(u=>Xt(u.q.toString(),u.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,u)=>{const v=a.get(u)||0,f=l-v;f>0&&(n.push({q:f,u}),i.push(Xt(f.toString(),u)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function lt(t){return t?.length?t.map(e=>Xt(e.q.toString(),e.u)).join(" et "):"-"}function Xt(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function Oa(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function xo(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function So(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function Ra(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Oa(e)}function An(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,u=a.get(o)||0,v=l-u;Math.abs(v)>.001&&n.push({q:v,u:o})}return n}function qa(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>Xt(i.q.toString(),i.u)).join(" et "),n=r.map(i=>Xt(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+Xt(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>Xt(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function $o(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function mc(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const _c=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Oa,calculateAndFormatMissing:na,calculateGlobalTotal:Ra,calculateTotalQuantityArray:aa,formatSingleQuantity:Xt,formatStockResult:qa,formatTotalQuantity:lt,generateRecipesWithDates:So,hasConversions:xo,matchesFilters:$o,safeJsonParse:Mt,slugify:mc,subtractQuantities:An,transformPurchasesToNumericQuantity:ra},Symbol.toStringTag,{value:"Module"}));function rs(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function bc(t){const e=Mt(t.specs)??null,r=aa(ra(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=na(a,r),o=Mt(t.stockReel)??null,l=lt(r),u=t.store?Mt(t.store):null,v=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:u,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:v,displayTotalNeeded:lt(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Mt(t.totalNeededOverride),displayTotalOverride:(()=>{const f=Mt(t.totalNeededOverride);return f?lt([f.totalOverride]):""})()}}function ua(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Mt(a):e.specsParsed,i=aa(ra(r??[])),o=lt(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:u,display:v}=na(l,i),f=t.stockReel??e.stockReel,m=f?Mt(f):e.stockParsed,g=t.store??e.store,p=g?Mt(g):e.storeInfo,_=m?`${m.quantity} ${m.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:g,stockReel:f,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:p,stockParsed:m,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:u,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:v,displayTotalNeeded:lt(l),totalNeededOverrideParsed:Mt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const y=Mt(t.totalNeededOverride??e.totalNeededOverride);return y?lt([y.totalOverride]):""})()}}class yc{#e=L(Re([]));MAX_TOASTS=3;get toasts(){return s(this.#e).sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source},this.#n(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#n(e)}#n(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?24e3:23e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const Pt=new yc;function ja(t){return[...t].sort()}function wc(t){return new Date(t)<new Date}function xc(t){if(t.length===0)return!0;const e=new Date(La(t));return e.setHours(23,59,59,999),e<new Date}function Po(t){return t.length===0?null:ja(t)[0]}function La(t){return t.length===0?null:ja(t).pop()??null}function Sc(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),ja(t).find(r=>new Date(r)>=e)||null}function $c(t){if(t.length===0)return null;const e=ja(t),r=xc(t),a=wc(e[0]),n=new Date;let i;return r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],{start:i,end:e[e.length-1]}}function ko(t){const e=Sc(t),r=La(t);return!e||!r?null:{start:e,end:r}}function Pc(t){const e=Po(t),r=La(t);return!e||!r?null:{start:e,end:r}}function Eo(t,e){const r=Pc(e);return r?t.start===r.start&&t.end===r.end:!1}function kc(t,e){const r=ko(e);return r?t.start===r.start&&t.end===r.end:!1}function Ec(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Kr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Za(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function Ac(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?lt(i):"-",l=Tc(t,e,i),u=l.filter(f=>f.q>0),v=l.filter(f=>f.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:u,missingStockQuantities:v,availableStockFormatted:qa(l),missingStockFormatted:lt(v.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:u.length>0,hasMissingStock:v.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function Tc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const u of t.purchases)Mc(u,e,n)&&i.push({q:u.quantity,u:u.unit});const o=[...a,...i],l=Oa(o);return An(l,r)}function Mc(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Dc(t,e){const r=t.totalNeededArray||[],a=r.length>0?lt(r):"-",n=Ao(t,e[0],e[e.length-1],r),i=n.filter(v=>v.q>0),o=n.filter(v=>v.q<0),l=[...e].sort(),u=new Map;if(t.byDate)for(const[v,f]of Object.entries(t.byDate))f.recipes?.length&&u.set(v,f.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:qa(n),missingStockFormatted:lt(o.map(v=>({q:Math.abs(v.q),u:v.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:u}}function Nc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let u=0,v=0;for(const[y,x]of Object.entries(t.byDate)){const k=new Date(y);k>=a&&k<=n&&(i.push(y),u+=x.totalAssiettes||0,x.recipes?.length&&(o.set(y,x.recipes),v+=x.recipes.length),x.totalConsolidated&&x.totalConsolidated.forEach(({q:N,u:S})=>{l.set(S,(l.get(S)||0)+N)}))}const f=Array.from(l.entries()).map(([y,x])=>({q:x,u:y})),m=f.length>0?lt(f):"-",g=Ao(t,e,r,f),p=g.filter(y=>y.q>0),_=g.filter(y=>y.q<0);return{requiredQuantities:f,requiredQuantitiesFormatted:m,stockBalance:g,availableStockQuantities:p,missingStockQuantities:_,availableStockFormatted:qa(g),missingStockFormatted:lt(_.map(y=>({q:Math.abs(y.q),u:y.u}))),hasAvailableStock:p.length>0,hasMissingStock:_.length>0,totalRecipesInRange:v,totalPortionsInRange:u,datesInSelectedRange:i,recipesByDate:o}}function Ao(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const v of t.purchases)Cc(v,e,r,i)&&o.push({q:v.quantity,u:v.unit});const l=[...n,...o],u=Oa(l);return An(u,a)}function Cc(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n>=e&&n<=r}function Ic(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class j{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}j.equal=(t,e)=>new j("equal",t,e).toString();j.notEqual=(t,e)=>new j("notEqual",t,e).toString();j.lessThan=(t,e)=>new j("lessThan",t,e).toString();j.lessThanEqual=(t,e)=>new j("lessThanEqual",t,e).toString();j.greaterThan=(t,e)=>new j("greaterThan",t,e).toString();j.greaterThanEqual=(t,e)=>new j("greaterThanEqual",t,e).toString();j.isNull=t=>new j("isNull",t).toString();j.isNotNull=t=>new j("isNotNull",t).toString();j.between=(t,e,r)=>new j("between",t,[e,r]).toString();j.startsWith=(t,e)=>new j("startsWith",t,e).toString();j.endsWith=(t,e)=>new j("endsWith",t,e).toString();j.select=t=>new j("select",void 0,t).toString();j.search=(t,e)=>new j("search",t,e).toString();j.orderDesc=t=>new j("orderDesc",t).toString();j.orderAsc=t=>new j("orderAsc",t).toString();j.orderRandom=()=>new j("orderRandom").toString();j.cursorAfter=t=>new j("cursorAfter",void 0,t).toString();j.cursorBefore=t=>new j("cursorBefore",void 0,t).toString();j.limit=t=>new j("limit",void 0,t).toString();j.offset=t=>new j("offset",void 0,t).toString();j.contains=(t,e)=>new j("contains",t,e).toString();j.notContains=(t,e)=>new j("notContains",t,e).toString();j.notSearch=(t,e)=>new j("notSearch",t,e).toString();j.notBetween=(t,e,r)=>new j("notBetween",t,[e,r]).toString();j.notStartsWith=(t,e)=>new j("notStartsWith",t,e).toString();j.notEndsWith=(t,e)=>new j("notEndsWith",t,e).toString();j.createdBefore=t=>j.lessThan("$createdAt",t);j.createdAfter=t=>j.greaterThan("$createdAt",t);j.createdBetween=(t,e)=>j.between("$createdAt",t,e);j.updatedBefore=t=>j.lessThan("$updatedAt",t);j.updatedAfter=t=>j.greaterThan("$updatedAt",t);j.updatedBetween=(t,e)=>j.between("$updatedAt",t,e);j.or=t=>new j("or",void 0,t.map(e=>JSON.parse(e))).toString();j.and=t=>new j("and",void 0,t.map(e=>JSON.parse(e))).toString();j.distanceEqual=(t,e,r,a=!0)=>new j("distanceEqual",t,[[e,r,a]]).toString();j.distanceNotEqual=(t,e,r,a=!0)=>new j("distanceNotEqual",t,[[e,r,a]]).toString();j.distanceGreaterThan=(t,e,r,a=!0)=>new j("distanceGreaterThan",t,[[e,r,a]]).toString();j.distanceLessThan=(t,e,r,a=!0)=>new j("distanceLessThan",t,[[e,r,a]]).toString();j.intersects=(t,e)=>new j("intersects",t,[e]).toString();j.notIntersects=(t,e)=>new j("notIntersects",t,[e]).toString();j.crosses=(t,e)=>new j("crosses",t,[e]).toString();j.notCrosses=(t,e)=>new j("notCrosses",t,[e]).toString();j.overlaps=(t,e)=>new j("overlaps",t,[e]).toString();j.notOverlaps=(t,e)=>new j("notOverlaps",t,[e]).toString();j.touches=(t,e)=>new j("touches",t,[e]).toString();j.notTouches=(t,e)=>new j("notTouches",t,[e]).toString();var as;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(as||(as={}));var To,Mo;class sr{static custom(e){return e}static unique(e=7){const r=Ic(sr,To,"m",Mo).call(sr);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}To=sr,Mo=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var ns;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(ns||(ns={}));var ss;(function(t){t.Totp="totp"})(ss||(ss={}));var os;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(os||(os={}));var is;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(is||(is={}));var ls;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(ls||(ls={}));var cs;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(cs||(cs={}));var us;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(us||(us={}));var ds;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(ds||(ds={}));var vs;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(vs||(vs={}));var fs;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(fs||(fs={}));var hs;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(hs||(hs={}));var ps;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(ps||(ps={}));function Do(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function mt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Oc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function dr(){return localStorage.getItem("appwrite-user-name")||""}async function Rc(t,e,r=100){try{const{databases:a,config:n}=await mt(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[j.greaterThan("$updatedAt",e),j.equal("mainId",t),j.limit(r),j.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function No(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await mt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[j.equal("mainId",t),j.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),j.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[j.greaterThan("$updatedAt",r),j.equal("mainId",t),j.limit(a),j.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function xr(t,e,r=!0){const{databases:a,config:n}=await mt();return r&&(e.updatedBy=dr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function Ht(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=Do(a,e),i=await Oc(n),{databases:o,config:l}=await mt(),u=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),u}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function Co(t,e){try{const{databases:r,config:a}=await mt(),{slugify:n}=await un(async()=>{const{slugify:f}=await Promise.resolve().then(()=>_c);return{slugify:f}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},u={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:dr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,u);const v=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,u);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),v}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function Io(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await xr(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Oo(t,e){return xr(t,{who:e})}async function dn(t,e){return xr(t,{stockReel:e})}async function Tn(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await xr(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function Ro(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await xr(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function qo(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await xr(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Ht(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function jo(t){const{databases:e,config:r}=await mt(),a={...t,createdBy:dr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,sr.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Mn(t,e){try{const{databases:r,config:a}=await mt(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function Lo(t){try{const{databases:e,config:r}=await mt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Bo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await mt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[j.equal("$id",t),j.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function zo(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(p=>p.includes("products.")),v=o.some(p=>p.includes("purchases.")),f=o.some(p=>p.includes(".create")),m=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(u){const p=l;p.updatedBy&&p.updatedBy!==dr()&&(f||m?Pt.info(`${p.updatedBy} a modifié le produit "${p.productName}"`,{source:"realtime-other"}):g&&Pt.info(`${p.updatedBy} a supprimé un produit`,{source:"realtime-other"})),f&&e.onProductCreate?e.onProductCreate(p):m&&e.onProductUpdate?e.onProductUpdate(p):g&&e.onProductDelete&&e.onProductDelete(p.$id)}else if(v){const p=l;if(p.createdBy&&p.createdBy!==dr()){const _=p.products?.[0]?.productName||"un produit";f&&p.who!==dr()?Pt.info(`${p.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):m&&p.who!==dr()?Pt.info(`${p.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):g&&Pt.info(`${p.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}f&&e.onPurchaseCreate?e.onPurchaseCreate(p):m&&e.onPurchaseUpdate?e.onPurchaseUpdate(p):g&&e.onPurchaseDelete&&e.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Uo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await mt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Ho(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await mt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Dn(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Wo(t,e,r,a){return Dn({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Go(t,e,r,a="replace"){return Dn({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Qo(t,e,r,a={}){try{const{databases:n,config:i}=await mt(),u=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const f of r){const m={products:[e],mainId:t,quantity:f.q,unit:f.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:a.invoiceId,invoiceTotal:null},g=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,sr.unique(),m);v.push(g)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${e}`),v}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Vo(t,e,r,a,n,i){try{const{databases:o,config:l}=await mt(),f=await(await window.AppwriteClient.getAccount()).get(),m=e||sr.unique(),g=f.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const p={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:g||f.name,price:r,invoiceId:m,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:f.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,sr.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function qc(t){try{const{databases:e,config:r}=await mt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[j.equal("mainId",t),j.equal("status","expense"),j.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const gs=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Dn,batchUpdateStore:Wo,batchUpdateWho:Go,createExpensePurchase:Vo,createMainDocument:Ho,createManualProduct:Co,createPurchase:jo,createQuickValidationPurchases:Qo,deletePurchase:Lo,enrichedProductToAppwriteProduct:Do,loadMainEventData:Uo,loadOrphanPurchases:qc,loadPurchasesListByIds:Bo,loadUpdatedPurchases:Rc,removeTotalOverride:Ro,subscribeToRealtime:zo,syncProductsWithPurchases:No,updateProduct:xr,updateProductBatch:qo,updateProductStock:dn,updateProductStore:Io,updateProductWho:Oo,updatePurchase:Mn,updateTotalOverride:Tn,upsertProduct:Ht},Symbol.toStringTag,{value:"Module"}));async function jc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function ms(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Lc(t,e){if(!t)return!0;try{return(await jc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Fo(t,e){const r=Ra(t.byDate),a=aa(ra([])),{numeric:n,display:i}=na(r,a);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:lt(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:""}}function Bc(t,e){return t.map(r=>Fo(r,e))}class zc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(u=>{u.key===this.LAST_SYNC_KEY?l.lastSync=u.value:u.key===this.ALL_DATES_KEY?l.allDates=u.value||[]:u.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=u.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Uc(t){const e=new zc(t);return await e.open(),e}function Hc(t){return!!(t.isMerged||t.totalNeededOverride)}function Wc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function Gc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Map;for(const[i,o]of t)a.set(o.productHugoUuid,i);const n=new Set;for(const i of e.ingredients){const o=i.productSemanticKey||`${e.mainGroup_id}_${i.ingredientHugoUuid}`;n.add(o);const l=a.get(i.ingredientHugoUuid),u=l?t.get(l):void 0;if(u){if(Wc(u.totalNeededRaw,i.totalNeededRaw)){const f=Qc(u,i);if(f&&r.overrideConflicts.push(f),u.isMerged){const m=u.displayTotalNeeded;_s(u,i),r.mergedProductsUpdated.push({product:u,oldDisplayTotal:m,newDisplayTotal:u.displayTotalNeeded,currentOverride:u.totalNeededOverrideParsed,semanticKey:o})}else _s(u,i);r.updated.push(o)}t.set(o,u)}else{r.added.push(i);const v=Fo(i,e.mainGroup_id);t.set(v.$id,v)}}for(const[i,o]of t)n.has(i)||(r.removed.push(o),!Hc(o)&&!o.purchases?.length&&!o.stockReel&&!o.who?.length&&t.delete(i));return r.overrideConflicts.length>0&&await Vc(r.overrideConflicts),r.summary=Kc(r),r}function Qc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=Ra(e.byDate),a=lt(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Vc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await Tn(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function _s(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Fc(t)}function Fc(t){t.totalNeededArray=Ra(t.byDate),t.displayTotalNeeded=lt(t.totalNeededArray);const e=aa(ra(t.purchases)),{numeric:r,display:a}=na(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Kc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Jc{isMobileQuery=new uc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return Pt.toasts}get toast(){return Pt}#e=L(Re({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=L(Re({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}}const Ir=new Jc;class da{#e=L();get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}#t;#n;constructor(e,r,a){this.data=e,this.#t=r,this.#n=a}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#o=Y(()=>{const e=this.#t(),r=this.#n();let a;if(e.start&&e.start===e.end)a=Ac(this.data,e.start);else if(Eo(e,r))a=Dc(this.data,r),a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]);else if(e.start&&e.end)a=Nc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#o)}set stats(e){b(this.#o,e)}}const bs=1e3;class Yc{#e=new ts;#t=new ts;#n=L(null);#o=L(null);#d=L(!1);#c=L(!1);#u=L(null);#l=L(!1);#v=L(!1);#i=L(null);#f=L(null);get currentMainId(){return s(this.#n)}#a=L(Re([]));#h=L(Re({start:null,end:null}));get dateRange(){return s(this.#h)}set dateRange(e){b(this.#h,e,!0)}#p=Y(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return s(this.#p)}set hasSingleDateInRange(e){b(this.#p,e)}#m=Y(()=>s(this.#a).length===1);get hasSingleDateEvent(){return s(this.#m)}set hasSingleDateEvent(e){b(this.#m,e)}#b=Y(()=>{if(s(this.#a).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#b)}set isEventPassed(e){b(this.#b,e)}#s=null;#y=null;#_=L(!1);#g=null;#x=L(!1);#q=L();#S=L(Re([]));get hasPendingConflicts(){return s(this.#S).length>0}get pendingConflicts(){return s(this.#S)}#r=L(Re({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#c)}get error(){return s(this.#u)}get lastSync(){return s(this.#i)}get syncing(){return s(this.#l)}get availableDates(){return s(this.#a)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;this.dateRange={start:a,end:n}}isFullRange(){return Eo(this.dateRange,s(this.#a))}initializeDateRange(){const e=$c(s(this.#a));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=ko(s(this.#a));e&&(this.dateRange=e)}isUpcomingRange(){return kc(this.dateRange,s(this.#a))}get firstAvailableDate(){return Po(s(this.#a))}get lastAvailableDate(){return La(s(this.#a))}get realtimeConnected(){return s(this.#v)}#k=Y(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#k)}set enrichedProducts(e){b(this.#k,e)}#E=Y(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!$o(o,s(this.#r)))continue;let v=!1;o.byDate&&(v=Object.keys(o.byDate).some(f=>{const m=new Date(f);return m>=e&&m<=r})),(v||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#E)}set filteredProductsMap(e){b(this.#E,e)}#A=Y(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#A)}set stats(e){b(this.#A,e)}#T=Y(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#T)}set uniqueStores(e){b(this.#T,e)}#M=Y(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#M)}set uniqueWho(e){b(this.#M,e)}#D=Y(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#D)}set uniqueProductTypes(e){b(this.#D,e)}#N=Y(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#r).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#r).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#N)}set groupedFilteredProducts(e){b(this.#N,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#n)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#n,e,!0),b(this.#o,r,!0);try{this.#s=await Uc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#u,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await ms(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#f,n.hugoContentHash,!0),Bc(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new da(l,()=>this.dateRange,()=>s(this.#a)))}),b(this.#a,[...n.allDates],!0),await Uo(e)||await Ho(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#C()}this.initializeDateRange(),await this.#L(),await this.#Y(),b(this.#d,!0);const a=this.#J();this.#y=zo(e,a),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#u,n,!0),console.error("[ProductsStore]",n,a),a}}async#j(){if(this.#s)try{const e=await this.#s.loadProducts();e.forEach((a,n)=>{this.#e.set(n,new da(a,()=>this.dateRange,()=>s(this.#a)))});const r=await this.#s.loadMetadata();b(this.#i,r.lastSync,!0),b(this.#a,[...r.allDates],!0),b(this.#f,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#L(){if(s(this.#n)){b(this.#l,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#n)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#i)}`);const e=await No(s(this.#n),{lastSync:s(this.#i),limit:bs});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#O(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new da(n,()=>this.dateRange,()=>s(this.#a)))}),s(this.#i)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#i)}`);const{loadUpdatedPurchases:r}=await un(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>gs);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#n),s(this.#i),bs);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#P(i,n)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#l,!1)}}}async#B(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,$r(r.data))),await this.#s.saveProducts(e),await this.#s.saveMetadata({lastSync:s(this.#i),allDates:[...s(this.#a)],hugoContentHash:s(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#Z(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,$r(r.data))),await this.#s.saveProducts(e),await this.#s.updateLastSync(s(this.#i)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#C(){if(this.#s)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,$r(r.data))),await this.#s.saveProducts(e),await this.#s.updateLastSync(s(this.#i)),await this.#s.updateAllDates([...s(this.#a)]),await this.#s.updateHugoContentHash(s(this.#f)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#$(e){if(!(!this.#s||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>this.#s.upsertProduct($r(a)));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#i,new Date().toISOString(),!0)}async#I(){if(!s(this.#o)||s(this.#c))return!1;try{const e=await Lc(s(this.#f),s(this.#o));return e&&!s(this.#_)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#_,!0),await this.#U()),b(this.#q,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#U(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await ms(s(this.#o)),r=new Map;this.#e.forEach((n,i)=>r.set(i,n.data));const a=await Gc(r,e);if(console.log(`[ProductsStore  - hugo change] ${a.summary}`),a.overrideConflicts.length>0&&(b(this.#S,a.overrideConflicts,!0),Pt.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Ir.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const n=a.removed.filter(i=>i.purchases?.length||i.stockReel||i.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#a,[...e.allDates],!0),b(this.#f,e.hugoContentHash,!0),this.initializeDateRange(),await this.#C(),(a.added.length||a.updated.length||a.removed.length)&&Pt.success(a.summary),b(this.#_,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),Pt.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#g&&clearInterval(this.#g),this.#g=setInterval(async()=>{await this.#I()},6e4)}#W(){this.#g&&(clearInterval(this.#g),this.#g=null)}#O(e,r){return r?ua(e,r):bc(e)}#X(e){e.length&&(e.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#w(e){const r=this.#e.get(e.$id),a=this.#O(e,r?.data);r?r.update(a):this.#e.set(e.$id,new da(a,()=>this.dateRange,()=>s(this.#a)))}#G(e){this.#e.delete(e)}async#Q(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#K(r,e),r}async#V(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Bo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#F(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#w(a)}),r.map(a=>a.$id)}#K(e,r){const a=rs(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[];if(!u.some(v=>v.$id===a.$id)){const v=ua({...l,purchases:[...u,a],status:"active"},l);n.push(v)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#P(e,r){const a=rs(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[],v=u.findIndex(f=>f.$id===a.$id);if(v>=0){const f=[...u];f[v]=a;const m=ua({...l,purchases:f,status:"active"},l);n.push(m)}else{const f=ua({...l,purchases:[...u,r],status:"active"},l);n.push(f)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#J(){return{onProductCreate:e=>{if(this.#w(e),this.#s){const r=this.#e.get(e.$id);r&&this.#s.upsertProduct($r(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#w(e),this.#s){const r=this.#e.get(e.$id);r&&this.#s.upsertProduct($r(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#G(e),this.#s&&this.#s.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#Q(e);await this.#$(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#V(e);await this.#$(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#F(e);await this.#$(r)},onConnect:()=>{b(this.#v,!0)},onDisconnect:()=>{b(this.#v,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=gc(e=>{s(this.#r).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#r).selectedProductTypes.indexOf(e);r>-1?s(this.#r).selectedProductTypes.splice(r,1):s(this.#r).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#r).selectedTemperatures.indexOf(e);r>-1?s(this.#r).selectedTemperatures.splice(r,1):s(this.#r).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#r).selectedProductTypes=[],s(this.#r).selectedTemperatures=[]}setGroupBy(e){s(this.#r).groupBy=e}toggleStore(e){const r=s(this.#r).selectedStores.indexOf(e);r>-1?s(this.#r).selectedStores.splice(r,1):s(this.#r).selectedStores.push(e)}toggleWho(e){const r=s(this.#r).selectedWho.indexOf(e);r>-1?s(this.#r).selectedWho.splice(r,1):s(this.#r).selectedWho.push(e)}clearStoreFilters(){s(this.#r).selectedStores=[]}clearWhoFilters(){s(this.#r).selectedWho=[]}handleSort(e){s(this.#r).sortColumn===e?s(this.#r).sortDirection=s(this.#r).sortDirection==="asc"?"desc":"asc":(s(this.#r).sortColumn=e,s(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#r).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#r).sortColumn],i=a[s(this.#r).sortColumn];return s(this.#r).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#r).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#r).sortDirection==="asc"?-1:1:n>i?s(this.#r).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?xo(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#a,[],!0),b(this.#i,null),this.#s&&await this.#s.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#y?.(),this.#y=null,this.#W(),this.#s&&(this.#s.close(),this.#s=null),console.log("[ProductsStore] Ressources nettoyées")}async#Y(){if(s(this.#n))try{const{loadOrphanPurchases:e}=await un(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>gs);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#n));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#R=Y(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const u=i.who||"Non défini";a[u]=(a[u]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const u=l.store||"Non défini";r[u]=(r[u]||0)+l.price;const v=l.who||"Non défini";a[v]=(a[v]||0)+l.price;const f={...l,_productName:o.productName};n.push(f)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#R)}set financialStats(e){b(this.#R,e)}}const W=new Yc;function ys(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Zc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Xc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var eu=Nl("<svg><!><!></svg>");function me(t,e){F(e,!0);const r=ce(e,"color",3,"currentColor"),a=ce(e,"size",3,24),n=ce(e,"strokeWidth",3,2),i=ce(e,"absoluteStrokeWidth",3,!1),o=ce(e,"iconNode",19,()=>[]),l=ve(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=eu();ln(u,m=>({...Xc,...l,width:a(),height:a(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var v=c(u);et(v,17,o,Cr,(m,g)=>{var p=Y(()=>_a(s(g),2));let _=()=>s(p)[0],y=()=>s(p)[1];var x=X(),k=q(x);Ll(k,_,!0,(N,S)=>{ln(N,()=>({...y()}))}),h(m,x)});var f=d(v);ue(f,()=>e.children??se),h(t,u),K()}function Ko(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];me(t,ge({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Jo(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];me(t,ge({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function tu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];me(t,ge({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ru(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];me(t,ge({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function au(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];me(t,ge({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function nu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];me(t,ge({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Or(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];me(t,ge({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function su(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];me(t,ge({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Yo(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];me(t,ge({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ou(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];me(t,ge({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function iu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];me(t,ge({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function lu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];me(t,ge({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ws(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(t,ge({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function cu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(t,ge({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function uu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];me(t,ge({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function du(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];me(t,ge({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function xs(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];me(t,ge({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function vu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];me(t,ge({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function fu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];me(t,ge({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Ba(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];me(t,ge({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function hu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];me(t,ge({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function pu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];me(t,ge({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function va(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];me(t,ge({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Zo(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];me(t,ge({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Xo(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];me(t,ge({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function gu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];me(t,ge({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function mu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];me(t,ge({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function _u(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];me(t,ge({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function bu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];me(t,ge({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ei(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];me(t,ge({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function yu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];me(t,ge({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function wu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];me(t,ge({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function xu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];me(t,ge({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Su(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];me(t,ge({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ti(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];me(t,ge({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ri(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];me(t,ge({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function $u(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];me(t,ge({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Pu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];me(t,ge({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function za(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];me(t,ge({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ku(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];me(t,ge({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Eu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];me(t,ge({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Nn(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];me(t,ge({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Au(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];me(t,ge({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Tu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];me(t,ge({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Mu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(t,ge({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Du(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(t,ge({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ai(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];me(t,ge({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function gr(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];me(t,ge({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Cn(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];me(t,ge({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Zr(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(t,ge({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function vr(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];me(t,ge({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ni(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];me(t,ge({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Nu(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];me(t,ge({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function si(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];me(t,ge({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function sa(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(t,ge({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function oi(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];me(t,ge({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function In(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];me(t,ge({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ma(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];me(t,ge({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function ii(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];me(t,ge({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Nt(t,e){F(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(t,ge({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=q(o);ue(l,()=>e.children??se),h(n,o)},$$slots:{default:!0}})),K()}function Cu(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function Iu(t,e){const r=t.filter(u=>!u.isSynced).map(u=>({productId:u.productId,productData:u.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(u){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",u)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(u=>u.missingQuantities.map(v=>({productId:u.productId,quantity:v.q,unit:v.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function Ou(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(g=>{g.productData&&(g.productData.mainId=t)});const a=Cu(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let g=[],p=0;for(const _ of e){const y=(_.isSynced?0:1)+_.missingQuantities.length;p+y>n?(g.length>0&&i.push(g),g=[_],p=y):(g.push(_),p+=y)}g.length>0&&i.push(g)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,u=0,v=0;for(let g=0;g<i.length;g++){const p=i[g];console.log(`[Appwrite Interactions] Exécution du lot ${g+1}/${i.length} (${p.length} produits)`);try{const _=await Iu(p,r),y=await Ru(_);if(o.push(y),y.success)l+=y.productsCreated,u+=y.purchasesCreated,v+=y.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${g+1}: ${y.error}`);break}}catch(_){const y=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${g+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:y,timestamp:new Date().toISOString()});break}}const f=o.every(g=>g.success),m=o.some(g=>!g.success);return{success:f,results:o,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:v,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function Ru(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var qu=(t,e,r)=>e(s(r).id),ju=w("<span> </span>"),Lu=w('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),Bu=w('<span class="flex items-center gap-1"><!> </span>'),zu=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Uu=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function Xr(t,e){F(e,!0);let r=ce(e,"badgeSize",3,"btn-lg"),a=ce(e,"color",3,"primary"),n=ce(e,"badgeStyle",3,""),i=ce(e,"onToggleItem",3,()=>{}),o=ce(e,"showStats",3,!1),l=ce(e,"showIcon",3,!0),u=L(Re({}));Lt(()=>{const x={};e.items.forEach(k=>{x[k.id]=k.selected??!0}),b(u,x,!0)});function v(x){s(u)[x]=!s(u)[x],i()(x)}const f=Y(()=>Object.values(s(u)).filter(Boolean).length),m=Y(()=>Object.values(s(u)).filter(x=>!x).length);var g=Uu(),p=q(g);et(p,21,()=>e.items,x=>x.id,(x,k)=>{const N=Y(()=>s(u)[s(k).id]);var S=Lu();S.__click=[qu,v,k];var T=c(S);{var P=Q=>{var fe=X(),_e=q(fe);pr(_e,()=>s(k).icon,(he,B)=>{B(he,{class:"h-3 w-3",get title(){return s(k).title}})}),h(Q,fe)};E(T,Q=>{s(k).icon&&Q(P)})}var D=d(T,2),A=c(D),$=d(D,2);{var V=Q=>{var fe=ju(),_e=c(fe);O(()=>{Me(fe,1,`badge badge-sm badge-${a()??""}`),I(_e,s(k).badge)}),h(Q,fe)};E($,Q=>{s(k).badge&&Q(V)})}var G=d($,2);{var H=Q=>{var fe=X(),_e=q(fe);{var he=ie=>{Or(ie,{size:16})},B=ie=>{Nn(ie,{size:16})};E(_e,ie=>{s(N)?ie(he):ie(B,!1)})}h(Q,fe)};E(G,Q=>{l()&&Q(H)})}O(()=>{Me(S,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(N)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),nr(S,"title",s(N)?"Retirer de la liste":"Réajouter à la liste"),I(A,s(k).label)}),h(x,S)});var _=d(p,2);{var y=x=>{var k=zu(),N=c(k),S=c(N),T=c(S);Or(T,{class:"text-success h-3 w-3"});var P=d(T),D=d(S,2);{var A=G=>{var H=Bu(),Q=c(H);Nt(Q,{class:"text-error h-3 w-3"});var fe=d(Q);O(()=>I(fe,` ${s(m)??""} retirés`)),h(G,H)};E(D,G=>{s(m)>0&&G(A)})}var $=d(N,2),V=c($);O(()=>{I(P,` ${s(f)??""} actifs`),I(V,`Total: ${e.items.length??""} items`)}),h(x,k)};E(_,x=>{o()&&x(y)})}h(t,g),K()}Qe(["click"]);function Hu(t,e){b(e,!s(e))}var Wu=w('<span class="text-base-content font-semibold"> </span>'),Gu=w('<div class="text-base-content/80 flex-1"> </div>'),Qu=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Vu=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Fu=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function li(t,e){let r=ce(e,"icon",3,gu),a=ce(e,"class",3,""),n=ce(e,"initiallyOpen",3,!1),i=r(),o=L(Re(n())),l=Re(e.children);var u=Fu(),v=c(u);v.__click=[Hu,o];var f=c(v),m=c(f);i(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var g=d(m,2);{var p=T=>{var P=Wu(),D=c(P);O(()=>I(D,e.title)),h(T,P)};E(g,T=>{e.title&&T(p)})}var _=d(f,2);{var y=T=>{var P=Gu(),D=c(P);O(()=>I(D,e.contentVisible)),h(T,P)};E(_,T=>{e.contentVisible&&T(y)})}var x=d(_,2);{var k=T=>{var P=Qu(),D=c(P),A=c(D);{var $=H=>{var Q=pt("en savoir plus");h(H,Q)},V=H=>{var Q=pt("masquer");h(H,Q)};E(A,H=>{s(o)?H(V,!1):H($)})}var G=d(D,2);{let H=Y(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Yo(G,{get class(){return s(H)}})}h(T,P)};E(x,T=>{l&&T(k)})}var N=d(v,2);{var S=T=>{var P=Vu(),D=c(P),A=c(D);ue(A,()=>e.children??se),O(()=>Me(P,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(T,P)};E(N,T=>{l&&T(S)})}O(()=>{Me(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),ho(u,e.style),Me(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),nr(v,"aria-expanded",s(o))}),h(t,u)}Qe(["click"]);var Ku=w('<div class="mb-1 text-xs opacity-70"> </div>'),Ju=(t,e,r)=>e(s(r)),Yu=w("<button><!> </button>"),Zu=w('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function On(t,e){F(e,!0);let r=ce(e,"maxSuggestions",3,8),a=ce(e,"buttonSize",3,"btn-xs"),n=ce(e,"buttonVariant",3,"btn-soft"),i=ce(e,"disabled",3,!1);const o=Y(()=>e.suggestions.slice(0,r()));function l(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var u=X(),v=q(u);{var f=m=>{var g=Zu(),p=c(g);{var _=N=>{var S=Ku(),T=c(S);O(()=>I(T,e.title)),h(N,S)};E(p,N=>{e.title&&N(_)})}var y=d(p,2),x=c(y);Eu(x,{class:"text-base-content/70 mr-1",size:14});var k=d(x,2);et(k,17,()=>s(o),N=>N.id,(N,S)=>{var T=Yu();T.__click=[Ju,l,S];var P=c(T);{var D=$=>{var V=X(),G=q(V);pr(G,()=>s(S).icon,(H,Q)=>{Q(H,{class:"h-3 w-3"})}),h($,V)};E(P,$=>{s(S).icon&&$(D)})}var A=d(P);O(()=>{Me(T,1,`btn btn-primary ${a()??""} ${n()??""}`),T.disabled=i()||s(S).disabled,nr(T,"title",s(S).disabled?"Déjà sélectionné":s(S).label),I(A,` ${s(S).label??""}`)}),h(N,T)}),h(m,g)};E(v,m=>{s(o).length>0&&m(f)})}h(t,u),K()}Qe(["click"]);const Xu=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var ed=w("<option> </option>"),td=w('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function Ua(t,e){F(e,!0);let r=ce(e,"quantity",15),a=ce(e,"unit",15),n=ce(e,"disabled",3,!1);var i=td(),o=c(i),l=c(o),u=c(l);za(u,{class:"h-4 w-4 opacity-50"});var v=d(u,2),f=d(l,2),m=c(f);m.value=m.__value="";var g=d(m);et(g,17,()=>Xu,Cr,(p,_)=>{let y=()=>s(_).value,x=()=>s(_).label;var k=ed(),N=c(k),S={};O(()=>{I(N,x()),S!==(S=y())&&(k.value=(k.__value=y())??"")}),h(p,k)}),O(()=>{v.disabled=n(),f.disabled=n()}),Ge(v,r),Sa(f,a),h(t,i),K()}var rd=w('<div><label class="input w-72"><!> <input/></label> <!></div>');function Br(t,e){F(e,!0);let r=ce(e,"value",15),a=ce(e,"suggestions",19,()=>[]),n=ce(e,"disabled",3,!1),i=ce(e,"flexCol",3,!1),o=ve(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=Y(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var u=rd(),v=c(u),f=c(v);vr(f,{class:"h-4 w-4 opacity-50"});var m=d(f,2);ln(m,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var g=d(v,2);{var p=_=>{On(_,{get suggestions(){return s(l)},onSuggestionClick:y=>r(y.label),buttonSize:"btn-xs"})};E(g,_=>{a().length>0&&_(p)})}O(()=>Me(u,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Ge(m,r),h(t,u),K()}var ad=w('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function oa(t,e){F(e,!0);let r=ce(e,"value",15),a=ce(e,"suggestions",19,()=>[]),n=ce(e,"disabled",3,!1),i=ce(e,"flexCol",3,!1);const o=Y(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var l=ad(),u=c(l),v=c(u);In(v,{class:"h-4 w-4 opacity-50"});var f=d(v,2);f.__keydown=function(...p){e.onkeydown?.apply(this,p)};var m=d(u,2);{var g=p=>{On(p,{get suggestions(){return s(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};E(m,p=>{a().length>0&&p(g)})}O(()=>{Me(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),f.disabled=n()}),Ge(f,r),h(t,l),K()}Qe(["keydown"]);var nd=w('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function zr(t,e){F(e,!0);let r=ce(e,"value",15),a=ce(e,"disabled",3,!1);var n=nd();O(()=>n.disabled=a()),Ge(n,r),h(t,n),K()}var sd=w('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function Rn(t,e){F(e,!0);let r=ce(e,"value",15),a=ce(e,"disabled",3,!1);var n=sd(),i=c(n);pu(i,{class:"h-4 w-4 opacity-50"});var o=d(i,2);O(()=>o.disabled=a()),Ge(o,r),h(t,n),K()}var od=w('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),id=w(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function ci(t,e){F(e,!0);let r=ce(e,"status",15),a=ce(e,"deliveryDate",15),n=ce(e,"disabled",3,!1);var i=id(),o=c(i),l=c(o),u=c(l);u.value=u.__value="delivered";var v=d(u);v.value=v.__value="ordered";var f=d(l,2),m=d(o,2);{var g=p=>{var _=od(),y=d(c(_),2);O(()=>y.disabled=n()),Ge(y,a),h(p,_)};E(m,p=>{r()==="ordered"&&p(g)})}O(()=>{l.disabled=n(),Me(f,1,`label ${r()==="delivered"?"":"hidden"}`)}),Sa(l,r),h(t,i),K()}async function ld(t,e,r,a,n,i,o,l){if(!(!s(e)||s(r))){b(r,!0),b(a,null),b(n,null);try{const u=`FACTURE_${Date.now()}`,v=s(i).map(p=>p.$id);W.setSyncStatus(v,!0);const f=[];for(const p of s(i)){const y=(W.getProductModelById(p.$id)?.stats.missingQuantities||[]).filter(x=>x.q<0).map(x=>({...x,q:Math.abs(x.q)}));f.push({productId:p.$id,isSynced:p.isSynced,productData:p,missingQuantities:y})}const m={invoiceId:u,invoiceTotal:o.expense||void 0,store:o.store.trim()||void 0,notes:o.notes||`Achat groupé pour ${s(i).length} produits`,who:o.who.trim()||void 0,purchaseStatus:o.status||"delivered",purchaseDeliveryDate:o.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${f.length} produits...`),l.onClose();const g=await Ou(W.currentMainId,f,m);if(g.success)b(n,{purchases:g.totalPurchasesCreated,expense:g.totalExpensesCreated>0,batches:g.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${g.totalProductsCreated} produits synchronisés, ${g.totalPurchasesCreated} achats créés, ${g.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(g.error||"Erreur lors de la création de l'achat groupé")}catch(u){const v=u instanceof Error?u.message:"Erreur inconnue";b(a,v,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u),W.clearSyncStatus()}finally{b(r,!1)}}}function Ss(t,e,r){s(e)||r.onClose()}var cd=w('<div class="alert alert-error"><!> <span> </span></div>'),ud=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),dd=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),vd=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),fd=w("<!> ",1),hd=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!> <!></div> <!> <div><!></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function pd(t,e){F(e,!0);let r=L(!1),a=L(null),n=L(null),i=Re({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=L(Re(new Set));Lt(()=>{b(o,new Set(e.products.map(M=>M.$id)),!0)});const l=Y(()=>e.products.filter(M=>s(o).has(M.$id))),u=Y(()=>s(l).length!==0),v=Y(()=>{const M=W.dateRange;let re="";return M?.start&&M?.end&&(M.start===M.end?re=` - ${Kr(M.start)}`:re=` - Du ${Kr(M.start)} au ${Kr(M.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${re}`});function f(M){const re=new Set(s(o));re.has(M)?re.delete(M):re.add(M),b(o,re,!0)}const m=Y(()=>e.products.map(M=>{const re=W.getProductModelById(M.$id);return{id:M.$id,label:M.productName,title:`${M.productName} - Manque: ${re?.stats.formattedMissingQuantities||"-"}`,badge:re?.stats.formattedMissingQuantities||"-"}}));var g=hd(),p=c(g),_=c(p),y=c(_),x=c(y);gr(x,{class:"h-5 w-5"});var k=d(x),N=d(y,2);N.__click=[Ss,r,e];var S=c(N);Nt(S,{class:"h-4 w-4"});var T=d(_,2),P=c(T);{var D=M=>{var re=cd(),R=c(re);sa(R,{class:"h-4 w-4"});var ee=d(R,2),de=c(ee);O(()=>I(de,s(a))),h(M,re)};E(P,M=>{s(a)&&M(D)})}var A=d(P,2);{var $=M=>{var re=ud(),R=c(re);Or(R,{class:"h-4 w-4"});var ee=d(R,2),de=c(ee),we=d(de);{var te=Ae=>{var De=pt("+ 1 dépense globale");h(Ae,De)};E(we,Ae=>{s(n).expense&&Ae(te)})}var Se=d(we,2);{var Ne=Ae=>{var De=pt();O(()=>I(De,`(traité en ${s(n).batches??""} lots)`)),h(Ae,De)};E(Se,Ae=>{s(n).batches&&s(n).batches>1&&Ae(Ne)})}O(()=>I(de,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),h(M,re)};E(A,M=>{s(n)&&M($)})}var V=d(A,2),G=c(V);li(G,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(M,re)=>{var R=dd();h(M,R)},$$slots:{default:!0}});var H=d(V,2),Q=d(c(H),2),fe=c(Q);Br(fe,{get suggestions(){return W.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(M){i.store=M}});var _e=d(fe,2);oa(_e,{get suggestions(){return W.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(M){i.who=M}});var he=d(_e,2);Rn(he,{get disabled(){return s(r)},get value(){return i.expense},set value(M){i.expense=M}});var B=d(Q,2);ci(B,{get disabled(){return s(r)},get status(){return i.status},set status(M){i.status=M},get deliveryDate(){return i.deliveryDate},set deliveryDate(M){i.deliveryDate=M}});var ie=d(B,2),ae=c(ie);zr(ae,{get disabled(){return s(r)},get value(){return i.notes},set value(M){i.notes=M}});var Z=d(H,2),ne=d(c(Z),2);Xr(ne,{get items(){return s(m)},onToggleItem:f,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var $e=d(Z,2),xe=c($e);xe.__click=[Ss,r,e];var z=d(xe,2);z.__click=[ld,u,r,a,n,l,i,e];var C=c(z);{var J=M=>{var re=vd();h(M,re)},le=M=>{var re=fd(),R=q(re);gr(R,{class:"h-4 w-4"});var ee=d(R);O(()=>I(ee,` Valider ${s(l).length??""} produit(s)`)),h(M,re)};E(C,M=>{s(r)?M(J):M(le,!1)})}O(()=>{I(k,` ${s(v)??""}`),N.disabled=s(r),xe.disabled=s(r),z.disabled=s(r)||!s(u)}),h(t,g),K()}Qe(["click"]);function Xa(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var gd=w('<div class="alert alert-error text-sm"><!> <span> </span></div>'),md=(t,e)=>e(!0),_d=w('<span class="loading loading-spinner"></span>'),bd=w('<span class="loading loading-spinner"></span>'),yd=w('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function wd(t,e){F(e,!0);let r=ce(e,"open",15,!1),a=L(!1),n=L(null),i=L(!1),o=L(Re({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=Y(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),u=Y(()=>W.uniqueProductTypes.map(U=>({id:U,label:U})));async function v(U=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!W.currentMainId)throw new Error("Aucun événement principal sélectionné");const ye={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await Co(ye,W.currentMainId),b(i,!0),U?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(ye){console.error("Error creating product:",ye),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Lt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var f=yd();let m;var g=c(f),p=c(g);p.__click=[Xa,r,o,n];var _=c(p);Nt(_,{size:20});var y=d(p,4),x=c(y);{var k=U=>{var ye=gd(),ze=c(ye);sa(ze,{size:18});var tt=d(ze,2),rt=c(tt);O(()=>I(rt,s(n))),h(U,ye)};E(x,U=>{s(n)&&U(k)})}var N=d(x,2),S=c(N),T=c(S),P=c(T),D=c(P);Pu(D,{class:"text-base-content/50 h-5 w-5"});var A=d(D,2),$=d(T,2);Ua($,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(U){s(o).quantity=U},get unit(){return s(o).unit},set unit(U){s(o).unit=U}});var V=d(S,2),G=c(V),H=c(G),Q=c(H);Nu(Q,{class:"text-base-content/50 h-5 w-5"});var fe=d(Q,2),_e=d(H,2);On(_e,{get suggestions(){return s(u)},onSuggestionClick:U=>s(o).productType=U.label,get disabled(){return s(a)}});var he=d(V,2);Br(he,{get suggestions(){return W.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(U){s(o).store=U}});var B=d(he,2);oa(B,{get suggestions(){return W.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(U){s(o).who=U}});var ie=d(B,2),ae=c(ie),Z=c(ae),ne=d(Z,2),$e=c(ne);si($e,{class:"h-4 w-4"});var xe=d(ie,2),z=c(xe),C=c(z),J=d(C,2),le=c(J);Cn(le,{class:"h-4 w-4"});var M=d(N,2),re=c(M);re.__click=[Xa,r,o,n];var R=d(re,2),ee=c(R);ee.__click=[md,v];var de=c(ee);{var we=U=>{var ye=_d();h(U,ye)},te=U=>{Nn(U,{size:18})};E(de,U=>{s(a)?U(we):U(te,!1)})}var Se=d(ee,2),Ne=c(Se);{var Ae=U=>{var ye=bd();h(U,ye)};E(Ne,U=>{s(a)&&U(Ae)})}var De=d(g,2),Be=c(De);Be.__click=[Xa,r,o,n],O(U=>{m=Me(f,1,"modal",null,m,U),N.disabled=s(a),A.disabled=s(a),fe.disabled=s(a),Z.disabled=s(a),C.disabled=s(a),re.disabled=s(a),ee.disabled=s(a)||!s(o).productName,Se.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),ga("submit",y,U=>{U.preventDefault(),v(!1)}),Ge(A,()=>s(o).productName,U=>s(o).productName=U),Ge(fe,()=>s(o).productType,U=>s(o).productType=U),cn(Z,()=>s(o).pFrais,U=>s(o).pFrais=U),cn(C,()=>s(o).pSurgel,U=>s(o).pSurgel=U),h(t,f),K()}Qe(["click"]);function vn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:tu};case"animaux":return{displayName:"Viandes et Poissons",icon:ru};case"legumes":return{displayName:"Fruits et Légumes",icon:nu};case"sucres":return{displayName:"Sucrées",icon:au};case"lof":return{displayName:"L.O.F",icon:hu};case"autres":return{displayName:"Autres",icon:su};case"epices":return{displayName:"Assaisonnements",icon:_u};case"frais":return{displayName:"Produits Frais",icon:Tu};default:return{displayName:t,icon:za}}}function fn(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function qn(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=en(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=en(n),a="l"}else r=en(t),a=e;return`${r} ${a}`}function en(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Ha(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function xd(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function hn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function $s(t){return t?Ha(t):"-"}function Sd(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=hn(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:$d(n),deliveryDate:n==="ordered"&&a.deliveryDate?xd(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:qn(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function $d(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class Pd{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=L(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=L(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#n=L("recettes");get currentTab(){return s(this.#n)}set currentTab(e){b(this.#n,e,!0)}#o=Y(()=>{const e=this.productId;return W.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#d=Y(()=>this.product?.who??[]);get whoList(){return s(this.#d)}set whoList(e){b(this.#d,e)}#c=Y(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#c)}set stockParsed(e){b(this.#c,e)}#u=Y(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#u)}set purchasesList(e){b(this.#u,e)}#l=Y(()=>this.product?.byDate?So(this.product.byDate):[]);get recipes(){return s(this.#l)}set recipes(e){b(this.#l,e)}#v=L(Re({purchase:{quantity:null,unit:"",store:"",who:Ir.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#v)}set forms(e){b(this.#v,e,!0)}#i=L(Re({overrideManagerEditMode:!1}));get uiStates(){return s(this.#i)}set uiStates(e){b(this.#i,e,!0)}#f=L(null);get editingPurchaseId(){return s(this.#f)}set editingPurchaseId(e){b(this.#f,e,!0)}#a=Y(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#a)}set editingPurchaseData(e){b(this.#a,e)}#h=L(null);get originalFormsSnapshot(){return s(this.#h)}set originalFormsSnapshot(e){b(this.#h,e,!0)}initForms(){const e=W.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=Ir.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#p=Y(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#p)}set hasChanges(e){b(this.#p,e)}#m=Y(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#m)}set hasAnyChanges(e){b(this.#m,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!W.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=fn(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Ht(this.product.$id,{},i=>W.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await jo({products:[this.product.$id],mainId:W.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=fn(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Mn(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await Lo(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await dn(this.product.$id,JSON.stringify(e)):await Ht(this.product.$id,{stockReel:JSON.stringify(e)},r=>W.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await dn(this.product.$id,null):await Ht(this.product.$id,{stockReel:null},e=>W.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Oo(this.product.$id,e):await Ht(this.product.$id,{who:e},r=>W.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Io(this.product.$id,e):await Ht(this.product.$id,{store:JSON.stringify(e)},r=>W.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Tn(this.product.$id,e,!0):await Ht(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>W.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await Ro(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await qo(this.product.$id,e,r=>W.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=qn;formatDate=Ha}var kd=w('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Ed=w('<div class="text-xs text-base-content/60 mt-1"> </div>'),Ad=w('<div class="font-medium"> </div> <!>',1),Td=w('<pre class="text-xs"> </pre>'),Md=w('<span class="text-base-content/50 italic">Non défini</span>'),Dd=w('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Nd=w('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Wa(t,e){F(e,!0);let r=ce(e,"title",3,"Événement terminé"),a=ce(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=ce(e,"showData",3,!0),i=ce(e,"data",3,null),o=ce(e,"dataLabel",3,"");var l=Nd(),u=c(l),v=c(u);Xo(v,{class:"h-5 w-5 text-warning"});var f=d(v,2);yu(f,{class:"h-4 w-4 text-warning/70"});var m=d(f,2),g=c(m),p=d(u,2),_=c(p),y=d(p,2);{var x=k=>{var N=Dd(),S=c(N);{var T=V=>{var G=kd(),H=c(G);O(()=>I(H,`${o()??""} :`)),h(V,G)};E(S,V=>{o()&&V(T)})}var P=d(S,2),D=c(P);{var A=V=>{var G=pt();O(()=>I(G,i())),h(V,G)},$=V=>{var G=X(),H=q(G);{var Q=_e=>{var he=pt();O(B=>I(he,B),[()=>i().join(", ")]),h(_e,he)},fe=_e=>{var he=X(),B=q(he);{var ie=Z=>{var ne=X(),$e=q(ne);{var xe=C=>{var J=Ad(),le=q(J),M=c(le),re=d(le,2);{var R=ee=>{var de=Ed(),we=c(de);O(()=>I(we,i().storeComment)),h(ee,de)};E(re,ee=>{i().storeComment&&ee(R)})}O(()=>I(M,i().storeName)),h(C,J)},z=C=>{var J=Td(),le=c(J);O(M=>I(le,M),[()=>JSON.stringify(i(),null,2)]),h(C,J)};E($e,C=>{i().storeName?C(xe):C(z,!1)})}h(Z,ne)},ae=Z=>{var ne=Md();h(Z,ne)};E(B,Z=>{typeof i()=="object"&&i()!==null?Z(ie):Z(ae,!1)},!0)}h(_e,he)};E(H,_e=>{Array.isArray(i())&&i().length>0?_e(Q):_e(fe,!1)},!0)}h(V,G)};E(D,V=>{typeof i()=="string"||typeof i()=="number"?V(A):V($,!1)})}h(k,N)};E(y,k=>{n()&&i()&&k(x)})}O(()=>{I(g,r()),I(_,a())}),h(t,l),K()}function Cd(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function Id(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function Od(t,e){e().cancelEditPurchase()}var Rd=w('<span class="loading loading-spinner loading-sm"></span>'),qd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),jd=w('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ld=w("<th>Actions</th>"),Bd=w('<span class="loading loading-spinner loading-sm"></span>'),zd=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Ud=(t,e,r)=>e(s(r)),Hd=(t,e,r)=>e(s(r).$id),Wd=w('<span class="loading loading-spinner loading-sm"></span>'),Gd=w('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Qd=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Vd=w('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Fd=w('<div class="space-y-4"><!></div> <!>',1);function Kd(t,e){F(e,!0);let r=ce(e,"modalState",7),a=ce(e,"isArchiveMode",3,!1);function n(y){return y.quantity!==null&&y.quantity!==0&&y.unit?.trim()!==""}function i(y){r().removePurchase(y)}function o(y){r().startEditPurchase(y)}var l=Fd(),u=q(l),v=c(u);{var f=y=>{Wa(y,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},m=y=>{var x=qd(),k=c(x),N=d(c(k),2),S=c(N),T=c(S);Ua(T,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(B){r().forms.purchase.quantity=B},get unit(){return r().forms.purchase.unit},set unit(B){r().forms.purchase.unit=B}});var P=d(T,2);Rn(P,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(B){r().forms.purchase.price=B}});var D=d(P,2);Br(D,{get suggestions(){return W.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(B){r().forms.purchase.store=B}});var A=d(D,2);oa(A,{get suggestions(){return W.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(B){r().forms.purchase.who=B}});var $=d(S,2),V=c($);zr(V,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(B){r().forms.purchase.notes=B}});var G=d($,2);ci(G,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(B){r().forms.purchase.status=B},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(B){r().forms.purchase.deliveryDate=B}});var H=d(N,2),Q=c(H);Q.__click=[Cd,r];var fe=c(Q);{var _e=B=>{var ie=Rd();h(B,ie)},he=B=>{var ie=pt("Ajouter l'achat");h(B,ie)};E(fe,B=>{r().loading?B(_e):B(he,!1)})}O(()=>Q.disabled=r().loading||!r().isPurchaseFormValid),h(y,x)};E(v,y=>{a()?y(f):y(m,!1)})}var g=d(u,2);{var p=y=>{var x=jd(),k=c(x);gr(k,{class:"mx-auto mb-2 h-12 w-12"}),h(y,x)},_=y=>{var x=Vd(),k=c(x),N=c(k),S=c(N),T=d(c(S),8);{var P=A=>{var $=Ld();h(A,$)};E(T,A=>{a()||A(P)})}var D=d(N);et(D,21,()=>r().purchasesList,A=>A.$id,(A,$,V)=>{var G=X(),H=q(G);{var Q=_e=>{var he=zd(),B=c(he),ie=c(B),ae=c(ie),Z=d(ae,2),ne=c(Z);ne.value=ne.__value="kg";var $e=d(ne);$e.value=$e.__value="gr.";var xe=d($e);xe.value=xe.__value="l.";var z=d(xe);z.value=z.__value="ml";var C=d(z);C.value=C.__value="unité";var J=d(C);J.value=J.__value="bottes";var le=d(B),M=c(le),re=d(le),R=c(re),ee=d(re),de=c(ee),we=c(de);we.value=we.__value="ordered";var te=d(we);te.value=te.__value="delivered";var Se=d(ee),Ne=c(Se),Ae=d(Se),De=c(Ae),Be=d(Ae),U=c(Be),ye=d(Be),ze=c(ye),tt=d(ye),rt=c(tt),Ie=c(rt);Ie.__click=[Id,r,n];var Ye=c(Ie);{var Bt=Pe=>{var Ke=Bd();h(Pe,Ke)},be=Pe=>{Mu(Pe,{class:"h-3 w-3"})};E(Ye,Pe=>{r().loading?Pe(Bt):Pe(be,!1)})}var Te=d(Ie,2);Te.__click=[Od,r];var qe=c(Te);Nt(qe,{class:"h-3 w-3"}),O(Pe=>Ie.disabled=Pe,[()=>r().loading||!n(s($))]),Ge(ae,()=>s($).quantity,Pe=>s($).quantity=Pe),Sa(Z,()=>s($).unit,Pe=>s($).unit=Pe),Ge(M,()=>s($).store,Pe=>s($).store=Pe),Ge(R,()=>s($).who,Pe=>s($).who=Pe),Sa(de,()=>s($).status,Pe=>s($).status=Pe),Ge(Ne,()=>s($).orderDate,Pe=>s($).orderDate=Pe),Ge(De,()=>s($).deliveryDate,Pe=>s($).deliveryDate=Pe),Ge(U,()=>s($).price,Pe=>s($).price=Pe),Ge(ze,()=>s($).notes,Pe=>s($).notes=Pe),h(_e,he)},fe=_e=>{var he=Qd(),B=c(he),ie=c(B),ae=d(B),Z=c(ae),ne=d(ae),$e=c(ne),xe=d(ne),z=c(xe),C=c(z),J=d(xe),le=c(J),M=d(J),re=c(M),R=d(M),ee=c(R),de=d(R),we=c(de),te=d(de);{var Se=Ne=>{var Ae=Gd(),De=c(Ae),Be=c(De);Be.__click=[Ud,o,$];var U=c(Be);Zr(U,{class:"h-4 w-4"});var ye=d(Be,2);ye.__click=[Hd,i,$];var ze=c(ye);{var tt=Ie=>{var Ye=Wd();h(Ie,Ye)},rt=Ie=>{Nt(Ie,{class:"h-4 w-4"})};E(ze,Ie=>{r().loading?Ie(tt):Ie(rt,!1)})}O(()=>ye.disabled=r().loading),h(Ne,Ae)};E(te,Ne=>{a()||Ne(Se)})}O((Ne,Ae,De,Be,U)=>{I(ie,Ne),I(Z,s($).store||"-"),I($e,s($).who||"-"),Me(z,1,`badge badge-sm ${Ae??""}`),I(C,De),I(le,Be),I(re,U),I(ee,s($).price?`${s($).price}€`:"-"),I(we,s($).notes||"-")},[()=>qn(s($).quantity,s($).unit),()=>hn(s($).status).class,()=>hn(s($).status).text,()=>$s(s($).orderDate),()=>$s(s($).deliveryDate)]),h(_e,he)};E(H,_e=>{r().editingPurchaseId===s($).$id?_e(Q):_e(fe,!1)})}h(A,G)}),h(y,x)};E(g,y=>{r().purchasesList.length===0?y(p):y(_,!1)})}h(t,l),K()}Qe(["click"]);async function Jd(t,e){await e()?.removeStock()}var Yd=w(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Zd=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Xd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),ev=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),tv=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),rv=w('<span class="loading loading-spinner loading-xs"></span>'),av=w('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),nv=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),sv=w('<div class="space-y-4"><!></div> <!>',1);function ov(t,e){F(e,!0);let r=ce(e,"modalState",7),a=ce(e,"isArchiveMode",3,!1);var n=sv(),i=q(n),o=c(i);{var l=g=>{Wa(g,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},u=g=>{var p=Xd(),_=c(p),y=c(_),x=c(y),k=d(y,2),N=c(k);li(N,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(V,G)=>{var H=Yd();h(V,H)},$$slots:{default:!0}});var S=d(k,2),T=c(S);Ua(T,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(V){r().forms.stock.quantity=V},get unit(){return r().forms.stock.unit},set unit(V){r().forms.stock.unit=V}});var P=d(S,2),D=c(P);zr(D,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(V){r().forms.stock.notes=V}});var A=d(P,2),$=c(A);$.__click=[Zd,r],O(V=>{I(x,`Déclarer le stock réel du ${V??""}`),$.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),h(g,p)};E(o,g=>{a()?g(l):g(u,!1)})}var v=d(i,2);{var f=g=>{var p=ev(),_=c(p);Ko(_,{class:"mx-auto mb-2 h-12 w-12"}),h(g,p)},m=g=>{var p=nv(),_=c(p),y=d(c(_),2),x=c(y),k=d(c(x),2),N=c(k),S=d(x,2),T=d(c(S),2),P=c(T),D=d(S,2);{var A=G=>{var H=tv(),Q=d(c(H),2),fe=c(Q);O(()=>I(fe,r().stockParsed.notes)),h(G,H)};E(D,G=>{r().stockParsed.notes&&G(A)})}var $=d(y,2);{var V=G=>{var H=av(),Q=c(H);Q.__click=[Jd,r];var fe=c(Q);{var _e=B=>{var ie=rv();h(B,ie)},he=B=>{var ie=pt("Supprimer le stock");h(B,ie)};E(fe,B=>{r().loading?B(_e):B(he,!1)})}O(()=>Q.disabled=r().loading),h(G,H)};E($,G=>{a()||G(V)})}O(G=>{I(N,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),I(P,G)},[()=>Ha(r().stockParsed.dateTime)]),h(g,p)};E(v,g=>{r().stockParsed?g(m,!1):g(f)})}h(t,n),K()}Qe(["click"]);function iv(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var lv=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},cv=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),uv=w('<div class="space-y-4"><!></div>');function dv(t,e){F(e,!0);let r=ce(e,"modalState",7),a=ce(e,"isArchiveMode",3,!1),n=L("");const i=Y(()=>{const _=new Set([...W.uniqueWho,...r().forms.who]);return Array.from(_).map(y=>({id:y,label:y,selected:r().forms.who.includes(y)}))});function o(_){const y=_.trim();y&&!r().forms.who.includes(y)&&(r().forms.who=[...r().forms.who,y])}function l(_){r().forms.who=r().forms.who.filter(y=>y!==_)}function u(_){r().forms.who.includes(_)?l(_):o(_)}function v(){s(n).trim()&&(o(s(n)),b(n,""))}var f=uv(),m=c(f);{var g=_=>{Wa(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},p=_=>{var y=cv(),x=c(y),k=d(c(x),4),N=c(k),S=c(N),T=c(S);In(T,{class:"h-4 w-4 opacity-50"});var P=d(T,2);P.__keydown=[lv,v];var D=d(S,2);D.__click=v;var A=c(D);oi(A,{size:16});var $=d(N,2),V=d(c($),2);Xr(V,{get items(){return s(i)},onToggleItem:u,showIcon:!0,badgeSize:"btn-sm"});var G=d(x,2),H=c(G);H.__click=[iv,r,n],O(Q=>{P.disabled=r().loading,D.disabled=Q,H.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ge(P,()=>s(n),Q=>b(n,Q)),h(_,y)};E(m,_=>{a()?_(g):_(p,!1)})}h(t,f),K()}Qe(["keydown","click"]);var vv=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},fv=w(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),hv=w('<div class="space-y-4"><!></div>');function pv(t,e){F(e,!0);let r=ce(e,"modalState",7),a=ce(e,"isArchiveMode",3,!1);const n=Y(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const f={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(f)}var o=hv(),l=c(o);{var u=f=>{{let m=Y(()=>r().product?.storeInfo);Wa(f,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(m)},dataLabel:"Magasin actuel"})}},v=f=>{var m=fv(),g=c(m),p=d(c(g),4),_=c(p),y=c(_);Br(y,{get suggestions(){return W.uniqueStores},get disabled(){return r().loading},onkeydown:S=>{S.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(S){r().forms.store.name=S}});var x=d(_,2);zr(x,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(S){r().forms.store.comment=S}});var k=d(p,2),N=c(k);N.__click=[vv,r],O(()=>N.disabled=r().loading),h(f,m)};E(l,f=>{a()?f(u):f(v,!1)})}h(t,o),K()}Qe(["click"]);var gv=w('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function mv(t,e){F(e,!0);let r=ce(e,"value",15);ce(e,"disabled",3,!1);var a=gv(),n=c(a);ti(n,{size:20,class:"text-base-centent/70"});var i=d(n,2);Ge(i,r),h(t,a),K()}function _v(t){const e=t-1;return e*e*e+1}function bv(t,{delay:e=0,duration:r=400,easing:a=_v,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",u=parseFloat(i[l]),v=n==="y"?["top","bottom"]:["left","right"],f=v.map(k=>`${k[0].toUpperCase()}${k.slice(1)}`),m=parseFloat(i[`padding${f[0]}`]),g=parseFloat(i[`padding${f[1]}`]),p=parseFloat(i[`margin${f[0]}`]),_=parseFloat(i[`margin${f[1]}`]),y=parseFloat(i[`border${f[0]}Width`]),x=parseFloat(i[`border${f[1]}Width`]);return{delay:e,duration:r,easing:a,css:k=>`overflow: hidden;opacity: ${Math.min(k*20,1)*o};${l}: ${k*u}px;padding-${v[0]}: ${k*m}px;padding-${v[1]}: ${k*g}px;margin-${v[0]}: ${k*p}px;margin-${v[1]}: ${k*_}px;border-${v[0]}-width: ${k*y}px;border-${v[1]}-width: ${k*x}px;min-${l}: 0`}}async function yv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function wv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var xv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),Sv=w('<div class="stat-desc italic">Recettes actuelles</div>'),$v=w('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),Pv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),kv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,Ev=w('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),Av=(t,e)=>e().uiStates.overrideManagerEditMode=!1,Tv=w('<span class="loading loading-spinner loading-sm"></span>'),Mv=w('<span class="loading loading-spinner loading-sm"></span>'),Dv=w('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),Nv=w('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function Cv(t,e){F(e,!0);let r=ce(e,"modalState",7);const a=Y(()=>r().product?.totalNeededOverrideParsed),n=Y(()=>r().product?.displayTotalOverride);let i=Y(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=Y(()=>r().uiStates.overrideManagerEditMode),l=L(Re(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),u=L(Re(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),v=L(Re(r().product?.totalNeededOverrideParsed?.comment||"")),f=Y(()=>s(l)>0&&s(u).trim()!=="");var m=X(),g=q(m);{var p=_=>{var y=Nv(),x=c(y),k=c(x),N=c(k),S=c(N);{var T=z=>{var C=xv(),J=d(c(C),2),le=c(J);O(()=>I(le,s(a)?.oldTotalDisplay)),h(z,C)};E(S,z=>{s(a)?.oldTotalDisplay&&s(i)&&z(T)})}var P=d(S,2),D=d(c(P),2),A=c(D),$=d(D,2),V=c($),G=c(V),H=d(G);Ba(H,{class:"h-3 w-3"});var Q=d(V,2),fe=c(Q),_e=d(fe);ii(_e,{class:"h-3 w-3"});var he=d($,2);{var B=z=>{var C=Sv();h(z,C)};E(he,z=>{s(a)?.oldTotalDisplay&&s(i)&&z(B)})}var ie=d(P,2);{var ae=z=>{var C=Pv(),J=d(c(C),2),le=c(J),M=d(J,2);{var re=R=>{var ee=$v(),de=c(ee),we=d(de);ti(we,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),O(()=>I(de,`${s(a).comment??""} `)),h(R,ee)};E(M,R=>{s(a).comment&&R(re)})}O(()=>I(le,s(n))),h(z,C)};E(ie,z=>{s(n)&&s(a)&&z(ae)})}var Z=d(ie,2);{var ne=z=>{var C=Ev(),J=c(C);J.__click=[kv,r];var le=c(J);{var M=ee=>{var de=pt("Redéfinir les besoins");h(ee,de)},re=ee=>{var de=pt("Définir manuellement les besoins");h(ee,de)};E(le,ee=>{s(a)?ee(M):ee(re,!1)})}var R=d(le,2);Zr(R,{size:16}),h(z,C)};E(Z,z=>{!e.isArchiveMode&&!s(o)&&z(ne)})}var $e=d(N,2);{var xe=z=>{var C=Dv(),J=c(C);Ua(J,{get quantity(){return s(l)},set quantity(De){b(l,De,!0)},get unit(){return s(u)},set unit(De){b(u,De,!0)}});var le=d(J,2);mv(le,{get value(){return s(v)},set value(De){b(v,De,!0)}});var M=d(le,2),re=c(M);re.__click=[Av,r];var R=d(re,2);R.__click=[wv,r];var ee=c(R);{var de=De=>{var Be=Tv();h(De,Be)},we=De=>{var Be=pt();O(()=>I(Be,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),h(De,Be)};E(ee,De=>{r().loading?De(de):De(we,!1)})}var te=d(R,2);te.__click=[yv,r,l,u,v];var Se=c(te);{var Ne=De=>{var Be=Mv();h(De,Be)},Ae=De=>{var Be=pt("Appliquer");h(De,Be)};E(Se,De=>{r().loading?De(Ne):De(Ae,!1)})}O(()=>{R.disabled=r().loading,te.disabled=r().loading||!s(f)}),Zl(1,C,()=>bv),h(z,C)};E($e,z=>{s(o)&&z(xe)})}O(()=>{I(A,r().product.displayTotalNeeded),I(G,`${r().product.nbRecipes??""} `),I(fe,`${r().product.totalAssiettes??""} `)}),h(_,y)};E(g,_=>{r().product&&_(p)})}h(t,m),K()}Qe(["click"]);var Iv=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Ov=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Rv=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),qv=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function jv(t,e){F(e,!0);const r=Y(()=>e.modalState.recipes);var a=qv(),n=q(a);Cv(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=d(n,2),o=c(i),l=c(o);Ba(l,{class:"h-5 w-5"});var u=d(o,2);{var v=m=>{var g=Iv(),p=c(g);za(p,{class:"mx-auto mb-2 h-12 w-12"}),h(m,g)},f=m=>{var g=Rv(),p=c(g),_=d(c(p));et(_,21,()=>s(r),Cr,(y,x)=>{var k=Ov(),N=c(k),S=c(N),T=d(N),P=c(T),D=d(T),A=c(D);O($=>{I(S,`${s(x).r??""} (${(s(x).a||"-")??""} c.)`),I(P,`${(s(x).q||s(x).qEq)??""} ${(s(x).u||s(x).uEq)??""}`),I(A,$)},[()=>Ha(s(x).date)]),h(y,k)}),h(m,g)};E(u,m=>{s(r).length===0?m(v):m(f,!1)})}h(t,a),K()}function Lv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function Ps(t,e,r){s(e)?.resetForms(),r.onClose()}var Bv=w('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),zv=w('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Uv=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Hv=(t,e)=>e("recettes"),Wv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qv=(t,e)=>e("magasins"),Vv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fv=(t,e)=>e("volontaires"),Kv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Jv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Yv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Zv=(t,e)=>e("stock"),Xv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),ef=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),tf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rf=(t,e)=>e("achats"),af=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),nf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),sf=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),of=w('<span class="loading loading-spinner loading-sm"></span>'),lf=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),cf=w('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function uf(t,e){F(e,!0);let r=ce(e,"initialTab",3,"recettes"),a=L(null);Lt(()=>{b(a,new Pd(e.productId,r()),!0)});let n=Y(()=>W.isEventPassed);function i(x){s(a)?.setCurrentTab(x)}var o=cf(),l=c(o),u=c(l),v=c(u);{var f=x=>{var k=zv(),N=q(k),S=c(N),T=d(N,2);{var P=H=>{var Q=Bv(),fe=c(Q);Xo(fe,{class:"h-4 w-4"}),h(H,Q)};E(T,H=>{s(a)&&s(n)&&H(P)})}var D=d(T,2),A=c(D),$=c(A),V=d(A,2),G=d(c(V));O(()=>{I(S,s(a).product?.productName),I($,s(a).product?.productType),I(G,` ${s(a).product?.displayTotalNeeded??""}`)}),h(x,k)},m=x=>{var k=Uv();h(x,k)};E(v,x=>{s(a)&&s(a).product?x(f):x(m,!1)})}var g=d(v,2);g.__click=[Ps,a,e];var p=c(g);Nt(p,{class:"h-4 w-4"});var _=d(u,2);{var y=x=>{var k=lf(),N=q(k),S=c(N);S.__click=[Hv,i];var T=c(S);Ba(T,{class:"mr-1 h-5 w-5"});var P=d(T,2);{var D=U=>{var ye=Wv(),ze=c(ye);O(()=>I(ze,s(a).product?.nbRecipes)),h(U,ye)},A=U=>{var ye=Gv();h(U,ye)};E(P,U=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?U(D):U(A,!1)})}var $=d(S,2);$.__click=[Qv,i];var V=c($);vr(V,{class:"mr-1 h-5 w-5"});var G=d(V,2);{var H=U=>{var ye=Vv();h(U,ye)};E(G,U=>{s(a).hasChanges?.store&&U(H)})}var Q=d($,2);Q.__click=[Fv,i];var fe=c(Q);ma(fe,{class:"mr-1 h-5 w-5"});var _e=d(fe,2);{var he=U=>{var ye=Kv();h(U,ye)},B=U=>{var ye=X(),ze=q(ye);{var tt=Ie=>{var Ye=Jv(),Bt=c(Ye);O(()=>I(Bt,s(a).product?.who.length)),h(Ie,Ye)},rt=Ie=>{var Ye=Yv();h(Ie,Ye)};E(ze,Ie=>{s(a).product?.who&&s(a).product?.who.length>0?Ie(tt):Ie(rt,!1)},!0)}h(U,ye)};E(_e,U=>{s(a).hasChanges?.who?U(he):U(B,!1)})}var ie=d(Q,2);ie.__click=[Zv,i];var ae=c(ie);Ko(ae,{class:"mr-1 h-5 w-5"});var Z=d(ae,2);{var ne=U=>{var ye=Xv();h(U,ye)},$e=U=>{var ye=X(),ze=q(ye);{var tt=Ie=>{var Ye=ef();h(Ie,Ye)},rt=Ie=>{var Ye=tf();h(Ie,Ye)};E(ze,Ie=>{s(a).stockParsed?Ie(tt):Ie(rt,!1)},!0)}h(U,ye)};E(Z,U=>{s(a).hasChanges?.stock?U(ne):U($e,!1)})}var xe=d(ie,2);xe.__click=[rf,i];var z=c(xe);gr(z,{class:"mr-1 h-5 w-5"});var C=d(z,2);{var J=U=>{var ye=af(),ze=c(ye);O(()=>I(ze,s(a).purchasesList.length)),h(U,ye)},le=U=>{var ye=nf();h(U,ye)};E(C,U=>{s(a).purchasesList.length>0?U(J):U(le,!1)})}var M=d(N,2),re=c(M);{var R=U=>{var ye=sf(),ze=c(ye);Nt(ze,{class:"h-4 w-4"});var tt=d(ze,2),rt=c(tt);O(()=>I(rt,`erreur : ${s(a).error??""}`)),h(U,ye)};E(re,U=>{s(a).error&&U(R)})}var ee=d(re,2),de=c(ee);Rl(de,()=>s(a).currentTab,U=>{var ye=X(),ze=q(ye);{var tt=Ie=>{jv(Ie,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},rt=Ie=>{var Ye=X(),Bt=q(Ye);{var be=qe=>{Kd(qe,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Te=qe=>{var Pe=X(),Ke=q(Pe);{var at=Xe=>{ov(Xe,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},ct=Xe=>{var _t=X(),xt=q(_t);{var St=vt=>{dv(vt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ct=vt=>{var It=X(),oe=q(It);{var pe=ke=>{pv(ke,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};E(oe,ke=>{s(a).currentTab==="magasins"&&ke(pe)},!0)}h(vt,It)};E(xt,vt=>{s(a).currentTab==="volontaires"?vt(St):vt(Ct,!1)},!0)}h(Xe,_t)};E(Ke,Xe=>{s(a).currentTab==="stock"?Xe(at):Xe(ct,!1)},!0)}h(qe,Pe)};E(Bt,qe=>{s(a).currentTab==="achats"?qe(be):qe(Te,!1)},!0)}h(Ie,Ye)};E(ze,Ie=>{s(a).currentTab==="recettes"?Ie(tt):Ie(rt,!1)})}h(U,ye)});var we=d(M,2),te=c(we);te.__click=[Ps,a,e];var Se=c(te),Ne=d(te,2);Ne.__click=[Lv,a,e];var Ae=c(Ne);{var De=U=>{var ye=of();h(U,ye)},Be=U=>{var ye=pt("Tout enregistrer");h(U,ye)};E(Ae,U=>{s(a).loading?U(De):U(Be,!1)})}O(()=>{Me(S,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),Me($,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),Me(Q,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),Me(ie,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),Me(xe,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),I(Se,s(a)?.hasAnyChanges?"Annuler":"Fermer"),Ne.disabled=s(a).loading||!s(a).hasAnyChanges}),h(x,k)};E(_,x=>{s(a)&&x(y)})}O(()=>Me(o,1,`modal ${(e.productId&&"modal-open")??""}`)),h(t,o),K()}Qe(["click"]);var df=(t,e,r)=>e(r),vf=w("<button><span> </span> <!></button>"),ff=w('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),hf=(t,e)=>e(),pf=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),gf=(t,e)=>e(),mf=w('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),_f=w('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),bf=w('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),yf=w('<div class=" flex flex-wrap gap-1"></div> <!>',1);function wf(t,e){F(e,!0);let r=ce(e,"availableDates",19,()=>[]),a=ce(e,"currentRange",19,()=>({start:null,end:null})),n=L(Re(a().start)),i=L(Re(a().end));const o=Y(()=>r().length>0&&s(n)===r()[0]&&s(i)===r()[r().length-1]),l=Y(()=>{if(r().length===0)return!1;const S=new Date;S.setHours(0,0,0,0);const P=[...r()].sort().find(D=>new Date(D)>=S);return P&&s(n)===P&&s(i)===r()[r().length-1]}),u=Y(()=>{if(r().length===0)return!0;const S=new Date(r()[r().length-1]);return S.setHours(23,59,59,999),S<new Date}),v=Y(()=>{if(r().length===0)return!1;const S=new Date;return S.setHours(0,0,0,0),[...r()].some(T=>new Date(T)>=S)});Lt(()=>{b(n,a().start,!0),b(i,a().end,!0)});function f(S){s(n)===S&&s(i)===S?g():new Date(S)<new Date(s(n))?b(n,S,!0):(new Date(S)>new Date(s(i))||b(n,S,!0),b(i,S,!0)),e.onRangeChange(s(n),s(i))}function m(S){return s(o)?"btn-soft":new Date(S)>=new Date(s(n))&&new Date(S)<=new Date(s(i))?"":"btn-dash"}function g(){r().length!==0&&(b(n,r()[0],!0),b(i,r()[r().length-1],!0),e.onRangeChange(s(n),s(i)))}function p(){if(r().length===0)return;const S=new Date;S.setHours(0,0,0,0);const P=[...r()].sort().find(D=>new Date(D)>=S);P&&(b(n,P,!0),b(i,r()[r().length-1],!0),e.onRangeChange(s(n),s(i)))}var _=yf(),y=q(_);et(y,22,r,S=>S,(S,T)=>{var P=vf();P.__click=[df,f,T];var D=c(P),A=c(D),$=d(D,2);{var V=H=>{ni(H,{size:16})},G=H=>{var Q=X(),fe=q(Q);{var _e=B=>{ri(B,{size:16})},he=B=>{var ie=X(),ae=q(ie);{var Z=ne=>{fu(ne,{size:16})};E(ae,ne=>{Za(T)==="cloud"&&ne(Z)},!0)}h(B,ie)};E(fe,B=>{Za(T)==="moon"?B(_e):B(he,!1)},!0)}h(H,Q)};E($,H=>{Za(T)==="sun"?H(V):H(G,!1)})}O((H,Q)=>{Me(P,1,`btn btn-sm btn-secondary ${H??""}`),I(A,Q)},[()=>m(T),()=>Ec(T)]),h(S,P)});var x=d(y,2);{var k=S=>{var T=ff();h(S,T)},N=S=>{var T=bf(),P=c(T);{var D=G=>{var H=pf();H.__click=[hf,p],h(G,H)};E(P,G=>{s(v)&&!s(l)&&G(D)})}var A=d(P,2);{var $=G=>{var H=mf();H.__click=[gf,g],h(G,H)},V=G=>{var H=_f();h(G,H)};E(A,G=>{s(o)?G(V,!1):G($)})}h(S,T)};E(x,S=>{s(u)?S(k):S(N,!1)})}h(t,_),K()}Qe(["click"]);var xf=w("<fieldset><legend><!> </legend> <!></fieldset>");function fa(t,e){let r=ce(e,"bgClass",3,"bg-base-100");var a=xf(),n=c(a),i=c(n);{var o=v=>{const f=Y(()=>e.iconComponent);var m=X(),g=q(m);pr(g,()=>s(f),(p,_)=>{_(p,{size:16,class:"mr-1"})}),h(v,m)};E(i,v=>{e.iconComponent&&v(o)})}var l=d(i),u=d(n,2);ue(u,()=>e.children??se),O(()=>{Me(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Me(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),I(l,` ${e.legend??""}`)}),h(t,a)}var Sf=()=>W.clearFilters(),$f=t=>W.setSearchQuery(t.currentTarget.value),Pf=()=>W.setSearchQuery(""),kf=()=>W.setGroupBy("none"),Ef=()=>W.setGroupBy("store"),Af=()=>W.setGroupBy("productType"),Tf=(t,e)=>W.toggleProductType(e),Mf=w("<button><!> </button>"),Df=()=>W.toggleTemperature("frais"),Nf=()=>W.toggleTemperature("surgele"),Cf=()=>W.clearTypeAndTemperatureFilters(),If=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Of=w('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Rf=w('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),qf=(t,e)=>W.toggleStore(e),jf=w("<button> </button>"),Lf=()=>W.clearStoreFilters(),Bf=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),zf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Uf=(t,e)=>W.toggleWho(e),Hf=w("<button> </button>"),Wf=()=>W.clearWhoFilters(),Gf=w('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Qf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Vf=w('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Ff(t,e){F(e,!0);const r=Y(()=>W.filters),a=Y(()=>W.uniqueStores),n=Y(()=>W.uniqueWho),i=Y(()=>W.uniqueProductTypes);var o=Vf(),l=q(o),u=c(l),v=c(u);Zo(v,{class:"h-5 w-5"});var f=d(u,2);f.__click=[Sf];var m=c(f);va(m,{class:"h-4 w-4"});var g=d(l,2),p=c(g),_=d(c(p),2),y=c(_);Du(y,{class:"h-4 w-4"});var x=d(y,2);x.__input=[$f];var k=d(x,2);k.__click=[Pf];var N=c(k);Nt(N,{class:"h-4 w-4"});var S=d(p,2),T=d(c(S),2),P=c(T);P.__change=[kf];var D=d(P,2);D.__change=[Ef];var A=d(D,2);A.__change=[Af];var $=d(S,2);{var V=B=>{fa(B,{legend:"Date incluses",bgClass:"bg-base-100",children:(ie,ae)=>{wf(ie,{get availableDates(){return W.availableDates},get currentRange(){return W.dateRange},onRangeChange:(Z,ne)=>W.setDateRange(Z,ne)})},$$slots:{default:!0}})};E($,B=>{W.hasSingleDateEvent||B(V)})}var G=d($,2);{var H=B=>{fa(B,{legend:"Types & Température",get iconComponent(){return si},children:(ie,ae)=>{var Z=Rf(),ne=q(Z);et(ne,20,()=>s(i),R=>R,(R,ee)=>{const de=Y(()=>vn(ee));var we=Mf();we.__click=[Tf,ee];var te=c(we);pr(te,()=>s(de).icon,(Ne,Ae)=>{Ae(Ne,{class:"mr-1 h-5 w-5"})});var Se=d(te);O(Ne=>{Me(we,1,`btn btn-sm ${Ne??""}`),I(Se,` ${s(de).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(ee)?"btn-secondary":"btn-dash btn-secondary"]),h(R,we)});var $e=d(ne,2),xe=c($e);xe.__click=[Df];var z=c(xe);ai(z,{class:"h-5 w-5"});var C=d(xe,2);C.__click=[Nf];var J=c(C);Cn(J,{class:"h-5 w-5"});var le=d($e,2);{var M=R=>{var ee=If();ee.__click=[Cf];var de=c(ee);va(de,{size:16}),h(R,ee)},re=R=>{var ee=Of();h(R,ee)};E(le,R=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?R(M):R(re,!1)})}O((R,ee)=>{Me(xe,1,`btn btn-sm ${R??""}`),Me(C,1,`btn btn-sm ${ee??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(ie,Z)},$$slots:{default:!0}})};E(G,B=>{s(i).length>0&&B(H)})}var Q=d(G,2);{var fe=B=>{fa(B,{legend:"Magasins",get iconComponent(){return vr},children:(ie,ae)=>{var Z=zf(),ne=c(Z);et(ne,16,()=>s(a),z=>z,(z,C)=>{var J=jf();J.__click=[qf,C];var le=c(J);O(M=>{Me(J,1,`btn btn-sm ${M??""}`),I(le,C)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(C)?"btn-secondary":"btn-dash btn-secondary"]),h(z,J)});var $e=d(ne,2);{var xe=z=>{var C=Bf();C.__click=[Lf];var J=c(C);va(J,{size:16}),h(z,C)};E($e,z=>{s(r).selectedStores.length>0&&z(xe)})}h(ie,Z)},$$slots:{default:!0}})};E(Q,B=>{s(a).length>0&&B(fe)})}var _e=d(Q,2);{var he=B=>{fa(B,{legend:"Qui",get iconComponent(){return In},children:(ie,ae)=>{var Z=Qf(),ne=c(Z);et(ne,16,()=>s(n),z=>z,(z,C)=>{var J=Hf();J.__click=[Uf,C];var le=c(J);O(M=>{Me(J,1,`btn btn-sm ${M??""}`),I(le,C)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(C)?" btn-secondary":"btn-dash btn-secondary"]),h(z,J)});var $e=d(ne,2);{var xe=z=>{var C=Gf();C.__click=[Wf];var J=c(C);va(J,{size:16}),h(z,C)};E($e,z=>{s(r).selectedWho.length>0&&z(xe)})}h(ie,Z)},$$slots:{default:!0}})};E(_e,B=>{s(n).length>0&&B(he)})}O(()=>{f.disabled=!W.hasFilters,Gl(x,s(r).searchQuery),k.disabled=!s(r).searchQuery,Ka(P,s(r).groupBy==="none"),Ka(D,s(r).groupBy==="store"),Ka(A,s(r).groupBy==="productType")}),h(t,o),K()}Qe(["click","input","change"]);var ui=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},Kf={weekdays:{shorthand:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],longhand:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},months:{shorthand:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],longhand:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},ordinal:function(){return"º"},firstDayOfWeek:1,rangeSeparator:" a ",time_24hr:!0};ui.l10ns.es=Kf;ui.l10ns;var Jf=w('<div class="tooltip text-xs font-normal"><!></div>');function Yf(t,e){let r=ce(e,"iconSize",3,24),a=e.icon||void 0;var n=Jf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};E(i,l=>{e.icon&&l(o)})}O(()=>nr(n,"data-tip",e.tip)),h(t,n)}var Zf=w('<div class="text-primary-content flex items-center gap-2"><!> </div>'),Xf=w('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),eh=w('<div class="font-semibold">Sur toute la période</div>'),th=w('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),rh=w('le <span class="font-semibold"> </span>',1),ah=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),nh=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),sh=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),oh=w(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),ih=w('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),lh=w('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),ch=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),uh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),dh=w('<div class="text-base-content/60 text-sm font-normal"> </div>'),vh=w('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),fh=w('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),hh=w('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),ph=w('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),gh=w('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),mh=w('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),_h=w('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),bh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),yh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),wh=w('<div class="ml-1"><!></div>'),xh=w('<div class="ml-1"> </div> <!>',1),Sh=w('<div class="ml-1 text-sm font-medium">?</div>'),$h=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),Ph=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),kh=w('<span class="text-base-content/50 text-xs"> </span>'),Eh=w('<div class="ml-1 flex gap-1"> <!></div>'),Ah=w('<div class="ml-1 text-sm font-medium">?</div>'),Th=w('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Mh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Dh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Nh=w('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),Ch=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Ih=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Oh=w('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Rh=w("<span> </span>"),qh=w('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),jh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Lh=w('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Bh=w(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),zh=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Uh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Hh=w('<span class="text-xs opacity-75"> </span>'),Wh=w('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Gh=w('<span class="text-base-content/50 text-xs italic">aucun</span>'),Qh=w('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Vh=w('<!> <div class="space-y-1"></div>',1),Fh=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Kh=w('<div class="space-y-4 rounded-lg"></div> <!>',1);function Jh(t,e){F(e,!0);const r={Package:za,MessageCircleQuestionMark:Su,ShoppingCart:gr,Clock:vu,CircleCheck:cu,CircleX:uu,ClipboardCheck:du,PackageCheck:$u,Check:Or},a=Y(()=>W.groupedFilteredProducts),n=Y(()=>W.filters),i=Y(()=>Kr(W.dateRange.start)),o=Y(()=>Kr(W.dateRange.end));var l=Kh(),u=q(l);et(u,21,()=>Object.entries(s(a)),([m,g])=>m,(m,g)=>{var p=Y(()=>_a(s(g),2));let _=()=>s(p)[0];const x=Y(()=>s(p)[1]);var k=Vh(),N=q(k);{var S=P=>{const D=Y(()=>vn(_()));var A=lh(),$=c(A),V=c($);{var G=ae=>{var Z=Zf(),ne=c(Z);vr(ne,{size:20});var $e=d(ne);O(()=>I($e,` ${_()??""} (${s(x).length??""})`)),h(ae,Z)},H=ae=>{var Z=X(),ne=q(Z);{var $e=z=>{var C=Xf(),J=c(C);pr(J,()=>s(D).icon,(ee,de)=>{de(ee,{size:20})});var le=d(J,2),M=c(le),re=d(le,2),R=c(re);O(()=>{I(M,s(D).displayName),I(R,`(${s(x).length??""})`)}),h(z,C)},xe=z=>{var C=pt();O(()=>I(C,`📦 ${_()??""} (${s(x).length??""})`)),h(z,C)};E(ne,z=>{s(n).groupBy==="productType"?z($e):z(xe,!1)},!0)}h(ae,Z)};E(V,ae=>{s(n).groupBy==="store"?ae(G):ae(H,!1)})}var Q=d($,2),fe=c(Q);{var _e=ae=>{var Z=eh();h(ae,Z)},he=ae=>{var Z=X(),ne=q(Z);{var $e=z=>{var C=th(),J=d(q(C)),le=c(J),M=d(J,2),re=c(M);O(()=>{I(le,s(i)),I(re,s(o))}),h(z,C)},xe=z=>{var C=rh(),J=d(q(C)),le=c(J);O(()=>I(le,s(i))),h(z,C)};E(ne,z=>{W.dateRange.start!==W.dateRange.end?z($e):z(xe,!1)},!0)}h(ae,Z)};E(fe,ae=>{W.isFullRange()?ae(_e):ae(he,!1)})}var B=d(Q,2);{var ie=ae=>{var Z=ih(),ne=c(Z);ne.__click=[ah,e,x];var $e=c(ne);vr($e,{size:16});var xe=d($e,4);Zr(xe,{size:16});var z=d(ne,2);z.__click=[nh,e,x];var C=c(z);ma(C,{size:16});var J=d(C,4);Zr(J,{size:16});var le=d(z,2);{var M=re=>{var R=oh();R.__click=[sh,e,x];var ee=c(R);gr(ee,{size:16});var de=d(ee,4);ws(de,{size:16}),h(re,R)};E(le,re=>{s(x).some(R=>R.data.displayMissingQuantity!=="✅ Complet")&&re(M)})}h(ae,Z)};E(B,ae=>{W.isEventPassed||ae(ie)})}h(P,A)};E(N,P=>{_()!==""&&P(S)})}var T=d(N,2);et(T,21,()=>s(x),P=>P.data.$id,(P,D)=>{const A=Y(()=>s(D).data),$=Y(()=>s(D).stats),V=Y(()=>vn(s(A).productType)),G=Y(()=>Sd(s(A).purchases||[])),H=Y(()=>s(A).totalNeededOverrideParsed);var Q=Qh(),fe=c(Q),_e=c(fe),he=c(_e);he.__click=[ch,e,A],he.__keydown=[uh,e,A];var B=c(he),ie=c(B);pr(ie,()=>s(V).icon,(oe,pe)=>{pe(oe,{class:"text-base-content/80 h-4 w-4"})});var ae=d(ie),Z=d(ae);{var ne=oe=>{var pe=dh(),ke=c(pe);O(()=>I(ke,`Ancien: ${s(A).previousNames[0]??""}`)),h(oe,pe)};E(Z,oe=>{s(A).previousNames&&s(A).previousNames.length>0&&oe(ne)})}var $e=d(Z,2);{var xe=oe=>{var pe=vh(),ke=c(pe);xs(ke,{class:"text-warning h-4 w-4"}),h(oe,pe)};E($e,oe=>{s(A).productHugoUuid||oe(xe)})}var z=d(B,2),C=c(z);{var J=oe=>{var pe=fh(),ke=c(pe);ai(ke,{class:"text-success h-4 w-4"}),h(oe,pe)};E(C,oe=>{s(A).pFrais&&oe(J)})}var le=d(C,2);{var M=oe=>{var pe=hh(),ke=c(pe);Cn(ke,{class:"text-info h-4 w-4"}),h(oe,pe)};E(le,oe=>{s(A).pSurgel&&oe(M)})}var re=d(z,2);{var R=oe=>{var pe=ph(),ke=c(pe);ei(ke,{class:"h-4 w-4 animate-spin"}),h(oe,pe)};E(re,oe=>{s(A).status==="isSyncing"&&oe(R)})}var ee=d(re,2);{var de=oe=>{var pe=_h(),ke=c(pe);et(ke,20,()=>s($).concernedDates,He=>He,(He,Ee)=>{const je=Y(()=>s($).recipesByDate.get(Ee)||[]);var Ue=X(),We=q(Ue);{var ft=Je=>{var ot=gh(),Ve=c(ot),bt=c(Ve);O((zt,Ur)=>{nr(ot,"data-tip",zt),I(bt,Ur)},[()=>s(je).map(zt=>zt.r).join(", "),()=>new Date(Ee).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(Je,ot)},At=Je=>{var ot=mh(),Ve=c(ot);O(bt=>I(Ve,bt),[()=>new Date(Ee).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(Je,ot)};E(We,Je=>{s(je).length>0?Je(ft):Je(At,!1)})}h(He,Ue)}),h(oe,pe)};E(ee,oe=>{s($).concernedDates.length>0&&oe(de)})}var we=d(he,2);{var te=oe=>{var pe=Th(),ke=c(pe);ke.__click=[bh,e,A],ke.__keydown=[yh,e,A];var He=c(ke);vr(He,{size:18});var Ee=d(He,2);{var je=Ve=>{var bt=xh(),zt=q(bt),Ur=c(zt),Ga=d(zt,2);{var Ut=Sr=>{var ia=wh(),vi=c(ia);Yf(vi,{get tip(){return s(A).storeInfo.storeComment},get icon(){return xu},iconSize:14}),h(Sr,ia)};E(Ga,Sr=>{s(A).storeInfo?.storeComment&&Sr(Ut)})}O(()=>I(Ur,s(A).storeInfo.storeName)),h(Ve,bt)},Ue=Ve=>{var bt=Sh();h(Ve,bt)};E(Ee,Ve=>{s(A).storeInfo?.storeName?Ve(je):Ve(Ue,!1)})}var We=d(ke,2);We.__click=[$h,e,A],We.__keydown=[Ph,e,A];var ft=c(We);ma(ft,{size:18});var At=d(ft,2);{var Je=Ve=>{var bt=Eh(),zt=c(bt),Ur=d(zt);{var Ga=Ut=>{var Sr=kh(),ia=c(Sr);O(()=>I(ia,`+${s(A).who.length-2}`)),h(Ut,Sr)};E(Ur,Ut=>{s(A).who.length>2&&Ut(Ga)})}O(Ut=>I(zt,`${Ut??""} `),[()=>s(A).who.slice(0,2).map(Ut=>Ut.slice(0,3)).join(" | ")]),h(Ve,bt)},ot=Ve=>{var bt=Ah();h(Ve,bt)};E(At,Ve=>{s(A).who&&s(A).who.length>0?Ve(Je):Ve(ot,!1)})}O(()=>{Me(ke,1,`btn btn-soft btn-sm group relative ${s(A).storeInfo?.storeName?"btn-success":""}`),Me(We,1,`btn btn-sm btn-soft group relative ${s(A).who&&s(A).who?.length>0?"btn-success":""}`)}),h(oe,pe)},Se=oe=>{var pe=Nh(),ke=c(pe);{var He=Ue=>{var We=Mh(),ft=c(We);vr(ft,{size:16});var At=d(ft);O(()=>I(At,` ${s(A).storeInfo.storeName??""}`)),h(Ue,We)};E(ke,Ue=>{s(A).storeInfo?.storeName&&Ue(He)})}var Ee=d(ke,2);{var je=Ue=>{var We=Dh(),ft=c(We);ma(ft,{size:16});var At=d(ft);O(Je=>I(At,` ${Je??""}`),[()=>s(A).who.join(", ")]),h(Ue,We)};E(Ee,Ue=>{s(A).who&&s(A).who.length>0&&Ue(je)})}h(oe,pe)};E(we,oe=>{W.isEventPassed?oe(Se,!1):oe(te)})}var Ne=d(_e,2),Ae=c(Ne);Ae.__click=[Ch,e,A],Ae.__keydown=[Ih,e,A];var De=c(Ae),Be=c(De),U=c(Be);bu(U,{class:"h-4 w-4"});var ye=d(Be,2),ze=c(ye),tt=c(ze);{var rt=oe=>{var pe=Oh(),ke=c(pe),He=c(ke),Ee=d(ke,2);xs(Ee,{class:"h-4 w-4"});var je=d(Ee);O(()=>{I(He,s($).formattedQuantities),I(je,` ${s(H).totalOverride.q??""}
                          ${s(H).totalOverride.u??""}`)}),h(oe,pe)},Ie=oe=>{var pe=Rh(),ke=c(pe);O(()=>I(ke,s($).formattedQuantities)),h(oe,pe)};E(tt,oe=>{s(H)?.totalOverride?oe(rt):oe(Ie,!1)})}var Ye=d(ze,2);{var Bt=oe=>{var pe=qh(),ke=c(pe),He=c(ke),Ee=d(He);Ba(Ee,{class:"h-3 w-3"});var je=d(ke,2),Ue=c(je),We=d(Ue);ii(We,{class:"h-3 w-3"}),O(()=>{I(He,`${s($).nbRecipes??""} `),I(Ue,`${s($).totalAssiettes??""} `)}),h(oe,pe)};E(Ye,oe=>{(s($).nbRecipes||s($).totalAssiettes)&&oe(Bt)})}var be=d(De,2);{var Te=oe=>{var pe=Lh();pe.__click=[jh,e,A,$];var ke=d(c(pe),2),He=c(ke),Ee=d(ke,2);{var je=We=>{iu(We,{size:18})},Ue=We=>{lu(We,{size:18})};E(Ee,We=>{Ir.isMobile?We(je):We(Ue,!1)})}O(()=>{nr(pe,"title",`Acheter le manquant (${s($).formattedMissingQuantities??""})`),I(He,s($).formattedMissingQuantities)}),h(oe,pe)},qe=oe=>{var pe=X(),ke=q(pe);{var He=Ee=>{ws(Ee,{size:24,class:"text-success ms-auto"})};E(ke,Ee=>{W.isEventPassed||Ee(He)},!0)}h(oe,pe)};E(be,oe=>{!W.isEventPassed&&s($).hasMissing?oe(Te):oe(qe,!1)})}var Pe=d(be,2);{var Ke=oe=>{var pe=Bh(),ke=c(pe);ou(ke,{size:18}),h(oe,pe)};E(Pe,oe=>{!W.isEventPassed&&s(H)?.hasUnresolvedChangedSinceOverride&&oe(Ke)})}var at=d(Ae,2);at.__click=[zh,e,A],at.__keydown=[Uh,e,A];var ct=c(at),Xe=c(ct),_t=c(Xe);gr(_t,{class:"h-4 w-4"});var xt=d(Xe,2),St=d(ct,2),Ct=c(St);et(Ct,17,()=>s(G),Cr,(oe,pe)=>{const ke=Y(()=>r[s(pe).icon]);var He=Wh(),Ee=c(He),je=c(Ee);pr(je,()=>s(ke),(Je,ot)=>{ot(Je,{class:"h-4 w-4"})});var Ue=d(je,2),We=c(Ue),ft=d(Ee,2);{var At=Je=>{var ot=Hh(),Ve=c(ot);O(()=>I(Ve,`livré le: ${s(pe).deliveryDate??""}`)),h(Je,ot)};E(ft,Je=>{s(pe).deliveryDate&&Je(At)})}O(()=>{Me(He,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(pe).badgeClass??""}`),I(We,`${s(pe).quantity??""}
                          ${s(pe).unit??""}`)}),h(oe,He)});var vt=d(Ct,2);{var It=oe=>{var pe=Gh();h(oe,pe)};E(vt,oe=>{s(G).length===0&&oe(It)})}O(()=>{Me(Q,1,`card bg-base-100 border-base-300 ${s(A).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),I(ae,`${s(A).productName??""} `),Me(ze,1,`text-base font-bold ${s($).hasMissing&&!W.isEventPassed?"text-error":"text-success"}`),Me(xt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${W.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),h(P,Q)}),h(m,k)});var v=d(u,2);{var f=m=>{var g=Fh();h(m,g)};E(v,m=>{Object.values(s(a)).flat().length===0&&m(f)})}h(t,l),K()}Qe(["click","keydown"]);async function Yh(t,e,r,a,n,i,o,l,u){if(!(!s(e)||s(r))){b(a,null),b(n,null);try{const v=s(i).map(p=>p.id),f=o.products.filter(p=>v.includes(p.$id));W.setSyncStatus(v,!0),o.onClose();const m={storeName:s(l).trim(),storeComment:s(u).trim()},g=await Wo(v,f,m);if(b(n,g,!0),g.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${g.updatedCount} produits modifiés`),o.onSuccess?.(g);else throw new Error(g.error||"Erreur lors de la mise à jour")}catch(v){const f=v instanceof Error?v.message:"Erreur inconnue";b(a,f,!0),console.error("[StoreEditModal] Erreur mise à jour:",v),W.clearSyncStatus()}finally{b(r,!1)}}}function ks(t,e,r){s(e)||r.onClose()}var Zh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Xh=(t,e)=>b(e,"empty"),ep=(t,e)=>b(e,"all"),tp=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),rp=w("<!> ",1),ap=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function np(t,e){F(e,!0);let r=L(!1),a=L(null),n=L(null),i=L(Re(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=L(Re(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=L(Re({})),u=L("empty");Lt(()=>{const C={};e.products.forEach(J=>{e.productIds.includes(J.$id)&&(s(u)==="empty"?C[J.$id]=!J.storeInfo||!J.storeInfo.storeName:C[J.$id]=!0)}),b(l,C,!0)});const v=Y(()=>e.products.map(C=>({id:C.$id,label:C.productName,title:C.productName,selected:s(l)[C.$id]}))),f=Y(()=>s(v).filter(C=>C.selected)),m=Y(()=>`Attribuer un magasin (${s(f).length} produits sélectionnés)`),g=Y(()=>s(f).length===0?!1:s(i).trim().length>0);function p(C){s(l)[C]=!s(l)[C]}var _=ap(),y=c(_),x=c(y),k=c(x),N=c(k),S=d(k,2);S.__click=[ks,r,e];var T=c(S);Nt(T,{class:"h-4 w-4"});var P=d(x,2),D=c(P);{var A=C=>{var J=Zh(),le=c(J);sa(le,{class:"h-4 w-4"});var M=d(le,2),re=c(M);O(()=>I(re,s(a))),h(C,J)};E(D,C=>{s(a)&&C(A)})}var $=d(D,2),V=c($),G=c(V);Br(G,{get suggestions(){return W.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(C){b(i,C,!0)}});var H=d(V,2),Q=c(H);zr(Q,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(C){b(o,C,!0)}});var fe=d($,2),_e=d(c(fe),2),he=c(_e);he.__click=[Xh,u];var B=d(he,2);B.__click=[ep,u];var ie=d(_e,2);Xr(ie,{get items(){return s(v)},onToggleItem:p,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ae=d(P,2),Z=c(ae);Z.__click=[ks,r,e];var ne=d(Z,2);ne.__click=[Yh,g,r,a,n,f,e,i,o];var $e=c(ne);{var xe=C=>{var J=tp();h(C,J)},z=C=>{var J=rp(),le=q(J);Or(le,{class:"h-4 w-4"});var M=d(le);O(()=>I(M,` Appliquer à ${s(f).length??""} produit(s)`)),h(C,J)};E($e,C=>{s(r)?C(xe):C(z,!1)})}O(()=>{I(N,s(m)),S.disabled=s(r),Me(he,1,`tab ${s(u)==="empty"?"tab-active":""}`),Me(B,1,`tab ${s(u)==="all"?"tab-active":""}`),Z.disabled=s(r),ne.disabled=s(r)||!s(g)}),h(t,_),K()}Qe(["click"]);async function sp(t,e,r,a,n,i,o,l){if(!(!s(e)||s(r))){b(a,null),b(n,null);try{const u=s(i).map(m=>m.id),v=o.products.filter(m=>u.includes(m.$id));W.setSyncStatus(u,!0),o.onClose();const f=await Go(u,v,s(l),"replace");if(b(n,f,!0),f.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${f.updatedCount} produits modifiés`),o.onSuccess?.(f);else throw new Error(f.error||"Erreur lors de la mise à jour")}catch(u){const v=u instanceof Error?u.message:"Erreur inconnue";b(a,v,!0),console.error("[WhoEditModal] Erreur mise à jour:",u),W.clearSyncStatus()}finally{b(r,!1)}}}function Es(t,e,r){s(e)||r.onClose()}var op=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ip=(t,e)=>b(e,"empty"),lp=(t,e)=>b(e,"all"),cp=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),up=w("<!> ",1),dp=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function vp(t,e){F(e,!0);let r=L(!1),a=L(null),n=L(null),i=L(Re([])),o=L(""),l=L("empty"),u=L(Re({}));Lt(()=>{const te={};e.products.forEach(Se=>{e.productIds.includes(Se.$id)&&(s(l)==="empty"?te[Se.$id]=!Se.who||Se.who.length===0:te[Se.$id]=!0)}),b(u,te,!0)});const v=Y(()=>e.products.map(te=>({id:te.$id,label:te.productName,title:te.productName,selected:s(u)[te.$id]}))),f=Y(()=>s(v).filter(te=>te.selected)),m=Y(()=>{const te=new Set([...W.uniqueWho,...s(i)]);return Array.from(te).map(Se=>({id:Se,label:Se,selected:s(i).includes(Se)}))}),g=Y(()=>`Gérer les volontaires (${s(f).length} produits sélectionnés)`),p=Y(()=>s(f).length===0?!1:s(i).length>0);function _(te){const Se=te.trim();Se&&!s(i).includes(Se)&&b(i,[...s(i),Se],!0)}function y(te){b(i,s(i).filter(Se=>Se!==te),!0)}function x(te){s(i).includes(te)?y(te):_(te)}function k(){s(o).trim()&&(_(s(o)),b(o,""))}function N(te){s(u)[te]=!s(u)[te]}var S=dp(),T=c(S),P=c(T),D=c(P),A=c(D),$=d(D,2);$.__click=[Es,r,e];var V=c($);Nt(V,{class:"h-4 w-4"});var G=d(P,2),H=c(G);{var Q=te=>{var Se=op(),Ne=c(Se);sa(Ne,{class:"h-4 w-4"});var Ae=d(Ne,2),De=c(Ae);O(()=>I(De,s(a))),h(te,Se)};E(H,te=>{s(a)&&te(Q)})}var fe=d(H,2),_e=c(fe),he=c(_e),B=c(he),ie=c(B);oa(ie,{get disabled(){return s(r)},onkeydown:te=>{te.key==="Enter"&&(te.preventDefault(),k())},get value(){return s(o)},set value(te){b(o,te,!0)}});var ae=d(B,2);ae.__click=k;var Z=c(ae);oi(Z,{size:16});var ne=d(he,2),$e=d(c(ne),2);Xr($e,{get items(){return s(m)},onToggleItem:x,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var xe=d(fe,2),z=d(c(xe),2),C=c(z);C.__click=[ip,l];var J=d(C,2);J.__click=[lp,l];var le=d(z,2);Xr(le,{get items(){return s(v)},onToggleItem:N,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var M=d(G,2),re=c(M);re.__click=[Es,r,e];var R=d(re,2);R.__click=[sp,p,r,a,n,f,e,i];var ee=c(R);{var de=te=>{var Se=cp();h(te,Se)},we=te=>{var Se=up(),Ne=q(Se);Or(Ne,{class:"h-4 w-4"});var Ae=d(Ne);O(()=>I(Ae,` Appliquer à ${s(f).length??""} produit(s)`)),h(te,Se)};E(ee,te=>{s(r)?te(de):te(we,!1)})}O(te=>{I(A,s(g)),$.disabled=s(r),ae.disabled=te,Me(C,1,`tab ${s(l)==="empty"?"tab-active":""}`),Me(J,1,`tab ${s(l)==="all"?"tab-active":""}`),re.disabled=s(r),R.disabled=s(r)||!s(p)},[()=>s(r)||!s(o).trim()]),h(t,S),K()}Qe(["click"]);async function fp(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=W.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Mn(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Vo(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var hp=(t,e)=>e(!1),pp=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),gp=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),mp=(t,e)=>b(e,!0),_p=w('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),bp=w('<span class="loading loading-spinner loading-xs"></span>'),yp=w('<div class="text-error text-xs mt-2"> </div>'),wp=w('<div class="card bg-base-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!> <!> <!> <!></div> <div class="card-actions justify-end mt-2"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),xp=(t,e)=>e("date"),Sp=(t,e)=>e("store"),$p=(t,e)=>e("who"),Pp=(t,e)=>e("amount"),kp=w('<span class="italic text-base-content/70"> </span>'),Ep=w('<span class="text-xs text-base-content/50 ml-1"> </span>'),Ap=w('<span class="font-medium"> </span> <!>',1),Tp=(t,e,r)=>e(s(r)),Mp=w('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),Dp=w('<tr><td colspan="7" class="text-center py-8 text-base-content/50">Aucune dépense trouvée</td></tr>'),Np=(t,e)=>e(!1),Cp=(t,e)=>e(!1),Ip=w('<dialog><div class="modal-box w-11/12 max-w-5xl h-[90vh] flex flex-col p-0 bg-base-100"><div class="p-4 border-b border-base-300 flex justify-between items-center bg-base-200 sticky top-0 z-10"><h3 class="font-bold text-lg flex items-center gap-2"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 overflow-y-auto p-4 space-y-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="stats shadow bg-primary text-primary-content"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 shadow-sm p-4"><h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Magasin</h4> <div class="overflow-y-auto max-h-24 text-sm space-y-1"></div></div> <div class="card bg-base-200 shadow-sm p-4"><h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Acheteur</h4> <div class="overflow-y-auto max-h-24 text-sm space-y-1"></div></div></div> <div class="flex justify-between items-center"><h4 class="font-bold text-sm uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="overflow-x-auto bg-base-100 rounded-lg border border-base-200"><table class="table table-zebra table-xs w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="cursor-pointer hover:bg-base-300"> </th><th>Description</th><th class="cursor-pointer hover:bg-base-300"> </th><th class="cursor-pointer hover:bg-base-300"> </th><th class="cursor-pointer hover:bg-base-300 text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="py-1 px-4 border-t border-base-300 bg-base-200 flex justify-between items-center sticky bottom-0 z-10"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function Op(t,e){F(e,!0);let r=ce(e,"isOpen",15,!1),a=L(!1),n=L(null),i=L(!1),o=L(Re({invoiceTotal:0,store:"",notes:"",who:""})),l=L(null);Lt(()=>{if(r()&&!s(l)){const be=localStorage.getItem("appwrite-user-name");be&&(s(o).who=be)}});let u=L("date"),v=L("desc"),f=Y(()=>W.financialStats),m=Y(()=>s(f).allPurchases),g=Y(()=>{let be=[...s(m)];return be.sort((Te,qe)=>{let Pe,Ke;switch(s(u)){case"date":Pe=new Date(Te.orderDate||Te.$createdAt).getTime(),Ke=new Date(qe.orderDate||qe.$createdAt).getTime();break;case"amount":Pe=Te.invoiceTotal||Te.price||0,Ke=qe.invoiceTotal||qe.price||0;break;case"store":Pe=(Te.store||"").toLowerCase(),Ke=(qe.store||"").toLowerCase();break;case"who":Pe=(Te.who||"").toLowerCase(),Ke=(qe.who||"").toLowerCase();break}return Pe<Ke?s(v)==="asc"?-1:1:Pe>Ke?s(v)==="asc"?1:-1:0}),be});function p(be){s(u)===be?b(v,s(v)==="asc"?"desc":"asc",!0):(b(u,be,!0),b(v,"desc"))}function _(){const be=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:be},!0),b(l,null),b(i,!1)}function y(be){b(o,{invoiceTotal:be.invoiceTotal||be.price||0,store:be.store||"",notes:be.notes||"",who:be.who||""},!0),b(l,be.$id,!0),b(i,!0)}function x(be){return be?new Date(be).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function k(be){return(be||0).toFixed(2)+" €"}var N=Ip(),S=c(N),T=c(S),P=c(T),D=c(P);Jo(D,{});var A=d(P,2);A.__click=[hp,r];var $=d(T,2),V=c($),G=c(V),H=c(G),Q=d(c(H),2),fe=c(Q),_e=d(Q,2),he=c(_e),B=d(G,2),ie=d(c(B),2);et(ie,21,()=>Object.entries(s(f).byStore).sort((be,Te)=>Te[1]-be[1]),Cr,(be,Te)=>{var qe=Y(()=>_a(s(Te),2));let Pe=()=>s(qe)[0],Ke=()=>s(qe)[1];var at=pp(),ct=c(at),Xe=c(ct),_t=d(ct,2),xt=c(_t);O(St=>{I(Xe,Pe()),I(xt,St)},[()=>k(Ke())]),h(be,at)});var ae=d(B,2),Z=d(c(ae),2);et(Z,21,()=>Object.entries(s(f).byWho).sort((be,Te)=>Te[1]-be[1]),Cr,(be,Te)=>{var qe=Y(()=>_a(s(Te),2));let Pe=()=>s(qe)[0],Ke=()=>s(qe)[1];var at=gp(),ct=c(at),Xe=c(ct),_t=d(ct,2),xt=c(_t);O(St=>{I(Xe,Pe()),I(xt,St)},[()=>k(Ke())]),h(be,at)});var ne=d(V,2),$e=d(c(ne),2);{var xe=be=>{var Te=_p();Te.__click=[mp,i],h(be,Te)};E($e,be=>{s(i)||be(xe)})}var z=d(ne,2);{var C=be=>{var Te=wp(),qe=c(Te),Pe=c(qe),Ke=c(Pe),at=d(Pe,2),ct=c(at);Rn(ct,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(Ee){s(o).invoiceTotal=Ee}});var Xe=d(ct,2);Br(Xe,{get suggestions(){return W.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(Ee){s(o).store=Ee}});var _t=d(Xe,2);oa(_t,{get suggestions(){return W.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(Ee){s(o).who=Ee}});var xt=d(_t,2);zr(xt,{get disabled(){return s(a)},get value(){return s(o).notes},set value(Ee){s(o).notes=Ee}});var St=d(at,2),Ct=c(St);Ct.__click=_;var vt=d(Ct,2);vt.__click=[fp,o,n,a,l,_];var It=c(vt);{var oe=Ee=>{var je=bp();h(Ee,je)};E(It,Ee=>{s(a)&&Ee(oe)})}var pe=d(It),ke=d(St,2);{var He=Ee=>{var je=yp(),Ue=c(je);O(()=>I(Ue,s(n))),h(Ee,je)};E(ke,Ee=>{s(n)&&Ee(He)})}O(()=>{I(Ke,s(l)?"Modifier la dépense":"Nouvelle Dépense"),vt.disabled=s(a),I(pe,` ${s(l)?"Enregistrer":"Ajouter"}`)}),h(be,Te)};E(z,be=>{s(i)&&be(C)})}var J=d(z,2),le=c(J),M=c(le),re=c(M),R=c(re);R.__click=[xp,p];var ee=c(R),de=d(R,2);de.__click=[Sp,p];var we=c(de),te=d(de);te.__click=[$p,p];var Se=c(te),Ne=d(te);Ne.__click=[Pp,p];var Ae=c(Ne),De=d(Ne),Be=c(De);ku(Be,{size:14});var U=d(M),ye=c(U);et(ye,17,()=>s(g),be=>be.$id,(be,Te)=>{var qe=Mp(),Pe=c(qe),Ke=c(Pe),at=d(Pe),ct=c(at);{var Xe=Ee=>{var je=kp(),Ue=c(je);O(()=>I(Ue,s(Te).notes||"-")),h(Ee,je)},_t=Ee=>{var je=Ap(),Ue=q(je),We=c(Ue),ft=d(Ue,2);{var At=Je=>{var ot=Ep(),Ve=c(ot);O(()=>I(Ve,`- ${s(Te).notes??""}`)),h(Je,ot)};E(ft,Je=>{s(Te).notes&&Je(At)})}O(()=>I(We,s(Te)._productName||"Produit inconnu")),h(Ee,je)};E(ct,Ee=>{s(Te).status==="expense"?Ee(Xe):Ee(_t,!1)})}var xt=d(at),St=c(xt),Ct=d(xt),vt=c(Ct),It=d(Ct),oe=c(It),pe=d(It),ke=c(pe);ke.__click=[Tp,y,Te];var He=c(ke);Zr(He,{size:14}),O((Ee,je)=>{I(Ke,Ee),I(St,s(Te).store||"-"),I(vt,s(Te).who||"-"),I(oe,je)},[()=>x(s(Te).orderDate||s(Te).$createdAt),()=>k(s(Te).invoiceTotal||s(Te).price)]),h(be,qe)});var ze=d(ye);{var tt=be=>{var Te=Dp();h(be,Te)};E(ze,be=>{s(g).length===0&&be(tt)})}var rt=d($,2),Ie=c(rt);Ie.__click=[Np,r];var Ye=d(S,2),Bt=c(Ye);Bt.__click=[Cp,r],O(be=>{Me(N,1,`modal ${r()?"modal-open":""}`),I(fe,be),I(he,`${s(m).length??""} transactions`),I(ee,`Date ${s(u)==="date"?s(v)==="asc"?"↑":"↓":""}`),I(we,`Magasin ${s(u)==="store"?s(v)==="asc"?"↑":"↓":""}`),I(Se,`Qui ${s(u)==="who"?s(v)==="asc"?"↑":"↓":""}`),I(Ae,`Montant ${s(u)==="amount"?s(v)==="asc"?"↑":"↓":""}`)},[()=>k(s(f).totalGlobal)]),h(t,N),K()}Qe(["click"]);var Rp=w("<div><!></div>"),qp=w('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function jp(t,e){F(e,!0);let r=L(!1),a=ce(e,"width",3,"80"),n=ce(e,"bgClass",3,"bg-base-300");const i=Y(()=>"w-"+a());var o=X(),l=q(o);{var u=f=>{var m=Rp(),g=c(m);ue(g,()=>e.children??se),O(()=>Me(m,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(f,m)},v=f=>{var m=qp(),g=q(m),p=c(g),_=d(p,2),y=d(c(_),2),x=c(y);ue(x,()=>e.children??se);var k=d(g,2),N=c(k),S=c(N);Zo(S,{class:"h-6 w-6"}),cn(p,()=>s(r),T=>b(r,T)),h(f,m)};E(l,f=>{Ir.isMobile?f(v,!1):f(u)})}h(t,o),K()}function Lp(t,e){b(e,!0)}var Bp=(t,e)=>b(e,!0),zp=w('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Up(t,e){F(e,!0);const r="100",a=Y(()=>W.stats);let n=L(null),i=L("recettes"),o=L(!1),l=L(!1),u=L(Re([])),v=L(Re([])),f=L(!1),m=L(Re([])),g=L(!1);function p(M,re="recettes"){b(i,re,!0),b(n,M,!0)}function _(){b(n,null)}function y(M,re,R){b(u,re,!0),b(v,R,!0),b(M==="who"?o:l,!0)}function x(M){(!M||M==="who")&&b(o,!1),(!M||M==="store")&&b(l,!1),b(u,[],!0),b(v,[],!0)}function k(M){console.log(`[ProductsTable] Modification groupée réussie: ${M.updatedCount} produits`)}function N(M){const re=M.filter(R=>W.getProductModelById(R.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${M.length} produits reçus → ${re.length} produits avec quantités manquantes`),b(m,re,!0),b(f,!0)}function S(){b(f,!1),b(m,[],!0)}function T(){console.log("[ProductsTable] Achat groupé créé avec succès"),S()}async function P(M,re){try{if(!W.currentMainId)throw new Error("mainId non disponible");const R=re.missingQuantities||[];if(R.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const ee=R.filter(we=>we.q<0).map(we=>({...we,q:Math.abs(we.q)})).map(we=>{const{quantity:te,unit:Se}=fn(we.q,we.u);return{q:te,u:Se}});let de=M.$id;M.isSynced||(console.log(`[ProductsTable] Produit ${M.$id} local, création pour validation rapide...`),de=(await Ht(M.$id,{},te=>W.getEnrichedProductById(te))).$id,console.log(`[ProductsTable] Produit sync créé: ${de}`)),await Qo(W.currentMainId,de,ee,{store:M.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${M.productName}`)}catch(R){console.error("[ProductsTable] Erreur validation rapide:",R),alert("Erreur lors de la validation rapide: "+R.message)}}let D=L(!1);var A=zp(),$=c(A),V=c($),G=c(V);mu(G,{class:"mr-1 h-4 w-4"});var H=d(G),Q=d(V,2);Q.__click=[Bp,D];var fe=c(Q);Jo(fe,{class:"mr-1 h-4 w-4"});var _e=d(Q,2);_e.__click=[Lp,g];var he=c(_e);Nn(he,{class:"mr-1 h-4 w-4"});var B=d($,2);jp(B,{width:r,children:(M,re)=>{Ff(M,{})},$$slots:{default:!0}});var ie=d(B,2);Jh(ie,{onOpenModal:p,onOpenGroupEditModal:y,onOpenGroupPurchaseModal:N,onQuickValidation:P});var ae=d(ie,2);{let M=Y(()=>s(n)||"");uf(ae,{get productId(){return s(M)},get initialTab(){return s(i)},onClose:_})}var Z=d(ae,2);{var ne=M=>{vp(M,{get productIds(){return s(u)},get products(){return s(v)},onClose:()=>x("who"),onSuccess:k})};E(Z,M=>{s(o)&&M(ne)})}var $e=d(Z,2);{var xe=M=>{np(M,{get productIds(){return s(u)},get products(){return s(v)},onClose:()=>x("store"),onSuccess:k})};E($e,M=>{s(l)&&M(xe)})}var z=d($e,2);{var C=M=>{pd(M,{get products(){return s(m)},onClose:S,onSuccess:T})};E(z,M=>{s(f)&&M(C)})}var J=d(z,2);wd(J,{get open(){return s(g)},set open(M){b(g,M,!0)}});var le=d(J,2);Op(le,{get isOpen(){return s(D)},set isOpen(M){b(D,M,!0)}}),O(()=>{Me(A,1,`space-y-6 ${Ir.isMobile?"":"ml-100"}`),I(H,` ${s(a).total??""}`)}),h(t,A),K()}Qe(["click"]);Fi();var Hp=w('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Wp(t){var e=Hp();h(t,e)}var Gp=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Qp(t,e){var r=Gp(),a=d(c(r),2),n=d(c(a),2),i=c(n);O(()=>I(i,e.message)),h(t,r)}var Vp=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Fp(t,e){var r=Vp(),a=c(r),n=c(a);sa(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(n,2),o=d(c(i),2),l=c(o);O(()=>I(l,e.message||"Erreur inconnue")),h(t,r)}function Kp(t){t.stopPropagation()}var Jp=(t,e)=>t.key==="Escape"&&e(),Yp=w('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Zp=w('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Xp=(t,e)=>b(e,!1),eg=w('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),tg=(t,e)=>b(e,!0),rg=(t,e)=>b(e,!1),ag=w(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),ng=(t,e)=>b(e,!0),sg=w('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),og=w('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function ig(t,e){F(e,!0);let r=ce(e,"onClose",3,()=>{}),a=ce(e,"onAuthSuccess",3,()=>{}),n=L(!0),i=L(!1),o=L(""),l=L(""),u=L(""),v=L(""),f=L(""),m=L(""),g=L(""),p=L(""),_=L(!1);function y(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function x(ae){if(ae.preventDefault(),!s(u)||!s(v)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createEmailPasswordSession(s(u),s(v)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(Z){console.error("Erreur de connexion:",Z),b(o,Z.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function k(ae){if(ae.preventDefault(),!s(f)||!s(m)||!s(g)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const ne=await y().getAccount();await ne.create("unique()",s(m),s(g),s(f)),await ne.createEmailPasswordSession(s(m),s(g)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(Z){console.error("Erreur d'inscription:",Z),b(o,Z.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function N(ae){if(ae.preventDefault(),!s(p)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createRecovery(s(p),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(p,"")},2e3)}catch(Z){console.error("Erreur mot de passe oublié:",Z),b(o,Z.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function S(){s(i)||r()()}Lt(()=>{(s(n)||s(_))&&(b(o,""),b(l,""))});var T=og();T.__click=S,T.__keydown=[Jp,S];var P=c(T);P.__click=[Kp];var D=c(P),A=c(D),$=c(A),V=d(A,2);V.__click=S;var G=d(D,2),H=c(G);{var Q=ae=>{var Z=Yp(),ne=c(Z);O(()=>I(ne,s(o))),h(ae,Z)};E(H,ae=>{s(o)&&ae(Q)})}var fe=d(H,2);{var _e=ae=>{var Z=Zp(),ne=c(Z);O(()=>I(ne,s(l))),h(ae,Z)};E(fe,ae=>{s(l)&&ae(_e)})}var he=d(fe,2);{var B=ae=>{var Z=eg(),ne=q(Z),$e=c(ne),xe=d(c($e),2),z=d($e,2),C=c(z),J=d(ne,2),le=c(J);le.__click=[Xp,_],O(()=>{xe.disabled=s(i),z.disabled=s(i),I(C,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),le.disabled=s(i)}),ga("submit",ne,N),Ge(xe,()=>s(p),M=>b(p,M)),h(ae,Z)},ie=ae=>{var Z=X(),ne=q(Z);{var $e=z=>{var C=ag(),J=q(C),le=c(J),M=d(c(le),2),re=d(le,2),R=d(c(re),2),ee=d(re,2),de=c(ee),we=d(J,2),te=c(we);te.__click=[tg,_];var Se=d(te,2),Ne=d(c(Se));Ne.__click=[rg,n],O(()=>{M.disabled=s(i),R.disabled=s(i),ee.disabled=s(i),I(de,s(i)?"Connexion...":"Se connecter"),te.disabled=s(i),Ne.disabled=s(i)}),ga("submit",J,x),Ge(M,()=>s(u),Ae=>b(u,Ae)),Ge(R,()=>s(v),Ae=>b(v,Ae)),h(z,C)},xe=z=>{var C=sg(),J=q(C),le=c(J),M=d(c(le),2),re=d(le,2),R=d(c(re),2),ee=d(re,2),de=d(c(ee),2),we=d(ee,2),te=c(we),Se=d(J,2),Ne=d(c(Se));Ne.__click=[ng,n],O(()=>{M.disabled=s(i),R.disabled=s(i),de.disabled=s(i),we.disabled=s(i),I(te,s(i)?"Création...":"Créer un compte"),Ne.disabled=s(i)}),ga("submit",J,k),Ge(M,()=>s(f),Ae=>b(f,Ae)),Ge(R,()=>s(m),Ae=>b(m,Ae)),Ge(de,()=>s(g),Ae=>b(g,Ae)),h(z,C)};E(ne,z=>{s(n)?z($e):z(xe,!1)},!0)}h(ae,Z)};E(he,ae=>{s(_)?ae(B):ae(ie,!1)})}O(()=>{I($,s(_)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),V.disabled=s(i)}),h(t,T),K()}Qe(["click","keydown"]);var lg=(t,e,r)=>e(s(r)),cg=w('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),ug=(t,e,r)=>e(s(r)),dg=w('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),vg=w('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),fg=w("<div></div>");function hg(t,e){F(e,!0);let r=ce(e,"position",3,"toast-right toast-bottom"),a=ce(e,"padding",3,"md");const n=Y(()=>a()==="sm"?"px-2 py-0.5":""),i=Y(()=>Pt.toasts);function o(f){return f==="success"||f==="info"}function l(f){Pt.dismiss(f.id)}function u(f){e.onShowDetails?.({id:f.id,message:f.message,details:f.details})}var v=fg();et(v,21,()=>s(i),f=>f.id,(f,m)=>{var g=vg(),p=c(g),_=c(p),y=c(_);{var x=$=>{ei($,{class:"h-5 w-5 animate-spin"})};E(y,$=>{s(m).state==="loading"&&$(x)})}var k=d(y,2),N=c(k),S=d(_,2),T=c(S);{var P=$=>{var V=cg();V.__click=[lg,u,m];var G=c(V);Yo(G,{class:"h-3 w-3"}),h($,V)};E(T,$=>{s(m).details&&$(P)})}var D=d(T,2);{var A=$=>{var V=dg();V.__click=[ug,l,m];var G=c(V);Nt(G,{class:"ms-1 h-4 w-4"}),h($,V)};E(D,$=>{(s(m).state==="error"||!o(s(m).state))&&$(A)})}O(()=>{Me(g,1,`alert alert-${s(m).state??""} max-w-sm ${s(n)??""} shadow-lg ${s(m).state==="error"?"":"alert-soft"}`),I(N,s(m).message)}),h(f,g)}),O(()=>Me(v,1,`toast ${r()??""} z-50`)),h(t,v),K()}Qe(["click"]);var pg=w('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function gg(t){var e=pg(),r=c(e),a=d(r,2);ni(a,{class:"swap-on fill-current"});var n=d(a,2);ri(n,{class:"swap-off fill-current"}),h(t,e)}function mg(t,e){b(e,!0)}var _g=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),bg=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),yg=w('<div class="text-base-content/60"> </div>'),wg=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),xg=w('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Sg=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),$g=w('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),Pg=w('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function kg(t,e){F(e,!0);let r,a=L(null),n=L(!0),i=L(!1),o=L(!1);function l(P,D,A){localStorage.setItem("appwrite-user-email",P),localStorage.setItem("appwrite-user-name",D)}async function u(){const P=ys();r=Zc(P);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const $=await(await window.AppwriteClient.getAccount()).get();l($.email,$.name),await W.initialize(r,P)}catch(D){const A=D instanceof Error?D.message:"Erreur lors de l'initialisation";b(a,A,!0),console.error("[App] Erreur initialisation:",D)}finally{b(n,!1)}}wo(async()=>{await u()});async function v(){b(o,!1),b(n,!0),b(a,null),await u()}rc(()=>{W.destroy()});async function f(){if(!(!r||s(i))){b(i,!0);try{const P=ys();await W.forceReload(r,P)}catch(P){console.error("[App] Erreur lors du rechargement forcé:",P)}finally{b(i,!1)}}}const m=Y(()=>s(a)||W.error),g=Y(()=>s(n)||W.loading);var p=Pg(),_=q(p),y=c(_);hg(y,{});var x=d(y,2);{var k=P=>{Wp(P)},N=P=>{var D=$g(),A=q(D),$=c(A),V=c($),G=d(c(V),2),H=c(G);{var Q=R=>{var ee=_g();h(R,ee)};E(H,R=>{W.realtimeConnected&&R(Q)})}var fe=d(H,2);{var _e=R=>{var ee=bg();h(R,ee)};E(fe,R=>{W.syncing&&R(_e)})}var he=d(fe,2);{var B=R=>{var ee=yg(),de=c(ee);O(we=>I(de,`Maj: ${we??""}`),[()=>new Date(W.lastSync).toLocaleTimeString()]),h(R,ee)};E(he,R=>{W.lastSync&&R(B)})}var ie=d(he,2);gg(ie);var ae=d(ie,2);{var Z=R=>{var ee=wg();let de;ee.__click=f;var we=c(ee);Au(we,{class:"h-4 w-4"}),O(te=>{de=Me(ee,1,"btn btn-outline btn-sm",null,de,te),ee.disabled=s(i)||W.loading},[()=>({loading:s(i)||W.loading})]),h(R,ee)};E(ae,R=>{s(a)||R(Z)})}var ne=d(ae,2);{var $e=R=>{var ee=xg(),de=c(ee);de.__click=[mg,o];var we=c(de);wu(we,{class:"mr-2 h-4 w-4"}),h(R,ee)};E(ne,R=>{s(a)&&R($e)})}var xe=d(A,2),z=c(xe);{var C=R=>{Fp(R,{get message(){return s(m)}})},J=R=>{var ee=X(),de=q(ee);{var we=te=>{Qp(te,{get message(){return s(m)}})};E(de,te=>{s(m)&&te(we)},!0)}h(R,ee)};E(z,R=>{s(a)?R(C):R(J,!1)})}var le=d(z,2);{var M=R=>{Up(R,{})},re=R=>{var ee=X(),de=q(ee);{var we=te=>{var Se=Sg();h(te,Se)};E(de,te=>{!W.loading&&!s(a)&&te(we)},!0)}h(R,ee)};E(le,R=>{W.enrichedProducts.length>0?R(M):R(re,!1)})}h(P,D)};E(x,P=>{s(g)?P(k):P(N,!1)})}var S=d(_,2);{var T=P=>{ig(P,{onClose:()=>b(o,!1),onAuthSuccess:v})};E(S,P=>{s(o)&&P(T)})}h(t,p),K()}Qe(["click"]);const di=document.getElementById("app_products");if(!di)throw new Error("Élément target non trouvé: #app_products");Cl(kg,{target:di});
