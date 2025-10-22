(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const _o=!1;var Qn=Array.isArray,vl=Array.prototype.indexOf,Ys=Array.from,Is=Object.defineProperty,er=Object.getOwnPropertyDescriptor,hl=Object.getOwnPropertyDescriptors,pl=Object.prototype,ml=Array.prototype,go=Object.getPrototypeOf,$a=Object.isExtensible;function Fr(e){return typeof e=="function"}const ne=()=>{};function _l(e){for(var t=0;t<e.length;t++)e[t]()}function yo(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function bo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const tt=2,Zs=4,Js=8,Er=16,Qt=32,kr=64,Xs=128,yt=256,zn=512,Ge=1024,it=2048,ir=4096,xt=8192,$r=16384,Fs=32768,Pr=65536,Pa=1<<17,gl=1<<18,Kr=1<<19,yl=1<<20,Cs=1<<21,Yn=1<<22,br=1<<23,wr=Symbol("$state"),wo=Symbol("legacy props"),bl=Symbol(""),sn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function So(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Sl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function El(e){throw new Error("https://svelte.dev/e/effect_orphan")}function kl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $l(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Pl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Al(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Nl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Zn=1,Jn=2,xo=4,Il=8,Cl=16,Ml=1,Dl=2,Rl=4,Ol=8,ql=16,Ll=1,Bl=2,Le=Symbol(),jl="http://www.w3.org/1999/xhtml",zl="http://www.w3.org/2000/svg",Vl="@attach";function Wl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ul(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Gl=!1;function Eo(e){return e===this.v}function Hl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ko(e){return!Hl(e,this.v)}let Qr=!1,Kl=!1;function Ql(){Qr=!0}let Te=null;function jr(e){Te=e}function G(e,t=!1,r){Te={p:Te,c:null,e:null,s:e,x:null,l:Qr&&!t?{s:null,u:null,$:[]}:null}}function H(e){var t=Te,r=t.e;if(r!==null){t.e=null;for(var n of r)Vo(n)}return Te=t.p,{}}function Sn(){return!Qr||Te!==null&&Te.l===null}let yr=[];function $o(){var e=yr;yr=[],_l(e)}function Sr(e){if(yr.length===0&&!an){var t=yr;queueMicrotask(()=>{t===yr&&$o()})}yr.push(e)}function Yl(){for(;yr.length>0;)$o()}const Zl=new WeakMap;function Po(e){var t=te;if(t===null)return re.f|=br,e;if((t.f&Fs)===0){if((t.f&Xs)===0)throw!t.parent&&e instanceof Error&&To(e),e;t.b.error(e)}else zr(e,t)}function zr(e,t){for(;t!==null;){if((t.f&Xs)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&To(e),e}function To(e){const t=Zl.get(e);t&&(Is(e,"message",{value:t.message}),Is(e,"stack",{value:t.stack}))}const Cn=new Set;let ye=null,Dn=null,Ms=new Set,Nt=[],Xn=null,Ds=!1,an=!1;class mt{current=new Map;#t=new Map;#r=new Set;#l=0;#c=null;#a=[];#n=[];#o=[];#i=[];#s=[];#u=[];skipped_effects=new Set;process(t){Nt=[],Dn=null;var r=mt.apply(this);for(const a of t)this.#v(a);if(this.#l===0){this.#d();var n=this.#n,s=this.#o;this.#n=[],this.#o=[],this.#i=[],Dn=this,ye=null,Ta(n),Ta(s),Dn=null,this.#c?.resolve()}else this.#f(this.#n),this.#f(this.#o),this.#f(this.#i);r();for(const a of this.#a)vn(a);this.#a=[]}#v(t){t.f^=Ge;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Qt|kr))!==0,a=s&&(n&Ge)!==0,o=a||(n&xt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Ge:(n&Zs)!==0?this.#o.push(r):(n&Ge)===0&&((n&Yn)!==0&&r.b?.is_pending()?this.#a.push(r):rs(r)&&((r.f&Er)!==0&&this.#i.push(r),vn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#f(t){for(const r of t)((r.f&it)!==0?this.#s:this.#u).push(r),Je(r,Ge);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){ye=this}deactivate(){ye=null}flush(){if(Nt.length>0){if(this.activate(),Ao(),ye!==null&&ye!==this)return}else this.#l===0&&this.#d();this.deactivate();for(const t of Ms)if(Ms.delete(t),t(),ye!==null)break}#d(){for(const t of this.#r)t();if(this.#r.clear(),Cn.size>1){this.#t.clear();let t=!0;for(const r of Cn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;No(n)}if(Nt.length>0){ye=r;const n=mt.apply(r);for(const s of Nt)r.#v(s);Nt=[],n()}}ye=null}Cn.delete(this)}increment(){this.#l+=1}decrement(){this.#l-=1;for(const t of this.#s)Je(t,it),xr(t);for(const t of this.#u)Je(t,ir),xr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#c??=yo()).promise}static ensure(){if(ye===null){const t=ye=new mt;Cn.add(ye),an||mt.enqueue(()=>{ye===t&&t.flush()})}return ye}static enqueue(t){Sr(t)}static apply(t){return ne}}function Jl(e){var t=an;an=!0;try{for(var r;;){if(Yl(),Nt.length===0&&(ye?.flush(),Nt.length===0))return Xn=null,r;Ao()}}finally{an=t}}function Ao(){var e=qr;Ds=!0;try{var t=0;for(Ca(!0);Nt.length>0;){var r=mt.ensure();if(t++>1e3){var n,s;Xl()}r.process(Nt),tr.clear()}}finally{Ds=!1,Ca(e),Xn=null}}function Xl(){try{kl()}catch(e){zr(e,Xn)}}let gr=null;function Ta(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&($r|xt))===0&&rs(n)&&(gr=[],vn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Go(n):n.fn=null),gr?.length>0)){tr.clear();for(const s of gr)vn(s);gr=[]}}gr=null}}function No(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&tt)!==0?No(t):(r&(Yn|Er))!==0&&(Je(t,it),xr(t))}}function xr(e){for(var t=Xn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ds&&t===te&&(r&Er)!==0)return;if((r&(kr|Qt))!==0){if((r&Ge)===0)return;t.f^=Ge}}Nt.push(t)}function Io(e){let t=0,r=ar(0),n;return()=>{hc()&&(i(r),aa(()=>(t===0&&(n=Yr(()=>e(()=>It(r)))),t+=1,()=>{Sr(()=>{t-=1,t===0&&(n?.(),n=void 0,It(r))})})))}}var Fl=Pr|Kr|Xs;function ec(e,t,r){new tc(e,t,r)}class tc{parent;#t=!1;#r;#l=null;#c;#a;#n;#o=null;#i=null;#s=null;#u=null;#v=0;#f=0;#d=!1;#e=null;#b=()=>{this.#e&&Vr(this.#e,this.#v)};#w=Io(()=>(this.#e=ar(this.#v),()=>{this.#e=null}));constructor(t,r,n){this.#r=t,this.#c=r,this.#a=n,this.parent=te.b,this.#t=!!this.#c.pending,this.#n=cr(()=>{te.b=this;{try{this.#o=Ue(()=>n(this.#r))}catch(s){this.error(s)}this.#f>0?this.#m():this.#t=!1}},Fl)}#x(){try{this.#o=Ue(()=>this.#a(this.#r))}catch(t){this.error(t)}this.#t=!1}#E(){const t=this.#c.pending;t&&(this.#i=Ue(()=>t(this.#r)),mt.enqueue(()=>{this.#o=this.#p(()=>(mt.ensure(),Ue(()=>this.#a(this.#r)))),this.#f>0?this.#m():(rr(this.#i,()=>{this.#i=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#c.pending}#p(t){var r=te,n=re,s=Te;Dt(this.#n),et(this.#n),jr(this.#n.ctx);try{return t()}catch(a){return Po(a),null}finally{Dt(r),et(n),jr(s)}}#m(){const t=this.#c.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),rc(this.#o,this.#u)),this.#i===null&&(this.#i=Ue(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#i&&rr(this.#i,()=>{this.#i=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),Sr(()=>{mt.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#v+=t,Ms.add(this.#b)}get_effect_pending(){return this.#w(),i(this.#e)}error(t){var r=this.#c.onerror;let n=this.#c.failed;if(this.#d||!r&&!n)throw t;this.#o&&(Be(this.#o),this.#o=null),this.#i&&(Be(this.#i),this.#i=null),this.#s&&(Be(this.#s),this.#s=null);var s=!1,a=!1;const o=()=>{if(s){Ul();return}s=!0,a&&Nl(),mt.ensure(),this.#v=0,this.#s!==null&&rr(this.#s,()=>{this.#s=null}),this.#t=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#d=!1,Ue(()=>this.#a(this.#r)))),this.#f>0?this.#m():this.#t=!1};var l=re;try{et(null),a=!0,r?.(t,o),a=!1}catch(c){zr(c,this.#n&&this.#n.parent)}finally{et(l)}n&&Sr(()=>{this.#s=this.#p(()=>{this.#d=!0;try{return Ue(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return zr(c,this.#n.parent),null}finally{this.#d=!1}})})}}function rc(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:xn(r);t.append(r),r=s}}function Co(e,t,r){const n=Sn()?Fn:ea;if(t.length===0){r(e.map(n));return}var s=ye,a=te,o=nc();Promise.all(t.map(l=>sc(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(a.f&$r)===0&&zr(c,a)}s?.deactivate(),Mo()}).catch(l=>{zr(l,a)})}function nc(){var e=te,t=re,r=Te,n=ye;return function(){Dt(e),et(t),jr(r),n?.activate()}}function Mo(){Dt(null),et(null),jr(null)}function Fn(e){var t=tt|it,r=re!==null&&(re.f&tt)!==0?re:null;return te===null||r!==null&&(r.f&yt)!==0?t|=yt:te.f|=Kr,{ctx:Te,deps:null,effects:null,equals:Eo,f:t,fn:e,reactions:null,rv:0,v:Le,wv:0,parent:r??te,ac:null}}function sc(e,t){let r=te;r===null&&wl();var n=r.b,s=void 0,a=ar(Le),o=!re,l=new Map;return mc(()=>{var c=yo();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var u=ye,f=n.is_pending();o&&(n.update_pending_count(1),f||(u.increment(),l.get(u)?.reject(sn),l.set(u,c)));const h=(p,m=void 0)=>{f||u.activate(),m?m!==sn&&(a.f|=br,Vr(a,m)):((a.f&br)!==0&&(a.f^=br),Vr(a,p)),o&&(n.update_pending_count(-1),f||u.decrement()),Mo()};c.promise.then(h,p=>h(null,p||"unknown"))}),jo(()=>{for(const c of l.values())c.reject(sn)}),new Promise(c=>{function u(f){function h(){f===s?c(a):u(s)}f.then(h,h)}u(s)})}function B(e){const t=Fn(e);return Qo(t),t}function ea(e){const t=Fn(e);return t.equals=ko,t}function Do(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Be(t[r])}}function ac(e){for(var t=e.parent;t!==null;){if((t.f&tt)===0)return t;t=t.parent}return null}function ta(e){var t,r=te;Dt(ac(e));try{Do(e),t=Xo(e)}finally{Dt(r)}return t}function Ro(e){var t=ta(e);if(e.equals(t)||(e.v=t,e.wv=Zo()),!Tr){var r=(Ft||(e.f&yt)!==0)&&e.deps!==null?ir:Ge;Je(e,r)}}const tr=new Map;function ar(e,t){var r={f:0,v:e,reactions:null,equals:Eo,rv:0,wv:0};return r}function se(e,t){const r=ar(e);return Qo(r),r}function oc(e,t=!1,r=!0){const n=ar(e);return t||(n.equals=ko),Qr&&r&&Te!==null&&Te.l!==null&&(Te.l.s??=[]).push(n),n}function D(e,t,r=!1){re!==null&&(!St||(re.f&Pa)!==0)&&Sn()&&(re.f&(tt|Er|Yn|Pa))!==0&&!Gt?.includes(e)&&Al();let n=r?_t(t):t;return Vr(e,n)}function Vr(e,t){if(!e.equals(t)){var r=e.v;Tr?tr.set(e,t):tr.set(e,r),e.v=t;var n=mt.ensure();n.capture(e,r),(e.f&tt)!==0&&((e.f&it)!==0&&ta(e),Je(e,(e.f&yt)===0?Ge:ir)),e.wv=Zo(),Oo(e,it),Sn()&&te!==null&&(te.f&Ge)!==0&&(te.f&(Qt|kr))===0&&(pt===null?yc([e]):pt.push(e))}return t}function It(e){D(e,e.v+1)}function Oo(e,t){var r=e.reactions;if(r!==null)for(var n=Sn(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!n&&o===te)){var c=(l&it)===0;c&&Je(o,t),(l&tt)!==0?Oo(o,ir):c&&((l&Er)!==0&&gr!==null&&gr.push(o),xr(o))}}}function _t(e){if(typeof e!="object"||e===null||wr in e)return e;const t=go(e);if(t!==pl&&t!==ml)return e;var r=new Map,n=Qn(e),s=se(0),a=Ht,o=l=>{if(Ht===a)return l();var c=re,u=Ht;et(null),Da(a);var f=l();return et(c),Da(u),f};return n&&r.set("length",se(e.length)),new Proxy(e,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Pl();var f=r.get(c);return f===void 0?f=o(()=>{var h=se(u.value);return r.set(c,h),h}):D(f,u.value,!0),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0){if(c in l){const f=o(()=>se(Le));r.set(c,f),It(s)}}else D(u,Le),It(s);return!0},get(l,c,u){if(c===wr)return e;var f=r.get(c),h=c in l;if(f===void 0&&(!h||er(l,c)?.writable)&&(f=o(()=>{var m=_t(h?l[c]:Le),_=se(m);return _}),r.set(c,f)),f!==void 0){var p=i(f);return p===Le?void 0:p}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var f=r.get(c);f&&(u.value=i(f))}else if(u===void 0){var h=r.get(c),p=h?.v;if(h!==void 0&&p!==Le)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(l,c){if(c===wr)return!0;var u=r.get(c),f=u!==void 0&&u.v!==Le||Reflect.has(l,c);if(u!==void 0||te!==null&&(!f||er(l,c)?.writable)){u===void 0&&(u=o(()=>{var p=f?_t(l[c]):Le,m=se(p);return m}),r.set(c,u));var h=i(u);if(h===Le)return!1}return f},set(l,c,u,f){var h=r.get(c),p=c in l;if(n&&c==="length")for(var m=u;m<h.v;m+=1){var _=r.get(m+"");_!==void 0?D(_,Le):m in l&&(_=o(()=>se(Le)),r.set(m+"",_))}if(h===void 0)(!p||er(l,c)?.writable)&&(h=o(()=>se(void 0)),D(h,_t(u)),r.set(c,h));else{p=h.v!==Le;var x=o(()=>_t(u));D(h,x)}var y=Reflect.getOwnPropertyDescriptor(l,c);if(y?.set&&y.set.call(f,u),!p){if(n&&typeof c=="string"){var w=r.get("length"),T=Number(c);Number.isInteger(T)&&T>=w.v&&D(w,T+1)}It(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(h=>{var p=r.get(h);return p===void 0||p.v!==Le});for(var[u,f]of r)f.v!==Le&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Tl()}})}function Aa(e){try{if(e!==null&&typeof e=="object"&&wr in e)return e[wr]}catch{}return e}function ic(e,t){return Object.is(Aa(e),Aa(t))}var Na,qo,Lo,Bo;function lc(){if(Na===void 0){Na=window,qo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Lo=er(t,"firstChild").get,Bo=er(t,"nextSibling").get,$a(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),$a(r)&&(r.__t=void 0)}}function lr(e=""){return document.createTextNode(e)}function Wr(e){return Lo.call(e)}function xn(e){return Bo.call(e)}function d(e,t){return Wr(e)}function j(e,t=!1){{var r=Wr(e);return r instanceof Comment&&r.data===""?xn(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=xn(n);return n}function cc(e){e.textContent=""}function ra(){return!1}function uc(e,t){if(t){const r=document.body;e.autofocus=!0,Sr(()=>{document.activeElement===r&&e.focus()})}}let Ia=!1;function dc(){Ia||(Ia=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function es(e){var t=re,r=te;et(null),Dt(null);try{return e()}finally{et(t),Dt(r)}}function na(e,t,r,n=r){e.addEventListener(t,()=>es(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),dc()}function fc(e){te===null&&re===null&&El(),re!==null&&(re.f&yt)!==0&&te===null&&xl(),Tr&&Sl()}function vc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Yt(e,t,r,n=!0){var s=te;s!==null&&(s.f&xt)!==0&&(e|=xt);var a={ctx:Te,deps:null,nodes_start:null,nodes_end:null,f:e|it,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{vn(a),a.f|=Fs}catch(c){throw Be(a),c}else t!==null&&xr(a);if(n){var o=a;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Kr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&vc(o,s),re!==null&&(re.f&tt)!==0&&(e&kr)===0)){var l=re;(l.effects??=[]).push(o)}}return a}function hc(){return re!==null&&!St}function jo(e){const t=Yt(Js,null,!1);return Je(t,Ge),t.teardown=e,t}function zo(e){fc();var t=te.f,r=!re&&(t&Qt)!==0&&(t&Fs)===0;if(r){var n=Te;(n.e??=[]).push(e)}else return Vo(e)}function Vo(e){return Yt(Zs|yl,e,!1)}function pc(e){mt.ensure();const t=Yt(kr|Kr,e,!0);return(r={})=>new Promise(n=>{r.outro?rr(t,()=>{Be(t),n(void 0)}):(Be(t),n(void 0))})}function sa(e){return Yt(Zs,e,!1)}function mc(e){return Yt(Yn|Kr,e,!0)}function aa(e,t=0){return Yt(Js|t,e,!0)}function L(e,t=[],r=[]){Co(t,r,n=>{Yt(Js,()=>e(...n.map(i)),!0)})}function cr(e,t=0){var r=Yt(Er|t,e,!0);return r}function Ue(e,t=!0){return Yt(Qt|Kr,e,!0,t)}function Wo(e){var t=e.teardown;if(t!==null){const r=Tr,n=re;Ma(!0),et(null);try{t.call(null)}finally{Ma(r),et(n)}}}function Uo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&es(()=>{s.abort(sn)});var n=r.next;(r.f&kr)!==0?r.parent=null:Be(r,t),r=n}}function _c(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Qt)===0&&Be(t),t=r}}function Be(e,t=!0){var r=!1;(t||(e.f&gl)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(gc(e.nodes_start,e.nodes_end),r=!0),Uo(e,t&&!r),Vn(e,0),Je(e,$r);var n=e.transitions;if(n!==null)for(const a of n)a.stop();Wo(e);var s=e.parent;s!==null&&s.first!==null&&Go(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function gc(e,t){for(;e!==null;){var r=e===t?null:xn(e);e.remove(),e=r}}function Go(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function rr(e,t){var r=[];oa(e,r,!0),Ho(r,()=>{Be(e),t&&t()})}function Ho(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function oa(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,a=(n.f&Pr)!==0||(n.f&Qt)!==0;oa(n,t,a?r:!1),n=s}}}function ts(e){Ko(e,!0)}function Ko(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&Ge)===0&&(Je(e,it),xr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Pr)!==0||(r.f&Qt)!==0;Ko(r,s?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let qr=!1;function Ca(e){qr=e}let Tr=!1;function Ma(e){Tr=e}let re=null,St=!1;function et(e){re=e}let te=null;function Dt(e){te=e}let Gt=null;function Qo(e){re!==null&&(Gt===null?Gt=[e]:Gt.push(e))}let Ze=null,at=0,pt=null;function yc(e){pt=e}let Yo=1,fn=0,Ht=fn;function Da(e){Ht=e}let Ft=!1;function Zo(){return++Yo}function rs(e){var t=e.f;if((t&it)!==0)return!0;if((t&ir)!==0){var r=e.deps,n=(t&yt)!==0;if(r!==null){var s,a,o=(t&zn)!==0,l=n&&te!==null&&!Ft,c=r.length;if((o||l)&&(te===null||(te.f&$r)===0)){var u=e,f=u.parent;for(s=0;s<c;s++)a=r[s],(o||!a?.reactions?.includes(u))&&(a.reactions??=[]).push(u);o&&(u.f^=zn),l&&f!==null&&(f.f&yt)===0&&(u.f^=yt)}for(s=0;s<c;s++)if(a=r[s],rs(a)&&Ro(a),a.wv>e.wv)return!0}(!n||te!==null&&!Ft)&&Je(e,Ge)}return!1}function Jo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Gt?.includes(e))for(var s=0;s<n.length;s++){var a=n[s];(a.f&tt)!==0?Jo(a,t,!1):t===a&&(r?Je(a,it):(a.f&Ge)!==0&&Je(a,ir),xr(a))}}function Xo(e){var t=Ze,r=at,n=pt,s=re,a=Ft,o=Gt,l=Te,c=St,u=Ht,f=e.f;Ze=null,at=0,pt=null,Ft=(f&yt)!==0&&(St||!qr||re===null),re=(f&(Qt|kr))===0?e:null,Gt=null,jr(e.ctx),St=!1,Ht=++fn,e.ac!==null&&(es(()=>{e.ac.abort(sn)}),e.ac=null);try{e.f|=Cs;var h=e.fn,p=h(),m=e.deps;if(Ze!==null){var _;if(Vn(e,at),m!==null&&at>0)for(m.length=at+Ze.length,_=0;_<Ze.length;_++)m[at+_]=Ze[_];else e.deps=m=Ze;if(!Ft||(f&tt)!==0&&e.reactions!==null)for(_=at;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&at<m.length&&(Vn(e,at),m.length=at);if(Sn()&&pt!==null&&!St&&m!==null&&(e.f&(tt|ir|it))===0)for(_=0;_<pt.length;_++)Jo(pt[_],e);return s!==null&&s!==e&&(fn++,pt!==null&&(n===null?n=pt:n.push(...pt))),(e.f&br)!==0&&(e.f^=br),p}catch(x){return Po(x)}finally{e.f^=Cs,Ze=t,at=r,pt=n,re=s,Ft=a,Gt=o,jr(l),St=c,Ht=u}}function bc(e,t){let r=t.reactions;if(r!==null){var n=vl.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&tt)!==0&&(Ze===null||!Ze.includes(t))&&(Je(t,ir),(t.f&(yt|zn))===0&&(t.f^=zn),Do(t),Vn(t,0))}function Vn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)bc(e,r[n])}function vn(e){var t=e.f;if((t&$r)===0){Je(e,Ge);var r=te,n=qr;te=e,qr=!0;try{(t&Er)!==0?_c(e):Uo(e),Wo(e);var s=Xo(e);e.teardown=typeof s=="function"?s:null,e.wv=Yo;var a;_o&&Kl&&(e.f&it)!==0&&e.deps}finally{qr=n,te=r}}}async function wc(){await Promise.resolve(),Jl()}function i(e){var t=e.f,r=(t&tt)!==0;if(re!==null&&!St){var n=te!==null&&(te.f&$r)!==0;if(!n&&!Gt?.includes(e)){var s=re.deps;if((re.f&Cs)!==0)e.rv<fn&&(e.rv=fn,Ze===null&&s!==null&&s[at]===e?at++:Ze===null?Ze=[e]:(!Ft||!Ze.includes(e))&&Ze.push(e));else{(re.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[re]:a.includes(re)||a.push(re)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&yt)===0&&(o.f^=yt)}if(Tr){if(tr.has(e))return tr.get(e);if(r){o=e;var c=o.v;return((o.f&Ge)===0&&o.reactions!==null||Fo(o))&&(c=ta(o)),tr.set(o,c),c}}else r&&(o=e,rs(o)&&Ro(o));if((e.f&br)!==0)throw e.v;return e.v}function Fo(e){if(e.v===Le)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(tr.has(t)||(t.f&tt)!==0&&Fo(t))return!0;return!1}function Yr(e){var t=St;try{return St=!0,e()}finally{St=t}}const Sc=-7169;function Je(e,t){e.f=e.f&Sc|t}function xc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ec=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function kc(e){return Ec.includes(e)}const $c={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Pc(e){return e=e.toLowerCase(),$c[e]??e}const Tc=["touchstart","touchmove"];function Ac(e){return Tc.includes(e)}const ei=new Set,Rs=new Set;function ti(e,t,r,n={}){function s(a){if(n.capture||nn.call(t,a),!a.cancelBubble)return es(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Sr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Ra(e,t,r,n={}){var s=ti(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function ur(e){for(var t=0;t<e.length;t++)ei.add(e[t]);for(var r of Rs)r(e)}let Oa=null;function nn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;Oa=e;var o=0,l=Oa===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;c<=u&&(o=c)}if(a=s[o]||e.target,a!==t){Is(e,"currentTarget",{configurable:!0,get(){return a||r}});var f=re,h=te;et(null),Dt(null);try{for(var p,m=[];a!==null;){var _=a.assignedSlot||a.parentNode||a.host||null;try{var x=a["__"+n];if(x!=null&&(!a.disabled||e.target===a))if(Qn(x)){var[y,...w]=x;y.apply(a,[e,...w])}else x.call(a,e)}catch(T){p?m.push(T):p=T}if(e.cancelBubble||_===t||_===null)break;a=_}if(p){for(let T of m)queueMicrotask(()=>{throw T});throw p}}finally{e.__root=t,delete e.currentTarget,et(f),Dt(h)}}}function ri(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Ur(e,t){var r=te;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function P(e,t){var r=(t&Ll)!==0,n=(t&Bl)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=ri(a?e:"<!>"+e),r||(s=Wr(s)));var o=n||qo?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Wr(o),c=o.lastChild;Ur(l,c)}else Ur(o,o);return o}}function Nc(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=ri(s),l=Wr(o);a=Wr(l)}var c=a.cloneNode(!0);return Ur(c,c),c}}function Ic(e,t){return Nc(e,t,"svg")}function ot(e=""){{var t=lr(e+"");return Ur(t,t),t}}function U(){var e=document.createDocumentFragment(),t=document.createComment(""),r=lr();return e.append(t,r),Ur(t,r),e}function g(e,t){e!==null&&e.before(t)}function C(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Cc(e,t){return Mc(e,t)}const Dr=new Map;function Mc(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0}){lc();var l=new Set,c=h=>{for(var p=0;p<h.length;p++){var m=h[p];if(!l.has(m)){l.add(m);var _=Ac(m);t.addEventListener(m,nn,{passive:_});var x=Dr.get(m);x===void 0?(document.addEventListener(m,nn,{passive:_}),Dr.set(m,1)):Dr.set(m,x+1)}}};c(Ys(ei)),Rs.add(c);var u=void 0,f=pc(()=>{var h=r??t.appendChild(lr());return ec(h,{pending:()=>{}},p=>{if(a){G({});var m=Te;m.c=a}s&&(n.$$events=s),u=e(p,n)||{},a&&H()}),()=>{for(var p of l){t.removeEventListener(p,nn);var m=Dr.get(p);--m===0?(document.removeEventListener(p,nn),Dr.delete(p)):Dr.set(p,m)}Rs.delete(c),h!==r&&h.parentNode?.removeChild(h)}});return Dc.set(u,f),u}let Dc=new WeakMap;function R(e,t,r=!1){var n=e,s=null,a=null,o=Le,l=r?Pr:0,c=!1;const u=(m,_=!0)=>{c=!0,p(_,m)};var f=null;function h(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var m=o?s:a,_=o?a:s;m&&ts(m),_&&rr(_,()=>{o?a=null:s=null})}const p=(m,_)=>{if(o!==(o=m)){var x=ra(),y=n;if(x&&(f=document.createDocumentFragment(),f.append(y=lr())),o?s??=_&&Ue(()=>_(y)):a??=_&&Ue(()=>_(y)),x){var w=ye,T=o?s:a,A=o?a:s;T&&w.skipped_effects.delete(T),A&&w.skipped_effects.add(A),w.add_callback(h)}else h()}};cr(()=>{c=!1,t(u),c||p(null,null)},l)}function Lr(e,t){return t}function Rc(e,t,r){for(var n=e.items,s=[],a=t.length,o=0;o<a;o++)oa(t[o].e,s,!0);var l=a>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;cc(c),c.append(r),n.clear(),At(e,t[0].prev,t[a-1].next)}Ho(s,()=>{for(var u=0;u<a;u++){var f=t[u];l||(n.delete(f.k),At(e,f.prev,f.next)),Be(f.e,!l)}})}function Re(e,t,r,n,s,a=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&xo)!==0;if(c){var u=e;o=u.appendChild(lr())}var f=null,h=!1,p=new Map,m=ea(()=>{var w=r();return Qn(w)?w:w==null?[]:Ys(w)}),_,x;function y(){Oc(x,_,l,p,o,s,t,n,r),a!==null&&(_.length===0?f?ts(f):f=Ue(()=>a(o)):f!==null&&rr(f,()=>{f=null}))}cr(()=>{x??=te,_=i(m);var w=_.length;if(!(h&&w===0)){h=w===0;var T,A,E,k;if(ra()){var $=new Set,I=ye;for(A=0;A<w;A+=1){E=_[A],k=n(E,A);var S=l.items.get(k)??p.get(k);S?(t&(Zn|Jn))!==0&&ni(S,E,A,t):(T=si(null,l,null,null,E,k,A,s,t,r,!0),p.set(k,T)),$.add(k)}for(const[O,N]of l.items)$.has(O)||I.skipped_effects.add(N.e);I.add_callback(y)}else y();i(m)}})}function Oc(e,t,r,n,s,a,o,l,c){var u=(o&Il)!==0,f=(o&(Zn|Jn))!==0,h=t.length,p=r.items,m=r.first,_=m,x,y=null,w,T=[],A=[],E,k,$,I;if(u)for(I=0;I<h;I+=1)E=t[I],k=l(E,I),$=p.get(k),$!==void 0&&($.a?.measure(),(w??=new Set).add($));for(I=0;I<h;I+=1){if(E=t[I],k=l(E,I),$=p.get(k),$===void 0){var S=n.get(k);if(S!==void 0){n.delete(k),p.set(k,S);var O=y?y.next:_;At(r,y,S),At(r,S,O),ys(S,O,s),y=S}else{var N=_?_.e.nodes_start:s;y=si(N,r,y,y===null?r.first:y.next,E,k,I,a,o,c)}p.set(k,y),T=[],A=[],_=y.next;continue}if(f&&ni($,E,I,o),($.e.f&xt)!==0&&(ts($.e),u&&($.a?.unfix(),(w??=new Set).delete($))),$!==_){if(x!==void 0&&x.has($)){if(T.length<A.length){var Q=A[0],ce;y=Q.prev;var Ne=T[0],M=T[T.length-1];for(ce=0;ce<T.length;ce+=1)ys(T[ce],Q,s);for(ce=0;ce<A.length;ce+=1)x.delete(A[ce]);At(r,Ne.prev,M.next),At(r,y,Ne),At(r,M,Q),_=Q,y=M,I-=1,T=[],A=[]}else x.delete($),ys($,_,s),At(r,$.prev,$.next),At(r,$,y===null?r.first:y.next),At(r,y,$),y=$;continue}for(T=[],A=[];_!==null&&_.k!==k;)(_.e.f&xt)===0&&(x??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;$=_}T.push($),y=$,_=$.next}if(_!==null||x!==void 0){for(var Z=x===void 0?[]:Ys(x);_!==null;)(_.e.f&xt)===0&&Z.push(_),_=_.next;var pe=Z.length;if(pe>0){var z=(o&xo)!==0&&h===0?s:null;if(u){for(I=0;I<pe;I+=1)Z[I].a?.measure();for(I=0;I<pe;I+=1)Z[I].a?.fix()}Rc(r,Z,z)}}u&&Sr(()=>{if(w!==void 0)for($ of w)$.a?.apply()}),e.first=r.first&&r.first.e,e.last=y&&y.e;for(var J of n.values())Be(J.e);n.clear()}function ni(e,t,r,n){(n&Zn)!==0&&Vr(e.v,t),(n&Jn)!==0?Vr(e.i,r):e.i=r}function si(e,t,r,n,s,a,o,l,c,u,f){var h=(c&Zn)!==0,p=(c&Cl)===0,m=h?p?oc(s,!1,!1):ar(s):s,_=(c&Jn)===0?o:ar(o),x={i:_,v:m,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var y=document.createDocumentFragment();y.append(e=lr())}return x.e=Ue(()=>l(e,m,_,u),Gl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?f||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function ys(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var o=xn(a);s.before(a),a=o}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ae(e,t,...r){var n=e,s=ne,a;cr(()=>{s!==(s=t())&&(a&&(Be(a),a=null),a=Ue(()=>s(n,...r)))},Pr)}function Rn(e,t,r){var n=e,s,a,o=null,l=null;function c(){a&&(rr(a),a=null),o&&(o.lastChild.remove(),n.before(o),o=null),a=l,l=null}cr(()=>{if(s!==(s=t())){var u=ra();if(s){var f=n;u&&(o=document.createDocumentFragment(),o.append(f=lr()),a&&ye.skipped_effects.add(a)),l=Ue(()=>r(f,s))}u?ye.add_callback(c):c()}},Pr)}function qc(e,t,r,n,s,a){var o,l,c=null,u=e,f;cr(()=>{const h=t()||null;var p=zl;h!==o&&(f&&(h===null?rr(f,()=>{f=null,l=null}):h===l?ts(f):Be(f)),h&&h!==l&&(f=Ue(()=>{if(c=document.createElementNS(p,h),Ur(c,c),n){var m=c.appendChild(lr());n(c,m)}te.nodes_end=c,u.before(c)})),o=h,o&&(l=o))},Pr)}function Lc(e,t){var r=void 0,n;cr(()=>{r!==(r=t())&&(n&&(Be(n),n=null),r&&(n=Ue(()=>{sa(()=>r(e))})))})}function ai(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ai(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Bc(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ai(e))&&(n&&(n+=" "),n+=t);return n}function oi(e){return typeof e=="object"?Bc(e):e??""}const qa=[...` 	
\r\f \v\uFEFF`];function jc(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+a;(o===0||qa.includes(n[o-1]))&&(l===n.length||qa.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function La(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function bs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function zc(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(bs)),s&&c.push(...Object.keys(s).map(bs));var u=0,f=-1;const x=e.length;for(var h=0;h<x;h++){var p=e[h];if(l?p==="/"&&e[h-1]==="*"&&(l=!1):a?a===p&&(a=!1):p==="/"&&e[h+1]==="*"?l=!0:p==='"'||p==="'"?a=p:p==="("?o++:p===")"&&o--,!l&&a===!1&&o===0){if(p===":"&&f===-1)f=h;else if(p===";"||h===x-1){if(f!==-1){var m=bs(e.substring(u,f).trim());if(!c.includes(m)){p!==";"&&h++;var _=e.substring(u,h).trim();r+=" "+_+";"}}u=h+1,f=-1}}}}return n&&(r+=La(n)),s&&(r+=La(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var l=jc(r,n,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var u=!!a[c];(s==null||u!==!!s[c])&&e.classList.toggle(c,u)}return a}function ws(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function Vc(e,t,r,n){var s=e.__style;if(s!==t){var a=zc(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(ws(e,r?.[0],n[0]),ws(e,r?.[1],n[1],"important")):ws(e,r,n));return n}function Wn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Qn(t))return Wl();for(var n of e.options)n.selected=t.includes(on(n));return}for(n of e.options){var s=on(n);if(ic(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ii(e){var t=new MutationObserver(()=>{Wn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),jo(()=>{t.disconnect()})}function Os(e,t,r=t){var n=!0;na(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),on);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&on(l)}r(o)}),sa(()=>{var s=t();if(Wn(e,s,n),n&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=on(a),r(s))}e.__value=s,n=!1}),ii(e)}function on(e){return"__value"in e?e.__value:e.value}const en=Symbol("class"),tn=Symbol("style"),li=Symbol("is custom element"),ci=Symbol("is html");function ia(e,t){var r=ns(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Br(e,t){var r=ns(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Wc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Un(e,t,r,n){var s=ns(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[bl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ui(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Uc(e,t,r,n,s=!1,a=!1){var o=ns(e),l=o[li],c=!o[ci],u=t||{},f=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=oi(r.class):r[en]&&(r.class=null),r[tn]&&(r.style??=null);var p=ui(e);for(const E in r){let k=r[E];if(f&&E==="value"&&k==null){e.value=e.__value="",u[E]=k;continue}if(E==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,m,k,n,t?.[en],r[en]),u[E]=k,u[en]=r[en];continue}if(E==="style"){Vc(e,k,t?.[tn],r[tn]),u[E]=k,u[tn]=r[tn];continue}var _=u[E];if(!(k===_&&!(k===void 0&&e.hasAttribute(E)))){u[E]=k;var x=E[0]+E[1];if(x!=="$$")if(x==="on"){const $={},I="$$"+E;let S=E.slice(2);var y=kc(S);if(xc(S)&&(S=S.slice(0,-7),$.capture=!0),!y&&_){if(k!=null)continue;e.removeEventListener(S,u[I],$),u[I]=null}if(k!=null)if(y)e[`__${S}`]=k,ur([S]);else{let O=function(N){u[E].call(this,N)};var A=O;u[I]=ti(S,e,O,$)}else y&&(e[`__${S}`]=void 0)}else if(E==="style")Un(e,E,k);else if(E==="autofocus")uc(e,!!k);else if(!l&&(E==="__value"||E==="value"&&k!=null))e.value=e.__value=k;else if(E==="selected"&&f)Wc(e,k);else{var w=E;c||(w=Pc(w));var T=w==="defaultValue"||w==="defaultChecked";if(k==null&&!l&&!T)if(o[E]=null,w==="value"||w==="checked"){let $=e;const I=t===void 0;if(w==="value"){let S=$.defaultValue;$.removeAttribute(w),$.defaultValue=S,$.value=$.__value=I?S:null}else{let S=$.defaultChecked;$.removeAttribute(w),$.defaultChecked=S,$.checked=I?S:!1}}else e.removeAttribute(E);else T||p.includes(w)&&(l||typeof k!="string")?(e[w]=k,w in o&&(o[w]=Le)):typeof k!="function"&&Un(e,w,k)}}}return u}function Ba(e,t,r=[],n=[],s,a=!1,o=!1){Co(r,n,l=>{var c=void 0,u={},f=e.nodeName==="SELECT",h=!1;if(cr(()=>{var m=t(...l.map(i)),_=Uc(e,c,m,s,a,o);h&&f&&"value"in m&&Wn(e,m.value);for(let y of Object.getOwnPropertySymbols(u))m[y]||Be(u[y]);for(let y of Object.getOwnPropertySymbols(m)){var x=m[y];y.description===Vl&&(!c||x!==c[y])&&(u[y]&&Be(u[y]),u[y]=Ue(()=>Lc(e,()=>x))),_[y]=x}c=_}),f){var p=e;sa(()=>{Wn(p,c.value,!0),ii(p)})}h=!0})}function ns(e){return e.__attributes??={[li]:e.nodeName.includes("-"),[ci]:e.namespaceURI===jl}}var ja=new Map;function ui(e){var t=e.getAttribute("is")||e.nodeName,r=ja.get(t);if(r)return r;ja.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=hl(s);for(var o in n)n[o].set&&r.push(o);s=go(s)}return r}function Ye(e,t,r=t){var n=new WeakSet;na(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Ss(e)?xs(a):a,r(a),ye!==null&&n.add(ye),await wc(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Yr(t)==null&&e.value&&(r(Ss(e)?xs(e.value):e.value),ye!==null&&n.add(ye)),aa(()=>{var s=t();if(e===document.activeElement){var a=Dn??ye;if(n.has(a))return}Ss(e)&&s===xs(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Gc(e,t,r=t){na(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Yr(t)==null&&r(e.checked),aa(()=>{var n=t();e.checked=!!n})}function Ss(e){var t=e.type;return t==="number"||t==="range"}function xs(e){return e===""?null:+e}let Mn=!1;function Hc(e){var t=Mn;try{return Mn=!1,[e(),Mn]}finally{Mn=t}}const Kc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t,r){return new Proxy({props:e,exclude:t},Kc)}const Qc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Fr(s)&&(s=s());const a=er(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=er(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===wr||t===wo)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ie(...e){return new Proxy({props:e},Qc)}function Rr(e,t,r,n){var s=!Qr||(r&Dl)!==0,a=(r&Ol)!==0,o=(r&ql)!==0,l=n,c=!0,u=()=>(c&&(c=!1,l=o?Yr(n):n),l),f;if(a){var h=wr in e||wo in e;f=er(e,t)?.set??(h&&t in e?A=>e[t]=A:void 0)}var p,m=!1;a?[p,m]=Hc(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=u(),f&&(s&&$l(),f(p)));var _;if(s?_=()=>{var A=e[t];return A===void 0?u():(c=!0,A)}:_=()=>{var A=e[t];return A!==void 0&&(l=void 0),A===void 0?l:A},s&&(r&Rl)===0)return _;if(f){var x=e.$$legacy;return(function(A,E){return arguments.length>0?((!s||!E||x||m)&&f(E?_():A),A):_()})}var y=!1,w=((r&Ml)!==0?Fn:ea)(()=>(y=!1,_()));a&&i(w);var T=te;return(function(A,E){if(arguments.length>0){const k=E?i(w):s&&a?_t(A):A;return D(w,k),y=!0,l!==void 0&&(l=k),A}return Tr&&y||(T.f&$r)!==0?w.v:i(w)})}function di(e){Te===null&&So(),Qr&&Te.l!==null?Zc(Te).m.push(e):zo(()=>{const t=Yr(e);if(typeof t=="function")return t})}function Yc(e){Te===null&&So(),di(()=>()=>Yr(e))}function Zc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Jc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Jc);class Xc extends Map{#t=new Map;#r=se(0);#l=se(0);#c=Ht||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#l.v=super.size}}#a(t){return Ht===this.#c?se(t):ar(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#n(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#t,s=n.get(t),a=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#a(0),n.set(t,s),D(this.#l,super.size),It(l);else if(a!==r){It(s);var c=l.reactions===null?null:new Set(l.reactions),u=c===null||!s.reactions?.every(f=>c.has(f));u&&It(l)}return o}delete(t){var r=this.#t,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),D(this.#l,super.size),D(n,-1),It(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#t;D(this.#l,0);for(var r of t.values())D(r,-1);It(this.#r),t.clear()}}#n(){i(this.#r);var t=this.#t;if(this.#l.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#a(0);t.set(r,n)}}for([,n]of this.#t)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#n(),super.values()}entries(){return this.#n(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#l),super.size}}class Fc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class fi{constructor(t){this.generateIdentifier=t,this.kv=new Fc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class eu extends fi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function tu(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ru(e,t){const r=tu(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const a=n[s];if(t(a))return a}}function Gr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function On(e,t){return e.indexOf(t)!==-1}function za(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class nu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ru(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const su=e=>Object.prototype.toString.call(e).slice(8,-1),vi=e=>typeof e>"u",au=e=>e===null,hn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,qs=e=>hn(e)&&Object.keys(e).length===0,or=e=>Array.isArray(e),ou=e=>typeof e=="string",iu=e=>typeof e=="number"&&!isNaN(e),lu=e=>typeof e=="boolean",cu=e=>e instanceof RegExp,pn=e=>e instanceof Map,mn=e=>e instanceof Set,hi=e=>su(e)==="Symbol",uu=e=>e instanceof Date&&!isNaN(e.valueOf()),du=e=>e instanceof Error,Va=e=>typeof e=="number"&&isNaN(e),fu=e=>lu(e)||au(e)||vi(e)||iu(e)||ou(e)||hi(e),vu=e=>typeof e=="bigint",hu=e=>e===1/0||e===-1/0,pu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),mu=e=>e instanceof URL,pi=e=>e.replace(/\./g,"\\."),Es=e=>e.map(String).map(pi).join("."),ln=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let a=e.charAt(s);if(a==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(a==="."){t.push(r),r="";continue}r+=a}const n=r;return t.push(n),t};function Tt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const mi=[Tt(vi,"undefined",()=>null,()=>{}),Tt(vu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Tt(uu,"Date",e=>e.toISOString(),e=>new Date(e)),Tt(du,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Tt(cu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Tt(mn,"set",e=>[...e.values()],e=>new Set(e)),Tt(pn,"map",e=>[...e.entries()],e=>new Map(e)),Tt(e=>Va(e)||hu(e),"number",e=>Va(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Tt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Tt(mu,"URL",e=>e.toString(),e=>new URL(e))];function ss(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const _i=ss((e,t)=>hi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),_u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),gi=ss(pu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=_u[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function yi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const bi=ss(yi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),wi=ss((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),gu=[bi,_i,wi,gi],Wa=(e,t)=>{const r=za(gu,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=za(mi,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Si={};mi.forEach(e=>{Si[e.annotation]=e});const yu=(e,t,r)=>{if(or(t))switch(t[0]){case"symbol":return _i.untransform(e,t,r);case"class":return bi.untransform(e,t,r);case"custom":return wi.untransform(e,t,r);case"typed-array":return gi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Si[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Or=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function xi(e){if(On(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(On(e,"prototype"))throw new Error("prototype is not allowed as a property");if(On(e,"constructor"))throw new Error("constructor is not allowed as a property")}const bu=(e,t)=>{xi(t);for(let r=0;r<t.length;r++){const n=t[r];if(mn(e))e=Or(e,+n);else if(pn(e)){const s=+n,a=+t[++r]==0?"key":"value",o=Or(e,s);switch(a){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Ls=(e,t,r)=>{if(xi(t),t.length===0)return r(e);let n=e;for(let a=0;a<t.length-1;a++){const o=t[a];if(or(n)){const l=+o;n=n[l]}else if(hn(n))n=n[o];else if(mn(n)){const l=+o;n=Or(n,l)}else if(pn(n)){if(a===t.length-2)break;const c=+o,u=+t[++a]==0?"key":"value",f=Or(n,c);switch(u){case"key":n=f;break;case"value":n=n.get(f);break}}}const s=t[t.length-1];if(or(n)?n[+s]=r(n[+s]):hn(n)&&(n[s]=r(n[s])),mn(n)){const a=Or(n,+s),o=r(a);a!==o&&(n.delete(a),n.add(o))}if(pn(n)){const a=+t[t.length-2],o=Or(n,a);switch(+s==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Bs(e,t,r=[]){if(!e)return;if(!or(e)){Gr(e,(a,o)=>Bs(a,t,[...r,...ln(o)]));return}const[n,s]=e;s&&Gr(s,(a,o)=>{Bs(a,t,[...r,...ln(o)])}),t(n,r)}function wu(e,t,r){return Bs(t,(n,s)=>{e=Ls(e,s,a=>yu(a,n,r))}),e}function Su(e,t){function r(n,s){const a=bu(e,ln(s));n.map(ln).forEach(o=>{e=Ls(e,o,()=>a)})}if(or(t)){const[n,s]=t;n.forEach(a=>{e=Ls(e,ln(a),()=>e)}),s&&Gr(s,r)}else Gr(t,r);return e}const xu=(e,t)=>hn(e)||or(e)||pn(e)||mn(e)||yi(e,t);function Eu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function ku(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[a,...o]=s;a.length===0?n=o.map(Es):r[Es(a)]=o.map(Es)}),n?qs(r)?[n]:[n,r]:qs(r)?void 0:r}const Ei=(e,t,r,n,s=[],a=[],o=new Map)=>{const l=fu(e);if(!l){Eu(e,s,t);const m=o.get(e);if(m)return n?{transformedValue:null}:m}if(!xu(e,r)){const m=Wa(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||o.set(e,_),_}if(On(a,e))return{transformedValue:null};const c=Wa(e,r),u=c?.value??e,f=or(u)?[]:{},h={};Gr(u,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const x=Ei(m,t,r,n,[...s,_],[...a,e],o);f[_]=x.transformedValue,or(x.annotations)?h[_]=x.annotations:hn(x.annotations)&&Gr(x.annotations,(y,w)=>{h[pi(_)+"."+w]=y})});const p=qs(h)?{transformedValue:f,annotations:c?[c.type]:void 0}:{transformedValue:f,annotations:c?[c.type,h]:h};return l||o.set(e,p),p};function ki(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ua(e){return ki(e)==="Array"}function $u(e){if(ki(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Pu(e,t,r,n,s){const a={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";a==="enumerable"&&(e[t]=r),s&&a==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function js(e,t={}){if(Ua(e))return e.map(s=>js(s,t));if(!$u(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,a)=>{if(Ua(t.props)&&!t.props.includes(a))return s;const o=e[a],l=js(o,t);return Pu(s,a,l,e,t.nonenumerable),s},{})}class F{constructor({dedupe:t=!1}={}){this.classRegistry=new eu,this.symbolRegistry=new fi(r=>r.description??""),this.customTransformerRegistry=new nu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Ei(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const a=ku(r,this.dedupe);return a&&(s.meta={...s.meta,referentialEqualities:a}),s}deserialize(t){const{json:r,meta:n}=t;let s=js(r);return n?.values&&(s=wu(s,n.values,this)),n?.referentialEqualities&&(s=Su(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}F.defaultInstance=new F;F.serialize=F.defaultInstance.serialize.bind(F.defaultInstance);F.deserialize=F.defaultInstance.deserialize.bind(F.defaultInstance);F.stringify=F.defaultInstance.stringify.bind(F.defaultInstance);F.parse=F.defaultInstance.parse.bind(F.defaultInstance);F.registerClass=F.defaultInstance.registerClass.bind(F.defaultInstance);F.registerSymbol=F.defaultInstance.registerSymbol.bind(F.defaultInstance);F.registerCustom=F.defaultInstance.registerCustom.bind(F.defaultInstance);F.allowErrorProps=F.defaultInstance.allowErrorProps.bind(F.defaultInstance);F.serialize;F.deserialize;F.stringify;F.parse;F.registerClass;F.registerCustom;F.registerSymbol;F.allowErrorProps;function Tu(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Au(e,t){return`${e}_${t}`}const Nu=typeof window<"u"?window:void 0;function Iu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Cu{#t;#r;constructor(t={}){const{window:r=Nu,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Io(s=>{const a=Ra(r,"focusin",s),o=Ra(r,"focusout",s);return()=>{a(),o()}}))}get current(){return this.#r?.(),this.#t?Iu(this.#t):null}}new Cu;function Mu(e){return typeof e=="function"}function Du(e,t){if(Mu(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Ru(e,t){let r=se(null);const n=B(()=>Du(t,250));function s(...a){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const c=new Promise((u,f)=>{o=u,l=f});D(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);D(r,null);try{o.resolve(await e.apply(this,a))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return s.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),D(r,null))},s.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),s}let Ou=se(null),qu=se(null);const Lu={get firstDate(){return i(Ou)},get lastDate(){return i(qu)}};function Bu(e,t,r){if(!t||!r||!e.length)return 0;const n=new Date(t),s=new Date(r);return e.filter(a=>{const o=new Date(a.dateTimeService);return o>=n&&o<=s}).reduce((a,o)=>{const l=Number(o.neededConsolidatedForDate[0]?.quantity||0);return a+l},0)}function ju(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class b{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var $i,Pi;class _n{static custom(t){return t}static unique(t=7){const r=ju(_n,$i,"m",Pi).call(_n);let n="";for(let s=0;s<t;s++){const a=Math.floor(Math.random()*16).toString(16);n+=a}return r+n}}$i=_n,Pi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ga;(function(e){e.Totp="totp"})(Ga||(Ga={}));var Ha;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ha||(Ha={}));var Ka;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ka||(Ka={}));var Qa;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Qa||(Qa={}));var Ya;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ya||(Ya={}));var Za;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Za||(Za={}));var Ja;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ja||(Ja={}));var Xa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Xa||(Xa={}));var Fa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Fa||(Fa={}));async function Zt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function zu(e,t={}){const{limit:r=100,orderBy:n="productName",orderDirection:s="asc"}=t;try{const{databases:a,config:o}=await Zt(),l=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(n==="productName"?"productName":"$updatedAt"),b.limit(r),b.select(["*","purchases.*"])]),u=l.documents;return console.log(`[Appwrite Interactions] ${l.documents.length} produits chargés avec achats`),u}catch(a){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${o}`)}}async function zs(e){try{const{databases:t,config:r}=await Zt();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[b.equal("$id",e),b.select(["*","purchases.*"])])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function Vu(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{allProducts:[]};try{const{databases:s,config:a}=await Zt(),[o,l]=await Promise.all([s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.select(["*","purchases.*"]),b.limit(n)]),s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.select(["products.$id"]),b.limit(n)])]);let c=o.documents;const u=new Set(c.map(f=>f.$id));if(l.documents.length>0){const f=l.documents.flatMap(h=>Array.isArray(h.products)?h.products.map(p=>p.$id):[]).filter((h,p,m)=>m.indexOf(h)===p).filter(h=>!u.has(h));if(console.log(`[Appwrite Interactions] Affected products from purchases: ${f.length}`),console.log("[Appwrite Interactions] Affected product IDs:",f),f.length>0)try{console.log("[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",f);const h=await zs(f);console.log(`[Appwrite Interactions] Reloaded ${h.length} products:`,JSON.stringify(h,null,2)),c=[...c,...h]}catch(h){throw console.error("[Appwrite Interactions] Erreur lors du rechargement des products:",h),h}}return c.length>0&&console.log(`[Appwrite Interactions] Sync total: ${c.length} produits synchronisés`),{allProducts:c}}catch(s){console.error(`[Appwrite Interactions] Erreur sync pour mainId ${e}:`,s);const a=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${a}`)}}async function la(e,t){try{const{databases:r,config:n}=await Zt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Wu(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await la(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function eo(e,t){return la(e,{who:t})}async function to(e,t){return la(e,{stockReel:t})}async function Uu(e){try{const{databases:t,config:r}=await Zt(),a=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:a.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,_n.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Gu(e,t){try{const{databases:r,config:n}=await Zt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),a={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,a);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,a),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Hu(e){try{const{databases:t,config:r}=await Zt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ku(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Zt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[b.equal("$id",e),b.select(["*","products"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Qu(e,t={}){let r=null;const n=a=>{const{events:o,payload:l}=a;if(!l)return;const c=o.some(m=>m.includes("products.")),u=o.some(m=>m.includes("purchases.")),f=o.some(m=>m.includes(".create")),h=o.some(m=>m.includes(".update")),p=o.some(m=>m.includes(".delete"));if(c){const m=l;f&&t.onProductCreate?t.onProductCreate(m):h&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(u){const m=l;f&&t.onPurchaseCreate?t.onPurchaseCreate(m):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:a=>{console.error("[Appwrite Interactions] Erreur realtime:",a),t.onError?.(a)}}))}catch(a){console.error("[Appwrite Interactions] Impossible de configurer realtime:",a),t.onError?.(a)}})(),()=>{r&&(r(),r=null)}}async function Yu(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Zt(),r=window.AppwriteClient.getConfig(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,[b.equal("mainId",e)]);if(n.documents.length===0)return console.warn(`[Appwrite Interactions] Aucune donnée principale trouvée pour mainId: ${e}`),null;const s=n.documents[0];return console.log(`[Appwrite Interactions] Données principales chargées pour: ${s.name}`),s}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Zu(e){try{console.log(`[Appwrite Interactions] Chargement des dates pour mainId: ${e}`);const t=await Yu(e);if(!t||!t.allDates)return console.warn(`[Appwrite Interactions] Aucune date trouvée pour mainId: ${e}`),[];const r=F.parse(t.allDates);return console.log(`[Appwrite Interactions] ${r.length} dates chargées pour mainId: ${e}`),r}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement des dates pour mainId ${e}:`,t),[]}}const ro=1e3,Ju=500;class Xu{#t=new Xc;#r=se(null);#l=se(!1);#c=se(!1);#a=se(null);#n=se(!1);#o=se(!1);#i=se(_t([]));#s=se(null);#u=null;#v=null;#f=null;#d=null;#e=se(_t({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#e)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#l)}get loading(){return i(this.#c)}get error(){return i(this.#a)}get allDates(){return i(this.#i)}get syncing(){return i(this.#n)}get realtimeConnected(){return i(this.#o)}get lastSync(){return i(this.#s)}#b=B(()=>Array.from(this.#t.values()));get enrichedProducts(){return i(this.#b)}set enrichedProducts(t){D(this.#b,t)}#w=B(()=>{const{firstDate:t,lastDate:r}=Lu;if(!t||!r)return new Map;const n=new Map;return this.enrichedProducts.forEach(s=>{const a=Bu(s.neededConsolidatedByDateArray,t,r);a>0&&n.set(s.$id,a)}),n});get totalNeededByDateRange(){return i(this.#w)}set totalNeededByDateRange(t){D(this.#w,t)}#x=B(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#x)}set stats(t){D(this.#x,t)}#E=B(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#E)}set uniqueStores(t){D(this.#E,t)}#p=B(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#p)}set uniqueWho(t){D(this.#p,t)}#m=B(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#m)}set uniqueProductTypes(t){D(this.#m,t)}#y=B(()=>this.enrichedProducts.filter(t=>this.#O(t)));get filteredProducts(){return i(this.#y)}set filteredProducts(t){D(this.#y,t)}#T=B(()=>{const t=this.filteredProducts;return i(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#T)}set filteredGroupedProducts(t){D(this.#T,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#l)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),D(this.#r,t,!0),this.#u=Au("products-enriched",t);try{D(this.#i,await Zu(t),!0),await this.#C(),this.#t.size===0?await this.#A(t):await this.#M(),D(this.#l,!0);const r=this.#R();this.#f=Qu(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw D(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}}async#C(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n}=F.parse(t);r.forEach(([s,a])=>this.#t.set(s,a)),D(this.#s,n,!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#k(){if(this.#u)try{const t={lastSync:i(this.#s),products:Array.from(this.#t.entries())};localStorage.setItem(this.#u,F.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}async#A(t){D(this.#c,!0),D(this.#a,null);try{const n=await zu(t,{limit:ro,orderBy:"productName",orderDirection:"asc"});n.forEach(s=>{const a=this.#_(s);this.#t.set(s.$id,a)}),this.#h(),this.#k(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw D(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}finally{D(this.#c,!1)}}async#M(){if(!(!i(this.#s)||!i(this.#r))){D(this.#n,!0);try{const t={lastSync:i(this.#s),limit:ro},{allProducts:r}=await Vu(i(this.#r),t);r.length>0&&(r.forEach(n=>{const s=this.#_(n);this.#t.set(n.$id,s)}),console.log(`[ProductsStore] ${r.length} produits appliqués du sync`)),r.length>0&&(this.#h(),this.#k(),console.log(`[ProductsStore] Sync complétée: ${r.length} produits`))}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{D(this.#n,!1)}}}#_(t){const r=this.#L(t.purchases??[]),n=t.totalNeededConsolidated?this.#q(t.totalNeededConsolidated):[],{numeric:s,display:a}=this.#B(n,r),o=this.#S(t.stockReel)??[],l=t.neededConsolidatedByDate?this.#S(t.neededConsolidatedByDate)??[]:[],c=this.#I(r),u=o&&o.length>0?`${o[o.length-1].quantity} ${o[o.length-1].unit}`:c;return{...t,storeInfo:t.store?this.#S(t.store):null,totalNeededArray:n,totalPurchasesArray:r,recipesArray:this.#S(t.recipesOccurrences)??[],stockArray:o,stockOrTotalPurchases:u,missingQuantityArray:s,neededConsolidatedByDateArray:l,displayTotalNeeded:this.#I(n),displayTotalPurchases:c,displayMissingQuantity:a}}#$(t){const r=this.#_(t);this.#t.set(t.$id,r)}#D(t){this.#t.delete(t)}async#j(t){if(!t?.length)return;const r=new Set(t.filter(n=>n.products?.length>0).flatMap(n=>n.products).map(n=>typeof n=="string"?n:n.$id).filter(Boolean));if(r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await zs(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(s=>{const a=this.#_(s);this.#t.set(s.$id,a)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#N(t){if(!t?.length)return;const r=new Set,n=[],s=t.filter(o=>o.products?.length>0);if(n.push(...t.filter(o=>!o.products?.length)),s.flatMap(o=>o.products).map(o=>typeof o=="string"?o:o.$id).filter(Boolean).forEach(o=>r.add(o)),n.length>0){console.log(`[ProductsStore] ${n.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);try{(await Ku(n.map(l=>l.$id))).forEach(l=>{if(l.products?.length>0){l.products.map(f=>typeof f=="string"?f:f.$id).filter(Boolean).forEach(f=>r.add(f));const u=t.findIndex(f=>f.$id===l.$id);u>=0&&(t[u]=l)}})}catch(o){console.error("[ProductsStore] Erreur rechargement ciblé des purchases:",o)}}if(r.size!==0){for(const o of r){const l=this.#t.get(o);if(l){let c=l.purchases||[];t.forEach(f=>{const h=c.findIndex(p=>p.$id===f.$id);h>=0?c[h]=f:c.push(f)});const u=this.#_({...l,purchases:c});this.#t.set(o,u)}}try{(await zs(Array.from(r))).forEach(l=>{const c=this.#_(l);this.#t.set(l.$id,c)})}catch(o){console.warn("[ProductsStore] Erreur rechargement async:",o)}}}#R(){return{onProductCreate:t=>{this.#$(t),this.#h(),this.#g()},onProductUpdate:t=>{this.#$(t),this.#h(),this.#g()},onProductDelete:t=>{this.#D(t),this.#h(),this.#g()},onPurchaseCreate:t=>{this.#N([t]),this.#h(),this.#g()},onPurchaseUpdate:t=>{this.#N([t]),this.#h(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#$(n)}),this.#h(),this.#g()},onConnect:()=>{D(this.#o,!0)},onDisconnect:()=>{D(this.#o,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#g(){this.#d&&clearTimeout(this.#d),this.#d=setTimeout(()=>{this.#k(),this.#d=null},Ju)}#h(){D(this.#s,new Date().toISOString(),!0)}#O(t){if(i(this.#e).searchQuery.trim()){const r=i(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#e).selectedStores.includes(t.storeInfo.storeName))||i(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#e).selectedWho.includes(r)))||i(this.#e).selectedProductTypes.length>0&&(!t.productType||!i(this.#e).selectedProductTypes.includes(t.productType))||i(this.#e).selectedTemperatures.length>0&&!(i(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Ru(t=>{i(this.#e).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#e).selectedProductTypes.indexOf(t);r>-1?i(this.#e).selectedProductTypes.splice(r,1):i(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#e).selectedTemperatures.indexOf(t);r>-1?i(this.#e).selectedTemperatures.splice(r,1):i(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#e).selectedProductTypes=[],i(this.#e).selectedTemperatures=[]}setGroupBy(t){i(this.#e).groupBy=t}toggleStore(t){const r=i(this.#e).selectedStores.indexOf(t);r>-1?i(this.#e).selectedStores.splice(r,1):i(this.#e).selectedStores.push(t)}toggleWho(t){const r=i(this.#e).selectedWho.indexOf(t);r>-1?i(this.#e).selectedWho.splice(r,1):i(this.#e).selectedWho.push(t)}clearStoreFilters(){i(this.#e).selectedStores=[]}clearWhoFilters(){i(this.#e).selectedWho=[]}handleSort(t){i(this.#e).sortColumn===t?i(this.#e).sortDirection=i(this.#e).sortDirection==="asc"?"desc":"asc":(i(this.#e).sortColumn=t,i(this.#e).sortDirection="asc")}clearFilters(){D(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[i(this.#e).sortColumn],a=n[i(this.#e).sortColumn];return i(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,a=parseFloat(a)||0):i(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,a=n.purchases?.length||0),s<a?i(this.#e).sortDirection==="asc"?-1:1:s>a?i(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??0}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.#t.clear(),D(this.#s,null),await this.#A(t)}clearCache(){this.#t.clear(),D(this.#s,null),this.#u&&localStorage.removeItem(this.#u),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#f?.(),this.#f=null,this.#d&&(clearTimeout(this.#d),this.#d=null),console.log("[ProductsStore] Ressources nettoyées")}#S(t){if(!t?.trim())return null;try{return F.parse(t)}catch(r){return console.warn("[ProductsStore] Erreur parsing JSON avec superjson:",r),null}}#q(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#L(t){if(!t?.length)return[];const r=new Map;return t.forEach(n=>{if(!n.quantity||!n.unit)return;const s=parseFloat(n.quantity);if(isNaN(s))return;const a=r.get(n.unit)||0;r.set(n.unit,a+s)}),Array.from(r.entries()).map(([n,s])=>({quantity:s,unit:n}))}#B(t,r){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!r?.length){const c=t.map(u=>this.#P(u.quantity.toString(),u.unit)).join(" et ");return{numeric:t,display:c}}const n=new Map,s=new Map;t.forEach(c=>{const u=parseFloat(c.quantity);isNaN(u)||n.set(c.unit,(n.get(c.unit)||0)+u)}),r.forEach(c=>{s.set(c.unit,(s.get(c.unit)||0)+c.quantity)});const a=[],o=[];n.forEach((c,u)=>{const f=s.get(u)||0,h=c-f;h>0&&(a.push({quantity:h,unit:u}),o.push(this.#P(h.toString(),u)))});const l=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:l}}#I(t){return t?.length?t.map(r=>this.#P(r.quantity.toString(),r.unit)).join(" et "):"-"}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,a=r==="gr."?"kg":"l.";let l=(Math.round(s*100)/100).toString();return l.endsWith(",0")&&(l=l.slice(0,-2)),l.endsWith(",00")&&(l=l.slice(0,-3)),`${l} ${a}`}if(!["gr.","ml","kg","l."].includes(r)){let a=(Math.round(n*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${r}`}return`${n} ${r}`}}const q=new Xu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Fu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ed=Ic("<svg><!><!></svg>");function le(e,t){G(t,!0);const r=Rr(t,"color",3,"currentColor"),n=Rr(t,"size",3,24),s=Rr(t,"strokeWidth",3,2),a=Rr(t,"absoluteStrokeWidth",3,!1),o=Rr(t,"iconNode",19,()=>[]),l=oe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ed();Ba(c,h=>({...Fu,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(s())*24/Number(n()):s()]);var u=d(c);Re(u,17,o,Lr,(h,p)=>{var m=B(()=>bo(i(p),2));let _=()=>i(m)[0],x=()=>i(m)[1];var y=U(),w=j(y);qc(w,_,!0,(T,A)=>{Ba(T,()=>({...x()}))}),g(h,y)});var f=v(u);ae(f,()=>t.children??ne),g(e,c),H()}function Vs(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];le(e,ie({name:"archive"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function td(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];le(e,ie({name:"bean"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function rd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];le(e,ie({name:"beef"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function nd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];le(e,ie({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function sd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];le(e,ie({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function ad(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];le(e,ie({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function od(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(e,ie({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function id(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(e,ie({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function ld(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];le(e,ie({name:"combine"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function ca(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];le(e,ie({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function cd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];le(e,ie({name:"egg"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Ws(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(e,ie({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function no(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];le(e,ie({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function ud(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];le(e,ie({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function dd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];le(e,ie({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function fd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];le(e,ie({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function vd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];le(e,ie({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function as(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(e,ie({name:"package"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function hd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];le(e,ie({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function pd(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(e,ie({name:"save"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function md(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(e,ie({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function qn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];le(e,ie({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Gn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];le(e,ie({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Ln(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];le(e,ie({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Ti(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(e,ie({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function gn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];le(e,ie({name:"store"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Ai(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function ua(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];le(e,ie({name:"user"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Ni(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];le(e,ie({name:"users"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function _d(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];le(e,ie({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function Ii(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];le(e,ie({name:"weight"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}function gt(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(e,ie({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=U(),l=j(o);ae(l,()=>t.children??ne),g(s,o)},$$slots:{default:!0}})),H()}const Mt=_t({product:{id:"",isOpen:!1,tab:"recettes"}});function gd(e,t){Mt.product.tab=e,Mt.product.isOpen=!0,Mt.product.id=t}function so(){Mt.product.isOpen=!1,Mt.product.tab="",Mt.product.id=""}let ao=()=>localStorage.getItem("appwrite-user-name")||"";function Bn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:td};case"animaux":return{displayName:"Viandes et Poissons",icon:rd};case"legumes":return{displayName:"Fruits et Légumes",icon:sd};case"sucres":return{displayName:"Sucrées",icon:nd};case"lof":return{displayName:"L.O.F",icon:cd};case"autres":return{displayName:"Autres",icon:ad};case"epices":return{displayName:"Assaisonnements",icon:ud};case"frais":return{displayName:"Produits Frais",icon:hd};default:return{displayName:e,icon:as}}}function oo(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Ci(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function yn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function yd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function bd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],a=n[t.sortColumn];return s<a?t.sortDirection==="asc"?-1:1:s>a?t.sortDirection==="asc"?1:-1:0}):e}function wd(e){let t=se(!1),r=se(null),n=se("recettes");const s=B(()=>q.getEnrichedProductById(e)),a=B(()=>i(s)?.recipesArray??[]),o=B(()=>i(s)?.who??[]),l=B(()=>i(s)?.stockArray??[]),c=B(()=>i(s)?.purchases??[]),u=_t({purchase:{quantity:null,unit:"",store:"",who:ao()??"",price:null,notes:""},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});zo(()=>{i(s)&&(u.purchase.quantity=i(s).missingQuantityArray[0]?.quantity??null,u.purchase.unit=i(s).totalNeededArray[0]?.unit??"",u.purchase.store=i(s).storeInfo?.storeName??"",u.purchase.who=ao()??"",u.stock.unit=i(s).totalNeededArray[0]?.unit??"",u.store.name=i(s).storeInfo?.storeName??null,u.store.comment=i(s).storeInfo?.storeComment??null)});let f=se(null);const h=B(()=>i(f)?i(c).find(S=>S.$id===i(f))??null:null);async function p(S,O){D(t,!0),D(r,null);try{const N=await S();return O&&m("success",O),N}catch(N){const Q=N instanceof Error?N.message:"Une erreur est survenue";return D(r,Q,!0),m("error",Q),console.error("[ProductModalState]",N),null}finally{D(t,!1)}}function m(S,O){const N=new CustomEvent("toast",{detail:{type:S,message:O}});window.dispatchEvent(N)}async function _(){i(s)&&await p(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!q.currentMainId)throw new Error("mainId non disponible");const{quantity:S,unit:O}=oo(u.purchase.quantity,u.purchase.unit);await Uu({products:[i(s).$id],mainId:q.currentMainId,unit:O,quantity:S,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null}),u.purchase={quantity:i(s).missingQuantityArray[0]?.quantity??null,unit:i(s).totalNeededArray[0]?.unit??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:""}},"Achat ajouté avec succès")}function x(S){D(f,S.$id,!0)}function y(){D(f,null)}async function w(S){S.$id&&await p(async()=>{const{quantity:O,unit:N}=oo(S.quantity,S.unit);await Gu(S.$id,{unit:N,quantity:O,store:S.store||null,who:S.who||null,notes:S.notes||"",price:S.price||null}),D(f,null)},"Achat modifié avec succès")}async function T(S){const O=i(c).find(N=>N.$id===S);O&&confirm(`Supprimer cet achat (${O.quantity} ${O.unit}) ?`)&&await p(async()=>{await Hu(S)},"Achat supprimé avec succès")}async function A(){i(s)&&await p(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime},O=[...i(l),S];await to(i(s).$id,JSON.stringify(O)),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function E(S){i(s)&&confirm("Supprimer ce relevé de stock ?")&&await p(async()=>{const O=i(l).filter((N,Q)=>Q!==S);await to(i(s).$id,JSON.stringify(O))},"Relevé de stock supprimé")}async function k(S){!i(s)||!S.trim()||await p(async()=>{if(i(o).includes(S))throw new Error("Ce volontaire est déjà ajouté");await eo(i(s).$id,[...i(o),S.trim()])},"Volontaire ajouté")}async function $(S){i(s)&&confirm(`Retirer ${S} ?`)&&await p(async()=>{await eo(i(s).$id,i(o).filter(O=>O!==S))},"Volontaire retiré")}async function I(S){i(s)&&await p(async()=>{await Wu(i(s).$id,S)},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(S){D(n,S,!0)},get product(){return i(s)},get recipes(){return i(a)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(c)},get editingPurchaseId(){return i(f)},get editingPurchaseData(){return i(h)},forms:u,addPurchase:_,startEditPurchase:x,cancelEditPurchase:y,updateEditedPurchase:w,removePurchase:T,addStock:A,removeStock:E,addVolunteer:k,removeVolunteer:$,updateStore:I,formatQuantity:Ci,formatDate:yn,formatDisplayQuantity:yd}}function Sd(e,t,r){t()&&r().addPurchase()}function xd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Ed(e,t){t().cancelEditPurchase()}var kd=P("<option> </option>"),$d=P("<option> </option>"),Pd=P('<span class="loading loading-spinner loading-sm"></span>'),Td=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ad=P("<option> </option>"),Nd=P('<span class="loading loading-spinner loading-sm"></span>'),Id=P('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/> <datalist id="browsers"></datalist></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Cd=(e,t,r)=>t(i(r)),Md=(e,t,r)=>t(i(r).$id),Dd=P('<span class="loading loading-spinner loading-sm"></span>'),Rd=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Od=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),qd=P('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <label class="select w-28"><!> <select required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></label> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/> <datalist id="stores"></datalist></label> <label class="input w-48"><!> <input type="text" placeholder="Qui" maxlength="25" list="users"/> <datalist id="users"></datalist></label> <label class="input validator w-28"><input type="number" step="1" placeholder="Prix" min="0"/> <span class="label">€</span></label> <label class="input validator"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Ld(e,t){G(t,!0);let r=Rr(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(f){return f.quantity!==null&&f.quantity!==0&&f.unit?.trim()!==""}function a(f){r().removePurchase(f)}function o(f){r().startEditPurchase(f)}var l=U(),c=j(l);{var u=f=>{var h=qd(),p=d(h),m=d(p);Gn(m,{class:"h-5 w-5"});var _=v(p,2),x=d(_),y=v(d(x),2),w=d(y),T=d(w);as(T,{class:"h-4 w-4 opacity-50"});var A=v(T,2),E=v(w,2),k=d(E);Ii(k,{class:"h-4 w-4 opacity-50"});var $=v(k,2),I=d($);I.value=I.__value="";var S=v(I);S.value=S.__value="kg";var O=v(S);O.value=O.__value="gr.";var N=v(O);N.value=N.__value="l.";var Q=v(N);Q.value=Q.__value="ml";var ce=v(Q);ce.value=ce.__value="unité";var Ne=v(ce);Ne.value=Ne.__value="bottes";var M=v(E,2),Z=d(M);gn(Z,{class:"h-4 w-4 opacity-50"});var pe=v(Z,2),z=v(pe,2);Re(z,21,()=>q.uniqueStores,Lr,(ee,ue)=>{var Ee=kd(),Rt=d(Ee),He={};L(()=>{C(Rt,i(ue)),He!==(He=i(ue))&&(Ee.value=(Ee.__value=i(ue))??"")}),g(ee,Ee)});var J=v(M,2),Se=d(J);ua(Se,{class:"h-4 w-4 opacity-50"});var je=v(Se,2),Xe=v(je,2);Re(Xe,21,()=>q.uniqueWho,Lr,(ee,ue)=>{var Ee=$d(),Rt=d(Ee),He={};L(()=>{C(Rt,i(ue)),He!==(He=i(ue))&&(Ee.value=(Ee.__value=i(ue))??"")}),g(ee,Ee)});var Ie=v(J,2),lt=d(Ie),ct=v(Ie,2),fe=d(ct);vd(fe,{class:"h-4 w-4 opacity-50"});var ge=v(fe,2),Ce=v(y,2),qe=d(Ce);qe.__click=[Sd,n,r];var Me=d(qe);{var De=ee=>{var ue=Pd();g(ee,ue)},xe=ee=>{var ue=ot("Ajouter l'achat");g(ee,ue)};R(Me,ee=>{r().loading?ee(De):ee(xe,!1)})}var ze=v(_,2);{var ut=ee=>{var ue=Td(),Ee=d(ue);Gn(Ee,{class:"mx-auto mb-2 h-12 w-12"}),g(ee,ue)},dr=ee=>{var ue=Od(),Ee=d(ue),Rt=v(d(Ee));Re(Rt,21,()=>r().purchasesList,He=>He.$id,(He,ve,Y)=>{var me=U(),ke=j(me);{var dt=Ve=>{var kt=Id(),Ot=d(kt),qt=d(Ot),Lt=d(qt),Fe=v(Lt,2),bt=d(Fe);bt.value=bt.__value="kg";var Bt=v(bt);Bt.value=Bt.__value="gr.";var rt=v(Bt);rt.value=rt.__value="l.";var jt=v(rt);jt.value=jt.__value="ml";var Ke=v(jt);Ke.value=Ke.__value="unité";var zt=v(Ke);zt.value=zt.__value="bottes";var $t=v(Ot),Jt=d($t),Vt=v(Jt,2);Re(Vt,21,()=>q.uniqueStores,Lr,(K,de)=>{var W=Ad(),$e=d(W),Pe={};L(()=>{C($e,i(de)),Pe!==(Pe=i(de))&&(W.value=(W.__value=i(de))??"")}),g(K,W)});var Ar=v($t),vr=d(Ar),Nr=v(Ar),hr=d(Nr),Ir=v(Nr),Xr=d(Ir),pr=v(Ir),ft=d(pr),V=v(pr),he=d(V),nt=d(he);nt.__click=[xd,r,s];var vt=d(nt);{var Qe=K=>{var de=Nd();g(K,de)},st=K=>{pd(K,{class:"h-3 w-3"})};R(vt,K=>{r().loading?K(Qe):K(st,!1)})}var wt=v(nt,2);wt.__click=[Ed,r];var we=d(wt);gt(we,{class:"h-3 w-3"}),L((K,de)=>{C(hr,K),nt.disabled=de},[()=>yn(i(ve).$createdAt),()=>r().loading||!s(i(ve))]),Ye(Lt,()=>i(ve).quantity,K=>i(ve).quantity=K),Os(Fe,()=>i(ve).unit,K=>i(ve).unit=K),Ye(Jt,()=>i(ve).store,K=>i(ve).store=K),Ye(vr,()=>i(ve).who,K=>i(ve).who=K),Ye(Xr,()=>i(ve).price,K=>i(ve).price=K),Ye(ft,()=>i(ve).notes,K=>i(ve).notes=K),g(Ve,kt)},fr=Ve=>{var kt=Rd(),Ot=d(kt),qt=d(Ot),Lt=v(Ot),Fe=d(Lt),bt=v(Lt),Bt=d(bt),rt=v(bt),jt=d(rt),Ke=v(rt),zt=d(Ke),$t=v(Ke),Jt=d($t),Vt=v($t),Ar=d(Vt),vr=d(Ar);vr.__click=[Cd,o,ve];var Nr=d(vr);Ti(Nr,{class:"h-4 w-4"});var hr=v(vr,2);hr.__click=[Md,a,ve];var Ir=d(hr);{var Xr=ft=>{var V=Dd();g(ft,V)},pr=ft=>{gt(ft,{class:"h-4 w-4"})};R(Ir,ft=>{r().loading?ft(Xr):ft(pr,!1)})}L((ft,V)=>{C(qt,ft),C(Fe,i(ve).store||"-"),C(Bt,i(ve).who||"-"),C(jt,V),C(zt,i(ve).price?`${i(ve).price}€`:"-"),C(Jt,i(ve).notes||"-"),hr.disabled=r().loading},[()=>Ci(i(ve).quantity,i(ve).unit),()=>yn(i(ve).$createdAt)]),g(Ve,kt)};R(ke,Ve=>{r().editingPurchaseId===i(ve).$id?Ve(dt):Ve(fr,!1)})}g(He,me)}),g(ee,ue)};R(ze,ee=>{r().purchasesList.length===0?ee(ut):ee(dr,!1)})}L(ee=>qe.disabled=ee,[()=>r().loading||!n()]),Ye(A,()=>r().forms.purchase.quantity,ee=>r().forms.purchase.quantity=ee),Os($,()=>r().forms.purchase.unit,ee=>r().forms.purchase.unit=ee),Ye(pe,()=>r().forms.purchase.store,ee=>r().forms.purchase.store=ee),Ye(je,()=>r().forms.purchase.who,ee=>r().forms.purchase.who=ee),Ye(lt,()=>r().forms.purchase.price,ee=>r().forms.purchase.price=ee),Ye(ge,()=>r().forms.purchase.notes,ee=>r().forms.purchase.notes=ee),g(f,h)};R(c,f=>{r()&&r().product&&f(u)})}g(e,l),H()}ur(["click"]);class Bd{#t;#r=new Set;constructor(t){this.#t=t}get current(){return this.#t}set current(t){this.#t!=t&&(this.#t=t,this.#r.forEach(r=>r(t)))}on(t){return this.#r.add(t),()=>this.#r.delete(t)}}const Mi=e=>new Bd(e),Us=Symbol.for("atomico.hooks");globalThis[Us]=globalThis[Us]||{};let Hr=globalThis[Us];const jd=Symbol.for("Atomico.suspense"),Di=Symbol.for("Atomico.effect"),zd=Symbol.for("Atomico.layoutEffect"),Ri=Symbol.for("Atomico.insertionEffect"),Zr=(e,t,r)=>{const{i:n,hooks:s}=Hr.c,a=s[n]=s[n]||{};return a.value=e(a.value),a.effect=t,a.tag=r,Hr.c.i++,s[n].value},Vd=e=>Zr((t=Mi(e))=>t),En=()=>Zr((e=Mi(Hr.c.host))=>e),Oi=()=>Hr.c.update,Wd=(e,t,r=0)=>{let n={},s=!1;const a=()=>s,o=(l,c)=>{for(const u in n){const f=n[u];f.effect&&f.tag===l&&(f.value=f.effect(f.value,c))}};return{load:l=>{Hr.c={host:t,hooks:n,update:e,i:0,id:r};let c;try{s=!1,c=l()}catch(u){if(u!==jd)throw u;s=!0}finally{Hr.c=null}return c},cleanEffects:l=>(o(Ri,l),()=>(o(zd,l),()=>{o(Di,l)})),isSuspense:a}},Jr=Symbol.for;function qi(e,t){const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++){let s=e[n],a=t[n];if(s!==a)return!1}return!0}const Ct=e=>typeof e=="function",cn=e=>typeof e=="object",{isArray:Ud}=Array,Gs=(e,t)=>(t?e instanceof HTMLStyleElement:!0)&&"hydrate"in(e?.dataset||{});function Li(e,t){let r;const n=s=>{let{length:a}=s;for(let o=0;o<a;o++){const l=s[o];if(l&&Array.isArray(l))n(l);else{const c=typeof l;if(l==null||c==="function"||c==="boolean")continue;c==="string"||c==="number"?(r==null&&(r=""),r+=l):(r!=null&&(t(r),r=null),t(l))}}};n(e),r!=null&&t(r)}const Bi=(e,t,r)=>(e.addEventListener(t,r),()=>e.removeEventListener(t,r));class ji{constructor(t,r,n){this.message=r,this.target=t,this.value=n}}class zi extends ji{}class Gd extends ji{}const Hn="Custom",Hd=null,Kd={true:1,"":1,1:1};function Qd(e,t,r,n,s){const{type:a,reflect:o,event:l,value:c,attr:u=Yd(t)}=r?.name!=Hn&&cn(r)&&r!=Hd?r:{type:r},f=a?.name===Hn&&a.map,h=c!=null?a==Function||!Ct(c)?()=>c:c:null;Object.defineProperty(e,t,{configurable:!0,set(p){const m=this[t];h&&a!=Boolean&&p==null&&(p=h());const{error:_,value:x}=(f?Xd:Fd)(a,p);if(_&&x!=null)throw new zi(this,`The value defined for prop '${t}' must be of type '${a.name}'`,x);m!=x&&(this._props[t]=x??void 0,this.update(),l&&Vi(this,l),this.updated.then(()=>{o&&(this._ignoreAttr=u,Zd(this,a,u,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),h&&(s[t]=h()),n[u]={prop:t,type:a}}const Vi=(e,{type:t,base:r=CustomEvent,...n})=>e.dispatchEvent(new r(t,n)),Yd=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),Zd=(e,t,r,n)=>n==null||t==Boolean&&!n?e.removeAttribute(r):e.setAttribute(r,t?.name===Hn&&t?.serialize?t?.serialize(n):cn(n)?JSON.stringify(n):t==Boolean?"":n),Jd=(e,t)=>e==Boolean?!!Kd[t]:e==Number?Number(t):e==String?t:e==Array||e==Object?JSON.parse(t):e.name==Hn?t:new e(t),Xd=({map:e},t)=>{try{return{value:e(t),error:!1}}catch{return{value:t,error:!0}}},Fd=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:void 0,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let ef=0;const tf=e=>(e?.dataset||{})?.hydrate||""||"c"+ef++,kn=(e,t=HTMLElement)=>{const r={},n={},s="prototype"in t&&t.prototype instanceof Element,a=s?t:"base"in t?t.base:HTMLElement,{props:o,styles:l}=s?e:t;class c extends a{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(const f in n)this[f]=n[f]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={};let f,h;this.mounted=new Promise(y=>this.mount=()=>{y(),f!=this.parentNode&&(h!=f?this.unmounted.then(this.update):this.update()),f=this.parentNode}),this.unmounted=new Promise(y=>this.unmount=()=>{y(),(f!=this.parentNode||!this.isConnected)&&(p.cleanEffects(!0)()(),h=this.parentNode,f=null)}),this.symbolId=this.symbolId||Symbol(),this.symbolIdParent=Symbol();const p=Wd(()=>this.update(),this,tf(this));let m,_=!0;const x=Gs(this);this.update=()=>(m||(m=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const y=p.load(this._render),w=p.cleanEffects();return y&&y.render(this,this.symbolId,x),m=!1,_&&!p.isSuspense()&&(_=!1,!x&&rf(this)),w()}finally{m=!1}}).then(y=>{y&&y()})),this.updated),this.update()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.unmount()}attributeChangedCallback(f,h,p){if(r[f]){if(f===this._ignoreAttr||h===p)return;const{prop:m,type:_}=r[f];try{this[m]=Jd(_,p)}catch{throw new Gd(this,`The value defined as attr '${f}' cannot be parsed by type '${_.name}'`,p)}}else super.attributeChangedCallback(f,h,p)}static get props(){return{...super.props,...o}}static get observedAttributes(){const f=super.observedAttributes||[];for(const h in o)Qd(this.prototype,h,o[h],r,n);return Object.keys(r).concat(f)}}return c};function rf(e){const{styles:t}=e.constructor,{shadowRoot:r}=e;if(r&&t.length){const n=[];Li(t,s=>{s&&(s instanceof Element?r.appendChild(s.cloneNode(!0)):n.push(s))}),n.length&&(r.adoptedStyleSheets=n)}}const Wi=e=>(t,r)=>{Zr(([n,s]=[])=>((s||!s)&&(s&&qi(s,r)?n=n||!0:(Ct(n)&&n(),n=null)),[n,r]),([n,s],a)=>a?(Ct(n)&&n(),[]):[n||t(),s],e)},bn=Wi(Di),nf=Wi(Ri);class Ui extends Array{constructor(t,r){let n=!0;const s=a=>{try{r(a,this,n)}finally{n=!1}};super(void 0,s,r),s(t)}}const da=e=>{const t=Oi();return Zr((r=new Ui(e,(n,s,a)=>{n=Ct(n)?n(s[0]):n,n!==s[0]&&(s[0]=n,a||t())}))=>r)},Kt=(e,t)=>{const[r]=Zr(([n,s,a=0]=[])=>((!s||s&&!qi(s,t))&&(n=e()),[n,t,a]));return r},fa=e=>{const{current:t}=En();if(!(e in t))throw new zi(t,`For useProp("${e}"), the prop does not exist on the host.`,e);return Zr((r=new Ui(t[e],(n,s)=>{n=Ct(n)?n(t[e]):n,t[e]=n}))=>(r[0]=t[e],r))},nr=(e,t={})=>{const r=En();return r[e]||(r[e]=(n=t.detail)=>Vi(r.current,{type:e,...t,detail:n})),r[e]},Hs=Jr("atomico/options");globalThis[Hs]=globalThis[Hs]||{sheet:!!document.adoptedStyleSheets};const Gi=globalThis[Hs],sf={checked:1,value:1,selected:1},af={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},of={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},jn={},Ks=[];class Qs extends Text{}const lf=Jr("atomico/id"),un=Jr("atomico/type"),ks=Jr("atomico/ref"),Hi=Jr("atomico/vnode"),cf=()=>{};function uf(e,t,r){return Qi(this,e,t,r)}const Ki=(e,t,...r)=>{const n=t||jn;let{children:s}=n;if(s=s??(r.length?r:Ks),e===cf)return s;const a=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:0;if(a===!1&&e instanceof Function)return e(s!=Ks?{children:s,...n}:n);const o=Gi.render||uf;return{[un]:Hi,type:e,props:n,children:s,key:n.key,shadow:n.shadowDom,static:n.staticNode,raw:a,is:n.is,clone:n.cloneNode,render:o}};function Qi(e,t,r=lf,n,s){let a;if(t&&t[r]&&t[r].vnode==e||e[un]!=Hi)return t;(e||!t)&&(s=s||e.type=="svg",a=e.type!="host"&&(e.raw==1?(t&&e.clone?t[ks]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[ks]||t.localName!=e.type:!t),a&&e.type!=null&&(e.raw==1&&e.clone?(n=!0,t=e.type.cloneNode(!0),t[ks]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:s?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,e.is?{is:e.is}:void 0)));const o=t[r]?t[r]:jn,{vnode:l=jn,cycle:c=0}=o;let{fragment:u,handlers:f}=o;const{children:h=Ks,props:p=jn}=l;if(f=a?{}:f||{},e.static&&!a)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open",...e.shadow}),e.props!=p&&vf(t,p,e.props,f,s),e.children!==h){const m=e.shadow?t.shadowRoot:t;u=ff(e.children,u,m,r,!c&&n,s&&e.type=="foreignObject"?!1:s)}return t[r]={vnode:e,handlers:f,fragment:u,cycle:c+1},t}function df(e,t){const r=new Qs(""),n=new Qs("");let s;if(e[t?"prepend":"append"](r),t){let{lastElementChild:a}=e;for(;a;){const{previousElementSibling:o}=a;if(Gs(a,!0)&&!Gs(o,!0)){s=a;break}a=o}}return s?s.before(n):e.append(n),{markStart:r,markEnd:n}}function ff(e,t,r,n,s,a){e=e==null?null:Ud(e)?e:[e];const o=t||df(r,s),{markStart:l,markEnd:c,keyes:u}=o;let f;const h=u&&new Set;let p=l;if(e&&Li(e,m=>{if(typeof m=="object"&&!m[un])return;const _=m[un]&&m.key,x=u&&_!=null&&u.get(_);p!=c&&p===x?h.delete(p):p=p==c?c:p.nextSibling;const y=u?x:p;let w=y;if(m[un])w=Qi(m,y,n,s,a);else{const T=m+"";!(w instanceof Text)||w instanceof Qs?w=new Text(T):w.data!=T&&(w.data=T)}w!=p&&(u&&h.delete(w),!y||u?(r.insertBefore(w,p),u&&p!=c&&h.add(p)):y==c?r.insertBefore(w,c):(r.replaceChild(w,y),p=w)),_!=null&&(f=f||new Map,f.set(_,w))}),p=p==c?c:p.nextSibling,t&&p!=c)for(;p!=c;){const m=p;p=p.nextSibling,m.remove()}return h&&h.forEach(m=>m.remove()),o.keyes=f,o}function vf(e,t,r,n,s){for(const a in t)!(a in r)&&io(e,a,t[a],null,s,n);for(const a in r)io(e,a,t[a],r[a],s,n)}function io(e,t,r,n,s,a){if(t=t=="class"&&!s?"className":t,r=r??null,n=n??null,t in e&&sf[t]&&(r=e[t]),!(n===r||of[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(Ct(n)||Ct(r)))hf(e,t.slice(2),n,a);else if(t=="ref")n&&(Ct(n)?n(e):n.current=e);else if(t=="style"){const{style:o}=e;r=r||"",n=n||"";const l=cn(r),c=cn(n);if(l)for(const u in r)if(c)!(u in n)&&lo(o,u,null);else break;if(c)for(const u in n){const f=n[u];l&&r[u]===f||lo(o,u,f)}else o.cssText=n}else{const o=t[0]=="$"?t.slice(1):t;o===t&&(!s&&!af[t]&&t in e||Ct(n)||Ct(r))?e[t]=n??"":n==null?e.removeAttribute(o):e.setAttribute(o,cn(n)?JSON.stringify(n):n)}}function hf(e,t,r,n){if(n.handleEvent||(n.handleEvent=s=>n[s.type].call(e,s)),r){if(!n[t]){const s=r.capture||r.once||r.passive?Object.assign({},r):null;e.addEventListener(t,n,s)}n[t]=r}else n[t]&&(e.removeEventListener(t,n),delete n[t])}function lo(e,t,r){let n="setProperty";r==null&&(n="removeProperty",r=null),~t.indexOf("-")?e[n](t,r):e[t]=r}const co={};function os(e,...t){const r=(e.raw||e).reduce((n,s,a)=>n+s+(t[a]||""),"");return co[r]=co[r]||pf(r)}function pf(e){if(Gi.sheet){const t=new CSSStyleSheet;return t.replaceSync(e),t}else{const t=document.createElement("style");return t.textContent=e,t}}const mf=Ki("host",{style:"display: contents"}),$s=Jr("atomico/context"),_f=(e,t)=>{const r=En();nf(()=>Bi(r.current,"ConnectContext",n=>{e===n.detail.id&&(n.stopPropagation(),n.detail.connect(t))}),[e])},gf=e=>{const t=nr("ConnectContext",{bubbles:!0,composed:!0}),r=()=>{let a;return t({id:e,connect(o){a=o}}),a},[n,s]=da(r);return bn(()=>{n||(e[$s]||(e[$s]=customElements.whenDefined(new e().localName)),e[$s].then(()=>s(r)))},[e]),n},yf=e=>{const t=gf(e),r=Oi();return bn(()=>{if(t)return Bi(t,"UpdatedValue",r)},[t]),(t||e).value},bf=e=>{const t=kn(()=>(_f(t,En().current),mf),{props:{value:{type:Object,event:{type:"UpdatedValue"},value:()=>e}}});return t.value=e,t},be=(e,t,r)=>(t==null?t={key:r}:t.key=r,Ki(e,t)),dn=be,Yi=os`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`,Zi=os`.vh{position:absolute;transform:scale(0)}`;function va(){const e=new Date;return new Oe(e.getFullYear(),e.getMonth()+1,e.getDate())}function ha(e,t=0){const r=Et(e),n=r.getUTCDay(),s=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-s),Oe.from(r)}function Ji(e,t=0){return ha(e,t).add({days:6})}function Xi(e){return Oe.from(new Date(Date.UTC(e.year,e.month,0)))}function is(e,t,r){return t&&Oe.compare(e,t)<0?t:r&&Oe.compare(e,r)>0?r:e}const wf={days:1};function Sf(e,t=0){let r=ha(e.toPlainDate(),t);const n=Ji(Xi(e),t),s=[];for(;Oe.compare(r,n)<0;){const a=[];for(let o=0;o<7;o++)a.push(r),r=r.add(wf);s.push(a)}return s}function Et(e){return new Date(Date.UTC(e.year,e.month-1,e.day??1))}const xf=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/,Ps=(e,t)=>e.toString().padStart(t,"0");class Oe{constructor(t,r,n){this.year=t,this.month=r,this.day=n}add(t){const r=Et(this);if("days"in t)return r.setUTCDate(this.day+t.days),Oe.from(r);let{year:n,month:s}=this;"months"in t?(s=this.month+t.months,r.setUTCMonth(s-1)):(n=this.year+t.years,r.setUTCFullYear(n));const a=Oe.from(Et({year:n,month:s,day:1}));return is(Oe.from(r),a,Xi(a))}toString(){return`${Ps(this.year,4)}-${Ps(this.month,2)}-${Ps(this.day,2)}`}toPlainYearMonth(){return new ls(this.year,this.month)}equals(t){return Oe.compare(this,t)===0}static compare(t,r){return t.year<r.year?-1:t.year>r.year?1:t.month<r.month?-1:t.month>r.month?1:t.day<r.day?-1:t.day>r.day?1:0}static from(t){if(typeof t=="string"){const r=t.match(xf);if(!r)throw new TypeError(t);const[,n,s,a]=r;return new Oe(parseInt(n,10),parseInt(s,10),parseInt(a,10))}return new Oe(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}}class ls{constructor(t,r){this.year=t,this.month=r}add(t){const r=Et(this),n=(t.months??0)+(t.years??0)*12;return r.setUTCMonth(r.getUTCMonth()+n),new ls(r.getUTCFullYear(),r.getUTCMonth()+1)}equals(t){return this.year===t.year&&this.month===t.month}toPlainDate(){return new Oe(this.year,this.month,1)}}function Kn(e,t){if(t)try{return e.from(t)}catch{}}function sr(e){const[t,r]=fa(e);return[Kt(()=>Kn(Oe,t),[t]),n=>r(n?.toString())]}function Ef(e){const[t="",r]=fa(e);return[Kt(()=>{const[n,s]=t.split("/"),a=Kn(Oe,n),o=Kn(Oe,s);return a&&o?[a,o]:[]},[t]),n=>r(`${n[0]}/${n[1]}`)]}function kf(e){const[t="",r]=fa(e);return[Kt(()=>{const n=[];for(const s of t.trim().split(/\s+/)){const a=Kn(Oe,s);a&&n.push(a)}return n},[t]),n=>r(n.join(" "))]}function wn(e,t){return Kt(()=>new Intl.DateTimeFormat(t,{timeZone:"UTC",...e}),[t,e])}function uo(e,t,r){const n=wn(e,r);return Kt(()=>{const s=[],a=new Date;for(var o=0;o<7;o++){const l=(a.getUTCDay()-t+7)%7;s[l]=n.format(a),a.setUTCDate(a.getUTCDate()+1)}return s},[t,n])}const fo=(e,t,r)=>is(e,t,r)===e,vo=e=>e.target.matches(":dir(ltr)"),$f={month:"long",day:"numeric"},Pf={month:"long"},Tf={weekday:"long"},Ts={bubbles:!0};function Af({props:e,context:t}){const{offset:r}=e,{firstDayOfWeek:n,isDateDisallowed:s,min:a,max:o,today:l,page:c,locale:u,focusedDate:f,formatWeekday:h}=t,p=l??va(),m=uo(Tf,n,u),_=Kt(()=>({weekday:h}),[h]),x=uo(_,n,u),y=wn($f,u),w=wn(Pf,u),T=Kt(()=>c.start.add({months:r}),[c,r]),A=Kt(()=>Sf(T,n),[T,n]),E=nr("focusday",Ts),k=nr("selectday",Ts),$=nr("hoverday",Ts);function I(N){E(is(N,a,o))}function S(N){let Q;switch(N.key){case"ArrowRight":Q=f.add({days:vo(N)?1:-1});break;case"ArrowLeft":Q=f.add({days:vo(N)?-1:1});break;case"ArrowDown":Q=f.add({days:7});break;case"ArrowUp":Q=f.add({days:-7});break;case"PageUp":Q=f.add(N.shiftKey?{years:-1}:{months:-1});break;case"PageDown":Q=f.add(N.shiftKey?{years:1}:{months:1});break;case"Home":Q=ha(f,n);break;case"End":Q=Ji(f,n);break;default:return}I(Q),N.preventDefault()}function O(N){const Q=T.equals(N);if(!t.showOutsideDays&&!Q)return;const ce=N.equals(f),Ne=N.equals(p),M=Et(N),Z=s?.(M),pe=!fo(N,a,o);let z="",J;if(t.type==="range"){const[Se,je]=t.value,Xe=Se?.equals(N),Ie=je?.equals(N);J=Se&&je&&fo(N,Se,je),z=`${Xe?"range-start":""} ${Ie?"range-end":""} ${J&&!Xe&&!Ie?"range-inner":""}`}else t.type==="multi"?J=t.value.some(Se=>Se.equals(N)):J=t.value?.equals(N);return{part:`${`button day day-${M.getDay()} ${Q?J?"selected":"":"outside"} ${Z?"disallowed":""} ${Ne?"today":""} ${t.getDayParts?.(M)??""}`} ${z}`,tabindex:Q&&ce?0:-1,disabled:pe,"aria-disabled":Z?"true":void 0,"aria-pressed":Q&&J,"aria-current":Ne?"date":void 0,"aria-label":y.format(M),onkeydown:S,onclick(){Z||k(N),I(N)},onmouseover(){!Z&&!pe&&$(N)}}}return{weeks:A,yearMonth:T,daysLong:m,daysVisible:x,formatter:w,getDayProps:O}}const As=va(),pa=bf({type:"date",firstDayOfWeek:1,focusedDate:As,page:{start:As.toPlainYearMonth(),end:As.toPlainYearMonth()}});customElements.define("calendar-ctx",pa);const Nf=(e,t)=>(t+e)%7,If=kn(e=>{const t=yf(pa),r=Vd(),n=Af({props:e,context:t});function s(){r.current.querySelector("button[tabindex='0']")?.focus()}return dn("host",{shadowDom:!0,focus:s,children:[be("div",{id:"h",part:"heading",children:n.formatter.format(Et(n.yearMonth))}),dn("table",{ref:r,"aria-labelledby":"h",part:"table",children:[be("thead",{children:be("tr",{part:"tr head",children:n.daysLong.map((a,o)=>dn("th",{part:`th day day-${Nf(t.firstDayOfWeek,o)}`,scope:"col",children:[be("span",{class:"vh",children:a}),be("span",{"aria-hidden":"true",children:n.daysVisible[o]})]}))})}),be("tbody",{children:n.weeks.map((a,o)=>be("tr",{part:"tr week",children:a.map((l,c)=>{const u=n.getDayProps(l);return be("td",{part:"td",children:u&&be("button",{...u,children:l.day})},c)})},o))})]})]})},{props:{offset:{type:Number,value:0}},styles:[Yi,Zi,os`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`]});customElements.define("calendar-month",If);function ho(e){return be("button",{part:`button ${e.name} ${e.onclick?"":"disabled"}`,onclick:e.onclick,"aria-disabled":e.onclick?null:"true",children:be("slot",{name:e.name,children:e.children})})}function ma(e){const t=Et(e.page.start),r=Et(e.page.end);return dn("div",{role:"group","aria-labelledby":"h",part:"container",children:[be("div",{id:"h",class:"vh","aria-live":"polite","aria-atomic":"true",children:e.formatVerbose.formatRange(t,r)}),dn("div",{part:"header",children:[be(ho,{name:"previous",onclick:e.previous,children:"Previous"}),be("slot",{part:"heading",name:"heading",children:be("div",{"aria-hidden":"true",children:e.format.formatRange(t,r)})}),be(ho,{name:"next",onclick:e.next,children:"Next"})]}),be(pa,{value:e,onselectday:e.onSelect,onfocusday:e.onFocus,onhoverday:e.onHover,children:be("slot",{})})]})}const _a={value:{type:String,value:""},min:{type:String,value:""},max:{type:String,value:""},today:{type:String,value:""},isDateDisallowed:{type:Function,value:e=>!1},formatWeekday:{type:String,value:()=>"narrow"},getDayParts:{type:Function,value:e=>""},firstDayOfWeek:{type:Number,value:()=>1},showOutsideDays:{type:Boolean,value:!1},locale:{type:String,value:()=>{}},months:{type:Number,value:1},focusedDate:{type:String,value:()=>{}},pageBy:{type:String,value:()=>"months"}},ga=[Yi,Zi,os`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`],Cf={year:"numeric"},Mf={year:"numeric",month:"long"};function Ns(e,t){return(t.year-e.year)*12+t.month-e.month}const po=(e,t)=>(e=t===12?new ls(e.year,1):e,{start:e,end:e.add({months:t-1})});function Df({pageBy:e,focusedDate:t,months:r,max:n,min:s,goto:a}){const o=e==="single"?1:r,[l,c]=da(()=>po(t.toPlainYearMonth(),r)),u=h=>c(po(l.start.add({months:h}),r)),f=h=>{const p=Ns(l.start,h.toPlainYearMonth());return p>=0&&p<r};return bn(()=>{if(f(t))return;const h=Ns(t.toPlainYearMonth(),l.start);a(t.add({months:h}))},[l.start]),bn(()=>{if(f(t))return;const h=Ns(l.start,t.toPlainYearMonth());u(h===-1?-o:h===r?o:Math.floor(h/r)*r)},[t,o,r]),{page:l,previous:!s||!f(s)?()=>u(-o):void 0,next:!n||!f(n)?()=>u(o):void 0}}function ya({months:e,pageBy:t,locale:r,focusedDate:n,setFocusedDate:s}){const[a]=sr("min"),[o]=sr("max"),[l]=sr("today"),c=nr("focusday"),u=nr("change"),f=Kt(()=>is(n??l??va(),a,o),[n,l,a,o]);function h(w){s(w),c(Et(w))}const{next:p,previous:m,page:_}=Df({pageBy:t,focusedDate:f,months:e,min:a,max:o,goto:h}),x=En();function y(w){const T=w?.target??"day";T==="day"?x.current.querySelectorAll("calendar-month").forEach(A=>A.focus(w)):x.current.shadowRoot.querySelector(`[part~='${T}']`).focus(w)}return{format:wn(Cf,r),formatVerbose:wn(Mf,r),page:_,focusedDate:f,dispatch:u,onFocus(w){w.stopPropagation(),h(w.detail),setTimeout(y)},min:a,max:o,today:l,next:p,previous:m,focus:y}}const Rf=kn(e=>{const[t,r]=sr("value"),[n=t,s]=sr("focusedDate"),a=ya({...e,focusedDate:n,setFocusedDate:s});function o(l){r(l.detail),a.dispatch()}return be("host",{shadowDom:!0,focus:a.focus,children:be(ma,{...e,...a,type:"date",value:t,onSelect:o})})},{props:_a,styles:ga});customElements.define("calendar-date",Rf);const mo=(e,t)=>Oe.compare(e,t)<0?[e,t]:[t,e],Of=kn(e=>{const[t,r]=Ef("value"),[n=t[0],s]=sr("focusedDate"),a=ya({...e,focusedDate:n,setFocusedDate:s}),o=nr("rangestart"),l=nr("rangeend"),[c,u]=sr("tentative"),[f,h]=da();bn(()=>h(void 0),[c]);function p(y){a.onFocus(y),m(y)}function m(y){y.stopPropagation(),c&&h(y.detail)}function _(y){const w=y.detail;y.stopPropagation(),c?(r(mo(c,w)),u(void 0),l(Et(w)),a.dispatch()):(u(w),o(Et(w)))}const x=c?mo(c,f??c):t;return be("host",{shadowDom:!0,focus:a.focus,children:be(ma,{...e,...a,type:"range",value:x,onFocus:p,onHover:m,onSelect:_})})},{props:{..._a,tentative:{type:String,value:""}},styles:ga});customElements.define("calendar-range",Of);const qf=kn(e=>{const[t,r]=kf("value"),[n=t[0],s]=sr("focusedDate"),a=ya({...e,focusedDate:n,setFocusedDate:s});function o(l){const c=[...t],u=t.findIndex(f=>f.equals(l.detail));u<0?c.push(l.detail):c.splice(u,1),r(c),a.dispatch()}return be("host",{shadowDom:!0,focus:a.focus,children:be(ma,{...e,...a,type:"multi",value:t,onSelect:o})})},{props:_a,styles:ga});customElements.define("calendar-multi",qf);async function Lf(e,t){await t.modalState?.addStock()}var Bf=P('<span class="loading loading-spinner loading-sm"></span>'),jf=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),zf=P('<span class="loading loading-spinner loading-xs"></span>'),Vf=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Wf=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Uf=P(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input validator"><!> <input placeholder="Quantité" type="number" step="0.01" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="select select-bordered" required><option disabled selected><!>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea" placeholder="remarques..."></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Gf(e,t){G(t,!0);const r=B(()=>t.modalState.forms.stock);let n=B(()=>i(r)&&i(r).quantity&&i(r).quantity>0&&i(r).unit);async function s(z){await t.modalState?.removeStock(z)}var a=Uf(),o=d(a),l=d(o);Vs(l,{class:"h-5 w-5"});var c=v(o,2),u=d(c),f=v(d(u),2),h=d(f),p=d(h);as(p,{class:"h-4 w-4 opacity-50"});var m=v(p,2),_=v(h,2),x=d(_),y=d(x);Ii(y,{class:"h-4 w-4 opacity-50"}),x.value=x.__value="";var w=v(x);w.value=w.__value="kg";var T=v(w);T.value=T.__value="gr.";var A=v(T);A.value=A.__value="l.";var E=v(A);E.value=E.__value="ml";var k=v(E);k.value=k.__value="unité";var $=v(k);$.value=$.__value="bottes";var I=v(f,2),S=d(I),O=v(I,2),N=d(O);N.__click=[Lf,t];var Q=d(N);{var ce=z=>{var J=Bf();g(z,J)},Ne=z=>{var J=ot("Ajouter au stock");g(z,J)};R(Q,z=>{t.modalState.loading?z(ce):z(Ne,!1)})}var M=v(c,2);{var Z=z=>{var J=jf(),Se=d(J);Vs(Se,{class:"mx-auto mb-2 h-12 w-12"}),g(z,J)},pe=z=>{var J=Wf(),Se=d(J),je=v(d(Se));Re(je,23,()=>t.modalState.stockEntries,Xe=>Xe.dateTime,(Xe,Ie,lt)=>{var ct=Vf(),fe=d(ct),ge=d(fe),Ce=v(fe),qe=d(Ce),Me=v(Ce),De=d(Me),xe=v(Me),ze=d(xe);ze.__click=()=>s(i(lt));var ut=d(ze);{var dr=ue=>{var Ee=zf();g(ue,Ee)},ee=ue=>{var Ee=ot("Supprimer");g(ue,Ee)};R(ut,ue=>{t.modalState.loading?ue(dr):ue(ee,!1)})}L(ue=>{C(ge,`${i(Ie).quantity??""}
                ${i(Ie).unit??""}`),C(qe,ue),C(De,i(Ie).notes||"-"),ze.disabled=t.modalState.loading},[()=>yn(i(Ie).dateTime)]),g(Xe,ct)}),g(z,J)};R(M,z=>{t.modalState.stockEntries.length===0?z(Z):z(pe,!1)})}L(()=>{ia(S,`          ${i(r).notes??""}
        `),N.disabled=t.modalState.loading||!i(n)}),Ye(m,()=>i(r).quantity,z=>i(r).quantity=z),Os(_,()=>i(r).unit,z=>i(r).unit=z),Ye(S,()=>i(r).notes,z=>i(r).notes=z),g(e,a),H()}ur(["click"]);var Hf=(e,t)=>{e.key==="Enter"&&t()},Kf=P("<option> </option>"),Qf=(e,t,r)=>t(r),Yf=P('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),Zf=P('<span class="loading loading-spinner loading-sm"></span>'),Jf=P('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Xf(e,t){G(t,!0);let r=se("");const n=B(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function s(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),D(r,""))}async function a(E){await t.modalState?.removeVolunteer(E)}var o=Jf(),l=d(o),c=d(l),u=v(d(c),2),f=d(u);ua(f,{class:"h-4 w-4 opacity-50"});var h=v(f,2);h.__keydown=[Hf,s];var p=v(h,2);Re(p,21,()=>q.uniqueWho,Lr,(E,k)=>{var $=Kf(),I=d($),S={};L(()=>{C(I,i(k)),S!==(S=i(k))&&($.value=($.__value=i(k))??"")}),g(E,$)});var m=v(u,2),_=v(d(m),2);Re(_,20,()=>t.modalState.whoList,E=>E,(E,k)=>{var $=Yf(),I=d($),S=v(I);S.__click=[Qf,a,k];var O=d(S);gt(O,{class:"h-3 w-3"}),L(()=>{C(I,`${k??""} `),S.disabled=t.modalState.loading}),g(E,$)});var x=v(m,2),y=d(x);y.__click=s;var w=d(y);{var T=E=>{var k=Zf();g(E,k)},A=E=>{var k=ot("Ajouter");g(E,k)};R(w,E=>{t.modalState.loading?E(T):E(A,!1)})}L(()=>y.disabled=t.modalState.loading||!i(n)),Ye(h,()=>i(r),E=>D(r,E)),g(e,o),H()}ur(["keydown","click"]);var Ff=(e,t)=>{e.key==="Enter"&&t()},ev=P("<option> </option>"),tv=P('<span class="loading loading-spinner loading-sm"></span>'),rv=(e,t,r)=>{D(t,""),D(r,"")},nv=P(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function sv(e,t){G(t,!0);const r=B(()=>t.modalState.forms.store),n=B(()=>i(r).name||""),s=B(()=>i(r).comment||"");let a=se(_t(i(n))),o=se(_t(i(s)));const l=B(()=>i(a).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function c(){if(!i(l))return;const S={storeName:i(a).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(S)}var u=nv(),f=d(u),h=d(f),p=v(d(h),4),m=d(p),_=d(m);gn(_,{class:"h-4 w-4 opacity-50"});var x=v(_,2);x.__keydown=[Ff,c];var y=v(x,2);Re(y,21,()=>q.uniqueStores,Lr,(S,O)=>{var N=ev(),Q=d(N),ce={};L(()=>{C(Q,i(O)),ce!==(ce=i(O))&&(N.value=(N.__value=i(O))??"")}),g(S,N)});var w=v(m,2),T=v(p,2),A=d(T);A.__click=c;var E=d(A);{var k=S=>{var O=tv();g(S,O)},$=S=>{var O=ot("Mettre à jour");g(S,O)};R(E,S=>{t.modalState.loading?S(k):S($,!1)})}var I=v(A,2);I.__click=[rv,a,o],L(()=>{ia(w,`          ${i(o)??""}
        `),A.disabled=t.modalState.loading||!i(l),I.disabled=t.modalState.loading}),Ye(x,()=>i(a),S=>D(a,S)),Ye(w,()=>i(o),S=>D(o,S)),g(e,u),H()}ur(["keydown","click"]);var av=P('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),ov=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td></tr>'),iv=P('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),lv=P('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function cv(e,t){G(t,!0);const r=B(()=>t.modalState.recipes);var n=lv(),s=d(n),a=d(s);ca(a,{class:"h-5 w-5"});var o=v(s,2);{var l=u=>{var f=av(),h=d(f);as(h,{class:"mx-auto mb-2 h-12 w-12"}),g(u,f)},c=u=>{var f=iv(),h=d(f),p=v(d(h));Re(p,21,()=>i(r),m=>m.recipeName+m.dateTimeService,(m,_)=>{var x=ov(),y=d(x),w=d(y),T=v(y),A=d(T),E=v(T),k=d(E),$=v(E),I=d($),S=v($),O=d(S);L(N=>{C(w,i(_).recipeName),C(A,`${i(_).quantity??""} ${i(_).unit??""}`),C(k,N),C(I,i(_).typePlat),C(O,i(_).assiettes||"-")},[()=>yn(i(_).dateTimeService)]),g(m,x)}),g(u,f)};R(o,u=>{i(r).length===0?u(l):u(c,!1)})}g(e,n),H()}var uv=P('<div class="badge badge-success gap-1"><!> Actif</div>'),dv=P('<div class="badge badge-warning gap-1"><!> </div>'),fv=(e,t)=>t("recettes"),vv=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hv=(e,t)=>t("achats"),pv=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),mv=(e,t)=>t("stock"),_v=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),gv=(e,t)=>t("volontaires"),yv=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),bv=(e,t)=>t("magasins"),wv=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Sv=P('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div> <div class="text-sm opacity-75"><span class="font-medium">Stock:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function xv(e,t){G(t,!0);let r=B(()=>Mt.product.tab),n=B(()=>Mt.product.id),s=B(()=>Mt.product.isOpen),a=B(()=>i(n)?wd(i(n)):null),o=B(()=>i(a)?.product);function l(h){Mt.product.tab=h}var c=U(),u=j(c);{var f=h=>{var p=Sv(),m=d(p),_=d(m),x=d(_),y=d(x),w=v(x,2),T=d(w),A=d(T),E=v(T,2);{var k=Y=>{var me=uv(),ke=d(me);id(ke,{class:"h-3 w-3"}),g(Y,me)},$=Y=>{var me=dv(),ke=d(me);Ai(ke,{class:"h-3 w-3"});var dt=v(ke);L(()=>C(dt,` ${i(o).status??""}`)),g(Y,me)};R(E,Y=>{i(o).status==="active"?Y(k):Y($,!1)})}var I=v(E,2),S=v(d(I)),O=v(I,2),N=v(d(O)),Q=v(w,2);Q.__click=function(...Y){so?.apply(this,Y)};var ce=d(Q);gt(ce,{class:"h-4 w-4"});var Ne=v(_,2),M=d(Ne);M.__click=[fv,l];var Z=d(M);ca(Z,{class:"mr-1 h-5 w-5"});var pe=v(Z,2);{var z=Y=>{var me=vv(),ke=d(me);L(()=>C(ke,i(a).recipes.length)),g(Y,me)};R(pe,Y=>{i(a).recipes.length>0&&Y(z)})}var J=v(M,2);J.__click=[hv,l];var Se=d(J);Gn(Se,{class:"mr-1 h-5 w-5"});var je=v(Se,2);{var Xe=Y=>{var me=pv(),ke=d(me);L(()=>C(ke,i(a).purchasesList.length)),g(Y,me)};R(je,Y=>{i(a).purchasesList.length>0&&Y(Xe)})}var Ie=v(J,2);Ie.__click=[mv,l];var lt=d(Ie);Vs(lt,{class:"mr-1 h-5 w-5"});var ct=v(lt,2);{var fe=Y=>{var me=_v(),ke=d(me);L(()=>C(ke,i(a).stockEntries.length)),g(Y,me)};R(ct,Y=>{i(a).stockEntries.length>0&&Y(fe)})}var ge=v(Ie,2);ge.__click=[gv,l];var Ce=d(ge);Ni(Ce,{class:"mr-1 h-5 w-5"});var qe=v(Ce,2);{var Me=Y=>{var me=yv(),ke=d(me);L(()=>C(ke,i(o).who.length)),g(Y,me)};R(qe,Y=>{i(o).who&&i(o).who.length>0&&Y(Me)})}var De=v(ge,2);De.__click=[bv,l];var xe=d(De);gn(xe,{class:"mr-1 h-5 w-5"});var ze=v(Ne,2),ut=d(ze);{var dr=Y=>{var me=wv(),ke=d(me);gt(ke,{class:"h-4 w-4"});var dt=v(ke,2),fr=d(dt);L(()=>C(fr,`erreur : ${i(a).error??""}`)),g(Y,me)};R(ut,Y=>{i(a).error&&Y(dr)})}var ee=v(ut,2),ue=d(ee);{var Ee=Y=>{cv(Y,{get modalState(){return i(a)}})},Rt=Y=>{var me=U(),ke=j(me);{var dt=Ve=>{Ld(Ve,{get modalState(){return i(a)}})},fr=Ve=>{var kt=U(),Ot=j(kt);{var qt=Fe=>{Gf(Fe,{get modalState(){return i(a)}})},Lt=Fe=>{var bt=U(),Bt=j(bt);{var rt=Ke=>{Xf(Ke,{get modalState(){return i(a)}})},jt=Ke=>{var zt=U(),$t=j(zt);{var Jt=Vt=>{sv(Vt,{get modalState(){return i(a)}})};R($t,Vt=>{i(r)==="magasins"&&Vt(Jt)},!0)}g(Ke,zt)};R(Bt,Ke=>{i(r)==="volontaires"?Ke(rt):Ke(jt,!1)},!0)}g(Fe,bt)};R(Ot,Fe=>{i(r)==="stock"?Fe(qt):Fe(Lt,!1)},!0)}g(Ve,kt)};R(ke,Ve=>{i(r)==="achats"?Ve(dt):Ve(fr,!1)},!0)}g(Y,me)};R(ue,Y=>{i(r)==="recettes"?Y(Ee):Y(Rt,!1)})}var He=v(ze,2),ve=d(He);ve.__click=function(...Y){so?.apply(this,Y)},L(()=>{C(y,i(o).productName),C(A,i(o).productType),C(S,` ${i(o).displayTotalNeeded??""}`),C(N,` ${i(o).displayTotalStock??""}`),Ae(M,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Ae(J,1,`tab ${i(r)==="achats"?"tab-active":""}`),Ae(Ie,1,`tab ${i(r)==="stock"?"tab-active":""}`),Ae(ge,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Ae(De,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),g(h,p)};R(u,h=>{i(s)&&i(o)&&i(a)&&h(f)})}g(e,c),H()}ur(["click"]);var Ev=()=>q.setGroupBy("none"),kv=()=>q.setGroupBy("store"),$v=()=>q.setGroupBy("productType"),Pv=(e,t)=>q.toggleProductType(t),Tv=P("<button><!> </button>"),Av=()=>q.toggleTemperature("frais"),Nv=()=>q.toggleTemperature("surgele"),Iv=()=>q.clearTypeAndTemperatureFilters(),Cv=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Mv=(e,t)=>q.toggleStore(t),Dv=P("<button> </button>"),Rv=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Ov=(e,t)=>q.toggleWho(t),qv=P("<button> </button>"),Lv=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Bv=(e,t)=>{q.clearFilters(),D(t,!1)},jv=P('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function zv(e,t){G(t,!0);let r=se(!1);const n=B(()=>q.filters),s=B(()=>q.uniqueStores),a=B(()=>q.uniqueWho),o=B(()=>q.uniqueProductTypes);var l=jv(),c=j(l),u=d(c),f=v(u,2),h=v(d(f),2),p=d(h),m=d(p),_=d(m);Ws(_,{class:"w-5 h-5"});var x=v(m,2),y=d(x);gt(y,{class:"w-4 h-4"});var w=v(p,2),T=v(d(w),2),A=d(T);A.__change=[Ev];var E=v(A,2);E.__change=[kv];var k=v(E,2);k.__change=[$v];var $=v(w,2),I=d($),S=v(d(I),2);Re(S,20,()=>i(o),fe=>fe,(fe,ge)=>{const Ce=B(()=>Bn(ge));var qe=Tv();qe.__click=[Pv,ge];var Me=d(qe);Rn(Me,()=>i(Ce).icon,(xe,ze)=>{ze(xe,{class:"w-3 h-3 mr-1"})});var De=v(Me);L(xe=>{Ae(qe,1,`btn btn-sm ${xe??""}`),C(De,` ${i(Ce).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(ge)?"btn-accent":"btn-dash btn-accent"]),g(fe,qe)});var O=v(S,2),N=d(O);N.__click=[Av];var Q=d(N);qn(Q,{class:"w-3 h-3"});var ce=v(N,2);ce.__click=[Nv];var Ne=d(ce);Ln(Ne,{class:"w-3 h-3"});var M=v(ce,2);{var Z=fe=>{var ge=Cv();ge.__click=[Iv];var Ce=d(ge);gt(Ce,{class:"w-3 h-3"}),g(fe,ge)};R(M,fe=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&fe(Z)})}var pe=v($,2);{var z=fe=>{var ge=Rv(),Ce=d(ge),qe=v(d(Ce),2);Re(qe,20,()=>i(s),Me=>Me,(Me,De)=>{var xe=Dv();xe.__click=[Mv,De];var ze=d(xe);L(ut=>{Ae(xe,1,`btn btn-sm ${ut??""}`),C(ze,De)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(De)?"btn-accent":"btn-dash btn-accent"]),g(Me,xe)}),g(fe,ge)};R(pe,fe=>{i(s).length>0&&fe(z)})}var J=v(pe,2);{var Se=fe=>{var ge=Lv(),Ce=d(ge),qe=v(d(Ce),2);Re(qe,20,()=>i(a),Me=>Me,(Me,De)=>{var xe=qv();xe.__click=[Ov,De];var ze=d(xe);L(ut=>{Ae(xe,1,`btn btn-sm ${ut??""}`),C(ze,De)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(De)?"btn-accent":"btn-dash btn-accent"]),g(Me,xe)}),g(fe,ge)};R(J,fe=>{i(a).length>0&&fe(Se)})}var je=v(J,4);je.__click=[Bv,r];var Xe=d(je);gt(Xe,{class:"w-4 h-4 mr-2"});var Ie=v(c,2),lt=d(Ie),ct=d(lt);Ws(ct,{class:"w-6 h-6"}),L((fe,ge)=>{Br(A,i(n).groupBy==="none"),Br(E,i(n).groupBy==="store"),Br(k,i(n).groupBy==="productType"),Ae(N,1,`btn btn-sm ${fe??""}`),Ae(ce,1,`btn btn-sm ${ge??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Gc(u,()=>i(r),fe=>D(r,fe)),g(e,l),H()}ur(["change","click"]);const rn=e=>{var t=Vv(),r=d(t);Ti(r,{class:"h-4 w-4 text-amber-600"}),g(e,t)};var Vv=P('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Wv=()=>q.clearFilters(),Uv=e=>q.setSearchQuery(e.currentTarget.value),Gv=()=>q.setGroupBy("none"),Hv=()=>q.setGroupBy("store"),Kv=()=>q.setGroupBy("productType"),Qv=(e,t)=>q.toggleProductType(t),Yv=P("<button><!> </button>"),Zv=()=>q.toggleTemperature("frais"),Jv=()=>q.toggleTemperature("surgele"),Xv=()=>q.clearTypeAndTemperatureFilters(),Fv=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),eh=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),th=(e,t)=>q.toggleStore(t),rh=P("<button><!> </button>"),nh=()=>q.clearStoreFilters(),sh=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),ah=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),oh=(e,t)=>q.toggleWho(t),ih=P("<button><!> </button>"),lh=()=>q.clearWhoFilters(),ch=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),uh=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),dh=()=>q.handleSort("productName"),fh=()=>q.handleSort("store"),vh=()=>q.handleSort("who"),hh=()=>q.handleSort("productType"),ph=P('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),mh=P('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),_h=(e,t,r)=>t("recettes",i(r).$id),gh=P('<div class="text-base-content/60 text-xs"> </div>'),yh=P('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),bh=P('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),wh=(e,t,r)=>t("magasins",i(r).$id),Sh=P('<div class="tooltip tooltip-info"> </div>'),xh=(e,t,r)=>t("volontaires",i(r).$id),Eh=P('<span class="badge badge-soft badge-info badge-sm"> </span>'),kh=P('<div class="flex flex-wrap gap-1 pr-8"></div>'),$h=(e,t,r)=>t("recettes",i(r).$id),Ph=P('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Th=(e,t,r)=>t("achats",i(r).$id),Ah=P('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Nh=P('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"> <!></td><td class="group relative text-center"><!></td></tr>'),Ih=P("<!> <!>",1),Ch=P('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Mh=P('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Dh(e,t){G(t,!0);const r=B(()=>q.filteredProducts),n=B(()=>q.filteredGroupedProducts),s=B(()=>q.stats),a=B(()=>q.uniqueStores),o=B(()=>q.uniqueWho),l=B(()=>q.uniqueProductTypes),c=B(()=>q.filters);function u(V,he){gd(V,he)}var f=Mh(),h=j(f),p=d(h),m=d(p),_=d(m);no(_,{class:"mr-1 h-4 w-4"});var x=v(_),y=v(m,2),w=d(y);qn(w,{class:"mr-1 h-4 w-4"});var T=v(w),A=v(y,2),E=d(A);Ln(E,{class:"mr-1 h-4 w-4"});var k=v(E),$=v(A,2),I=d($);ld(I,{class:"mr-1 h-4 w-4"});var S=v(I),O=v(p,2),N=d(O),Q=d(N),ce=d(Q),Ne=d(ce);Ws(Ne,{class:"h-5 w-5"});var M=v(ce,2);M.__click=[Wv];var Z=d(M);gt(Z,{class:"h-4 w-4"});var pe=v(N,2),z=d(pe),J=v(d(z),2),Se=d(J);md(Se,{class:"h-4 w-4"});var je=v(Se,2);je.__input=[Uv];var Xe=v(z,2),Ie=v(d(Xe),2),lt=d(Ie);lt.__change=[Gv];var ct=v(lt,2);ct.__change=[Hv];var fe=v(ct,2);fe.__change=[Kv];var ge=v(pe,2),Ce=d(ge),qe=d(Ce);{var Me=V=>{var he=eh(),nt=d(he),vt=v(d(nt),2),Qe=d(vt);Re(Qe,16,()=>i(l),$e=>$e,($e,Pe)=>{const Pt=B(()=>Bn(Pe));var Wt=Yv();Wt.__click=[Qv,Pe];var mr=d(Wt);Rn(mr,()=>i(Pt).icon,(ht,Ut)=>{Ut(ht,{class:"mr-1 h-5 w-5"})});var Cr=v(mr);L(ht=>{Ae(Wt,1,`btn btn-sm ${ht??""}`),C(Cr,` ${i(Pt).displayName??""}`)},[()=>i(c).selectedProductTypes.length===0?"btn-soft btn-accent":i(c).selectedProductTypes.includes(Pe)?"btn-accent":"btn-dash btn-accent"]),g($e,Wt)});var st=v(Qe,2);st.__click=[Zv];var wt=d(st);qn(wt,{class:"h-5 w-5"});var we=v(st,2);we.__click=[Jv];var K=d(we);Ln(K,{class:"h-5 w-5"});var de=v(we,2);{var W=$e=>{var Pe=Fv();Pe.__click=[Xv];var Pt=d(Pe);gt(Pt,{class:"h-3 w-3"}),g($e,Pe)};R(de,$e=>{(i(c).selectedProductTypes.length>0||i(c).selectedTemperatures.length>0)&&$e(W)})}L(($e,Pe)=>{Ae(st,1,`btn btn-sm ms-4 ${$e??""}`),Ae(we,1,`btn btn-sm ${Pe??""}`)},[()=>i(c).selectedTemperatures.length===0?"btn-soft btn-success":i(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(c).selectedTemperatures.length===0?"btn-soft btn-info":i(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),g(V,he)};R(qe,V=>{i(l).length>0&&V(Me)})}var De=v(Ce,2),xe=d(De);{var ze=V=>{var he=ah(),nt=d(he),vt=v(d(nt),2),Qe=d(vt);Re(Qe,16,()=>i(a),we=>we,(we,K)=>{var de=rh();de.__click=[th,K];var W=d(de);gn(W,{class:"mr-1 h-3 w-3"});var $e=v(W);L(Pe=>{Ae(de,1,`btn btn-xs ${Pe??""}`),C($e,` ${K??""}`)},[()=>i(c).selectedStores.length===0?"btn-soft btn-accent":i(c).selectedStores.includes(K)?"btn-accent":"btn-dash btn-accent"]),g(we,de)});var st=v(Qe,2);{var wt=we=>{var K=sh();K.__click=[nh];var de=d(K);gt(de,{class:"h-3 w-3"}),g(we,K)};R(st,we=>{i(c).selectedStores.length>0&&we(wt)})}g(V,he)};R(xe,V=>{i(a).length>0&&V(ze)})}var ut=v(xe,2);{var dr=V=>{var he=uh(),nt=d(he),vt=v(d(nt),2),Qe=d(vt);Re(Qe,16,()=>i(o),we=>we,(we,K)=>{var de=ih();de.__click=[oh,K];var W=d(de);ua(W,{class:"mr-1 h-3 w-3"});var $e=v(W);L(Pe=>{Ae(de,1,`btn btn-xs ${Pe??""}`),C($e,` ${K??""}`)},[()=>i(c).selectedWho.length===0?" btn-soft btn-info":i(c).selectedWho.includes(K)?" btn-info":"btn-dash btn-info"]),g(we,de)});var st=v(Qe,2);{var wt=we=>{var K=ch();K.__click=[lh];var de=d(K);gt(de,{class:"h-3 w-3"}),g(we,K)};R(st,we=>{i(c).selectedWho.length>0&&we(wt)})}g(V,he)};R(ut,V=>{i(o).length>0&&V(dr)})}var ee=v(O,2),ue=d(ee),Ee=d(ue),Rt=d(Ee),He=d(Rt);He.__click=[dh];var ve=d(He),Y=d(ve);no(Y,{class:"h-4 w-4"});var me=v(Y,2);{var ke=V=>{var he=ot();L(()=>C(he,i(c).sortDirection==="asc"?"↑":"↓")),g(V,he)};R(me,V=>{i(c).sortColumn==="productName"&&V(ke)})}var dt=v(He);dt.__click=[fh];var fr=d(dt),Ve=d(fr);gn(Ve,{class:"h-4 w-4"});var kt=v(Ve,2);{var Ot=V=>{var he=ot();L(()=>C(he,i(c).sortDirection==="asc"?"↑":"↓")),g(V,he)};R(kt,V=>{i(c).sortColumn==="store"&&V(Ot)})}var qt=v(dt);qt.__click=[vh];var Lt=d(qt),Fe=d(Lt);Ni(Fe,{class:"h-4 w-4"});var bt=v(Fe,2);{var Bt=V=>{var he=ot();L(()=>C(he,i(c).sortDirection==="asc"?"↑":"↓")),g(V,he)};R(bt,V=>{i(c).sortColumn==="who"&&V(Bt)})}var rt=v(qt);rt.__click=[hh];var jt=d(rt),Ke=v(d(jt));{var zt=V=>{var he=ot();L(()=>C(he,i(c).sortDirection==="asc"?"↑":"↓")),g(V,he)};R(Ke,V=>{i(c).sortColumn==="productType"&&V(zt)})}var $t=v(rt,2),Jt=d($t),Vt=d(Jt);Gn(Vt,{class:"h-4 w-4"});var Ar=v($t),vr=d(Ar),Nr=d(vr);dd(Nr,{class:"h-4 w-4"});var hr=v(Ee);Re(hr,21,()=>Object.entries(i(n)),([V,he])=>V,(V,he)=>{var nt=B(()=>bo(i(he),2));let vt=()=>i(nt)[0],Qe=()=>i(nt)[1];var st=Ih(),wt=j(st);{var we=de=>{const W=B(()=>Bn(vt()));var $e=mh(),Pe=d($e),Pt=d(Pe),Wt=d(Pt);{var mr=ht=>{var Ut=ot();L(()=>C(Ut,`🏪 ${vt()??""} (${Qe().length??""})`)),g(ht,Ut)},Cr=ht=>{var Ut=U(),cs=j(Ut);{var us=Xt=>{var _r=ph(),Pn=d(_r);Rn(Pn,()=>i(W).icon,(fs,vs)=>{vs(fs,{class:"h-4 w-4"})});var Tn=v(Pn,2),Mr=d(Tn),An=v(Tn,2),ds=d(An);L(()=>{C(Mr,i(W).displayName),C(ds,`(${Qe().length??""})`)}),g(Xt,_r)},$n=Xt=>{var _r=ot();L(()=>C(_r,`📦 ${vt()??""} (${Qe().length??""})`)),g(Xt,_r)};R(cs,Xt=>{i(c).groupBy==="productType"?Xt(us):Xt($n,!1)},!0)}g(ht,Ut)};R(Wt,ht=>{i(c).groupBy==="store"?ht(mr):ht(Cr,!1)})}g(de,$e)};R(wt,de=>{vt()!==""&&de(we)})}var K=v(wt,2);Re(K,17,()=>bd(Qe(),i(c)),de=>de.$id,(de,W)=>{const $e=B(()=>Bn(i(W).productType));var Pe=Nh(),Pt=d(Pe);Pt.__click=[_h,u,W];var Wt=d(Pt),mr=d(Wt),Cr=d(mr),ht=d(Cr),Ut=v(Cr,2);{var cs=X=>{var _e=gh(),We=d(_e);L(()=>C(We,`Ancien: ${i(W).previousNames[0]??""}`)),g(X,_e)};R(Ut,X=>{i(W).previousNames&&i(W).previousNames.length>0&&X(cs)})}var us=v(mr,2),$n=d(us);{var Xt=X=>{var _e=yh(),We=d(_e);qn(We,{class:"text-success h-4 w-4"}),g(X,_e)};R($n,X=>{i(W).pFrais&&X(Xt)})}var _r=v($n,2);{var Pn=X=>{var _e=bh(),We=d(_e);Ln(We,{class:"text-info h-4 w-4"}),g(X,_e)};R(_r,X=>{i(W).pSurgel&&X(Pn)})}var Tn=v(Wt,2);rn(Tn);var Mr=v(Pt);Mr.__click=[wh,u,W];var An=d(Mr);{var ds=X=>{var _e=Sh(),We=d(_e);L(()=>{Un(_e,"data-tip",i(W).storeInfo.storeComment),C(We,i(W).storeInfo.storeName||"-")}),g(X,_e)},fs=X=>{var _e=ot();L(()=>C(_e,i(W).storeInfo?.storeName||"-")),g(X,_e)};R(An,X=>{i(W).storeInfo?.storeComment?X(ds):X(fs,!1)})}var vs=v(An,2);rn(vs);var hs=v(Mr);hs.__click=[xh,u,W];var ba=d(hs);{var Fi=X=>{var _e=kh();Re(_e,20,()=>i(W).who,We=>We,(We,Nn)=>{var In=Eh(),gs=d(In);L(()=>C(gs,Nn)),g(We,In)}),g(X,_e)},el=X=>{var _e=ot("-");g(X,_e)};R(ba,X=>{i(W).who&&i(W).who.length>0?X(Fi):X(el,!1)})}var tl=v(ba,2);rn(tl);var ps=v(hs),rl=d(ps),wa=d(rl);Rn(wa,()=>i($e).icon,(X,_e)=>{_e(X,{class:"h-3 w-3"})});var nl=v(wa),ms=v(ps);ms.__click=[$h,u,W];var Sa=d(ms),sl=d(Sa),xa=v(Sa,2);{var al=X=>{var _e=Ph(),We=d(_e),Nn=d(We),In=v(Nn);ca(In,{class:"h-3 w-3"});var gs=v(We,2),ka=d(gs),fl=v(ka);_d(fl,{class:"h-3 w-3"}),L(()=>{C(Nn,`${i(W)?.nbRecipes??""} `),C(ka,`${i(W)?.totalAssiettes??""} `)}),g(X,_e)};R(xa,X=>{(i(W).nbRecipes||i(W).totalAssiettes)&&X(al)})}var ol=v(xa,2);rn(ol);var _s=v(ms);_s.__click=[Th,u,W];var Ea=d(_s),il=v(Ea);rn(il);var ll=v(_s),cl=d(ll);{var ul=X=>{var _e=Ah(),We=d(_e);L(()=>C(We,i(W).displayMissingQuantity)),g(X,_e)},dl=X=>{od(X,{size:28,strokeWidth:3,class:"text-success m-auto"})};R(cl,X=>{i(W).displayMissingQuantity!=="✅ Complet"?X(ul):X(dl,!1)})}L(()=>{C(ht,i(W).productName),Ae(Mr,1,`${i(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ae(ps,1,oi(i(c).groupBy==="productType"?"hidden":"")),C(nl,` ${i($e).displayName??""}`),C(sl,i(W).displayTotalNeeded||"-"),C(Ea,`${(i(W).displayTotalPurchases||"-")??""} `)}),g(de,Pe)}),g(V,st)});var Ir=v(ue,2);{var Xr=V=>{var he=Ch();g(V,he)};R(Ir,V=>{i(r).length===0&&V(Xr)})}var pr=v(h,2);xv(pr,{});var ft=v(pr,2);zv(ft,{}),L(()=>{C(x,` ${i(s).total??""}`),C(T,` frais:
      ${i(s).frais??""}`),C(k,` surgelés:
      ${i(s).surgel??""}`),C(S,` fusionnés:
      ${i(s).merged??""}`),ia(je,i(c).searchQuery),Br(lt,i(c).groupBy==="none"),Br(ct,i(c).groupBy==="store"),Br(fe,i(c).groupBy==="productType"),Ae(dt,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="store"?"hidden":""}`),Ae(rt,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="productType"?"hidden":""}`)}),g(e,f),H()}ur(["click","input","change"]);Ql();var Rh=P('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Oh(e){var t=Rh();g(e,t)}var qh=P('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Lh(e,t){var r=qh(),n=v(d(r),2),s=v(d(n),2),a=d(s);L(()=>C(a,t.message)),g(e,r)}var Bh=P('<div class="alert bg-error/20"><div class="flex items-start gap-3 "><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function jh(e,t){var r=Bh(),n=d(r),s=d(n);Ai(s,{class:"stroke-current shrink-0 h-6 w-6 mt-0.5"});var a=v(s,2),o=v(d(a),2),l=d(o);L(()=>C(l,t.message)),g(e,r)}var zh=P('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Vh=P('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Wh=P('<div class="text-base-content/60"> </div>'),Uh=P('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),Gh=P('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Hh=P('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Kh(e,t){G(t,!0);let r,n=se(null),s=se(!0);di(async()=>{r=Tu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await q.initialize(r)}catch(M){const Z=M instanceof Error?M.message:"Erreur lors de l'initialisation";D(n,Z,!0),console.error("[App] Erreur initialisation:",M)}finally{D(s,!1)}}),Yc(()=>{q.destroy()});const a=B(()=>i(n)||q.error),o=B(()=>i(s)||q.loading),l=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var c=Hh(),u=d(c),f=d(u),h=d(f),p=v(d(h),2),m=d(p);{var _=M=>{var Z=zh();g(M,Z)};R(m,M=>{q.realtimeConnected&&M(_)})}var x=v(m,2);{var y=M=>{var Z=Vh();g(M,Z)};R(x,M=>{q.syncing&&M(y)})}var w=v(x,2);{var T=M=>{var Z=Wh(),pe=d(Z);L(z=>C(pe,`Maj: ${z??""}`),[()=>new Date(q.lastSync).toLocaleTimeString()]),g(M,Z)};R(w,M=>{q.lastSync&&M(T)})}var A=v(w,2);{var E=M=>{var Z=Uh(),pe=d(Z),z=d(pe);fd(z,{class:"mr-2 h-4 w-4"}),L(()=>Un(pe,"href",l)),g(M,Z)};R(A,M=>{i(n)&&M(E)})}var k=v(u,2),$=d(k);{var I=M=>{jh(M,{get message(){return i(a)}})},S=M=>{var Z=U(),pe=j(Z);{var z=J=>{Lh(J,{get message(){return i(a)}})};R(pe,J=>{i(a)&&J(z)},!0)}g(M,Z)};R($,M=>{i(n)?M(I):M(S,!1)})}var O=v($,2);{var N=M=>{Oh(M)};R(O,M=>{i(o)&&M(N)})}var Q=v(O,2);{var ce=M=>{Dh(M,{})},Ne=M=>{var Z=U(),pe=j(Z);{var z=J=>{var Se=Gh();g(J,Se)};R(pe,J=>{!q.loading&&!i(n)&&J(z)},!0)}g(M,Z)};R(Q,M=>{q.enrichedProducts.length>0?M(ce):M(Ne,!1)})}g(e,c),H()}Cc(Kh,{target:document.getElementById("app_products")});
