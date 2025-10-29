(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const xs=!1;var An=Array.isArray,ho=Array.prototype.indexOf,Sa=Array.from,sa=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,po=Object.getOwnPropertyDescriptors,_o=Object.prototype,mo=Array.prototype,Es=Object.getPrototypeOf,Ua=Object.isExtensible;function Gr(e){return typeof e=="function"}const J=()=>{};function go(e){for(var t=0;t<e.length;t++)e[t]()}function ks(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ns(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const at=2,Pa=4,$a=8,_r=16,Vt=32,mr=64,xa=128,mt=256,En=512,Ye=1024,ct=2048,nr=4096,xt=8192,gr=16384,Ea=32768,br=65536,Ga=1<<17,bo=1<<18,qr=1<<19,yo=1<<20,ia=1<<21,Dn=1<<22,fr=1<<23,vr=Symbol("$state"),Ts=Symbol("legacy props"),wo=Symbol(""),tn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function As(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function So(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Po(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $o(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function xo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Eo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ko(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function No(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function To(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ao(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Do(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const In=1,Mn=2,Ds=4,Io=8,Mo=16,Co=1,Ro=2,Oo=4,qo=8,Bo=16,Lo=1,jo=2,Oe=Symbol(),zo="http://www.w3.org/1999/xhtml",Vo="http://www.w3.org/2000/svg",Wo="@attach";function Uo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Go(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ho=!1;function Is(e){return e===this.v}function Ms(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Qo(e,t){return e!==t}function Cs(e){return!Ms(e,this.v)}let Br=!1,Ko=!1;function Yo(){Br=!0}let De=null;function Dr(e){De=e}function W(e,t=!1,r){De={p:De,c:null,e:null,s:e,x:null,l:Br&&!t?{s:null,u:null,$:[]}:null}}function U(e){var t=De,r=t.e;if(r!==null){t.e=null;for(var n of r)Js(n)}return De=t.p,{}}function Lr(){return!Br||De!==null&&De.l===null}let dr=[];function Rs(){var e=dr;dr=[],go(e)}function hr(e){if(dr.length===0&&!rn){var t=dr;queueMicrotask(()=>{t===dr&&Rs()})}dr.push(e)}function Zo(){for(;dr.length>0;)Rs()}const Jo=new WeakMap;function Os(e){var t=re;if(t===null)return ie.f|=fr,e;if((t.f&Ea)===0){if((t.f&xa)===0)throw!t.parent&&e instanceof Error&&qs(e),e;t.b.error(e)}else Ir(e,t)}function Ir(e,t){for(;t!==null;){if((t.f&xa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&qs(e),e}function qs(e){const t=Jo.get(e);t&&(sa(e,"message",{value:t.message}),sa(e,"stack",{value:t.stack}))}const wn=new Set;let ge=null,Pn=null,oa=new Set,It=[],Cn=null,la=!1,rn=!1;class pt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#o=[];#a=[];#s=[];#n=[];#i=[];#d=[];skipped_effects=new Set;process(t){It=[],Pn=null;var r=pt.apply(this);for(const i of t)this.#f(i);if(this.#c===0){this.#v();var n=this.#a,a=this.#s;this.#a=[],this.#s=[],this.#n=[],Pn=this,ge=null,Ha(n),Ha(a),Pn=null,this.#u?.resolve()}else this.#l(this.#a),this.#l(this.#s),this.#l(this.#n);r();for(const i of this.#o)on(i);this.#o=[]}#f(t){t.f^=Ye;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Vt|mr))!==0,i=a&&(n&Ye)!==0,o=i||(n&xt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=Ye:(n&Pa)!==0?this.#s.push(r):(n&Ye)===0&&((n&Dn)!==0&&r.b?.is_pending()?this.#o.push(r):Ln(r)&&((r.f&_r)!==0&&this.#n.push(r),on(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&ct)!==0?this.#i:this.#d).push(r),Xe(r,Ye);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){ge=this}deactivate(){ge=null}flush(){if(It.length>0){if(this.activate(),Bs(),ge!==null&&ge!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of oa)if(oa.delete(t),t(),ge!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),wn.size>1){this.#e.clear();let t=!0;for(const r of wn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Ls(n)}if(It.length>0){ge=r;const n=pt.apply(r);for(const a of It)r.#f(a);It=[],n()}}ge=null}wn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#i)Xe(t,ct),pr(t);for(const t of this.#d)Xe(t,nr),pr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=ks()).promise}static ensure(){if(ge===null){const t=ge=new pt;wn.add(ge),rn||pt.enqueue(()=>{ge===t&&t.flush()})}return ge}static enqueue(t){hr(t)}static apply(t){return J}}function Xo(e){var t=rn;rn=!0;try{for(var r;;){if(Zo(),It.length===0&&(ge?.flush(),It.length===0))return Cn=null,r;Bs()}}finally{rn=t}}function Bs(){var e=Ar;la=!0;try{var t=0;for(Za(!0);It.length>0;){var r=pt.ensure();if(t++>1e3){var n,a;Fo()}r.process(It),Ft.clear()}}finally{la=!1,Za(e),Cn=null}}function Fo(){try{Eo()}catch(e){Ir(e,Cn)}}let ur=null;function Ha(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(gr|xt))===0&&Ln(n)&&(ur=[],on(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ei(n):n.fn=null),ur?.length>0)){Ft.clear();for(const a of ur)on(a);ur=[]}}ur=null}}function Ls(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&at)!==0?Ls(t):(r&(Dn|_r))!==0&&(Xe(t,ct),pr(t))}}function pr(e){for(var t=Cn=e;t.parent!==null;){t=t.parent;var r=t.f;if(la&&t===re&&(r&_r)!==0)return;if((r&(mr|Vt))!==0){if((r&Ye)===0)return;t.f^=Ye}}It.push(t)}function js(e){let t=0,r=tr(0),n;return()=>{pl()&&(s(r),Da(()=>(t===0&&(n=jr(()=>e(()=>Mt(r)))),t+=1,()=>{hr(()=>{t-=1,t===0&&(n?.(),n=void 0,Mt(r))})})))}}var el=br|qr|xa;function tl(e,t,r){new rl(e,t,r)}class rl{parent;#e=!1;#r;#c=null;#u;#o;#a;#s=null;#n=null;#i=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Mr(this.#h,this.#f)};#P=js(()=>(this.#h=tr(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#o=n,this.parent=re.b,this.#e=!!this.#u.pending,this.#a=Gt(()=>{re.b=this;{try{this.#s=Ue(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#m():this.#e=!1}},el)}#t(){try{this.#s=Ue(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#$(){const t=this.#u.pending;t&&(this.#n=Ue(()=>t(this.#r)),pt.enqueue(()=>{this.#s=this.#_(()=>(pt.ensure(),Ue(()=>this.#o(this.#r)))),this.#l>0?this.#m():(Lt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#_(t){var r=re,n=ie,a=De;Ct(this.#a),nt(this.#a),Dr(this.#a.ctx);try{return t()}catch(i){return Os(i),null}finally{Ct(r),nt(n),Dr(a)}}#m(){const t=this.#u.pending;this.#s!==null&&(this.#d=document.createDocumentFragment(),nl(this.#s,this.#d)),this.#n===null&&(this.#n=Ue(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Lt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),hr(()=>{pt.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#f+=t,oa.add(this.#p)}get_effect_pending(){return this.#P(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#s&&(Ge(this.#s),this.#s=null),this.#n&&(Ge(this.#n),this.#n=null),this.#i&&(Ge(this.#i),this.#i=null);var a=!1,i=!1;const o=()=>{if(a){Go();return}a=!0,i&&Do(),pt.ensure(),this.#f=0,this.#i!==null&&Lt(this.#i,()=>{this.#i=null}),this.#e=this.has_pending_snippet(),this.#s=this.#_(()=>(this.#v=!1,Ue(()=>this.#o(this.#r)))),this.#l>0?this.#m():this.#e=!1};var l=ie;try{nt(null),i=!0,r?.(t,o),i=!1}catch(c){Ir(c,this.#a&&this.#a.parent)}finally{nt(l)}n&&hr(()=>{this.#i=this.#_(()=>{this.#v=!0;try{return Ue(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Ir(c,this.#a.parent),null}finally{this.#v=!1}})})}}function nl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:hn(r);t.append(r),r=a}}function zs(e,t,r){const n=Lr()?Rn:ka;if(t.length===0){r(e.map(n));return}var a=ge,i=re,o=al();Promise.all(t.map(l=>sl(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(i.f&gr)===0&&Ir(c,i)}a?.deactivate(),Vs()}).catch(l=>{Ir(l,i)})}function al(){var e=re,t=ie,r=De,n=ge;return function(){Ct(e),nt(t),Dr(r),n?.activate()}}function Vs(){Ct(null),nt(null),Dr(null)}function Rn(e){var t=at|ct,r=ie!==null&&(ie.f&at)!==0?ie:null;return re===null||r!==null&&(r.f&mt)!==0?t|=mt:re.f|=qr,{ctx:De,deps:null,effects:null,equals:Is,f:t,fn:e,reactions:null,rv:0,v:Oe,wv:0,parent:r??re,ac:null}}function sl(e,t){let r=re;r===null&&So();var n=r.b,a=void 0,i=tr(Oe),o=!ie,l=new Map;return ml(()=>{var c=ks();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(g){c.reject(g)}var f=ge,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(tn),l.set(f,c)));const m=(g,p=void 0)=>{v||f.activate(),p?p!==tn&&(i.f|=fr,Mr(i,p)):((i.f&fr)!==0&&(i.f^=fr),Mr(i,g)),o&&(n.update_pending_count(-1),v||f.decrement()),Vs()};c.promise.then(m,g=>m(null,g||"unknown"))}),Ys(()=>{for(const c of l.values())c.reject(tn)}),new Promise(c=>{function f(v){function m(){v===a?c(i):f(a)}v.then(m,m)}f(a)})}function K(e){const t=Rn(e);return ni(t),t}function ka(e){const t=Rn(e);return t.equals=Cs,t}function Ws(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ge(t[r])}}function il(e){for(var t=e.parent;t!==null;){if((t.f&at)===0)return t;t=t.parent}return null}function Na(e){var t,r=re;Ct(il(e));try{Ws(e),t=oi(e)}finally{Ct(r)}return t}function Us(e){var t=Na(e);if(e.equals(t)||(e.v=t,e.wv=si()),!yr){var r=(Jt||(e.f&mt)!==0)&&e.deps!==null?nr:Ye;Xe(e,r)}}const Ft=new Map;function tr(e,t){var r={f:0,v:e,reactions:null,equals:Is,rv:0,wv:0};return r}function Z(e,t){const r=tr(e);return ni(r),r}function ol(e,t=!1,r=!0){const n=tr(e);return t||(n.equals=Cs),Br&&r&&De!==null&&De.l!==null&&(De.l.s??=[]).push(n),n}function N(e,t,r=!1){ie!==null&&(!$t||(ie.f&Ga)!==0)&&Lr()&&(ie.f&(at|_r|Dn|Ga))!==0&&!jt?.includes(e)&&Ao();let n=r?rt(t):t;return Mr(e,n)}function Mr(e,t){if(!e.equals(t)){var r=e.v;yr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=pt.ensure();n.capture(e,r),(e.f&at)!==0&&((e.f&ct)!==0&&Na(e),Xe(e,(e.f&mt)===0?Ye:nr)),e.wv=si(),Gs(e,ct),Lr()&&re!==null&&(re.f&Ye)!==0&&(re.f&(Vt|mr))===0&&(ht===null?yl([e]):ht.push(e))}return t}function Mt(e){N(e,e.v+1)}function Gs(e,t){var r=e.reactions;if(r!==null)for(var n=Lr(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!n&&o===re)){var c=(l&ct)===0;c&&Xe(o,t),(l&at)!==0?Gs(o,nr):c&&((l&_r)!==0&&ur!==null&&ur.push(o),pr(o))}}}function rt(e){if(typeof e!="object"||e===null||vr in e)return e;const t=Es(e);if(t!==_o&&t!==mo)return e;var r=new Map,n=An(e),a=Z(0),i=zt,o=l=>{if(zt===i)return l();var c=ie,f=zt;nt(null),Xa(i);var v=l();return nt(c),Xa(f),v};return n&&r.set("length",Z(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&No();var v=r.get(c);return v===void 0?v=o(()=>{var m=Z(f.value);return r.set(c,m),m}):N(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=o(()=>Z(Oe));r.set(c,v),Mt(a)}}else N(f,Oe),Mt(a);return!0},get(l,c,f){if(c===vr)return e;var v=r.get(c),m=c in l;if(v===void 0&&(!m||Xt(l,c)?.writable)&&(v=o(()=>{var p=rt(m?l[c]:Oe),_=Z(p);return _}),r.set(c,v)),v!==void 0){var g=s(v);return g===Oe?void 0:g}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var m=r.get(c),g=m?.v;if(m!==void 0&&g!==Oe)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,c){if(c===vr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Oe||Reflect.has(l,c);if(f!==void 0||re!==null&&(!v||Xt(l,c)?.writable)){f===void 0&&(f=o(()=>{var g=v?rt(l[c]):Oe,p=Z(g);return p}),r.set(c,f));var m=s(f);if(m===Oe)return!1}return v},set(l,c,f,v){var m=r.get(c),g=c in l;if(n&&c==="length")for(var p=f;p<m.v;p+=1){var _=r.get(p+"");_!==void 0?N(_,Oe):p in l&&(_=o(()=>Z(Oe)),r.set(p+"",_))}if(m===void 0)(!g||Xt(l,c)?.writable)&&(m=o(()=>Z(void 0)),N(m,rt(f)),r.set(c,m));else{g=m.v!==Oe;var P=o(()=>rt(f));N(m,P)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(v,f),!g){if(n&&typeof c=="string"){var E=r.get("length"),A=Number(c);Number.isInteger(A)&&A>=E.v&&N(E,A+1)}Mt(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(m=>{var g=r.get(m);return g===void 0||g.v!==Oe});for(var[f,v]of r)v.v!==Oe&&!(f in l)&&c.push(f);return c},setPrototypeOf(){To()}})}function Qa(e){try{if(e!==null&&typeof e=="object"&&vr in e)return e[vr]}catch{}return e}function ll(e,t){return Object.is(Qa(e),Qa(t))}var Ka,Hs,Qs,Ks;function cl(){if(Ka===void 0){Ka=window,Hs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Qs=Xt(t,"firstChild").get,Ks=Xt(t,"nextSibling").get,Ua(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ua(r)&&(r.__t=void 0)}}function Wt(e=""){return document.createTextNode(e)}function Cr(e){return Qs.call(e)}function hn(e){return Ks.call(e)}function u(e,t){return Cr(e)}function q(e,t=!1){{var r=Cr(e);return r instanceof Comment&&r.data===""?hn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=hn(n);return n}function ul(e){e.textContent=""}function On(){return!1}function dl(e,t){if(t){const r=document.body;e.autofocus=!0,hr(()=>{document.activeElement===r&&e.focus()})}}let Ya=!1;function fl(){Ya||(Ya=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function qn(e){var t=ie,r=re;nt(null),Ct(null);try{return e()}finally{nt(t),Ct(r)}}function Ta(e,t,r,n=r){e.addEventListener(t,()=>qn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),fl()}function vl(e){re===null&&ie===null&&xo(),ie!==null&&(ie.f&mt)!==0&&re===null&&$o(),yr&&Po()}function hl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var a=re;a!==null&&(a.f&xt)!==0&&(e|=xt);var i={ctx:De,deps:null,nodes_start:null,nodes_end:null,f:e|ct,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{on(i),i.f|=Ea}catch(c){throw Ge(i),c}else t!==null&&pr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&qr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&hl(o,a),ie!==null&&(ie.f&at)!==0&&(e&mr)===0)){var l=ie;(l.effects??=[]).push(o)}}return i}function pl(){return ie!==null&&!$t}function Ys(e){const t=Ut($a,null,!1);return Xe(t,Ye),t.teardown=e,t}function Zs(e){vl();var t=re.f,r=!ie&&(t&Vt)!==0&&(t&Ea)===0;if(r){var n=De;(n.e??=[]).push(e)}else return Js(e)}function Js(e){return Ut(Pa|yo,e,!1)}function _l(e){pt.ensure();const t=Ut(mr|qr,e,!0);return(r={})=>new Promise(n=>{r.outro?Lt(t,()=>{Ge(t),n(void 0)}):(Ge(t),n(void 0))})}function Aa(e){return Ut(Pa,e,!1)}function ml(e){return Ut(Dn|qr,e,!0)}function Da(e,t=0){return Ut($a|t,e,!0)}function z(e,t=[],r=[]){zs(t,r,n=>{Ut($a,()=>e(...n.map(s)),!0)})}function Gt(e,t=0){var r=Ut(_r|t,e,!0);return r}function Ue(e,t=!0){return Ut(Vt|qr,e,!0,t)}function Xs(e){var t=e.teardown;if(t!==null){const r=yr,n=ie;Ja(!0),nt(null);try{t.call(null)}finally{Ja(r),nt(n)}}}function Fs(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&qn(()=>{a.abort(tn)});var n=r.next;(r.f&mr)!==0?r.parent=null:Ge(r,t),r=n}}function gl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Vt)===0&&Ge(t),t=r}}function Ge(e,t=!0){var r=!1;(t||(e.f&bo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(bl(e.nodes_start,e.nodes_end),r=!0),Fs(e,t&&!r),kn(e,0),Xe(e,gr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Xs(e);var a=e.parent;a!==null&&a.first!==null&&ei(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function bl(e,t){for(;e!==null;){var r=e===t?null:hn(e);e.remove(),e=r}}function ei(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Lt(e,t){var r=[];Ia(e,r,!0),ti(r,()=>{Ge(e),t&&t()})}function ti(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Ia(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&br)!==0||(n.f&Vt)!==0;Ia(n,t,i?r:!1),n=a}}}function Bn(e){ri(e,!0)}function ri(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&Ye)===0&&(Xe(e,ct),pr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&br)!==0||(r.f&Vt)!==0;ri(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Ar=!1;function Za(e){Ar=e}let yr=!1;function Ja(e){yr=e}let ie=null,$t=!1;function nt(e){ie=e}let re=null;function Ct(e){re=e}let jt=null;function ni(e){ie!==null&&(jt===null?jt=[e]:jt.push(e))}let Je=null,ot=0,ht=null;function yl(e){ht=e}let ai=1,sn=0,zt=sn;function Xa(e){zt=e}let Jt=!1;function si(){return++ai}function Ln(e){var t=e.f;if((t&ct)!==0)return!0;if((t&nr)!==0){var r=e.deps,n=(t&mt)!==0;if(r!==null){var a,i,o=(t&En)!==0,l=n&&re!==null&&!Jt,c=r.length;if((o||l)&&(re===null||(re.f&gr)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)i=r[a],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&mt)===0&&(f.f^=mt)}for(a=0;a<c;a++)if(i=r[a],Ln(i)&&Us(i),i.wv>e.wv)return!0}(!n||re!==null&&!Jt)&&Xe(e,Ye)}return!1}function ii(e,t,r=!0){var n=e.reactions;if(n!==null&&!jt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&at)!==0?ii(i,t,!1):t===i&&(r?Xe(i,ct):(i.f&Ye)!==0&&Xe(i,nr),pr(i))}}function oi(e){var t=Je,r=ot,n=ht,a=ie,i=Jt,o=jt,l=De,c=$t,f=zt,v=e.f;Je=null,ot=0,ht=null,Jt=(v&mt)!==0&&($t||!Ar||ie===null),ie=(v&(Vt|mr))===0?e:null,jt=null,Dr(e.ctx),$t=!1,zt=++sn,e.ac!==null&&(qn(()=>{e.ac.abort(tn)}),e.ac=null);try{e.f|=ia;var m=e.fn,g=m(),p=e.deps;if(Je!==null){var _;if(kn(e,ot),p!==null&&ot>0)for(p.length=ot+Je.length,_=0;_<Je.length;_++)p[ot+_]=Je[_];else e.deps=p=Je;if(!Jt||(v&at)!==0&&e.reactions!==null)for(_=ot;_<p.length;_++)(p[_].reactions??=[]).push(e)}else p!==null&&ot<p.length&&(kn(e,ot),p.length=ot);if(Lr()&&ht!==null&&!$t&&p!==null&&(e.f&(at|nr|ct))===0)for(_=0;_<ht.length;_++)ii(ht[_],e);return a!==null&&a!==e&&(sn++,ht!==null&&(n===null?n=ht:n.push(...ht))),(e.f&fr)!==0&&(e.f^=fr),g}catch(P){return Os(P)}finally{e.f^=ia,Je=t,ot=r,ht=n,ie=a,Jt=i,jt=o,Dr(l),$t=c,zt=f}}function wl(e,t){let r=t.reactions;if(r!==null){var n=ho.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&at)!==0&&(Je===null||!Je.includes(t))&&(Xe(t,nr),(t.f&(mt|En))===0&&(t.f^=En),Ws(t),kn(t,0))}function kn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)wl(e,r[n])}function on(e){var t=e.f;if((t&gr)===0){Xe(e,Ye);var r=re,n=Ar;re=e,Ar=!0;try{(t&_r)!==0?gl(e):Fs(e),Xs(e);var a=oi(e);e.teardown=typeof a=="function"?a:null,e.wv=ai;var i;xs&&Ko&&(e.f&ct)!==0&&e.deps}finally{Ar=n,re=r}}}async function Sl(){await Promise.resolve(),Xo()}function s(e){var t=e.f,r=(t&at)!==0;if(ie!==null&&!$t){var n=re!==null&&(re.f&gr)!==0;if(!n&&!jt?.includes(e)){var a=ie.deps;if((ie.f&ia)!==0)e.rv<sn&&(e.rv=sn,Je===null&&a!==null&&a[ot]===e?ot++:Je===null?Je=[e]:(!Jt||!Je.includes(e))&&Je.push(e));else{(ie.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[ie]:i.includes(ie)||i.push(ie)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&mt)===0&&(o.f^=mt)}if(yr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var c=o.v;return((o.f&Ye)===0&&o.reactions!==null||li(o))&&(c=Na(o)),Ft.set(o,c),c}}else r&&(o=e,Ln(o)&&Us(o));if((e.f&fr)!==0)throw e.v;return e.v}function li(e){if(e.v===Oe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&at)!==0&&li(t))return!0;return!1}function jr(e){var t=$t;try{return $t=!0,e()}finally{$t=t}}const Pl=-7169;function Xe(e,t){e.f=e.f&Pl|t}function $l(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const xl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function El(e){return xl.includes(e)}const kl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Nl(e){return e=e.toLowerCase(),kl[e]??e}const Tl=["touchstart","touchmove"];function Al(e){return Tl.includes(e)}const ci=new Set,ca=new Set;function ui(e,t,r,n={}){function a(i){if(n.capture||Zr.call(t,i),!i.cancelBubble)return qn(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?hr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Fa(e,t,r,n={}){var a=ui(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Et(e){for(var t=0;t<e.length;t++)ci.add(e[t]);for(var r of ca)r(e)}let es=null;function Zr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;es=e;var o=0,l=es===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(i=a[o]||e.target,i!==t){sa(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=ie,m=re;nt(null),Ct(null);try{for(var g,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var P=i["__"+n];if(P!=null&&(!i.disabled||e.target===i))if(An(P)){var[w,...E]=P;w.apply(i,[e,...E])}else P.call(i,e)}catch(A){g?p.push(A):g=A}if(e.cancelBubble||_===t||_===null)break;i=_}if(g){for(let A of p)queueMicrotask(()=>{throw A});throw g}}finally{e.__root=t,delete e.currentTarget,nt(v),Ct(m)}}}function di(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Rr(e,t){var r=re;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&Lo)!==0,n=(t&jo)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=di(i?e:"<!>"+e),r||(a=Cr(a)));var o=n||Hs?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Cr(o),c=o.lastChild;Rr(l,c)}else Rr(o,o);return o}}function Dl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=di(a),l=Cr(o);i=Cr(l)}var c=i.cloneNode(!0);return Rr(c,c),c}}function Il(e,t){return Dl(e,t,"svg")}function lt(e=""){{var t=Wt(e+"");return Rr(t,t),t}}function V(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Wt();return e.append(t,r),Rr(t,r),e}function h(e,t){e!==null&&e.before(t)}function O(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Ml(e,t){return Cl(e,t)}const Nr=new Map;function Cl(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){cl();var l=new Set,c=m=>{for(var g=0;g<m.length;g++){var p=m[g];if(!l.has(p)){l.add(p);var _=Al(p);t.addEventListener(p,Zr,{passive:_});var P=Nr.get(p);P===void 0?(document.addEventListener(p,Zr,{passive:_}),Nr.set(p,1)):Nr.set(p,P+1)}}};c(Sa(ci)),ca.add(c);var f=void 0,v=_l(()=>{var m=r??t.appendChild(Wt());return tl(m,{pending:()=>{}},g=>{if(i){W({});var p=De;p.c=i}a&&(n.$$events=a),f=e(g,n)||{},i&&U()}),()=>{for(var g of l){t.removeEventListener(g,Zr);var p=Nr.get(g);--p===0?(document.removeEventListener(g,Zr),Nr.delete(g)):Nr.set(g,p)}ca.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return Rl.set(f,v),f}let Rl=new WeakMap;function I(e,t,r=!1){var n=e,a=null,i=null,o=Oe,l=r?br:0,c=!1;const f=(p,_=!0)=>{c=!0,g(_,p)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?a:i,_=o?i:a;p&&Bn(p),_&&Lt(_,()=>{o?i=null:a=null})}const g=(p,_)=>{if(o!==(o=p)){var P=On(),w=n;if(P&&(v=document.createDocumentFragment(),v.append(w=Wt())),o?a??=_&&Ue(()=>_(w)):i??=_&&Ue(()=>_(w)),P){var E=ge,A=o?a:i,T=o?i:a;A&&E.skipped_effects.delete(A),T&&E.skipped_effects.add(T),E.add_callback(m)}else m()}};Gt(()=>{c=!1,t(f),c||g(null,null)},l)}function Ol(e,t,r){var n=e,a=Oe,i,o,l=null,c=Lr()?Qo:Ms;function f(){i&&Lt(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}Gt(()=>{if(c(a,a=t())){var v=n,m=On();m&&(l=document.createDocumentFragment(),l.append(v=Wt())),o=Ue(()=>r(v)),m?ge.add_callback(f):f()}})}function jn(e,t){return t}function ql(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)Ia(t[o].e,a,!0);var l=i>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;ul(c),c.append(r),n.clear(),Dt(e,t[0].prev,t[i-1].next)}ti(a,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),Dt(e,v.prev,v.next)),Ge(v.e,!l)}})}function Ve(e,t,r,n,a,i=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Ds)!==0;if(c){var f=e;o=f.appendChild(Wt())}var v=null,m=!1,g=new Map,p=ka(()=>{var E=r();return An(E)?E:E==null?[]:Sa(E)}),_,P;function w(){Bl(P,_,l,g,o,a,t,n,r),i!==null&&(_.length===0?v?Bn(v):v=Ue(()=>i(o)):v!==null&&Lt(v,()=>{v=null}))}Gt(()=>{P??=re,_=s(p);var E=_.length;if(!(m&&E===0)){m=E===0;var A,T,$,k;if(On()){var S=new Set,C=ge;for(T=0;T<E;T+=1){$=_[T],k=n($,T);var b=l.items.get(k)??g.get(k);b?(t&(In|Mn))!==0&&fi(b,$,T,t):(A=vi(null,l,null,null,$,k,T,a,t,r,!0),g.set(k,A)),S.add(k)}for(const[R,L]of l.items)S.has(R)||C.skipped_effects.add(L.e);C.add_callback(w)}else w();s(p)}})}function Bl(e,t,r,n,a,i,o,l,c){var f=(o&Io)!==0,v=(o&(In|Mn))!==0,m=t.length,g=r.items,p=r.first,_=p,P,w=null,E,A=[],T=[],$,k,S,C;if(f)for(C=0;C<m;C+=1)$=t[C],k=l($,C),S=g.get(k),S!==void 0&&(S.a?.measure(),(E??=new Set).add(S));for(C=0;C<m;C+=1){if($=t[C],k=l($,C),S=g.get(k),S===void 0){var b=n.get(k);if(b!==void 0){n.delete(k),g.set(k,b);var R=w?w.next:_;Dt(r,w,b),Dt(r,b,R),Jn(b,R,a),w=b}else{var L=_?_.e.nodes_start:a;w=vi(L,r,w,w===null?r.first:w.next,$,k,C,i,o,c)}g.set(k,w),A=[],T=[],_=w.next;continue}if(v&&fi(S,$,C,o),(S.e.f&xt)!==0&&(Bn(S.e),f&&(S.a?.unfix(),(E??=new Set).delete(S))),S!==_){if(P!==void 0&&P.has(S)){if(A.length<T.length){var be=T[0],de;w=be.prev;var ke=A[0],qe=A[A.length-1];for(de=0;de<A.length;de+=1)Jn(A[de],be,a);for(de=0;de<T.length;de+=1)P.delete(T[de]);Dt(r,ke.prev,qe.next),Dt(r,w,ke),Dt(r,qe,be),_=be,w=qe,C-=1,A=[],T=[]}else P.delete(S),Jn(S,_,a),Dt(r,S.prev,S.next),Dt(r,S,w===null?r.first:w.next),Dt(r,w,S),w=S;continue}for(A=[],T=[];_!==null&&_.k!==k;)(_.e.f&xt)===0&&(P??=new Set).add(_),T.push(_),_=_.next;if(_===null)continue;S=_}A.push(S),w=S,_=S.next}if(_!==null||P!==void 0){for(var Ie=P===void 0?[]:Sa(P);_!==null;)(_.e.f&xt)===0&&Ie.push(_),_=_.next;var Y=Ie.length;if(Y>0){var ye=(o&Ds)!==0&&m===0?a:null;if(f){for(C=0;C<Y;C+=1)Ie[C].a?.measure();for(C=0;C<Y;C+=1)Ie[C].a?.fix()}ql(r,Ie,ye)}}f&&hr(()=>{if(E!==void 0)for(S of E)S.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var D of n.values())Ge(D.e);n.clear()}function fi(e,t,r,n){(n&In)!==0&&Mr(e.v,t),(n&Mn)!==0?Mr(e.i,r):e.i=r}function vi(e,t,r,n,a,i,o,l,c,f,v){var m=(c&In)!==0,g=(c&Mo)===0,p=m?g?ol(a,!1,!1):tr(a):a,_=(c&Mn)===0?o:tr(o),P={i:_,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Wt())}return P.e=Ue(()=>l(e,p,_,f),Ho),P.e.prev=r&&r.e,P.e.next=n&&n.e,r===null?v||(t.first=P):(r.next=P,r.e.next=P.e),n!==null&&(n.prev=P,n.e.prev=P.e),P}finally{}}function Jn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=hn(i);a.before(i),i=o}}function Dt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ee(e,t,...r){var n=e,a=J,i;Gt(()=>{a!==(a=t())&&(i&&(Ge(i),i=null),i=Ue(()=>a(n,...r)))},br)}function Jr(e,t,r){var n=e,a,i,o=null,l=null;function c(){i&&(Lt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}Gt(()=>{if(a!==(a=t())){var f=On();if(a){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Wt()),i&&ge.skipped_effects.add(i)),l=Ue(()=>r(v,a))}f?ge.add_callback(c):c()}},br)}function Ll(e,t,r,n,a,i){var o,l,c=null,f=e,v;Gt(()=>{const m=t()||null;var g=Vo;m!==o&&(v&&(m===null?Lt(v,()=>{v=null,l=null}):m===l?Bn(v):Ge(v)),m&&m!==l&&(v=Ue(()=>{if(c=document.createElementNS(g,m),Rr(c,c),n){var p=c.appendChild(Wt());n(c,p)}re.nodes_end=c,f.before(c)})),o=m,o&&(l=o))},br)}function jl(e,t){var r=void 0,n;Gt(()=>{r!==(r=t())&&(n&&(Ge(n),n=null),r&&(n=Ue(()=>{Aa(()=>r(e))})))})}function hi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=hi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function zl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=hi(e))&&(n&&(n+=" "),n+=t);return n}function pi(e){return typeof e=="object"?zl(e):e??""}const ts=[...` 	
\r\f \v\uFEFF`];function Vl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+i;(o===0||ts.includes(n[o-1]))&&(l===n.length||ts.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function rs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Xn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Wl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Xn)),a&&c.push(...Object.keys(a).map(Xn));var f=0,v=-1;const P=e.length;for(var m=0;m<P;m++){var g=e[m];if(l?g==="/"&&e[m-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&e[m+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&v===-1)v=m;else if(g===";"||m===P-1){if(v!==-1){var p=Xn(e.substring(f,v).trim());if(!c.includes(p)){g!==";"&&m++;var _=e.substring(f,m).trim();r+=" "+_+";"}}f=m+1,v=-1}}}}return n&&(r+=rs(n)),a&&(r+=rs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function $e(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var l=Vl(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var c in i){var f=!!i[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return i}function Fn(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Ul(e,t,r,n){var a=e.__style;if(a!==t){var i=Wl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Fn(e,r?.[0],n[0]),Fn(e,r?.[1],n[1],"important")):Fn(e,r,n));return n}function Nn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!An(t))return Uo();for(var n of e.options)n.selected=t.includes(nn(n));return}for(n of e.options){var a=nn(n);if(ll(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function _i(e){var t=new MutationObserver(()=>{Nn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ys(()=>{t.disconnect()})}function Xr(e,t,r=t){var n=!0;Ta(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),nn);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&nn(l)}r(o)}),Aa(()=>{var a=t();if(Nn(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=nn(i),r(a))}e.__value=a,n=!1}),_i(e)}function nn(e){return"__value"in e?e.__value:e.value}const Hr=Symbol("class"),Qr=Symbol("style"),mi=Symbol("is custom element"),gi=Symbol("is html");function Ma(e,t){var r=zn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function er(e,t){var r=zn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Gl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Tn(e,t,r,n){var a=zn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[wo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&bi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Hl(e,t,r,n,a=!1,i=!1){var o=zn(e),l=o[mi],c=!o[gi],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=pi(r.class):r[Hr]&&(r.class=null),r[Qr]&&(r.style??=null);var g=bi(e);for(const $ in r){let k=r[$];if(v&&$==="value"&&k==null){e.value=e.__value="",f[$]=k;continue}if($==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";$e(e,p,k,n,t?.[Hr],r[Hr]),f[$]=k,f[Hr]=r[Hr];continue}if($==="style"){Ul(e,k,t?.[Qr],r[Qr]),f[$]=k,f[Qr]=r[Qr];continue}var _=f[$];if(!(k===_&&!(k===void 0&&e.hasAttribute($)))){f[$]=k;var P=$[0]+$[1];if(P!=="$$")if(P==="on"){const S={},C="$$"+$;let b=$.slice(2);var w=El(b);if($l(b)&&(b=b.slice(0,-7),S.capture=!0),!w&&_){if(k!=null)continue;e.removeEventListener(b,f[C],S),f[C]=null}if(k!=null)if(w)e[`__${b}`]=k,Et([b]);else{let R=function(L){f[$].call(this,L)};var T=R;f[C]=ui(b,e,R,S)}else w&&(e[`__${b}`]=void 0)}else if($==="style")Tn(e,$,k);else if($==="autofocus")dl(e,!!k);else if(!l&&($==="__value"||$==="value"&&k!=null))e.value=e.__value=k;else if($==="selected"&&v)Gl(e,k);else{var E=$;c||(E=Nl(E));var A=E==="defaultValue"||E==="defaultChecked";if(k==null&&!l&&!A)if(o[$]=null,E==="value"||E==="checked"){let S=e;const C=t===void 0;if(E==="value"){let b=S.defaultValue;S.removeAttribute(E),S.defaultValue=b,S.value=S.__value=C?b:null}else{let b=S.defaultChecked;S.removeAttribute(E),S.defaultChecked=b,S.checked=C?b:!1}}else e.removeAttribute($);else A||g.includes(E)&&(l||typeof k!="string")?(e[E]=k,E in o&&(o[E]=Oe)):typeof k!="function"&&Tn(e,E,k)}}}return f}function ns(e,t,r=[],n=[],a,i=!1,o=!1){zs(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(Gt(()=>{var p=t(...l.map(s)),_=Hl(e,c,p,a,i,o);m&&v&&"value"in p&&Nn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||Ge(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var P=p[w];w.description===Wo&&(!c||P!==c[w])&&(f[w]&&Ge(f[w]),f[w]=Ue(()=>jl(e,()=>P))),_[w]=P}c=_}),v){var g=e;Aa(()=>{Nn(g,c.value,!0),_i(g)})}m=!0})}function zn(e){return e.__attributes??={[mi]:e.nodeName.includes("-"),[gi]:e.namespaceURI===zo}}var as=new Map;function bi(e){var t=e.getAttribute("is")||e.nodeName,r=as.get(t);if(r)return r;as.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=po(a);for(var o in n)n[o].set&&r.push(o);a=Es(a)}return r}function ze(e,t,r=t){var n=new WeakSet;Ta(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=ea(e)?ta(i):i,r(i),ge!==null&&n.add(ge),await Sl(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),jr(t)==null&&e.value&&(r(ea(e)?ta(e.value):e.value),ge!==null&&n.add(ge)),Da(()=>{var a=t();if(e===document.activeElement){var i=Pn??ge;if(n.has(i))return}ea(e)&&a===ta(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ql(e,t,r=t){Ta(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),jr(t)==null&&r(e.checked),Da(()=>{var n=t();e.checked=!!n})}function ea(e){var t=e.type;return t==="number"||t==="range"}function ta(e){return e===""?null:+e}let Sn=!1;function Kl(e){var t=Sn;try{return Sn=!1,[e(),Sn]}finally{Sn=t}}const Yl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function te(e,t,r){return new Proxy({props:e,exclude:t},Yl)}const Zl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Gr(a)&&(a=a());const i=Xt(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Xt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===vr||t===Ts)return!1;for(let r of e.props)if(Gr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Gr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ne(...e){return new Proxy({props:e},Zl)}function Bt(e,t,r,n){var a=!Br||(r&Ro)!==0,i=(r&qo)!==0,o=(r&Bo)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=o?jr(n):n),l),v;if(i){var m=vr in e||Ts in e;v=Xt(e,t)?.set??(m&&t in e?T=>e[t]=T:void 0)}var g,p=!1;i?[g,p]=Kl(()=>e[t]):g=e[t],g===void 0&&n!==void 0&&(g=f(),v&&(a&&ko(),v(g)));var _;if(a?_=()=>{var T=e[t];return T===void 0?f():(c=!0,T)}:_=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},a&&(r&Oo)===0)return _;if(v){var P=e.$$legacy;return(function(T,$){return arguments.length>0?((!a||!$||P||p)&&v($?_():T),T):_()})}var w=!1,E=((r&Co)!==0?Rn:ka)(()=>(w=!1,_()));i&&s(E);var A=re;return(function(T,$){if(arguments.length>0){const k=$?s(E):a&&i?rt(T):T;return N(E,k),w=!0,l!==void 0&&(l=k),T}return yr&&w||(A.f&gr)!==0?E.v:s(E)})}function yi(e){De===null&&As(),Br&&De.l!==null?Xl(De).m.push(e):Zs(()=>{const t=jr(e);if(typeof t=="function")return t})}function Jl(e){De===null&&As(),yi(()=>()=>jr(e))}function Xl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Fl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Fl);const ec="modulepreload",tc=function(e){return"/"+e},ss={},ra=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=tc(v),v in ss)return;ss[v]=!0;const m=v.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${g}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":ec,m||(p.as="script"),p.crossOrigin="",p.href=v,c&&p.setAttribute("nonce",c),document.head.appendChild(p),m)return new Promise((_,P)=>{p.addEventListener("load",_),p.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};class rc extends Map{#e=new Map;#r=Z(0);#c=Z(0);#u=zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#o(t){return zt===this.#u?Z(t):tr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#a(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#o(0),n.set(t,a),N(this.#c,super.size),Mt(l);else if(i!==r){Mt(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Mt(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),N(this.#c,super.size),N(n,-1),Mt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;N(this.#c,0);for(var r of t.values())N(r,-1);Mt(this.#r),t.clear()}}#a(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#a(),super.values()}entries(){return this.#a(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class nc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class wi{constructor(t){this.generateIdentifier=t,this.kv=new nc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ac extends wi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function sc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ic(e,t){const r=sc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const i=n[a];if(t(i))return i}}function Or(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function $n(e,t){return e.indexOf(t)!==-1}function is(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class oc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ic(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const lc=e=>Object.prototype.toString.call(e).slice(8,-1),Si=e=>typeof e>"u",cc=e=>e===null,ln=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ua=e=>ln(e)&&Object.keys(e).length===0,rr=e=>Array.isArray(e),uc=e=>typeof e=="string",dc=e=>typeof e=="number"&&!isNaN(e),fc=e=>typeof e=="boolean",vc=e=>e instanceof RegExp,cn=e=>e instanceof Map,un=e=>e instanceof Set,Pi=e=>lc(e)==="Symbol",hc=e=>e instanceof Date&&!isNaN(e.valueOf()),pc=e=>e instanceof Error,os=e=>typeof e=="number"&&isNaN(e),_c=e=>fc(e)||cc(e)||Si(e)||dc(e)||uc(e)||Pi(e),mc=e=>typeof e=="bigint",gc=e=>e===1/0||e===-1/0,bc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),yc=e=>e instanceof URL,$i=e=>e.replace(/\./g,"\\."),na=e=>e.map(String).map($i).join("."),an=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let i=e.charAt(a);if(i==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function At(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const xi=[At(Si,"undefined",()=>null,()=>{}),At(mc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),At(hc,"Date",e=>e.toISOString(),e=>new Date(e)),At(pc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),At(vc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),At(un,"set",e=>[...e.values()],e=>new Set(e)),At(cn,"map",e=>[...e.entries()],e=>new Map(e)),At(e=>os(e)||gc(e),"number",e=>os(e)?"NaN":e>0?"Infinity":"-Infinity",Number),At(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),At(yc,"URL",e=>e.toString(),e=>new URL(e))];function Vn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ei=Vn((e,t)=>Pi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),wc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),ki=Vn(bc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=wc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Ni(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ti=Vn(Ni,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ai=Vn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Sc=[Ti,Ei,Ai,ki],ls=(e,t)=>{const r=is(Sc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=is(xi,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Di={};xi.forEach(e=>{Di[e.annotation]=e});const Pc=(e,t,r)=>{if(rr(t))switch(t[0]){case"symbol":return Ei.untransform(e,t,r);case"class":return Ti.untransform(e,t,r);case"custom":return Ai.untransform(e,t,r);case"typed-array":return ki.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Di[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Tr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ii(e){if($n(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if($n(e,"prototype"))throw new Error("prototype is not allowed as a property");if($n(e,"constructor"))throw new Error("constructor is not allowed as a property")}const $c=(e,t)=>{Ii(t);for(let r=0;r<t.length;r++){const n=t[r];if(un(e))e=Tr(e,+n);else if(cn(e)){const a=+n,i=+t[++r]==0?"key":"value",o=Tr(e,a);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},da=(e,t,r)=>{if(Ii(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(rr(n)){const l=+o;n=n[l]}else if(ln(n))n=n[o];else if(un(n)){const l=+o;n=Tr(n,l)}else if(cn(n)){if(i===t.length-2)break;const c=+o,f=+t[++i]==0?"key":"value",v=Tr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(rr(n)?n[+a]=r(n[+a]):ln(n)&&(n[a]=r(n[a])),un(n)){const i=Tr(n,+a),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(cn(n)){const i=+t[t.length-2],o=Tr(n,i);switch(+a==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function fa(e,t,r=[]){if(!e)return;if(!rr(e)){Or(e,(i,o)=>fa(i,t,[...r,...an(o)]));return}const[n,a]=e;a&&Or(a,(i,o)=>{fa(i,t,[...r,...an(o)])}),t(n,r)}function xc(e,t,r){return fa(t,(n,a)=>{e=da(e,a,i=>Pc(i,n,r))}),e}function Ec(e,t){function r(n,a){const i=$c(e,an(a));n.map(an).forEach(o=>{e=da(e,o,()=>i)})}if(rr(t)){const[n,a]=t;n.forEach(i=>{e=da(e,an(i),()=>e)}),a&&Or(a,r)}else Or(t,r);return e}const kc=(e,t)=>ln(e)||rr(e)||cn(e)||un(e)||Ni(e,t);function Nc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Tc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[i,...o]=a;i.length===0?n=o.map(na):r[na(i)]=o.map(na)}),n?ua(r)?[n]:[n,r]:ua(r)?void 0:r}const Mi=(e,t,r,n,a=[],i=[],o=new Map)=>{const l=_c(e);if(!l){Nc(e,a,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!kc(e,r)){const p=ls(e,r),_=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,_),_}if($n(i,e))return{transformedValue:null};const c=ls(e,r),f=c?.value??e,v=rr(f)?[]:{},m={};Or(f,(p,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const P=Mi(p,t,r,n,[...a,_],[...i,e],o);v[_]=P.transformedValue,rr(P.annotations)?m[_]=P.annotations:ln(P.annotations)&&Or(P.annotations,(w,E)=>{m[$i(_)+"."+E]=w})});const g=ua(m)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,m]:m};return l||o.set(e,g),g};function Ci(e){return Object.prototype.toString.call(e).slice(8,-1)}function cs(e){return Ci(e)==="Array"}function Ac(e){if(Ci(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Dc(e,t,r,n,a){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),a&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function va(e,t={}){if(cs(e))return e.map(a=>va(a,t));if(!Ac(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,i)=>{if(cs(t.props)&&!t.props.includes(i))return a;const o=e[i],l=va(o,t);return Dc(a,i,l,e,t.nonenumerable),a},{})}class oe{constructor({dedupe:t=!1}={}){this.classRegistry=new ac,this.symbolRegistry=new wi(r=>r.description??""),this.customTransformerRegistry=new oc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Mi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const i=Tc(r,this.dedupe);return i&&(a.meta={...a.meta,referentialEqualities:i}),a}deserialize(t){const{json:r,meta:n}=t;let a=va(r);return n?.values&&(a=xc(a,n.values,this)),n?.referentialEqualities&&(a=Ec(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}oe.defaultInstance=new oe;oe.serialize=oe.defaultInstance.serialize.bind(oe.defaultInstance);oe.deserialize=oe.defaultInstance.deserialize.bind(oe.defaultInstance);oe.stringify=oe.defaultInstance.stringify.bind(oe.defaultInstance);oe.parse=oe.defaultInstance.parse.bind(oe.defaultInstance);oe.registerClass=oe.defaultInstance.registerClass.bind(oe.defaultInstance);oe.registerSymbol=oe.defaultInstance.registerSymbol.bind(oe.defaultInstance);oe.registerCustom=oe.defaultInstance.registerCustom.bind(oe.defaultInstance);oe.allowErrorProps=oe.defaultInstance.allowErrorProps.bind(oe.defaultInstance);oe.serialize;oe.deserialize;oe.stringify;oe.parse;oe.registerClass;oe.registerCustom;oe.registerSymbol;oe.allowErrorProps;function Ic(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Mc(e,t){return`${e}_${t}`}const Cc=typeof window<"u"?window:void 0;function Rc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Oc{#e;#r;constructor(t={}){const{window:r=Cc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=js(a=>{const i=Fa(r,"focusin",a),o=Fa(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?Rc(this.#e):null}}new Oc;function qc(e){return typeof e=="function"}function Bc(e,t){if(qc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Lc(e,t){let r=Z(null);const n=K(()=>Bc(t,250));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const c=new Promise((f,v)=>{o=f,l=v});N(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);N(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),N(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Fr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function jc(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function zc(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Vc(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>ha(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],i=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),i.push(ha(v.toString(),c)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:a,display:o}}function Kr(e){return e?.length?e.map(t=>ha(t.q.toString(),t.u)).join(" et "):"-"}function ha(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Wc(e){return Fr(e)}function Uc(e,t,r){if(!e||Object.keys(e).length===0)return[];const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r,i=Object.entries(e).filter(([o])=>{const l=new Date(o);return l>=n&&l<=a}).flatMap(([o,l])=>l.totalConsolidated);return Ri(i)}function Ri(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Gc(e,t){return e[t]?.recipes||[]}function Hc(e){return e?Object.values(e).flatMap(t=>t.recipes||[]):[]}function Qc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=a}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function Kc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Yc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function us(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Ri(t)}function Zc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class y{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}y.equal=(e,t)=>new y("equal",e,t).toString();y.notEqual=(e,t)=>new y("notEqual",e,t).toString();y.lessThan=(e,t)=>new y("lessThan",e,t).toString();y.lessThanEqual=(e,t)=>new y("lessThanEqual",e,t).toString();y.greaterThan=(e,t)=>new y("greaterThan",e,t).toString();y.greaterThanEqual=(e,t)=>new y("greaterThanEqual",e,t).toString();y.isNull=e=>new y("isNull",e).toString();y.isNotNull=e=>new y("isNotNull",e).toString();y.between=(e,t,r)=>new y("between",e,[t,r]).toString();y.startsWith=(e,t)=>new y("startsWith",e,t).toString();y.endsWith=(e,t)=>new y("endsWith",e,t).toString();y.select=e=>new y("select",void 0,e).toString();y.search=(e,t)=>new y("search",e,t).toString();y.orderDesc=e=>new y("orderDesc",e).toString();y.orderAsc=e=>new y("orderAsc",e).toString();y.orderRandom=()=>new y("orderRandom").toString();y.cursorAfter=e=>new y("cursorAfter",void 0,e).toString();y.cursorBefore=e=>new y("cursorBefore",void 0,e).toString();y.limit=e=>new y("limit",void 0,e).toString();y.offset=e=>new y("offset",void 0,e).toString();y.contains=(e,t)=>new y("contains",e,t).toString();y.notContains=(e,t)=>new y("notContains",e,t).toString();y.notSearch=(e,t)=>new y("notSearch",e,t).toString();y.notBetween=(e,t,r)=>new y("notBetween",e,[t,r]).toString();y.notStartsWith=(e,t)=>new y("notStartsWith",e,t).toString();y.notEndsWith=(e,t)=>new y("notEndsWith",e,t).toString();y.createdBefore=e=>new y("createdBefore",void 0,e).toString();y.createdAfter=e=>new y("createdAfter",void 0,e).toString();y.createdBetween=(e,t)=>new y("createdBetween",void 0,[e,t]).toString();y.updatedBefore=e=>new y("updatedBefore",void 0,e).toString();y.updatedAfter=e=>new y("updatedAfter",void 0,e).toString();y.updatedBetween=(e,t)=>new y("updatedBetween",void 0,[e,t]).toString();y.or=e=>new y("or",void 0,e.map(t=>JSON.parse(t))).toString();y.and=e=>new y("and",void 0,e.map(t=>JSON.parse(t))).toString();y.distanceEqual=(e,t,r,n=!0)=>new y("distanceEqual",e,[[t,r,n]]).toString();y.distanceNotEqual=(e,t,r,n=!0)=>new y("distanceNotEqual",e,[[t,r,n]]).toString();y.distanceGreaterThan=(e,t,r,n=!0)=>new y("distanceGreaterThan",e,[[t,r,n]]).toString();y.distanceLessThan=(e,t,r,n=!0)=>new y("distanceLessThan",e,[[t,r,n]]).toString();y.intersects=(e,t)=>new y("intersects",e,[t]).toString();y.notIntersects=(e,t)=>new y("notIntersects",e,[t]).toString();y.crosses=(e,t)=>new y("crosses",e,[t]).toString();y.notCrosses=(e,t)=>new y("notCrosses",e,[t]).toString();y.overlaps=(e,t)=>new y("overlaps",e,[t]).toString();y.notOverlaps=(e,t)=>new y("notOverlaps",e,[t]).toString();y.touches=(e,t)=>new y("touches",e,[t]).toString();y.notTouches=(e,t)=>new y("notTouches",e,[t]).toString();var Oi,qi;class dn{static custom(t){return t}static unique(t=7){const r=Zc(dn,Oi,"m",qi).call(dn);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Oi=dn,qi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ds;(function(e){e.Totp="totp"})(ds||(ds={}));var fs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(fs||(fs={}));var vs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(vs||(vs={}));var hs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(hs||(hs={}));var ps;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ps||(ps={}));var _s;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(_s||(_s={}));var ms;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(ms||(ms={}));var gs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(gs||(gs={}));var bs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(bs||(bs={}));function Bi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,byDate:e.byDate,...t}}async function Rt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Jc(e,t,r=100){try{const{databases:n,config:a}=await Rt(),i=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[y.greaterThan("$updatedAt",t),y.equal("mainId",e),y.limit(r),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Li(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:i}=await Rt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.equal("mainId",e),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),y.limit(n)])).documents;const o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.greaterThan("$updatedAt",r),y.equal("mainId",e),y.limit(n),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Wn(e,t){try{const{databases:r,config:n}=await Rt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function en(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Bi(n,t),{databases:i,config:o}=await Rt(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function ji(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Wn(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function pa(e,t){return Wn(e,{who:t})}async function _a(e,t){return Wn(e,{stockReel:t})}async function zi(e){try{const{databases:t,config:r}=await Rt(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,dn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Vi(e,t){try{const{databases:r,config:n}=await Rt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Wi(e){try{const{databases:t,config:r}=await Rt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ui(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Rt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[y.equal("$id",e),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Gi(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const c=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),m=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(c){const p=l;v&&t.onProductCreate?t.onProductCreate(p):m&&t.onProductUpdate?t.onProductUpdate(p):g&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):g&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Hi(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Rt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Qi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Rt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}const aa=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Qi,createPurchase:zi,deletePurchase:Wi,enrichedProductToAppwriteProduct:Bi,loadMainEventData:Hi,loadPurchasesListByIds:Ui,loadUpdatedPurchases:Jc,subscribeToRealtime:Gi,syncProductsWithPurchases:Li,updateProduct:Wn,updateProductStock:_a,updateProductStore:ji,updateProductWho:pa,updatePurchase:Vi,upsertProduct:en},Symbol.toStringTag,{value:"Module"}));async function Xc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Fc(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const ys=1e3,eu=500;class tu{#e=new rc;#r=Z(null);#c=Z(!1);#u=Z(!1);#o=Z(null);#a=Z(!1);#s=Z(!1);#n=Z(rt([]));#i=Z(null);#d=Z(null);get startDate(){return s(this.#d)}set startDate(t){N(this.#d,t,!0)}#f=Z(null);get endDate(){return s(this.#f)}set endDate(t){N(this.#f,t,!0)}#l=null;#v=null;#h=null;#p=null;#P=Z(!1);#t=Z(rt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#o)}get allDates(){return s(this.#n)}get syncing(){return s(this.#a)}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#s)}get hugoContentChanged(){return s(this.#P)}#$=K(()=>{console.time("[ProductsStore] enrichedProducts conversion time");const t=Array.from(this.#e.values());return console.timeEnd("[ProductsStore] enrichedProducts conversion time"),console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#$)}set enrichedProducts(t){N(this.#$,t)}#_=new Map;#m={start:"",end:""};#y=K(()=>{const t={start:this.startDate||"",end:this.endDate||""};if(!(t.start!==this.#m.start||t.end!==this.#m.end)&&this.#_.size>0)return this.#_;this.#m=t,this.#_.clear();const n=new Map,a=this.enrichedProducts;for(const i of a){if(i.totalNeededIsManualOverride&&i.totalNeededConsolidated){const l=Fr(i.totalNeededConsolidated);l&&l.length>0&&(n.set(i.$id,l),this.#_.set(i.$id,l));continue}if(!i.byDateParsed||!this.startDate||!this.endDate)continue;const o=Uc(i.byDateParsed,this.startDate,this.endDate);o&&o.length>0&&(n.set(i.$id,o),this.#_.set(i.$id,o))}return n});get totalNeededByDateRange(){return s(this.#y)}set totalNeededByDateRange(t){N(this.#y,t)}#k=K(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Kr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#k)}set formattedTotalNeededByDateRange(t){N(this.#k,t)}#N=K(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#N)}set stats(t){N(this.#N,t)}#T=K(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#T)}set uniqueStores(t){N(this.#T,t)}#A=K(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#A)}set uniqueWho(t){N(this.#A,t)}#D=K(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#D)}set uniqueProductTypes(t){N(this.#D,t)}#I=K(()=>this.enrichedProducts.filter(t=>this.#U(t)));get filteredProducts(){return s(this.#I)}set filteredProducts(t){N(this.#I,t)}#M=K(()=>{const t=this.filteredProducts;return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return s(this.#M)}set filteredGroupedProducts(t){N(this.#M,t)}#C=K(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return s(this.#C)}set groupedFormattedProducts(t){N(this.#C,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),N(this.#r,t,!0),this.#l=Mc("products-enriched",t),N(this.#o,null);try{if(await this.#q(),this.#e.size===0){const n=await Xc(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(i=>{const o=Fc(i,t,n.hugoContentHash),l=this.#x(o);this.#e.set(l.$id,l)}),N(this.#n,n.allDates,!0),this.initializeDateRange(),await Hi(t)||await Qi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.#B(),N(this.#c,!0);const r=this.#W();this.#h=Gi(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw N(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#q(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=oe.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),N(this.#i,n,!0),N(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#B(){if(s(this.#r)){N(this.#a,!0);try{const t=await Li(s(this.#r),{lastSync:s(this.#i),limit:ys});if(s(this.#i)){const{loadUpdatedPurchases:r}=await ra(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>aa);return{loadUpdatedPurchases:a}},void 0);(await r(s(this.#r),s(this.#i),ys)).forEach(a=>{if(a.products?.length){const i=a.products.map(o=>typeof o=="string"?o:o.$id);this.#E(i,a)}})}t.forEach(r=>{const n=this.#x(r);n.isSynced=!0,this.#e.set(r.$id,n)}),this.#b(),this.#g()}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{N(this.#a,!1)}}}#w(){if(this.#l)try{const t={lastSync:s(this.#i),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,oe.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#g(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},eu)}#b(){N(this.#i,new Date().toISOString(),!0)}#x(t){const r=zc(jc(t.purchases??[])),n=Wc(t.byDate);let a,i,o,l;n?(a=us(n),i=Yc(n),o=Hc(n),t.totalNeededConsolidated&&t.totalNeededIsManualOverride&&(l=Fr(t.totalNeededConsolidated)||void 0)):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),a=[],i=[],o=[]);const{numeric:c,display:f}=Vc(a,r),v=Fr(t.stockReel)??[],m=Kr(r),g=v.length>0?`${v[v.length-1].quantity} ${v[v.length-1].unit}`:m;return{...t,storeInfo:t.store?Fr(t.store):null,totalNeededArray:a,totalPurchasesArray:r,recipesArray:o,stockArray:v,stockOrTotalPurchases:g,missingQuantityArray:c,neededConsolidatedByDateArray:i,displayTotalNeeded:Kr(a),displayTotalPurchases:m,displayMissingQuantity:f,byDateParsed:n||void 0,totalNeededRawArray:l,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason}}#R(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#x(t);this.#e.set(t.$id,r)}#L(t){this.#e.delete(t)}async#j(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#V(r,t)}async#z(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#E(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ui([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#E(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#O(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#V(t,r){const n=this.#O(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];l.some(c=>c.$id===n.$id)||a.push({...o,purchases:[...l,n]})}}),this.#R(a)}#E(t,r){const n=this.#O(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n,a.push({...o,purchases:f})}else a.push({...o,purchases:[...l,r]})}}),this.#R(a)}#W(){return{onProductCreate:t=>{this.#S(t),this.#b(),this.#g()},onProductUpdate:t=>{this.#S(t),this.#b(),this.#g()},onProductDelete:t=>{this.#L(t),this.#b(),this.#g()},onPurchaseCreate:t=>{this.#j(t),this.#b(),this.#g()},onPurchaseUpdate:t=>{this.#z(t),this.#b(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#S(n)}),this.#b(),this.#g()},onConnect:()=>{N(this.#s,!0)},onDisconnect:()=>{N(this.#s,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#U(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Lc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){N(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],i=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#t).sortDirection==="asc"?-1:1:a>i?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??[]}async applyManualOverride(t,r,n=null){const a=this.#e.get(t);if(!a)throw new Error(`Product ${t} not found`);const{updateProduct:i}=await ra(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>aa);return{updateProduct:o}},void 0);await i(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...a,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:Kr(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await ra(async()=>{const{updateProduct:i}=await Promise.resolve().then(()=>aa);return{updateProduct:i}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const a=r.byDateParsed?us(r.byDateParsed):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:a,displayTotalNeeded:Kr(a)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed?Gc(n.byDateParsed,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed&&n.byDateParsed[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDateParsed?Kc(r.byDateParsed):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDateParsed?Object.keys(r.byDateParsed).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!this.startDate||!this.endDate?0:Qc(r.byDateParsed,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!this.startDate||!this.endDate?[]:Object.keys(r.byDateParsed).filter(a=>{const i=new Date(a),o=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return o&&l&&i>=o&&i<=l}).flatMap(a=>r.byDateParsed[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),N(this.#n,[],!0),N(this.#i,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new tu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ru={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var nu=Il("<svg><!><!></svg>");function ae(e,t){W(t,!0);const r=Bt(t,"color",3,"currentColor"),n=Bt(t,"size",3,24),a=Bt(t,"strokeWidth",3,2),i=Bt(t,"absoluteStrokeWidth",3,!1),o=Bt(t,"iconNode",19,()=>[]),l=te(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=nu();ns(c,m=>({...ru,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var f=u(c);Ve(f,17,o,jn,(m,g)=>{var p=K(()=>Ns(s(g),2));let _=()=>s(p)[0],P=()=>s(p)[1];var w=V(),E=q(w);Ll(E,_,!0,(A,T)=>{ns(A,()=>({...P()}))}),h(m,w)});var v=d(f);ee(v,()=>t.children??J),h(e,c),U()}function ma(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ae(e,ne({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function au(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ae(e,ne({name:"bean"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function su(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ae(e,ne({name:"beef"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function iu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ae(e,ne({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function ou(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ae(e,ne({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function lu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ae(e,ne({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function cu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ae(e,ne({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function uu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ae(e,ne({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function du(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ae(e,ne({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function fu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ae(e,ne({name:"clock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function vu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ae(e,ne({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Ca(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ae(e,ne({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function hu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ae(e,ne({name:"egg"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function ga(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ae(e,ne({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function ws(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ae(e,ne({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function pu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ae(e,ne({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function _u(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ae(e,ne({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function mu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ae(e,ne({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function gu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ae(e,ne({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function bu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ae(e,ne({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function yu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ae(e,ne({name:"moon"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function pn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ae(e,ne({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function wu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ae(e,ne({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Su(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ae(e,ne({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Pu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ae(e,ne({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function $u(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ae(e,ne({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function ba(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ae(e,ne({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function fn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ae(e,ne({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function ya(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ae(e,ne({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Ki(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ae(e,ne({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function vn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ae(e,ne({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function xu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ae(e,ne({name:"sun"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Eu(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ae(e,ne({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Ra(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ae(e,ne({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function Yi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ae(e,ne({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function ku(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ae(e,ne({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function _t(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ae(e,ne({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=V(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),U()}function xn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:au};case"animaux":return{displayName:"Viandes et Poissons",icon:su};case"legumes":return{displayName:"Fruits et Légumes",icon:ou};case"sucres":return{displayName:"Sucrées",icon:iu};case"lof":return{displayName:"L.O.F",icon:hu};case"autres":return{displayName:"Autres",icon:lu};case"epices":return{displayName:"Assaisonnements",icon:pu};case"frais":return{displayName:"Produits Frais",icon:Su};default:return{displayName:e,icon:pn}}}function Ss(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Oa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function qa(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Nu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Tu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],i=n[t.sortColumn];return a<i?t.sortDirection==="asc"?-1:1:a>i?t.sortDirection==="asc"?1:-1:0}):e}function wa(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function Ps(e){return e?qa(e):"-"}function Au(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",i=n.unit||"unit",o=`${a}_${i}`;if(!r[o]){const l=wa(a);r[o]={status:a,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Du(a)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function Du(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let $s=()=>localStorage.getItem("appwrite-user-name")||"";function Iu(e){let t=Z(!1),r=Z(null);const n=K(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),M.getEnrichedProductById(e))),a=K(()=>s(n)?.recipesArray??[]),i=K(()=>s(n)?.who??[]),o=K(()=>s(n)?.stockArray??[]),l=K(()=>s(n)?.purchases??[]),c=rt({purchase:{quantity:null,unit:"",store:"",who:$s()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=Z(!1);Zs(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=$s()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??null,c.store.comment=s(n).storeInfo?.storeComment??null,N(f,!0))});let v=Z(null);const m=K(()=>s(v)?s(l).find(b=>b.$id===s(v))??null:null);async function g(b,R){N(t,!0),N(r,null);try{const L=await b();return R&&p("success",R),L}catch(L){const be=L instanceof Error?L.message:"Une erreur est survenue";return N(r,be,!0),p("error",be),console.error("[ProductModalState]",L),null}finally{N(t,!1)}}function p(b,R){const L=new CustomEvent("toast",{detail:{type:b,message:R}});window.dispatchEvent(L)}async function _(){s(n)&&await g(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:b,unit:R}=Ss(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await en(s(n).$id,{},L=>M.getEnrichedProductById(L))),await zi({products:[s(n).$id],mainId:M.currentMainId,unit:R,quantity:b,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function P(b){N(v,b.$id,!0)}function w(){N(v,null)}async function E(b){b.$id&&await g(async()=>{const{quantity:R,unit:L}=Ss(b.quantity,b.unit);await Vi(b.$id,{unit:L,quantity:R,store:b.store||null,who:b.who||null,notes:b.notes||"",price:b.price||null,status:b.status||null,orderDate:b.orderDate||null,deliveryDate:b.deliveryDate||null}),N(v,null)},"Achat modifié avec succès")}async function A(b){const R=s(l).find(L=>L.$id===b);R&&confirm(`Supprimer cet achat (${R.quantity} ${R.unit}) ?`)&&await g(async()=>{await Wi(b)},"Achat supprimé avec succès")}async function T(){s(n)&&await g(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const b={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime},R=[...s(o),b];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await _a(s(n).$id,JSON.stringify(R))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await en(s(n).$id,{stockReel:JSON.stringify(R)},L=>M.getEnrichedProductById(L))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function $(b){s(n)&&confirm("Supprimer ce relevé de stock ?")&&await g(async()=>{const R=s(o).filter((L,be)=>be!==b);await _a(s(n).$id,JSON.stringify(R))},"Relevé de stock supprimé")}async function k(b){!s(n)||!b.trim()||await g(async()=>{if(s(i).includes(b))throw new Error("Ce volontaire est déjà ajouté");const R=[...s(i),b.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await pa(s(n).$id,R)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await en(s(n).$id,{who:R},L=>M.getEnrichedProductById(L)))},"Volontaire ajouté")}async function S(b){s(n)&&confirm(`Retirer ${b} ?`)&&await g(async()=>{await pa(s(n).$id,s(i).filter(R=>R!==b))},"Volontaire retiré")}async function C(b){s(n)&&await g(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await ji(s(n).$id,b)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await en(s(n).$id,{store:JSON.stringify(b)},R=>M.getEnrichedProductById(R)))},"Magasin mis à jour")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(a)},get whoList(){return s(i)},get stockEntries(){return s(o)},get purchasesList(){return s(l)},get editingPurchaseId(){return s(v)},get editingPurchaseData(){return s(m)},forms:c,addPurchase:_,startEditPurchase:P,cancelEditPurchase:w,updateEditedPurchase:E,removePurchase:A,addStock:T,removeStock:$,addVolunteer:k,removeVolunteer:S,updateStore:C,formatQuantity:Oa,formatDate:qa,formatDisplayQuantity:Nu}}function Mu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Cu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Ru(e,t){t().cancelEditPurchase()}var Ou=x('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),qu=x('<span class="loading loading-spinner loading-sm"></span>'),Bu=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Lu=x('<span class="loading loading-spinner loading-sm"></span>'),ju=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),zu=(e,t,r)=>t(s(r)),Vu=(e,t,r)=>t(s(r).$id),Wu=x('<span class="loading loading-spinner loading-sm"></span>'),Uu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Gu=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Hu=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Qu(e,t){W(t,!0);let r=Bt(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(H){return H.quantity!==null&&H.quantity!==0&&H.unit?.trim()!==""}function i(H){r().removePurchase(H)}function o(H){r().startEditPurchase(H)}var l=Hu(),c=u(l),f=u(c);fn(f,{class:"h-5 w-5"});var v=d(c,2),m=u(v),g=d(u(m),2),p=u(g),_=u(p);pn(_,{class:"h-4 w-4 opacity-50"});var P=d(_,2),w=d(p,2),E=u(w);E.value=E.__value="";var A=d(E);A.value=A.__value="kg";var T=d(A);T.value=T.__value="gr.";var $=d(T);$.value=$.__value="l.";var k=d($);k.value=k.__value="ml";var S=d(k);S.value=S.__value="unité";var C=d(S);C.value=C.__value="bottes";var b=d(w,2),R=u(b);vn(R,{class:"h-4 w-4 opacity-50"});var L=d(R,2),be=d(b,2),de=u(be);Ra(de,{class:"h-4 w-4 opacity-50"});var ke=d(de,2),qe=d(be,2),Ie=d(u(qe),2),Y=d(g,2),ye=u(Y),D=u(ye);bu(D,{class:"h-4 w-4 opacity-50"});var X=d(D,2),ve=d(Y,2),we=u(ve),Ne=u(we),Pe=u(Ne),We=u(Pe);We.value=We.__value="delivered";var ue=d(We);ue.value=ue.__value="requested";var he=d(ue);he.value=he.__value="ordered";var Ce=d(Ne,2),xe=d(we,2);{var Ae=H=>{var He=Ou(),ut=d(u(He),2);ze(ut,()=>r().forms.purchase.deliveryDate,ar=>r().forms.purchase.deliveryDate=ar),h(H,He)};I(xe,H=>{r().forms.purchase.status==="ordered"&&H(Ae)})}var Re=d(ve,2),_e=u(Re);_e.__click=[Mu,n,r];var B=u(_e);{var se=H=>{var He=qu();h(H,He)},Be=H=>{var He=lt("Ajouter l'achat");h(H,He)};I(B,H=>{r().loading?H(se):H(Be,!1)})}var Le=d(v,2);{var gt=H=>{var He=Bu(),ut=u(He);fn(ut,{class:"mx-auto mb-2 h-12 w-12"}),h(H,He)},bt=H=>{var He=Gu(),ut=u(He),ar=d(u(ut));Ve(ar,21,()=>r().purchasesList,st=>st.$id,(st,F,_n)=>{var Ht=V(),zr=q(Ht);{var yt=kt=>{var dt=ju(),Ot=u(dt),ft=u(Ot),Nt=u(ft),qt=d(Nt,2),Tt=u(qt);Tt.value=Tt.__value="kg";var wt=d(Tt);wt.value=wt.__value="gr.";var Qt=d(wt);Qt.value=Qt.__value="l.";var Kt=d(Qt);Kt.value=Kt.__value="ml";var sr=d(Kt);sr.value=sr.__value="unité";var ir=d(sr);ir.value=ir.__value="bottes";var Sr=d(Ot),Pr=u(Sr),or=d(Sr),$r=u(or),xr=d(or),G=u(xr),ce=u(G);ce.value=ce.__value="requested";var Fe=d(ce);Fe.value=Fe.__value="ordered";var Qe=d(Fe);Qe.value=Qe.__value="delivered";var Me=d(Qe);Me.value=Me.__value="cancelled";var Ke=d(xr),et=u(Ke),me=d(Ke),Ee=u(me),pe=d(me),j=u(pe),Se=d(pe),Te=u(Se),it=d(Se),tt=u(it),vt=u(tt);vt.__click=[Cu,r,a];var Yt=u(vt);{var Ze=fe=>{var Pt=Lu();h(fe,Pt)},St=fe=>{Pu(fe,{class:"h-3 w-3"})};I(Yt,fe=>{r().loading?fe(Ze):fe(St,!1)})}var Er=d(vt,2);Er.__click=[Ru,r];var Vr=u(Er);_t(Vr,{class:"h-3 w-3"}),z(fe=>vt.disabled=fe,[()=>r().loading||!a(s(F))]),ze(Nt,()=>s(F).quantity,fe=>s(F).quantity=fe),Xr(qt,()=>s(F).unit,fe=>s(F).unit=fe),ze(Pr,()=>s(F).store,fe=>s(F).store=fe),ze($r,()=>s(F).who,fe=>s(F).who=fe),Xr(G,()=>s(F).status,fe=>s(F).status=fe),ze(et,()=>s(F).orderDate,fe=>s(F).orderDate=fe),ze(Ee,()=>s(F).deliveryDate,fe=>s(F).deliveryDate=fe),ze(j,()=>s(F).price,fe=>s(F).price=fe),ze(Te,()=>s(F).notes,fe=>s(F).notes=fe),h(kt,dt)},wr=kt=>{var dt=Uu(),Ot=u(dt),ft=u(Ot),Nt=d(Ot),qt=u(Nt),Tt=d(Nt),wt=u(Tt),Qt=d(Tt),Kt=u(Qt),sr=u(Kt),ir=d(Qt),Sr=u(ir),Pr=d(ir),or=u(Pr),$r=d(Pr),xr=u($r),G=d($r),ce=u(G),Fe=d(G),Qe=u(Fe),Me=u(Qe);Me.__click=[zu,o,F];var Ke=u(Me);Ki(Ke,{class:"h-4 w-4"});var et=d(Me,2);et.__click=[Vu,i,F];var me=u(et);{var Ee=j=>{var Se=Wu();h(j,Se)},pe=j=>{_t(j,{class:"h-4 w-4"})};I(me,j=>{r().loading?j(Ee):j(pe,!1)})}z((j,Se,Te,it,tt)=>{O(ft,j),O(qt,s(F).store||"-"),O(wt,s(F).who||"-"),$e(Kt,1,`badge badge-sm ${Se??""}`),O(sr,Te),O(Sr,it),O(or,tt),O(xr,s(F).price?`${s(F).price}€`:"-"),O(ce,s(F).notes||"-"),et.disabled=r().loading},[()=>Oa(s(F).quantity,s(F).unit),()=>wa(s(F).status).class,()=>wa(s(F).status).text,()=>Ps(s(F).orderDate),()=>Ps(s(F).deliveryDate)]),h(kt,dt)};I(zr,kt=>{r().editingPurchaseId===s(F).$id?kt(yt):kt(wr,!1)})}h(st,Ht)}),h(H,He)};I(Le,H=>{r().purchasesList.length===0?H(gt):H(bt,!1)})}z(H=>{$e(Ce,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),_e.disabled=H},[()=>r().loading||!n()]),ze(P,()=>r().forms.purchase.quantity,H=>r().forms.purchase.quantity=H),Xr(w,()=>r().forms.purchase.unit,H=>r().forms.purchase.unit=H),ze(L,()=>r().forms.purchase.store,H=>r().forms.purchase.store=H),ze(ke,()=>r().forms.purchase.who,H=>r().forms.purchase.who=H),ze(Ie,()=>r().forms.purchase.price,H=>r().forms.purchase.price=H),ze(X,()=>r().forms.purchase.notes,H=>r().forms.purchase.notes=H),Xr(Pe,()=>r().forms.purchase.status,H=>r().forms.purchase.status=H),h(e,l),U()}Et(["click"]);async function Ku(e,t){await t()?.addStock()}var Yu=x('<span class="loading loading-spinner loading-sm"></span>'),Zu=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Ju=x('<span class="loading loading-spinner loading-xs"></span>'),Xu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Fu=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ed=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function td(e,t){W(t,!0);let r=Bt(t,"modalState",7),n=K(()=>r()&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);async function a(Y){await r()?.removeStock(Y)}var i=ed(),o=u(i),l=u(o);ma(l,{class:"h-5 w-5"});var c=d(o,2),f=u(c),v=d(u(f),2),m=u(v),g=u(m);pn(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2),_=d(m,2),P=u(_);P.value=P.__value="";var w=d(P);w.value=w.__value="kg";var E=d(w);E.value=E.__value="gr.";var A=d(E);A.value=A.__value="l.";var T=d(A);T.value=T.__value="ml";var $=d(T);$.value=$.__value="unité";var k=d($);k.value=k.__value="bottes";var S=d(v,2),C=u(S),b=d(S,2),R=u(b);R.__click=[Ku,r];var L=u(R);{var be=Y=>{var ye=Yu();h(Y,ye)},de=Y=>{var ye=lt("Ajouter au stock");h(Y,ye)};I(L,Y=>{r().loading?Y(be):Y(de,!1)})}var ke=d(c,2);{var qe=Y=>{var ye=Zu(),D=u(ye);ma(D,{class:"mx-auto mb-2 h-12 w-12"}),h(Y,ye)},Ie=Y=>{var ye=Fu(),D=u(ye),X=d(u(D));Ve(X,23,()=>r().stockEntries,ve=>ve.dateTime,(ve,we,Ne)=>{var Pe=Xu(),We=u(Pe),ue=u(We),he=d(We),Ce=u(he),xe=d(he),Ae=u(xe),Re=d(xe),_e=u(Re);_e.__click=()=>a(s(Ne));var B=u(_e);{var se=Le=>{var gt=Ju();h(Le,gt)},Be=Le=>{var gt=lt("Supprimer");h(Le,gt)};I(B,Le=>{r().loading?Le(se):Le(Be,!1)})}z(Le=>{O(ue,`${s(we).quantity??""}
                ${s(we).unit??""}`),O(Ce,Le),O(Ae,s(we).notes||"-"),_e.disabled=r().loading},[()=>qa(s(we).dateTime)]),h(ve,Pe)}),h(Y,ye)};I(ke,Y=>{r().stockEntries.length===0?Y(qe):Y(Ie,!1)})}z(()=>{Ma(C,`          ${r().forms.stock.notes??""}
        `),R.disabled=r().loading||!s(n)}),ze(p,()=>r().forms.stock.quantity,Y=>r().forms.stock.quantity=Y),Xr(_,()=>r().forms.stock.unit,Y=>r().forms.stock.unit=Y),ze(C,()=>r().forms.stock.notes,Y=>r().forms.stock.notes=Y),h(e,i),U()}Et(["click"]);var rd=(e,t)=>{e.key==="Enter"&&t()},nd=x("<option> </option>"),ad=(e,t,r)=>t(r),sd=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),id=x('<span class="loading loading-spinner loading-sm"></span>'),od=x('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function ld(e,t){W(t,!0);let r=Z("");const n=K(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),N(r,""))}async function i($){await t.modalState?.removeVolunteer($)}var o=od(),l=u(o),c=u(l),f=d(u(c),2),v=u(f);Ra(v,{class:"h-4 w-4 opacity-50"});var m=d(v,2);m.__keydown=[rd,a];var g=d(m,2);Ve(g,21,()=>M.uniqueWho,jn,($,k)=>{var S=nd(),C=u(S),b={};z(()=>{O(C,s(k)),b!==(b=s(k))&&(S.value=(S.__value=s(k))??"")}),h($,S)});var p=d(f,2),_=d(u(p),2);Ve(_,20,()=>t.modalState.whoList,$=>$,($,k)=>{var S=sd(),C=u(S),b=d(C);b.__click=[ad,i,k];var R=u(b);_t(R,{class:"h-3 w-3"}),z(()=>{O(C,`${k??""} `),b.disabled=t.modalState.loading}),h($,S)});var P=d(p,2),w=u(P);w.__click=a;var E=u(w);{var A=$=>{var k=id();h($,k)},T=$=>{var k=lt("Ajouter");h($,k)};I(E,$=>{t.modalState.loading?$(A):$(T,!1)})}z(()=>w.disabled=t.modalState.loading||!s(n)),ze(m,()=>s(r),$=>N(r,$)),h(e,o),U()}Et(["keydown","click"]);var cd=(e,t)=>{e.key==="Enter"&&t()},ud=x("<option> </option>"),dd=x('<span class="loading loading-spinner loading-sm"></span>'),fd=(e,t,r)=>{N(t,""),N(r,"")},vd=x(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function hd(e,t){W(t,!0);const r=K(()=>t.modalState.forms.store),n=K(()=>s(r).name||""),a=K(()=>s(r).comment||"");let i=Z(rt(s(n))),o=Z(rt(s(a)));const l=K(()=>s(i).trim()!==(s(r).name||"")||s(o).trim()!==(s(r).comment||""));async function c(){if(!s(l))return;const b={storeName:s(i).trim(),storeComment:s(o).trim()};await t.modalState.updateStore(b)}var f=vd(),v=u(f),m=u(v),g=d(u(m),4),p=u(g),_=u(p);vn(_,{class:"h-4 w-4 opacity-50"});var P=d(_,2);P.__keydown=[cd,c];var w=d(P,2);Ve(w,21,()=>M.uniqueStores,jn,(b,R)=>{var L=ud(),be=u(L),de={};z(()=>{O(be,s(R)),de!==(de=s(R))&&(L.value=(L.__value=s(R))??"")}),h(b,L)});var E=d(p,2),A=d(g,2),T=u(A);T.__click=c;var $=u(T);{var k=b=>{var R=dd();h(b,R)},S=b=>{var R=lt("Mettre à jour");h(b,R)};I($,b=>{t.modalState.loading?b(k):b(S,!1)})}var C=d(T,2);C.__click=[fd,i,o],z(()=>{Ma(E,`          ${s(o)??""}
        `),T.disabled=t.modalState.loading||!s(l),C.disabled=t.modalState.loading}),ze(P,()=>s(i),b=>N(i,b)),ze(E,()=>s(o),b=>N(o,b)),h(e,f),U()}Et(["keydown","click"]);var pd=x('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),_d=x('<tr><td class="font-medium"> </td><td> </td><td>-</td><td>-</td><td> </td></tr>'),md=x('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),gd=x('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function bd(e,t){W(t,!0);const r=K(()=>t.modalState.recipes);var n=gd(),a=u(n),i=u(a);Ca(i,{class:"h-5 w-5"});var o=d(a,2);{var l=f=>{var v=pd(),m=u(v);pn(m,{class:"mx-auto mb-2 h-12 w-12"}),h(f,v)},c=f=>{var v=md(),m=u(v),g=d(u(m));Ve(g,21,()=>s(r),p=>p.r,(p,_)=>{var P=_d(),w=u(P),E=u(w),A=d(w),T=u(A),$=d(A,3),k=u($);z(()=>{O(E,s(_).r),O(T,`${(s(_).q||s(_).qEq)??""} ${(s(_).u||s(_).uEq)??""}`),O(k,s(_).a||"-")}),h(p,P)}),h(f,v)};I(o,f=>{s(r).length===0?f(l):f(c,!1)})}h(e,n),U()}var yd=x('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),wd=x('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Sd=(e,t)=>t("recettes"),Pd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$d=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),xd=(e,t)=>t("achats"),Ed=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),kd=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Nd=(e,t)=>t("stock"),Td=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ad=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Dd=(e,t)=>t("volontaires"),Id=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Md=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Cd=(e,t)=>t("magasins"),Rd=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Od=x('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),qd=x('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Bd(e,t){W(t,!0);let r=Bt(t,"initialTab",3,"recettes"),n=K(()=>Iu(t.productId)),a=Z(rt(r()));function i(w){N(a,w,!0)}var o=qd(),l=u(o),c=u(l),f=u(c);{var v=w=>{var E=yd(),A=q(E),T=u(A),$=d(A,2),k=u($),S=u(k),C=d(k,2),b=d(u(C));z(()=>{O(T,s(n).product?.productName),O(S,s(n).product?.productType),O(b,` ${s(n).product?.displayTotalNeeded??""}`)}),h(w,E)},m=w=>{var E=wd();h(w,E)};I(f,w=>{s(n)&&s(n).product?w(v):w(m,!1)})}var g=d(f,2);g.__click=function(...w){t.onClose?.apply(this,w)};var p=u(g);_t(p,{class:"h-4 w-4"});var _=d(c,2);{var P=w=>{var E=Od(),A=q(E),T=u(A);T.__click=[Sd,i];var $=u(T);Ca($,{class:"mr-1 h-5 w-5"});var k=d($,2);{var S=B=>{var se=Pd(),Be=u(se);z(()=>O(Be,s(n).recipes.length)),h(B,se)},C=B=>{var se=$d();h(B,se)};I(k,B=>{s(n).recipes.length>0?B(S):B(C,!1)})}var b=d(T,2);b.__click=[xd,i];var R=u(b);fn(R,{class:"mr-1 h-5 w-5"});var L=d(R,2);{var be=B=>{var se=Ed(),Be=u(se);z(()=>O(Be,s(n).purchasesList.length)),h(B,se)},de=B=>{var se=kd();h(B,se)};I(L,B=>{s(n).purchasesList.length>0?B(be):B(de,!1)})}var ke=d(b,2);ke.__click=[Nd,i];var qe=u(ke);ma(qe,{class:"mr-1 h-5 w-5"});var Ie=d(qe,2);{var Y=B=>{var se=Td(),Be=u(se);z(()=>O(Be,s(n).stockEntries.length)),h(B,se)},ye=B=>{var se=Ad();h(B,se)};I(Ie,B=>{s(n).stockEntries.length>0?B(Y):B(ye,!1)})}var D=d(ke,2);D.__click=[Dd,i];var X=u(D);Yi(X,{class:"mr-1 h-5 w-5"});var ve=d(X,2);{var we=B=>{var se=Id(),Be=u(se);z(()=>O(Be,s(n).product?.who.length)),h(B,se)},Ne=B=>{var se=Md();h(B,se)};I(ve,B=>{s(n).product?.who&&s(n).product?.who.length>0?B(we):B(Ne,!1)})}var Pe=d(D,2);Pe.__click=[Cd,i];var We=u(Pe);vn(We,{class:"mr-1 h-5 w-5"});var ue=d(A,2),he=u(ue);{var Ce=B=>{var se=Rd(),Be=u(se);_t(Be,{class:"h-4 w-4"});var Le=d(Be,2),gt=u(Le);z(()=>O(gt,`erreur : ${s(n).error??""}`)),h(B,se)};I(he,B=>{s(n).error&&B(Ce)})}var xe=d(he,2),Ae=u(xe);Ol(Ae,()=>s(a),B=>{var se=V(),Be=q(se);{var Le=bt=>{bd(bt,{get modalState(){return s(n)}})},gt=bt=>{var H=V(),He=q(H);{var ut=st=>{Qu(st,{get modalState(){return s(n)}})},ar=st=>{var F=V(),_n=q(F);{var Ht=yt=>{td(yt,{get modalState(){return s(n)}})},zr=yt=>{var wr=V(),kt=q(wr);{var dt=ft=>{ld(ft,{get modalState(){return s(n)}})},Ot=ft=>{var Nt=V(),qt=q(Nt);{var Tt=wt=>{hd(wt,{get modalState(){return s(n)}})};I(qt,wt=>{s(a)==="magasins"&&wt(Tt)},!0)}h(ft,Nt)};I(kt,ft=>{s(a)==="volontaires"?ft(dt):ft(Ot,!1)},!0)}h(yt,wr)};I(_n,yt=>{s(a)==="stock"?yt(Ht):yt(zr,!1)},!0)}h(st,F)};I(He,st=>{s(a)==="achats"?st(ut):st(ar,!1)},!0)}h(bt,H)};I(Be,bt=>{s(a)==="recettes"?bt(Le):bt(gt,!1)})}h(B,se)});var Re=d(ue,2),_e=u(Re);_e.__click=function(...B){t.onClose?.apply(this,B)},z(()=>{$e(T,1,`tab ${s(a)==="recettes"?"tab-active":""}`),$e(b,1,`tab ${s(a)==="achats"?"tab-active":""}`),$e(ke,1,`tab ${s(a)==="stock"?"tab-active":""}`),$e(D,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),$e(Pe,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),h(w,E)};I(_,w=>{s(n)&&w(P)})}h(e,o),U()}Et(["click"]);var Ld=()=>M.setGroupBy("none"),jd=()=>M.setGroupBy("store"),zd=()=>M.setGroupBy("productType"),Vd=(e,t)=>M.toggleProductType(t),Wd=x("<button><!> </button>"),Ud=()=>M.toggleTemperature("frais"),Gd=()=>M.toggleTemperature("surgele"),Hd=()=>M.clearTypeAndTemperatureFilters(),Qd=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Kd=(e,t)=>M.toggleStore(t),Yd=x("<button> </button>"),Zd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Jd=(e,t)=>M.toggleWho(t),Xd=x("<button> </button>"),Fd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),ef=(e,t)=>{M.clearFilters(),N(t,!1)},tf=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function rf(e,t){W(t,!0);let r=Z(!1);const n=K(()=>M.filters),a=K(()=>M.uniqueStores),i=K(()=>M.uniqueWho),o=K(()=>M.uniqueProductTypes);var l=tf(),c=q(l),f=u(c),v=d(f,2),m=d(u(v),2),g=u(m),p=u(g),_=u(p);ga(_,{class:"w-5 h-5"});var P=d(p,2),w=u(P);_t(w,{class:"w-4 h-4"});var E=d(g,2),A=d(u(E),2),T=u(A);T.__change=[Ld];var $=d(T,2);$.__change=[jd];var k=d($,2);k.__change=[zd];var S=d(E,2),C=u(S),b=d(u(C),2);Ve(b,20,()=>s(o),ue=>ue,(ue,he)=>{const Ce=K(()=>xn(he));var xe=Wd();xe.__click=[Vd,he];var Ae=u(xe);Jr(Ae,()=>s(Ce).icon,(_e,B)=>{B(_e,{class:"w-3 h-3 mr-1"})});var Re=d(Ae);z(_e=>{$e(xe,1,`btn btn-sm ${_e??""}`),O(Re,` ${s(Ce).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(he)?"btn-accent":"btn-dash btn-accent"]),h(ue,xe)});var R=d(b,2),L=u(R);L.__click=[Ud];var be=u(L);ba(be,{class:"w-3 h-3"});var de=d(L,2);de.__click=[Gd];var ke=u(de);ya(ke,{class:"w-3 h-3"});var qe=d(de,2);{var Ie=ue=>{var he=Qd();he.__click=[Hd];var Ce=u(he);_t(Ce,{class:"w-3 h-3"}),h(ue,he)};I(qe,ue=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&ue(Ie)})}var Y=d(S,2);{var ye=ue=>{var he=Zd(),Ce=u(he),xe=d(u(Ce),2);Ve(xe,20,()=>s(a),Ae=>Ae,(Ae,Re)=>{var _e=Yd();_e.__click=[Kd,Re];var B=u(_e);z(se=>{$e(_e,1,`btn btn-sm ${se??""}`),O(B,Re)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(Re)?"btn-accent":"btn-dash btn-accent"]),h(Ae,_e)}),h(ue,he)};I(Y,ue=>{s(a).length>0&&ue(ye)})}var D=d(Y,2);{var X=ue=>{var he=Fd(),Ce=u(he),xe=d(u(Ce),2);Ve(xe,20,()=>s(i),Ae=>Ae,(Ae,Re)=>{var _e=Xd();_e.__click=[Jd,Re];var B=u(_e);z(se=>{$e(_e,1,`btn btn-sm ${se??""}`),O(B,Re)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(Re)?"btn-accent":"btn-dash btn-accent"]),h(Ae,_e)}),h(ue,he)};I(D,ue=>{s(i).length>0&&ue(X)})}var ve=d(D,4);ve.__click=[ef,r];var we=u(ve);_t(we,{class:"w-4 h-4 mr-2"});var Ne=d(c,2),Pe=u(Ne),We=u(Pe);ga(We,{class:"w-6 h-6"}),z((ue,he)=>{er(T,s(n).groupBy==="none"),er($,s(n).groupBy==="store"),er(k,s(n).groupBy==="productType"),$e(L,1,`btn btn-sm ${ue??""}`),$e(de,1,`btn btn-sm ${he??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Ql(f,()=>s(r),ue=>N(r,ue)),h(e,l),U()}Et(["change","click"]);Et(["mousedown"]);function nf(e,t,r,n,a){t.setDateRange(s(r),s(n)),N(a,!1)}var af=(e,t)=>t("all"),sf=(e,t)=>t("select"),of=(e,t,r)=>t(s(r)),lf=x("<button><span> </span> <!></button>"),cf=(e,t,r)=>{N(t,!1),N(r,"all")},uf=x('<div class="modal modal-open"><div class="modal-box w-full"><h3 class="mb-4 text-lg font-bold">Sélectionner une plage de dates</h3> <div class="mb-6 space-y-2"><button class="btn btn-sm btn-outline w-full">Toutes les dates</button> <div class="flex flex-wrap gap-1"></div></div> <div class="modal-action"><button class="btn">Annuler</button> <button class="btn btn-primary">Confirmer</button></div></div></div>'),df=x('<div class="space-y-4"><div class="join w-full"><input class="join-item btn flex-1" type="radio" name="date-mode" aria-label="Toutes les dates"/> <input class="join-item btn flex-1" type="radio" name="date-mode" aria-label="Sélectionner dates"/></div> <!></div>');function ff(e,t){W(t,!0);const n=[...Bt(t,"allDates",19,()=>[])()].sort();let a=Z("all"),i=n[0],o=n[n.length-1],l=Z(rt(i)),c=Z(rt(o)),f=Z(!1);function v(S){s(l)===S&&s(c)===S?(N(l,n[0],!0),N(c,n[n.length-1],!0)):new Date(S)<new Date(s(l))?N(l,S,!0):(new Date(S)>new Date(s(c))||N(l,S,!0),N(c,S,!0))}function m(S){return new Date(S)>=new Date(s(l))&&new Date(S)<=new Date(s(c))}function g(S){return new Date(S).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function p(S){const b=new Date(S).getUTCHours();return b===12?"sun":b===20?"moon":b===8?"cloud":null}function _(){N(l,n[0],!0),N(c,n[n.length-1],!0)}function P(S){N(a,S,!0),S==="all"?(t.setDateRange(i,o),_(),N(f,!1)):N(f,!0)}var w=df(),E=u(w),A=u(E);A.__change=[af,P];var T=d(A,2);T.__change=[sf,P];var $=d(E,2);{var k=S=>{var C=uf(),b=u(C),R=d(u(b),2),L=u(R);L.__click=_;var be=d(L,2);Ve(be,21,()=>n,jn,(Ie,Y)=>{var ye=lf();ye.__click=[of,v,Y];var D=u(ye),X=u(D),ve=d(D,2);{var we=Pe=>{xu(Pe,{size:16})},Ne=Pe=>{var We=V(),ue=q(We);{var he=xe=>{yu(xe,{size:16})},Ce=xe=>{var Ae=V(),Re=q(Ae);{var _e=B=>{vu(B,{size:16})};I(Re,B=>{p(s(Y))==="cloud"&&B(_e)},!0)}h(xe,Ae)};I(ue,xe=>{p(s(Y))==="moon"?xe(he):xe(Ce,!1)},!0)}h(Pe,We)};I(ve,Pe=>{p(s(Y))==="sun"?Pe(we):Pe(Ne,!1)})}z((Pe,We)=>{$e(ye,1,`btn btn-sm ${Pe??""}`),O(X,We)},[()=>m(s(Y))?"btn-primary":"btn-ghost",()=>g(s(Y))]),h(Ie,ye)});var de=d(R,2),ke=u(de);ke.__click=[cf,f,a];var qe=d(ke,2);qe.__click=[nf,t,l,c,f],h(S,C)};I($,S=>{s(f)&&S(k)})}z(()=>{er(A,s(a)==="all"),er(T,s(a)==="select")}),h(e,w),U()}Et(["change","click"]);const Yr=e=>{var t=vf(),r=u(t);Ki(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};var vf=x('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),hf=()=>M.clearFilters(),pf=e=>M.setSearchQuery(e.currentTarget.value),_f=()=>M.setGroupBy("none"),mf=()=>M.setGroupBy("store"),gf=()=>M.setGroupBy("productType"),bf=(e,t)=>M.toggleProductType(t),yf=x("<button><!> </button>"),wf=()=>M.toggleTemperature("frais"),Sf=()=>M.toggleTemperature("surgele"),Pf=()=>M.clearTypeAndTemperatureFilters(),$f=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),xf=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Ef=(e,t)=>M.toggleStore(t),kf=x("<button><!> </button>"),Nf=()=>M.clearStoreFilters(),Tf=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Af=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Df=(e,t)=>M.toggleWho(t),If=x("<button><!> </button>"),Mf=()=>M.clearWhoFilters(),Cf=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Rf=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Of=()=>M.handleSort("productName"),qf=()=>M.handleSort("store"),Bf=()=>M.handleSort("who"),Lf=()=>M.handleSort("productType"),jf=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),zf=x('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Vf=(e,t,r)=>t(s(r).$id,"recettes"),Wf=x('<div class="text-base-content/60 text-xs"> </div>'),Uf=x('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Gf=x('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Hf=(e,t,r)=>t(s(r).$id,"magasins"),Qf=x('<div class="tooltip tooltip-info"> </div>'),Kf=(e,t,r)=>t(s(r).$id,"volontaires"),Yf=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),Zf=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),Jf=(e,t,r)=>t(s(r).$id,"recettes"),Xf=x('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Ff=(e,t,r)=>t(s(r).$id,"achats"),ev=x("<div><!> <span> </span></div>"),tv=x('<span class="text-sm">-</span>'),rv=x('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),nv=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),av=x("<!> <!>",1),sv=x('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),iv=x('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <!> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function ov(e,t){W(t,!0);const r={Package:pn,MessageCircleQuestionMark:gu,ShoppingCart:fn,Clock:fu,CircleCheck:uu,CircleX:du},n=K(()=>M.filteredProducts),a=K(()=>M.filteredGroupedProducts),i=K(()=>M.stats),o=K(()=>M.uniqueStores),l=K(()=>M.uniqueWho),c=K(()=>M.uniqueProductTypes),f=K(()=>M.filters);let v=Z(null),m=Z("recettes");function g(G,ce="recettes"){N(m,ce,!0),N(v,G,!0)}function p(){N(v,null)}var _=iv(),P=q(_),w=u(P),E=u(w),A=u(E);ws(A,{class:"mr-1 h-4 w-4"});var T=d(A),$=d(w,2);ff($,{get allDates(){return M.allDates},get setDateRange(){return M.setDateRange}});var k=d($,2),S=u(k),C=u(S),b=u(C),R=u(b);ga(R,{class:"h-5 w-5"});var L=d(b,2);L.__click=[hf];var be=u(L);_t(be,{class:"h-4 w-4"});var de=d(S,2),ke=u(de),qe=d(u(ke),2),Ie=u(qe);$u(Ie,{class:"h-4 w-4"});var Y=d(Ie,2);Y.__input=[pf];var ye=d(ke,2),D=d(u(ye),2),X=u(D);X.__change=[_f];var ve=d(X,2);ve.__change=[mf];var we=d(ve,2);we.__change=[gf];var Ne=d(de,2),Pe=u(Ne),We=u(Pe);{var ue=G=>{var ce=xf(),Fe=u(ce),Qe=d(u(Fe),2),Me=u(Qe);Ve(Me,16,()=>s(c),Se=>Se,(Se,Te)=>{const it=K(()=>xn(Te));var tt=yf();tt.__click=[bf,Te];var vt=u(tt);Jr(vt,()=>s(it).icon,(Ze,St)=>{St(Ze,{class:"mr-1 h-5 w-5"})});var Yt=d(vt);z(Ze=>{$e(tt,1,`btn btn-sm ${Ze??""}`),O(Yt,` ${s(it).displayName??""}`)},[()=>s(f).selectedProductTypes.length===0?"btn-soft btn-accent":s(f).selectedProductTypes.includes(Te)?"btn-accent":"btn-dash btn-accent"]),h(Se,tt)});var Ke=d(Me,2);Ke.__click=[wf];var et=u(Ke);ba(et,{class:"h-5 w-5"});var me=d(Ke,2);me.__click=[Sf];var Ee=u(me);ya(Ee,{class:"h-5 w-5"});var pe=d(me,2);{var j=Se=>{var Te=$f();Te.__click=[Pf];var it=u(Te);_t(it,{class:"h-3 w-3"}),h(Se,Te)};I(pe,Se=>{(s(f).selectedProductTypes.length>0||s(f).selectedTemperatures.length>0)&&Se(j)})}z((Se,Te)=>{$e(Ke,1,`btn btn-sm ms-4 ${Se??""}`),$e(me,1,`btn btn-sm ${Te??""}`)},[()=>s(f).selectedTemperatures.length===0?"btn-soft btn-success":s(f).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(f).selectedTemperatures.length===0?"btn-soft btn-info":s(f).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(G,ce)};I(We,G=>{s(c).length>0&&G(ue)})}var he=d(Pe,2),Ce=u(he);{var xe=G=>{var ce=Af(),Fe=u(ce),Qe=d(u(Fe),2),Me=u(Qe);Ve(Me,16,()=>s(o),me=>me,(me,Ee)=>{var pe=kf();pe.__click=[Ef,Ee];var j=u(pe);vn(j,{class:"mr-1 h-3 w-3"});var Se=d(j);z(Te=>{$e(pe,1,`btn btn-xs ${Te??""}`),O(Se,` ${Ee??""}`)},[()=>s(f).selectedStores.length===0?"btn-soft btn-accent":s(f).selectedStores.includes(Ee)?"btn-accent":"btn-dash btn-accent"]),h(me,pe)});var Ke=d(Me,2);{var et=me=>{var Ee=Tf();Ee.__click=[Nf];var pe=u(Ee);_t(pe,{class:"h-3 w-3"}),h(me,Ee)};I(Ke,me=>{s(f).selectedStores.length>0&&me(et)})}h(G,ce)};I(Ce,G=>{s(o).length>0&&G(xe)})}var Ae=d(Ce,2);{var Re=G=>{var ce=Rf(),Fe=u(ce),Qe=d(u(Fe),2),Me=u(Qe);Ve(Me,16,()=>s(l),me=>me,(me,Ee)=>{var pe=If();pe.__click=[Df,Ee];var j=u(pe);Ra(j,{class:"mr-1 h-3 w-3"});var Se=d(j);z(Te=>{$e(pe,1,`btn btn-xs ${Te??""}`),O(Se,` ${Ee??""}`)},[()=>s(f).selectedWho.length===0?" btn-soft btn-info":s(f).selectedWho.includes(Ee)?" btn-info":"btn-dash btn-info"]),h(me,pe)});var Ke=d(Me,2);{var et=me=>{var Ee=Cf();Ee.__click=[Mf];var pe=u(Ee);_t(pe,{class:"h-3 w-3"}),h(me,Ee)};I(Ke,me=>{s(f).selectedWho.length>0&&me(et)})}h(G,ce)};I(Ae,G=>{s(l).length>0&&G(Re)})}var _e=d(k,2),B=u(_e),se=u(B),Be=u(se),Le=u(Be);Le.__click=[Of];var gt=u(Le),bt=u(gt);ws(bt,{class:"h-4 w-4"});var H=d(bt,2);{var He=G=>{var ce=lt();z(()=>O(ce,s(f).sortDirection==="asc"?"↑":"↓")),h(G,ce)};I(H,G=>{s(f).sortColumn==="productName"&&G(He)})}var ut=d(Le);ut.__click=[qf];var ar=u(ut),st=u(ar);vn(st,{class:"h-4 w-4"});var F=d(st,2);{var _n=G=>{var ce=lt();z(()=>O(ce,s(f).sortDirection==="asc"?"↑":"↓")),h(G,ce)};I(F,G=>{s(f).sortColumn==="store"&&G(_n)})}var Ht=d(ut);Ht.__click=[Bf];var zr=u(Ht),yt=u(zr);Yi(yt,{class:"h-4 w-4"});var wr=d(yt,2);{var kt=G=>{var ce=lt();z(()=>O(ce,s(f).sortDirection==="asc"?"↑":"↓")),h(G,ce)};I(wr,G=>{s(f).sortColumn==="who"&&G(kt)})}var dt=d(Ht);dt.__click=[Lf];var Ot=u(dt),ft=d(u(Ot));{var Nt=G=>{var ce=lt();z(()=>O(ce,s(f).sortDirection==="asc"?"↑":"↓")),h(G,ce)};I(ft,G=>{s(f).sortColumn==="productType"&&G(Nt)})}var qt=d(dt,2),Tt=u(qt),wt=u(Tt);fn(wt,{class:"h-4 w-4"});var Qt=d(qt),Kt=u(Qt),sr=u(Kt);_u(sr,{class:"h-4 w-4"});var ir=d(se);Ve(ir,21,()=>Object.entries(s(a)),([G,ce])=>G,(G,ce)=>{var Fe=K(()=>Ns(s(ce),2));let Qe=()=>s(Fe)[0],Me=()=>s(Fe)[1];var Ke=av(),et=q(Ke);{var me=pe=>{const j=K(()=>xn(Qe()));var Se=zf(),Te=u(Se),it=u(Te),tt=u(it);{var vt=Ze=>{var St=lt();z(()=>O(St,`🏪 ${Qe()??""} (${Me().length??""})`)),h(Ze,St)},Yt=Ze=>{var St=V(),Er=q(St);{var Vr=Pt=>{var lr=jf(),mn=u(lr);Jr(mn,()=>s(j).icon,(Gn,Hn)=>{Hn(Gn,{class:"h-4 w-4"})});var gn=d(mn,2),Un=u(gn),kr=d(gn,2),bn=u(kr);z(()=>{O(Un,s(j).displayName),O(bn,`(${Me().length??""})`)}),h(Pt,lr)},fe=Pt=>{var lr=lt();z(()=>O(lr,`📦 ${Qe()??""} (${Me().length??""})`)),h(Pt,lr)};I(Er,Pt=>{s(f).groupBy==="productType"?Pt(Vr):Pt(fe,!1)},!0)}h(Ze,St)};I(tt,Ze=>{s(f).groupBy==="store"?Ze(vt):Ze(Yt,!1)})}h(pe,Se)};I(et,pe=>{Qe()!==""&&pe(me)})}var Ee=d(et,2);Ve(Ee,17,()=>Tu(Me(),s(f)),pe=>pe.$id,(pe,j)=>{const Se=K(()=>xn(s(j).productType)),Te=K(()=>Au(s(j).purchases||[]));var it=nv(),tt=u(it);tt.__click=[Vf,g,j];var vt=u(tt),Yt=u(vt),Ze=u(Yt),St=u(Ze),Er=d(Ze,2);{var Vr=Q=>{var le=Wf(),je=u(le);z(()=>O(je,`Ancien: ${s(j).previousNames[0]??""}`)),h(Q,le)};I(Er,Q=>{s(j).previousNames&&s(j).previousNames.length>0&&Q(Vr)})}var fe=d(Yt,2),Pt=u(fe);{var lr=Q=>{var le=Uf(),je=u(le);ba(je,{class:"text-success h-4 w-4"}),h(Q,le)};I(Pt,Q=>{s(j).pFrais&&Q(lr)})}var mn=d(Pt,2);{var gn=Q=>{var le=Gf(),je=u(le);ya(je,{class:"text-info h-4 w-4"}),h(Q,le)};I(mn,Q=>{s(j).pSurgel&&Q(gn)})}var Un=d(vt,2);Yr(Un);var kr=d(tt);kr.__click=[Hf,g,j];var bn=u(kr);{var Gn=Q=>{var le=Qf(),je=u(le);z(()=>{Tn(le,"data-tip",s(j).storeInfo.storeComment),O(je,s(j).storeInfo.storeName||"-")}),h(Q,le)},Hn=Q=>{var le=lt();z(()=>O(le,s(j).storeInfo?.storeName||"-")),h(Q,le)};I(bn,Q=>{s(j).storeInfo?.storeComment?Q(Gn):Q(Hn,!1)})}var Zi=d(bn,2);Yr(Zi);var Qn=d(kr);Qn.__click=[Kf,g,j];var Ba=u(Qn);{var Ji=Q=>{var le=Zf();Ve(le,20,()=>s(j).who,je=>je,(je,Zt)=>{var cr=Yf(),Wr=u(cr);z(()=>O(Wr,Zt)),h(je,cr)}),h(Q,le)},Xi=Q=>{var le=lt("-");h(Q,le)};I(Ba,Q=>{s(j).who&&s(j).who.length>0?Q(Ji):Q(Xi,!1)})}var Fi=d(Ba,2);Yr(Fi);var Kn=d(Qn),eo=u(Kn),La=u(eo);Jr(La,()=>s(Se).icon,(Q,le)=>{le(Q,{class:"h-3 w-3"})});var to=d(La),Yn=d(Kn);Yn.__click=[Jf,g,j];var ja=u(Yn),ro=u(ja),za=d(ja,2);{var no=Q=>{var le=Xf(),je=u(le),Zt=u(je),cr=d(Zt);Ca(cr,{class:"h-3 w-3"});var Wr=d(je,2),yn=u(Wr),Ur=d(yn);ku(Ur,{class:"h-3 w-3"}),z(()=>{O(Zt,`${s(j)?.nbRecipes??""} `),O(yn,`${s(j)?.totalAssiettes??""} `)}),h(Q,le)};I(za,Q=>{(s(j).nbRecipes||s(j).totalAssiettes)&&Q(no)})}var ao=d(za,2);Yr(ao);var Zn=d(Yn);Zn.__click=[Ff,g,j];var Va=u(Zn),Wa=u(Va);Ve(Wa,17,()=>s(Te),Q=>Q.status,(Q,le)=>{const je=K(()=>r[s(le).icon]);var Zt=ev(),cr=u(Zt);Jr(cr,()=>s(je),(Ur,vo)=>{vo(Ur,{class:"h-4 w-4"})});var Wr=d(cr,2),yn=u(Wr);z(Ur=>{$e(Zt,1,`badge badge-soft flex items-center gap-2 ${s(le).badgeClass??""}`),O(yn,Ur)},[()=>Oa(s(le).quantity,s(le).unit)]),h(Q,Zt)});var so=d(Wa,2);{var io=Q=>{var le=tv();h(Q,le)};I(so,Q=>{s(Te).length===0&&Q(io)})}var oo=d(Va,2);Yr(oo);var lo=d(Zn),co=u(lo);{var uo=Q=>{var le=rv(),je=u(le);z(()=>O(je,s(j).displayMissingQuantity)),h(Q,le)},fo=Q=>{cu(Q,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(co,Q=>{s(j).displayMissingQuantity!=="✅ Complet"?Q(uo):Q(fo,!1)})}z(()=>{O(St,s(j).productName),$e(kr,1,`${s(f).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),$e(Kn,1,pi(s(f).groupBy==="productType"?"hidden":"")),O(to,` ${s(Se).displayName??""}`),O(ro,s(j).displayTotalNeeded??"-")}),h(pe,it)}),h(G,Ke)});var Sr=d(B,2);{var Pr=G=>{var ce=sv();h(G,ce)};I(Sr,G=>{s(n).length===0&&G(Pr)})}var or=d(P,2);{var $r=G=>{Bd(G,{get productId(){return s(v)},get initialTab(){return s(m)},onClose:p})};I(or,G=>{s(v)&&G($r)})}var xr=d(or,2);rf(xr,{}),z(()=>{O(T,` ${s(i).total??""}`),Ma(Y,s(f).searchQuery),er(X,s(f).groupBy==="none"),er(ve,s(f).groupBy==="store"),er(we,s(f).groupBy==="productType"),$e(ut,1,`hover:bg-base-100 cursor-pointer text-center ${s(f).groupBy==="store"?"hidden":""}`),$e(dt,1,`hover:bg-base-100 cursor-pointer text-center ${s(f).groupBy==="productType"?"hidden":""}`)}),h(e,_),U()}Et(["click","input","change"]);Yo();var lv=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function cv(e){var t=lv();h(e,t)}var uv=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function dv(e,t){var r=uv(),n=d(u(r),2),a=d(u(n),2),i=u(a);z(()=>O(i,t.message)),h(e,r)}var fv=x('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function vv(e,t){var r=fv(),n=u(r),a=u(n);Eu(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(a,2),o=d(u(i),2),l=u(o);z(()=>O(l,t.message||"Erreur inconnue")),h(e,r)}var hv=x('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),pv=x('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),_v=x('<div class="text-base-content/60"> </div>'),mv=x('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),gv=x('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),bv=x('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),yv=x('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function wv(e,t){W(t,!0);let r,n=Z(null),a=Z(!0),i=Z(!1);yi(async()=>{r=Ic();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(D){const X=D instanceof Error?D.message:"Erreur lors de l'initialisation";N(n,X,!0),console.error("[App] Erreur initialisation:",D)}finally{N(a,!1)}}),Jl(()=>{M.destroy()});async function o(){if(!(!r||s(i))){N(i,!0);try{await M.forceReload(r)}catch(D){console.error("[App] Erreur lors du rechargement forcé:",D)}finally{N(i,!1)}}}const l=K(()=>s(n)||M.error),c=K(()=>s(a)||M.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=yv(),m=u(v),g=u(m),p=u(g),_=d(u(p),2),P=u(_);{var w=D=>{var X=hv();h(D,X)};I(P,D=>{M.realtimeConnected&&D(w)})}var E=d(P,2);{var A=D=>{var X=pv();h(D,X)};I(E,D=>{M.syncing&&D(A)})}var T=d(E,2);{var $=D=>{var X=_v(),ve=u(X);z(we=>O(ve,`Maj: ${we??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),h(D,X)};I(T,D=>{M.lastSync&&D($)})}var k=d(T,2);{var S=D=>{var X=mv();let ve;X.__click=o;var we=u(X);wu(we,{class:"h-4 w-4"}),z(Ne=>{ve=$e(X,1,"btn btn-outline btn-sm",null,ve,Ne),X.disabled=s(i)||M.loading},[()=>({loading:s(i)||M.loading})]),h(D,X)};I(k,D=>{s(n)||D(S)})}var C=d(k,2);{var b=D=>{var X=gv(),ve=u(X),we=u(ve);mu(we,{class:"mr-2 h-4 w-4"}),z(()=>Tn(ve,"href",f)),h(D,X)};I(C,D=>{s(n)&&D(b)})}var R=d(m,2),L=u(R);{var be=D=>{vv(D,{get message(){return s(l)}})},de=D=>{var X=V(),ve=q(X);{var we=Ne=>{dv(Ne,{get message(){return s(l)}})};I(ve,Ne=>{s(l)&&Ne(we)},!0)}h(D,X)};I(L,D=>{s(n)?D(be):D(de,!1)})}var ke=d(L,2);{var qe=D=>{cv(D)};I(ke,D=>{s(c)&&D(qe)})}var Ie=d(ke,2);{var Y=D=>{ov(D,{})},ye=D=>{var X=V(),ve=q(X);{var we=Ne=>{var Pe=bv();h(Ne,Pe)};I(ve,Ne=>{!M.loading&&!s(n)&&Ne(we)},!0)}h(D,X)};I(Ie,D=>{M.enrichedProducts.length>0?D(Y):D(ye,!1)})}h(e,v),U()}Et(["click"]);Ml(wv,{target:document.getElementById("app_products")});
