(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Pa=!1;var Rn=Array.isArray,Hi=Array.prototype.indexOf,xs=Array.from,vs=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Ki=Object.getOwnPropertyDescriptors,Ji=Object.prototype,Yi=Array.prototype,Ea=Object.getPrototypeOf,Ks=Object.isExtensible;function Zr(e){return typeof e=="function"}const ie=()=>{};function Zi(e){for(var t=0;t<e.length;t++)e[t]()}function ka(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ta(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ye=2,Ss=4,Ps=8,Sr=16,zt=32,Pr=64,Es=128,ct=256,Cn=512,Oe=1024,et=2048,sr=4096,gt=8192,Er=16384,ks=32768,kr=65536,Js=1<<17,Xi=1<<18,Gr=1<<19,Fi=1<<20,hs=1<<21,qn=1<<22,mr=1<<23,gr=Symbol("$state"),Na=Symbol("legacy props"),eo=Symbol(""),rn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function $a(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function to(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ro(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function no(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function so(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ao(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function oo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function co(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function uo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const On=1,Ln=2,Aa=4,fo=8,vo=16,ho=1,po=2,_o=4,mo=8,go=16,bo=1,yo=2,Ie=Symbol(),wo="http://www.w3.org/1999/xhtml",xo="http://www.w3.org/2000/svg",So="@attach";function Po(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Eo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ko=!1;function Ca(e){return e===this.v}function To(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ma(e){return!To(e,this.v)}let Ur=!1,No=!1;function $o(){Ur=!0}let Ne=null;function Lr(e){Ne=e}function Z(e,t=!1,r){Ne={p:Ne,c:null,e:null,s:e,x:null,l:Ur&&!t?{s:null,u:null,$:[]}:null}}function X(e){var t=Ne,r=t.e;if(r!==null){t.e=null;for(var n of r)Ha(n)}return Ne=t.p,{}}function dn(){return!Ur||Ne!==null&&Ne.l===null}let _r=[];function Ia(){var e=_r;_r=[],Zi(e)}function yr(e){if(_r.length===0&&!nn){var t=_r;queueMicrotask(()=>{t===_r&&Ia()})}_r.push(e)}function Ao(){for(;_r.length>0;)Ia()}const Co=new WeakMap;function Da(e){var t=J;if(t===null)return Y.f|=mr,e;if((t.f&ks)===0){if((t.f&Es)===0)throw!t.parent&&e instanceof Error&&ja(e),e;t.b.error(e)}else Br(e,t)}function Br(e,t){for(;t!==null;){if((t.f&Es)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ja(e),e}function ja(e){const t=Co.get(e);t&&(vs(e,"message",{value:t.message}),vs(e,"stack",{value:t.stack}))}const Pn=new Set;let fe=null,$n=null,ps=new Set,Nt=[],Bn=null,_s=!1,nn=!1;class lt{current=new Map;#t=new Map;#r=new Set;#s=0;#n=null;#c=[];#a=[];#o=[];#i=[];#l=[];#u=[];skipped_effects=new Set;process(t){Nt=[],$n=null;var r=lt.apply(this);for(const i of t)this.#v(i);if(this.#s===0){this.#h();var n=this.#a,a=this.#o;this.#a=[],this.#o=[],this.#i=[],$n=this,fe=null,Ys(n),Ys(a),$n=null,this.#n?.resolve()}else this.#f(this.#a),this.#f(this.#o),this.#f(this.#i);r();for(const i of this.#c)ln(i);this.#c=[]}#v(t){t.f^=Oe;for(var r=t.first;r!==null;){var n=r.f,a=(n&(zt|Pr))!==0,i=a&&(n&Oe)!==0,o=i||(n&gt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=Oe:(n&Ss)!==0?this.#o.push(r):(n&Oe)===0&&((n&qn)!==0&&r.b?.is_pending()?this.#c.push(r):Un(r)&&((r.f&Sr)!==0&&this.#i.push(r),ln(r)));var c=r.first;if(c!==null){r=c;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#f(t){for(const r of t)((r.f&et)!==0?this.#l:this.#u).push(r),Ue(r,Oe);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){fe=this}deactivate(){fe=null}flush(){if(Nt.length>0){if(this.activate(),Ra(),fe!==null&&fe!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const t of ps)if(ps.delete(t),t(),fe!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),Pn.size>1){this.#t.clear();let t=!0;for(const r of Pn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;qa(n)}if(Nt.length>0){fe=r;const n=lt.apply(r);for(const a of Nt)r.#v(a);Nt=[],n()}}fe=null}Pn.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const t of this.#l)Ue(t,et),wr(t);for(const t of this.#u)Ue(t,sr),wr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#n??=ka()).promise}static ensure(){if(fe===null){const t=fe=new lt;Pn.add(fe),nn||lt.enqueue(()=>{fe===t&&t.flush()})}return fe}static enqueue(t){yr(t)}static apply(t){return ie}}function Mo(e){var t=nn;nn=!0;try{for(var r;;){if(Ao(),Nt.length===0&&(fe?.flush(),Nt.length===0))return Bn=null,r;Ra()}}finally{nn=t}}function Ra(){var e=Or;_s=!0;try{var t=0;for(ea(!0);Nt.length>0;){var r=lt.ensure();if(t++>1e3){var n,a;Io()}r.process(Nt),rr.clear()}}finally{_s=!1,ea(e),Bn=null}}function Io(){try{ao()}catch(e){Br(e,Bn)}}let pr=null;function Ys(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Er|gt))===0&&Un(n)&&(pr=[],ln(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ya(n):n.fn=null),pr?.length>0)){rr.clear();for(const a of pr)ln(a);pr=[]}}pr=null}}function qa(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&Ye)!==0?qa(t):(r&(qn|Sr))!==0&&(Ue(t,et),wr(t))}}function wr(e){for(var t=Bn=e;t.parent!==null;){t=t.parent;var r=t.f;if(_s&&t===J&&(r&Sr)!==0)return;if((r&(Pr|zt))!==0){if((r&Oe)===0)return;t.f^=Oe}}Nt.push(t)}function Ts(e){let t=0,r=xr(0),n;return()=>{Jo()&&(s(r),Is(()=>(t===0&&(n=Qr(()=>e(()=>sn(r)))),t+=1,()=>{yr(()=>{t-=1,t===0&&(n?.(),n=void 0,sn(r))})})))}}var Do=kr|Gr|Es;function jo(e,t,r){new Ro(e,t,r)}class Ro{parent;#t=!1;#r;#s=null;#n;#c;#a;#o=null;#i=null;#l=null;#u=null;#v=0;#f=0;#h=!1;#e=null;#b=()=>{this.#e&&Wr(this.#e,this.#v)};#y=Ts(()=>(this.#e=xr(this.#v),()=>{this.#e=null}));constructor(t,r,n){this.#r=t,this.#n=r,this.#c=n,this.parent=J.b,this.#t=!!this.#n.pending,this.#a=ir(()=>{J.b=this;{try{this.#o=qe(()=>n(this.#r))}catch(a){this.error(a)}this.#f>0?this.#_():this.#t=!1}},Do)}#w(){try{this.#o=qe(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#n.pending;t&&(this.#i=qe(()=>t(this.#r)),lt.enqueue(()=>{this.#o=this.#p(()=>(lt.ensure(),qe(()=>this.#c(this.#r)))),this.#f>0?this.#_():(nr(this.#i,()=>{this.#i=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(t){var r=J,n=Y,a=Ne;$t(this.#a),Je(this.#a),Lr(this.#a.ctx);try{return t()}catch(i){return Da(i),null}finally{$t(r),Je(n),Lr(a)}}#_(){const t=this.#n.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),qo(this.#o,this.#u)),this.#i===null&&(this.#i=qe(()=>t(this.#r)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#i&&nr(this.#i,()=>{this.#i=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),yr(()=>{lt.ensure().flush()}))}update_pending_count(t){this.#g(t),this.#v+=t,ps.add(this.#b)}get_effect_pending(){return this.#y(),s(this.#e)}error(t){var r=this.#n.onerror;let n=this.#n.failed;if(this.#h||!r&&!n)throw t;this.#o&&(je(this.#o),this.#o=null),this.#i&&(je(this.#i),this.#i=null),this.#l&&(je(this.#l),this.#l=null);var a=!1,i=!1;const o=()=>{if(a){Eo();return}a=!0,i&&uo(),lt.ensure(),this.#v=0,this.#l!==null&&nr(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#h=!1,qe(()=>this.#c(this.#r)))),this.#f>0?this.#_():this.#t=!1};var c=Y;try{Je(null),i=!0,r?.(t,o),i=!1}catch(u){Br(u,this.#a&&this.#a.parent)}finally{Je(c)}n&&yr(()=>{this.#l=this.#p(()=>{this.#h=!0;try{return qe(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return Br(u,this.#a.parent),null}finally{this.#h=!1}})})}}function qo(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:fn(r);t.append(r),r=a}}function Oa(e,t,r){const n=dn()?Wn:Ns;if(t.length===0){r(e.map(n));return}var a=fe,i=J,o=Oo();Promise.all(t.map(c=>Lo(c))).then(c=>{o();try{r([...e.map(n),...c])}catch(u){(i.f&Er)===0&&Br(u,i)}a?.deactivate(),La()}).catch(c=>{Br(c,i)})}function Oo(){var e=J,t=Y,r=Ne,n=fe;return function(){$t(e),Je(t),Lr(r),n?.activate()}}function La(){$t(null),Je(null),Lr(null)}function Wn(e){var t=Ye|et,r=Y!==null&&(Y.f&Ye)!==0?Y:null;return J===null||r!==null&&(r.f&ct)!==0?t|=ct:J.f|=Gr,{ctx:Ne,deps:null,effects:null,equals:Ca,f:t,fn:e,reactions:null,rv:0,v:Ie,wv:0,parent:r??J,ac:null}}function Lo(e,t){let r=J;r===null&&to();var n=r.b,a=void 0,i=xr(Ie),o=!Y,c=new Map;return Zo(()=>{var u=ka();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var f=fe,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),c.get(f)?.reject(rn),c.set(f,u)));const _=(m,h=void 0)=>{v||f.activate(),h?h!==rn&&(i.f|=mr,Wr(i,h)):((i.f&mr)!==0&&(i.f^=mr),Wr(i,m)),o&&(n.update_pending_count(-1),v||f.decrement()),La()};u.promise.then(_,m=>_(null,m||"unknown"))}),Qa(()=>{for(const u of c.values())u.reject(rn)}),new Promise(u=>{function f(v){function _(){v===a?u(i):f(a)}v.then(_,_)}f(a)})}function F(e){const t=Wn(e);return Fa(t),t}function Ns(e){const t=Wn(e);return t.equals=Ma,t}function Ba(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)je(t[r])}}function Bo(e){for(var t=e.parent;t!==null;){if((t.f&Ye)===0)return t;t=t.parent}return null}function $s(e){var t,r=J;$t(Bo(e));try{Ba(e),t=ni(e)}finally{$t(r)}return t}function Wa(e){var t=$s(e);if(e.equals(t)||(e.v=t,e.wv=ti()),!Tr){var r=(er||(e.f&ct)!==0)&&e.deps!==null?sr:Oe;Ue(e,r)}}const rr=new Map;function xr(e,t){var r={f:0,v:e,reactions:null,equals:Ca,rv:0,wv:0};return r}function re(e,t){const r=xr(e);return Fa(r),r}function Wo(e,t=!1,r=!0){const n=xr(e);return t||(n.equals=Ma),Ur&&r&&Ne!==null&&Ne.l!==null&&(Ne.l.s??=[]).push(n),n}function w(e,t,r=!1){Y!==null&&(!mt||(Y.f&Js)!==0)&&dn()&&(Y.f&(Ye|Sr|qn|Js))!==0&&!Wt?.includes(e)&&co();let n=r?Fe(t):t;return Wr(e,n)}function Wr(e,t){if(!e.equals(t)){var r=e.v;Tr?rr.set(e,t):rr.set(e,r),e.v=t;var n=lt.ensure();n.capture(e,r),(e.f&Ye)!==0&&((e.f&et)!==0&&$s(e),Ue(e,(e.f&ct)===0?Oe:sr)),e.wv=ti(),za(e,et),dn()&&J!==null&&(J.f&Oe)!==0&&(J.f&(zt|Pr))===0&&(it===null?el([e]):it.push(e))}return t}function sn(e){w(e,e.v+1)}function za(e,t){var r=e.reactions;if(r!==null)for(var n=dn(),a=r.length,i=0;i<a;i++){var o=r[i],c=o.f;if(!(!n&&o===J)){var u=(c&et)===0;u&&Ue(o,t),(c&Ye)!==0?za(o,sr):u&&((c&Sr)!==0&&pr!==null&&pr.push(o),wr(o))}}}function Fe(e){if(typeof e!="object"||e===null||gr in e)return e;const t=Ea(e);if(t!==Ji&&t!==Yi)return e;var r=new Map,n=Rn(e),a=re(0),i=br,o=c=>{if(br===i)return c();var u=Y,f=br;Je(null),ra(i);var v=c();return Je(u),ra(f),v};return n&&r.set("length",re(e.length)),new Proxy(e,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&oo();var v=r.get(u);return v===void 0?v=o(()=>{var _=re(f.value);return r.set(u,_),_}):w(v,f.value,!0),!0},deleteProperty(c,u){var f=r.get(u);if(f===void 0){if(u in c){const v=o(()=>re(Ie));r.set(u,v),sn(a)}}else w(f,Ie),sn(a);return!0},get(c,u,f){if(u===gr)return e;var v=r.get(u),_=u in c;if(v===void 0&&(!_||tr(c,u)?.writable)&&(v=o(()=>{var h=Fe(_?c[u]:Ie),g=re(h);return g}),r.set(u,v)),v!==void 0){var m=s(v);return m===Ie?void 0:m}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=s(v))}else if(f===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==Ie)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(c,u){if(u===gr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==Ie||Reflect.has(c,u);if(f!==void 0||J!==null&&(!v||tr(c,u)?.writable)){f===void 0&&(f=o(()=>{var m=v?Fe(c[u]):Ie,h=re(m);return h}),r.set(u,f));var _=s(f);if(_===Ie)return!1}return v},set(c,u,f,v){var _=r.get(u),m=u in c;if(n&&u==="length")for(var h=f;h<_.v;h+=1){var g=r.get(h+"");g!==void 0?w(g,Ie):h in c&&(g=o(()=>re(Ie)),r.set(h+"",g))}if(_===void 0)(!m||tr(c,u)?.writable)&&(_=o(()=>re(void 0)),w(_,Fe(f)),r.set(u,_));else{m=_.v!==Ie;var P=o(()=>Fe(f));w(_,P)}var x=Reflect.getOwnPropertyDescriptor(c,u);if(x?.set&&x.set.call(v,f),!m){if(n&&typeof u=="string"){var k=r.get("length"),D=Number(u);Number.isInteger(D)&&D>=k.v&&w(k,D+1)}sn(a)}return!0},ownKeys(c){s(a);var u=Reflect.ownKeys(c).filter(_=>{var m=r.get(_);return m===void 0||m.v!==Ie});for(var[f,v]of r)v.v!==Ie&&!(f in c)&&u.push(f);return u},setPrototypeOf(){lo()}})}function Zs(e){try{if(e!==null&&typeof e=="object"&&gr in e)return e[gr]}catch{}return e}function zo(e,t){return Object.is(Zs(e),Zs(t))}var Xs,Va,Ga,Ua;function Vo(){if(Xs===void 0){Xs=window,Va=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ga=tr(t,"firstChild").get,Ua=tr(t,"nextSibling").get,Ks(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ks(r)&&(r.__t=void 0)}}function ar(e=""){return document.createTextNode(e)}function zr(e){return Ga.call(e)}function fn(e){return Ua.call(e)}function l(e,t){return zr(e)}function Q(e,t=!1){{var r=zr(e);return r instanceof Comment&&r.data===""?fn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=fn(n);return n}function Go(e){e.textContent=""}function As(){return!1}function Uo(e,t){if(t){const r=document.body;e.autofocus=!0,yr(()=>{document.activeElement===r&&e.focus()})}}let Fs=!1;function Qo(){Fs||(Fs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function zn(e){var t=Y,r=J;Je(null),$t(null);try{return e()}finally{Je(t),$t(r)}}function Cs(e,t,r,n=r){e.addEventListener(t,()=>zn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Qo()}function Ho(e){J===null&&Y===null&&so(),Y!==null&&(Y.f&ct)!==0&&J===null&&no(),Tr&&ro()}function Ko(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Vt(e,t,r,n=!0){var a=J;a!==null&&(a.f&gt)!==0&&(e|=gt);var i={ctx:Ne,deps:null,nodes_start:null,nodes_end:null,f:e|et,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{ln(i),i.f|=ks}catch(u){throw je(i),u}else t!==null&&wr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Gr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&Ko(o,a),Y!==null&&(Y.f&Ye)!==0&&(e&Pr)===0)){var c=Y;(c.effects??=[]).push(o)}}return i}function Jo(){return Y!==null&&!mt}function Qa(e){const t=Vt(Ps,null,!1);return Ue(t,Oe),t.teardown=e,t}function Vn(e){Ho();var t=J.f,r=!Y&&(t&zt)!==0&&(t&ks)===0;if(r){var n=Ne;(n.e??=[]).push(e)}else return Ha(e)}function Ha(e){return Vt(Ss|Fi,e,!1)}function Yo(e){lt.ensure();const t=Vt(Pr|Gr,e,!0);return(r={})=>new Promise(n=>{r.outro?nr(t,()=>{je(t),n(void 0)}):(je(t),n(void 0))})}function Ms(e){return Vt(Ss,e,!1)}function Zo(e){return Vt(qn|Gr,e,!0)}function Is(e,t=0){return Vt(Ps|t,e,!0)}function W(e,t=[],r=[]){Oa(t,r,n=>{Vt(Ps,()=>e(...n.map(s)),!0)})}function ir(e,t=0){var r=Vt(Sr|t,e,!0);return r}function qe(e,t=!0){return Vt(zt|Gr,e,!0,t)}function Ka(e){var t=e.teardown;if(t!==null){const r=Tr,n=Y;ta(!0),Je(null);try{t.call(null)}finally{ta(r),Je(n)}}}function Ja(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&zn(()=>{a.abort(rn)});var n=r.next;(r.f&Pr)!==0?r.parent=null:je(r,t),r=n}}function Xo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&zt)===0&&je(t),t=r}}function je(e,t=!0){var r=!1;(t||(e.f&Xi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Fo(e.nodes_start,e.nodes_end),r=!0),Ja(e,t&&!r),Mn(e,0),Ue(e,Er);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Ka(e);var a=e.parent;a!==null&&a.first!==null&&Ya(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Fo(e,t){for(;e!==null;){var r=e===t?null:fn(e);e.remove(),e=r}}function Ya(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function nr(e,t){var r=[];Ds(e,r,!0),Za(r,()=>{je(e),t&&t()})}function Za(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Ds(e,t,r){if((e.f&gt)===0){if(e.f^=gt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&kr)!==0||(n.f&zt)!==0;Ds(n,t,i?r:!1),n=a}}}function Gn(e){Xa(e,!0)}function Xa(e,t){if((e.f&gt)!==0){e.f^=gt,(e.f&Oe)===0&&(Ue(e,et),wr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&kr)!==0||(r.f&zt)!==0;Xa(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Or=!1;function ea(e){Or=e}let Tr=!1;function ta(e){Tr=e}let Y=null,mt=!1;function Je(e){Y=e}let J=null;function $t(e){J=e}let Wt=null;function Fa(e){Y!==null&&(Wt===null?Wt=[e]:Wt.push(e))}let Ge=null,Xe=0,it=null;function el(e){it=e}let ei=1,on=0,br=on;function ra(e){br=e}let er=!1;function ti(){return++ei}function Un(e){var t=e.f;if((t&et)!==0)return!0;if((t&sr)!==0){var r=e.deps,n=(t&ct)!==0;if(r!==null){var a,i,o=(t&Cn)!==0,c=n&&J!==null&&!er,u=r.length;if((o||c)&&(J===null||(J.f&Er)===0)){var f=e,v=f.parent;for(a=0;a<u;a++)i=r[a],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=Cn),c&&v!==null&&(v.f&ct)===0&&(f.f^=ct)}for(a=0;a<u;a++)if(i=r[a],Un(i)&&Wa(i),i.wv>e.wv)return!0}(!n||J!==null&&!er)&&Ue(e,Oe)}return!1}function ri(e,t,r=!0){var n=e.reactions;if(n!==null&&!Wt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&Ye)!==0?ri(i,t,!1):t===i&&(r?Ue(i,et):(i.f&Oe)!==0&&Ue(i,sr),wr(i))}}function ni(e){var t=Ge,r=Xe,n=it,a=Y,i=er,o=Wt,c=Ne,u=mt,f=br,v=e.f;Ge=null,Xe=0,it=null,er=(v&ct)!==0&&(mt||!Or||Y===null),Y=(v&(zt|Pr))===0?e:null,Wt=null,Lr(e.ctx),mt=!1,br=++on,e.ac!==null&&(zn(()=>{e.ac.abort(rn)}),e.ac=null);try{e.f|=hs;var _=e.fn,m=_(),h=e.deps;if(Ge!==null){var g;if(Mn(e,Xe),h!==null&&Xe>0)for(h.length=Xe+Ge.length,g=0;g<Ge.length;g++)h[Xe+g]=Ge[g];else e.deps=h=Ge;if(!er||(v&Ye)!==0&&e.reactions!==null)for(g=Xe;g<h.length;g++)(h[g].reactions??=[]).push(e)}else h!==null&&Xe<h.length&&(Mn(e,Xe),h.length=Xe);if(dn()&&it!==null&&!mt&&h!==null&&(e.f&(Ye|sr|et))===0)for(g=0;g<it.length;g++)ri(it[g],e);return a!==null&&a!==e&&(on++,it!==null&&(n===null?n=it:n.push(...it))),(e.f&mr)!==0&&(e.f^=mr),m}catch(P){return Da(P)}finally{e.f^=hs,Ge=t,Xe=r,it=n,Y=a,er=i,Wt=o,Lr(c),mt=u,br=f}}function tl(e,t){let r=t.reactions;if(r!==null){var n=Hi.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&Ye)!==0&&(Ge===null||!Ge.includes(t))&&(Ue(t,sr),(t.f&(ct|Cn))===0&&(t.f^=Cn),Ba(t),Mn(t,0))}function Mn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)tl(e,r[n])}function ln(e){var t=e.f;if((t&Er)===0){Ue(e,Oe);var r=J,n=Or;J=e,Or=!0;try{(t&Sr)!==0?Xo(e):Ja(e),Ka(e);var a=ni(e);e.teardown=typeof a=="function"?a:null,e.wv=ei;var i;Pa&&No&&(e.f&et)!==0&&e.deps}finally{Or=n,J=r}}}async function rl(){await Promise.resolve(),Mo()}function s(e){var t=e.f,r=(t&Ye)!==0;if(Y!==null&&!mt){var n=J!==null&&(J.f&Er)!==0;if(!n&&!Wt?.includes(e)){var a=Y.deps;if((Y.f&hs)!==0)e.rv<on&&(e.rv=on,Ge===null&&a!==null&&a[Xe]===e?Xe++:Ge===null?Ge=[e]:(!er||!Ge.includes(e))&&Ge.push(e));else{(Y.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[Y]:i.includes(Y)||i.push(Y)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,c=o.parent;c!==null&&(c.f&ct)===0&&(o.f^=ct)}if(Tr){if(rr.has(e))return rr.get(e);if(r){o=e;var u=o.v;return((o.f&Oe)===0&&o.reactions!==null||si(o))&&(u=$s(o)),rr.set(o,u),u}}else r&&(o=e,Un(o)&&Wa(o));if((e.f&mr)!==0)throw e.v;return e.v}function si(e){if(e.v===Ie)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(rr.has(t)||(t.f&Ye)!==0&&si(t))return!0;return!1}function Qr(e){var t=mt;try{return mt=!0,e()}finally{mt=t}}const nl=-7169;function Ue(e,t){e.f=e.f&nl|t}function sl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const al=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function il(e){return al.includes(e)}const ol={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ll(e){return e=e.toLowerCase(),ol[e]??e}const cl=["touchstart","touchmove"];function ul(e){return cl.includes(e)}const ai=new Set,ms=new Set;function ii(e,t,r,n={}){function a(i){if(n.capture||en.call(t,i),!i.cancelBubble)return zn(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?yr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function gs(e,t,r,n={}){var a=ii(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Nr(e){for(var t=0;t<e.length;t++)ai.add(e[t]);for(var r of ms)r(e)}let na=null;function en(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;na=e;var o=0,c=na===e&&e.__root;if(c){var u=a.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(i=a[o]||e.target,i!==t){vs(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=Y,_=J;Je(null),$t(null);try{for(var m,h=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var P=i["__"+n];if(P!=null&&(!i.disabled||e.target===i))if(Rn(P)){var[x,...k]=P;x.apply(i,[e,...k])}else P.call(i,e)}catch(D){m?h.push(D):m=D}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let D of h)queueMicrotask(()=>{throw D});throw m}}finally{e.__root=t,delete e.currentTarget,Je(v),$t(_)}}}function oi(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Vr(e,t){var r=J;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function S(e,t){var r=(t&bo)!==0,n=(t&yo)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=oi(i?e:"<!>"+e),r||(a=zr(a)));var o=n||Va?document.importNode(a,!0):a.cloneNode(!0);if(r){var c=zr(o),u=o.lastChild;Vr(c,u)}else Vr(o,o);return o}}function dl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=oi(a),c=zr(o);i=zr(c)}var u=i.cloneNode(!0);return Vr(u,u),u}}function fl(e,t){return dl(e,t,"svg")}function ze(e=""){{var t=ar(e+"");return Vr(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=ar();return e.append(t,r),Vr(t,r),e}function p(e,t){e!==null&&e.before(t)}function N(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function vl(e,t){return hl(e,t)}const Rr=new Map;function hl(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){Vo();var c=new Set,u=_=>{for(var m=0;m<_.length;m++){var h=_[m];if(!c.has(h)){c.add(h);var g=ul(h);t.addEventListener(h,en,{passive:g});var P=Rr.get(h);P===void 0?(document.addEventListener(h,en,{passive:g}),Rr.set(h,1)):Rr.set(h,P+1)}}};u(xs(ai)),ms.add(u);var f=void 0,v=Yo(()=>{var _=r??t.appendChild(ar());return jo(_,{pending:()=>{}},m=>{if(i){Z({});var h=Ne;h.c=i}a&&(n.$$events=a),f=e(m,n)||{},i&&X()}),()=>{for(var m of c){t.removeEventListener(m,en);var h=Rr.get(m);--h===0?(document.removeEventListener(m,en),Rr.delete(m)):Rr.set(m,h)}ms.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return pl.set(f,v),f}let pl=new WeakMap;function I(e,t,r=!1){var n=e,a=null,i=null,o=Ie,c=r?kr:0,u=!1;const f=(h,g=!0)=>{u=!0,m(g,h)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var h=o?a:i,g=o?i:a;h&&Gn(h),g&&nr(g,()=>{o?i=null:a=null})}const m=(h,g)=>{if(o!==(o=h)){var P=As(),x=n;if(P&&(v=document.createDocumentFragment(),v.append(x=ar())),o?a??=g&&qe(()=>g(x)):i??=g&&qe(()=>g(x)),P){var k=fe,D=o?a:i,$=o?i:a;D&&k.skipped_effects.delete(D),$&&k.skipped_effects.add($),k.add_callback(_)}else _()}};ir(()=>{u=!1,t(f),u||m(null,null)},c)}function _l(e,t){return t}function ml(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)Ds(t[o].e,a,!0);var c=i>0&&a.length===0&&r!==null;if(c){var u=r.parentNode;Go(u),u.append(r),n.clear(),Tt(e,t[0].prev,t[i-1].next)}Za(a,()=>{for(var f=0;f<i;f++){var v=t[f];c||(n.delete(v.k),Tt(e,v.prev,v.next)),je(v.e,!c)}})}function Ve(e,t,r,n,a,i=null){var o=e,c={flags:t,items:new Map,first:null},u=(t&Aa)!==0;if(u){var f=e;o=f.appendChild(ar())}var v=null,_=!1,m=new Map,h=Ns(()=>{var k=r();return Rn(k)?k:k==null?[]:xs(k)}),g,P;function x(){gl(P,g,c,m,o,a,t,n,r),i!==null&&(g.length===0?v?Gn(v):v=qe(()=>i(o)):v!==null&&nr(v,()=>{v=null}))}ir(()=>{P??=J,g=s(h);var k=g.length;if(!(_&&k===0)){_=k===0;var D,$,C,A;if(As()){var M=new Set,O=fe;for($=0;$<k;$+=1){C=g[$],A=n(C,$);var G=c.items.get(A)??m.get(A);G?(t&(On|Ln))!==0&&li(G,C,$,t):(D=ci(null,c,null,null,C,A,$,a,t,r,!0),m.set(A,D)),M.add(A)}for(const[V,ne]of c.items)M.has(V)||O.skipped_effects.add(ne.e);O.add_callback(x)}else x();s(h)}})}function gl(e,t,r,n,a,i,o,c,u){var f=(o&fo)!==0,v=(o&(On|Ln))!==0,_=t.length,m=r.items,h=r.first,g=h,P,x=null,k,D=[],$=[],C,A,M,O;if(f)for(O=0;O<_;O+=1)C=t[O],A=c(C,O),M=m.get(A),M!==void 0&&(M.a?.measure(),(k??=new Set).add(M));for(O=0;O<_;O+=1){if(C=t[O],A=c(C,O),M=m.get(A),M===void 0){var G=n.get(A);if(G!==void 0){n.delete(A),m.set(A,G);var V=x?x.next:g;Tt(r,x,G),Tt(r,G,V),os(G,V,a),x=G}else{var ne=g?g.e.nodes_start:a;x=ci(ne,r,x,x===null?r.first:x.next,C,A,O,i,o,u)}m.set(A,x),D=[],$=[],g=x.next;continue}if(v&&li(M,C,O,o),(M.e.f&gt)!==0&&(Gn(M.e),f&&(M.a?.unfix(),(k??=new Set).delete(M))),M!==g){if(P!==void 0&&P.has(M)){if(D.length<$.length){var ve=$[0],j;x=ve.prev;var R=D[0],se=D[D.length-1];for(j=0;j<D.length;j+=1)os(D[j],ve,a);for(j=0;j<$.length;j+=1)P.delete($[j]);Tt(r,R.prev,se.next),Tt(r,x,R),Tt(r,se,ve),g=ve,x=se,O-=1,D=[],$=[]}else P.delete(M),os(M,g,a),Tt(r,M.prev,M.next),Tt(r,M,x===null?r.first:x.next),Tt(r,x,M),x=M;continue}for(D=[],$=[];g!==null&&g.k!==A;)(g.e.f&gt)===0&&(P??=new Set).add(g),$.push(g),g=g.next;if(g===null)continue;M=g}D.push(M),x=M,g=M.next}if(g!==null||P!==void 0){for(var te=P===void 0?[]:xs(P);g!==null;)(g.e.f&gt)===0&&te.push(g),g=g.next;var he=te.length;if(he>0){var Le=(o&Aa)!==0&&_===0?a:null;if(f){for(O=0;O<he;O+=1)te[O].a?.measure();for(O=0;O<he;O+=1)te[O].a?.fix()}ml(r,te,Le)}}f&&yr(()=>{if(k!==void 0)for(M of k)M.a?.apply()}),e.first=r.first&&r.first.e,e.last=x&&x.e;for(var be of n.values())je(be.e);n.clear()}function li(e,t,r,n){(n&On)!==0&&Wr(e.v,t),(n&Ln)!==0?Wr(e.i,r):e.i=r}function ci(e,t,r,n,a,i,o,c,u,f,v){var _=(u&On)!==0,m=(u&vo)===0,h=_?m?Wo(a,!1,!1):xr(a):a,g=(u&Ln)===0?o:xr(o),P={i:g,v:h,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var x=document.createDocumentFragment();x.append(e=ar())}return P.e=qe(()=>c(e,h,g,f),ko),P.e.prev=r&&r.e,P.e.next=n&&n.e,r===null?v||(t.first=P):(r.next=P,r.e.next=P.e),n!==null&&(n.prev=P,n.e.prev=P.e),P}finally{}}function os(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=fn(i);a.before(i),i=o}}function Tt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function le(e,t,...r){var n=e,a=ie,i;ir(()=>{a!==(a=t())&&(i&&(je(i),i=null),i=qe(()=>a(n,...r)))},kr)}function En(e,t,r){var n=e,a,i,o=null,c=null;function u(){i&&(nr(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=c,c=null}ir(()=>{if(a!==(a=t())){var f=As();if(a){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=ar()),i&&fe.skipped_effects.add(i)),c=qe(()=>r(v,a))}f?fe.add_callback(u):u()}},kr)}function bl(e,t,r,n,a,i){var o,c,u=null,f=e,v;ir(()=>{const _=t()||null;var m=xo;_!==o&&(v&&(_===null?nr(v,()=>{v=null,c=null}):_===c?Gn(v):je(v)),_&&_!==c&&(v=qe(()=>{if(u=document.createElementNS(m,_),Vr(u,u),n){var h=u.appendChild(ar());n(u,h)}J.nodes_end=u,f.before(u)})),o=_,o&&(c=o))},kr)}function yl(e,t){var r=void 0,n;ir(()=>{r!==(r=t())&&(n&&(je(n),n=null),r&&(n=qe(()=>{Ms(()=>r(e))})))})}function ui(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=ui(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function wl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=ui(e))&&(n&&(n+=" "),n+=t);return n}function xl(e){return typeof e=="object"?wl(e):e??""}const sa=[...` 	
\r\f \v\uFEFF`];function Sl(e,t,r){var n=e==null?"":""+e;if(r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var c=o+i;(o===0||sa.includes(n[o-1]))&&(c===n.length||sa.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function aa(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function ls(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Pl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,u=[];n&&u.push(...Object.keys(n).map(ls)),a&&u.push(...Object.keys(a).map(ls));var f=0,v=-1;const P=e.length;for(var _=0;_<P;_++){var m=e[_];if(c?m==="/"&&e[_-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&e[_+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&v===-1)v=_;else if(m===";"||_===P-1){if(v!==-1){var h=ls(e.substring(f,v).trim());if(!u.includes(h)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=aa(n)),a&&(r+=aa(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var c=Sl(r,n,i);c==null?e.removeAttribute("class"):t?e.className=c:e.setAttribute("class",c),e.__className=r}else if(i&&a!==i)for(var u in i){var f=!!i[u];(a==null||f!==!!a[u])&&e.classList.toggle(u,f)}return i}function cs(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function El(e,t,r,n){var a=e.__style;if(a!==t){var i=Pl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(cs(e,r?.[0],n[0]),cs(e,r?.[1],n[1],"important")):cs(e,r,n));return n}function In(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Rn(t))return Po();for(var n of e.options)n.selected=t.includes(an(n));return}for(n of e.options){var a=an(n);if(zo(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function di(e){var t=new MutationObserver(()=>{In(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Qa(()=>{t.disconnect()})}function bs(e,t,r=t){var n=!0;Cs(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),an);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");o=c&&an(c)}r(o)}),Ms(()=>{var a=t();if(In(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=an(i),r(a))}e.__value=a,n=!1}),di(e)}function an(e){return"__value"in e?e.__value:e.value}const Xr=Symbol("class"),Fr=Symbol("style"),fi=Symbol("is custom element"),vi=Symbol("is html");function kl(e,t){var r=Qn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function qr(e,t){var r=Qn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Tl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ys(e,t,r,n){var a=Qn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[eo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&hi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Nl(e,t,r,n,a=!1,i=!1){var o=Qn(e),c=o[fi],u=!o[vi],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=xl(r.class):r[Xr]&&(r.class=null),r[Fr]&&(r.style??=null);var m=hi(e);for(const C in r){let A=r[C];if(v&&C==="value"&&A==null){e.value=e.__value="",f[C]=A;continue}if(C==="class"){var h=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,h,A,n,t?.[Xr],r[Xr]),f[C]=A,f[Xr]=r[Xr];continue}if(C==="style"){El(e,A,t?.[Fr],r[Fr]),f[C]=A,f[Fr]=r[Fr];continue}var g=f[C];if(!(A===g&&!(A===void 0&&e.hasAttribute(C)))){f[C]=A;var P=C[0]+C[1];if(P!=="$$")if(P==="on"){const M={},O="$$"+C;let G=C.slice(2);var x=il(G);if(sl(G)&&(G=G.slice(0,-7),M.capture=!0),!x&&g){if(A!=null)continue;e.removeEventListener(G,f[O],M),f[O]=null}if(A!=null)if(x)e[`__${G}`]=A,Nr([G]);else{let V=function(ne){f[C].call(this,ne)};var $=V;f[O]=ii(G,e,V,M)}else x&&(e[`__${G}`]=void 0)}else if(C==="style")ys(e,C,A);else if(C==="autofocus")Uo(e,!!A);else if(!c&&(C==="__value"||C==="value"&&A!=null))e.value=e.__value=A;else if(C==="selected"&&v)Tl(e,A);else{var k=C;u||(k=ll(k));var D=k==="defaultValue"||k==="defaultChecked";if(A==null&&!c&&!D)if(o[C]=null,k==="value"||k==="checked"){let M=e;const O=t===void 0;if(k==="value"){let G=M.defaultValue;M.removeAttribute(k),M.defaultValue=G,M.value=M.__value=O?G:null}else{let G=M.defaultChecked;M.removeAttribute(k),M.defaultChecked=G,M.checked=O?G:!1}}else e.removeAttribute(C);else D||m.includes(k)&&(c||typeof A!="string")?(e[k]=A,k in o&&(o[k]=Ie)):typeof A!="function"&&ys(e,k,A)}}}return f}function ia(e,t,r=[],n=[],a,i=!1,o=!1){Oa(r,n,c=>{var u=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(ir(()=>{var h=t(...c.map(s)),g=Nl(e,u,h,a,i,o);_&&v&&"value"in h&&In(e,h.value);for(let x of Object.getOwnPropertySymbols(f))h[x]||je(f[x]);for(let x of Object.getOwnPropertySymbols(h)){var P=h[x];x.description===So&&(!u||P!==u[x])&&(f[x]&&je(f[x]),f[x]=qe(()=>yl(e,()=>P))),g[x]=P}u=g}),v){var m=e;Ms(()=>{In(m,u.value,!0),di(m)})}_=!0})}function Qn(e){return e.__attributes??={[fi]:e.nodeName.includes("-"),[vi]:e.namespaceURI===wo}}var oa=new Map;function hi(e){var t=e.getAttribute("is")||e.nodeName,r=oa.get(t);if(r)return r;oa.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=Ki(a);for(var o in n)n[o].set&&r.push(o);a=Ea(a)}return r}function Re(e,t,r=t){var n=new WeakSet;Cs(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=us(e)?ds(i):i,r(i),fe!==null&&n.add(fe),await rl(),i!==(i=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),Qr(t)==null&&e.value&&(r(us(e)?ds(e.value):e.value),fe!==null&&n.add(fe)),Is(()=>{var a=t();if(e===document.activeElement){var i=$n??fe;if(n.has(i))return}us(e)&&a===ds(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function $l(e,t,r=t){Cs(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Qr(t)==null&&r(e.checked),Is(()=>{var n=t();e.checked=!!n})}function us(e){var t=e.type;return t==="number"||t==="range"}function ds(e){return e===""?null:+e}let kn=!1;function Al(e){var t=kn;try{return kn=!1,[e(),kn]}finally{kn=t}}const Cl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},Cl)}const Ml={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Zr(a)&&(a=a());const i=tr(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=tr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===gr||t===Na)return!1;for(let r of e.props)if(Zr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Zr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},Ml)}function Bt(e,t,r,n){var a=!Ur||(r&po)!==0,i=(r&mo)!==0,o=(r&go)!==0,c=n,u=!0,f=()=>(u&&(u=!1,c=o?Qr(n):n),c),v;if(i){var _=gr in e||Na in e;v=tr(e,t)?.set??(_&&t in e?$=>e[t]=$:void 0)}var m,h=!1;i?[m,h]=Al(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),v&&(a&&io(),v(m)));var g;if(a?g=()=>{var $=e[t];return $===void 0?f():(u=!0,$)}:g=()=>{var $=e[t];return $!==void 0&&(c=void 0),$===void 0?c:$},a&&(r&_o)===0)return g;if(v){var P=e.$$legacy;return(function($,C){return arguments.length>0?((!a||!C||P||h)&&v(C?g():$),$):g()})}var x=!1,k=((r&ho)!==0?Wn:Ns)(()=>(x=!1,g()));i&&s(k);var D=J;return(function($,C){if(arguments.length>0){const A=C?s(k):a&&i?Fe($):$;return w(k,A),x=!0,c!==void 0&&(c=A),$}return Tr&&x||(D.f&Er)!==0?k.v:s(k)})}function pi(e){Ne===null&&$a(),Ur&&Ne.l!==null?Dl(Ne).m.push(e):Vn(()=>{const t=Qr(e);if(typeof t=="function")return t})}function Il(e){Ne===null&&$a(),pi(()=>()=>Qr(e))}function Dl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const jl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(jl);const _i=typeof window<"u"?window:void 0;function Rl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class ql{#t;#r;constructor(t={}){const{window:r=_i,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Ts(a=>{const i=gs(r,"focusin",a),o=gs(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?Rl(this.#t):null}}new ql;function Ol(e,t){return e}function Ll(e,t){let r=re(null);const n=F(()=>Ol(t));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,c;const u=new Promise((f,v)=>{o=f,c=v});w(r,{timeout:null,runner:null,promise:u,resolve:o,reject:c},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);w(r,null);try{o.resolve(await e.apply(this,i))}catch(c){o.reject(c)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),w(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Bl(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function mi(e,t,r,n,a,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let c=r.get(e);return c||(c=new Proxy(e,{get:(u,f)=>(n?.(),mi(Reflect.get(u,f),t,r,n,a,i)),set:(u,f,v)=>(a?.(),Reflect.set(u,f,v),i(t),!0)}),r.set(e,c)),c}class la{#t;#r;#s;#n;#c;#a;#o=new WeakMap;constructor(t,r,n={}){const{storage:a="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,c="window"in n?n.window:_i;if(this.#t=r,this.#r=t,this.#s=i,c===void 0)return;const u=Bl(a,c);this.#n=u;const f=u.getItem(t);f!==null?this.#t=this.#l(f):this.#u(r),o&&a==="local"&&(this.#c=Ts(v=>{this.#a=v;const _=gs(c,"storage",this.#i);return()=>{_(),this.#a=void 0}}))}get current(){this.#c?.();const t=this.#n?.getItem(this.#r),r=t?this.#l(t):this.#t;return mi(r,r,this.#o,this.#c?.bind(this),this.#a?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#a?.()}#i=t=>{t.key!==this.#r||t.newValue===null||(this.#t=this.#l(t.newValue),this.#a?.())};#l(t){try{return this.#s.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#r}"`,r);return}}#u(t){try{t!=null&&this.#n?.setItem(this.#r,this.#s.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#r}" to ${this.#n}`,r)}}}function Wl(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function ca(e,t){return`${e}_${t}`}function zl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let b=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var gi,bi;class cn{static custom(t){return t}static unique(t=7){const r=zl(cn,gi,"m",bi).call(cn);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}gi=cn,bi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ua;(function(e){e.Totp="totp"})(ua||(ua={}));var da;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(da||(da={}));var fa;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(fa||(fa={}));var va;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(va||(va={}));var ha;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ha||(ha={}));var pa;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(pa||(pa={}));var _a;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(_a||(_a={}));var ma;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ma||(ma={}));var ga;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(ga||(ga={}));async function Hr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Vl(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:a="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:c}=await Hr(),u=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(a==="productName"?"productName":"$updatedAt"),b.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),_=v.documents,m=Jl(f,_);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),m}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const c=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${c}`)}}async function Gl(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide"),[];try{const{databases:a,config:i}=await Hr(),o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} mises à jour synchronisées`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function js(e,t){try{const{databases:r,config:n}=await Hr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Ul(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await js(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function ba(e,t){return js(e,{who:t})}async function ya(e,t){return js(e,{stockReel:t})}async function Ql(e){try{const{databases:t,config:r}=await Hr(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},c=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,cn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",c),c}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Hl(e,t){try{const{databases:r,config:n}=await Hr(),a=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),a}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Kl(e){try{const{databases:t,config:r}=await Hr();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function Jl(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(a=>a.$id===r.$id))}))}function Yl(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),a=new Set(e.map(o=>o.$id)),i=t.filter(o=>!a.has(o.$id));return[...n,...i]}function Zl(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function Xl(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function Fl(e,t={}){let r=null;const n=i=>{const{events:o,payload:c}=i;if(!c)return;const u=o.some(h=>h.includes("products.")),f=o.some(h=>h.includes("purchases.")),v=o.some(h=>h.includes(".create")),_=o.some(h=>h.includes(".update")),m=o.some(h=>h.includes(".delete"));if(u){const h=c;v&&t.onProductCreate?t.onProductCreate(h):_&&t.onProductUpdate?t.onProductUpdate(h):m&&t.onProductDelete&&t.onProductDelete(h.$id)}else if(f){const h=c;v&&t.onPurchaseCreate?t.onPurchaseCreate(h):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(h):m&&t.onPurchaseDelete&&t.onPurchaseDelete(h.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:Vd}=window.Appwrite,wa=1e3,ec=500;class tc{#t=re(null);#r=re(!1);#s=re(null);#n=re(null);#c=re(null);#a(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=F(()=>s(this.#s)?.current.products??[]);get products(){return s(this.#o)}set products(t){w(this.#o,t)}#i=F(()=>s(this.#s)?.current.loading??!1);get loading(){return s(this.#i)}set loading(t){w(this.#i,t)}#l=F(()=>s(this.#s)?.current.error??null);get error(){return s(this.#l)}set error(t){w(this.#l,t)}#u=F(()=>s(this.#s)?.current.syncing??!1);get syncing(){return s(this.#u)}set syncing(t){w(this.#u,t)}#v=F(()=>s(this.#s)?.current.realtimeConnected??!1);get realtimeConnected(){return s(this.#v)}set realtimeConnected(t){w(this.#v,t)}#f=F(()=>s(this.#n)?.current.lastSync??null);get lastSync(){return s(this.#f)}set lastSync(t){w(this.#f,t)}#h=F(()=>s(this.#n)?.current.mainId??null);get mainId(){return s(this.#h)}set mainId(t){w(this.#h,t)}#e=re(Fe({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#e)}#b=F(()=>this.products.map(t=>{const r=this.#N(t.purchases??[]),n=this.#W(t.totalNeededConsolidated?this.#a(t.totalNeededConsolidated):[],r);return{...t,storeInfo:t.store?this.#a(t.store):null,totalNeededArray:t.totalNeededConsolidated?this.#a(t.totalNeededConsolidated):[],recipesArray:t.recipesOccurrences?this.#a(t.recipesOccurrences):[],stockArray:t.stockReel?this.#a(t.stockReel):[],displayQuantity:this.#L(t.totalNeededConsolidated),displayName:t.productName.trim(),totalPurchases:r,displayTotalPurchases:this.#B(t.purchases??[]),missingQuantity:n,displayMissingQuantity:n.length>0?n.map(a=>this.#P(a.quantity.toString(),a.unit)).join(" et "):"✅ Complet"}}));get enrichedProducts(){return s(this.#b)}set enrichedProducts(t){w(this.#b,t)}#y=F(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#y)}set uniqueStores(t){w(this.#y,t)}#w=F(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return s(this.#w)}set uniqueWho(t){w(this.#w,t)}#x=F(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return s(this.#x)}set uniqueProductTypes(t){w(this.#x,t)}#p=F(()=>{const t=this.enrichedProducts.filter(r=>this.#O(r));return s(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return s(this.#p)}set filteredGroupedProducts(t){w(this.#p,t)}#_=F(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return s(this.#_)}set filteredProducts(t){w(this.#_,t)}#g=F(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return s(this.#g)}set groupedFormattedProducts(t){w(this.#g,t)}#E=F(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#E)}set stats(t){w(this.#E,t)}get currentMainId(){return s(this.#t)}get isInitialized(){return s(this.#r)}#m=Ll(()=>{this.#S()},ec);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#r)&&s(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),w(this.#t,t,!0),w(this.#r,!0),this.#$(t),this.products.length>0&&s(this.#n).current.mainId===t?(console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`),await this.#A()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#k(t));const n=this.#q();w(this.#c,Fl(t,n),!0)}#$(t){if(s(this.#s)&&s(this.#n))return;const r=ca("products-state",t),n=ca("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),w(this.#s,new la(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),w(this.#n,new la(n,{lastSync:null,mainId:null}),!0)}async#k(t){if(!s(this.#s))throw new Error("ProductsStore non initialisé");this.#d({loading:!0,error:null});try{const n=await Vl(t,{includePurchases:!0,limit:wa,orderBy:"productName",orderDirection:"asc"});this.#d({products:n}),this.#S(),console.log(`[ProductsStore] ${n.length} produits chargés`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#d({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#A(){if(s(this.#n)?.current.lastSync){this.#d({syncing:!0});try{const t={lastSync:s(this.#n).current.lastSync,limit:wa},r=await Gl(s(this.#t),t);r.length>0&&(this.#d({products:Yl(this.products,r)}),this.#S(),console.log(`[ProductsStore] ${r.length} mises à jour synchronisées`)),this.#d({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#d({syncing:!1})}}}#C(t){if(!s(this.#s))return;this.products.some(n=>n.$id===t.$id)||this.#d({products:[...this.products,t]})}#M(t){s(this.#s)&&this.#d({products:this.products.map(r=>{if(r.$id===t.$id){const n={...r};return Object.keys(t).forEach(a=>{t[a]!==void 0&&(n[a]=t[a])}),n}return r})})}#I(t){s(this.#s)&&this.#d({products:this.products.filter(r=>r.$id!==t)})}#D(t){console.log("[ProductsStore] Purchase créé, mise à jour des produits concernés..."),this.#T(t)}#j(t){console.log("[ProductsStore] Purchase mis à jour, mise à jour des produits concernés..."),this.#T(t)}#R(t){console.log("[ProductsStore] Purchase supprimé, nettoyage des produits concernés..."),this.#d({products:this.products.map(r=>({...r,purchases:(r.purchases||[]).filter(n=>n.$id!==t)}))})}#T(t){!t.products||t.products.length===0||(this.#d({products:this.products.map(r=>{if(t.products.some(n=>n.$id===r.$id)){const a=(r.purchases||[]).filter(i=>i.$id!==t.$id);return a.push(t),{...r,purchases:a}}return r})}),console.log(`[ProductsStore] ${t.products.length} produit(s) mis à jour avec le purchase ${t.$id}`))}#q(){return{onProductCreate:t=>{this.#C(t),this.#m()},onProductUpdate:t=>{this.#M(t),this.#m()},onProductDelete:t=>{this.#I(t),this.#m()},onPurchaseCreate:t=>{this.#D(t),this.#m()},onPurchaseUpdate:t=>{this.#j(t),this.#m()},onPurchaseDelete:t=>{this.#R(t),this.#m()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#d({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#d({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#S(){if(!s(this.#t)||!s(this.#n))return;const t=new Date().toISOString();s(this.#n).current={lastSync:t,mainId:s(this.#t)},this.lastSync=t,this.mainId=s(this.#t)}#d(t){s(this.#s)&&(s(this.#s).current={...s(this.#s).current,...t})}async forceReload(t){await this.#k(t)}destroy(){s(this.#c)?.(),w(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!s(this.#s)||!s(this.#n)){console.warn("[ProductsStore] Store non initialisé");return}this.#d({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),s(this.#n).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${s(this.#t)}`)}setSearchQuery(t){s(this.#e).searchQuery=t}toggleProductType(t){const r=s(this.#e).selectedProductTypes.indexOf(t);r>-1?s(this.#e).selectedProductTypes.splice(r,1):s(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#e).selectedTemperatures.indexOf(t);r>-1?s(this.#e).selectedTemperatures.splice(r,1):s(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#e).selectedProductTypes=[],s(this.#e).selectedTemperatures=[]}setGroupBy(t){s(this.#e).groupBy=t}toggleStore(t){const r=s(this.#e).selectedStores.indexOf(t);r>-1?s(this.#e).selectedStores.splice(r,1):s(this.#e).selectedStores.push(t)}toggleWho(t){const r=s(this.#e).selectedWho.indexOf(t);r>-1?s(this.#e).selectedWho.splice(r,1):s(this.#e).selectedWho.push(t)}clearStoreFilters(){s(this.#e).selectedStores=[]}clearWhoFilters(){s(this.#e).selectedWho=[]}handleSort(t){s(this.#e).sortColumn===t?s(this.#e).sortDirection=s(this.#e).sortDirection==="asc"?"desc":"asc":(s(this.#e).sortColumn=t,s(this.#e).sortDirection="asc")}clearFilters(){w(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#e).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#e).sortColumn],i=n[s(this.#e).sortColumn];return s(this.#e).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#e).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#e).sortDirection==="asc"?-1:1:a>i?s(this.#e).sortDirection==="asc"?1:-1:0}):t}#O(t){if(s(this.#e).searchQuery.trim()){const r=s(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#e).selectedStores.includes(t.storeInfo.storeName))||s(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#e).selectedWho.includes(r)))||s(this.#e).selectedProductTypes.length>0&&(!t.productType||!s(this.#e).selectedProductTypes.includes(t.productType))||s(this.#e).selectedTemperatures.length>0&&!(s(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}#L(t){if(!t)return"-";try{const r=JSON.parse(t);return!Array.isArray(r)||r.length===0?"-":r.map(n=>this.#P(n.value,n.unit)).join(" et ")}catch{return"-"}}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const a=n/1e3,i=r==="gr."?"kg":"l.";let c=(Math.round(a*100)/100).toString();return c.endsWith(",0")&&(c=c.slice(0,-2)),c.endsWith(",00")&&(c=c.slice(0,-3)),`${c} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#B(t){return!t||t.length===0?"-":this.#N(t).map(n=>this.#P(n.quantity.toString(),n.unit)).join(" et ")}#N(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(a=>{if(!a.quantity||!a.unit)return;const i=parseFloat(a.quantity);if(isNaN(i))return;const o=r.get(a.unit)||0;r.set(a.unit,o+i)});const n=[];return r.forEach((a,i)=>{n.push({quantity:a,unit:i})}),n}#W(t,r){if(!t||t.length===0)return[];if(!r||r.length===0)return t.map(o=>({quantity:parseFloat(o.value),unit:o.unit}));const n=new Map,a=new Map;t.forEach(o=>{const c=parseFloat(o.value);isNaN(c)||n.set(o.unit,(n.get(o.unit)||0)+c)}),r.forEach(o=>{a.set(o.unit,(a.get(o.unit)||0)+o.quantity)});const i=[];return n.forEach((o,c)=>{const u=a.get(c)||0,f=o-u;f>0&&i.push({quantity:f,unit:c})}),i}}const z=new tc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const rc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var nc=fl("<svg><!><!></svg>");function de(e,t){Z(t,!0);const r=Bt(t,"color",3,"currentColor"),n=Bt(t,"size",3,24),a=Bt(t,"strokeWidth",3,2),i=Bt(t,"absoluteStrokeWidth",3,!1),o=Bt(t,"iconNode",19,()=>[]),c=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=nc();ia(u,_=>({...rc,...c,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var f=l(u);Ve(f,17,o,_l,(_,m)=>{var h=F(()=>Ta(s(m),2));let g=()=>s(h)[0],P=()=>s(h)[1];var x=K(),k=Q(x);bl(k,g,!0,(D,$)=>{ia(D,()=>({...P()}))}),p(_,x)});var v=d(f);le(v,()=>t.children??ie),p(e,u),X()}function ws(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];de(e,ue({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function sc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];de(e,ue({name:"bean"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function ac(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];de(e,ue({name:"beef"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function ic(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];de(e,ue({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function oc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];de(e,ue({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function lc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];de(e,ue({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function cc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];de(e,ue({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function uc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];de(e,ue({name:"combine"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function dc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];de(e,ue({name:"egg"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function fs(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];de(e,ue({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function xa(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];de(e,ue({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function fc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];de(e,ue({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function vc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];de(e,ue({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function An(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];de(e,ue({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function hc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];de(e,ue({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function pc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];de(e,ue({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function _c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];de(e,ue({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function Tn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];de(e,ue({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function Dn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];de(e,ue({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function Nn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];de(e,ue({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function tn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];de(e,ue({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function un(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];de(e,ue({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function gc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];de(e,ue({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function jn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];de(e,ue({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];de(e,ue({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function ot(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];de(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=K(),c=Q(o);le(c,()=>t.children??ie),p(a,o)},$$slots:{default:!0}})),X()}function yc(e,t,r){w(t,null),r.onCancelEditPurchase()}async function wc(e,t,r){await t.onSavePurchase(),w(r,null)}var xc=S('<span class="loading loading-spinner loading-sm"></span>'),Sc=S('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Pc=S('<span class="loading loading-spinner loading-sm"></span>'),Ec=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),kc=(e,t,r)=>t(s(r)),Tc=(e,t,r)=>t(s(r).$id),Nc=S('<span class="loading loading-spinner loading-sm"></span>'),$c=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Ac=S('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Cc=S('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Mc(e,t){Z(t,!0);let r=Bt(t,"newPurchase",7),n=re(null);function a(B,Pe){return Pe==="gr."&&B>=1e3?`${(B/1e3).toFixed(1)} kg`:Pe==="ml"&&B>=1e3?`${(B/1e3).toFixed(1)} l`:`${B} ${Pe}`}function i(B){return new Date(B).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(B){w(n,{...B},!0),t.onStartEditPurchase(B)}async function c(B){await t.onDeletePurchase(B)}var u=Cc(),f=l(u),v=l(f);Dn(v,{class:"w-5 h-5"});var _=d(f,2),m=l(_),h=d(l(m),2),g=l(h),P=d(l(g),2),x=d(g,2),k=d(l(x),2),D=l(k);D.value=D.__value="";var $=d(D);$.value=$.__value="kg";var C=d($);C.value=C.__value="gr.";var A=d(C);A.value=A.__value="l.";var M=d(A);M.value=M.__value="ml";var O=d(M);O.value=O.__value="unité";var G=d(O);G.value=G.__value="bottes";var V=d(x,2),ne=d(l(V),2),ve=d(V,2),j=d(l(ve),2),R=d(ve,2),se=d(l(R),2),te=d(R,2),he=d(l(te),2),Le=d(h,2),be=l(Le);be.__click=function(...B){t.onAddPurchase?.apply(this,B)};var y=l(be);{var T=B=>{var Pe=xc();p(B,Pe)},ee=B=>{var Pe=ze("Ajouter l'achat");p(B,Pe)};I(y,B=>{t.loading?B(T):B(ee,!1)})}var _e=d(_,2);{var Ce=B=>{var Pe=Sc(),bt=l(Pe);Dn(bt,{class:"w-12 h-12 mx-auto mb-2"}),p(B,Pe)},Qe=B=>{var Pe=Ac(),bt=l(Pe),Gt=d(l(bt));Ve(Gt,21,()=>t.currentProductPurchases,tt=>tt.$id,(tt,Ee)=>{var At=K(),or=Q(At);{var yt=rt=>{var nt=Ec(),xe=l(nt),He=l(xe),Ct=l(He),Qt=d(Ct,2),Ze=l(Qt);Ze.value=Ze.__value="kg";var ut=d(Ze);ut.value=ut.__value="gr.";var dt=d(ut);dt.value=dt.__value="l.";var Mt=d(dt);Mt.value=Mt.__value="ml";var Be=d(Mt);Be.value=Be.__value="unité";var It=d(Be);It.value=It.__value="bottes";var wt=d(xe),lr=l(wt),ft=d(wt),vt=l(ft),xt=d(ft),Ht=l(xt),st=d(xt),cr=l(st),ht=d(st),Kt=l(ht),We=d(ht),Dt=l(We),Jt=l(Dt);Jt.__click=[wc,t,n];var Yt=l(Jt);{var Kr=L=>{var me=Pc();p(L,me)},Jr=L=>{pc(L,{class:"w-3 h-3"})};I(Yt,L=>{t.loading?L(Kr):L(Jr,!1)})}var $r=d(Jt,2);$r.__click=[yc,n,t];var U=l($r);ot(U,{class:"w-3 h-3"}),W(L=>{N(Ht,L),Jt.disabled=t.loading},[()=>i(s(Ee).$createdAt)]),Re(Ct,()=>s(n).quantity,L=>s(n).quantity=L),bs(Qt,()=>s(n).unit,L=>s(n).unit=L),Re(lr,()=>s(n).store,L=>s(n).store=L),Re(vt,()=>s(n).who,L=>s(n).who=L),Re(cr,()=>s(n).price,L=>s(n).price=L),Re(Kt,()=>s(n).notes,L=>s(n).notes=L),p(rt,nt)},Ut=rt=>{var nt=$c(),xe=l(nt),He=l(xe),Ct=d(xe),Qt=l(Ct),Ze=d(Ct),ut=l(Ze),dt=d(Ze),Mt=l(dt),Be=d(dt),It=l(Be),wt=d(Be),lr=l(wt),ft=d(wt),vt=l(ft),xt=l(vt);xt.__click=[kc,o,Ee];var Ht=l(xt);tn(Ht,{class:"w-4 h-4"});var st=d(xt,2);st.__click=[Tc,c,Ee];var cr=l(st);{var ht=We=>{var Dt=Nc();p(We,Dt)},Kt=We=>{ot(We,{class:"w-4 h-4"})};I(cr,We=>{t.loading?We(ht):We(Kt,!1)})}W((We,Dt)=>{N(He,We),N(Qt,s(Ee).store),N(ut,s(Ee).who),N(Mt,Dt),N(It,s(Ee).price?`${s(Ee).price}€`:"-"),N(lr,s(Ee).notes||"-"),st.disabled=t.loading},[()=>a(s(Ee).quantity,s(Ee).unit),()=>i(s(Ee).$createdAt)]),p(rt,nt)};I(or,rt=>{s(n)?.$id===s(Ee).$id?rt(yt):rt(Ut,!1)})}p(tt,At)}),p(B,Pe)};I(_e,B=>{t.currentProductPurchases.length===0?B(Ce):B(Qe,!1)})}W(()=>be.disabled=t.loading),Re(P,()=>r().quantity,B=>r().quantity=B),bs(k,()=>r().unit,B=>r().unit=B),Re(ne,()=>r().store,B=>r().store=B),Re(j,()=>r().who,B=>r().who=B),Re(se,()=>r().price,B=>r().price=B),Re(he,()=>r().notes,B=>r().notes=B),p(e,u),X()}Nr(["click"]);var Ic=S('<span class="loading loading-spinner loading-sm"></span>'),Dc=S('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),jc=(e,t,r)=>t(s(r).dateTime),Rc=S('<span class="loading loading-spinner loading-xs"></span>'),qc=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Oc=S('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Lc=S('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Bc(e,t){Z(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,T){return T==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:T==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:T==="unités"||T==="pièces"?`${y} ${T}`:`${y} ${T}`}function a(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(y){await t.onDeleteStock(y)}var o=Lc(),c=l(o),u=l(c);ws(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),_=d(l(v),2),m=l(_),h=d(l(m),2),g=d(m,2),P=d(l(g),2),x=l(P);x.value=x.__value="";var k=d(x);k.value=k.__value="kg";var D=d(k);D.value=D.__value="g";var $=d(D);$.value=$.__value="l";var C=d($);C.value=C.__value="ml";var A=d(C);A.value=A.__value="unités";var M=d(A);M.value=M.__value="pièces";var O=d(g,2),G=d(l(O),2),V=d(O,2),ne=d(l(V),2),ve=d(_,2),j=l(ve);j.__click=function(...y){t.onAddStock?.apply(this,y)};var R=l(j);{var se=y=>{var T=Ic();p(y,T)},te=y=>{var T=ze("Ajouter au stock");p(y,T)};I(R,y=>{t.loading?y(se):y(te,!1)})}var he=d(f,2);{var Le=y=>{var T=Dc(),ee=l(T);ws(ee,{class:"w-12 h-12 mx-auto mb-2"}),p(y,T)},be=y=>{var T=Oc(),ee=l(T),_e=d(l(ee));Ve(_e,23,()=>t.stockEntries,Ce=>Ce.dateTime,(Ce,Qe)=>{var B=qc(),Pe=l(B),bt=l(Pe),Gt=d(Pe),tt=l(Gt),Ee=d(Gt),At=l(Ee),or=d(Ee),yt=l(or);yt.__click=[jc,i,Qe];var Ut=l(yt);{var rt=xe=>{var He=Rc();p(xe,He)},nt=xe=>{var He=ze("Supprimer");p(xe,He)};I(Ut,xe=>{t.loading?xe(rt):xe(nt,!1)})}W((xe,He)=>{N(bt,xe),N(tt,He),N(At,s(Qe).notes||"-"),yt.disabled=t.loading},[()=>n(s(Qe).quantity,s(Qe).unit),()=>a(s(Qe).dateTime)]),p(Ce,B)}),p(y,T)};I(he,y=>{t.stockEntries.length===0?y(Le):y(be,!1)})}W(()=>j.disabled=t.loading),Re(h,()=>r.quantity,y=>r.quantity=y),bs(P,()=>r.unit,y=>r.unit=y),Re(G,()=>r.dateTime,y=>r.dateTime=y),Re(ne,()=>r.notes,y=>r.notes=y),p(e,o),X()}Nr(["click"]);var Wc=(e,t)=>{e.key==="Enter"&&t()},zc=S('<span class="loading loading-spinner loading-sm"></span>'),Vc=S('<span class="badge badge-primary badge-sm"> </span>'),Gc=S('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),Uc=(e,t,r)=>t(r),Qc=S('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),Hc=S('<div class="flex flex-wrap gap-2"></div>'),Kc=S('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function Jc(e,t){Z(t,!0);let r=re("");async function n(){s(r).trim()&&(await t.onAddVolunteer(s(r).trim()),w(r,""))}async function a(V){await t.onRemoveVolunteer(V)}var i=Kc(),o=l(i),c=l(o);jn(c,{class:"w-5 h-5"});var u=d(o,2),f=l(u),v=d(l(f),2),_=l(v),m=l(_);m.__keydown=[Wc,n];var h=d(_,2);h.__click=n;var g=l(h);{var P=V=>{var ne=zc();p(V,ne)},x=V=>{var ne=ze("Ajouter");p(V,ne)};I(g,V=>{t.loading?V(P):V(x,!1)})}var k=d(u,2),D=l(k),$=l(D),C=d(l($));{var A=V=>{var ne=Vc(),ve=l(ne);W(()=>N(ve,t.editingWho.length)),p(V,ne)};I(C,V=>{t.editingWho.length>0&&V(A)})}var M=d($,2);{var O=V=>{var ne=Gc(),ve=l(ne);jn(ve,{class:"w-12 h-12 mx-auto mb-2"}),p(V,ne)},G=V=>{var ne=Hc();Ve(ne,20,()=>t.editingWho,ve=>ve,(ve,j)=>{var R=Qc(),se=l(R),te=d(se);te.__click=[Uc,a,j];var he=l(te);ot(he,{class:"w-3 h-3"}),W(()=>{N(se,`${j??""} `),te.disabled=t.loading}),p(ve,R)}),p(V,ne)};I(M,V=>{t.editingWho.length===0?V(O):V(G,!1)})}W(()=>h.disabled=t.loading),Re(m,()=>s(r),V=>w(r,V)),p(e,i),X()}Nr(["keydown","click"]);var Yc=(e,t)=>{e.key==="Enter"&&t()},Zc=S('<span class="loading loading-spinner loading-sm"></span>'),Xc=(e,t,r)=>{w(t,""),w(r,"")},Fc=(e,t,r)=>t(r),eu=S('<button class="btn btn-outline btn-xs"> </button>'),tu=S('<br/><small class="opacity-75"> </small>',1),ru=S('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),nu=S('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),su=S(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),au=S('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function iu(e,t){Z(t,!0);let r=re(Fe(t.editingStore?.storeName||"")),n=re(Fe(t.editingStore?.storeComment||""));Vn(()=>{if(t.product?.storeInfo)w(r,t.product.storeInfo.storeName||"",!0),w(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const R=JSON.parse(t.product.store);w(r,R.storeName||"",!0),w(n,R.storeComment||"",!0)}catch{w(r,t.product.store||"",!0),w(n,"")}else w(r,""),w(n,"")});async function a(){const R=s(r).trim()?{storeName:s(r).trim(),storeComment:s(n).trim()||void 0}:null;await t.onUpdateStore(R)}function i(R){w(r,R,!0)}var o=au(),c=l(o),u=l(c);un(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),_=d(l(v),4),m=d(l(_),2);m.__keydown=[Yc,a];var h=d(_,2),g=d(l(h),2),P=d(h,2),x=l(P);x.__click=a;var k=l(x);{var D=R=>{var se=Zc();p(R,se)},$=R=>{var se=ze("Mettre à jour");p(R,se)};I(k,R=>{t.loading?R(D):R($,!1)})}var C=d(x,2);C.__click=[Xc,r,n];var A=d(P,4),M=d(l(A),2);Ve(M,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],R=>R,(R,se)=>{var te=eu();te.__click=[Fc,i,se];var he=l(te);W(()=>{te.disabled=t.loading,N(he,se)}),p(R,te)});var O=d(A,4),G=l(O);un(G,{class:"w-4 h-4"});var V=d(G,2),ne=d(l(V),2);{var ve=R=>{var se=ru(),te=d(l(se)),he=d(te);{var Le=be=>{var y=tu(),T=d(Q(y)),ee=l(T);W(()=>N(ee,t.product.storeInfo.storeComment)),p(be,y)};I(he,be=>{t.product.storeInfo.storeComment&&be(Le)})}W(()=>N(te,` ${t.product.storeInfo.storeName??""} `)),p(R,se)},j=R=>{var se=K(),te=Q(se);{var he=be=>{var y=nu(),T=d(l(y));W(()=>N(T,` ${t.product.store??""}`)),p(be,y)},Le=be=>{var y=su();p(be,y)};I(te,be=>{t.product?.store?be(he):be(Le,!1)},!0)}p(R,se)};I(ne,R=>{t.product?.storeInfo?R(ve):R(j,!1)})}W(()=>{x.disabled=t.loading,C.disabled=t.loading}),Re(m,()=>s(r),R=>w(r,R)),Re(g,()=>s(n),R=>w(n,R)),p(e,o),X()}Nr(["keydown","click"]);function Sa(e,t,r,n,a,i){t(!1),w(r,n()),w(a,null),i.onclose()}var ou=S('<div class="badge badge-success gap-1"><!> Actif</div>'),lu=S('<div class="badge badge-warning gap-1"><!> </div>'),cu=(e,t)=>t("recettes"),uu=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),du=(e,t)=>t("achats"),fu=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),vu=(e,t)=>t("stock"),hu=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),pu=(e,t)=>t("volontaires"),_u=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),mu=(e,t)=>t("magasins"),gu=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),bu=S('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),yu=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),wu=S('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),xu=S('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Su=S('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Pu(e,t){Z(t,!0);let r=Bt(t,"isOpen",15,!1),n=Bt(t,"productId",11,null),a=Bt(t,"initialTab",3,"recettes"),i=F(()=>n()?z.products.find(y=>y.$id===n()):null),o=re(Fe(a())),c=re(!1),u=re(null),f=re(""),v=re(Fe({quantity:null,unit:"",store:"",who:"",price:null,notes:""})),_=re(Fe({quantity:0,unit:"",notes:"",dateTime:""})),m=re(Fe([])),h=re(null),g=F(()=>{const y=s(i)?.purchases;if(!y||!Array.isArray(y))return console.warn("[ProductModal] Purchases is not a valid array:",y),[];const T=y.filter(ee=>!ee||typeof ee!="object"?(console.warn("[ProductModal] Invalid purchase object:",ee),!1):ee.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",ee),!1));return T.length!==y.length&&console.warn(`[ProductModal] Filtered ${y.length-T.length} invalid purchases`),T}),P=F(()=>Xl(s(i)?.recipesOccurrences||null)),x=F(()=>s(i)?.who||[]);Vn(()=>{s(i)&&(w(o,a()),w(m,Zl(s(i).stockReel),!0),w(f,s(i).store||"",!0),k())});function k(){w(v,{quantity:0,unit:"",store:s(i)?.store||"",who:"",price:null,notes:""},!0),w(_,{quantity:0,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function D(y){w(o,y,!0)}async function $(y){w(c,!0),w(u,null);try{return await y()}catch(T){return w(u,T instanceof Error?T.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",T),null}finally{w(c,!1)}}function C(y){if(!y)return"-";try{return new Date(y).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return y}}function A(y){if(!y)return"-";try{const T=JSON.parse(y);if(Array.isArray(T)&&T.length>0)return T.map(ee=>`${ee.value} ${ee.unit}`).join(" et ")}catch{return y}return y}async function M(){s(i)&&(w(c,!0),await $(async()=>{if(!s(v).quantity||!s(v).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let y=s(v).quantity,T=s(v).unit;if(s(v).unit==="kg"?(y=s(v).quantity*1e3,T="gr."):s(v).unit==="l."&&(y=s(v).quantity*1e3,T="ml"),await Ql({products:[s(i).$id],mainId:s(i).mainId.$id,unit:T,quantity:y,store:s(v).store||null,who:s(v).who||null,notes:s(v).notes||"",price:s(v).price||null})){k();const _e=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(_e)}}))}function O(y){w(h,{...y},!0)}function G(){w(h,null)}async function V(){s(h)&&await $(async()=>{const y=s(h).$id;let T=s(h).quantity,ee=s(h).unit;s(h).unit==="kg"?(T=s(h).quantity*1e3,ee="gr."):s(h).unit==="l."&&(T=s(h).quantity*1e3,ee="ml");const _e={unit:ee,quantity:T,store:s(h)?.store||null,who:s(h)?.who||null,notes:s(h)?.notes||"",price:s(h)?.price||null};if(await Hl(y,_e)){w(h,null);const Qe=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Qe)}})}async function ne(y){confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y.quantity} ${y.unit}) ?`)&&await $(async()=>{await Kl(y.$id);const T=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(T)})}async function ve(){s(i)&&await $(async()=>{if(!s(_).quantity||!s(_).unit)throw new Error("Veuillez remplir les champs obligatoires");const y={quantity:s(_).quantity.toString(),unit:s(_).unit,notes:s(_).notes||"",dateTime:s(_).dateTime||new Date().toISOString()},T=[...s(m),y],ee=s(i).$id;if(await ya(ee,JSON.stringify(T))){w(m,T,!0),k();const Ce=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(Ce)}})}async function j(y){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&s(i)&&await $(async()=>{const T=s(m).filter((_e,Ce)=>Ce!==y);if(await ya(s(i).$id,JSON.stringify(T))){w(m,T,!0);const _e=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(_e)}})}async function R(y){!s(i)||!y.trim()||await $(async()=>{const T=y.trim();if(s(x).includes(T))throw new Error("Ce volontaire est déjà ajouté");const ee=[...s(x),T];if(await ba(s(i).$id,ee)){const Ce=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(Ce)}})}async function se(y){s(i)&&confirm(`Retirer ${y} de la liste des volontaires ?`)&&await $(async()=>{const T=s(x).filter(_e=>_e!==y);if(await ba(s(i).$id,T)){const _e=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(_e)}})}async function te(y){s(i)&&await $(async()=>{const T=y!==void 0?y:s(f)&&s(f).trim()!==""?s(f).trim():s(i).store;console.log("[ProductModal] handleUpdateStore called with:",{storeValue:y,editingStore:s(f),finalStoreValue:T});const ee=await Ul(s(i).$id,T);if(ee){const _e=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(_e),w(f,ee.store||"",!0)}})}var he=K(),Le=Q(he);{var be=y=>{var T=Su(),ee=l(T),_e=l(ee),Ce=l(_e),Qe=l(Ce),B=l(Qe),Pe=d(Qe,2),bt=l(Pe),Gt=l(bt),tt=d(bt,2);{var Ee=U=>{var L=ou(),me=l(L);cc(me,{class:"w-3 h-3"}),p(U,L)},At=U=>{var L=lu(),me=l(L);mc(me,{class:"w-3 h-3"});var jt=d(me);W(()=>N(jt,` ${s(i).status??""}`)),p(U,L)};I(tt,U=>{s(i).status==="active"?U(Ee):U(At,!1)})}var or=d(tt,2),yt=d(l(or)),Ut=d(Ce,2);Ut.__click=[Sa,r,o,a,u,t];var rt=l(Ut);ot(rt,{class:"w-4 h-4"});var nt=d(_e,2),xe=l(nt);xe.__click=[cu,D];var He=l(xe);An(He,{class:"w-4 h-4 mr-1"});var Ct=d(He,2);{var Qt=U=>{var L=uu(),me=l(L);W(()=>N(me,s(P).length)),p(U,L)};I(Ct,U=>{s(P).length>0&&U(Qt)})}var Ze=d(xe,2);Ze.__click=[du,D];var ut=l(Ze);Dn(ut,{class:"w-4 h-4 mr-1"});var dt=d(ut,2);{var Mt=U=>{var L=fu(),me=l(L);W(()=>N(me,s(g).length)),p(U,L)};I(dt,U=>{s(g).length>0&&U(Mt)})}var Be=d(Ze,2);Be.__click=[vu,D];var It=l(Be);ws(It,{class:"w-4 h-4 mr-1"});var wt=d(It,2);{var lr=U=>{var L=hu(),me=l(L);W(()=>N(me,s(m).length)),p(U,L)};I(wt,U=>{s(m).length>0&&U(lr)})}var ft=d(Be,2);ft.__click=[pu,D];var vt=l(ft);jn(vt,{class:"w-4 h-4 mr-1"});var xt=d(vt,2);{var Ht=U=>{var L=_u(),me=l(L);W(()=>N(me,s(i).who.length)),p(U,L)};I(xt,U=>{s(i).who&&s(i).who.length>0&&U(Ht)})}var st=d(ft,2);st.__click=[mu,D];var cr=l(st);un(cr,{class:"w-4 h-4 mr-1"});var ht=d(nt,2),Kt=l(ht);{var We=U=>{var L=gu(),me=l(L);ot(me,{class:"w-4 h-4"});var jt=d(me,2),Zt=l(jt);W(()=>N(Zt,`erreur : ${s(u)??""}`)),p(U,L)};I(Kt,U=>{s(u)&&U(We)})}var Dt=d(Kt,2),Jt=l(Dt);{var Yt=U=>{var L=xu(),me=l(L),jt=l(me);An(jt,{class:"w-5 h-5"});var Zt=d(me,2);{var St=Pt=>{var Rt=bu(),dr=l(Rt);An(dr,{class:"w-12 h-12 mx-auto mb-2"}),p(Pt,Rt)},ur=Pt=>{var Rt=wu(),dr=l(Rt),Et=d(l(dr));Ve(Et,21,()=>s(P),qt=>qt.recipeName+qt.dateTimeService,(qt,pt)=>{var Ar=yu(),Cr=l(Ar),_t=l(Cr),Xt=d(Cr),Mr=l(Xt),Ir=d(Xt),fr=l(Ir),Yr=d(Ir),vn=l(Yr),hn=d(Yr),Hn=l(hn),Kn=d(hn),pn=l(Kn);W(Jn=>{N(_t,s(pt).recipeName),N(Mr,`${s(pt).quantity??""} ${s(pt).unit??""}`),N(fr,Jn),N(vn,s(pt).horaire||"-"),N(Hn,s(pt).typePlat||"-"),N(pn,s(pt).assiettes||"-")},[()=>C(s(pt).dateTimeService)]),p(qt,Ar)}),p(Pt,Rt)};I(Zt,Pt=>{s(P).length===0?Pt(St):Pt(ur,!1)})}p(U,L)},Kr=U=>{var L=K(),me=Q(L);{var jt=St=>{Mc(St,{get product(){return s(i)},get currentProductPurchases(){return s(g)},get loading(){return s(c)},get newPurchase(){return s(v)},onAddPurchase:M,onStartEditPurchase:O,onCancelEditPurchase:G,onSavePurchase:V,onDeletePurchase:ne})},Zt=St=>{var ur=K(),Pt=Q(ur);{var Rt=Et=>{Bc(Et,{get product(){return s(i)},get stockEntries(){return s(m)},get loading(){return s(c)},onAddStock:ve,onDeleteStock:j})},dr=Et=>{var qt=K(),pt=Q(qt);{var Ar=_t=>{Jc(_t,{get product(){return s(i)},get editingWho(){return s(x)},get loading(){return s(c)},onAddVolunteer:R,onRemoveVolunteer:se})},Cr=_t=>{var Xt=K(),Mr=Q(Xt);{var Ir=fr=>{iu(fr,{get product(){return s(i)},get editingStore(){return s(f)},get loading(){return s(c)},onUpdateStore:te})};I(Mr,fr=>{s(o)==="magasins"&&fr(Ir)},!0)}p(_t,Xt)};I(pt,_t=>{s(o)==="volontaires"?_t(Ar):_t(Cr,!1)},!0)}p(Et,qt)};I(Pt,Et=>{s(o)==="stock"?Et(Rt):Et(dr,!1)},!0)}p(St,ur)};I(me,St=>{s(o)==="achats"?St(jt):St(Zt,!1)},!0)}p(U,L)};I(Jt,U=>{s(o)==="recettes"?U(Yt):U(Kr,!1)})}var Jr=d(ht,2),$r=l(Jr);$r.__click=[Sa,r,o,a,u,t],W(U=>{N(B,s(i).productName),N(Gt,s(i).productType),N(yt,` ${U??""}`),Te(xe,1,`tab ${s(o)==="recettes"?"tab-active":""}`),Te(Ze,1,`tab ${s(o)==="achats"?"tab-active":""}`),Te(Be,1,`tab ${s(o)==="stock"?"tab-active":""}`),Te(ft,1,`tab ${s(o)==="volontaires"?"tab-active":""}`),Te(st,1,`tab ${s(o)==="magasins"?"tab-active":""}`)},[()=>A(s(i).totalNeededConsolidated)]),p(y,T)};I(Le,y=>{r()&&s(i)&&y(be)})}p(e,he),X()}Nr(["click"]);var Eu=()=>z.clearFilters(),ku=e=>z.setSearchQuery(e.currentTarget.value),Tu=()=>z.setGroupBy("none"),Nu=()=>z.setGroupBy("store"),$u=()=>z.setGroupBy("productType"),Au=(e,t)=>z.toggleProductType(t),Cu=S("<button><!> </button>"),Mu=()=>z.toggleTemperature("frais"),Iu=()=>z.toggleTemperature("surgele"),Du=()=>z.clearTypeAndTemperatureFilters(),ju=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Ru=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),qu=(e,t)=>z.toggleStore(t),Ou=S("<button><!> </button>"),Lu=()=>z.clearStoreFilters(),Bu=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Wu=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),zu=(e,t)=>z.toggleWho(t),Vu=S("<button><!> </button>"),Gu=()=>z.clearWhoFilters(),Uu=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Qu=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Hu=()=>z.handleSort("productName"),Ku=()=>z.handleSort("store"),Ju=()=>z.handleSort("who"),Yu=()=>z.handleSort("productType"),Zu=S('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Xu=S('<tr class="bg-base-300 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Fu=(e,t,r)=>t("productName",s(r)),ed=S('<div class="text-xs text-base-content/60"> </div>'),td=S('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),rd=S('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),nd=(e,t,r)=>t("store",s(r)),sd=S('<div class="tooltip tooltip-info"> </div>'),ad=(e,t,r)=>t("who",s(r)),id=S('<span class="badge badge-soft badge-info badge-sm"> </span>'),od=S('<div class="flex flex-wrap gap-1 pr-8"></div>'),ld=S('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),cd=(e,t,r)=>t("purchases",s(r)),ud=S('<tr class="hover:bg-base-300 transition-colors"><td class="cursor-pointer hover:bg-blue-50 relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:bg-purple-50 relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:bg-red-50 relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td> </td></tr>'),dd=S("<!> <!>",1),fd=S('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),vd=()=>z.setGroupBy("none"),hd=()=>z.setGroupBy("store"),pd=()=>z.setGroupBy("productType"),_d=(e,t)=>z.toggleProductType(t),md=S("<button><!> </button>"),gd=()=>z.toggleTemperature("frais"),bd=()=>z.toggleTemperature("surgele"),yd=()=>z.clearTypeAndTemperatureFilters(),wd=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),xd=(e,t)=>z.toggleStore(t),Sd=S("<button> </button>"),Pd=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Ed=(e,t)=>z.toggleWho(t),kd=S("<button> </button>"),Td=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Nd=(e,t)=>{z.clearFilters(),w(t,!1)},$d=S('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="bg-base-200 rounded-lg overflow-x-auto max-h-[calc(100vh-200px)]"><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-300"><tr class="bg-base-300"><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div> <div class="bg-base-200 rounded-lg p-4"><h4 class="font-semibold mb-2">Légende</h4> <div class="flex flex-wrap gap-4 text-sm"><div class="flex items-center gap-2"><div class="w-4 h-4 bg-blue-100 rounded"></div> <span>Cliquable (produit)</span></div> <div class="flex items-center gap-2"><div class="w-4 h-4 bg-green-100 rounded"></div> <span>Cliquable (magasin)</span></div> <div class="flex items-center gap-2"><div class="w-4 h-4 bg-purple-100 rounded"></div> <span>Cliquable (qui)</span></div> <div class="flex items-center gap-2"><div class="w-4 h-4 bg-orange-100 rounded"></div> <span>Cliquable (achats)</span></div> <div class="flex items-center gap-2"><div class="badge badge-info badge-sm">F</div> <span>Frais</span></div> <div class="flex items-center gap-2"><div class="badge badge-success badge-sm">S</div> <span>Surgelé</span></div></div></div></div> <!> <div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Ad(e,t){Z(t,!0);const r=F(()=>z.filteredProducts),n=F(()=>z.groupedFormattedProducts),a=F(()=>z.stats),i=F(()=>z.uniqueStores),o=F(()=>z.uniqueWho),c=F(()=>z.uniqueProductTypes),u=F(()=>z.filters);let f=re(!1),v=re(!1),_=re(null),m=re("recettes");function h(E,q){switch(console.log(`Cell clicked: ${E}`,q),w(_,q.$id,!0),E){case"store":w(m,"magasins");break;case"who":w(m,"volontaires");break;case"purchases":w(m,"achats");break;case"productName":w(m,"recettes");break;default:w(m,"recettes")}w(v,!0)}function g(){w(v,!1),w(_,null)}function P(E){switch(E.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:sc};case"animaux":return{displayName:"Viandes et Poissons",icon:ac};case"legumes":return{displayName:"Fruits et Légumes",icon:oc};case"sucres":return{displayName:"Sucrées",icon:ic};case"lof":return{displayName:"L.O.F",icon:dc};case"autres":return{displayName:"Autres",icon:lc};case"epices":return{displayName:"Assaisonnements",icon:fc};case"frais":return{displayName:"Produits Frais",icon:hc};default:return{displayName:E,icon:An}}}Vn(()=>{function E(q){q.key==="Escape"&&s(v)&&g()}return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)});var x=$d(),k=Q(x),D=l(k),$=l(D),C=l($);xa(C,{class:"w-4 h-4 mr-1"});var A=d(C),M=d($,2),O=l(M);Tn(O,{class:"w-4 h-4 mr-1"});var G=d(O),V=d(M,2),ne=l(V);Nn(ne,{class:"w-4 h-4 mr-1"});var ve=d(ne),j=d(V,2),R=l(j);uc(R,{class:"w-4 h-4 mr-1"});var se=d(R),te=d(D,2),he=l(te),Le=l(he),be=l(Le),y=l(be);fs(y,{class:"w-5 h-5"});var T=d(be,2);T.__click=[Eu];var ee=l(T);ot(ee,{class:"w-4 h-4"});var _e=d(he,2),Ce=l(_e),Qe=d(l(Ce),2),B=l(Qe);_c(B,{class:"w-4 h-4"});var Pe=d(B,2);Pe.__input=[ku];var bt=d(Ce,2),Gt=d(l(bt),2),tt=l(Gt);tt.__change=[Tu];var Ee=d(tt,2);Ee.__change=[Nu];var At=d(Ee,2);At.__change=[$u];var or=d(_e,2),yt=l(or),Ut=l(yt);{var rt=E=>{var q=Ru(),De=l(q),$e=d(l(De),2),ge=l($e);Ve(ge,16,()=>s(c),Ae=>Ae,(Ae,Me)=>{const kt=F(()=>P(Me));var Ot=Cu();Ot.__click=[Au,Me];var vr=l(Ot);En(vr,()=>s(kt).icon,(at,Lt)=>{Lt(at,{class:"w-5 h-5 mr-1"})});var Dr=d(vr);W(at=>{Te(Ot,1,`btn btn-sm ${at??""}`),N(Dr,` ${s(kt).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(Me)?"btn-accent":"btn-dash btn-accent"]),p(Ae,Ot)});var ke=d(ge,2);ke.__click=[Mu];var Se=l(ke);Tn(Se,{class:"w-5 h-5"});var oe=d(ke,2);oe.__click=[Iu];var ye=l(oe);Nn(ye,{class:"w-5 h-5"});var we=d(oe,2);{var H=Ae=>{var Me=ju();Me.__click=[Du];var kt=l(Me);ot(kt,{class:"w-3 h-3"}),p(Ae,Me)};I(we,Ae=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&Ae(H)})}W((Ae,Me)=>{Te(ke,1,`btn btn-sm ${Ae??""}`),Te(oe,1,`btn btn-sm ${Me??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),p(E,q)};I(Ut,E=>{s(c).length>0&&E(rt)})}var nt=d(yt,2),xe=l(nt);{var He=E=>{var q=Wu(),De=l(q),$e=d(l(De),2),ge=l($e);Ve(ge,16,()=>s(i),oe=>oe,(oe,ye)=>{var we=Ou();we.__click=[qu,ye];var H=l(we);un(H,{class:"w-3 h-3 mr-1"});var Ae=d(H);W(Me=>{Te(we,1,`btn btn-xs ${Me??""}`),N(Ae,` ${ye??""}`)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(ye)?"btn-accent":"btn-dash btn-accent"]),p(oe,we)});var ke=d(ge,2);{var Se=oe=>{var ye=Bu();ye.__click=[Lu];var we=l(ye);ot(we,{class:"w-3 h-3"}),p(oe,ye)};I(ke,oe=>{s(u).selectedStores.length>0&&oe(Se)})}p(E,q)};I(xe,E=>{s(i).length>0&&E(He)})}var Ct=d(xe,2);{var Qt=E=>{var q=Qu(),De=l(q),$e=d(l(De),2),ge=l($e);Ve(ge,16,()=>s(o),oe=>oe,(oe,ye)=>{var we=Vu();we.__click=[zu,ye];var H=l(we);gc(H,{class:"w-3 h-3 mr-1"});var Ae=d(H);W(Me=>{Te(we,1,`btn btn-xs ${Me??""}`),N(Ae,` ${ye??""}`)},[()=>s(u).selectedWho.length===0?" btn-soft btn-info":s(u).selectedWho.includes(ye)?" btn-info":"btn-dash btn-info"]),p(oe,we)});var ke=d(ge,2);{var Se=oe=>{var ye=Uu();ye.__click=[Gu];var we=l(ye);ot(we,{class:"w-3 h-3"}),p(oe,ye)};I(ke,oe=>{s(u).selectedWho.length>0&&oe(Se)})}p(E,q)};I(Ct,E=>{s(o).length>0&&E(Qt)})}var Ze=d(te,2),ut=l(Ze),dt=l(ut),Mt=l(dt),Be=l(Mt);Be.__click=[Hu];var It=l(Be),wt=l(It);xa(wt,{class:"w-4 h-4"});var lr=d(wt,2);{var ft=E=>{var q=ze();W(()=>N(q,s(u).sortDirection==="asc"?"↑":"↓")),p(E,q)};I(lr,E=>{s(u).sortColumn==="productName"&&E(ft)})}var vt=d(Be);vt.__click=[Ku];var xt=l(vt),Ht=l(xt);un(Ht,{class:"w-4 h-4"});var st=d(Ht,2);{var cr=E=>{var q=ze();W(()=>N(q,s(u).sortDirection==="asc"?"↑":"↓")),p(E,q)};I(st,E=>{s(u).sortColumn==="store"&&E(cr)})}var ht=d(vt);ht.__click=[Ju];var Kt=l(ht),We=l(Kt);jn(We,{class:"w-4 h-4"});var Dt=d(We,2);{var Jt=E=>{var q=ze();W(()=>N(q,s(u).sortDirection==="asc"?"↑":"↓")),p(E,q)};I(Dt,E=>{s(u).sortColumn==="who"&&E(Jt)})}var Yt=d(ht);Yt.__click=[Yu];var Kr=l(Yt),Jr=d(l(Kr));{var $r=E=>{var q=ze();W(()=>N(q,s(u).sortDirection==="asc"?"↑":"↓")),p(E,q)};I(Jr,E=>{s(u).sortColumn==="productType"&&E($r)})}var U=d(Yt),L=l(U),me=d(l(L));{var jt=E=>{var q=ze();W(()=>N(q,s(u).sortDirection==="asc"?"↑":"↓")),p(E,q)};I(me,E=>{s(u).sortColumn==="totalNeededConsolidated"&&E(jt)})}var Zt=d(U),St=l(Zt),ur=l(St);Dn(ur,{class:"w-4 h-4"});var Pt=d(ur,2);{var Rt=E=>{var q=ze();W(()=>N(q,s(u).sortDirection==="asc"?"↑":"↓")),p(E,q)};I(Pt,E=>{s(u).sortColumn==="totalPurchases"&&E(Rt)})}var dr=d(Zt),Et=l(dr),qt=l(Et);vc(qt,{class:"w-4 h-4"});var pt=d(dt);Ve(pt,21,()=>Object.entries(s(n)),([E,q])=>E,(E,q)=>{var De=F(()=>Ta(s(q),2));let $e=()=>s(De)[0],ge=()=>s(De)[1];var ke=dd(),Se=Q(ke);{var oe=we=>{const H=F(()=>P($e()));var Ae=Xu(),Me=l(Ae),kt=l(Me),Ot=l(kt);{var vr=at=>{var Lt=ze();W(()=>N(Lt,`🏪 ${$e()??""} (${ge().length??""})`)),p(at,Lt)},Dr=at=>{var Lt=K(),Xn=Q(Lt);{var Fn=Ft=>{var hr=Zu(),bn=l(hr);En(bn,()=>s(H).icon,(ts,rs)=>{rs(ts,{class:"w-4 h-4"})});var yn=d(bn,2),es=l(yn),jr=d(yn,2),wn=l(jr);W(()=>{N(es,s(H).displayName),N(wn,`(${ge().length??""})`)}),p(Ft,hr)},gn=Ft=>{var hr=ze();W(()=>N(hr,`📦 ${$e()??""} (${ge().length??""})`)),p(Ft,hr)};I(Xn,Ft=>{s(u).groupBy==="productType"?Ft(Fn):Ft(gn,!1)},!0)}p(at,Lt)};I(Ot,at=>{s(u).groupBy==="store"?at(vr):at(Dr,!1)})}p(we,Ae)};I(Se,we=>{$e()!==""&&we(oe)})}var ye=d(Se,2);Ve(ye,17,()=>z.sortProducts(ge()),we=>we.$id,(we,H)=>{const Ae=F(()=>P(s(H).productType));var Me=ud(),kt=l(Me);kt.__click=[Fu,h,H];var Ot=l(kt),vr=l(Ot),Dr=l(vr),at=l(Dr),Lt=d(Dr,2);{var Xn=ae=>{var pe=ed(),Ke=l(pe);W(()=>N(Ke,`Ancien: ${s(H).previousNames[0]??""}`)),p(ae,pe)};I(Lt,ae=>{s(H).previousNames&&s(H).previousNames.length>0&&ae(Xn)})}var Fn=d(vr,2),gn=l(Fn);{var Ft=ae=>{var pe=td(),Ke=l(pe);Tn(Ke,{class:"w-4 h-4 text-success"}),p(ae,pe)};I(gn,ae=>{s(H).pFrais&&ae(Ft)})}var hr=d(gn,2);{var bn=ae=>{var pe=rd(),Ke=l(pe);Nn(Ke,{class:"w-4 h-4 text-info"}),p(ae,pe)};I(hr,ae=>{s(H).pSurgel&&ae(bn)})}var yn=d(Ot,2),es=l(yn);tn(es,{class:"w-3 h-3 text-blue-500"});var jr=d(kt);jr.__click=[nd,h,H];var wn=l(jr);{var ts=ae=>{var pe=sd(),Ke=l(pe);W(()=>{ys(pe,"data-tip",s(H).storeInfo.storeComment),N(Ke,s(H).storeInfo.storeName||"-")}),p(ae,pe)},rs=ae=>{var pe=ze();W(()=>N(pe,s(H).storeInfo?.storeName||"-")),p(ae,pe)};I(wn,ae=>{s(H).storeInfo?.storeComment?ae(ts):ae(rs,!1)})}var Mi=d(wn,2),Ii=l(Mi);tn(Ii,{class:"w-3 h-3 text-green-500"});var ns=d(jr);ns.__click=[ad,h,H];var zs=l(ns);{var Di=ae=>{var pe=od();Ve(pe,20,()=>s(H).who,Ke=>Ke,(Ke,xn)=>{var Sn=id(),is=l(Sn);W(()=>N(is,xn)),p(Ke,Sn)}),p(ae,pe)},ji=ae=>{var pe=ze("-");p(ae,pe)};I(zs,ae=>{s(H).who&&s(H).who.length>0?ae(Di):ae(ji,!1)})}var Ri=d(zs,2),qi=l(Ri);tn(qi,{class:"w-3 h-3 text-purple-500"});var ss=d(ns),Oi=l(ss),Vs=l(Oi);En(Vs,()=>s(Ae).icon,(ae,pe)=>{pe(ae,{class:"w-3 h-3"})});var Li=d(Vs),Gs=d(ss),Us=l(Gs),Bi=l(Us),Wi=d(Us,2);{var zi=ae=>{var pe=ld(),Ke=l(pe);bc(Ke,{class:"w-3 h-3"});var xn=d(Ke,2),Sn=l(xn),is=d(xn,2),Qi=l(is);W(()=>{N(Sn,`${s(H)?.nbRecipes??""} r.`),N(Qi,`${s(H)?.totalAssiettes??""} c.`)}),p(ae,pe)};I(Wi,ae=>{(s(H).nbRecipes||s(H).totalAssiettes)&&ae(zi)})}var as=d(Gs);as.__click=[cd,h,H];var Qs=l(as),Vi=d(Qs),Gi=l(Vi);tn(Gi,{class:"w-3 h-3 text-red-500"});var Hs=d(as),Ui=l(Hs);W(()=>{N(at,s(H).productName),Te(jr,1,`${s(u).groupBy==="store"?"hidden":""} cursor-pointer hover:bg-green-50 font-medium relative group`),Te(ss,1,s(u).groupBy==="productType"?"hidden":""),N(Li,` ${s(Ae).displayName??""}`),N(Bi,s(H).displayQuantity||"-"),N(Qs,`${(s(H).displayTotalPurchases||"-")??""} `),Te(Hs,1,`text-center font-medium ${s(H).displayMissingQuantity==="✅ Complet"?"text-success":"text-warning"}`),N(Ui,s(H).displayMissingQuantity)}),p(we,Me)}),p(E,ke)});var Ar=d(ut,2);{var Cr=E=>{var q=fd();p(E,q)};I(Ar,E=>{s(r).length===0&&E(Cr)})}var _t=d(k,2);Pu(_t,{get isOpen(){return s(v)},get productId(){return s(_)},get initialTab(){return s(m)},onclose:g});var Xt=d(_t,2),Mr=l(Xt),Ir=d(Mr,2),fr=d(l(Ir),2),Yr=l(fr),vn=l(Yr),hn=l(vn);fs(hn,{class:"w-5 h-5"});var Hn=d(vn,2),Kn=l(Hn);ot(Kn,{class:"w-4 h-4"});var pn=d(Yr,2),Jn=d(l(pn),2),Yn=l(Jn);Yn.__change=[vd];var Zn=d(Yn,2);Zn.__change=[hd];var Rs=d(Zn,2);Rs.__change=[pd];var qs=d(pn,2),yi=l(qs),Os=d(l(yi),2);Ve(Os,20,()=>s(c),E=>E,(E,q)=>{const De=F(()=>P(q));var $e=md();$e.__click=[_d,q];var ge=l($e);En(ge,()=>s(De).icon,(Se,oe)=>{oe(Se,{class:"w-3 h-3 mr-1"})});var ke=d(ge);W(Se=>{Te($e,1,`btn btn-sm ${Se??""}`),N(ke,` ${s(De).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(q)?"btn-accent":"btn-dash btn-accent"]),p(E,$e)});var wi=d(Os,2),_n=l(wi);_n.__click=[gd];var xi=l(_n);Tn(xi,{class:"w-3 h-3"});var mn=d(_n,2);mn.__click=[bd];var Si=l(mn);Nn(Si,{class:"w-3 h-3"});var Pi=d(mn,2);{var Ei=E=>{var q=wd();q.__click=[yd];var De=l(q);ot(De,{class:"w-3 h-3"}),p(E,q)};I(Pi,E=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&E(Ei)})}var Ls=d(qs,2);{var ki=E=>{var q=Pd(),De=l(q),$e=d(l(De),2);Ve($e,20,()=>s(i),ge=>ge,(ge,ke)=>{var Se=Sd();Se.__click=[xd,ke];var oe=l(Se);W(ye=>{Te(Se,1,`btn btn-sm ${ye??""}`),N(oe,ke)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(ke)?"btn-accent":"btn-dash btn-accent"]),p(ge,Se)}),p(E,q)};I(Ls,E=>{s(i).length>0&&E(ki)})}var Bs=d(Ls,2);{var Ti=E=>{var q=Td(),De=l(q),$e=d(l(De),2);Ve($e,20,()=>s(o),ge=>ge,(ge,ke)=>{var Se=kd();Se.__click=[Ed,ke];var oe=l(Se);W(ye=>{Te(Se,1,`btn btn-sm ${ye??""}`),N(oe,ke)},[()=>s(u).selectedWho.length===0?"btn-soft btn-accent":s(u).selectedWho.includes(ke)?"btn-accent":"btn-dash btn-accent"]),p(ge,Se)}),p(E,q)};I(Bs,E=>{s(o).length>0&&E(Ti)})}var Ws=d(Bs,4);Ws.__click=[Nd,f];var Ni=l(Ws);ot(Ni,{class:"w-4 h-4 mr-2"});var $i=d(Xt,2),Ai=l($i),Ci=l(Ai);fs(Ci,{class:"w-6 h-6"}),W((E,q)=>{N(A,` ${s(a).total??""}`),N(G,` frais:
      ${s(a).frais??""}`),N(ve,` surgelés:
      ${s(a).surgel??""}`),N(se,` fusionnés:
      ${s(a).merged??""}`),kl(Pe,s(u).searchQuery),qr(tt,s(u).groupBy==="none"),qr(Ee,s(u).groupBy==="store"),qr(At,s(u).groupBy==="productType"),Te(vt,1,`cursor-pointer hover:bg-base-200 text-center ${s(u).groupBy==="store"?"hidden":""}`),Te(Yt,1,`cursor-pointer hover:bg-base-200 text-center ${s(u).groupBy==="productType"?"hidden":""}`),qr(Yn,s(u).groupBy==="none"),qr(Zn,s(u).groupBy==="store"),qr(Rs,s(u).groupBy==="productType"),Te(_n,1,`btn btn-sm ${E??""}`),Te(mn,1,`btn btn-sm ${q??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),$l(Mr,()=>s(f),E=>w(f,E)),p(e,x),X()}Nr(["click","input","change"]);$o();var Cd=S('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Md(e){var t=Cd();p(e,t)}var Id=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Dd(e,t){var r=Id(),n=d(l(r),2),a=d(l(n),2),i=l(a);W(()=>N(i,t.message)),p(e,r)}var jd=S('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Rd=S('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),qd=S('<div class="text-base-content/60"> </div>'),Od=S('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Ld=S('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Bd(e,t){Z(t,!0);let r,n=re(null);pi(async()=>{r=Wl();try{await z.initialize(r)}catch(j){w(n,j instanceof Error?j.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",j)}}),Il(()=>{z.destroy()});const a=F(()=>s(n)||z.error),i=F(()=>z.loading&&z.products.length===0);var o=Ld(),c=l(o),u=l(c),f=l(u),v=l(f),_=d(l(v),2),m=l(_),h=d(v,2),g=l(h);{var P=j=>{var R=jd();p(j,R)};I(g,j=>{z.realtimeConnected&&j(P)})}var x=d(g,2);{var k=j=>{var R=Rd();p(j,R)};I(x,j=>{z.syncing&&j(k)})}var D=d(x,2);{var $=j=>{var R=qd(),se=l(R);W(te=>N(se,`Maj: ${te??""}`),[()=>new Date(z.lastSync).toLocaleTimeString()]),p(j,R)};I(D,j=>{z.lastSync&&j($)})}var C=d(c,2),A=l(C);{var M=j=>{Dd(j,{get message(){return s(a)}})};I(A,j=>{s(a)&&j(M)})}var O=d(A,2);{var G=j=>{Md(j)};I(O,j=>{s(i)&&j(G)})}var V=d(O,2);{var ne=j=>{Ad(j,{})},ve=j=>{var R=K(),se=Q(R);{var te=he=>{var Le=Od();p(he,Le)};I(se,he=>{z.loading||he(te)},!0)}p(j,R)};I(V,j=>{z.products.length>0?j(ne):j(ve,!1)})}W(()=>N(m,`Liste: ${r??""}`)),p(e,o),X()}vl(Bd,{target:document.getElementById("app_products")});
