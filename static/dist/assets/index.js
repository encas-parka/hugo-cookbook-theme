(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const va=!1;var Pn=Array.isArray,Wi=Array.prototype.indexOf,hs=Array.from,ts=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Ui=Object.getOwnPropertyDescriptors,Gi=Object.prototype,Hi=Array.prototype,ha=Object.getPrototypeOf,Ms=Object.isExtensible;function Lr(e){return typeof e=="function"}const oe=()=>{};function Ki(e){for(var t=0;t<e.length;t++)e[t]()}function pa(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function _a(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Xe=2,ps=4,_s=8,hr=16,Lt=32,pr=64,ms=128,ct=256,gn=512,Ue=1024,nt=2048,Xt=4096,pt=8192,_r=16384,gs=32768,mr=65536,Cs=1<<17,Qi=1<<18,Cr=1<<19,Yi=1<<20,rs=1<<21,kn=1<<22,ur=1<<23,dr=Symbol("$state"),ma=Symbol("legacy props"),Zi=Symbol(""),Wr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ga(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ji(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Xi(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Fi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function eo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function to(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ro(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function no(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ao(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function io(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Tn=1,$n=2,ba=4,oo=8,lo=16,co=1,uo=2,fo=4,vo=8,ho=16,po=1,_o=2,Re=Symbol(),mo="http://www.w3.org/1999/xhtml",go="http://www.w3.org/2000/svg",bo="@attach";function yo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function wo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let So=!1;function ya(e){return e===this.v}function xo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function wa(e){return!xo(e,this.v)}let Rr=!1,Eo=!1;function Po(){Rr=!0}let Ee=null;function Tr(e){Ee=e}function K(e,t=!1,r){Ee={p:Ee,c:null,e:null,s:e,x:null,l:Rr&&!t?{s:null,u:null,$:[]}:null}}function Q(e){var t=Ee,r=t.e;if(r!==null){t.e=null;for(var n of r)La(n)}return Ee=t.p,{}}function tn(){return!Rr||Ee!==null&&Ee.l===null}let cr=[];function Sa(){var e=cr;cr=[],Ki(e)}function fr(e){if(cr.length===0&&!Ur){var t=cr;queueMicrotask(()=>{t===cr&&Sa()})}cr.push(e)}function ko(){for(;cr.length>0;)Sa()}const To=new WeakMap;function xa(e){var t=ee;if(t===null)return re.f|=ur,e;if((t.f&gs)===0){if((t.f&ms)===0)throw!t.parent&&e instanceof Error&&Ea(e),e;t.b.error(e)}else $r(e,t)}function $r(e,t){for(;t!==null;){if((t.f&ms)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Ea(e),e}function Ea(e){const t=To.get(e);t&&(ts(e,"message",{value:t.message}),ts(e,"stack",{value:t.stack}))}const un=new Set;let me=null,fn=null,ns=new Set,Pt=[],An=null,ss=!1,Ur=!1;class ot{current=new Map;#t=new Map;#r=new Set;#c=0;#u=null;#a=[];#s=[];#i=[];#n=[];#o=[];#d=[];skipped_effects=new Set;process(t){Pt=[],fn=null;var r=ot.apply(this);for(const a of t)this.#f(a);if(this.#c===0){this.#e();var n=this.#s,s=this.#i;this.#s=[],this.#i=[],this.#n=[],fn=this,me=null,Rs(n),Rs(s),fn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#i),this.#l(this.#n);r();for(const a of this.#a)Qr(a);this.#a=[]}#f(t){t.f^=Ue;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Lt|pr))!==0,a=s&&(n&Ue)!==0,o=a||(n&pt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Ue:(n&ps)!==0?this.#i.push(r):(n&Ue)===0&&((n&kn)!==0&&r.b?.is_pending()?this.#a.push(r):Cn(r)&&((r.f&hr)!==0&&this.#n.push(r),Qr(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#l(t){for(const r of t)((r.f&nt)!==0?this.#o:this.#d).push(r),Qe(r,Ue);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){me=this}deactivate(){me=null}flush(){if(Pt.length>0){if(this.activate(),Pa(),me!==null&&me!==this)return}else this.#c===0&&this.#e();this.deactivate();for(const t of ns)if(ns.delete(t),t(),me!==null)break}#e(){for(const t of this.#r)t();if(this.#r.clear(),un.size>1){this.#t.clear();let t=!0;for(const r of un){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;ka(n)}if(Pt.length>0){me=r;const n=ot.apply(r);for(const s of Pt)r.#f(s);Pt=[],n()}}me=null}un.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#o)Qe(t,nt),vr(t);for(const t of this.#d)Qe(t,Xt),vr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=pa()).promise}static ensure(){if(me===null){const t=me=new ot;un.add(me),Ur||ot.enqueue(()=>{me===t&&t.flush()})}return me}static enqueue(t){fr(t)}static apply(t){return oe}}function $o(e){var t=Ur;Ur=!0;try{for(var r;;){if(ko(),Pt.length===0&&(me?.flush(),Pt.length===0))return An=null,r;Pa()}}finally{Ur=t}}function Pa(){var e=Pr;ss=!0;try{var t=0;for(Ls(!0);Pt.length>0;){var r=ot.ensure();if(t++>1e3){var n,s;Ao()}r.process(Pt),Qt.clear()}}finally{ss=!1,Ls(e),An=null}}function Ao(){try{to()}catch(e){$r(e,An)}}let lr=null;function Rs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(_r|pt))===0&&Cn(n)&&(lr=[],Qr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?za(n):n.fn=null),lr?.length>0)){Qt.clear();for(const s of lr)Qr(s);lr=[]}}lr=null}}function ka(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&Xe)!==0?ka(t):(r&(kn|hr))!==0&&(Qe(t,nt),vr(t))}}function vr(e){for(var t=An=e;t.parent!==null;){t=t.parent;var r=t.f;if(ss&&t===ee&&(r&hr)!==0)return;if((r&(pr|Lt))!==0){if((r&Ue)===0)return;t.f^=Ue}}Pt.push(t)}function Ta(e){let t=0,r=Zt(0),n;return()=>{Go()&&(i(r),Es(()=>(t===0&&(n=Or(()=>e(()=>kt(r)))),t+=1,()=>{fr(()=>{t-=1,t===0&&(n?.(),n=void 0,kt(r))})})))}}var No=mr|Cr|ms;function Io(e,t,r){new Mo(e,t,r)}class Mo{parent;#t=!1;#r;#c=null;#u;#a;#s;#i=null;#n=null;#o=null;#d=null;#f=0;#l=0;#e=!1;#v=null;#b=()=>{this.#v&&Ar(this.#v,this.#f)};#y=Ta(()=>(this.#v=Zt(this.#f),()=>{this.#v=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#a=n,this.parent=ee.b,this.#t=!!this.#u.pending,this.#s=er(()=>{ee.b=this;{try{this.#i=We(()=>n(this.#r))}catch(s){this.error(s)}this.#l>0?this.#_():this.#t=!1}},No)}#S(){try{this.#i=We(()=>this.#a(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#u.pending;t&&(this.#n=We(()=>t(this.#r)),ot.enqueue(()=>{this.#i=this.#p(()=>(ot.ensure(),We(()=>this.#a(this.#r)))),this.#l>0?this.#_():(Yt(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=ee,n=re,s=Ee;$t(this.#s),Je(this.#s),Tr(this.#s.ctx);try{return t()}catch(a){return xa(a),null}finally{$t(r),Je(n),Tr(s)}}#_(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),Co(this.#i,this.#d)),this.#n===null&&(this.#n=We(()=>t(this.#r)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#l+=t,this.#l===0&&(this.#t=!1,this.#n&&Yt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),fr(()=>{ot.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#f+=t,ns.add(this.#b)}get_effect_pending(){return this.#y(),i(this.#v)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#e||!r&&!n)throw t;this.#i&&(Le(this.#i),this.#i=null),this.#n&&(Le(this.#n),this.#n=null),this.#o&&(Le(this.#o),this.#o=null);var s=!1,a=!1;const o=()=>{if(s){wo();return}s=!0,a&&io(),ot.ensure(),this.#f=0,this.#o!==null&&Yt(this.#o,()=>{this.#o=null}),this.#t=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#e=!1,We(()=>this.#a(this.#r)))),this.#l>0?this.#_():this.#t=!1};var l=re;try{Je(null),a=!0,r?.(t,o),a=!1}catch(u){$r(u,this.#s&&this.#s.parent)}finally{Je(l)}n&&fr(()=>{this.#o=this.#p(()=>{this.#e=!0;try{return We(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return $r(u,this.#s.parent),null}finally{this.#e=!1}})})}}function Co(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:rn(r);t.append(r),r=s}}function $a(e,t,r){const n=tn()?Nn:bs;if(t.length===0){r(e.map(n));return}var s=me,a=ee,o=Ro();Promise.all(t.map(l=>Oo(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(a.f&_r)===0&&$r(u,a)}s?.deactivate(),Aa()}).catch(l=>{$r(l,a)})}function Ro(){var e=ee,t=re,r=Ee,n=me;return function(){$t(e),Je(t),Tr(r),n?.activate()}}function Aa(){$t(null),Je(null),Tr(null)}function Nn(e){var t=Xe|nt,r=re!==null&&(re.f&Xe)!==0?re:null;return ee===null||r!==null&&(r.f&ct)!==0?t|=ct:ee.f|=Cr,{ctx:Ee,deps:null,effects:null,equals:ya,f:t,fn:e,reactions:null,rv:0,v:Re,wv:0,parent:r??ee,ac:null}}function Oo(e,t){let r=ee;r===null&&Ji();var n=r.b,s=void 0,a=Zt(Re),o=!re,l=new Map;return Ko(()=>{var u=pa();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(g){u.reject(g)}var f=me,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Wr),l.set(f,u)));const h=(g,p=void 0)=>{v||f.activate(),p?p!==Wr&&(a.f|=ur,Ar(a,p)):((a.f&ur)!==0&&(a.f^=ur),Ar(a,g)),o&&(n.update_pending_count(-1),v||f.decrement()),Aa()};u.promise.then(h,g=>h(null,g||"unknown"))}),Da(()=>{for(const u of l.values())u.reject(Wr)}),new Promise(u=>{function f(v){function h(){v===s?u(a):f(s)}v.then(h,h)}f(s)})}function B(e){const t=Nn(e);return Ua(t),t}function bs(e){const t=Nn(e);return t.equals=wa,t}function Na(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Le(t[r])}}function Do(e){for(var t=e.parent;t!==null;){if((t.f&Xe)===0)return t;t=t.parent}return null}function ys(e){var t,r=ee;$t(Do(e));try{Na(e),t=Qa(e)}finally{$t(r)}return t}function Ia(e){var t=ys(e);if(e.equals(t)||(e.v=t,e.wv=Ha()),!gr){var r=(Ht||(e.f&ct)!==0)&&e.deps!==null?Xt:Ue;Qe(e,r)}}const Qt=new Map;function Zt(e,t){var r={f:0,v:e,reactions:null,equals:ya,rv:0,wv:0};return r}function ue(e,t){const r=Zt(e);return Ua(r),r}function qo(e,t=!1,r=!0){const n=Zt(e);return t||(n.equals=wa),Rr&&r&&Ee!==null&&Ee.l!==null&&(Ee.l.s??=[]).push(n),n}function O(e,t,r=!1){re!==null&&(!vt||(re.f&Cs)!==0)&&tn()&&(re.f&(Xe|hr|kn|Cs))!==0&&!Dt?.includes(e)&&ao();let n=r?ht(t):t;return Ar(e,n)}function Ar(e,t){if(!e.equals(t)){var r=e.v;gr?Qt.set(e,t):Qt.set(e,r),e.v=t;var n=ot.ensure();n.capture(e,r),(e.f&Xe)!==0&&((e.f&nt)!==0&&ys(e),Qe(e,(e.f&ct)===0?Ue:Xt)),e.wv=Ha(),Ma(e,nt),tn()&&ee!==null&&(ee.f&Ue)!==0&&(ee.f&(Lt|pr))===0&&(it===null?Zo([e]):it.push(e))}return t}function kt(e){O(e,e.v+1)}function Ma(e,t){var r=e.reactions;if(r!==null)for(var n=tn(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!n&&o===ee)){var u=(l&nt)===0;u&&Qe(o,t),(l&Xe)!==0?Ma(o,Xt):u&&((l&hr)!==0&&lr!==null&&lr.push(o),vr(o))}}}function ht(e){if(typeof e!="object"||e===null||dr in e)return e;const t=ha(e);if(t!==Gi&&t!==Hi)return e;var r=new Map,n=Pn(e),s=ue(0),a=qt,o=l=>{if(qt===a)return l();var u=re,f=qt;Je(null),js(a);var v=l();return Je(u),js(f),v};return n&&r.set("length",ue(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&no();var v=r.get(u);return v===void 0?v=o(()=>{var h=ue(f.value);return r.set(u,h),h}):O(v,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const v=o(()=>ue(Re));r.set(u,v),kt(s)}}else O(f,Re),kt(s);return!0},get(l,u,f){if(u===dr)return e;var v=r.get(u),h=u in l;if(v===void 0&&(!h||Kt(l,u)?.writable)&&(v=o(()=>{var p=ht(h?l[u]:Re),m=ue(p);return m}),r.set(u,v)),v!==void 0){var g=i(v);return g===Re?void 0:g}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=i(v))}else if(f===void 0){var h=r.get(u),g=h?.v;if(h!==void 0&&g!==Re)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,u){if(u===dr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==Re||Reflect.has(l,u);if(f!==void 0||ee!==null&&(!v||Kt(l,u)?.writable)){f===void 0&&(f=o(()=>{var g=v?ht(l[u]):Re,p=ue(g);return p}),r.set(u,f));var h=i(f);if(h===Re)return!1}return v},set(l,u,f,v){var h=r.get(u),g=u in l;if(n&&u==="length")for(var p=f;p<h.v;p+=1){var m=r.get(p+"");m!==void 0?O(m,Re):p in l&&(m=o(()=>ue(Re)),r.set(p+"",m))}if(h===void 0)(!g||Kt(l,u)?.writable)&&(h=o(()=>ue(void 0)),O(h,ht(f)),r.set(u,h));else{g=h.v!==Re;var y=o(()=>ht(f));O(h,y)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,f),!g){if(n&&typeof u=="string"){var E=r.get("length"),D=Number(u);Number.isInteger(D)&&D>=E.v&&O(E,D+1)}kt(s)}return!0},ownKeys(l){i(s);var u=Reflect.ownKeys(l).filter(h=>{var g=r.get(h);return g===void 0||g.v!==Re});for(var[f,v]of r)v.v!==Re&&!(f in l)&&u.push(f);return u},setPrototypeOf(){so()}})}function Os(e){try{if(e!==null&&typeof e=="object"&&dr in e)return e[dr]}catch{}return e}function Lo(e,t){return Object.is(Os(e),Os(t))}var Ds,Ca,Ra,Oa;function Bo(){if(Ds===void 0){Ds=window,Ca=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ra=Kt(t,"firstChild").get,Oa=Kt(t,"nextSibling").get,Ms(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ms(r)&&(r.__t=void 0)}}function Ft(e=""){return document.createTextNode(e)}function Nr(e){return Ra.call(e)}function rn(e){return Oa.call(e)}function c(e,t){return Nr(e)}function W(e,t=!1){{var r=Nr(e);return r instanceof Comment&&r.data===""?rn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=rn(n);return n}function jo(e){e.textContent=""}function ws(){return!1}function zo(e,t){if(t){const r=document.body;e.autofocus=!0,fr(()=>{document.activeElement===r&&e.focus()})}}let qs=!1;function Vo(){qs||(qs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function In(e){var t=re,r=ee;Je(null),$t(null);try{return e()}finally{Je(t),$t(r)}}function Ss(e,t,r,n=r){e.addEventListener(t,()=>In(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Vo()}function Wo(e){ee===null&&re===null&&eo(),re!==null&&(re.f&ct)!==0&&ee===null&&Fi(),gr&&Xi()}function Uo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Bt(e,t,r,n=!0){var s=ee;s!==null&&(s.f&pt)!==0&&(e|=pt);var a={ctx:Ee,deps:null,nodes_start:null,nodes_end:null,f:e|nt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Qr(a),a.f|=gs}catch(u){throw Le(a),u}else t!==null&&vr(a);if(n){var o=a;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Cr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Uo(o,s),re!==null&&(re.f&Xe)!==0&&(e&pr)===0)){var l=re;(l.effects??=[]).push(o)}}return a}function Go(){return re!==null&&!vt}function Da(e){const t=Bt(_s,null,!1);return Qe(t,Ue),t.teardown=e,t}function qa(e){Wo();var t=ee.f,r=!re&&(t&Lt)!==0&&(t&gs)===0;if(r){var n=Ee;(n.e??=[]).push(e)}else return La(e)}function La(e){return Bt(ps|Yi,e,!1)}function Ho(e){ot.ensure();const t=Bt(pr|Cr,e,!0);return(r={})=>new Promise(n=>{r.outro?Yt(t,()=>{Le(t),n(void 0)}):(Le(t),n(void 0))})}function xs(e){return Bt(ps,e,!1)}function Ko(e){return Bt(kn|Cr,e,!0)}function Es(e,t=0){return Bt(_s|t,e,!0)}function z(e,t=[],r=[]){$a(t,r,n=>{Bt(_s,()=>e(...n.map(i)),!0)})}function er(e,t=0){var r=Bt(hr|t,e,!0);return r}function We(e,t=!0){return Bt(Lt|Cr,e,!0,t)}function Ba(e){var t=e.teardown;if(t!==null){const r=gr,n=re;Bs(!0),Je(null);try{t.call(null)}finally{Bs(r),Je(n)}}}function ja(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&In(()=>{s.abort(Wr)});var n=r.next;(r.f&pr)!==0?r.parent=null:Le(r,t),r=n}}function Qo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Lt)===0&&Le(t),t=r}}function Le(e,t=!0){var r=!1;(t||(e.f&Qi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Yo(e.nodes_start,e.nodes_end),r=!0),ja(e,t&&!r),bn(e,0),Qe(e,_r);var n=e.transitions;if(n!==null)for(const a of n)a.stop();Ba(e);var s=e.parent;s!==null&&s.first!==null&&za(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Yo(e,t){for(;e!==null;){var r=e===t?null:rn(e);e.remove(),e=r}}function za(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Yt(e,t){var r=[];Ps(e,r,!0),Va(r,()=>{Le(e),t&&t()})}function Va(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Ps(e,t,r){if((e.f&pt)===0){if(e.f^=pt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,a=(n.f&mr)!==0||(n.f&Lt)!==0;Ps(n,t,a?r:!1),n=s}}}function Mn(e){Wa(e,!0)}function Wa(e,t){if((e.f&pt)!==0){e.f^=pt,(e.f&Ue)===0&&(Qe(e,nt),vr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&mr)!==0||(r.f&Lt)!==0;Wa(r,s?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let Pr=!1;function Ls(e){Pr=e}let gr=!1;function Bs(e){gr=e}let re=null,vt=!1;function Je(e){re=e}let ee=null;function $t(e){ee=e}let Dt=null;function Ua(e){re!==null&&(Dt===null?Dt=[e]:Dt.push(e))}let He=null,tt=0,it=null;function Zo(e){it=e}let Ga=1,Kr=0,qt=Kr;function js(e){qt=e}let Ht=!1;function Ha(){return++Ga}function Cn(e){var t=e.f;if((t&nt)!==0)return!0;if((t&Xt)!==0){var r=e.deps,n=(t&ct)!==0;if(r!==null){var s,a,o=(t&gn)!==0,l=n&&ee!==null&&!Ht,u=r.length;if((o||l)&&(ee===null||(ee.f&_r)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)a=r[s],(o||!a?.reactions?.includes(f))&&(a.reactions??=[]).push(f);o&&(f.f^=gn),l&&v!==null&&(v.f&ct)===0&&(f.f^=ct)}for(s=0;s<u;s++)if(a=r[s],Cn(a)&&Ia(a),a.wv>e.wv)return!0}(!n||ee!==null&&!Ht)&&Qe(e,Ue)}return!1}function Ka(e,t,r=!0){var n=e.reactions;if(n!==null&&!Dt?.includes(e))for(var s=0;s<n.length;s++){var a=n[s];(a.f&Xe)!==0?Ka(a,t,!1):t===a&&(r?Qe(a,nt):(a.f&Ue)!==0&&Qe(a,Xt),vr(a))}}function Qa(e){var t=He,r=tt,n=it,s=re,a=Ht,o=Dt,l=Ee,u=vt,f=qt,v=e.f;He=null,tt=0,it=null,Ht=(v&ct)!==0&&(vt||!Pr||re===null),re=(v&(Lt|pr))===0?e:null,Dt=null,Tr(e.ctx),vt=!1,qt=++Kr,e.ac!==null&&(In(()=>{e.ac.abort(Wr)}),e.ac=null);try{e.f|=rs;var h=e.fn,g=h(),p=e.deps;if(He!==null){var m;if(bn(e,tt),p!==null&&tt>0)for(p.length=tt+He.length,m=0;m<He.length;m++)p[tt+m]=He[m];else e.deps=p=He;if(!Ht||(v&Xe)!==0&&e.reactions!==null)for(m=tt;m<p.length;m++)(p[m].reactions??=[]).push(e)}else p!==null&&tt<p.length&&(bn(e,tt),p.length=tt);if(tn()&&it!==null&&!vt&&p!==null&&(e.f&(Xe|Xt|nt))===0)for(m=0;m<it.length;m++)Ka(it[m],e);return s!==null&&s!==e&&(Kr++,it!==null&&(n===null?n=it:n.push(...it))),(e.f&ur)!==0&&(e.f^=ur),g}catch(y){return xa(y)}finally{e.f^=rs,He=t,tt=r,it=n,re=s,Ht=a,Dt=o,Tr(l),vt=u,qt=f}}function Jo(e,t){let r=t.reactions;if(r!==null){var n=Wi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&Xe)!==0&&(He===null||!He.includes(t))&&(Qe(t,Xt),(t.f&(ct|gn))===0&&(t.f^=gn),Na(t),bn(t,0))}function bn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Jo(e,r[n])}function Qr(e){var t=e.f;if((t&_r)===0){Qe(e,Ue);var r=ee,n=Pr;ee=e,Pr=!0;try{(t&hr)!==0?Qo(e):ja(e),Ba(e);var s=Qa(e);e.teardown=typeof s=="function"?s:null,e.wv=Ga;var a;va&&Eo&&(e.f&nt)!==0&&e.deps}finally{Pr=n,ee=r}}}async function Xo(){await Promise.resolve(),$o()}function i(e){var t=e.f,r=(t&Xe)!==0;if(re!==null&&!vt){var n=ee!==null&&(ee.f&_r)!==0;if(!n&&!Dt?.includes(e)){var s=re.deps;if((re.f&rs)!==0)e.rv<Kr&&(e.rv=Kr,He===null&&s!==null&&s[tt]===e?tt++:He===null?He=[e]:(!Ht||!He.includes(e))&&He.push(e));else{(re.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[re]:a.includes(re)||a.push(re)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&ct)===0&&(o.f^=ct)}if(gr){if(Qt.has(e))return Qt.get(e);if(r){o=e;var u=o.v;return((o.f&Ue)===0&&o.reactions!==null||Ya(o))&&(u=ys(o)),Qt.set(o,u),u}}else r&&(o=e,Cn(o)&&Ia(o));if((e.f&ur)!==0)throw e.v;return e.v}function Ya(e){if(e.v===Re)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Qt.has(t)||(t.f&Xe)!==0&&Ya(t))return!0;return!1}function Or(e){var t=vt;try{return vt=!0,e()}finally{vt=t}}const Fo=-7169;function Qe(e,t){e.f=e.f&Fo|t}function el(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const tl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function rl(e){return tl.includes(e)}const nl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function sl(e){return e=e.toLowerCase(),nl[e]??e}const al=["touchstart","touchmove"];function il(e){return al.includes(e)}const Za=new Set,as=new Set;function Ja(e,t,r,n={}){function s(a){if(n.capture||zr.call(t,a),!a.cancelBubble)return In(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?fr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function zs(e,t,r,n={}){var s=Ja(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function tr(e){for(var t=0;t<e.length;t++)Za.add(e[t]);for(var r of as)r(e)}let Vs=null;function zr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;Vs=e;var o=0,l=Vs===e&&e.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(a=s[o]||e.target,a!==t){ts(e,"currentTarget",{configurable:!0,get(){return a||r}});var v=re,h=ee;Je(null),$t(null);try{for(var g,p=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var y=a["__"+n];if(y!=null&&(!a.disabled||e.target===a))if(Pn(y)){var[w,...E]=y;w.apply(a,[e,...E])}else y.call(a,e)}catch(D){g?p.push(D):g=D}if(e.cancelBubble||m===t||m===null)break;a=m}if(g){for(let D of p)queueMicrotask(()=>{throw D});throw g}}finally{e.__root=t,delete e.currentTarget,Je(v),$t(h)}}}function Xa(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Ir(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&po)!==0,n=(t&_o)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=Xa(a?e:"<!>"+e),r||(s=Nr(s)));var o=n||Ca?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Nr(o),u=o.lastChild;Ir(l,u)}else Ir(o,o);return o}}function ol(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=Xa(s),l=Nr(o);a=Nr(l)}var u=a.cloneNode(!0);return Ir(u,u),u}}function ll(e,t){return ol(e,t,"svg")}function rt(e=""){{var t=Ft(e+"");return Ir(t,t),t}}function H(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ft();return e.append(t,r),Ir(t,r),e}function _(e,t){e!==null&&e.before(t)}function M(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function cl(e,t){return ul(e,t)}const Sr=new Map;function ul(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0}){Bo();var l=new Set,u=h=>{for(var g=0;g<h.length;g++){var p=h[g];if(!l.has(p)){l.add(p);var m=il(p);t.addEventListener(p,zr,{passive:m});var y=Sr.get(p);y===void 0?(document.addEventListener(p,zr,{passive:m}),Sr.set(p,1)):Sr.set(p,y+1)}}};u(hs(Za)),as.add(u);var f=void 0,v=Ho(()=>{var h=r??t.appendChild(Ft());return Io(h,{pending:()=>{}},g=>{if(a){K({});var p=Ee;p.c=a}s&&(n.$$events=s),f=e(g,n)||{},a&&Q()}),()=>{for(var g of l){t.removeEventListener(g,zr);var p=Sr.get(g);--p===0?(document.removeEventListener(g,zr),Sr.delete(g)):Sr.set(g,p)}as.delete(u),h!==r&&h.parentNode?.removeChild(h)}});return dl.set(f,v),f}let dl=new WeakMap;function I(e,t,r=!1){var n=e,s=null,a=null,o=Re,l=r?mr:0,u=!1;const f=(p,m=!0)=>{u=!0,g(m,p)};var v=null;function h(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?s:a,m=o?a:s;p&&Mn(p),m&&Yt(m,()=>{o?a=null:s=null})}const g=(p,m)=>{if(o!==(o=p)){var y=ws(),w=n;if(y&&(v=document.createDocumentFragment(),v.append(w=Ft())),o?s??=m&&We(()=>m(w)):a??=m&&We(()=>m(w)),y){var E=me,D=o?s:a,A=o?a:s;D&&E.skipped_effects.delete(D),A&&E.skipped_effects.add(A),E.add_callback(h)}else h()}};er(()=>{u=!1,t(f),u||g(null,null)},l)}function fl(e,t){return t}function vl(e,t,r){for(var n=e.items,s=[],a=t.length,o=0;o<a;o++)Ps(t[o].e,s,!0);var l=a>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;jo(u),u.append(r),n.clear(),Et(e,t[0].prev,t[a-1].next)}Va(s,()=>{for(var f=0;f<a;f++){var v=t[f];l||(n.delete(v.k),Et(e,v.prev,v.next)),Le(v.e,!l)}})}function Ke(e,t,r,n,s,a=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&ba)!==0;if(u){var f=e;o=f.appendChild(Ft())}var v=null,h=!1,g=new Map,p=bs(()=>{var E=r();return Pn(E)?E:E==null?[]:hs(E)}),m,y;function w(){hl(y,m,l,g,o,s,t,n,r),a!==null&&(m.length===0?v?Mn(v):v=We(()=>a(o)):v!==null&&Yt(v,()=>{v=null}))}er(()=>{y??=ee,m=i(p);var E=m.length;if(!(h&&E===0)){h=E===0;var D,A,k,T;if(ws()){var $=new Set,q=me;for(A=0;A<E;A+=1){k=m[A],T=n(k,A);var S=l.items.get(T)??g.get(T);S?(t&(Tn|$n))!==0&&Fa(S,k,A,t):(D=ei(null,l,null,null,k,T,A,s,t,r,!0),g.set(T,D)),$.add(T)}for(const[j,N]of l.items)$.has(j)||q.skipped_effects.add(N.e);q.add_callback(w)}else w();i(p)}})}function hl(e,t,r,n,s,a,o,l,u){var f=(o&oo)!==0,v=(o&(Tn|$n))!==0,h=t.length,g=r.items,p=r.first,m=p,y,w=null,E,D=[],A=[],k,T,$,q;if(f)for(q=0;q<h;q+=1)k=t[q],T=l(k,q),$=g.get(T),$!==void 0&&($.a?.measure(),(E??=new Set).add($));for(q=0;q<h;q+=1){if(k=t[q],T=l(k,q),$=g.get(T),$===void 0){var S=n.get(T);if(S!==void 0){n.delete(T),g.set(T,S);var j=w?w.next:m;Et(r,w,S),Et(r,S,j),Yn(S,j,s),w=S}else{var N=m?m.e.nodes_start:s;w=ei(N,r,w,w===null?r.first:w.next,k,T,q,a,o,u)}g.set(T,w),D=[],A=[],m=w.next;continue}if(v&&Fa($,k,q,o),($.e.f&pt)!==0&&(Mn($.e),f&&($.a?.unfix(),(E??=new Set).delete($))),$!==m){if(y!==void 0&&y.has($)){if(D.length<A.length){var J=A[0],te;w=J.prev;var $e=D[0],C=D[D.length-1];for(te=0;te<D.length;te+=1)Yn(D[te],J,s);for(te=0;te<A.length;te+=1)y.delete(A[te]);Et(r,$e.prev,C.next),Et(r,w,$e),Et(r,C,J),m=J,w=C,q-=1,D=[],A=[]}else y.delete($),Yn($,m,s),Et(r,$.prev,$.next),Et(r,$,w===null?r.first:w.next),Et(r,w,$),w=$;continue}for(D=[],A=[];m!==null&&m.k!==T;)(m.e.f&pt)===0&&(y??=new Set).add(m),A.push(m),m=m.next;if(m===null)continue;$=m}D.push($),w=$,m=$.next}if(m!==null||y!==void 0){for(var Y=y===void 0?[]:hs(y);m!==null;)(m.e.f&pt)===0&&Y.push(m),m=m.next;var ae=Y.length;if(ae>0){var P=(o&ba)!==0&&h===0?s:null;if(f){for(q=0;q<ae;q+=1)Y[q].a?.measure();for(q=0;q<ae;q+=1)Y[q].a?.fix()}vl(r,Y,P)}}f&&fr(()=>{if(E!==void 0)for($ of E)$.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var U of n.values())Le(U.e);n.clear()}function Fa(e,t,r,n){(n&Tn)!==0&&Ar(e.v,t),(n&$n)!==0?Ar(e.i,r):e.i=r}function ei(e,t,r,n,s,a,o,l,u,f,v){var h=(u&Tn)!==0,g=(u&lo)===0,p=h?g?qo(s,!1,!1):Zt(s):s,m=(u&$n)===0?o:Zt(o),y={i:m,v:p,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Ft())}return y.e=We(()=>l(e,p,m,f),So),y.e.prev=r&&r.e,y.e.next=n&&n.e,r===null?v||(t.first=y):(r.next=y,r.e.next=y.e),n!==null&&(n.prev=y,n.e.prev=y.e),y}finally{}}function Yn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var o=rn(a);s.before(a),a=o}}function Et(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function de(e,t,...r){var n=e,s=oe,a;er(()=>{s!==(s=t())&&(a&&(Le(a),a=null),a=We(()=>s(n,...r)))},mr)}function vn(e,t,r){var n=e,s,a,o=null,l=null;function u(){a&&(Yt(a),a=null),o&&(o.lastChild.remove(),n.before(o),o=null),a=l,l=null}er(()=>{if(s!==(s=t())){var f=ws();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Ft()),a&&me.skipped_effects.add(a)),l=We(()=>r(v,s))}f?me.add_callback(u):u()}},mr)}function pl(e,t,r,n,s,a){var o,l,u=null,f=e,v;er(()=>{const h=t()||null;var g=go;h!==o&&(v&&(h===null?Yt(v,()=>{v=null,l=null}):h===l?Mn(v):Le(v)),h&&h!==l&&(v=We(()=>{if(u=document.createElementNS(g,h),Ir(u,u),n){var p=u.appendChild(Ft());n(u,p)}ee.nodes_end=u,f.before(u)})),o=h,o&&(l=o))},mr)}function _l(e,t){var r=void 0,n;er(()=>{r!==(r=t())&&(n&&(Le(n),n=null),r&&(n=We(()=>{xs(()=>r(e))})))})}function ti(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ti(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ml(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ti(e))&&(n&&(n+=" "),n+=t);return n}function gl(e){return typeof e=="object"?ml(e):e??""}const Ws=[...` 	
\r\f \v\uFEFF`];function bl(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+a;(o===0||Ws.includes(n[o-1]))&&(l===n.length||Ws.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Us(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function Zn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function yl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Zn)),s&&u.push(...Object.keys(s).map(Zn));var f=0,v=-1;const y=e.length;for(var h=0;h<y;h++){var g=e[h];if(l?g==="/"&&e[h-1]==="*"&&(l=!1):a?a===g&&(a=!1):g==="/"&&e[h+1]==="*"?l=!0:g==='"'||g==="'"?a=g:g==="("?o++:g===")"&&o--,!l&&a===!1&&o===0){if(g===":"&&v===-1)v=h;else if(g===";"||h===y-1){if(v!==-1){var p=Zn(e.substring(f,v).trim());if(!u.includes(p)){g!==";"&&h++;var m=e.substring(f,h).trim();r+=" "+m+";"}}f=h+1,v=-1}}}}return n&&(r+=Us(n)),s&&(r+=Us(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var l=bl(r,n,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var u in a){var f=!!a[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return a}function Jn(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function wl(e,t,r,n){var s=e.__style;if(s!==t){var a=yl(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(Jn(e,r?.[0],n[0]),Jn(e,r?.[1],n[1],"important")):Jn(e,r,n));return n}function yn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Pn(t))return yo();for(var n of e.options)n.selected=t.includes(Gr(n));return}for(n of e.options){var s=Gr(n);if(Lo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ri(e){var t=new MutationObserver(()=>{yn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Da(()=>{t.disconnect()})}function is(e,t,r=t){var n=!0;Ss(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),Gr);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&Gr(l)}r(o)}),xs(()=>{var s=t();if(yn(e,s,n),n&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=Gr(a),r(s))}e.__value=s,n=!1}),ri(e)}function Gr(e){return"__value"in e?e.__value:e.value}const Br=Symbol("class"),jr=Symbol("style"),ni=Symbol("is custom element"),si=Symbol("is html");function Sl(e,t){var r=Rn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function kr(e,t){var r=Rn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function xl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function wn(e,t,r,n){var s=Rn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Zi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ai(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function El(e,t,r,n,s=!1,a=!1){var o=Rn(e),l=o[ni],u=!o[si],f=t||{},v=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=gl(r.class):r[Br]&&(r.class=null),r[jr]&&(r.style??=null);var g=ai(e);for(const k in r){let T=r[k];if(v&&k==="value"&&T==null){e.value=e.__value="",f[k]=T;continue}if(k==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,p,T,n,t?.[Br],r[Br]),f[k]=T,f[Br]=r[Br];continue}if(k==="style"){wl(e,T,t?.[jr],r[jr]),f[k]=T,f[jr]=r[jr];continue}var m=f[k];if(!(T===m&&!(T===void 0&&e.hasAttribute(k)))){f[k]=T;var y=k[0]+k[1];if(y!=="$$")if(y==="on"){const $={},q="$$"+k;let S=k.slice(2);var w=rl(S);if(el(S)&&(S=S.slice(0,-7),$.capture=!0),!w&&m){if(T!=null)continue;e.removeEventListener(S,f[q],$),f[q]=null}if(T!=null)if(w)e[`__${S}`]=T,tr([S]);else{let j=function(N){f[k].call(this,N)};var A=j;f[q]=Ja(S,e,j,$)}else w&&(e[`__${S}`]=void 0)}else if(k==="style")wn(e,k,T);else if(k==="autofocus")zo(e,!!T);else if(!l&&(k==="__value"||k==="value"&&T!=null))e.value=e.__value=T;else if(k==="selected"&&v)xl(e,T);else{var E=k;u||(E=sl(E));var D=E==="defaultValue"||E==="defaultChecked";if(T==null&&!l&&!D)if(o[k]=null,E==="value"||E==="checked"){let $=e;const q=t===void 0;if(E==="value"){let S=$.defaultValue;$.removeAttribute(E),$.defaultValue=S,$.value=$.__value=q?S:null}else{let S=$.defaultChecked;$.removeAttribute(E),$.defaultChecked=S,$.checked=q?S:!1}}else e.removeAttribute(k);else D||g.includes(E)&&(l||typeof T!="string")?(e[E]=T,E in o&&(o[E]=Re)):typeof T!="function"&&wn(e,E,T)}}}return f}function Gs(e,t,r=[],n=[],s,a=!1,o=!1){$a(r,n,l=>{var u=void 0,f={},v=e.nodeName==="SELECT",h=!1;if(er(()=>{var p=t(...l.map(i)),m=El(e,u,p,s,a,o);h&&v&&"value"in p&&yn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||Le(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var y=p[w];w.description===bo&&(!u||y!==u[w])&&(f[w]&&Le(f[w]),f[w]=We(()=>_l(e,()=>y))),m[w]=y}u=m}),v){var g=e;xs(()=>{yn(g,u.value,!0),ri(g)})}h=!0})}function Rn(e){return e.__attributes??={[ni]:e.nodeName.includes("-"),[si]:e.namespaceURI===mo}}var Hs=new Map;function ai(e){var t=e.getAttribute("is")||e.nodeName,r=Hs.get(t);if(r)return r;Hs.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=Ui(s);for(var o in n)n[o].set&&r.push(o);s=ha(s)}return r}function Ve(e,t,r=t){var n=new WeakSet;Ss(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Xn(e)?Fn(a):a,r(a),me!==null&&n.add(me),await Xo(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Or(t)==null&&e.value&&(r(Xn(e)?Fn(e.value):e.value),me!==null&&n.add(me)),Es(()=>{var s=t();if(e===document.activeElement){var a=fn??me;if(n.has(a))return}Xn(e)&&s===Fn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Pl(e,t,r=t){Ss(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Or(t)==null&&r(e.checked),Es(()=>{var n=t();e.checked=!!n})}function Xn(e){var t=e.type;return t==="number"||t==="range"}function Fn(e){return e===""?null:+e}let dn=!1;function kl(e){var t=dn;try{return dn=!1,[e(),dn]}finally{dn=t}}const Tl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function fe(e,t,r){return new Proxy({props:e,exclude:t},Tl)}const $l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Lr(s)&&(s=s());const a=Kt(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Lr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Kt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===dr||t===ma)return!1;for(let r of e.props)if(Lr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Lr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ve(...e){return new Proxy({props:e},$l)}function xr(e,t,r,n){var s=!Rr||(r&uo)!==0,a=(r&vo)!==0,o=(r&ho)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=o?Or(n):n),l),v;if(a){var h=dr in e||ma in e;v=Kt(e,t)?.set??(h&&t in e?A=>e[t]=A:void 0)}var g,p=!1;a?[g,p]=kl(()=>e[t]):g=e[t],g===void 0&&n!==void 0&&(g=f(),v&&(s&&ro(),v(g)));var m;if(s?m=()=>{var A=e[t];return A===void 0?f():(u=!0,A)}:m=()=>{var A=e[t];return A!==void 0&&(l=void 0),A===void 0?l:A},s&&(r&fo)===0)return m;if(v){var y=e.$$legacy;return(function(A,k){return arguments.length>0?((!s||!k||y||p)&&v(k?m():A),A):m()})}var w=!1,E=((r&co)!==0?Nn:bs)(()=>(w=!1,m()));a&&i(E);var D=ee;return(function(A,k){if(arguments.length>0){const T=k?i(E):s&&a?ht(A):A;return O(E,T),w=!0,l!==void 0&&(l=T),A}return gr&&w||(D.f&_r)!==0?E.v:i(E)})}function ii(e){Ee===null&&ga(),Rr&&Ee.l!==null?Nl(Ee).m.push(e):qa(()=>{const t=Or(e);if(typeof t=="function")return t})}function Al(e){Ee===null&&ga(),ii(()=>()=>Or(e))}function Nl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Il="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Il);class Ml extends Map{#t=new Map;#r=ue(0);#c=ue(0);#u=qt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#a(t){return qt===this.#u?ue(t):Zt(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#t,s=n.get(t),a=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#a(0),n.set(t,s),O(this.#c,super.size),kt(l);else if(a!==r){kt(s);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!s.reactions?.every(v=>u.has(v));f&&kt(l)}return o}delete(t){var r=this.#t,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),O(this.#c,super.size),O(n,-1),kt(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#t;O(this.#c,0);for(var r of t.values())O(r,-1);kt(this.#r),t.clear()}}#s(){i(this.#r);var t=this.#t;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#a(0);t.set(r,n)}}for([,n]of this.#t)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#c),super.size}}class Cl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class oi{constructor(t){this.generateIdentifier=t,this.kv=new Cl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Rl extends oi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Ol(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Dl(e,t){const r=Ol(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const a=n[s];if(t(a))return a}}function Mr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function hn(e,t){return e.indexOf(t)!==-1}function Ks(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class ql{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Dl(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Ll=e=>Object.prototype.toString.call(e).slice(8,-1),li=e=>typeof e>"u",Bl=e=>e===null,Yr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,os=e=>Yr(e)&&Object.keys(e).length===0,Jt=e=>Array.isArray(e),jl=e=>typeof e=="string",zl=e=>typeof e=="number"&&!isNaN(e),Vl=e=>typeof e=="boolean",Wl=e=>e instanceof RegExp,Zr=e=>e instanceof Map,Jr=e=>e instanceof Set,ci=e=>Ll(e)==="Symbol",Ul=e=>e instanceof Date&&!isNaN(e.valueOf()),Gl=e=>e instanceof Error,Qs=e=>typeof e=="number"&&isNaN(e),Hl=e=>Vl(e)||Bl(e)||li(e)||zl(e)||jl(e)||ci(e),Kl=e=>typeof e=="bigint",Ql=e=>e===1/0||e===-1/0,Yl=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Zl=e=>e instanceof URL,ui=e=>e.replace(/\./g,"\\."),es=e=>e.map(String).map(ui).join("."),Hr=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let a=e.charAt(s);if(a==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(a==="."){t.push(r),r="";continue}r+=a}const n=r;return t.push(n),t};function xt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const di=[xt(li,"undefined",()=>null,()=>{}),xt(Kl,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),xt(Ul,"Date",e=>e.toISOString(),e=>new Date(e)),xt(Gl,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),xt(Wl,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),xt(Jr,"set",e=>[...e.values()],e=>new Set(e)),xt(Zr,"map",e=>[...e.entries()],e=>new Map(e)),xt(e=>Qs(e)||Ql(e),"number",e=>Qs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),xt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),xt(Zl,"URL",e=>e.toString(),e=>new URL(e))];function On(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const fi=On((e,t)=>ci(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Jl=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),vi=On(Yl,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Jl[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function hi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const pi=On(hi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),_i=On((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Xl=[pi,fi,_i,vi],Ys=(e,t)=>{const r=Ks(Xl,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ks(di,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},mi={};di.forEach(e=>{mi[e.annotation]=e});const Fl=(e,t,r)=>{if(Jt(t))switch(t[0]){case"symbol":return fi.untransform(e,t,r);case"class":return pi.untransform(e,t,r);case"custom":return _i.untransform(e,t,r);case"typed-array":return vi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=mi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Er=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function gi(e){if(hn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(hn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(hn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const ec=(e,t)=>{gi(t);for(let r=0;r<t.length;r++){const n=t[r];if(Jr(e))e=Er(e,+n);else if(Zr(e)){const s=+n,a=+t[++r]==0?"key":"value",o=Er(e,s);switch(a){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},ls=(e,t,r)=>{if(gi(t),t.length===0)return r(e);let n=e;for(let a=0;a<t.length-1;a++){const o=t[a];if(Jt(n)){const l=+o;n=n[l]}else if(Yr(n))n=n[o];else if(Jr(n)){const l=+o;n=Er(n,l)}else if(Zr(n)){if(a===t.length-2)break;const u=+o,f=+t[++a]==0?"key":"value",v=Er(n,u);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(Jt(n)?n[+s]=r(n[+s]):Yr(n)&&(n[s]=r(n[s])),Jr(n)){const a=Er(n,+s),o=r(a);a!==o&&(n.delete(a),n.add(o))}if(Zr(n)){const a=+t[t.length-2],o=Er(n,a);switch(+s==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function cs(e,t,r=[]){if(!e)return;if(!Jt(e)){Mr(e,(a,o)=>cs(a,t,[...r,...Hr(o)]));return}const[n,s]=e;s&&Mr(s,(a,o)=>{cs(a,t,[...r,...Hr(o)])}),t(n,r)}function tc(e,t,r){return cs(t,(n,s)=>{e=ls(e,s,a=>Fl(a,n,r))}),e}function rc(e,t){function r(n,s){const a=ec(e,Hr(s));n.map(Hr).forEach(o=>{e=ls(e,o,()=>a)})}if(Jt(t)){const[n,s]=t;n.forEach(a=>{e=ls(e,Hr(a),()=>e)}),s&&Mr(s,r)}else Mr(t,r);return e}const nc=(e,t)=>Yr(e)||Jt(e)||Zr(e)||Jr(e)||hi(e,t);function sc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function ac(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[a,...o]=s;a.length===0?n=o.map(es):r[es(a)]=o.map(es)}),n?os(r)?[n]:[n,r]:os(r)?void 0:r}const bi=(e,t,r,n,s=[],a=[],o=new Map)=>{const l=Hl(e);if(!l){sc(e,s,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!nc(e,r)){const p=Ys(e,r),m=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,m),m}if(hn(a,e))return{transformedValue:null};const u=Ys(e,r),f=u?.value??e,v=Jt(f)?[]:{},h={};Mr(f,(p,m)=>{if(m==="__proto__"||m==="constructor"||m==="prototype")throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);const y=bi(p,t,r,n,[...s,m],[...a,e],o);v[m]=y.transformedValue,Jt(y.annotations)?h[m]=y.annotations:Yr(y.annotations)&&Mr(y.annotations,(w,E)=>{h[ui(m)+"."+E]=w})});const g=os(h)?{transformedValue:v,annotations:u?[u.type]:void 0}:{transformedValue:v,annotations:u?[u.type,h]:h};return l||o.set(e,g),g};function yi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Zs(e){return yi(e)==="Array"}function ic(e){if(yi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function oc(e,t,r,n,s){const a={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";a==="enumerable"&&(e[t]=r),s&&a==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function us(e,t={}){if(Zs(e))return e.map(s=>us(s,t));if(!ic(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,a)=>{if(Zs(t.props)&&!t.props.includes(a))return s;const o=e[a],l=us(o,t);return oc(s,a,l,e,t.nonenumerable),s},{})}class ne{constructor({dedupe:t=!1}={}){this.classRegistry=new Rl,this.symbolRegistry=new oi(r=>r.description??""),this.customTransformerRegistry=new ql,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=bi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const a=ac(r,this.dedupe);return a&&(s.meta={...s.meta,referentialEqualities:a}),s}deserialize(t){const{json:r,meta:n}=t;let s=us(r);return n?.values&&(s=tc(s,n.values,this)),n?.referentialEqualities&&(s=rc(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}ne.defaultInstance=new ne;ne.serialize=ne.defaultInstance.serialize.bind(ne.defaultInstance);ne.deserialize=ne.defaultInstance.deserialize.bind(ne.defaultInstance);ne.stringify=ne.defaultInstance.stringify.bind(ne.defaultInstance);ne.parse=ne.defaultInstance.parse.bind(ne.defaultInstance);ne.registerClass=ne.defaultInstance.registerClass.bind(ne.defaultInstance);ne.registerSymbol=ne.defaultInstance.registerSymbol.bind(ne.defaultInstance);ne.registerCustom=ne.defaultInstance.registerCustom.bind(ne.defaultInstance);ne.allowErrorProps=ne.defaultInstance.allowErrorProps.bind(ne.defaultInstance);ne.serialize;ne.deserialize;ne.stringify;ne.parse;ne.registerClass;ne.registerCustom;ne.registerSymbol;ne.allowErrorProps;function lc(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function cc(e,t){return`${e}_${t}`}const uc=typeof window<"u"?window:void 0;function dc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class fc{#t;#r;constructor(t={}){const{window:r=uc,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Ta(s=>{const a=zs(r,"focusin",s),o=zs(r,"focusout",s);return()=>{a(),o()}}))}get current(){return this.#r?.(),this.#t?dc(this.#t):null}}new fc;function vc(e){return typeof e=="function"}function hc(e,t){if(vc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function pc(e,t){let r=ue(null);const n=B(()=>hc(t,250));function s(...a){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const u=new Promise((f,v)=>{o=f,l=v});O(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);O(r,null);try{o.resolve(await e.apply(this,a))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return s.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),O(r,null))},s.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),s}function _c(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class b{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var wi,Si;class Xr{static custom(t){return t}static unique(t=7){const r=_c(Xr,wi,"m",Si).call(Xr);let n="";for(let s=0;s<t;s++){const a=Math.floor(Math.random()*16).toString(16);n+=a}return r+n}}wi=Xr,Si=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Js;(function(e){e.Totp="totp"})(Js||(Js={}));var Xs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Xs||(Xs={}));var Fs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Fs||(Fs={}));var ea;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ea||(ea={}));var ta;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ta||(ta={}));var ra;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ra||(ra={}));var na;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(na||(na={}));var sa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(sa||(sa={}));var aa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(aa||(aa={}));async function rr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function mc(e,t={}){const{limit:r=100,orderBy:n="productName",orderDirection:s="asc"}=t;try{const{databases:a,config:o}=await rr(),l=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(n==="productName"?"productName":"$updatedAt"),b.limit(r),b.select(["*","purchases.*"])]),f=l.documents;return console.log(`[Appwrite Interactions] ${l.documents.length} produits chargés avec achats`),f}catch(a){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${o}`)}}async function ds(e){try{const{databases:t,config:r}=await rr();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[b.equal("$id",e),b.select(["*","purchases.*"])])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function gc(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{allProducts:[]};try{const{databases:s,config:a}=await rr(),[o,l]=await Promise.all([s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.select(["*","purchases.*"]),b.limit(n)]),s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.select(["products.$id"]),b.limit(n)])]);let u=o.documents;const f=new Set(u.map(v=>v.$id));if(l.documents.length>0){const v=l.documents.flatMap(h=>Array.isArray(h.products)?h.products.map(g=>g.$id):[]).filter((h,g,p)=>p.indexOf(h)===g).filter(h=>!f.has(h));if(console.log(`[Appwrite Interactions] Affected products from purchases: ${v.length}`),console.log("[Appwrite Interactions] Affected product IDs:",v),v.length>0)try{console.log("[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",v);const h=await ds(v);console.log(`[Appwrite Interactions] Reloaded ${h.length} products:`,JSON.stringify(h,null,2)),u=[...u,...h]}catch(h){throw console.error("[Appwrite Interactions] Erreur lors du rechargement des products:",h),h}}return u.length>0&&console.log(`[Appwrite Interactions] Sync total: ${u.length} produits synchronisés`),{allProducts:u}}catch(s){console.error(`[Appwrite Interactions] Erreur sync pour mainId ${e}:`,s);const a=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${a}`)}}async function ks(e,t){try{const{databases:r,config:n}=await rr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function bc(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await ks(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function ia(e,t){return ks(e,{who:t})}async function oa(e,t){return ks(e,{stockReel:t})}async function yc(e){try{const{databases:t,config:r}=await rr(),a=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:a.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Xr.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function wc(e,t){try{const{databases:r,config:n}=await rr(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),a={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,a);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,a),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Sc(e){try{const{databases:t,config:r}=await rr();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function xc(e){if(!e?.length)return[];try{const{databases:t,config:r}=await rr(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[b.equal("$id",e),b.select(["*","products"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ec(e,t={}){let r=null;const n=a=>{const{events:o,payload:l}=a;if(!l)return;const u=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),h=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(u){const p=l;v&&t.onProductCreate?t.onProductCreate(p):h&&t.onProductUpdate?t.onProductUpdate(p):g&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):g&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:a=>{console.error("[Appwrite Interactions] Erreur realtime:",a),t.onError?.(a)}}))}catch(a){console.error("[Appwrite Interactions] Impossible de configurer realtime:",a),t.onError?.(a)}})(),()=>{r&&(r(),r=null)}}const la=1e3,Pc=500;class kc{#t=new Ml;#r=ue(null);#c=ue(!1);#u=ue(!1);#a=ue(null);#s=ue(!1);#i=ue(!1);#n=ue(null);#o=null;#d=null;#f=null;#l=null;#e=ue(ht({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#e)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#c)}get loading(){return i(this.#u)}get error(){return i(this.#a)}get syncing(){return i(this.#s)}get realtimeConnected(){return i(this.#i)}get lastSync(){return i(this.#n)}#v=B(()=>Array.from(this.#t.values()));get enrichedProducts(){return i(this.#v)}set enrichedProducts(t){O(this.#v,t)}#b=B(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#b)}set stats(t){O(this.#b,t)}#y=B(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#y)}set uniqueStores(t){O(this.#y,t)}#S=B(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#S)}set uniqueWho(t){O(this.#S,t)}#x=B(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#x)}set uniqueProductTypes(t){O(this.#x,t)}#p=B(()=>this.enrichedProducts.filter(t=>this.#R(t)));get filteredProducts(){return i(this.#p)}set filteredProducts(t){O(this.#p,t)}#_=B(()=>{const t=this.filteredProducts;return i(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#_)}set filteredGroupedProducts(t){O(this.#_,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#c)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),O(this.#r,t,!0),this.#o=cc("products-enriched",t);try{await this.#w(),this.#t.size===0?await this.#$(t):await this.#I(),O(this.#c,!0);const r=this.#C();this.#f=Ec(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw O(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}}async#w(){if(this.#o)try{const t=localStorage.getItem(this.#o);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n}=ne.parse(t);r.forEach(([s,a])=>this.#t.set(s,a)),O(this.#n,n,!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#E(){if(this.#o)try{const t={lastSync:i(this.#n),products:Array.from(this.#t.entries())};localStorage.setItem(this.#o,ne.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}async#$(t){O(this.#u,!0),O(this.#a,null);try{const n=await mc(t,{limit:la,orderBy:"productName",orderDirection:"asc"});n.forEach(s=>{const a=this.#m(s);this.#t.set(s.$id,a)}),this.#h(),this.#E(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw O(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}finally{O(this.#u,!1)}}async#I(){if(!(!i(this.#n)||!i(this.#r))){O(this.#s,!0);try{const t={lastSync:i(this.#n),limit:la},{allProducts:r}=await gc(i(this.#r),t),n=new Map(r.map(s=>[s.$id,s]));r.length>0&&(r.forEach(s=>{const a=this.#m(s);this.#t.set(s.$id,a)}),console.log(`[ProductsStore] ${r.length} produits appliqués du sync`)),r.length>0&&(this.#h(),this.#E(),console.log(`[ProductsStore] Sync complétée: ${r.length} produits`))}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{O(this.#s,!1)}}}#m(t){const r=this.#D(t.purchases??[]),n=t.totalNeededConsolidated?this.#O(t.totalNeededConsolidated):[],{numeric:s,display:a}=this.#q(n,r);return{...t,storeInfo:t.store?this.#k(t.store):null,totalNeededArray:n,totalPurchasesArray:r,recipesArray:this.#k(t.recipesOccurrences)??[],stockArray:this.#k(t.stockReel)??[],missingQuantityArray:s,displayTotalNeeded:this.#N(n),displayTotalPurchases:this.#N(r),displayMissingQuantity:a}}#P(t){const r=this.#m(t);this.#t.set(t.$id,r)}#M(t){this.#t.delete(t)}async#L(t){if(!t?.length)return;const r=new Set(t.filter(n=>n.products?.length>0).flatMap(n=>n.products).map(n=>typeof n=="string"?n:n.$id).filter(Boolean));if(r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await ds(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(s=>{const a=this.#m(s);this.#t.set(s.$id,a)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#A(t){if(!t?.length)return;const r=new Set,n=[],s=t.filter(o=>o.products?.length>0);if(n.push(...t.filter(o=>!o.products?.length)),s.flatMap(o=>o.products).map(o=>typeof o=="string"?o:o.$id).filter(Boolean).forEach(o=>r.add(o)),n.length>0){console.log(`[ProductsStore] ${n.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);try{(await xc(n.map(l=>l.$id))).forEach(l=>{if(l.products?.length>0){l.products.map(v=>typeof v=="string"?v:v.$id).filter(Boolean).forEach(v=>r.add(v));const f=t.findIndex(v=>v.$id===l.$id);f>=0&&(t[f]=l)}})}catch(o){console.error("[ProductsStore] Erreur rechargement ciblé des purchases:",o)}}if(r.size!==0){for(const o of r){const l=this.#t.get(o);if(l){let u=l.purchases||[];t.forEach(v=>{const h=u.findIndex(g=>g.$id===v.$id);h>=0?u[h]=v:u.push(v)});const f=this.#m({...l,purchases:u});this.#t.set(o,f)}}try{(await ds(Array.from(r))).forEach(l=>{const u=this.#m(l);this.#t.set(l.$id,u)})}catch(o){console.warn("[ProductsStore] Erreur rechargement async:",o)}}}#C(){return{onProductCreate:t=>{this.#P(t),this.#h(),this.#g()},onProductUpdate:t=>{this.#P(t),this.#h(),this.#g()},onProductDelete:t=>{this.#M(t),this.#h(),this.#g()},onPurchaseCreate:t=>{this.#A([t]),this.#h(),this.#g()},onPurchaseUpdate:t=>{this.#A([t]),this.#h(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#P(n)}),this.#h(),this.#g()},onConnect:()=>{O(this.#i,!0)},onDisconnect:()=>{O(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#g(){this.#l&&clearTimeout(this.#l),this.#l=setTimeout(()=>{this.#E(),this.#l=null},Pc)}#h(){O(this.#n,new Date().toISOString(),!0)}#R(t){if(i(this.#e).searchQuery.trim()){const r=i(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#e).selectedStores.includes(t.storeInfo.storeName))||i(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#e).selectedWho.includes(r)))||i(this.#e).selectedProductTypes.length>0&&(!t.productType||!i(this.#e).selectedProductTypes.includes(t.productType))||i(this.#e).selectedTemperatures.length>0&&!(i(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=pc(t=>{i(this.#e).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#e).selectedProductTypes.indexOf(t);r>-1?i(this.#e).selectedProductTypes.splice(r,1):i(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#e).selectedTemperatures.indexOf(t);r>-1?i(this.#e).selectedTemperatures.splice(r,1):i(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#e).selectedProductTypes=[],i(this.#e).selectedTemperatures=[]}setGroupBy(t){i(this.#e).groupBy=t}toggleStore(t){const r=i(this.#e).selectedStores.indexOf(t);r>-1?i(this.#e).selectedStores.splice(r,1):i(this.#e).selectedStores.push(t)}toggleWho(t){const r=i(this.#e).selectedWho.indexOf(t);r>-1?i(this.#e).selectedWho.splice(r,1):i(this.#e).selectedWho.push(t)}clearStoreFilters(){i(this.#e).selectedStores=[]}clearWhoFilters(){i(this.#e).selectedWho=[]}handleSort(t){i(this.#e).sortColumn===t?i(this.#e).sortDirection=i(this.#e).sortDirection==="asc"?"desc":"asc":(i(this.#e).sortColumn=t,i(this.#e).sortDirection="asc")}clearFilters(){O(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[i(this.#e).sortColumn],a=n[i(this.#e).sortColumn];return i(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,a=parseFloat(a)||0):i(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,a=n.purchases?.length||0),s<a?i(this.#e).sortDirection==="asc"?-1:1:s>a?i(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.#t.clear(),O(this.#n,null),await this.#$(t)}clearCache(){this.#t.clear(),O(this.#n,null),this.#o&&localStorage.removeItem(this.#o),this.#d&&localStorage.removeItem(this.#d),console.log("[ProductsStore] Cache vidé")}destroy(){this.#f?.(),this.#f=null,this.#l&&(clearTimeout(this.#l),this.#l=null),console.log("[ProductsStore] Ressources nettoyées")}#k(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(r){return console.warn("[ProductsStore] Erreur parsing JSON:",r),null}}#O(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#D(t){if(!t?.length)return[];const r=new Map;return t.forEach(n=>{if(!n.quantity||!n.unit)return;const s=parseFloat(n.quantity);if(isNaN(s))return;const a=r.get(n.unit)||0;r.set(n.unit,a+s)}),Array.from(r.entries()).map(([n,s])=>({quantity:s,unit:n}))}#q(t,r){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!r?.length){const u=t.map(f=>this.#T(f.quantity.toString(),f.unit)).join(" et ");return{numeric:t,display:u}}const n=new Map,s=new Map;t.forEach(u=>{const f=parseFloat(u.quantity);isNaN(f)||n.set(u.unit,(n.get(u.unit)||0)+f)}),r.forEach(u=>{s.set(u.unit,(s.get(u.unit)||0)+u.quantity)});const a=[],o=[];n.forEach((u,f)=>{const v=s.get(f)||0,h=u-v;h>0&&(a.push({quantity:h,unit:f}),o.push(this.#T(h.toString(),f)))});const l=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:l}}#N(t){return t?.length?t.map(r=>this.#T(r.quantity.toString(),r.unit)).join(" et "):"-"}#T(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,a=r==="gr."?"kg":"l.";let l=(Math.round(s*100)/100).toString();return l.endsWith(",0")&&(l=l.slice(0,-2)),l.endsWith(",00")&&(l=l.slice(0,-3)),`${l} ${a}`}if(!["gr.","ml","kg","l."].includes(r)){let a=(Math.round(n*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${r}`}return`${n} ${r}`}}const L=new kc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Tc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var $c=ll("<svg><!><!></svg>");function he(e,t){K(t,!0);const r=xr(t,"color",3,"currentColor"),n=xr(t,"size",3,24),s=xr(t,"strokeWidth",3,2),a=xr(t,"absoluteStrokeWidth",3,!1),o=xr(t,"iconNode",19,()=>[]),l=fe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=$c();Gs(u,h=>({...Tc,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(s())*24/Number(n()):s()]);var f=c(u);Ke(f,17,o,fl,(h,g)=>{var p=B(()=>_a(i(g),2));let m=()=>i(p)[0],y=()=>i(p)[1];var w=H(),E=W(w);pl(E,m,!0,(D,A)=>{Gs(D,()=>({...y()}))}),_(h,w)});var v=d(f);de(v,()=>t.children??oe),_(e,u),Q()}function fs(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];he(e,ve({name:"archive"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Ac(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];he(e,ve({name:"bean"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Nc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];he(e,ve({name:"beef"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Ic(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];he(e,ve({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Mc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];he(e,ve({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Cc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];he(e,ve({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Rc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];he(e,ve({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Oc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];he(e,ve({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Dc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];he(e,ve({name:"combine"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function qc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];he(e,ve({name:"egg"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function vs(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];he(e,ve({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function ca(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];he(e,ve({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Lc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];he(e,ve({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Bc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];he(e,ve({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function jc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];he(e,ve({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Sn(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];he(e,ve({name:"package"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function zc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];he(e,ve({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Vc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];he(e,ve({name:"save"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Wc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];he(e,ve({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function pn(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];he(e,ve({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function xn(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];he(e,ve({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function _n(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];he(e,ve({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Vr(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];he(e,ve({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Fr(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];he(e,ve({name:"store"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function xi(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];he(e,ve({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Uc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];he(e,ve({name:"user"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function En(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];he(e,ve({name:"users"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function Gc(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];he(e,ve({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}function lt(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];he(e,ve({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=H(),l=W(o);de(l,()=>t.children??oe),_(s,o)},$$slots:{default:!0}})),Q()}const Tt=ht({product:{id:"",isOpen:!1,tab:"recettes"}});function Hc(e,t){Tt.product.tab=e,Tt.product.isOpen=!0,Tt.product.id=t}function ua(){Tt.product.isOpen=!1,Tt.product.tab="",Tt.product.id=""}let da=()=>localStorage.getItem("appwrite-user-name")||"";function mn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Ac};case"animaux":return{displayName:"Viandes et Poissons",icon:Nc};case"legumes":return{displayName:"Fruits et Légumes",icon:Mc};case"sucres":return{displayName:"Sucrées",icon:Ic};case"lof":return{displayName:"L.O.F",icon:qc};case"autres":return{displayName:"Autres",icon:Cc};case"epices":return{displayName:"Assaisonnements",icon:Lc};case"frais":return{displayName:"Produits Frais",icon:zc};default:return{displayName:e,icon:Sn}}}function fa(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Ei(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function en(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Kc(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Qc(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],a=n[t.sortColumn];return s<a?t.sortDirection==="asc"?-1:1:s>a?t.sortDirection==="asc"?1:-1:0}):e}function Yc(e){let t=ue(!1),r=ue(null),n=ue("recettes");const s=B(()=>L.getEnrichedProductById(e)),a=B(()=>i(s)?.recipesArray??[]),o=B(()=>i(s)?.who??[]),l=B(()=>i(s)?.stockArray??[]),u=B(()=>i(s)?.purchases??[]),f=ht({purchase:{quantity:null,unit:"",store:"",who:da()??"",price:null,notes:""},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});qa(()=>{i(s)&&(f.purchase.quantity=i(s).missingQuantityArray[0]?.quantity??null,f.purchase.unit=i(s).totalNeededArray[0]?.unit??"",f.purchase.store=i(s).storeInfo?.storeName??"",f.purchase.who=da()??"",f.stock.unit=i(s).totalNeededArray[0]?.unit??"",f.store.name=i(s).storeInfo?.storeName??null,f.store.comment=i(s).storeInfo?.storeComment??null)});let v=ue(null);const h=B(()=>i(v)?i(u).find(S=>S.$id===i(v))??null:null);async function g(S,j){O(t,!0),O(r,null);try{const N=await S();return j&&p("success",j),N}catch(N){const J=N instanceof Error?N.message:"Une erreur est survenue";return O(r,J,!0),p("error",J),console.error("[ProductModalState]",N),null}finally{O(t,!1)}}function p(S,j){const N=new CustomEvent("toast",{detail:{type:S,message:j}});window.dispatchEvent(N)}async function m(){i(s)&&await g(async()=>{if(!f.purchase.quantity||!f.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!L.currentMainId)throw new Error("mainId non disponible");const{quantity:S,unit:j}=fa(f.purchase.quantity,f.purchase.unit);await yc({products:[i(s).$id],mainId:L.currentMainId,unit:j,quantity:S,store:f.purchase.store||null,who:f.purchase.who||null,notes:f.purchase.notes||"",price:f.purchase.price||null}),f.purchase={quantity:i(s).missingQuantityArray[0]?.quantity??null,unit:i(s).totalNeededArray[0]?.unit??"",store:f.purchase.store,who:f.purchase.who,price:null,notes:""}},"Achat ajouté avec succès")}function y(S){O(v,S.$id,!0)}function w(){O(v,null)}async function E(S){S.$id&&await g(async()=>{const{quantity:j,unit:N}=fa(S.quantity,S.unit);await wc(S.$id,{unit:N,quantity:j,store:S.store||null,who:S.who||null,notes:S.notes||"",price:S.price||null}),O(v,null)},"Achat modifié avec succès")}async function D(S){const j=i(u).find(N=>N.$id===S);j&&confirm(`Supprimer cet achat (${j.quantity} ${j.unit}) ?`)&&await g(async()=>{await Sc(S)},"Achat supprimé avec succès")}async function A(){i(s)&&await g(async()=>{if(!f.stock.quantity||!f.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:f.stock.quantity.toString(),unit:f.stock.unit,notes:f.stock.notes,dateTime:f.stock.dateTime},j=[...i(l),S];await oa(i(s).$id,JSON.stringify(j)),f.stock.quantity=null,f.stock.notes="",f.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function k(S){i(s)&&confirm("Supprimer ce relevé de stock ?")&&await g(async()=>{const j=i(l).filter((N,J)=>J!==S);await oa(i(s).$id,JSON.stringify(j))},"Relevé de stock supprimé")}async function T(S){!i(s)||!S.trim()||await g(async()=>{if(i(o).includes(S))throw new Error("Ce volontaire est déjà ajouté");await ia(i(s).$id,[...i(o),S.trim()])},"Volontaire ajouté")}async function $(S){i(s)&&confirm(`Retirer ${S} ?`)&&await g(async()=>{await ia(i(s).$id,i(o).filter(j=>j!==S))},"Volontaire retiré")}async function q(S){i(s)&&await g(async()=>{await bc(i(s).$id,S)},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(S){O(n,S,!0)},get product(){return i(s)},get recipes(){return i(a)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(u)},get editingPurchaseId(){return i(v)},get editingPurchaseData(){return i(h)},forms:f,addPurchase:m,startEditPurchase:y,cancelEditPurchase:w,updateEditedPurchase:E,removePurchase:D,addStock:A,removeStock:k,addVolunteer:T,removeVolunteer:$,updateStore:q,formatQuantity:Ei,formatDate:en,formatDisplayQuantity:Kc}}function Zc(e,t,r){t()&&r().addPurchase()}function Jc(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Xc(e,t){t().cancelEditPurchase()}var Fc=x('<span class="loading loading-spinner loading-sm"></span>'),eu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),tu=x('<span class="loading loading-spinner loading-sm"></span>'),ru=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),nu=(e,t,r)=>t(i(r)),su=(e,t,r)=>t(i(r).$id),au=x('<span class="loading loading-spinner loading-sm"></span>'),iu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ou=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),lu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered"><option disabled>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="0.01" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function cu(e,t){K(t,!0);let r=xr(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(v){return v.quantity!==null&&v.quantity!==0&&v.unit?.trim()!==""}function a(v){r().removePurchase(v)}function o(v){r().startEditPurchase(v)}var l=H(),u=W(l);{var f=v=>{var h=lu(),g=c(h),p=c(g);xn(p,{class:"w-5 h-5"});var m=d(g,2),y=c(m),w=d(c(y),2),E=c(w),D=d(c(E),2),A=d(E,2),k=d(c(A),2),T=c(k);T.value=T.__value="";var $=d(T);$.value=$.__value="kg";var q=d($);q.value=q.__value="gr.";var S=d(q);S.value=S.__value="l.";var j=d(S);j.value=j.__value="ml";var N=d(j);N.value=N.__value="unité";var J=d(N);J.value=J.__value="bottes";var te=d(A,2),$e=d(c(te),2),C=d(te,2),Y=d(c(C),2),ae=d(C,2),P=d(c(ae),2),U=d(ae,2),ge=d(c(U),2),Oe=d(w,2),Pe=c(Oe);Pe.__click=[Zc,n,r];var be=c(Pe);{var Ae=G=>{var ce=Fc();_(G,ce)},Be=G=>{var ce=rt("Ajouter l'achat");_(G,ce)};I(be,G=>{r().loading?G(Ae):G(Be,!1)})}var se=d(m,2);{var ye=G=>{var ce=eu(),ke=c(ce);xn(ke,{class:"w-12 h-12 mx-auto mb-2"}),_(G,ce)},Me=G=>{var ce=ou(),ke=c(ce),Se=d(c(ke));Ke(Se,21,()=>r().purchasesList,De=>De.$id,(De,X,br)=>{var At=H(),je=W(At);{var _t=st=>{var Nt=ru(),mt=c(Nt),nr=c(mt),It=c(nr),V=d(It,2),ie=c(V);ie.value=ie.__value="kg";var _e=d(ie);_e.value=_e.__value="gr.";var Ye=d(_e);Ye.value=Ye.__value="l.";var ut=d(Ye);ut.value=ut.__value="ml";var qe=d(ut);qe.value=qe.__value="unité";var Mt=d(qe);Mt.value=Mt.__value="bottes";var gt=d(mt),sr=c(gt),jt=d(gt),Ge=c(jt),dt=d(jt),ar=c(dt),bt=d(dt),zt=c(bt),Fe=d(bt),Vt=c(Fe),Ze=d(Fe),Ct=c(Ze),yt=c(Ct);yt.__click=[Jc,r,s];var Dn=c(yt);{var qn=R=>{var le=tu();_(R,le)},Ln=R=>{Vc(R,{class:"w-3 h-3"})};I(Dn,R=>{r().loading?R(qn):R(Ln,!1)})}var qr=d(yt,2);qr.__click=[Xc,r];var Bn=c(qr);lt(Bn,{class:"w-3 h-3"}),z((R,le)=>{M(ar,R),yt.disabled=le},[()=>en(i(X).$createdAt),()=>r().loading||!s(i(X))]),Ve(It,()=>i(X).quantity,R=>i(X).quantity=R),is(V,()=>i(X).unit,R=>i(X).unit=R),Ve(sr,()=>i(X).store,R=>i(X).store=R),Ve(Ge,()=>i(X).who,R=>i(X).who=R),Ve(zt,()=>i(X).price,R=>i(X).price=R),Ve(Vt,()=>i(X).notes,R=>i(X).notes=R),_(st,Nt)},Dr=st=>{var Nt=iu(),mt=c(Nt),nr=c(mt),It=d(mt),V=c(It),ie=d(It),_e=c(ie),Ye=d(ie),ut=c(Ye),qe=d(Ye),Mt=c(qe),gt=d(qe),sr=c(gt),jt=d(gt),Ge=c(jt),dt=c(Ge);dt.__click=[nu,o,X];var ar=c(dt);Vr(ar,{class:"w-4 h-4"});var bt=d(dt,2);bt.__click=[su,a,X];var zt=c(bt);{var Fe=Ze=>{var Ct=au();_(Ze,Ct)},Vt=Ze=>{lt(Ze,{class:"w-4 h-4"})};I(zt,Ze=>{r().loading?Ze(Fe):Ze(Vt,!1)})}z((Ze,Ct)=>{M(nr,Ze),M(V,i(X).store||"-"),M(_e,i(X).who||"-"),M(ut,Ct),M(Mt,i(X).price?`${i(X).price}€`:"-"),M(sr,i(X).notes||"-"),bt.disabled=r().loading},[()=>Ei(i(X).quantity,i(X).unit),()=>en(i(X).$createdAt)]),_(st,Nt)};I(je,st=>{r().editingPurchaseId===i(X).$id?st(_t):st(Dr,!1)})}_(De,At)}),_(G,ce)};I(se,G=>{r().purchasesList.length===0?G(ye):G(Me,!1)})}z(G=>Pe.disabled=G,[()=>r().loading||!n()]),Ve(D,()=>r().forms.purchase.quantity,G=>r().forms.purchase.quantity=G),is(k,()=>r().forms.purchase.unit,G=>r().forms.purchase.unit=G),Ve($e,()=>r().forms.purchase.store,G=>r().forms.purchase.store=G),Ve(Y,()=>r().forms.purchase.who,G=>r().forms.purchase.who=G),Ve(P,()=>r().forms.purchase.price,G=>r().forms.purchase.price=G),Ve(ge,()=>r().forms.purchase.notes,G=>r().forms.purchase.notes=G),_(v,h)};I(u,v=>{r()&&r().product&&v(f)})}_(e,l),Q()}tr(["click"]);async function uu(e,t){await t.modalState?.addStock()}var du=x('<span class="loading loading-spinner loading-sm"></span>'),fu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),vu=x('<span class="loading loading-spinner loading-xs"></span>'),hu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),pu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),_u=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function mu(e,t){K(t,!0);const r=B(()=>t.modalState.forms.stock);async function n(P){await t.modalState?.removeStock(P)}var s=_u(),a=c(s),o=c(a);fs(o,{class:"w-5 h-5"});var l=d(a,2),u=c(l),f=d(c(u),2),v=c(f),h=d(c(v),2),g=d(v,2),p=d(c(g),2),m=c(p);m.value=m.__value="";var y=d(m);y.value=y.__value="kg";var w=d(y);w.value=w.__value="g";var E=d(w);E.value=E.__value="l";var D=d(E);D.value=D.__value="ml";var A=d(D);A.value=A.__value="unités";var k=d(A);k.value=k.__value="pièces";var T=d(g,2),$=d(c(T),2),q=d(T,2),S=d(c(q),2),j=d(f,2),N=c(j);N.__click=[uu,t];var J=c(N);{var te=P=>{var U=du();_(P,U)},$e=P=>{var U=rt("Ajouter au stock");_(P,U)};I(J,P=>{t.modalState.loading?P(te):P($e,!1)})}var C=d(l,2);{var Y=P=>{var U=fu(),ge=c(U);fs(ge,{class:"w-12 h-12 mx-auto mb-2"}),_(P,U)},ae=P=>{var U=pu(),ge=c(U),Oe=d(c(ge));Ke(Oe,23,()=>t.modalState.stockEntries,Pe=>Pe.dateTime,(Pe,be,Ae)=>{var Be=hu(),se=c(Be),ye=c(se),Me=d(se),G=c(Me),ce=d(Me),ke=c(ce),Se=d(ce),De=c(Se);De.__click=()=>n(i(Ae));var X=c(De);{var br=je=>{var _t=vu();_(je,_t)},At=je=>{var _t=rt("Supprimer");_(je,_t)};I(X,je=>{t.modalState.loading?je(br):je(At,!1)})}z(je=>{M(ye,`${i(be).quantity??""} ${i(be).unit??""}`),M(G,je),M(ke,i(be).notes||"-"),De.disabled=t.modalState.loading},[()=>en(i(be).dateTime)]),_(Pe,Be)}),_(P,U)};I(C,P=>{t.modalState.stockEntries.length===0?P(Y):P(ae,!1)})}z(()=>N.disabled=t.modalState.loading),Ve(h,()=>i(r).quantity,P=>i(r).quantity=P),is(p,()=>i(r).unit,P=>i(r).unit=P),Ve($,()=>i(r).dateTime,P=>i(r).dateTime=P),Ve(S,()=>i(r).notes,P=>i(r).notes=P),_(e,s),Q()}tr(["click"]);var gu=(e,t)=>{e.key==="Enter"&&t()},bu=x('<span class="loading loading-spinner loading-sm"></span>'),yu=x('<span class="badge badge-primary badge-sm"> </span>'),wu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),Su=(e,t,r)=>t(r),xu=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),Eu=x('<div class="flex flex-wrap gap-2"></div>'),Pu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function ku(e,t){K(t,!0);let r=ue("");const n=B(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function s(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),O(r,""))}async function a(N){await t.modalState?.removeVolunteer(N)}var o=Pu(),l=c(o),u=c(l);En(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),h=d(c(v),2),g=c(h),p=c(g);p.__keydown=[gu,s];var m=d(g,2);m.__click=s;var y=c(m);{var w=N=>{var J=bu();_(N,J)},E=N=>{var J=rt("Ajouter");_(N,J)};I(y,N=>{t.modalState.loading?N(w):N(E,!1)})}var D=d(f,2),A=c(D),k=c(A),T=d(c(k));{var $=N=>{var J=yu(),te=c(J);z(()=>M(te,t.modalState.whoList.length)),_(N,J)};I(T,N=>{t.modalState.whoList.length>0&&N($)})}var q=d(k,2);{var S=N=>{var J=wu(),te=c(J);En(te,{class:"w-12 h-12 mx-auto mb-2"}),_(N,J)},j=N=>{var J=Eu();Ke(J,20,()=>t.modalState.whoList,te=>te,(te,$e)=>{var C=xu(),Y=c(C),ae=d(Y);ae.__click=[Su,a,$e];var P=c(ae);lt(P,{class:"w-3 h-3"}),z(()=>{M(Y,`${$e??""} `),ae.disabled=t.modalState.loading}),_(te,C)}),_(N,J)};I(q,N=>{t.modalState.whoList.length===0?N(S):N(j,!1)})}z(()=>m.disabled=t.modalState.loading||!i(n)),Ve(p,()=>i(r),N=>O(r,N)),_(e,o),Q()}tr(["keydown","click"]);var Tu=(e,t)=>{e.key==="Enter"&&t()},$u=x('<span class="loading loading-spinner loading-sm"></span>'),Au=(e,t,r)=>{O(t,""),O(r,"")},Nu=(e,t,r)=>t(r),Iu=x('<button class="btn btn-outline btn-xs"> </button>'),Mu=x('<br/><small class="opacity-75"> </small>',1),Cu=x('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),Ru=x('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),Ou=x(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),Du=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function qu(e,t){K(t,!0);const r=B(()=>t.modalState.forms.store),n=B(()=>i(r).name||""),s=B(()=>i(r).comment||"");let a=ue(ht(i(n))),o=ue(ht(i(s)));const l=B(()=>i(a).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function u(){if(!i(l))return;const P={storeName:i(a).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(P)}function f(P){O(a,P,!0)}var v=Du(),h=c(v),g=c(h);Fr(g,{class:"w-5 h-5"});var p=d(h,2),m=c(p),y=d(c(m),4),w=d(c(y),2);w.__keydown=[Tu,u];var E=d(y,2),D=d(c(E),2),A=d(E,2),k=c(A);k.__click=u;var T=c(k);{var $=P=>{var U=$u();_(P,U)},q=P=>{var U=rt("Mettre à jour");_(P,U)};I(T,P=>{t.modalState.loading?P($):P(q,!1)})}var S=d(k,2);S.__click=[Au,a,o];var j=d(A,4),N=d(c(j),2);Ke(N,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],P=>P,(P,U)=>{var ge=Iu();ge.__click=[Nu,f,U];var Oe=c(ge);z(()=>{ge.disabled=t.modalState.loading,M(Oe,U)}),_(P,ge)});var J=d(j,4),te=c(J);Fr(te,{class:"w-4 h-4"});var $e=d(te,2),C=d(c($e),2);{var Y=P=>{var U=Cu(),ge=d(c(U)),Oe=d(ge);{var Pe=be=>{var Ae=Mu(),Be=d(W(Ae)),se=c(Be);z(()=>M(se,t.modalState.product.storeInfo.storeComment)),_(be,Ae)};I(Oe,be=>{t.modalState.product.storeInfo.storeComment&&be(Pe)})}z(()=>M(ge,` ${t.modalState.product.storeInfo.storeName??""} `)),_(P,U)},ae=P=>{var U=H(),ge=W(U);{var Oe=be=>{var Ae=Ru(),Be=d(c(Ae));z(()=>M(Be,` ${t.modalState.product.store??""}`)),_(be,Ae)},Pe=be=>{var Ae=Ou();_(be,Ae)};I(ge,be=>{t.modalState.product?.store?be(Oe):be(Pe,!1)},!0)}_(P,U)};I(C,P=>{t.modalState.product?.storeInfo?P(Y):P(ae,!1)})}z(()=>{k.disabled=t.modalState.loading||!i(l),S.disabled=t.modalState.loading}),Ve(w,()=>i(a),P=>O(a,P)),Ve(D,()=>i(o),P=>O(o,P)),_(e,v),Q()}tr(["keydown","click"]);var Lu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Bu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td></tr>'),ju=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),zu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>');function Vu(e,t){K(t,!0);const r=B(()=>t.modalState.recipes);var n=zu(),s=c(n),a=c(s);Sn(a,{class:"w-5 h-5"});var o=d(s,2);{var l=f=>{var v=Lu(),h=c(v);Sn(h,{class:"w-12 h-12 mx-auto mb-2"}),_(f,v)},u=f=>{var v=ju(),h=c(v),g=d(c(h));Ke(g,21,()=>i(r),p=>p.recipeName+p.dateTimeService,(p,m)=>{var y=Bu(),w=c(y),E=c(w),D=d(w),A=c(D),k=d(D),T=c(k),$=d(k),q=c($);z(S=>{M(E,i(m).recipeName),M(A,`${i(m).quantity??""} ${i(m).unit??""}`),M(T,S),M(q,i(m).assiettes||"-")},[()=>en(i(m).dateTimeService)]),_(p,y)}),_(f,v)};I(o,f=>{i(r).length===0?f(l):f(u,!1)})}_(e,n),Q()}var Wu=x('<div class="badge badge-success gap-1"><!> Actif</div>'),Uu=x('<div class="badge badge-warning gap-1"><!> </div>'),Gu=(e,t)=>t("recettes"),Hu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ku=(e,t)=>t("achats"),Qu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Yu=(e,t)=>t("stock"),Zu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ju=(e,t)=>t("volontaires"),Xu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Fu=(e,t)=>t("magasins"),ed=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),td=x('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function rd(e,t){K(t,!0);let r=B(()=>Tt.product.tab),n=B(()=>Tt.product.id),s=B(()=>Tt.product.isOpen),a=B(()=>L.getEnrichedProductById(i(n))),o=B(()=>i(n)?Yc(i(n)):null);const l=B(()=>i(o)?.error??null),u=B(()=>i(o).stockEntries??[]),f=B(()=>i(o)?.purchasesList??[]),v=B(()=>i(o)?.recipes??[]);function h(y){Tt.product.tab=y}var g=H(),p=W(g);{var m=y=>{var w=td(),E=c(w),D=c(E),A=c(D),k=c(A),T=c(k),$=d(k,2),q=c($),S=c(q),j=d(q,2);{var N=V=>{var ie=Wu(),_e=c(ie);Oc(_e,{class:"w-3 h-3"}),_(V,ie)},J=V=>{var ie=Uu(),_e=c(ie);xi(_e,{class:"w-3 h-3"});var Ye=d(_e);z(()=>M(Ye,` ${i(a).status??""}`)),_(V,ie)};I(j,V=>{i(a).status==="active"?V(N):V(J,!1)})}var te=d(j,2),$e=d(c(te)),C=d(A,2);C.__click=function(...V){ua?.apply(this,V)};var Y=c(C);lt(Y,{class:"w-4 h-4"});var ae=d(D,2),P=c(ae);P.__click=[Gu,h];var U=c(P);Sn(U,{class:"w-4 h-4 mr-1"});var ge=d(U,2);{var Oe=V=>{var ie=Hu(),_e=c(ie);z(()=>M(_e,i(v).length)),_(V,ie)};I(ge,V=>{i(v).length>0&&V(Oe)})}var Pe=d(P,2);Pe.__click=[Ku,h];var be=c(Pe);xn(be,{class:"w-4 h-4 mr-1"});var Ae=d(be,2);{var Be=V=>{var ie=Qu(),_e=c(ie);z(()=>M(_e,i(f).length)),_(V,ie)};I(Ae,V=>{i(f).length>0&&V(Be)})}var se=d(Pe,2);se.__click=[Yu,h];var ye=c(se);fs(ye,{class:"w-4 h-4 mr-1"});var Me=d(ye,2);{var G=V=>{var ie=Zu(),_e=c(ie);z(()=>M(_e,i(u).length)),_(V,ie)};I(Me,V=>{i(u).length>0&&V(G)})}var ce=d(se,2);ce.__click=[Ju,h];var ke=c(ce);En(ke,{class:"w-4 h-4 mr-1"});var Se=d(ke,2);{var De=V=>{var ie=Xu(),_e=c(ie);z(()=>M(_e,i(a).who.length)),_(V,ie)};I(Se,V=>{i(a).who&&i(a).who.length>0&&V(De)})}var X=d(ce,2);X.__click=[Fu,h];var br=c(X);Fr(br,{class:"w-4 h-4 mr-1"});var At=d(ae,2),je=c(At);{var _t=V=>{var ie=ed(),_e=c(ie);lt(_e,{class:"w-4 h-4"});var Ye=d(_e,2),ut=c(Ye);z(()=>M(ut,`erreur : ${i(l)??""}`)),_(V,ie)};I(je,V=>{i(l)&&V(_t)})}var Dr=d(je,2),st=c(Dr);{var Nt=V=>{Vu(V,{get modalState(){return i(o)}})},mt=V=>{var ie=H(),_e=W(ie);{var Ye=qe=>{cu(qe,{get modalState(){return i(o)}})},ut=qe=>{var Mt=H(),gt=W(Mt);{var sr=Ge=>{mu(Ge,{get modalState(){return i(o)}})},jt=Ge=>{var dt=H(),ar=W(dt);{var bt=Fe=>{ku(Fe,{get modalState(){return i(o)}})},zt=Fe=>{var Vt=H(),Ze=W(Vt);{var Ct=yt=>{qu(yt,{get modalState(){return i(o)}})};I(Ze,yt=>{i(r)==="magasins"&&yt(Ct)},!0)}_(Fe,Vt)};I(ar,Fe=>{i(r)==="volontaires"?Fe(bt):Fe(zt,!1)},!0)}_(Ge,dt)};I(gt,Ge=>{i(r)==="stock"?Ge(sr):Ge(jt,!1)},!0)}_(qe,Mt)};I(_e,qe=>{i(r)==="achats"?qe(Ye):qe(ut,!1)},!0)}_(V,ie)};I(st,V=>{i(r)==="recettes"?V(Nt):V(mt,!1)})}var nr=d(At,2),It=c(nr);It.__click=function(...V){ua?.apply(this,V)},z(()=>{M(T,i(a).productName),M(S,i(a).productType),M($e,` ${i(a).displayTotalNeeded??""}`),Te(P,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Te(Pe,1,`tab ${i(r)==="achats"?"tab-active":""}`),Te(se,1,`tab ${i(r)==="stock"?"tab-active":""}`),Te(ce,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Te(X,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),_(y,w)};I(p,y=>{i(s)&&i(a)&&i(o)&&y(m)})}_(e,g),Q()}tr(["click"]);var nd=()=>L.setGroupBy("none"),sd=()=>L.setGroupBy("store"),ad=()=>L.setGroupBy("productType"),id=(e,t)=>L.toggleProductType(t),od=x("<button><!> </button>"),ld=()=>L.toggleTemperature("frais"),cd=()=>L.toggleTemperature("surgele"),ud=()=>L.clearTypeAndTemperatureFilters(),dd=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),fd=(e,t)=>L.toggleStore(t),vd=x("<button> </button>"),hd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),pd=(e,t)=>L.toggleWho(t),_d=x("<button> </button>"),md=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),gd=(e,t)=>{L.clearFilters(),O(t,!1)},bd=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function yd(e,t){K(t,!0);let r=ue(!1);const n=B(()=>L.filters),s=B(()=>L.uniqueStores),a=B(()=>L.uniqueWho),o=B(()=>L.uniqueProductTypes);var l=bd(),u=W(l),f=c(u),v=d(f,2),h=d(c(v),2),g=c(h),p=c(g),m=c(p);vs(m,{class:"w-5 h-5"});var y=d(p,2),w=c(y);lt(w,{class:"w-4 h-4"});var E=d(g,2),D=d(c(E),2),A=c(D);A.__change=[nd];var k=d(A,2);k.__change=[sd];var T=d(k,2);T.__change=[ad];var $=d(E,2),q=c($),S=d(c(q),2);Ke(S,20,()=>i(o),se=>se,(se,ye)=>{const Me=B(()=>mn(ye));var G=od();G.__click=[id,ye];var ce=c(G);vn(ce,()=>i(Me).icon,(Se,De)=>{De(Se,{class:"w-3 h-3 mr-1"})});var ke=d(ce);z(Se=>{Te(G,1,`btn btn-sm ${Se??""}`),M(ke,` ${i(Me).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(ye)?"btn-accent":"btn-dash btn-accent"]),_(se,G)});var j=d(S,2),N=c(j);N.__click=[ld];var J=c(N);pn(J,{class:"w-3 h-3"});var te=d(N,2);te.__click=[cd];var $e=c(te);_n($e,{class:"w-3 h-3"});var C=d(te,2);{var Y=se=>{var ye=dd();ye.__click=[ud];var Me=c(ye);lt(Me,{class:"w-3 h-3"}),_(se,ye)};I(C,se=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&se(Y)})}var ae=d($,2);{var P=se=>{var ye=hd(),Me=c(ye),G=d(c(Me),2);Ke(G,20,()=>i(s),ce=>ce,(ce,ke)=>{var Se=vd();Se.__click=[fd,ke];var De=c(Se);z(X=>{Te(Se,1,`btn btn-sm ${X??""}`),M(De,ke)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(ke)?"btn-accent":"btn-dash btn-accent"]),_(ce,Se)}),_(se,ye)};I(ae,se=>{i(s).length>0&&se(P)})}var U=d(ae,2);{var ge=se=>{var ye=md(),Me=c(ye),G=d(c(Me),2);Ke(G,20,()=>i(a),ce=>ce,(ce,ke)=>{var Se=_d();Se.__click=[pd,ke];var De=c(Se);z(X=>{Te(Se,1,`btn btn-sm ${X??""}`),M(De,ke)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(ke)?"btn-accent":"btn-dash btn-accent"]),_(ce,Se)}),_(se,ye)};I(U,se=>{i(a).length>0&&se(ge)})}var Oe=d(U,4);Oe.__click=[gd,r];var Pe=c(Oe);lt(Pe,{class:"w-4 h-4 mr-2"});var be=d(u,2),Ae=c(be),Be=c(Ae);vs(Be,{class:"w-6 h-6"}),z((se,ye)=>{kr(A,i(n).groupBy==="none"),kr(k,i(n).groupBy==="store"),kr(T,i(n).groupBy==="productType"),Te(N,1,`btn btn-sm ${se??""}`),Te(te,1,`btn btn-sm ${ye??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Pl(f,()=>i(r),se=>O(r,se)),_(e,l),Q()}tr(["change","click"]);var wd=()=>L.clearFilters(),Sd=e=>L.setSearchQuery(e.currentTarget.value),xd=()=>L.setGroupBy("none"),Ed=()=>L.setGroupBy("store"),Pd=()=>L.setGroupBy("productType"),kd=(e,t)=>L.toggleProductType(t),Td=x("<button><!> </button>"),$d=()=>L.toggleTemperature("frais"),Ad=()=>L.toggleTemperature("surgele"),Nd=()=>L.clearTypeAndTemperatureFilters(),Id=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Md=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Cd=(e,t)=>L.toggleStore(t),Rd=x("<button><!> </button>"),Od=()=>L.clearStoreFilters(),Dd=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),qd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ld=(e,t)=>L.toggleWho(t),Bd=x("<button><!> </button>"),jd=()=>L.clearWhoFilters(),zd=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Vd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Wd=()=>L.handleSort("productName"),Ud=()=>L.handleSort("store"),Gd=()=>L.handleSort("who"),Hd=()=>L.handleSort("productType"),Kd=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Qd=x('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Yd=(e,t,r)=>t("recettes",i(r).$id),Zd=x('<div class="text-xs text-base-content/60"> </div>'),Jd=x('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Xd=x('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Fd=(e,t,r)=>t("magasins",i(r).$id),ef=x('<div class="tooltip tooltip-info"> </div>'),tf=(e,t,r)=>t("volontaires",i(r).$id),rf=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),nf=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),sf=x('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),af=(e,t,r)=>t("achats",i(r).$id),of=x('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),lf=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),cf=x("<!> <!>",1),uf=x('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),df=x('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg "><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function ff(e,t){K(t,!0);const r=B(()=>L.filteredProducts),n=B(()=>L.filteredGroupedProducts),s=B(()=>L.stats),a=B(()=>L.uniqueStores),o=B(()=>L.uniqueWho),l=B(()=>L.uniqueProductTypes),u=B(()=>L.filters);function f(R,le){Hc(R,le)}var v=df(),h=W(v),g=c(h),p=c(g),m=c(p);ca(m,{class:"w-4 h-4 mr-1"});var y=d(m),w=d(p,2),E=c(w);pn(E,{class:"w-4 h-4 mr-1"});var D=d(E),A=d(w,2),k=c(A);_n(k,{class:"w-4 h-4 mr-1"});var T=d(k),$=d(A,2),q=c($);Dc(q,{class:"w-4 h-4 mr-1"});var S=d(q),j=d(g,2),N=c(j),J=c(N),te=c(J),$e=c(te);vs($e,{class:"w-5 h-5"});var C=d(te,2);C.__click=[wd];var Y=c(C);lt(Y,{class:"w-4 h-4"});var ae=d(N,2),P=c(ae),U=d(c(P),2),ge=c(U);Wc(ge,{class:"w-4 h-4"});var Oe=d(ge,2);Oe.__input=[Sd];var Pe=d(P,2),be=d(c(Pe),2),Ae=c(be);Ae.__change=[xd];var Be=d(Ae,2);Be.__change=[Ed];var se=d(Be,2);se.__change=[Pd];var ye=d(ae,2),Me=c(ye),G=c(Me);{var ce=R=>{var le=Md(),Wt=c(le),wt=d(c(Wt),2),et=c(wt);Ke(et,16,()=>i(l),Ie=>Ie,(Ie,Ce)=>{const St=B(()=>mn(Ce));var Rt=Td();Rt.__click=[kd,Ce];var ir=c(Rt);vn(ir,()=>i(St).icon,(at,Ot)=>{Ot(at,{class:"w-5 h-5 mr-1"})});var yr=d(ir);z(at=>{Te(Rt,1,`btn btn-sm ${at??""}`),M(yr,` ${i(St).displayName??""}`)},[()=>i(u).selectedProductTypes.length===0?"btn-soft btn-accent":i(u).selectedProductTypes.includes(Ce)?"btn-accent":"btn-dash btn-accent"]),_(Ie,Rt)});var ft=d(et,2);ft.__click=[$d];var Ut=c(ft);pn(Ut,{class:"w-5 h-5"});var xe=d(ft,2);xe.__click=[Ad];var Ne=c(xe);_n(Ne,{class:"w-5 h-5"});var we=d(xe,2);{var F=Ie=>{var Ce=Id();Ce.__click=[Nd];var St=c(Ce);lt(St,{class:"w-3 h-3"}),_(Ie,Ce)};I(we,Ie=>{(i(u).selectedProductTypes.length>0||i(u).selectedTemperatures.length>0)&&Ie(F)})}z((Ie,Ce)=>{Te(ft,1,`btn btn-sm ms-4 ${Ie??""}`),Te(xe,1,`btn btn-sm ${Ce??""}`)},[()=>i(u).selectedTemperatures.length===0?"btn-soft btn-success":i(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(u).selectedTemperatures.length===0?"btn-soft btn-info":i(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),_(R,le)};I(G,R=>{i(l).length>0&&R(ce)})}var ke=d(Me,2),Se=c(ke);{var De=R=>{var le=qd(),Wt=c(le),wt=d(c(Wt),2),et=c(wt);Ke(et,16,()=>i(a),xe=>xe,(xe,Ne)=>{var we=Rd();we.__click=[Cd,Ne];var F=c(we);Fr(F,{class:"w-3 h-3 mr-1"});var Ie=d(F);z(Ce=>{Te(we,1,`btn btn-xs ${Ce??""}`),M(Ie,` ${Ne??""}`)},[()=>i(u).selectedStores.length===0?"btn-soft btn-accent":i(u).selectedStores.includes(Ne)?"btn-accent":"btn-dash btn-accent"]),_(xe,we)});var ft=d(et,2);{var Ut=xe=>{var Ne=Dd();Ne.__click=[Od];var we=c(Ne);lt(we,{class:"w-3 h-3"}),_(xe,Ne)};I(ft,xe=>{i(u).selectedStores.length>0&&xe(Ut)})}_(R,le)};I(Se,R=>{i(a).length>0&&R(De)})}var X=d(Se,2);{var br=R=>{var le=Vd(),Wt=c(le),wt=d(c(Wt),2),et=c(wt);Ke(et,16,()=>i(o),xe=>xe,(xe,Ne)=>{var we=Bd();we.__click=[Ld,Ne];var F=c(we);Uc(F,{class:"w-3 h-3 mr-1"});var Ie=d(F);z(Ce=>{Te(we,1,`btn btn-xs ${Ce??""}`),M(Ie,` ${Ne??""}`)},[()=>i(u).selectedWho.length===0?" btn-soft btn-info":i(u).selectedWho.includes(Ne)?" btn-info":"btn-dash btn-info"]),_(xe,we)});var ft=d(et,2);{var Ut=xe=>{var Ne=zd();Ne.__click=[jd];var we=c(Ne);lt(we,{class:"w-3 h-3"}),_(xe,Ne)};I(ft,xe=>{i(u).selectedWho.length>0&&xe(Ut)})}_(R,le)};I(X,R=>{i(o).length>0&&R(br)})}var At=d(j,2),je=c(At),_t=c(je),Dr=c(_t),st=c(Dr);st.__click=[Wd];var Nt=c(st),mt=c(Nt);ca(mt,{class:"w-4 h-4"});var nr=d(mt,2);{var It=R=>{var le=rt();z(()=>M(le,i(u).sortDirection==="asc"?"↑":"↓")),_(R,le)};I(nr,R=>{i(u).sortColumn==="productName"&&R(It)})}var V=d(st);V.__click=[Ud];var ie=c(V),_e=c(ie);Fr(_e,{class:"w-4 h-4"});var Ye=d(_e,2);{var ut=R=>{var le=rt();z(()=>M(le,i(u).sortDirection==="asc"?"↑":"↓")),_(R,le)};I(Ye,R=>{i(u).sortColumn==="store"&&R(ut)})}var qe=d(V);qe.__click=[Gd];var Mt=c(qe),gt=c(Mt);En(gt,{class:"w-4 h-4"});var sr=d(gt,2);{var jt=R=>{var le=rt();z(()=>M(le,i(u).sortDirection==="asc"?"↑":"↓")),_(R,le)};I(sr,R=>{i(u).sortColumn==="who"&&R(jt)})}var Ge=d(qe);Ge.__click=[Hd];var dt=c(Ge),ar=d(c(dt));{var bt=R=>{var le=rt();z(()=>M(le,i(u).sortDirection==="asc"?"↑":"↓")),_(R,le)};I(ar,R=>{i(u).sortColumn==="productType"&&R(bt)})}var zt=d(Ge,2),Fe=c(zt),Vt=c(Fe);xn(Vt,{class:"w-4 h-4"});var Ze=d(zt),Ct=c(Ze),yt=c(Ct);Bc(yt,{class:"w-4 h-4"});var Dn=d(_t);Ke(Dn,21,()=>Object.entries(i(n)),([R,le])=>R,(R,le)=>{var Wt=B(()=>_a(i(le),2));let wt=()=>i(Wt)[0],et=()=>i(Wt)[1];var ft=cf(),Ut=W(ft);{var xe=we=>{const F=B(()=>mn(wt()));var Ie=Qd(),Ce=c(Ie),St=c(Ce),Rt=c(St);{var ir=at=>{var Ot=rt();z(()=>M(Ot,`🏪 ${wt()??""} (${et().length??""})`)),_(at,Ot)},yr=at=>{var Ot=H(),jn=W(Ot);{var zn=Gt=>{var or=Kd(),sn=c(or);vn(sn,()=>i(F).icon,(Wn,Un)=>{Un(Wn,{class:"w-4 h-4"})});var an=d(sn,2),Vn=c(an),wr=d(an,2),on=c(wr);z(()=>{M(Vn,i(F).displayName),M(on,`(${et().length??""})`)}),_(Gt,or)},nn=Gt=>{var or=rt();z(()=>M(or,`📦 ${wt()??""} (${et().length??""})`)),_(Gt,or)};I(jn,Gt=>{i(u).groupBy==="productType"?Gt(zn):Gt(nn,!1)},!0)}_(at,Ot)};I(Rt,at=>{i(u).groupBy==="store"?at(ir):at(yr,!1)})}_(we,Ie)};I(Ut,we=>{wt()!==""&&we(xe)})}var Ne=d(Ut,2);Ke(Ne,17,()=>Qc(et(),i(u)),we=>we.$id,(we,F)=>{const Ie=B(()=>mn(i(F).productType));var Ce=lf(),St=c(Ce);St.__click=[Yd,f,F];var Rt=c(St),ir=c(Rt),yr=c(ir),at=c(yr),Ot=d(yr,2);{var jn=Z=>{var pe=Zd(),ze=c(pe);z(()=>M(ze,`Ancien: ${i(F).previousNames[0]??""}`)),_(Z,pe)};I(Ot,Z=>{i(F).previousNames&&i(F).previousNames.length>0&&Z(jn)})}var zn=d(ir,2),nn=c(zn);{var Gt=Z=>{var pe=Jd(),ze=c(pe);pn(ze,{class:"w-4 h-4 text-success"}),_(Z,pe)};I(nn,Z=>{i(F).pFrais&&Z(Gt)})}var or=d(nn,2);{var sn=Z=>{var pe=Xd(),ze=c(pe);_n(ze,{class:"w-4 h-4 text-info"}),_(Z,pe)};I(or,Z=>{i(F).pSurgel&&Z(sn)})}var an=d(Rt,2),Vn=c(an);Vr(Vn,{class:"w-4 h-4 text-amber-600"});var wr=d(St);wr.__click=[Fd,f,F];var on=c(wr);{var Wn=Z=>{var pe=ef(),ze=c(pe);z(()=>{wn(pe,"data-tip",i(F).storeInfo.storeComment),M(ze,i(F).storeInfo.storeName||"-")}),_(Z,pe)},Un=Z=>{var pe=rt();z(()=>M(pe,i(F).storeInfo?.storeName||"-")),_(Z,pe)};I(on,Z=>{i(F).storeInfo?.storeComment?Z(Wn):Z(Un,!1)})}var Pi=d(on,2),ki=c(Pi);Vr(ki,{class:"w-4 h-4 text-amber-600"});var Gn=d(wr);Gn.__click=[tf,f,F];var Ts=c(Gn);{var Ti=Z=>{var pe=nf();Ke(pe,20,()=>i(F).who,ze=>ze,(ze,ln)=>{var cn=rf(),Qn=c(cn);z(()=>M(Qn,ln)),_(ze,cn)}),_(Z,pe)},$i=Z=>{var pe=rt("-");_(Z,pe)};I(Ts,Z=>{i(F).who&&i(F).who.length>0?Z(Ti):Z($i,!1)})}var Ai=d(Ts,2),Ni=c(Ai);Vr(Ni,{class:"w-4 h-4 text-amber-600"});var Hn=d(Gn),Ii=c(Hn),$s=c(Ii);vn($s,()=>i(Ie).icon,(Z,pe)=>{pe(Z,{class:"w-3 h-3"})});var Mi=d($s),As=d(Hn),Ns=c(As),Ci=c(Ns),Ri=d(Ns,2);{var Oi=Z=>{var pe=sf(),ze=c(pe);Gc(ze,{class:"w-3 h-3"});var ln=d(ze,2),cn=c(ln),Qn=d(ln,2),Vi=c(Qn);z(()=>{M(cn,`${i(F)?.nbRecipes??""} r.`),M(Vi,`${i(F)?.totalAssiettes??""} c.`)}),_(Z,pe)};I(Ri,Z=>{(i(F).nbRecipes||i(F).totalAssiettes)&&Z(Oi)})}var Kn=d(As);Kn.__click=[af,f,F];var Is=c(Kn),Di=d(Is),qi=c(Di);Vr(qi,{class:"w-4 h-4 text-amber-600"});var Li=d(Kn),Bi=c(Li);{var ji=Z=>{var pe=of(),ze=c(pe);z(()=>M(ze,i(F).displayMissingQuantity)),_(Z,pe)},zi=Z=>{Rc(Z,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(Bi,Z=>{i(F).displayMissingQuantity!=="✅ Complet"?Z(ji):Z(zi,!1)})}z(()=>{M(at,i(F).productName),Te(wr,1,`${i(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),Te(Hn,1,i(u).groupBy==="productType"?"hidden":""),M(Mi,` ${i(Ie).displayName??""}`),M(Ci,i(F).displayTotalNeeded||"-"),M(Is,`${(i(F).displayTotalPurchases||"-")??""} `)}),_(we,Ce)}),_(R,ft)});var qn=d(je,2);{var Ln=R=>{var le=uf();_(R,le)};I(qn,R=>{i(r).length===0&&R(Ln)})}var qr=d(h,2);rd(qr,{});var Bn=d(qr,2);yd(Bn,{}),z(()=>{M(y,` ${i(s).total??""}`),M(D,` frais:
      ${i(s).frais??""}`),M(T,` surgelés:
      ${i(s).surgel??""}`),M(S,` fusionnés:
      ${i(s).merged??""}`),Sl(Oe,i(u).searchQuery),kr(Ae,i(u).groupBy==="none"),kr(Be,i(u).groupBy==="store"),kr(se,i(u).groupBy==="productType"),Te(V,1,`cursor-pointer hover:bg-base-100 text-center ${i(u).groupBy==="store"?"hidden":""}`),Te(Ge,1,`cursor-pointer hover:bg-base-100 text-center ${i(u).groupBy==="productType"?"hidden":""}`)}),_(e,v),Q()}tr(["click","input","change"]);Po();var vf=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function hf(e){var t=vf();_(e,t)}var pf=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function _f(e,t){var r=pf(),n=d(c(r),2),s=d(c(n),2),a=c(s);z(()=>M(a,t.message)),_(e,r)}var mf=x('<div class="alert bg-error/20"><div class="flex items-start gap-3 "><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function gf(e,t){var r=mf(),n=c(r),s=c(n);xi(s,{class:"stroke-current shrink-0 h-6 w-6 mt-0.5"});var a=d(s,2),o=d(c(a),2),l=c(o);z(()=>M(l,t.message)),_(e,r)}var bf=x('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),yf=x('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),wf=x('<div class="text-base-content/60"> </div>'),Sf=x('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),xf=x('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Ef=x('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl font-bold text-base-content">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Pf(e,t){K(t,!0);let r,n=ue(null),s=ue(!0);ii(async()=>{r=lc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await L.initialize(r)}catch(C){const Y=C instanceof Error?C.message:"Erreur lors de l'initialisation";O(n,Y,!0),console.error("[App] Erreur initialisation:",C)}finally{O(s,!1)}}),Al(()=>{L.destroy()});const a=B(()=>i(n)||L.error),o=B(()=>i(s)||L.loading),l=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var u=Ef(),f=c(u),v=c(f),h=c(v),g=d(c(h),2),p=c(g);{var m=C=>{var Y=bf();_(C,Y)};I(p,C=>{L.realtimeConnected&&C(m)})}var y=d(p,2);{var w=C=>{var Y=yf();_(C,Y)};I(y,C=>{L.syncing&&C(w)})}var E=d(y,2);{var D=C=>{var Y=wf(),ae=c(Y);z(P=>M(ae,`Maj: ${P??""}`),[()=>new Date(L.lastSync).toLocaleTimeString()]),_(C,Y)};I(E,C=>{L.lastSync&&C(D)})}var A=d(E,2);{var k=C=>{var Y=Sf(),ae=c(Y),P=c(ae);jc(P,{class:"w-4 h-4 mr-2"}),z(()=>wn(ae,"href",l)),_(C,Y)};I(A,C=>{i(n)&&C(k)})}var T=d(f,2),$=c(T);{var q=C=>{gf(C,{get message(){return i(a)}})},S=C=>{var Y=H(),ae=W(Y);{var P=U=>{_f(U,{get message(){return i(a)}})};I(ae,U=>{i(a)&&U(P)},!0)}_(C,Y)};I($,C=>{i(n)?C(q):C(S,!1)})}var j=d($,2);{var N=C=>{hf(C)};I(j,C=>{i(o)&&C(N)})}var J=d(j,2);{var te=C=>{ff(C,{})},$e=C=>{var Y=H(),ae=W(Y);{var P=U=>{var ge=xf();_(U,ge)};I(ae,U=>{!L.loading&&!i(n)&&U(P)},!0)}_(C,Y)};I(J,C=>{L.enrichedProducts.length>0?C(te):C($e,!1)})}_(e,u),Q()}cl(Pf,{target:document.getElementById("app_products")});
