(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const bo=!1;var Qn=Array.isArray,_l=Array.prototype.indexOf,Xs=Array.from,Ds=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,gl=Object.getOwnPropertyDescriptors,yl=Object.prototype,bl=Array.prototype,wo=Object.getPrototypeOf,Aa=Object.isExtensible;function Fr(e){return typeof e=="function"}const re=()=>{};function wl(e){for(var t=0;t<e.length;t++)e[t]()}function So(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function xo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const rt=2,Fs=4,ea=8,Er=16,Yt=32,$r=64,ta=128,yt=256,zn=512,He=1024,lt=2048,lr=4096,xt=8192,kr=16384,ra=32768,Pr=65536,Na=1<<17,Sl=1<<18,Kr=1<<19,xl=1<<20,Cs=1<<21,Yn=1<<22,br=1<<23,wr=Symbol("$state"),Eo=Symbol("legacy props"),El=Symbol(""),sn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function $o(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function $l(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function kl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Pl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Tl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Al(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Nl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Il(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Dl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Cl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ml(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Zn=1,Jn=2,ko=4,Rl=8,Ol=16,ql=1,Bl=2,Ll=4,jl=8,zl=16,Vl=1,Wl=2,je=Symbol(),Ul="http://www.w3.org/1999/xhtml",Gl="http://www.w3.org/2000/svg",Hl="@attach";function Kl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ql(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Yl=!1;function Po(e){return e===this.v}function Zl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function To(e){return!Zl(e,this.v)}let Qr=!1,Jl=!1;function Xl(){Qr=!0}let De=null;function jr(e){De=e}function W(e,t=!1,r){De={p:De,c:null,e:null,s:e,x:null,l:Qr&&!t?{s:null,u:null,$:[]}:null}}function U(e){var t=De,r=t.e;if(r!==null){t.e=null;for(var n of r)Go(n)}return De=t.p,{}}function Sn(){return!Qr||De!==null&&De.l===null}let yr=[];function Ao(){var e=yr;yr=[],wl(e)}function Sr(e){if(yr.length===0&&!an){var t=yr;queueMicrotask(()=>{t===yr&&Ao()})}yr.push(e)}function Fl(){for(;yr.length>0;)Ao()}const ec=new WeakMap;function No(e){var t=F;if(t===null)return te.f|=br,e;if((t.f&ra)===0){if((t.f&ta)===0)throw!t.parent&&e instanceof Error&&Io(e),e;t.b.error(e)}else zr(e,t)}function zr(e,t){for(;t!==null;){if((t.f&ta)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Io(e),e}function Io(e){const t=ec.get(e);t&&(Ds(e,"message",{value:t.message}),Ds(e,"stack",{value:t.stack}))}const Dn=new Set;let ye=null,Mn=null,Ms=new Set,Nt=[],Xn=null,Rs=!1,an=!1;class mt{current=new Map;#t=new Map;#r=new Set;#c=0;#u=null;#a=[];#s=[];#o=[];#n=[];#i=[];#d=[];skipped_effects=new Set;process(t){Nt=[],Mn=null;var r=mt.apply(this);for(const a of t)this.#f(a);if(this.#c===0){this.#v();var n=this.#s,s=this.#o;this.#s=[],this.#o=[],this.#n=[],Mn=this,ye=null,Ia(n),Ia(s),Mn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#o),this.#l(this.#n);r();for(const a of this.#a)vn(a);this.#a=[]}#f(t){t.f^=He;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Yt|$r))!==0,a=s&&(n&He)!==0,o=a||(n&xt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=He:(n&Fs)!==0?this.#o.push(r):(n&He)===0&&((n&Yn)!==0&&r.b?.is_pending()?this.#a.push(r):rs(r)&&((r.f&Er)!==0&&this.#n.push(r),vn(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&lt)!==0?this.#i:this.#d).push(r),Xe(r,He);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){ye=this}deactivate(){ye=null}flush(){if(Nt.length>0){if(this.activate(),Do(),ye!==null&&ye!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Ms)if(Ms.delete(t),t(),ye!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),Dn.size>1){this.#t.clear();let t=!0;for(const r of Dn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Co(n)}if(Nt.length>0){ye=r;const n=mt.apply(r);for(const s of Nt)r.#f(s);Nt=[],n()}}ye=null}Dn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#i)Xe(t,lt),xr(t);for(const t of this.#d)Xe(t,lr),xr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=So()).promise}static ensure(){if(ye===null){const t=ye=new mt;Dn.add(ye),an||mt.enqueue(()=>{ye===t&&t.flush()})}return ye}static enqueue(t){Sr(t)}static apply(t){return re}}function tc(e){var t=an;an=!0;try{for(var r;;){if(Fl(),Nt.length===0&&(ye?.flush(),Nt.length===0))return Xn=null,r;Do()}}finally{an=t}}function Do(){var e=qr;Rs=!0;try{var t=0;for(Ra(!0);Nt.length>0;){var r=mt.ensure();if(t++>1e3){var n,s;rc()}r.process(Nt),rr.clear()}}finally{Rs=!1,Ra(e),Xn=null}}function rc(){try{Al()}catch(e){zr(e,Xn)}}let gr=null;function Ia(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(kr|xt))===0&&rs(n)&&(gr=[],vn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Qo(n):n.fn=null),gr?.length>0)){rr.clear();for(const s of gr)vn(s);gr=[]}}gr=null}}function Co(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&rt)!==0?Co(t):(r&(Yn|Er))!==0&&(Xe(t,lt),xr(t))}}function xr(e){for(var t=Xn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Rs&&t===F&&(r&Er)!==0)return;if((r&($r|Yt))!==0){if((r&He)===0)return;t.f^=He}}Nt.push(t)}function Mo(e){let t=0,r=or(0),n;return()=>{gc()&&(i(r),la(()=>(t===0&&(n=Yr(()=>e(()=>It(r)))),t+=1,()=>{Sr(()=>{t-=1,t===0&&(n?.(),n=void 0,It(r))})})))}}var nc=Pr|Kr|ta;function sc(e,t,r){new ac(e,t,r)}class ac{parent;#t=!1;#r;#c=null;#u;#a;#s;#o=null;#n=null;#i=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Vr(this.#h,this.#f)};#e=Mo(()=>(this.#h=or(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#a=n,this.parent=F.b,this.#t=!!this.#u.pending,this.#s=ur(()=>{F.b=this;{try{this.#o=Ge(()=>n(this.#r))}catch(s){this.error(s)}this.#l>0?this.#g():this.#t=!1}},nc)}#S(){try{this.#o=Ge(()=>this.#a(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#u.pending;t&&(this.#n=Ge(()=>t(this.#r)),mt.enqueue(()=>{this.#o=this.#_(()=>(mt.ensure(),Ge(()=>this.#a(this.#r)))),this.#l>0?this.#g():(nr(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#_(t){var r=F,n=te,s=De;Mt(this.#s),tt(this.#s),jr(this.#s.ctx);try{return t()}catch(a){return No(a),null}finally{Mt(r),tt(n),jr(s)}}#g(){const t=this.#u.pending;this.#o!==null&&(this.#d=document.createDocumentFragment(),oc(this.#o,this.#d)),this.#n===null&&(this.#n=Ge(()=>t(this.#r)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#l+=t,this.#l===0&&(this.#t=!1,this.#n&&nr(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Sr(()=>{mt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#f+=t,Ms.add(this.#p)}get_effect_pending(){return this.#e(),i(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#o&&(ze(this.#o),this.#o=null),this.#n&&(ze(this.#n),this.#n=null),this.#i&&(ze(this.#i),this.#i=null);var s=!1,a=!1;const o=()=>{if(s){Ql();return}s=!0,a&&Ml(),mt.ensure(),this.#f=0,this.#i!==null&&nr(this.#i,()=>{this.#i=null}),this.#t=this.has_pending_snippet(),this.#o=this.#_(()=>(this.#v=!1,Ge(()=>this.#a(this.#r)))),this.#l>0?this.#g():this.#t=!1};var l=te;try{tt(null),a=!0,r?.(t,o),a=!1}catch(c){zr(c,this.#s&&this.#s.parent)}finally{tt(l)}n&&Sr(()=>{this.#i=this.#_(()=>{this.#v=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return zr(c,this.#s.parent),null}finally{this.#v=!1}})})}}function oc(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:xn(r);t.append(r),r=s}}function Ro(e,t,r){const n=Sn()?Fn:na;if(t.length===0){r(e.map(n));return}var s=ye,a=F,o=ic();Promise.all(t.map(l=>lc(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(a.f&kr)===0&&zr(c,a)}s?.deactivate(),Oo()}).catch(l=>{zr(l,a)})}function ic(){var e=F,t=te,r=De,n=ye;return function(){Mt(e),tt(t),jr(r),n?.activate()}}function Oo(){Mt(null),tt(null),jr(null)}function Fn(e){var t=rt|lt,r=te!==null&&(te.f&rt)!==0?te:null;return F===null||r!==null&&(r.f&yt)!==0?t|=yt:F.f|=Kr,{ctx:De,deps:null,effects:null,equals:Po,f:t,fn:e,reactions:null,rv:0,v:je,wv:0,parent:r??F,ac:null}}function lc(e,t){let r=F;r===null&&$l();var n=r.b,s=void 0,a=or(je),o=!te,l=new Map;return bc(()=>{var c=So();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var u=ye,f=n.is_pending();o&&(n.update_pending_count(1),f||(u.increment(),l.get(u)?.reject(sn),l.set(u,c)));const h=(p,m=void 0)=>{f||u.activate(),m?m!==sn&&(a.f|=br,Vr(a,m)):((a.f&br)!==0&&(a.f^=br),Vr(a,p)),o&&(n.update_pending_count(-1),f||u.decrement()),Oo()};c.promise.then(h,p=>h(null,p||"unknown"))}),Wo(()=>{for(const c of l.values())c.reject(sn)}),new Promise(c=>{function u(f){function h(){f===s?c(a):u(s)}f.then(h,h)}u(s)})}function L(e){const t=Fn(e);return Jo(t),t}function na(e){const t=Fn(e);return t.equals=To,t}function qo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ze(t[r])}}function cc(e){for(var t=e.parent;t!==null;){if((t.f&rt)===0)return t;t=t.parent}return null}function sa(e){var t,r=F;Mt(cc(e));try{qo(e),t=ti(e)}finally{Mt(r)}return t}function Bo(e){var t=sa(e);if(e.equals(t)||(e.v=t,e.wv=Fo()),!Tr){var r=(er||(e.f&yt)!==0)&&e.deps!==null?lr:He;Xe(e,r)}}const rr=new Map;function or(e,t){var r={f:0,v:e,reactions:null,equals:Po,rv:0,wv:0};return r}function ne(e,t){const r=or(e);return Jo(r),r}function uc(e,t=!1,r=!0){const n=or(e);return t||(n.equals=To),Qr&&r&&De!==null&&De.l!==null&&(De.l.s??=[]).push(n),n}function D(e,t,r=!1){te!==null&&(!St||(te.f&Na)!==0)&&Sn()&&(te.f&(rt|Er|Yn|Na))!==0&&!Ht?.includes(e)&&Cl();let n=r?_t(t):t;return Vr(e,n)}function Vr(e,t){if(!e.equals(t)){var r=e.v;Tr?rr.set(e,t):rr.set(e,r),e.v=t;var n=mt.ensure();n.capture(e,r),(e.f&rt)!==0&&((e.f&lt)!==0&&sa(e),Xe(e,(e.f&yt)===0?He:lr)),e.wv=Fo(),Lo(e,lt),Sn()&&F!==null&&(F.f&He)!==0&&(F.f&(Yt|$r))===0&&(pt===null?xc([e]):pt.push(e))}return t}function It(e){D(e,e.v+1)}function Lo(e,t){var r=e.reactions;if(r!==null)for(var n=Sn(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!n&&o===F)){var c=(l&lt)===0;c&&Xe(o,t),(l&rt)!==0?Lo(o,lr):c&&((l&Er)!==0&&gr!==null&&gr.push(o),xr(o))}}}function _t(e){if(typeof e!="object"||e===null||wr in e)return e;const t=wo(e);if(t!==yl&&t!==bl)return e;var r=new Map,n=Qn(e),s=ne(0),a=Kt,o=l=>{if(Kt===a)return l();var c=te,u=Kt;tt(null),qa(a);var f=l();return tt(c),qa(u),f};return n&&r.set("length",ne(e.length)),new Proxy(e,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Il();var f=r.get(c);return f===void 0?f=o(()=>{var h=ne(u.value);return r.set(c,h),h}):D(f,u.value,!0),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0){if(c in l){const f=o(()=>ne(je));r.set(c,f),It(s)}}else D(u,je),It(s);return!0},get(l,c,u){if(c===wr)return e;var f=r.get(c),h=c in l;if(f===void 0&&(!h||tr(l,c)?.writable)&&(f=o(()=>{var m=_t(h?l[c]:je),_=ne(m);return _}),r.set(c,f)),f!==void 0){var p=i(f);return p===je?void 0:p}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var f=r.get(c);f&&(u.value=i(f))}else if(u===void 0){var h=r.get(c),p=h?.v;if(h!==void 0&&p!==je)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(l,c){if(c===wr)return!0;var u=r.get(c),f=u!==void 0&&u.v!==je||Reflect.has(l,c);if(u!==void 0||F!==null&&(!f||tr(l,c)?.writable)){u===void 0&&(u=o(()=>{var p=f?_t(l[c]):je,m=ne(p);return m}),r.set(c,u));var h=i(u);if(h===je)return!1}return f},set(l,c,u,f){var h=r.get(c),p=c in l;if(n&&c==="length")for(var m=u;m<h.v;m+=1){var _=r.get(m+"");_!==void 0?D(_,je):m in l&&(_=o(()=>ne(je)),r.set(m+"",_))}if(h===void 0)(!p||tr(l,c)?.writable)&&(h=o(()=>ne(void 0)),D(h,_t(u)),r.set(c,h));else{p=h.v!==je;var x=o(()=>_t(u));D(h,x)}var y=Reflect.getOwnPropertyDescriptor(l,c);if(y?.set&&y.set.call(f,u),!p){if(n&&typeof c=="string"){var b=r.get("length"),N=Number(c);Number.isInteger(N)&&N>=b.v&&D(b,N+1)}It(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(h=>{var p=r.get(h);return p===void 0||p.v!==je});for(var[u,f]of r)f.v!==je&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Dl()}})}function Da(e){try{if(e!==null&&typeof e=="object"&&wr in e)return e[wr]}catch{}return e}function dc(e,t){return Object.is(Da(e),Da(t))}var Ca,jo,zo,Vo;function fc(){if(Ca===void 0){Ca=window,jo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;zo=tr(t,"firstChild").get,Vo=tr(t,"nextSibling").get,Aa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Aa(r)&&(r.__t=void 0)}}function cr(e=""){return document.createTextNode(e)}function Wr(e){return zo.call(e)}function xn(e){return Vo.call(e)}function d(e,t){return Wr(e)}function j(e,t=!1){{var r=Wr(e);return r instanceof Comment&&r.data===""?xn(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=xn(n);return n}function vc(e){e.textContent=""}function aa(){return!1}function hc(e,t){if(t){const r=document.body;e.autofocus=!0,Sr(()=>{document.activeElement===r&&e.focus()})}}let Ma=!1;function pc(){Ma||(Ma=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function es(e){var t=te,r=F;tt(null),Mt(null);try{return e()}finally{tt(t),Mt(r)}}function oa(e,t,r,n=r){e.addEventListener(t,()=>es(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),pc()}function mc(e){F===null&&te===null&&Tl(),te!==null&&(te.f&yt)!==0&&F===null&&Pl(),Tr&&kl()}function _c(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Zt(e,t,r,n=!0){var s=F;s!==null&&(s.f&xt)!==0&&(e|=xt);var a={ctx:De,deps:null,nodes_start:null,nodes_end:null,f:e|lt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{vn(a),a.f|=ra}catch(c){throw ze(a),c}else t!==null&&xr(a);if(n){var o=a;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Kr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&_c(o,s),te!==null&&(te.f&rt)!==0&&(e&$r)===0)){var l=te;(l.effects??=[]).push(o)}}return a}function gc(){return te!==null&&!St}function Wo(e){const t=Zt(ea,null,!1);return Xe(t,He),t.teardown=e,t}function Uo(e){mc();var t=F.f,r=!te&&(t&Yt)!==0&&(t&ra)===0;if(r){var n=De;(n.e??=[]).push(e)}else return Go(e)}function Go(e){return Zt(Fs|xl,e,!1)}function yc(e){mt.ensure();const t=Zt($r|Kr,e,!0);return(r={})=>new Promise(n=>{r.outro?nr(t,()=>{ze(t),n(void 0)}):(ze(t),n(void 0))})}function ia(e){return Zt(Fs,e,!1)}function bc(e){return Zt(Yn|Kr,e,!0)}function la(e,t=0){return Zt(ea|t,e,!0)}function B(e,t=[],r=[]){Ro(t,r,n=>{Zt(ea,()=>e(...n.map(i)),!0)})}function ur(e,t=0){var r=Zt(Er|t,e,!0);return r}function Ge(e,t=!0){return Zt(Yt|Kr,e,!0,t)}function Ho(e){var t=e.teardown;if(t!==null){const r=Tr,n=te;Oa(!0),tt(null);try{t.call(null)}finally{Oa(r),tt(n)}}}function Ko(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&es(()=>{s.abort(sn)});var n=r.next;(r.f&$r)!==0?r.parent=null:ze(r,t),r=n}}function wc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Yt)===0&&ze(t),t=r}}function ze(e,t=!0){var r=!1;(t||(e.f&Sl)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Sc(e.nodes_start,e.nodes_end),r=!0),Ko(e,t&&!r),Vn(e,0),Xe(e,kr);var n=e.transitions;if(n!==null)for(const a of n)a.stop();Ho(e);var s=e.parent;s!==null&&s.first!==null&&Qo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Sc(e,t){for(;e!==null;){var r=e===t?null:xn(e);e.remove(),e=r}}function Qo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function nr(e,t){var r=[];ca(e,r,!0),Yo(r,()=>{ze(e),t&&t()})}function Yo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function ca(e,t,r){if((e.f&xt)===0){if(e.f^=xt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,a=(n.f&Pr)!==0||(n.f&Yt)!==0;ca(n,t,a?r:!1),n=s}}}function ts(e){Zo(e,!0)}function Zo(e,t){if((e.f&xt)!==0){e.f^=xt,(e.f&He)===0&&(Xe(e,lt),xr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Pr)!==0||(r.f&Yt)!==0;Zo(r,s?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let qr=!1;function Ra(e){qr=e}let Tr=!1;function Oa(e){Tr=e}let te=null,St=!1;function tt(e){te=e}let F=null;function Mt(e){F=e}let Ht=null;function Jo(e){te!==null&&(Ht===null?Ht=[e]:Ht.push(e))}let Je=null,ot=0,pt=null;function xc(e){pt=e}let Xo=1,fn=0,Kt=fn;function qa(e){Kt=e}let er=!1;function Fo(){return++Xo}function rs(e){var t=e.f;if((t&lt)!==0)return!0;if((t&lr)!==0){var r=e.deps,n=(t&yt)!==0;if(r!==null){var s,a,o=(t&zn)!==0,l=n&&F!==null&&!er,c=r.length;if((o||l)&&(F===null||(F.f&kr)===0)){var u=e,f=u.parent;for(s=0;s<c;s++)a=r[s],(o||!a?.reactions?.includes(u))&&(a.reactions??=[]).push(u);o&&(u.f^=zn),l&&f!==null&&(f.f&yt)===0&&(u.f^=yt)}for(s=0;s<c;s++)if(a=r[s],rs(a)&&Bo(a),a.wv>e.wv)return!0}(!n||F!==null&&!er)&&Xe(e,He)}return!1}function ei(e,t,r=!0){var n=e.reactions;if(n!==null&&!Ht?.includes(e))for(var s=0;s<n.length;s++){var a=n[s];(a.f&rt)!==0?ei(a,t,!1):t===a&&(r?Xe(a,lt):(a.f&He)!==0&&Xe(a,lr),xr(a))}}function ti(e){var t=Je,r=ot,n=pt,s=te,a=er,o=Ht,l=De,c=St,u=Kt,f=e.f;Je=null,ot=0,pt=null,er=(f&yt)!==0&&(St||!qr||te===null),te=(f&(Yt|$r))===0?e:null,Ht=null,jr(e.ctx),St=!1,Kt=++fn,e.ac!==null&&(es(()=>{e.ac.abort(sn)}),e.ac=null);try{e.f|=Cs;var h=e.fn,p=h(),m=e.deps;if(Je!==null){var _;if(Vn(e,ot),m!==null&&ot>0)for(m.length=ot+Je.length,_=0;_<Je.length;_++)m[ot+_]=Je[_];else e.deps=m=Je;if(!er||(f&rt)!==0&&e.reactions!==null)for(_=ot;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&ot<m.length&&(Vn(e,ot),m.length=ot);if(Sn()&&pt!==null&&!St&&m!==null&&(e.f&(rt|lr|lt))===0)for(_=0;_<pt.length;_++)ei(pt[_],e);return s!==null&&s!==e&&(fn++,pt!==null&&(n===null?n=pt:n.push(...pt))),(e.f&br)!==0&&(e.f^=br),p}catch(x){return No(x)}finally{e.f^=Cs,Je=t,ot=r,pt=n,te=s,er=a,Ht=o,jr(l),St=c,Kt=u}}function Ec(e,t){let r=t.reactions;if(r!==null){var n=_l.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&rt)!==0&&(Je===null||!Je.includes(t))&&(Xe(t,lr),(t.f&(yt|zn))===0&&(t.f^=zn),qo(t),Vn(t,0))}function Vn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ec(e,r[n])}function vn(e){var t=e.f;if((t&kr)===0){Xe(e,He);var r=F,n=qr;F=e,qr=!0;try{(t&Er)!==0?wc(e):Ko(e),Ho(e);var s=ti(e);e.teardown=typeof s=="function"?s:null,e.wv=Xo;var a;bo&&Jl&&(e.f&lt)!==0&&e.deps}finally{qr=n,F=r}}}async function $c(){await Promise.resolve(),tc()}function i(e){var t=e.f,r=(t&rt)!==0;if(te!==null&&!St){var n=F!==null&&(F.f&kr)!==0;if(!n&&!Ht?.includes(e)){var s=te.deps;if((te.f&Cs)!==0)e.rv<fn&&(e.rv=fn,Je===null&&s!==null&&s[ot]===e?ot++:Je===null?Je=[e]:(!er||!Je.includes(e))&&Je.push(e));else{(te.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[te]:a.includes(te)||a.push(te)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&yt)===0&&(o.f^=yt)}if(Tr){if(rr.has(e))return rr.get(e);if(r){o=e;var c=o.v;return((o.f&He)===0&&o.reactions!==null||ri(o))&&(c=sa(o)),rr.set(o,c),c}}else r&&(o=e,rs(o)&&Bo(o));if((e.f&br)!==0)throw e.v;return e.v}function ri(e){if(e.v===je)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(rr.has(t)||(t.f&rt)!==0&&ri(t))return!0;return!1}function Yr(e){var t=St;try{return St=!0,e()}finally{St=t}}const kc=-7169;function Xe(e,t){e.f=e.f&kc|t}function Pc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Tc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ac(e){return Tc.includes(e)}const Nc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ic(e){return e=e.toLowerCase(),Nc[e]??e}const Dc=["touchstart","touchmove"];function Cc(e){return Dc.includes(e)}const ni=new Set,Os=new Set;function si(e,t,r,n={}){function s(a){if(n.capture||nn.call(t,a),!a.cancelBubble)return es(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Sr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Ba(e,t,r,n={}){var s=si(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Rt(e){for(var t=0;t<e.length;t++)ni.add(e[t]);for(var r of Os)r(e)}let La=null;function nn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;La=e;var o=0,l=La===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;c<=u&&(o=c)}if(a=s[o]||e.target,a!==t){Ds(e,"currentTarget",{configurable:!0,get(){return a||r}});var f=te,h=F;tt(null),Mt(null);try{for(var p,m=[];a!==null;){var _=a.assignedSlot||a.parentNode||a.host||null;try{var x=a["__"+n];if(x!=null&&(!a.disabled||e.target===a))if(Qn(x)){var[y,...b]=x;y.apply(a,[e,...b])}else x.call(a,e)}catch(N){p?m.push(N):p=N}if(e.cancelBubble||_===t||_===null)break;a=_}if(p){for(let N of m)queueMicrotask(()=>{throw N});throw p}}finally{e.__root=t,delete e.currentTarget,tt(f),Mt(h)}}}function ai(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Ur(e,t){var r=F;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function k(e,t){var r=(t&Vl)!==0,n=(t&Wl)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=ai(a?e:"<!>"+e),r||(s=Wr(s)));var o=n||jo?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Wr(o),c=o.lastChild;Ur(l,c)}else Ur(o,o);return o}}function Mc(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=ai(s),l=Wr(o);a=Wr(l)}var c=a.cloneNode(!0);return Ur(c,c),c}}function Rc(e,t){return Mc(e,t,"svg")}function it(e=""){{var t=cr(e+"");return Ur(t,t),t}}function V(){var e=document.createDocumentFragment(),t=document.createComment(""),r=cr();return e.append(t,r),Ur(t,r),e}function g(e,t){e!==null&&e.before(t)}function M(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Oc(e,t){return qc(e,t)}const Mr=new Map;function qc(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0}){fc();var l=new Set,c=h=>{for(var p=0;p<h.length;p++){var m=h[p];if(!l.has(m)){l.add(m);var _=Cc(m);t.addEventListener(m,nn,{passive:_});var x=Mr.get(m);x===void 0?(document.addEventListener(m,nn,{passive:_}),Mr.set(m,1)):Mr.set(m,x+1)}}};c(Xs(ni)),Os.add(c);var u=void 0,f=yc(()=>{var h=r??t.appendChild(cr());return sc(h,{pending:()=>{}},p=>{if(a){W({});var m=De;m.c=a}s&&(n.$$events=s),u=e(p,n)||{},a&&U()}),()=>{for(var p of l){t.removeEventListener(p,nn);var m=Mr.get(p);--m===0?(document.removeEventListener(p,nn),Mr.delete(p)):Mr.set(p,m)}Os.delete(c),h!==r&&h.parentNode?.removeChild(h)}});return Bc.set(u,f),u}let Bc=new WeakMap;function O(e,t,r=!1){var n=e,s=null,a=null,o=je,l=r?Pr:0,c=!1;const u=(m,_=!0)=>{c=!0,p(_,m)};var f=null;function h(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var m=o?s:a,_=o?a:s;m&&ts(m),_&&nr(_,()=>{o?a=null:s=null})}const p=(m,_)=>{if(o!==(o=m)){var x=aa(),y=n;if(x&&(f=document.createDocumentFragment(),f.append(y=cr())),o?s??=_&&Ge(()=>_(y)):a??=_&&Ge(()=>_(y)),x){var b=ye,N=o?s:a,A=o?a:s;N&&b.skipped_effects.delete(N),A&&b.skipped_effects.add(A),b.add_callback(h)}else h()}};ur(()=>{c=!1,t(u),c||p(null,null)},l)}function Br(e,t){return t}function Lc(e,t,r){for(var n=e.items,s=[],a=t.length,o=0;o<a;o++)ca(t[o].e,s,!0);var l=a>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;vc(c),c.append(r),n.clear(),At(e,t[0].prev,t[a-1].next)}Yo(s,()=>{for(var u=0;u<a;u++){var f=t[u];l||(n.delete(f.k),At(e,f.prev,f.next)),ze(f.e,!l)}})}function qe(e,t,r,n,s,a=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&ko)!==0;if(c){var u=e;o=u.appendChild(cr())}var f=null,h=!1,p=new Map,m=na(()=>{var b=r();return Qn(b)?b:b==null?[]:Xs(b)}),_,x;function y(){jc(x,_,l,p,o,s,t,n,r),a!==null&&(_.length===0?f?ts(f):f=Ge(()=>a(o)):f!==null&&nr(f,()=>{f=null}))}ur(()=>{x??=F,_=i(m);var b=_.length;if(!(h&&b===0)){h=b===0;var N,A,E,$;if(aa()){var T=new Set,C=ye;for(A=0;A<b;A+=1){E=_[A],$=n(E,A);var S=l.items.get($)??p.get($);S?(t&(Zn|Jn))!==0&&oi(S,E,A,t):(N=ii(null,l,null,null,E,$,A,s,t,r,!0),p.set($,N)),T.add($)}for(const[q,I]of l.items)T.has(q)||C.skipped_effects.add(I.e);C.add_callback(y)}else y();i(m)}})}function jc(e,t,r,n,s,a,o,l,c){var u=(o&Rl)!==0,f=(o&(Zn|Jn))!==0,h=t.length,p=r.items,m=r.first,_=m,x,y=null,b,N=[],A=[],E,$,T,C;if(u)for(C=0;C<h;C+=1)E=t[C],$=l(E,C),T=p.get($),T!==void 0&&(T.a?.measure(),(b??=new Set).add(T));for(C=0;C<h;C+=1){if(E=t[C],$=l(E,C),T=p.get($),T===void 0){var S=n.get($);if(S!==void 0){n.delete($),p.set($,S);var q=y?y.next:_;At(r,y,S),At(r,S,q),ys(S,q,s),y=S}else{var I=_?_.e.nodes_start:s;y=ii(I,r,y,y===null?r.first:y.next,E,$,C,a,o,c)}p.set($,y),N=[],A=[],_=y.next;continue}if(f&&oi(T,E,C,o),(T.e.f&xt)!==0&&(ts(T.e),u&&(T.a?.unfix(),(b??=new Set).delete(T))),T!==_){if(x!==void 0&&x.has(T)){if(N.length<A.length){var Q=A[0],le;y=Q.prev;var Ce=N[0],be=N[N.length-1];for(le=0;le<N.length;le+=1)ys(N[le],Q,s);for(le=0;le<A.length;le+=1)x.delete(A[le]);At(r,Ce.prev,be.next),At(r,y,Ce),At(r,be,Q),_=Q,y=be,C-=1,N=[],A=[]}else x.delete(T),ys(T,_,s),At(r,T.prev,T.next),At(r,T,y===null?r.first:y.next),At(r,y,T),y=T;continue}for(N=[],A=[];_!==null&&_.k!==$;)(_.e.f&xt)===0&&(x??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;T=_}N.push(T),y=T,_=T.next}if(_!==null||x!==void 0){for(var Se=x===void 0?[]:Xs(x);_!==null;)(_.e.f&xt)===0&&Se.push(_),_=_.next;var Pe=Se.length;if(Pe>0){var J=(o&ko)!==0&&h===0?s:null;if(u){for(C=0;C<Pe;C+=1)Se[C].a?.measure();for(C=0;C<Pe;C+=1)Se[C].a?.fix()}Lc(r,Se,J)}}u&&Sr(()=>{if(b!==void 0)for(T of b)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=y&&y.e;for(var P of n.values())ze(P.e);n.clear()}function oi(e,t,r,n){(n&Zn)!==0&&Vr(e.v,t),(n&Jn)!==0?Vr(e.i,r):e.i=r}function ii(e,t,r,n,s,a,o,l,c,u,f){var h=(c&Zn)!==0,p=(c&Ol)===0,m=h?p?uc(s,!1,!1):or(s):s,_=(c&Jn)===0?o:or(o),x={i:_,v:m,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var y=document.createDocumentFragment();y.append(e=cr())}return x.e=Ge(()=>l(e,m,_,u),Yl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?f||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function ys(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var o=xn(a);s.before(a),a=o}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function se(e,t,...r){var n=e,s=re,a;ur(()=>{s!==(s=t())&&(a&&(ze(a),a=null),a=Ge(()=>s(n,...r)))},Pr)}function Rn(e,t,r){var n=e,s,a,o=null,l=null;function c(){a&&(nr(a),a=null),o&&(o.lastChild.remove(),n.before(o),o=null),a=l,l=null}ur(()=>{if(s!==(s=t())){var u=aa();if(s){var f=n;u&&(o=document.createDocumentFragment(),o.append(f=cr()),a&&ye.skipped_effects.add(a)),l=Ge(()=>r(f,s))}u?ye.add_callback(c):c()}},Pr)}function zc(e,t,r,n,s,a){var o,l,c=null,u=e,f;ur(()=>{const h=t()||null;var p=Gl;h!==o&&(f&&(h===null?nr(f,()=>{f=null,l=null}):h===l?ts(f):ze(f)),h&&h!==l&&(f=Ge(()=>{if(c=document.createElementNS(p,h),Ur(c,c),n){var m=c.appendChild(cr());n(c,m)}F.nodes_end=c,u.before(c)})),o=h,o&&(l=o))},Pr)}function Vc(e,t){var r=void 0,n;ur(()=>{r!==(r=t())&&(n&&(ze(n),n=null),r&&(n=Ge(()=>{ia(()=>r(e))})))})}function li(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=li(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Wc(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=li(e))&&(n&&(n+=" "),n+=t);return n}function ci(e){return typeof e=="object"?Wc(e):e??""}const ja=[...` 	
\r\f \v\uFEFF`];function Uc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+a;(o===0||ja.includes(n[o-1]))&&(l===n.length||ja.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function za(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function bs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Gc(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(bs)),s&&c.push(...Object.keys(s).map(bs));var u=0,f=-1;const x=e.length;for(var h=0;h<x;h++){var p=e[h];if(l?p==="/"&&e[h-1]==="*"&&(l=!1):a?a===p&&(a=!1):p==="/"&&e[h+1]==="*"?l=!0:p==='"'||p==="'"?a=p:p==="("?o++:p===")"&&o--,!l&&a===!1&&o===0){if(p===":"&&f===-1)f=h;else if(p===";"||h===x-1){if(f!==-1){var m=bs(e.substring(u,f).trim());if(!c.includes(m)){p!==";"&&h++;var _=e.substring(u,h).trim();r+=" "+_+";"}}u=h+1,f=-1}}}}return n&&(r+=za(n)),s&&(r+=za(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ie(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var l=Uc(r,n,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var u=!!a[c];(s==null||u!==!!s[c])&&e.classList.toggle(c,u)}return a}function ws(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function Hc(e,t,r,n){var s=e.__style;if(s!==t){var a=Gc(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(ws(e,r?.[0],n[0]),ws(e,r?.[1],n[1],"important")):ws(e,r,n));return n}function Wn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Qn(t))return Kl();for(var n of e.options)n.selected=t.includes(on(n));return}for(n of e.options){var s=on(n);if(dc(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ui(e){var t=new MutationObserver(()=>{Wn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wo(()=>{t.disconnect()})}function qs(e,t,r=t){var n=!0;oa(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),on);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&on(l)}r(o)}),ia(()=>{var s=t();if(Wn(e,s,n),n&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=on(a),r(s))}e.__value=s,n=!1}),ui(e)}function on(e){return"__value"in e?e.__value:e.value}const en=Symbol("class"),tn=Symbol("style"),di=Symbol("is custom element"),fi=Symbol("is html");function ua(e,t){var r=ns(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Lr(e,t){var r=ns(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Kc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Un(e,t,r,n){var s=ns(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[El]=r),r==null?e.removeAttribute(t):typeof r!="string"&&vi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Qc(e,t,r,n,s=!1,a=!1){var o=ns(e),l=o[di],c=!o[fi],u=t||{},f=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=ci(r.class):r[en]&&(r.class=null),r[tn]&&(r.style??=null);var p=vi(e);for(const E in r){let $=r[E];if(f&&E==="value"&&$==null){e.value=e.__value="",u[E]=$;continue}if(E==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ie(e,m,$,n,t?.[en],r[en]),u[E]=$,u[en]=r[en];continue}if(E==="style"){Hc(e,$,t?.[tn],r[tn]),u[E]=$,u[tn]=r[tn];continue}var _=u[E];if(!($===_&&!($===void 0&&e.hasAttribute(E)))){u[E]=$;var x=E[0]+E[1];if(x!=="$$")if(x==="on"){const T={},C="$$"+E;let S=E.slice(2);var y=Ac(S);if(Pc(S)&&(S=S.slice(0,-7),T.capture=!0),!y&&_){if($!=null)continue;e.removeEventListener(S,u[C],T),u[C]=null}if($!=null)if(y)e[`__${S}`]=$,Rt([S]);else{let q=function(I){u[E].call(this,I)};var A=q;u[C]=si(S,e,q,T)}else y&&(e[`__${S}`]=void 0)}else if(E==="style")Un(e,E,$);else if(E==="autofocus")hc(e,!!$);else if(!l&&(E==="__value"||E==="value"&&$!=null))e.value=e.__value=$;else if(E==="selected"&&f)Kc(e,$);else{var b=E;c||(b=Ic(b));var N=b==="defaultValue"||b==="defaultChecked";if($==null&&!l&&!N)if(o[E]=null,b==="value"||b==="checked"){let T=e;const C=t===void 0;if(b==="value"){let S=T.defaultValue;T.removeAttribute(b),T.defaultValue=S,T.value=T.__value=C?S:null}else{let S=T.defaultChecked;T.removeAttribute(b),T.defaultChecked=S,T.checked=C?S:!1}}else e.removeAttribute(E);else N||p.includes(b)&&(l||typeof $!="string")?(e[b]=$,b in o&&(o[b]=je)):typeof $!="function"&&Un(e,b,$)}}}return u}function Va(e,t,r=[],n=[],s,a=!1,o=!1){Ro(r,n,l=>{var c=void 0,u={},f=e.nodeName==="SELECT",h=!1;if(ur(()=>{var m=t(...l.map(i)),_=Qc(e,c,m,s,a,o);h&&f&&"value"in m&&Wn(e,m.value);for(let y of Object.getOwnPropertySymbols(u))m[y]||ze(u[y]);for(let y of Object.getOwnPropertySymbols(m)){var x=m[y];y.description===Hl&&(!c||x!==c[y])&&(u[y]&&ze(u[y]),u[y]=Ge(()=>Vc(e,()=>x))),_[y]=x}c=_}),f){var p=e;ia(()=>{Wn(p,c.value,!0),ui(p)})}h=!0})}function ns(e){return e.__attributes??={[di]:e.nodeName.includes("-"),[fi]:e.namespaceURI===Ul}}var Wa=new Map;function vi(e){var t=e.getAttribute("is")||e.nodeName,r=Wa.get(t);if(r)return r;Wa.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=gl(s);for(var o in n)n[o].set&&r.push(o);s=wo(s)}return r}function Ze(e,t,r=t){var n=new WeakSet;oa(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Ss(e)?xs(a):a,r(a),ye!==null&&n.add(ye),await $c(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Yr(t)==null&&e.value&&(r(Ss(e)?xs(e.value):e.value),ye!==null&&n.add(ye)),la(()=>{var s=t();if(e===document.activeElement){var a=Mn??ye;if(n.has(a))return}Ss(e)&&s===xs(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Yc(e,t,r=t){oa(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Yr(t)==null&&r(e.checked),la(()=>{var n=t();e.checked=!!n})}function Ss(e){var t=e.type;return t==="number"||t==="range"}function xs(e){return e===""?null:+e}let Cn=!1;function Zc(e){var t=Cn;try{return Cn=!1,[e(),Cn]}finally{Cn=t}}const Jc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t,r){return new Proxy({props:e,exclude:t},Jc)}const Xc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Fr(s)&&(s=s());const a=tr(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=tr(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===wr||t===Eo)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function oe(...e){return new Proxy({props:e},Xc)}function Rr(e,t,r,n){var s=!Qr||(r&Bl)!==0,a=(r&jl)!==0,o=(r&zl)!==0,l=n,c=!0,u=()=>(c&&(c=!1,l=o?Yr(n):n),l),f;if(a){var h=wr in e||Eo in e;f=tr(e,t)?.set??(h&&t in e?A=>e[t]=A:void 0)}var p,m=!1;a?[p,m]=Zc(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=u(),f&&(s&&Nl(),f(p)));var _;if(s?_=()=>{var A=e[t];return A===void 0?u():(c=!0,A)}:_=()=>{var A=e[t];return A!==void 0&&(l=void 0),A===void 0?l:A},s&&(r&Ll)===0)return _;if(f){var x=e.$$legacy;return(function(A,E){return arguments.length>0?((!s||!E||x||m)&&f(E?_():A),A):_()})}var y=!1,b=((r&ql)!==0?Fn:na)(()=>(y=!1,_()));a&&i(b);var N=F;return(function(A,E){if(arguments.length>0){const $=E?i(b):s&&a?_t(A):A;return D(b,$),y=!0,l!==void 0&&(l=$),A}return Tr&&y||(N.f&kr)!==0?b.v:i(b)})}function hi(e){De===null&&$o(),Qr&&De.l!==null?eu(De).m.push(e):Uo(()=>{const t=Yr(e);if(typeof t=="function")return t})}function Fc(e){De===null&&$o(),hi(()=>()=>Yr(e))}function eu(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const tu="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(tu);class ru extends Map{#t=new Map;#r=ne(0);#c=ne(0);#u=Kt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#a(t){return Kt===this.#u?ne(t):or(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#t,s=n.get(t),a=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#a(0),n.set(t,s),D(this.#c,super.size),It(l);else if(a!==r){It(s);var c=l.reactions===null?null:new Set(l.reactions),u=c===null||!s.reactions?.every(f=>c.has(f));u&&It(l)}return o}delete(t){var r=this.#t,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),D(this.#c,super.size),D(n,-1),It(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#t;D(this.#c,0);for(var r of t.values())D(r,-1);It(this.#r),t.clear()}}#s(){i(this.#r);var t=this.#t;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#a(0);t.set(r,n)}}for([,n]of this.#t)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#c),super.size}}class nu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class pi{constructor(t){this.generateIdentifier=t,this.kv=new nu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class su extends pi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function au(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ou(e,t){const r=au(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const a=n[s];if(t(a))return a}}function Gr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function On(e,t){return e.indexOf(t)!==-1}function Ua(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class iu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ou(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const lu=e=>Object.prototype.toString.call(e).slice(8,-1),mi=e=>typeof e>"u",cu=e=>e===null,hn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Bs=e=>hn(e)&&Object.keys(e).length===0,ir=e=>Array.isArray(e),uu=e=>typeof e=="string",du=e=>typeof e=="number"&&!isNaN(e),fu=e=>typeof e=="boolean",vu=e=>e instanceof RegExp,pn=e=>e instanceof Map,mn=e=>e instanceof Set,_i=e=>lu(e)==="Symbol",hu=e=>e instanceof Date&&!isNaN(e.valueOf()),pu=e=>e instanceof Error,Ga=e=>typeof e=="number"&&isNaN(e),mu=e=>fu(e)||cu(e)||mi(e)||du(e)||uu(e)||_i(e),_u=e=>typeof e=="bigint",gu=e=>e===1/0||e===-1/0,yu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),bu=e=>e instanceof URL,gi=e=>e.replace(/\./g,"\\."),Es=e=>e.map(String).map(gi).join("."),ln=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let a=e.charAt(s);if(a==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(a==="."){t.push(r),r="";continue}r+=a}const n=r;return t.push(n),t};function Tt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const yi=[Tt(mi,"undefined",()=>null,()=>{}),Tt(_u,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Tt(hu,"Date",e=>e.toISOString(),e=>new Date(e)),Tt(pu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Tt(vu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Tt(mn,"set",e=>[...e.values()],e=>new Set(e)),Tt(pn,"map",e=>[...e.entries()],e=>new Map(e)),Tt(e=>Ga(e)||gu(e),"number",e=>Ga(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Tt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Tt(bu,"URL",e=>e.toString(),e=>new URL(e))];function ss(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const bi=ss((e,t)=>_i(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),wu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),wi=ss(yu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=wu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Si(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const xi=ss(Si,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ei=ss((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Su=[xi,bi,Ei,wi],Ha=(e,t)=>{const r=Ua(Su,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ua(yi,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},$i={};yi.forEach(e=>{$i[e.annotation]=e});const xu=(e,t,r)=>{if(ir(t))switch(t[0]){case"symbol":return bi.untransform(e,t,r);case"class":return xi.untransform(e,t,r);case"custom":return Ei.untransform(e,t,r);case"typed-array":return wi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=$i[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Or=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function ki(e){if(On(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(On(e,"prototype"))throw new Error("prototype is not allowed as a property");if(On(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Eu=(e,t)=>{ki(t);for(let r=0;r<t.length;r++){const n=t[r];if(mn(e))e=Or(e,+n);else if(pn(e)){const s=+n,a=+t[++r]==0?"key":"value",o=Or(e,s);switch(a){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Ls=(e,t,r)=>{if(ki(t),t.length===0)return r(e);let n=e;for(let a=0;a<t.length-1;a++){const o=t[a];if(ir(n)){const l=+o;n=n[l]}else if(hn(n))n=n[o];else if(mn(n)){const l=+o;n=Or(n,l)}else if(pn(n)){if(a===t.length-2)break;const c=+o,u=+t[++a]==0?"key":"value",f=Or(n,c);switch(u){case"key":n=f;break;case"value":n=n.get(f);break}}}const s=t[t.length-1];if(ir(n)?n[+s]=r(n[+s]):hn(n)&&(n[s]=r(n[s])),mn(n)){const a=Or(n,+s),o=r(a);a!==o&&(n.delete(a),n.add(o))}if(pn(n)){const a=+t[t.length-2],o=Or(n,a);switch(+s==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function js(e,t,r=[]){if(!e)return;if(!ir(e)){Gr(e,(a,o)=>js(a,t,[...r,...ln(o)]));return}const[n,s]=e;s&&Gr(s,(a,o)=>{js(a,t,[...r,...ln(o)])}),t(n,r)}function $u(e,t,r){return js(t,(n,s)=>{e=Ls(e,s,a=>xu(a,n,r))}),e}function ku(e,t){function r(n,s){const a=Eu(e,ln(s));n.map(ln).forEach(o=>{e=Ls(e,o,()=>a)})}if(ir(t)){const[n,s]=t;n.forEach(a=>{e=Ls(e,ln(a),()=>e)}),s&&Gr(s,r)}else Gr(t,r);return e}const Pu=(e,t)=>hn(e)||ir(e)||pn(e)||mn(e)||Si(e,t);function Tu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Au(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[a,...o]=s;a.length===0?n=o.map(Es):r[Es(a)]=o.map(Es)}),n?Bs(r)?[n]:[n,r]:Bs(r)?void 0:r}const Pi=(e,t,r,n,s=[],a=[],o=new Map)=>{const l=mu(e);if(!l){Tu(e,s,t);const m=o.get(e);if(m)return n?{transformedValue:null}:m}if(!Pu(e,r)){const m=Ha(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||o.set(e,_),_}if(On(a,e))return{transformedValue:null};const c=Ha(e,r),u=c?.value??e,f=ir(u)?[]:{},h={};Gr(u,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const x=Pi(m,t,r,n,[...s,_],[...a,e],o);f[_]=x.transformedValue,ir(x.annotations)?h[_]=x.annotations:hn(x.annotations)&&Gr(x.annotations,(y,b)=>{h[gi(_)+"."+b]=y})});const p=Bs(h)?{transformedValue:f,annotations:c?[c.type]:void 0}:{transformedValue:f,annotations:c?[c.type,h]:h};return l||o.set(e,p),p};function Ti(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ka(e){return Ti(e)==="Array"}function Nu(e){if(Ti(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Iu(e,t,r,n,s){const a={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";a==="enumerable"&&(e[t]=r),s&&a==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function zs(e,t={}){if(Ka(e))return e.map(s=>zs(s,t));if(!Nu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,a)=>{if(Ka(t.props)&&!t.props.includes(a))return s;const o=e[a],l=zs(o,t);return Iu(s,a,l,e,t.nonenumerable),s},{})}class ee{constructor({dedupe:t=!1}={}){this.classRegistry=new su,this.symbolRegistry=new pi(r=>r.description??""),this.customTransformerRegistry=new iu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Pi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const a=Au(r,this.dedupe);return a&&(s.meta={...s.meta,referentialEqualities:a}),s}deserialize(t){const{json:r,meta:n}=t;let s=zs(r);return n?.values&&(s=$u(s,n.values,this)),n?.referentialEqualities&&(s=ku(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}ee.defaultInstance=new ee;ee.serialize=ee.defaultInstance.serialize.bind(ee.defaultInstance);ee.deserialize=ee.defaultInstance.deserialize.bind(ee.defaultInstance);ee.stringify=ee.defaultInstance.stringify.bind(ee.defaultInstance);ee.parse=ee.defaultInstance.parse.bind(ee.defaultInstance);ee.registerClass=ee.defaultInstance.registerClass.bind(ee.defaultInstance);ee.registerSymbol=ee.defaultInstance.registerSymbol.bind(ee.defaultInstance);ee.registerCustom=ee.defaultInstance.registerCustom.bind(ee.defaultInstance);ee.allowErrorProps=ee.defaultInstance.allowErrorProps.bind(ee.defaultInstance);ee.serialize;ee.deserialize;ee.stringify;ee.parse;ee.registerClass;ee.registerCustom;ee.registerSymbol;ee.allowErrorProps;function Du(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Cu(e,t){return`${e}_${t}`}const Mu=typeof window<"u"?window:void 0;function Ru(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ou{#t;#r;constructor(t={}){const{window:r=Mu,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Mo(s=>{const a=Ba(r,"focusin",s),o=Ba(r,"focusout",s);return()=>{a(),o()}}))}get current(){return this.#r?.(),this.#t?Ru(this.#t):null}}new Ou;function qu(e){return typeof e=="function"}function Bu(e,t){if(qu(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Lu(e,t){let r=ne(null);const n=L(()=>Bu(t,250));function s(...a){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const c=new Promise((u,f)=>{o=u,l=f});D(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);D(r,null);try{o.resolve(await e.apply(this,a))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return s.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),D(r,null))},s.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),s}function ju(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),s=new Date(r),a=e.filter(o=>{const l=new Date(o.dateTimeService);return l>=n&&l<=s});return a.length?Ai(a.flatMap(o=>o.neededConsolidatedForDate)):[]}function Vs(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function Ai(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.quantity||!r.unit)return;const n=parseFloat(r.quantity.toString());if(isNaN(n))return;const s=t.get(r.unit)||0;t.set(r.unit,s+n)}),Array.from(t.entries()).map(([r,n])=>({quantity:n,unit:r}))}function zu(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Ws(c.quantity.toString(),c.unit)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.quantity);isNaN(c)||r.set(l.unit,(r.get(l.unit)||0)+c)}),t.forEach(l=>{n.set(l.unit,(n.get(l.unit)||0)+l.quantity)});const s=[],a=[];r.forEach((l,c)=>{const u=n.get(c)||0,f=l-u;f>0&&(s.push({quantity:f,unit:c}),a.push(Ws(f.toString(),c)))});const o=a.length>0?a.join(" et "):"✅ Complet";return{numeric:s,display:o}}function $s(e){return e?.length?e.map(t=>Ws(t.quantity.toString(),t.unit)).join(" et "):"-"}function Ws(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function Vu(e){const t={};return e.forEach(({d:r,q:n,u:s})=>{t[r]||(t[r]=[]),t[r].push({quantity:n,unit:s})}),Object.entries(t).map(([r,n])=>({dateTimeService:r,neededConsolidatedForDate:n,recipeNames:[],totalAssiettes:0}))}function Wu(e){const t={};return e.forEach(({q:r,u:n})=>{t[n]||(t[n]=0),t[n]+=r}),Object.entries(t).map(([r,n])=>({quantity:n,unit:r}))}function Uu(e){return e.map(({r:t,d:r,q:n,u:s,a})=>({recipeName:t,dateTimeService:r,quantity:n.toString(),unit:s,assiettes:a}))}function Gu(e){return{neededConsolidatedByDate:Vu(e),totalNeededConsolidated:Wu(e),recipesOccurrences:Uu(e)}}function Hu(e){return Array.isArray(e)?e.every(t=>typeof t=="object"&&typeof t.r=="string"&&typeof t.d=="string"&&typeof t.q=="number"&&typeof t.u=="string"&&typeof t.a=="number"):!1}function Ku(e){const t=Vs(e.occ);if(Hu(t)){const r=Gu(t);return{neededConsolidatedByDateArray:r.neededConsolidatedByDate,totalNeededArray:r.totalNeededConsolidated,recipesArray:r.recipesOccurrences}}else throw new Error(`Format de données invalide pour ${e.productName}: attendu format 'occ'`)}function Qu(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class w{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var Ni,Ii;class _n{static custom(t){return t}static unique(t=7){const r=Qu(_n,Ni,"m",Ii).call(_n);let n="";for(let s=0;s<t;s++){const a=Math.floor(Math.random()*16).toString(16);n+=a}return r+n}}Ni=_n,Ii=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Qa;(function(e){e.Totp="totp"})(Qa||(Qa={}));var Ya;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ya||(Ya={}));var Za;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Za||(Za={}));var Ja;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ja||(Ja={}));var Xa;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Xa||(Xa={}));var Fa;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Fa||(Fa={}));var eo;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(eo||(eo={}));var to;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(to||(to={}));var ro;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(ro||(ro={}));async function Jt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Yu(e,t={}){const{limit:r=100,orderBy:n="productName",orderDirection:s="asc"}=t;try{const{databases:a,config:o}=await Jt(),l=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.orderAsc(n==="productName"?"productName":"$updatedAt"),w.limit(r),w.select(["*","purchases.*"])]),u=l.documents;return console.log(`[Appwrite Interactions] ${l.documents.length} produits chargés avec achats`),u}catch(a){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${o}`)}}async function Us(e){try{const{databases:t,config:r}=await Jt();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[w.equal("$id",e),w.select(["*","purchases.*"])])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function Zu(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{allProducts:[]};try{const{databases:s,config:a}=await Jt(),[o,l]=await Promise.all([s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.select(["*","purchases.*"]),w.limit(n)]),s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.select(["products.$id"]),w.limit(n)])]);let c=o.documents;const u=new Set(c.map(f=>f.$id));if(l.documents.length>0){const f=l.documents.flatMap(h=>Array.isArray(h.products)?h.products.map(p=>p.$id):[]).filter((h,p,m)=>m.indexOf(h)===p).filter(h=>!u.has(h));if(console.log(`[Appwrite Interactions] Affected products from purchases: ${f.length}`),console.log("[Appwrite Interactions] Affected product IDs:",f),f.length>0)try{console.log("[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",f);const h=await Us(f);console.log(`[Appwrite Interactions] Reloaded ${h.length} products:`,JSON.stringify(h,null,2)),c=[...c,...h]}catch(h){throw console.error("[Appwrite Interactions] Erreur lors du rechargement des products:",h),h}}return c.length>0&&console.log(`[Appwrite Interactions] Sync total: ${c.length} produits synchronisés`),{allProducts:c}}catch(s){console.error(`[Appwrite Interactions] Erreur sync pour mainId ${e}:`,s);const a=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${a}`)}}async function da(e,t){try{const{databases:r,config:n}=await Jt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Ju(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await da(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function no(e,t){return da(e,{who:t})}async function so(e,t){return da(e,{stockReel:t})}async function Xu(e){try{const{databases:t,config:r}=await Jt(),a=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:a.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,_n.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Fu(e,t){try{const{databases:r,config:n}=await Jt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),a={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,a);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,a),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function ed(e){try{const{databases:t,config:r}=await Jt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function td(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Jt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[w.equal("$id",e),w.select(["*","products"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function rd(e,t={}){let r=null;const n=a=>{const{events:o,payload:l}=a;if(!l)return;const c=o.some(m=>m.includes("products.")),u=o.some(m=>m.includes("purchases.")),f=o.some(m=>m.includes(".create")),h=o.some(m=>m.includes(".update")),p=o.some(m=>m.includes(".delete"));if(c){const m=l;f&&t.onProductCreate?t.onProductCreate(m):h&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(u){const m=l;f&&t.onPurchaseCreate?t.onPurchaseCreate(m):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:a=>{console.error("[Appwrite Interactions] Erreur realtime:",a),t.onError?.(a)}}))}catch(a){console.error("[Appwrite Interactions] Impossible de configurer realtime:",a),t.onError?.(a)}})(),()=>{r&&(r(),r=null)}}async function nd(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Jt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function sd(e){try{console.log(`[Appwrite Interactions] Chargement des dates pour mainId: ${e}`);const t=await nd(e);if(!t||!t.allDates)return console.warn(`[Appwrite Interactions] Aucune date trouvée pour mainId: ${e}`),[];let r;if(Array.isArray(t.allDates))r=t.allDates;else if(typeof t.allDates=="string")try{r=ee.parse(t.allDates)}catch(n){console.warn(`[Appwrite Interactions] Erreur parsing allDates pour mainId ${e}, traitement comme chaîne simple:`,n),r=[t.allDates]}else console.warn(`[Appwrite Interactions] Format allDates invalide pour mainId ${e}:`,typeof t.allDates),r=[];return console.log(`[Appwrite Interactions] ${r.length} dates chargées pour mainId: ${e}`),r}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement des dates pour mainId ${e}:`,t),[]}}const ao=1e3,ad=500;class od{#t=new ru;#r=ne(null);#c=ne(!1);#u=ne(!1);#a=ne(null);#s=ne(!1);#o=ne(!1);#n=ne(_t([]));#i=ne(null);#d=ne(null);#f=ne(null);#l=null;#v=null;#h=null;#p=null;#e=ne(_t({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#e)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#c)}get loading(){return i(this.#u)}get error(){return i(this.#a)}get allDates(){return i(this.#n)}get syncing(){return i(this.#s)}get startDate(){return i(this.#d)}get endDate(){return i(this.#f)}setStartDate(t){D(this.#d,t,!0)}setEndDate(t){D(this.#f,t,!0)}setDateRange(t,r){D(this.#d,t,!0),D(this.#f,r,!0)}initializeDateRange(){if((!i(this.#d)||!i(this.#f))&&i(this.#n).length>0){const t=[...i(this.#n)].sort();D(this.#d,t[0],!0),D(this.#f,t[t.length-1],!0)}}get firstDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort()[0]}get lastDate(){return i(this.#n).length===0?null:[...i(this.#n)].sort().pop()}get realtimeConnected(){return i(this.#o)}get lastSync(){return i(this.#i)}#S=L(()=>Array.from(this.#t.values()));get enrichedProducts(){return i(this.#S)}set enrichedProducts(t){D(this.#S,t)}#x=L(()=>{const t=new Map;return this.enrichedProducts.forEach(r=>{const n=ju(r.neededConsolidatedByDateArray,i(this.#d),i(this.#f));n&&n.length>0&&t.set(r.$id,n)}),console.log(t),t});get totalNeededByDateRange(){return i(this.#x)}set totalNeededByDateRange(t){D(this.#x,t)}#_=L(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const s=$s(r);t.set(n,s)}),t});get formattedTotalNeededByDateRange(){return i(this.#_)}set formattedTotalNeededByDateRange(t){D(this.#_,t)}#g=L(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#g)}set stats(t){D(this.#g,t)}#w=L(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#w)}set uniqueStores(t){D(this.#w,t)}#k=L(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#k)}set uniqueWho(t){D(this.#k,t)}#P=L(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#P)}set uniqueProductTypes(t){D(this.#P,t)}#T=L(()=>this.enrichedProducts.filter(t=>this.#O(t)));get filteredProducts(){return i(this.#T)}set filteredProducts(t){D(this.#T,t)}#A=L(()=>{const t=this.filteredProducts;return i(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#A)}set filteredGroupedProducts(t){D(this.#A,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#c)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),D(this.#r,t,!0),this.#l=Cu("products-enriched",t);try{await this.#D(),this.#t.size===0?await this.#N(t):await this.#C(),this.initializeDateRange(),D(this.#c,!0);const r=this.#R();this.#h=rd(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw D(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}}async#D(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:s}=ee.parse(t);r.forEach(([a,o])=>this.#t.set(a,o)),D(this.#i,n,!0),D(this.#n,s||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${s?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#E(){if(this.#l)try{const t={lastSync:i(this.#i),products:Array.from(this.#t.entries()),allDates:i(this.#n)};localStorage.setItem(this.#l,ee.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}async#N(t){D(this.#u,!0),D(this.#a,null);try{const r={limit:ao,orderBy:"productName",orderDirection:"asc"},[n,s]=await Promise.all([Yu(t,r),sd(t)]);n.forEach(a=>{const o=this.#y(a);this.#t.set(a.$id,o)}),D(this.#n,s,!0),this.#m(),this.#E(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis, ${s.length} dates récupérées`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw D(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}finally{D(this.#u,!1)}}async#C(){if(!(!i(this.#i)||!i(this.#r))){D(this.#s,!0);try{const t={lastSync:i(this.#i),limit:ao},{allProducts:r}=await Zu(i(this.#r),t);r.length>0&&(r.forEach(n=>{const s=this.#y(n);this.#t.set(n.$id,s)}),console.log(`[ProductsStore] ${r.length} produits appliqués du sync`)),r.length>0&&(this.#m(),this.#E(),console.log(`[ProductsStore] Sync complétée: ${r.length} produits`))}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{D(this.#s,!1)}}}#y(t){const r=Ai(t.purchases??[]),{neededConsolidatedByDateArray:n,totalNeededArray:s,recipesArray:a}=Ku(t),{numeric:o,display:l}=zu(s,r),c=Vs(t.stockReel)??[],u=$s(r),f=c.length>0?`${c[c.length-1].quantity} ${c[c.length-1].unit}`:u;return{...t,storeInfo:t.store?Vs(t.store):null,totalNeededArray:s,totalPurchasesArray:r,recipesArray:a,stockArray:c,stockOrTotalPurchases:f,missingQuantityArray:o,neededConsolidatedByDateArray:n,displayTotalNeeded:$s(s),displayTotalPurchases:u,displayMissingQuantity:l}}#$(t){const r=this.#y(t);this.#t.set(t.$id,r)}#M(t){this.#t.delete(t)}async#q(t){if(!t?.length)return;const r=new Set(t.filter(n=>n.products?.length>0).flatMap(n=>n.products).map(n=>typeof n=="string"?n:n.$id).filter(Boolean));if(r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await Us(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(s=>{const a=this.#y(s);this.#t.set(s.$id,a)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#I(t){if(!t?.length)return;const r=new Set,n=[],s=t.filter(o=>o.products?.length>0);if(n.push(...t.filter(o=>!o.products?.length)),s.flatMap(o=>o.products).map(o=>typeof o=="string"?o:o.$id).filter(Boolean).forEach(o=>r.add(o)),n.length>0){console.log(`[ProductsStore] ${n.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);try{(await td(n.map(l=>l.$id))).forEach(l=>{if(l.products?.length>0){l.products.map(f=>typeof f=="string"?f:f.$id).filter(Boolean).forEach(f=>r.add(f));const u=t.findIndex(f=>f.$id===l.$id);u>=0&&(t[u]=l)}})}catch(o){console.error("[ProductsStore] Erreur rechargement ciblé des purchases:",o)}}if(r.size!==0){for(const o of r){const l=this.#t.get(o);if(l){let c=l.purchases||[];t.forEach(f=>{const h=c.findIndex(p=>p.$id===f.$id);h>=0?c[h]=f:c.push(f)});const u=this.#y({...l,purchases:c});this.#t.set(o,u)}}try{(await Us(Array.from(r))).forEach(l=>{const c=this.#y(l);this.#t.set(l.$id,c)})}catch(o){console.warn("[ProductsStore] Erreur rechargement async:",o)}}}#R(){return{onProductCreate:t=>{this.#$(t),this.#m(),this.#b()},onProductUpdate:t=>{this.#$(t),this.#m(),this.#b()},onProductDelete:t=>{this.#M(t),this.#m(),this.#b()},onPurchaseCreate:t=>{this.#I([t]),this.#m(),this.#b()},onPurchaseUpdate:t=>{this.#I([t]),this.#m(),this.#b()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#$(n)}),this.#m(),this.#b()},onConnect:()=>{D(this.#o,!0)},onDisconnect:()=>{D(this.#o,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#b(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#E(),this.#p=null},ad)}#m(){D(this.#i,new Date().toISOString(),!0)}#O(t){if(i(this.#e).searchQuery.trim()){const r=i(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#e).selectedStores.includes(t.storeInfo.storeName))||i(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#e).selectedWho.includes(r)))||i(this.#e).selectedProductTypes.length>0&&(!t.productType||!i(this.#e).selectedProductTypes.includes(t.productType))||i(this.#e).selectedTemperatures.length>0&&!(i(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Lu(t=>{i(this.#e).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#e).selectedProductTypes.indexOf(t);r>-1?i(this.#e).selectedProductTypes.splice(r,1):i(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#e).selectedTemperatures.indexOf(t);r>-1?i(this.#e).selectedTemperatures.splice(r,1):i(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#e).selectedProductTypes=[],i(this.#e).selectedTemperatures=[]}setGroupBy(t){i(this.#e).groupBy=t}toggleStore(t){const r=i(this.#e).selectedStores.indexOf(t);r>-1?i(this.#e).selectedStores.splice(r,1):i(this.#e).selectedStores.push(t)}toggleWho(t){const r=i(this.#e).selectedWho.indexOf(t);r>-1?i(this.#e).selectedWho.splice(r,1):i(this.#e).selectedWho.push(t)}clearStoreFilters(){i(this.#e).selectedStores=[]}clearWhoFilters(){i(this.#e).selectedWho=[]}handleSort(t){i(this.#e).sortColumn===t?i(this.#e).sortDirection=i(this.#e).sortDirection==="asc"?"desc":"asc":(i(this.#e).sortColumn=t,i(this.#e).sortDirection="asc")}clearFilters(){D(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[i(this.#e).sortColumn],a=n[i(this.#e).sortColumn];return i(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,a=parseFloat(a)||0):i(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,a=n.purchases?.length||0),s<a?i(this.#e).sortDirection==="asc"?-1:1:s>a?i(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??0}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.clearCache(),await this.#N(t)}clearCache(){this.#t.clear(),D(this.#n,[],!0),D(this.#i,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const R=new od;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const id={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ld=Rc("<svg><!><!></svg>");function ie(e,t){W(t,!0);const r=Rr(t,"color",3,"currentColor"),n=Rr(t,"size",3,24),s=Rr(t,"strokeWidth",3,2),a=Rr(t,"absoluteStrokeWidth",3,!1),o=Rr(t,"iconNode",19,()=>[]),l=ae(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ld();Va(c,h=>({...id,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(s())*24/Number(n()):s()]);var u=d(c);qe(u,17,o,Br,(h,p)=>{var m=L(()=>xo(i(p),2));let _=()=>i(m)[0],x=()=>i(m)[1];var y=V(),b=j(y);zc(b,_,!0,(N,A)=>{Va(N,()=>({...x()}))}),g(h,y)});var f=v(u);se(f,()=>t.children??re),g(e,c),U()}function Gs(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ie(e,oe({name:"archive"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function cd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ie(e,oe({name:"bean"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function ud(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ie(e,oe({name:"beef"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function dd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ie(e,oe({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function fd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ie(e,oe({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function vd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ie(e,oe({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function hd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ie(e,oe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function pd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,oe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function md(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ie(e,oe({name:"combine"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function fa(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ie(e,oe({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function _d(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ie(e,oe({name:"egg"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Hs(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ie(e,oe({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function oo(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ie(e,oe({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function gd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ie(e,oe({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function yd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ie(e,oe({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function bd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ie(e,oe({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function wd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ie(e,oe({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function as(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ie(e,oe({name:"package"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Sd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,oe({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function xd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ie(e,oe({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Ed(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ie(e,oe({name:"save"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function $d(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,oe({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function qn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ie(e,oe({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Gn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ie(e,oe({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Bn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ie(e,oe({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Di(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ie(e,oe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function gn(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ie(e,oe({name:"store"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Ci(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ie(e,oe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function va(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ie(e,oe({name:"user"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Mi(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ie(e,oe({name:"users"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function kd(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ie(e,oe({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function Ri(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];ie(e,oe({name:"weight"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}function gt(e,t){W(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ae(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,oe({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=V(),l=j(o);se(l,()=>t.children??re),g(s,o)},$$slots:{default:!0}})),U()}const Ct=_t({product:{id:"",isOpen:!1,tab:"recettes"}});function Pd(e,t){Ct.product.tab=e,Ct.product.isOpen=!0,Ct.product.id=t}function io(){Ct.product.isOpen=!1,Ct.product.tab="",Ct.product.id=""}let lo=()=>localStorage.getItem("appwrite-user-name")||"";function Ln(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:cd};case"animaux":return{displayName:"Viandes et Poissons",icon:ud};case"legumes":return{displayName:"Fruits et Légumes",icon:fd};case"sucres":return{displayName:"Sucrées",icon:dd};case"lof":return{displayName:"L.O.F",icon:_d};case"autres":return{displayName:"Autres",icon:vd};case"epices":return{displayName:"Assaisonnements",icon:gd};case"frais":return{displayName:"Produits Frais",icon:xd};default:return{displayName:e,icon:as}}}function co(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Oi(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function yn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Td(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Ad(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],a=n[t.sortColumn];return s<a?t.sortDirection==="asc"?-1:1:s>a?t.sortDirection==="asc"?1:-1:0}):e}function Nd(e){let t=ne(!1),r=ne(null),n=ne("recettes");const s=L(()=>R.getEnrichedProductById(e)),a=L(()=>i(s)?.recipesArray??[]),o=L(()=>i(s)?.who??[]),l=L(()=>i(s)?.stockArray??[]),c=L(()=>i(s)?.purchases??[]),u=_t({purchase:{quantity:null,unit:"",store:"",who:lo()??"",price:null,notes:""},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});Uo(()=>{i(s)&&(u.purchase.quantity=i(s).missingQuantityArray[0]?.quantity??null,u.purchase.unit=i(s).totalNeededArray[0]?.unit??"",u.purchase.store=i(s).storeInfo?.storeName??"",u.purchase.who=lo()??"",u.stock.unit=i(s).totalNeededArray[0]?.unit??"",u.store.name=i(s).storeInfo?.storeName??null,u.store.comment=i(s).storeInfo?.storeComment??null)});let f=ne(null);const h=L(()=>i(f)?i(c).find(S=>S.$id===i(f))??null:null);async function p(S,q){D(t,!0),D(r,null);try{const I=await S();return q&&m("success",q),I}catch(I){const Q=I instanceof Error?I.message:"Une erreur est survenue";return D(r,Q,!0),m("error",Q),console.error("[ProductModalState]",I),null}finally{D(t,!1)}}function m(S,q){const I=new CustomEvent("toast",{detail:{type:S,message:q}});window.dispatchEvent(I)}async function _(){i(s)&&await p(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!R.currentMainId)throw new Error("mainId non disponible");const{quantity:S,unit:q}=co(u.purchase.quantity,u.purchase.unit);await Xu({products:[i(s).$id],mainId:R.currentMainId,unit:q,quantity:S,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null}),u.purchase={quantity:i(s).missingQuantityArray[0]?.quantity??null,unit:i(s).totalNeededArray[0]?.unit??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:""}},"Achat ajouté avec succès")}function x(S){D(f,S.$id,!0)}function y(){D(f,null)}async function b(S){S.$id&&await p(async()=>{const{quantity:q,unit:I}=co(S.quantity,S.unit);await Fu(S.$id,{unit:I,quantity:q,store:S.store||null,who:S.who||null,notes:S.notes||"",price:S.price||null}),D(f,null)},"Achat modifié avec succès")}async function N(S){const q=i(c).find(I=>I.$id===S);q&&confirm(`Supprimer cet achat (${q.quantity} ${q.unit}) ?`)&&await p(async()=>{await ed(S)},"Achat supprimé avec succès")}async function A(){i(s)&&await p(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime},q=[...i(l),S];await so(i(s).$id,JSON.stringify(q)),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function E(S){i(s)&&confirm("Supprimer ce relevé de stock ?")&&await p(async()=>{const q=i(l).filter((I,Q)=>Q!==S);await so(i(s).$id,JSON.stringify(q))},"Relevé de stock supprimé")}async function $(S){!i(s)||!S.trim()||await p(async()=>{if(i(o).includes(S))throw new Error("Ce volontaire est déjà ajouté");await no(i(s).$id,[...i(o),S.trim()])},"Volontaire ajouté")}async function T(S){i(s)&&confirm(`Retirer ${S} ?`)&&await p(async()=>{await no(i(s).$id,i(o).filter(q=>q!==S))},"Volontaire retiré")}async function C(S){i(s)&&await p(async()=>{await Ju(i(s).$id,S)},"Magasin mis à jour")}return{get loading(){return i(t)},get error(){return i(r)},get currentTab(){return i(n)},set currentTab(S){D(n,S,!0)},get product(){return i(s)},get recipes(){return i(a)},get whoList(){return i(o)},get stockEntries(){return i(l)},get purchasesList(){return i(c)},get editingPurchaseId(){return i(f)},get editingPurchaseData(){return i(h)},forms:u,addPurchase:_,startEditPurchase:x,cancelEditPurchase:y,updateEditedPurchase:b,removePurchase:N,addStock:A,removeStock:E,addVolunteer:$,removeVolunteer:T,updateStore:C,formatQuantity:Oi,formatDate:yn,formatDisplayQuantity:Td}}function Id(e,t,r){t()&&r().addPurchase()}function Dd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Cd(e,t){t().cancelEditPurchase()}var Md=k("<option> </option>"),Rd=k("<option> </option>"),Od=k('<span class="loading loading-spinner loading-sm"></span>'),qd=k('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Bd=k("<option> </option>"),Ld=k('<span class="loading loading-spinner loading-sm"></span>'),jd=k('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/> <datalist id="browsers"></datalist></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),zd=(e,t,r)=>t(i(r)),Vd=(e,t,r)=>t(i(r).$id),Wd=k('<span class="loading loading-spinner loading-sm"></span>'),Ud=k('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Gd=k('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Hd=k('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <label class="select w-28"><!> <select required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></label> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/> <datalist id="stores"></datalist></label> <label class="input w-48"><!> <input type="text" placeholder="Qui" maxlength="25" list="users"/> <datalist id="users"></datalist></label> <label class="input validator w-28"><input type="number" step="1" placeholder="Prix" min="0"/> <span class="label">€</span></label> <label class="input validator"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Kd(e,t){W(t,!0);let r=Rr(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(f){return f.quantity!==null&&f.quantity!==0&&f.unit?.trim()!==""}function a(f){r().removePurchase(f)}function o(f){r().startEditPurchase(f)}var l=V(),c=j(l);{var u=f=>{var h=Hd(),p=d(h),m=d(p);Gn(m,{class:"h-5 w-5"});var _=v(p,2),x=d(_),y=v(d(x),2),b=d(y),N=d(b);as(N,{class:"h-4 w-4 opacity-50"});var A=v(N,2),E=v(b,2),$=d(E);Ri($,{class:"h-4 w-4 opacity-50"});var T=v($,2),C=d(T);C.value=C.__value="";var S=v(C);S.value=S.__value="kg";var q=v(S);q.value=q.__value="gr.";var I=v(q);I.value=I.__value="l.";var Q=v(I);Q.value=Q.__value="ml";var le=v(Q);le.value=le.__value="unité";var Ce=v(le);Ce.value=Ce.__value="bottes";var be=v(E,2),Se=d(be);gn(Se,{class:"h-4 w-4 opacity-50"});var Pe=v(Se,2),J=v(Pe,2);qe(J,21,()=>R.uniqueStores,Br,(X,ce)=>{var ke=Md(),Ot=d(ke),Ke={};B(()=>{M(Ot,i(ce)),Ke!==(Ke=i(ce))&&(ke.value=(ke.__value=i(ce))??"")}),g(X,ke)});var P=v(be,2),z=d(P);va(z,{class:"h-4 w-4 opacity-50"});var pe=v(z,2),xe=v(pe,2);qe(xe,21,()=>R.uniqueWho,Br,(X,ce)=>{var ke=Rd(),Ot=d(ke),Ke={};B(()=>{M(Ot,i(ce)),Ke!==(Ke=i(ce))&&(ke.value=(ke.__value=i(ce))??"")}),g(X,ke)});var fe=v(P,2),Fe=d(fe),ct=v(fe,2),de=d(ct);wd(de,{class:"h-4 w-4 opacity-50"});var ge=v(de,2),Me=v(y,2),Le=d(Me);Le.__click=[Id,n,r];var Re=d(Le);{var Oe=X=>{var ce=Od();g(X,ce)},$e=X=>{var ce=it("Ajouter l'achat");g(X,ce)};O(Re,X=>{r().loading?X(Oe):X($e,!1)})}var Ve=v(_,2);{var ut=X=>{var ce=qd(),ke=d(ce);Gn(ke,{class:"mx-auto mb-2 h-12 w-12"}),g(X,ce)},dr=X=>{var ce=Gd(),ke=d(ce),Ot=v(d(ke));qe(Ot,21,()=>r().purchasesList,Ke=>Ke.$id,(Ke,ve,Y)=>{var me=V(),Te=j(me);{var dt=We=>{var $t=jd(),qt=d($t),Bt=d(qt),Lt=d(Bt),et=v(Lt,2),bt=d(et);bt.value=bt.__value="kg";var jt=v(bt);jt.value=jt.__value="gr.";var nt=v(jt);nt.value=nt.__value="l.";var zt=v(nt);zt.value=zt.__value="ml";var Qe=v(zt);Qe.value=Qe.__value="unité";var Vt=v(Qe);Vt.value=Vt.__value="bottes";var kt=v(qt),Xt=d(kt),Wt=v(Xt,2);qe(Wt,21,()=>R.uniqueStores,Br,(K,ue)=>{var H=Bd(),Ae=d(H),Ne={};B(()=>{M(Ae,i(ue)),Ne!==(Ne=i(ue))&&(H.value=(H.__value=i(ue))??"")}),g(K,H)});var Ar=v(kt),vr=d(Ar),Nr=v(Ar),hr=d(Nr),Ir=v(Nr),Xr=d(Ir),pr=v(Ir),ft=d(pr),G=v(pr),he=d(G),st=d(he);st.__click=[Dd,r,s];var vt=d(st);{var Ye=K=>{var ue=Ld();g(K,ue)},at=K=>{Ed(K,{class:"h-3 w-3"})};O(vt,K=>{r().loading?K(Ye):K(at,!1)})}var wt=v(st,2);wt.__click=[Cd,r];var Ee=d(wt);gt(Ee,{class:"h-3 w-3"}),B((K,ue)=>{M(hr,K),st.disabled=ue},[()=>yn(i(ve).$createdAt),()=>r().loading||!s(i(ve))]),Ze(Lt,()=>i(ve).quantity,K=>i(ve).quantity=K),qs(et,()=>i(ve).unit,K=>i(ve).unit=K),Ze(Xt,()=>i(ve).store,K=>i(ve).store=K),Ze(vr,()=>i(ve).who,K=>i(ve).who=K),Ze(Xr,()=>i(ve).price,K=>i(ve).price=K),Ze(ft,()=>i(ve).notes,K=>i(ve).notes=K),g(We,$t)},fr=We=>{var $t=Ud(),qt=d($t),Bt=d(qt),Lt=v(qt),et=d(Lt),bt=v(Lt),jt=d(bt),nt=v(bt),zt=d(nt),Qe=v(nt),Vt=d(Qe),kt=v(Qe),Xt=d(kt),Wt=v(kt),Ar=d(Wt),vr=d(Ar);vr.__click=[zd,o,ve];var Nr=d(vr);Di(Nr,{class:"h-4 w-4"});var hr=v(vr,2);hr.__click=[Vd,a,ve];var Ir=d(hr);{var Xr=ft=>{var G=Wd();g(ft,G)},pr=ft=>{gt(ft,{class:"h-4 w-4"})};O(Ir,ft=>{r().loading?ft(Xr):ft(pr,!1)})}B((ft,G)=>{M(Bt,ft),M(et,i(ve).store||"-"),M(jt,i(ve).who||"-"),M(zt,G),M(Vt,i(ve).price?`${i(ve).price}€`:"-"),M(Xt,i(ve).notes||"-"),hr.disabled=r().loading},[()=>Oi(i(ve).quantity,i(ve).unit),()=>yn(i(ve).$createdAt)]),g(We,$t)};O(Te,We=>{r().editingPurchaseId===i(ve).$id?We(dt):We(fr,!1)})}g(Ke,me)}),g(X,ce)};O(Ve,X=>{r().purchasesList.length===0?X(ut):X(dr,!1)})}B(X=>Le.disabled=X,[()=>r().loading||!n()]),Ze(A,()=>r().forms.purchase.quantity,X=>r().forms.purchase.quantity=X),qs(T,()=>r().forms.purchase.unit,X=>r().forms.purchase.unit=X),Ze(Pe,()=>r().forms.purchase.store,X=>r().forms.purchase.store=X),Ze(pe,()=>r().forms.purchase.who,X=>r().forms.purchase.who=X),Ze(Fe,()=>r().forms.purchase.price,X=>r().forms.purchase.price=X),Ze(ge,()=>r().forms.purchase.notes,X=>r().forms.purchase.notes=X),g(f,h)};O(c,f=>{r()&&r().product&&f(u)})}g(e,l),U()}Rt(["click"]);class Qd{#t;#r=new Set;constructor(t){this.#t=t}get current(){return this.#t}set current(t){this.#t!=t&&(this.#t=t,this.#r.forEach(r=>r(t)))}on(t){return this.#r.add(t),()=>this.#r.delete(t)}}const qi=e=>new Qd(e),Ks=Symbol.for("atomico.hooks");globalThis[Ks]=globalThis[Ks]||{};let Hr=globalThis[Ks];const Yd=Symbol.for("Atomico.suspense"),Bi=Symbol.for("Atomico.effect"),Zd=Symbol.for("Atomico.layoutEffect"),Li=Symbol.for("Atomico.insertionEffect"),Zr=(e,t,r)=>{const{i:n,hooks:s}=Hr.c,a=s[n]=s[n]||{};return a.value=e(a.value),a.effect=t,a.tag=r,Hr.c.i++,s[n].value},Jd=e=>Zr((t=qi(e))=>t),En=()=>Zr((e=qi(Hr.c.host))=>e),ji=()=>Hr.c.update,Xd=(e,t,r=0)=>{let n={},s=!1;const a=()=>s,o=(l,c)=>{for(const u in n){const f=n[u];f.effect&&f.tag===l&&(f.value=f.effect(f.value,c))}};return{load:l=>{Hr.c={host:t,hooks:n,update:e,i:0,id:r};let c;try{s=!1,c=l()}catch(u){if(u!==Yd)throw u;s=!0}finally{Hr.c=null}return c},cleanEffects:l=>(o(Li,l),()=>(o(Zd,l),()=>{o(Bi,l)})),isSuspense:a}},Jr=Symbol.for;function zi(e,t){const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++){let s=e[n],a=t[n];if(s!==a)return!1}return!0}const Dt=e=>typeof e=="function",cn=e=>typeof e=="object",{isArray:Fd}=Array,Qs=(e,t)=>(t?e instanceof HTMLStyleElement:!0)&&"hydrate"in(e?.dataset||{});function Vi(e,t){let r;const n=s=>{let{length:a}=s;for(let o=0;o<a;o++){const l=s[o];if(l&&Array.isArray(l))n(l);else{const c=typeof l;if(l==null||c==="function"||c==="boolean")continue;c==="string"||c==="number"?(r==null&&(r=""),r+=l):(r!=null&&(t(r),r=null),t(l))}}};n(e),r!=null&&t(r)}const Wi=(e,t,r)=>(e.addEventListener(t,r),()=>e.removeEventListener(t,r));class Ui{constructor(t,r,n){this.message=r,this.target=t,this.value=n}}class Gi extends Ui{}class ef extends Ui{}const Hn="Custom",tf=null,rf={true:1,"":1,1:1};function nf(e,t,r,n,s){const{type:a,reflect:o,event:l,value:c,attr:u=sf(t)}=r?.name!=Hn&&cn(r)&&r!=tf?r:{type:r},f=a?.name===Hn&&a.map,h=c!=null?a==Function||!Dt(c)?()=>c:c:null;Object.defineProperty(e,t,{configurable:!0,set(p){const m=this[t];h&&a!=Boolean&&p==null&&(p=h());const{error:_,value:x}=(f?lf:cf)(a,p);if(_&&x!=null)throw new Gi(this,`The value defined for prop '${t}' must be of type '${a.name}'`,x);m!=x&&(this._props[t]=x??void 0,this.update(),l&&Hi(this,l),this.updated.then(()=>{o&&(this._ignoreAttr=u,af(this,a,u,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),h&&(s[t]=h()),n[u]={prop:t,type:a}}const Hi=(e,{type:t,base:r=CustomEvent,...n})=>e.dispatchEvent(new r(t,n)),sf=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),af=(e,t,r,n)=>n==null||t==Boolean&&!n?e.removeAttribute(r):e.setAttribute(r,t?.name===Hn&&t?.serialize?t?.serialize(n):cn(n)?JSON.stringify(n):t==Boolean?"":n),of=(e,t)=>e==Boolean?!!rf[t]:e==Number?Number(t):e==String?t:e==Array||e==Object?JSON.parse(t):e.name==Hn?t:new e(t),lf=({map:e},t)=>{try{return{value:e(t),error:!1}}catch{return{value:t,error:!0}}},cf=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:void 0,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let uf=0;const df=e=>(e?.dataset||{})?.hydrate||""||"c"+uf++,$n=(e,t=HTMLElement)=>{const r={},n={},s="prototype"in t&&t.prototype instanceof Element,a=s?t:"base"in t?t.base:HTMLElement,{props:o,styles:l}=s?e:t;class c extends a{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(const f in n)this[f]=n[f]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={};let f,h;this.mounted=new Promise(y=>this.mount=()=>{y(),f!=this.parentNode&&(h!=f?this.unmounted.then(this.update):this.update()),f=this.parentNode}),this.unmounted=new Promise(y=>this.unmount=()=>{y(),(f!=this.parentNode||!this.isConnected)&&(p.cleanEffects(!0)()(),h=this.parentNode,f=null)}),this.symbolId=this.symbolId||Symbol(),this.symbolIdParent=Symbol();const p=Xd(()=>this.update(),this,df(this));let m,_=!0;const x=Qs(this);this.update=()=>(m||(m=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const y=p.load(this._render),b=p.cleanEffects();return y&&y.render(this,this.symbolId,x),m=!1,_&&!p.isSuspense()&&(_=!1,!x&&ff(this)),b()}finally{m=!1}}).then(y=>{y&&y()})),this.updated),this.update()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.unmount()}attributeChangedCallback(f,h,p){if(r[f]){if(f===this._ignoreAttr||h===p)return;const{prop:m,type:_}=r[f];try{this[m]=of(_,p)}catch{throw new ef(this,`The value defined as attr '${f}' cannot be parsed by type '${_.name}'`,p)}}else super.attributeChangedCallback(f,h,p)}static get props(){return{...super.props,...o}}static get observedAttributes(){const f=super.observedAttributes||[];for(const h in o)nf(this.prototype,h,o[h],r,n);return Object.keys(r).concat(f)}}return c};function ff(e){const{styles:t}=e.constructor,{shadowRoot:r}=e;if(r&&t.length){const n=[];Vi(t,s=>{s&&(s instanceof Element?r.appendChild(s.cloneNode(!0)):n.push(s))}),n.length&&(r.adoptedStyleSheets=n)}}const Ki=e=>(t,r)=>{Zr(([n,s]=[])=>((s||!s)&&(s&&zi(s,r)?n=n||!0:(Dt(n)&&n(),n=null)),[n,r]),([n,s],a)=>a?(Dt(n)&&n(),[]):[n||t(),s],e)},bn=Ki(Bi),vf=Ki(Li);class Qi extends Array{constructor(t,r){let n=!0;const s=a=>{try{r(a,this,n)}finally{n=!1}};super(void 0,s,r),s(t)}}const ha=e=>{const t=ji();return Zr((r=new Qi(e,(n,s,a)=>{n=Dt(n)?n(s[0]):n,n!==s[0]&&(s[0]=n,a||t())}))=>r)},Qt=(e,t)=>{const[r]=Zr(([n,s,a=0]=[])=>((!s||s&&!zi(s,t))&&(n=e()),[n,t,a]));return r},pa=e=>{const{current:t}=En();if(!(e in t))throw new Gi(t,`For useProp("${e}"), the prop does not exist on the host.`,e);return Zr((r=new Qi(t[e],(n,s)=>{n=Dt(n)?n(t[e]):n,t[e]=n}))=>(r[0]=t[e],r))},sr=(e,t={})=>{const r=En();return r[e]||(r[e]=(n=t.detail)=>Hi(r.current,{type:e,...t,detail:n})),r[e]},Ys=Jr("atomico/options");globalThis[Ys]=globalThis[Ys]||{sheet:!!document.adoptedStyleSheets};const Yi=globalThis[Ys],hf={checked:1,value:1,selected:1},pf={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},mf={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},jn={},Zs=[];class Js extends Text{}const _f=Jr("atomico/id"),un=Jr("atomico/type"),ks=Jr("atomico/ref"),Zi=Jr("atomico/vnode"),gf=()=>{};function yf(e,t,r){return Xi(this,e,t,r)}const Ji=(e,t,...r)=>{const n=t||jn;let{children:s}=n;if(s=s??(r.length?r:Zs),e===gf)return s;const a=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:0;if(a===!1&&e instanceof Function)return e(s!=Zs?{children:s,...n}:n);const o=Yi.render||yf;return{[un]:Zi,type:e,props:n,children:s,key:n.key,shadow:n.shadowDom,static:n.staticNode,raw:a,is:n.is,clone:n.cloneNode,render:o}};function Xi(e,t,r=_f,n,s){let a;if(t&&t[r]&&t[r].vnode==e||e[un]!=Zi)return t;(e||!t)&&(s=s||e.type=="svg",a=e.type!="host"&&(e.raw==1?(t&&e.clone?t[ks]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[ks]||t.localName!=e.type:!t),a&&e.type!=null&&(e.raw==1&&e.clone?(n=!0,t=e.type.cloneNode(!0),t[ks]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:s?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,e.is?{is:e.is}:void 0)));const o=t[r]?t[r]:jn,{vnode:l=jn,cycle:c=0}=o;let{fragment:u,handlers:f}=o;const{children:h=Zs,props:p=jn}=l;if(f=a?{}:f||{},e.static&&!a)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open",...e.shadow}),e.props!=p&&Sf(t,p,e.props,f,s),e.children!==h){const m=e.shadow?t.shadowRoot:t;u=wf(e.children,u,m,r,!c&&n,s&&e.type=="foreignObject"?!1:s)}return t[r]={vnode:e,handlers:f,fragment:u,cycle:c+1},t}function bf(e,t){const r=new Js(""),n=new Js("");let s;if(e[t?"prepend":"append"](r),t){let{lastElementChild:a}=e;for(;a;){const{previousElementSibling:o}=a;if(Qs(a,!0)&&!Qs(o,!0)){s=a;break}a=o}}return s?s.before(n):e.append(n),{markStart:r,markEnd:n}}function wf(e,t,r,n,s,a){e=e==null?null:Fd(e)?e:[e];const o=t||bf(r,s),{markStart:l,markEnd:c,keyes:u}=o;let f;const h=u&&new Set;let p=l;if(e&&Vi(e,m=>{if(typeof m=="object"&&!m[un])return;const _=m[un]&&m.key,x=u&&_!=null&&u.get(_);p!=c&&p===x?h.delete(p):p=p==c?c:p.nextSibling;const y=u?x:p;let b=y;if(m[un])b=Xi(m,y,n,s,a);else{const N=m+"";!(b instanceof Text)||b instanceof Js?b=new Text(N):b.data!=N&&(b.data=N)}b!=p&&(u&&h.delete(b),!y||u?(r.insertBefore(b,p),u&&p!=c&&h.add(p)):y==c?r.insertBefore(b,c):(r.replaceChild(b,y),p=b)),_!=null&&(f=f||new Map,f.set(_,b))}),p=p==c?c:p.nextSibling,t&&p!=c)for(;p!=c;){const m=p;p=p.nextSibling,m.remove()}return h&&h.forEach(m=>m.remove()),o.keyes=f,o}function Sf(e,t,r,n,s){for(const a in t)!(a in r)&&uo(e,a,t[a],null,s,n);for(const a in r)uo(e,a,t[a],r[a],s,n)}function uo(e,t,r,n,s,a){if(t=t=="class"&&!s?"className":t,r=r??null,n=n??null,t in e&&hf[t]&&(r=e[t]),!(n===r||mf[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(Dt(n)||Dt(r)))xf(e,t.slice(2),n,a);else if(t=="ref")n&&(Dt(n)?n(e):n.current=e);else if(t=="style"){const{style:o}=e;r=r||"",n=n||"";const l=cn(r),c=cn(n);if(l)for(const u in r)if(c)!(u in n)&&fo(o,u,null);else break;if(c)for(const u in n){const f=n[u];l&&r[u]===f||fo(o,u,f)}else o.cssText=n}else{const o=t[0]=="$"?t.slice(1):t;o===t&&(!s&&!pf[t]&&t in e||Dt(n)||Dt(r))?e[t]=n??"":n==null?e.removeAttribute(o):e.setAttribute(o,cn(n)?JSON.stringify(n):n)}}function xf(e,t,r,n){if(n.handleEvent||(n.handleEvent=s=>n[s.type].call(e,s)),r){if(!n[t]){const s=r.capture||r.once||r.passive?Object.assign({},r):null;e.addEventListener(t,n,s)}n[t]=r}else n[t]&&(e.removeEventListener(t,n),delete n[t])}function fo(e,t,r){let n="setProperty";r==null&&(n="removeProperty",r=null),~t.indexOf("-")?e[n](t,r):e[t]=r}const vo={};function os(e,...t){const r=(e.raw||e).reduce((n,s,a)=>n+s+(t[a]||""),"");return vo[r]=vo[r]||Ef(r)}function Ef(e){if(Yi.sheet){const t=new CSSStyleSheet;return t.replaceSync(e),t}else{const t=document.createElement("style");return t.textContent=e,t}}const $f=Ji("host",{style:"display: contents"}),Ps=Jr("atomico/context"),kf=(e,t)=>{const r=En();vf(()=>Wi(r.current,"ConnectContext",n=>{e===n.detail.id&&(n.stopPropagation(),n.detail.connect(t))}),[e])},Pf=e=>{const t=sr("ConnectContext",{bubbles:!0,composed:!0}),r=()=>{let a;return t({id:e,connect(o){a=o}}),a},[n,s]=ha(r);return bn(()=>{n||(e[Ps]||(e[Ps]=customElements.whenDefined(new e().localName)),e[Ps].then(()=>s(r)))},[e]),n},Tf=e=>{const t=Pf(e),r=ji();return bn(()=>{if(t)return Wi(t,"UpdatedValue",r)},[t]),(t||e).value},Af=e=>{const t=$n(()=>(kf(t,En().current),$f),{props:{value:{type:Object,event:{type:"UpdatedValue"},value:()=>e}}});return t.value=e,t},we=(e,t,r)=>(t==null?t={key:r}:t.key=r,Ji(e,t)),dn=we,Fi=os`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`,el=os`.vh{position:absolute;transform:scale(0)}`;function ma(){const e=new Date;return new Be(e.getFullYear(),e.getMonth()+1,e.getDate())}function _a(e,t=0){const r=Et(e),n=r.getUTCDay(),s=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-s),Be.from(r)}function tl(e,t=0){return _a(e,t).add({days:6})}function rl(e){return Be.from(new Date(Date.UTC(e.year,e.month,0)))}function is(e,t,r){return t&&Be.compare(e,t)<0?t:r&&Be.compare(e,r)>0?r:e}const Nf={days:1};function If(e,t=0){let r=_a(e.toPlainDate(),t);const n=tl(rl(e),t),s=[];for(;Be.compare(r,n)<0;){const a=[];for(let o=0;o<7;o++)a.push(r),r=r.add(Nf);s.push(a)}return s}function Et(e){return new Date(Date.UTC(e.year,e.month-1,e.day??1))}const Df=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/,Ts=(e,t)=>e.toString().padStart(t,"0");class Be{constructor(t,r,n){this.year=t,this.month=r,this.day=n}add(t){const r=Et(this);if("days"in t)return r.setUTCDate(this.day+t.days),Be.from(r);let{year:n,month:s}=this;"months"in t?(s=this.month+t.months,r.setUTCMonth(s-1)):(n=this.year+t.years,r.setUTCFullYear(n));const a=Be.from(Et({year:n,month:s,day:1}));return is(Be.from(r),a,rl(a))}toString(){return`${Ts(this.year,4)}-${Ts(this.month,2)}-${Ts(this.day,2)}`}toPlainYearMonth(){return new ls(this.year,this.month)}equals(t){return Be.compare(this,t)===0}static compare(t,r){return t.year<r.year?-1:t.year>r.year?1:t.month<r.month?-1:t.month>r.month?1:t.day<r.day?-1:t.day>r.day?1:0}static from(t){if(typeof t=="string"){const r=t.match(Df);if(!r)throw new TypeError(t);const[,n,s,a]=r;return new Be(parseInt(n,10),parseInt(s,10),parseInt(a,10))}return new Be(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}}class ls{constructor(t,r){this.year=t,this.month=r}add(t){const r=Et(this),n=(t.months??0)+(t.years??0)*12;return r.setUTCMonth(r.getUTCMonth()+n),new ls(r.getUTCFullYear(),r.getUTCMonth()+1)}equals(t){return this.year===t.year&&this.month===t.month}toPlainDate(){return new Be(this.year,this.month,1)}}function Kn(e,t){if(t)try{return e.from(t)}catch{}}function ar(e){const[t,r]=pa(e);return[Qt(()=>Kn(Be,t),[t]),n=>r(n?.toString())]}function Cf(e){const[t="",r]=pa(e);return[Qt(()=>{const[n,s]=t.split("/"),a=Kn(Be,n),o=Kn(Be,s);return a&&o?[a,o]:[]},[t]),n=>r(`${n[0]}/${n[1]}`)]}function Mf(e){const[t="",r]=pa(e);return[Qt(()=>{const n=[];for(const s of t.trim().split(/\s+/)){const a=Kn(Be,s);a&&n.push(a)}return n},[t]),n=>r(n.join(" "))]}function wn(e,t){return Qt(()=>new Intl.DateTimeFormat(t,{timeZone:"UTC",...e}),[t,e])}function ho(e,t,r){const n=wn(e,r);return Qt(()=>{const s=[],a=new Date;for(var o=0;o<7;o++){const l=(a.getUTCDay()-t+7)%7;s[l]=n.format(a),a.setUTCDate(a.getUTCDate()+1)}return s},[t,n])}const po=(e,t,r)=>is(e,t,r)===e,mo=e=>e.target.matches(":dir(ltr)"),Rf={month:"long",day:"numeric"},Of={month:"long"},qf={weekday:"long"},As={bubbles:!0};function Bf({props:e,context:t}){const{offset:r}=e,{firstDayOfWeek:n,isDateDisallowed:s,min:a,max:o,today:l,page:c,locale:u,focusedDate:f,formatWeekday:h}=t,p=l??ma(),m=ho(qf,n,u),_=Qt(()=>({weekday:h}),[h]),x=ho(_,n,u),y=wn(Rf,u),b=wn(Of,u),N=Qt(()=>c.start.add({months:r}),[c,r]),A=Qt(()=>If(N,n),[N,n]),E=sr("focusday",As),$=sr("selectday",As),T=sr("hoverday",As);function C(I){E(is(I,a,o))}function S(I){let Q;switch(I.key){case"ArrowRight":Q=f.add({days:mo(I)?1:-1});break;case"ArrowLeft":Q=f.add({days:mo(I)?-1:1});break;case"ArrowDown":Q=f.add({days:7});break;case"ArrowUp":Q=f.add({days:-7});break;case"PageUp":Q=f.add(I.shiftKey?{years:-1}:{months:-1});break;case"PageDown":Q=f.add(I.shiftKey?{years:1}:{months:1});break;case"Home":Q=_a(f,n);break;case"End":Q=tl(f,n);break;default:return}C(Q),I.preventDefault()}function q(I){const Q=N.equals(I);if(!t.showOutsideDays&&!Q)return;const le=I.equals(f),Ce=I.equals(p),be=Et(I),Se=s?.(be),Pe=!po(I,a,o);let J="",P;if(t.type==="range"){const[z,pe]=t.value,xe=z?.equals(I),fe=pe?.equals(I);P=z&&pe&&po(I,z,pe),J=`${xe?"range-start":""} ${fe?"range-end":""} ${P&&!xe&&!fe?"range-inner":""}`}else t.type==="multi"?P=t.value.some(z=>z.equals(I)):P=t.value?.equals(I);return{part:`${`button day day-${be.getDay()} ${Q?P?"selected":"":"outside"} ${Se?"disallowed":""} ${Ce?"today":""} ${t.getDayParts?.(be)??""}`} ${J}`,tabindex:Q&&le?0:-1,disabled:Pe,"aria-disabled":Se?"true":void 0,"aria-pressed":Q&&P,"aria-current":Ce?"date":void 0,"aria-label":y.format(be),onkeydown:S,onclick(){Se||$(I),C(I)},onmouseover(){!Se&&!Pe&&T(I)}}}return{weeks:A,yearMonth:N,daysLong:m,daysVisible:x,formatter:b,getDayProps:q}}const Ns=ma(),ga=Af({type:"date",firstDayOfWeek:1,focusedDate:Ns,page:{start:Ns.toPlainYearMonth(),end:Ns.toPlainYearMonth()}});customElements.define("calendar-ctx",ga);const Lf=(e,t)=>(t+e)%7,jf=$n(e=>{const t=Tf(ga),r=Jd(),n=Bf({props:e,context:t});function s(){r.current.querySelector("button[tabindex='0']")?.focus()}return dn("host",{shadowDom:!0,focus:s,children:[we("div",{id:"h",part:"heading",children:n.formatter.format(Et(n.yearMonth))}),dn("table",{ref:r,"aria-labelledby":"h",part:"table",children:[we("thead",{children:we("tr",{part:"tr head",children:n.daysLong.map((a,o)=>dn("th",{part:`th day day-${Lf(t.firstDayOfWeek,o)}`,scope:"col",children:[we("span",{class:"vh",children:a}),we("span",{"aria-hidden":"true",children:n.daysVisible[o]})]}))})}),we("tbody",{children:n.weeks.map((a,o)=>we("tr",{part:"tr week",children:a.map((l,c)=>{const u=n.getDayProps(l);return we("td",{part:"td",children:u&&we("button",{...u,children:l.day})},c)})},o))})]})]})},{props:{offset:{type:Number,value:0}},styles:[Fi,el,os`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`]});customElements.define("calendar-month",jf);function _o(e){return we("button",{part:`button ${e.name} ${e.onclick?"":"disabled"}`,onclick:e.onclick,"aria-disabled":e.onclick?null:"true",children:we("slot",{name:e.name,children:e.children})})}function ya(e){const t=Et(e.page.start),r=Et(e.page.end);return dn("div",{role:"group","aria-labelledby":"h",part:"container",children:[we("div",{id:"h",class:"vh","aria-live":"polite","aria-atomic":"true",children:e.formatVerbose.formatRange(t,r)}),dn("div",{part:"header",children:[we(_o,{name:"previous",onclick:e.previous,children:"Previous"}),we("slot",{part:"heading",name:"heading",children:we("div",{"aria-hidden":"true",children:e.format.formatRange(t,r)})}),we(_o,{name:"next",onclick:e.next,children:"Next"})]}),we(ga,{value:e,onselectday:e.onSelect,onfocusday:e.onFocus,onhoverday:e.onHover,children:we("slot",{})})]})}const ba={value:{type:String,value:""},min:{type:String,value:""},max:{type:String,value:""},today:{type:String,value:""},isDateDisallowed:{type:Function,value:e=>!1},formatWeekday:{type:String,value:()=>"narrow"},getDayParts:{type:Function,value:e=>""},firstDayOfWeek:{type:Number,value:()=>1},showOutsideDays:{type:Boolean,value:!1},locale:{type:String,value:()=>{}},months:{type:Number,value:1},focusedDate:{type:String,value:()=>{}},pageBy:{type:String,value:()=>"months"}},wa=[Fi,el,os`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`],zf={year:"numeric"},Vf={year:"numeric",month:"long"};function Is(e,t){return(t.year-e.year)*12+t.month-e.month}const go=(e,t)=>(e=t===12?new ls(e.year,1):e,{start:e,end:e.add({months:t-1})});function Wf({pageBy:e,focusedDate:t,months:r,max:n,min:s,goto:a}){const o=e==="single"?1:r,[l,c]=ha(()=>go(t.toPlainYearMonth(),r)),u=h=>c(go(l.start.add({months:h}),r)),f=h=>{const p=Is(l.start,h.toPlainYearMonth());return p>=0&&p<r};return bn(()=>{if(f(t))return;const h=Is(t.toPlainYearMonth(),l.start);a(t.add({months:h}))},[l.start]),bn(()=>{if(f(t))return;const h=Is(l.start,t.toPlainYearMonth());u(h===-1?-o:h===r?o:Math.floor(h/r)*r)},[t,o,r]),{page:l,previous:!s||!f(s)?()=>u(-o):void 0,next:!n||!f(n)?()=>u(o):void 0}}function Sa({months:e,pageBy:t,locale:r,focusedDate:n,setFocusedDate:s}){const[a]=ar("min"),[o]=ar("max"),[l]=ar("today"),c=sr("focusday"),u=sr("change"),f=Qt(()=>is(n??l??ma(),a,o),[n,l,a,o]);function h(b){s(b),c(Et(b))}const{next:p,previous:m,page:_}=Wf({pageBy:t,focusedDate:f,months:e,min:a,max:o,goto:h}),x=En();function y(b){const N=b?.target??"day";N==="day"?x.current.querySelectorAll("calendar-month").forEach(A=>A.focus(b)):x.current.shadowRoot.querySelector(`[part~='${N}']`).focus(b)}return{format:wn(zf,r),formatVerbose:wn(Vf,r),page:_,focusedDate:f,dispatch:u,onFocus(b){b.stopPropagation(),h(b.detail),setTimeout(y)},min:a,max:o,today:l,next:p,previous:m,focus:y}}const Uf=$n(e=>{const[t,r]=ar("value"),[n=t,s]=ar("focusedDate"),a=Sa({...e,focusedDate:n,setFocusedDate:s});function o(l){r(l.detail),a.dispatch()}return we("host",{shadowDom:!0,focus:a.focus,children:we(ya,{...e,...a,type:"date",value:t,onSelect:o})})},{props:ba,styles:wa});customElements.define("calendar-date",Uf);const yo=(e,t)=>Be.compare(e,t)<0?[e,t]:[t,e],Gf=$n(e=>{const[t,r]=Cf("value"),[n=t[0],s]=ar("focusedDate"),a=Sa({...e,focusedDate:n,setFocusedDate:s}),o=sr("rangestart"),l=sr("rangeend"),[c,u]=ar("tentative"),[f,h]=ha();bn(()=>h(void 0),[c]);function p(y){a.onFocus(y),m(y)}function m(y){y.stopPropagation(),c&&h(y.detail)}function _(y){const b=y.detail;y.stopPropagation(),c?(r(yo(c,b)),u(void 0),l(Et(b)),a.dispatch()):(u(b),o(Et(b)))}const x=c?yo(c,f??c):t;return we("host",{shadowDom:!0,focus:a.focus,children:we(ya,{...e,...a,type:"range",value:x,onFocus:p,onHover:m,onSelect:_})})},{props:{...ba,tentative:{type:String,value:""}},styles:wa});customElements.define("calendar-range",Gf);const Hf=$n(e=>{const[t,r]=Mf("value"),[n=t[0],s]=ar("focusedDate"),a=Sa({...e,focusedDate:n,setFocusedDate:s});function o(l){const c=[...t],u=t.findIndex(f=>f.equals(l.detail));u<0?c.push(l.detail):c.splice(u,1),r(c),a.dispatch()}return we("host",{shadowDom:!0,focus:a.focus,children:we(ya,{...e,...a,type:"multi",value:t,onSelect:o})})},{props:ba,styles:wa});customElements.define("calendar-multi",Hf);async function Kf(e,t){await t.modalState?.addStock()}var Qf=k('<span class="loading loading-spinner loading-sm"></span>'),Yf=k('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Zf=k('<span class="loading loading-spinner loading-xs"></span>'),Jf=k('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Xf=k('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Ff=k(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input validator"><!> <input placeholder="Quantité" type="number" step="0.01" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="select select-bordered" required><option disabled selected><!>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea" placeholder="remarques..."></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function ev(e,t){W(t,!0);const r=L(()=>t.modalState.forms.stock);let n=L(()=>i(r)&&i(r).quantity&&i(r).quantity>0&&i(r).unit);async function s(J){await t.modalState?.removeStock(J)}var a=Ff(),o=d(a),l=d(o);Gs(l,{class:"h-5 w-5"});var c=v(o,2),u=d(c),f=v(d(u),2),h=d(f),p=d(h);as(p,{class:"h-4 w-4 opacity-50"});var m=v(p,2),_=v(h,2),x=d(_),y=d(x);Ri(y,{class:"h-4 w-4 opacity-50"}),x.value=x.__value="";var b=v(x);b.value=b.__value="kg";var N=v(b);N.value=N.__value="gr.";var A=v(N);A.value=A.__value="l.";var E=v(A);E.value=E.__value="ml";var $=v(E);$.value=$.__value="unité";var T=v($);T.value=T.__value="bottes";var C=v(f,2),S=d(C),q=v(C,2),I=d(q);I.__click=[Kf,t];var Q=d(I);{var le=J=>{var P=Qf();g(J,P)},Ce=J=>{var P=it("Ajouter au stock");g(J,P)};O(Q,J=>{t.modalState.loading?J(le):J(Ce,!1)})}var be=v(c,2);{var Se=J=>{var P=Yf(),z=d(P);Gs(z,{class:"mx-auto mb-2 h-12 w-12"}),g(J,P)},Pe=J=>{var P=Xf(),z=d(P),pe=v(d(z));qe(pe,23,()=>t.modalState.stockEntries,xe=>xe.dateTime,(xe,fe,Fe)=>{var ct=Jf(),de=d(ct),ge=d(de),Me=v(de),Le=d(Me),Re=v(Me),Oe=d(Re),$e=v(Re),Ve=d($e);Ve.__click=()=>s(i(Fe));var ut=d(Ve);{var dr=ce=>{var ke=Zf();g(ce,ke)},X=ce=>{var ke=it("Supprimer");g(ce,ke)};O(ut,ce=>{t.modalState.loading?ce(dr):ce(X,!1)})}B(ce=>{M(ge,`${i(fe).quantity??""}
                ${i(fe).unit??""}`),M(Le,ce),M(Oe,i(fe).notes||"-"),Ve.disabled=t.modalState.loading},[()=>yn(i(fe).dateTime)]),g(xe,ct)}),g(J,P)};O(be,J=>{t.modalState.stockEntries.length===0?J(Se):J(Pe,!1)})}B(()=>{ua(S,`          ${i(r).notes??""}
        `),I.disabled=t.modalState.loading||!i(n)}),Ze(m,()=>i(r).quantity,J=>i(r).quantity=J),qs(_,()=>i(r).unit,J=>i(r).unit=J),Ze(S,()=>i(r).notes,J=>i(r).notes=J),g(e,a),U()}Rt(["click"]);var tv=(e,t)=>{e.key==="Enter"&&t()},rv=k("<option> </option>"),nv=(e,t,r)=>t(r),sv=k('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),av=k('<span class="loading loading-spinner loading-sm"></span>'),ov=k('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function iv(e,t){W(t,!0);let r=ne("");const n=L(()=>i(r).trim().length>0&&!t.modalState.whoList.includes(i(r).trim()));async function s(){!i(n)||!t.modalState||(await t.modalState.addVolunteer(i(r).trim()),D(r,""))}async function a(E){await t.modalState?.removeVolunteer(E)}var o=ov(),l=d(o),c=d(l),u=v(d(c),2),f=d(u);va(f,{class:"h-4 w-4 opacity-50"});var h=v(f,2);h.__keydown=[tv,s];var p=v(h,2);qe(p,21,()=>R.uniqueWho,Br,(E,$)=>{var T=rv(),C=d(T),S={};B(()=>{M(C,i($)),S!==(S=i($))&&(T.value=(T.__value=i($))??"")}),g(E,T)});var m=v(u,2),_=v(d(m),2);qe(_,20,()=>t.modalState.whoList,E=>E,(E,$)=>{var T=sv(),C=d(T),S=v(C);S.__click=[nv,a,$];var q=d(S);gt(q,{class:"h-3 w-3"}),B(()=>{M(C,`${$??""} `),S.disabled=t.modalState.loading}),g(E,T)});var x=v(m,2),y=d(x);y.__click=s;var b=d(y);{var N=E=>{var $=av();g(E,$)},A=E=>{var $=it("Ajouter");g(E,$)};O(b,E=>{t.modalState.loading?E(N):E(A,!1)})}B(()=>y.disabled=t.modalState.loading||!i(n)),Ze(h,()=>i(r),E=>D(r,E)),g(e,o),U()}Rt(["keydown","click"]);var lv=(e,t)=>{e.key==="Enter"&&t()},cv=k("<option> </option>"),uv=k('<span class="loading loading-spinner loading-sm"></span>'),dv=(e,t,r)=>{D(t,""),D(r,"")},fv=k(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function vv(e,t){W(t,!0);const r=L(()=>t.modalState.forms.store),n=L(()=>i(r).name||""),s=L(()=>i(r).comment||"");let a=ne(_t(i(n))),o=ne(_t(i(s)));const l=L(()=>i(a).trim()!==(i(r).name||"")||i(o).trim()!==(i(r).comment||""));async function c(){if(!i(l))return;const S={storeName:i(a).trim(),storeComment:i(o).trim()};await t.modalState.updateStore(S)}var u=fv(),f=d(u),h=d(f),p=v(d(h),4),m=d(p),_=d(m);gn(_,{class:"h-4 w-4 opacity-50"});var x=v(_,2);x.__keydown=[lv,c];var y=v(x,2);qe(y,21,()=>R.uniqueStores,Br,(S,q)=>{var I=cv(),Q=d(I),le={};B(()=>{M(Q,i(q)),le!==(le=i(q))&&(I.value=(I.__value=i(q))??"")}),g(S,I)});var b=v(m,2),N=v(p,2),A=d(N);A.__click=c;var E=d(A);{var $=S=>{var q=uv();g(S,q)},T=S=>{var q=it("Mettre à jour");g(S,q)};O(E,S=>{t.modalState.loading?S($):S(T,!1)})}var C=v(A,2);C.__click=[dv,a,o],B(()=>{ua(b,`          ${i(o)??""}
        `),A.disabled=t.modalState.loading||!i(l),C.disabled=t.modalState.loading}),Ze(x,()=>i(a),S=>D(a,S)),Ze(b,()=>i(o),S=>D(o,S)),g(e,u),U()}Rt(["keydown","click"]);var hv=k('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),pv=k('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td></tr>'),mv=k('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),_v=k('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function gv(e,t){W(t,!0);const r=L(()=>t.modalState.recipes);var n=_v(),s=d(n),a=d(s);fa(a,{class:"h-5 w-5"});var o=v(s,2);{var l=u=>{var f=hv(),h=d(f);as(h,{class:"mx-auto mb-2 h-12 w-12"}),g(u,f)},c=u=>{var f=mv(),h=d(f),p=v(d(h));qe(p,21,()=>i(r),m=>m.recipeName+m.dateTimeService,(m,_)=>{var x=pv(),y=d(x),b=d(y),N=v(y),A=d(N),E=v(N),$=d(E),T=v(E),C=d(T),S=v(T),q=d(S);B(I=>{M(b,i(_).recipeName),M(A,`${i(_).quantity??""} ${i(_).unit??""}`),M($,I),M(C,i(_).typePlat),M(q,i(_).assiettes||"-")},[()=>yn(i(_).dateTimeService)]),g(m,x)}),g(u,f)};O(o,u=>{i(r).length===0?u(l):u(c,!1)})}g(e,n),U()}var yv=k('<div class="badge badge-success gap-1"><!> Actif</div>'),bv=k('<div class="badge badge-warning gap-1"><!> </div>'),wv=(e,t)=>t("recettes"),Sv=k('<span class="badge badge-sm badge-secondary ml-1"> </span>'),xv=(e,t)=>t("achats"),Ev=k('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$v=(e,t)=>t("stock"),kv=k('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Pv=(e,t)=>t("volontaires"),Tv=k('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Av=(e,t)=>t("magasins"),Nv=k('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Iv=k('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div> <div class="text-sm opacity-75"><span class="font-medium">Stock:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Dv(e,t){W(t,!0);let r=L(()=>Ct.product.tab),n=L(()=>Ct.product.id),s=L(()=>Ct.product.isOpen),a=L(()=>i(n)?Nd(i(n)):null),o=L(()=>i(a)?.product);function l(h){Ct.product.tab=h}var c=V(),u=j(c);{var f=h=>{var p=Iv(),m=d(p),_=d(m),x=d(_),y=d(x),b=v(x,2),N=d(b),A=d(N),E=v(N,2);{var $=Y=>{var me=yv(),Te=d(me);pd(Te,{class:"h-3 w-3"}),g(Y,me)},T=Y=>{var me=bv(),Te=d(me);Ci(Te,{class:"h-3 w-3"});var dt=v(Te);B(()=>M(dt,` ${i(o).status??""}`)),g(Y,me)};O(E,Y=>{i(o).status==="active"?Y($):Y(T,!1)})}var C=v(E,2),S=v(d(C)),q=v(C,2),I=v(d(q)),Q=v(b,2);Q.__click=function(...Y){io?.apply(this,Y)};var le=d(Q);gt(le,{class:"h-4 w-4"});var Ce=v(_,2),be=d(Ce);be.__click=[wv,l];var Se=d(be);fa(Se,{class:"mr-1 h-5 w-5"});var Pe=v(Se,2);{var J=Y=>{var me=Sv(),Te=d(me);B(()=>M(Te,i(a).recipes.length)),g(Y,me)};O(Pe,Y=>{i(a).recipes.length>0&&Y(J)})}var P=v(be,2);P.__click=[xv,l];var z=d(P);Gn(z,{class:"mr-1 h-5 w-5"});var pe=v(z,2);{var xe=Y=>{var me=Ev(),Te=d(me);B(()=>M(Te,i(a).purchasesList.length)),g(Y,me)};O(pe,Y=>{i(a).purchasesList.length>0&&Y(xe)})}var fe=v(P,2);fe.__click=[$v,l];var Fe=d(fe);Gs(Fe,{class:"mr-1 h-5 w-5"});var ct=v(Fe,2);{var de=Y=>{var me=kv(),Te=d(me);B(()=>M(Te,i(a).stockEntries.length)),g(Y,me)};O(ct,Y=>{i(a).stockEntries.length>0&&Y(de)})}var ge=v(fe,2);ge.__click=[Pv,l];var Me=d(ge);Mi(Me,{class:"mr-1 h-5 w-5"});var Le=v(Me,2);{var Re=Y=>{var me=Tv(),Te=d(me);B(()=>M(Te,i(o).who.length)),g(Y,me)};O(Le,Y=>{i(o).who&&i(o).who.length>0&&Y(Re)})}var Oe=v(ge,2);Oe.__click=[Av,l];var $e=d(Oe);gn($e,{class:"mr-1 h-5 w-5"});var Ve=v(Ce,2),ut=d(Ve);{var dr=Y=>{var me=Nv(),Te=d(me);gt(Te,{class:"h-4 w-4"});var dt=v(Te,2),fr=d(dt);B(()=>M(fr,`erreur : ${i(a).error??""}`)),g(Y,me)};O(ut,Y=>{i(a).error&&Y(dr)})}var X=v(ut,2),ce=d(X);{var ke=Y=>{gv(Y,{get modalState(){return i(a)}})},Ot=Y=>{var me=V(),Te=j(me);{var dt=We=>{Kd(We,{get modalState(){return i(a)}})},fr=We=>{var $t=V(),qt=j($t);{var Bt=et=>{ev(et,{get modalState(){return i(a)}})},Lt=et=>{var bt=V(),jt=j(bt);{var nt=Qe=>{iv(Qe,{get modalState(){return i(a)}})},zt=Qe=>{var Vt=V(),kt=j(Vt);{var Xt=Wt=>{vv(Wt,{get modalState(){return i(a)}})};O(kt,Wt=>{i(r)==="magasins"&&Wt(Xt)},!0)}g(Qe,Vt)};O(jt,Qe=>{i(r)==="volontaires"?Qe(nt):Qe(zt,!1)},!0)}g(et,bt)};O(qt,et=>{i(r)==="stock"?et(Bt):et(Lt,!1)},!0)}g(We,$t)};O(Te,We=>{i(r)==="achats"?We(dt):We(fr,!1)},!0)}g(Y,me)};O(ce,Y=>{i(r)==="recettes"?Y(ke):Y(Ot,!1)})}var Ke=v(Ve,2),ve=d(Ke);ve.__click=function(...Y){io?.apply(this,Y)},B(()=>{M(y,i(o).productName),M(A,i(o).productType),M(S,` ${i(o).displayTotalNeeded??""}`),M(I,` ${i(o).displayTotalStock??""}`),Ie(be,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Ie(P,1,`tab ${i(r)==="achats"?"tab-active":""}`),Ie(fe,1,`tab ${i(r)==="stock"?"tab-active":""}`),Ie(ge,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Ie(Oe,1,`tab ${i(r)==="magasins"?"tab-active":""}`)}),g(h,p)};O(u,h=>{i(s)&&i(o)&&i(a)&&h(f)})}g(e,c),U()}Rt(["click"]);var Cv=()=>R.setGroupBy("none"),Mv=()=>R.setGroupBy("store"),Rv=()=>R.setGroupBy("productType"),Ov=(e,t)=>R.toggleProductType(t),qv=k("<button><!> </button>"),Bv=()=>R.toggleTemperature("frais"),Lv=()=>R.toggleTemperature("surgele"),jv=()=>R.clearTypeAndTemperatureFilters(),zv=k('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Vv=(e,t)=>R.toggleStore(t),Wv=k("<button> </button>"),Uv=k('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Gv=(e,t)=>R.toggleWho(t),Hv=k("<button> </button>"),Kv=k('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Qv=(e,t)=>{R.clearFilters(),D(t,!1)},Yv=k('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Zv(e,t){W(t,!0);let r=ne(!1);const n=L(()=>R.filters),s=L(()=>R.uniqueStores),a=L(()=>R.uniqueWho),o=L(()=>R.uniqueProductTypes);var l=Yv(),c=j(l),u=d(c),f=v(u,2),h=v(d(f),2),p=d(h),m=d(p),_=d(m);Hs(_,{class:"w-5 h-5"});var x=v(m,2),y=d(x);gt(y,{class:"w-4 h-4"});var b=v(p,2),N=v(d(b),2),A=d(N);A.__change=[Cv];var E=v(A,2);E.__change=[Mv];var $=v(E,2);$.__change=[Rv];var T=v(b,2),C=d(T),S=v(d(C),2);qe(S,20,()=>i(o),de=>de,(de,ge)=>{const Me=L(()=>Ln(ge));var Le=qv();Le.__click=[Ov,ge];var Re=d(Le);Rn(Re,()=>i(Me).icon,($e,Ve)=>{Ve($e,{class:"w-3 h-3 mr-1"})});var Oe=v(Re);B($e=>{Ie(Le,1,`btn btn-sm ${$e??""}`),M(Oe,` ${i(Me).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(ge)?"btn-accent":"btn-dash btn-accent"]),g(de,Le)});var q=v(S,2),I=d(q);I.__click=[Bv];var Q=d(I);qn(Q,{class:"w-3 h-3"});var le=v(I,2);le.__click=[Lv];var Ce=d(le);Bn(Ce,{class:"w-3 h-3"});var be=v(le,2);{var Se=de=>{var ge=zv();ge.__click=[jv];var Me=d(ge);gt(Me,{class:"w-3 h-3"}),g(de,ge)};O(be,de=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&de(Se)})}var Pe=v(T,2);{var J=de=>{var ge=Uv(),Me=d(ge),Le=v(d(Me),2);qe(Le,20,()=>i(s),Re=>Re,(Re,Oe)=>{var $e=Wv();$e.__click=[Vv,Oe];var Ve=d($e);B(ut=>{Ie($e,1,`btn btn-sm ${ut??""}`),M(Ve,Oe)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(Oe)?"btn-accent":"btn-dash btn-accent"]),g(Re,$e)}),g(de,ge)};O(Pe,de=>{i(s).length>0&&de(J)})}var P=v(Pe,2);{var z=de=>{var ge=Kv(),Me=d(ge),Le=v(d(Me),2);qe(Le,20,()=>i(a),Re=>Re,(Re,Oe)=>{var $e=Hv();$e.__click=[Gv,Oe];var Ve=d($e);B(ut=>{Ie($e,1,`btn btn-sm ${ut??""}`),M(Ve,Oe)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(Oe)?"btn-accent":"btn-dash btn-accent"]),g(Re,$e)}),g(de,ge)};O(P,de=>{i(a).length>0&&de(z)})}var pe=v(P,4);pe.__click=[Qv,r];var xe=d(pe);gt(xe,{class:"w-4 h-4 mr-2"});var fe=v(c,2),Fe=d(fe),ct=d(Fe);Hs(ct,{class:"w-6 h-6"}),B((de,ge)=>{Lr(A,i(n).groupBy==="none"),Lr(E,i(n).groupBy==="store"),Lr($,i(n).groupBy==="productType"),Ie(I,1,`btn btn-sm ${de??""}`),Ie(le,1,`btn btn-sm ${ge??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Yc(u,()=>i(r),de=>D(r,de)),g(e,l),U()}Rt(["change","click"]);Rt(["mousedown"]);const rn=e=>{var t=Jv(),r=d(t);Di(r,{class:"h-4 w-4 text-amber-600"}),g(e,t)};var Jv=k('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Xv=()=>R.clearFilters(),Fv=e=>R.setSearchQuery(e.currentTarget.value),eh=()=>R.setGroupBy("none"),th=()=>R.setGroupBy("store"),rh=()=>R.setGroupBy("productType"),nh=(e,t)=>R.toggleProductType(t),sh=k("<button><!> </button>"),ah=()=>R.toggleTemperature("frais"),oh=()=>R.toggleTemperature("surgele"),ih=()=>R.clearTypeAndTemperatureFilters(),lh=k('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),ch=k('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),uh=(e,t)=>R.toggleStore(t),dh=k("<button><!> </button>"),fh=()=>R.clearStoreFilters(),vh=k('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),hh=k('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),ph=(e,t)=>R.toggleWho(t),mh=k("<button><!> </button>"),_h=()=>R.clearWhoFilters(),gh=k('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),yh=k('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),bh=()=>R.handleSort("productName"),wh=()=>R.handleSort("store"),Sh=()=>R.handleSort("who"),xh=()=>R.handleSort("productType"),Eh=k('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),$h=k('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),kh=(e,t,r)=>t("recettes",i(r).$id),Ph=k('<div class="text-base-content/60 text-xs"> </div>'),Th=k('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Ah=k('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Nh=(e,t,r)=>t("magasins",i(r).$id),Ih=k('<div class="tooltip tooltip-info"> </div>'),Dh=(e,t,r)=>t("volontaires",i(r).$id),Ch=k('<span class="badge badge-soft badge-info badge-sm"> </span>'),Mh=k('<div class="flex flex-wrap gap-1 pr-8"></div>'),Rh=(e,t,r)=>t("recettes",i(r).$id),Oh=k('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),qh=(e,t,r)=>t("achats",i(r).$id),Bh=k('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Lh=k('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"> <!></td><td class="group relative text-center"><!></td></tr>'),jh=k("<!> <!>",1),zh=k('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Vh=k('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Wh(e,t){W(t,!0);const r=L(()=>R.filteredProducts),n=L(()=>R.filteredGroupedProducts),s=L(()=>R.stats),a=L(()=>R.uniqueStores),o=L(()=>R.uniqueWho),l=L(()=>R.uniqueProductTypes),c=L(()=>R.filters);function u(G,he){Pd(G,he)}var f=Vh(),h=j(f),p=d(h),m=d(p),_=d(m);oo(_,{class:"mr-1 h-4 w-4"});var x=v(_),y=v(m,2),b=d(y);qn(b,{class:"mr-1 h-4 w-4"});var N=v(b),A=v(y,2),E=d(A);Bn(E,{class:"mr-1 h-4 w-4"});var $=v(E),T=v(A,2),C=d(T);md(C,{class:"mr-1 h-4 w-4"});var S=v(C),q=v(p,2),I=d(q),Q=d(I),le=d(Q),Ce=d(le);Hs(Ce,{class:"h-5 w-5"});var be=v(le,2);be.__click=[Xv];var Se=d(be);gt(Se,{class:"h-4 w-4"});var Pe=v(I,2),J=d(Pe),P=v(d(J),2),z=d(P);$d(z,{class:"h-4 w-4"});var pe=v(z,2);pe.__input=[Fv];var xe=v(J,2),fe=v(d(xe),2),Fe=d(fe);Fe.__change=[eh];var ct=v(Fe,2);ct.__change=[th];var de=v(ct,2);de.__change=[rh];var ge=v(Pe,2),Me=d(ge),Le=d(Me);{var Re=G=>{var he=ch(),st=d(he),vt=v(d(st),2),Ye=d(vt);qe(Ye,16,()=>i(l),Ae=>Ae,(Ae,Ne)=>{const Pt=L(()=>Ln(Ne));var Ut=sh();Ut.__click=[nh,Ne];var mr=d(Ut);Rn(mr,()=>i(Pt).icon,(ht,Gt)=>{Gt(ht,{class:"mr-1 h-5 w-5"})});var Dr=v(mr);B(ht=>{Ie(Ut,1,`btn btn-sm ${ht??""}`),M(Dr,` ${i(Pt).displayName??""}`)},[()=>i(c).selectedProductTypes.length===0?"btn-soft btn-accent":i(c).selectedProductTypes.includes(Ne)?"btn-accent":"btn-dash btn-accent"]),g(Ae,Ut)});var at=v(Ye,2);at.__click=[ah];var wt=d(at);qn(wt,{class:"h-5 w-5"});var Ee=v(at,2);Ee.__click=[oh];var K=d(Ee);Bn(K,{class:"h-5 w-5"});var ue=v(Ee,2);{var H=Ae=>{var Ne=lh();Ne.__click=[ih];var Pt=d(Ne);gt(Pt,{class:"h-3 w-3"}),g(Ae,Ne)};O(ue,Ae=>{(i(c).selectedProductTypes.length>0||i(c).selectedTemperatures.length>0)&&Ae(H)})}B((Ae,Ne)=>{Ie(at,1,`btn btn-sm ms-4 ${Ae??""}`),Ie(Ee,1,`btn btn-sm ${Ne??""}`)},[()=>i(c).selectedTemperatures.length===0?"btn-soft btn-success":i(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(c).selectedTemperatures.length===0?"btn-soft btn-info":i(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),g(G,he)};O(Le,G=>{i(l).length>0&&G(Re)})}var Oe=v(Me,2),$e=d(Oe);{var Ve=G=>{var he=hh(),st=d(he),vt=v(d(st),2),Ye=d(vt);qe(Ye,16,()=>i(a),Ee=>Ee,(Ee,K)=>{var ue=dh();ue.__click=[uh,K];var H=d(ue);gn(H,{class:"mr-1 h-3 w-3"});var Ae=v(H);B(Ne=>{Ie(ue,1,`btn btn-xs ${Ne??""}`),M(Ae,` ${K??""}`)},[()=>i(c).selectedStores.length===0?"btn-soft btn-accent":i(c).selectedStores.includes(K)?"btn-accent":"btn-dash btn-accent"]),g(Ee,ue)});var at=v(Ye,2);{var wt=Ee=>{var K=vh();K.__click=[fh];var ue=d(K);gt(ue,{class:"h-3 w-3"}),g(Ee,K)};O(at,Ee=>{i(c).selectedStores.length>0&&Ee(wt)})}g(G,he)};O($e,G=>{i(a).length>0&&G(Ve)})}var ut=v($e,2);{var dr=G=>{var he=yh(),st=d(he),vt=v(d(st),2),Ye=d(vt);qe(Ye,16,()=>i(o),Ee=>Ee,(Ee,K)=>{var ue=mh();ue.__click=[ph,K];var H=d(ue);va(H,{class:"mr-1 h-3 w-3"});var Ae=v(H);B(Ne=>{Ie(ue,1,`btn btn-xs ${Ne??""}`),M(Ae,` ${K??""}`)},[()=>i(c).selectedWho.length===0?" btn-soft btn-info":i(c).selectedWho.includes(K)?" btn-info":"btn-dash btn-info"]),g(Ee,ue)});var at=v(Ye,2);{var wt=Ee=>{var K=gh();K.__click=[_h];var ue=d(K);gt(ue,{class:"h-3 w-3"}),g(Ee,K)};O(at,Ee=>{i(c).selectedWho.length>0&&Ee(wt)})}g(G,he)};O(ut,G=>{i(o).length>0&&G(dr)})}var X=v(q,2),ce=d(X),ke=d(ce),Ot=d(ke),Ke=d(Ot);Ke.__click=[bh];var ve=d(Ke),Y=d(ve);oo(Y,{class:"h-4 w-4"});var me=v(Y,2);{var Te=G=>{var he=it();B(()=>M(he,i(c).sortDirection==="asc"?"↑":"↓")),g(G,he)};O(me,G=>{i(c).sortColumn==="productName"&&G(Te)})}var dt=v(Ke);dt.__click=[wh];var fr=d(dt),We=d(fr);gn(We,{class:"h-4 w-4"});var $t=v(We,2);{var qt=G=>{var he=it();B(()=>M(he,i(c).sortDirection==="asc"?"↑":"↓")),g(G,he)};O($t,G=>{i(c).sortColumn==="store"&&G(qt)})}var Bt=v(dt);Bt.__click=[Sh];var Lt=d(Bt),et=d(Lt);Mi(et,{class:"h-4 w-4"});var bt=v(et,2);{var jt=G=>{var he=it();B(()=>M(he,i(c).sortDirection==="asc"?"↑":"↓")),g(G,he)};O(bt,G=>{i(c).sortColumn==="who"&&G(jt)})}var nt=v(Bt);nt.__click=[xh];var zt=d(nt),Qe=v(d(zt));{var Vt=G=>{var he=it();B(()=>M(he,i(c).sortDirection==="asc"?"↑":"↓")),g(G,he)};O(Qe,G=>{i(c).sortColumn==="productType"&&G(Vt)})}var kt=v(nt,2),Xt=d(kt),Wt=d(Xt);Gn(Wt,{class:"h-4 w-4"});var Ar=v(kt),vr=d(Ar),Nr=d(vr);yd(Nr,{class:"h-4 w-4"});var hr=v(ke);qe(hr,21,()=>Object.entries(i(n)),([G,he])=>G,(G,he)=>{var st=L(()=>xo(i(he),2));let vt=()=>i(st)[0],Ye=()=>i(st)[1];var at=jh(),wt=j(at);{var Ee=ue=>{const H=L(()=>Ln(vt()));var Ae=$h(),Ne=d(Ae),Pt=d(Ne),Ut=d(Pt);{var mr=ht=>{var Gt=it();B(()=>M(Gt,`🏪 ${vt()??""} (${Ye().length??""})`)),g(ht,Gt)},Dr=ht=>{var Gt=V(),cs=j(Gt);{var us=Ft=>{var _r=Eh(),Pn=d(_r);Rn(Pn,()=>i(H).icon,(fs,vs)=>{vs(fs,{class:"h-4 w-4"})});var Tn=v(Pn,2),Cr=d(Tn),An=v(Tn,2),ds=d(An);B(()=>{M(Cr,i(H).displayName),M(ds,`(${Ye().length??""})`)}),g(Ft,_r)},kn=Ft=>{var _r=it();B(()=>M(_r,`📦 ${vt()??""} (${Ye().length??""})`)),g(Ft,_r)};O(cs,Ft=>{i(c).groupBy==="productType"?Ft(us):Ft(kn,!1)},!0)}g(ht,Gt)};O(Ut,ht=>{i(c).groupBy==="store"?ht(mr):ht(Dr,!1)})}g(ue,Ae)};O(wt,ue=>{vt()!==""&&ue(Ee)})}var K=v(wt,2);qe(K,17,()=>Ad(Ye(),i(c)),ue=>ue.$id,(ue,H)=>{const Ae=L(()=>Ln(i(H).productType));var Ne=Lh(),Pt=d(Ne);Pt.__click=[kh,u,H];var Ut=d(Pt),mr=d(Ut),Dr=d(mr),ht=d(Dr),Gt=v(Dr,2);{var cs=Z=>{var _e=Ph(),Ue=d(_e);B(()=>M(Ue,`Ancien: ${i(H).previousNames[0]??""}`)),g(Z,_e)};O(Gt,Z=>{i(H).previousNames&&i(H).previousNames.length>0&&Z(cs)})}var us=v(mr,2),kn=d(us);{var Ft=Z=>{var _e=Th(),Ue=d(_e);qn(Ue,{class:"text-success h-4 w-4"}),g(Z,_e)};O(kn,Z=>{i(H).pFrais&&Z(Ft)})}var _r=v(kn,2);{var Pn=Z=>{var _e=Ah(),Ue=d(_e);Bn(Ue,{class:"text-info h-4 w-4"}),g(Z,_e)};O(_r,Z=>{i(H).pSurgel&&Z(Pn)})}var Tn=v(Ut,2);rn(Tn);var Cr=v(Pt);Cr.__click=[Nh,u,H];var An=d(Cr);{var ds=Z=>{var _e=Ih(),Ue=d(_e);B(()=>{Un(_e,"data-tip",i(H).storeInfo.storeComment),M(Ue,i(H).storeInfo.storeName||"-")}),g(Z,_e)},fs=Z=>{var _e=it();B(()=>M(_e,i(H).storeInfo?.storeName||"-")),g(Z,_e)};O(An,Z=>{i(H).storeInfo?.storeComment?Z(ds):Z(fs,!1)})}var vs=v(An,2);rn(vs);var hs=v(Cr);hs.__click=[Dh,u,H];var xa=d(hs);{var nl=Z=>{var _e=Mh();qe(_e,20,()=>i(H).who,Ue=>Ue,(Ue,Nn)=>{var In=Ch(),gs=d(In);B(()=>M(gs,Nn)),g(Ue,In)}),g(Z,_e)},sl=Z=>{var _e=it("-");g(Z,_e)};O(xa,Z=>{i(H).who&&i(H).who.length>0?Z(nl):Z(sl,!1)})}var al=v(xa,2);rn(al);var ps=v(hs),ol=d(ps),Ea=d(ol);Rn(Ea,()=>i(Ae).icon,(Z,_e)=>{_e(Z,{class:"h-3 w-3"})});var il=v(Ea),ms=v(ps);ms.__click=[Rh,u,H];var $a=d(ms),ll=d($a),ka=v($a,2);{var cl=Z=>{var _e=Oh(),Ue=d(_e),Nn=d(Ue),In=v(Nn);fa(In,{class:"h-3 w-3"});var gs=v(Ue,2),Ta=d(gs),ml=v(Ta);kd(ml,{class:"h-3 w-3"}),B(()=>{M(Nn,`${i(H)?.nbRecipes??""} `),M(Ta,`${i(H)?.totalAssiettes??""} `)}),g(Z,_e)};O(ka,Z=>{(i(H).nbRecipes||i(H).totalAssiettes)&&Z(cl)})}var ul=v(ka,2);rn(ul);var _s=v(ms);_s.__click=[qh,u,H];var Pa=d(_s),dl=v(Pa);rn(dl);var fl=v(_s),vl=d(fl);{var hl=Z=>{var _e=Bh(),Ue=d(_e);B(()=>M(Ue,i(H).displayMissingQuantity)),g(Z,_e)},pl=Z=>{hd(Z,{size:28,strokeWidth:3,class:"text-success m-auto"})};O(vl,Z=>{i(H).displayMissingQuantity!=="✅ Complet"?Z(hl):Z(pl,!1)})}B(()=>{M(ht,i(H).productName),Ie(Cr,1,`${i(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ie(ps,1,ci(i(c).groupBy==="productType"?"hidden":"")),M(il,` ${i(Ae).displayName??""}`),M(ll,i(H).displayTotalNeeded??"-"),M(Pa,`${(i(H).displayTotalPurchases||"-")??""} `)}),g(ue,Ne)}),g(G,at)});var Ir=v(ce,2);{var Xr=G=>{var he=zh();g(G,he)};O(Ir,G=>{i(r).length===0&&G(Xr)})}var pr=v(h,2);Dv(pr,{});var ft=v(pr,2);Zv(ft,{}),B(()=>{M(x,` ${i(s).total??""}`),M(N,` frais:
      ${i(s).frais??""}`),M($,` surgelés:
      ${i(s).surgel??""}`),M(S,` fusionnés:
      ${i(s).merged??""}`),ua(pe,i(c).searchQuery),Lr(Fe,i(c).groupBy==="none"),Lr(ct,i(c).groupBy==="store"),Lr(de,i(c).groupBy==="productType"),Ie(dt,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="store"?"hidden":""}`),Ie(nt,1,`hover:bg-base-100 cursor-pointer text-center ${i(c).groupBy==="productType"?"hidden":""}`)}),g(e,f),U()}Rt(["click","input","change"]);Xl();var Uh=k('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Gh(e){var t=Uh();g(e,t)}var Hh=k('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Kh(e,t){var r=Hh(),n=v(d(r),2),s=v(d(n),2),a=d(s);B(()=>M(a,t.message)),g(e,r)}var Qh=k('<div class="alert bg-error/20"><div class="flex items-start gap-3 "><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Yh(e,t){var r=Qh(),n=d(r),s=d(n);Ci(s,{class:"stroke-current shrink-0 h-6 w-6 mt-0.5"});var a=v(s,2),o=v(d(a),2),l=d(o);B(()=>M(l,t.message)),g(e,r)}var Zh=k('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Jh=k('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Xh=k('<div class="text-base-content/60"> </div>'),Fh=k('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ep=k('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),tp=k('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),rp=k('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function np(e,t){W(t,!0);let r,n=ne(null),s=ne(!0),a=ne(!1);hi(async()=>{r=Du();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await R.initialize(r)}catch(P){const z=P instanceof Error?P.message:"Erreur lors de l'initialisation";D(n,z,!0),console.error("[App] Erreur initialisation:",P)}finally{D(s,!1)}}),Fc(()=>{R.destroy()});async function o(){if(!(!r||i(a))){D(a,!0);try{await R.forceReload(r)}catch(P){console.error("[App] Erreur lors du rechargement forcé:",P)}finally{D(a,!1)}}}const l=L(()=>i(n)||R.error),c=L(()=>i(s)||R.loading),u=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var f=rp(),h=d(f),p=d(h),m=d(p),_=v(d(m),2),x=d(_);{var y=P=>{var z=Zh();g(P,z)};O(x,P=>{R.realtimeConnected&&P(y)})}var b=v(x,2);{var N=P=>{var z=Jh();g(P,z)};O(b,P=>{R.syncing&&P(N)})}var A=v(b,2);{var E=P=>{var z=Xh(),pe=d(z);B(xe=>M(pe,`Maj: ${xe??""}`),[()=>new Date(R.lastSync).toLocaleTimeString()]),g(P,z)};O(A,P=>{R.lastSync&&P(E)})}var $=v(A,2);{var T=P=>{var z=Fh();let pe;z.__click=o;var xe=d(z);Sd(xe,{class:"h-4 w-4"}),B(fe=>{pe=Ie(z,1,"btn btn-outline btn-sm",null,pe,fe),z.disabled=i(a)||R.loading},[()=>({loading:i(a)||R.loading})]),g(P,z)};O($,P=>{i(n)||P(T)})}var C=v($,2);{var S=P=>{var z=ep(),pe=d(z),xe=d(pe);bd(xe,{class:"mr-2 h-4 w-4"}),B(()=>Un(pe,"href",u)),g(P,z)};O(C,P=>{i(n)&&P(S)})}var q=v(h,2),I=d(q);{var Q=P=>{Yh(P,{get message(){return i(l)}})},le=P=>{var z=V(),pe=j(z);{var xe=fe=>{Kh(fe,{get message(){return i(l)}})};O(pe,fe=>{i(l)&&fe(xe)},!0)}g(P,z)};O(I,P=>{i(n)?P(Q):P(le,!1)})}var Ce=v(I,2);{var be=P=>{Gh(P)};O(Ce,P=>{i(c)&&P(be)})}var Se=v(Ce,2);{var Pe=P=>{Wh(P,{})},J=P=>{var z=V(),pe=j(z);{var xe=fe=>{var Fe=tp();g(fe,Fe)};O(pe,fe=>{!R.loading&&!i(n)&&fe(xe)},!0)}g(P,z)};O(Se,P=>{R.enrichedProducts.length>0?P(Pe):P(J,!1)})}g(e,f),U()}Rt(["click"]);Oc(np,{target:document.getElementById("app_products")});
