"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[6429],{404:(Te,Pe,Se)=>{Se(7181);const Ze=":";const he=function(i,...e){if(he.translate){const n=he.translate(i,e);i=n[0],e=n[1]}let t=Qe(i[0],i.raw[0]);for(let n=1;n<i.length;n++)t+=e[n-1]+Qe(i[n],i.raw[n]);return t},ft=":";function Qe(i,e){return e.charAt(0)===ft?i.substring(function Be(i,e){for(let t=1,n=1;t<i.length;t++,n++)if("\\"===e[n])n++;else if(i[t]===Ze)return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(i,e)+1):i}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=he},7181:()=>{!function(e){const t=e.performance;function n(x){t&&t.mark&&t.mark(x)}function r(x,m){t&&t.measure&&t.measure(x,m)}n("Zone");const s=e.__Zone_symbol_prefix||"__zone_symbol__";function l(x){return s+x}const f=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let u=(()=>{class x{static assertZonePatched(){if(e.Promise!==de.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let o=x.current;for(;o.parent;)o=o.parent;return o}static get current(){return W.zone}static get currentTask(){return le}static __load_patch(o,c,b=!1){if(de.hasOwnProperty(o)){if(!b&&f)throw Error("Already loaded patch: "+o)}else if(!e["__Zone_disable_"+o]){const I="Zone:"+o;n(I),de[o]=c(e,x,K),r(I,I)}}get parent(){return this._parent}get name(){return this._name}constructor(o,c){this._parent=o,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,c)}get(o){const c=this.getZoneWith(o);if(c)return c._properties[o]}getZoneWith(o){let c=this;for(;c;){if(c._properties.hasOwnProperty(o))return c;c=c._parent}return null}fork(o){if(!o)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,o)}wrap(o,c){if("function"!=typeof o)throw new Error("Expecting function got: "+o);const b=this._zoneDelegate.intercept(this,o,c),I=this;return function(){return I.runGuarded(b,this,arguments,c)}}run(o,c,b,I){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,o,c,b,I)}finally{W=W.parent}}runGuarded(o,c=null,b,I){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,o,c,b,I)}catch(J){if(this._zoneDelegate.handleError(this,J))throw J}}finally{W=W.parent}}runTask(o,c,b){if(o.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(o.zone||Q).name+"; Execution: "+this.name+")");if(o.state===B&&(o.type===te||o.type===O))return;const I=o.state!=y;I&&o._transitionTo(y,j),o.runCount++;const J=le;le=o,W={parent:W,zone:this};try{o.type==O&&o.data&&!o.data.isPeriodic&&(o.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,o,c,b)}catch(h){if(this._zoneDelegate.handleError(this,h))throw h}}finally{o.state!==B&&o.state!==T&&(o.type==te||o.data&&o.data.isPeriodic?I&&o._transitionTo(j,y):(o.runCount=0,this._updateTaskCount(o,-1),I&&o._transitionTo(B,y,B))),W=W.parent,le=J}}scheduleTask(o){if(o.zone&&o.zone!==this){let b=this;for(;b;){if(b===o.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${o.zone.name}`);b=b.parent}}o._transitionTo(Y,B);const c=[];o._zoneDelegates=c,o._zone=this;try{o=this._zoneDelegate.scheduleTask(this,o)}catch(b){throw o._transitionTo(T,Y,B),this._zoneDelegate.handleError(this,b),b}return o._zoneDelegates===c&&this._updateTaskCount(o,1),o.state==Y&&o._transitionTo(j,Y),o}scheduleMicroTask(o,c,b,I){return this.scheduleTask(new g(L,o,c,b,I,void 0))}scheduleMacroTask(o,c,b,I,J){return this.scheduleTask(new g(O,o,c,b,I,J))}scheduleEventTask(o,c,b,I,J){return this.scheduleTask(new g(te,o,c,b,I,J))}cancelTask(o){if(o.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(o.zone||Q).name+"; Execution: "+this.name+")");if(o.state===j||o.state===y){o._transitionTo(U,j,y);try{this._zoneDelegate.cancelTask(this,o)}catch(c){throw o._transitionTo(T,U),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(o,-1),o._transitionTo(B,U),o.runCount=0,o}}_updateTaskCount(o,c){const b=o._zoneDelegates;-1==c&&(o._zoneDelegates=null);for(let I=0;I<b.length;I++)b[I]._updateTaskCount(o.type,c)}}return x.__symbol__=l,x})();const E={name:"",onHasTask:(x,m,o,c)=>x.hasTask(o,c),onScheduleTask:(x,m,o,c)=>x.scheduleTask(o,c),onInvokeTask:(x,m,o,c,b,I)=>x.invokeTask(o,c,b,I),onCancelTask:(x,m,o,c)=>x.cancelTask(o,c)};class k{constructor(m,o,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=m,this._parentDelegate=o,this._forkZS=c&&(c&&c.onFork?c:o._forkZS),this._forkDlgt=c&&(c.onFork?o:o._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:o._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:o._interceptZS),this._interceptDlgt=c&&(c.onIntercept?o:o._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:o._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:o._invokeZS),this._invokeDlgt=c&&(c.onInvoke?o:o._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:o._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:o._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?o:o._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:o._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:o._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?o:o._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:o._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:o._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?o:o._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:o._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:o._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?o:o._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:o._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=c&&c.onHasTask;(b||o&&o._hasTaskZS)&&(this._hasTaskZS=b?c:E,this._hasTaskDlgt=o,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=m,c.onScheduleTask||(this._scheduleTaskZS=E,this._scheduleTaskDlgt=o,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=E,this._invokeTaskDlgt=o,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=E,this._cancelTaskDlgt=o,this._cancelTaskCurrZone=this.zone))}fork(m,o){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,o):new u(m,o)}intercept(m,o,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,o,c):o}invoke(m,o,c,b,I){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,o,c,b,I):o.apply(c,b)}handleError(m,o){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,o)}scheduleTask(m,o){let c=o;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,o),c||(c=o);else if(o.scheduleFn)o.scheduleFn(o);else{if(o.type!=L)throw new Error("Task is missing scheduleFn.");R(o)}return c}invokeTask(m,o,c,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,o,c,b):o.callback.apply(c,b)}cancelTask(m,o){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,o);else{if(!o.cancelFn)throw Error("Task is not cancelable");c=o.cancelFn(o)}return c}hasTask(m,o){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,o)}catch(c){this.handleError(m,c)}}_updateTaskCount(m,o){const c=this._taskCounts,b=c[m],I=c[m]=b+o;if(I<0)throw new Error("More tasks executed then were scheduled.");0!=b&&0!=I||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:m})}}class g{constructor(m,o,c,b,I,J){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=o,this.data=b,this.scheduleFn=I,this.cancelFn=J,!c)throw new Error("callback is not defined");this.callback=c;const h=this;this.invoke=m===te&&b&&b.useG?g.invokeTask:function(){return g.invokeTask.call(e,h,this,arguments)}}static invokeTask(m,o,c){m||(m=this),ne++;try{return m.runCount++,m.zone.runTask(m,o,c)}finally{1==ne&&p(),ne--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(B,Y)}_transitionTo(m,o,c){if(this._state!==o&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${o}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=m,m==B&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const A=l("setTimeout"),N=l("Promise"),S=l("then");let F,H=[],P=!1;function z(x){if(F||e[N]&&(F=e[N].resolve(0)),F){let m=F[S];m||(m=F.then),m.call(F,x)}else e[A](x,0)}function R(x){0===ne&&0===H.length&&z(p),x&&H.push(x)}function p(){if(!P){for(P=!0;H.length;){const x=H;H=[];for(let m=0;m<x.length;m++){const o=x[m];try{o.zone.runTask(o,null,null)}catch(c){K.onUnhandledError(c)}}}K.microtaskDrainDone(),P=!1}}const Q={name:"NO ZONE"},B="notScheduled",Y="scheduling",j="scheduled",y="running",U="canceling",T="unknown",L="microTask",O="macroTask",te="eventTask",de={},K={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:R,showUncaughtError:()=>!u[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:z};let W={parent:null,zone:new u(null,null)},le=null,ne=0;function q(){}r("Zone","Zone"),e.Zone=u}(typeof window<"u"&&window||typeof self<"u"&&self||global);const Te=Object.getOwnPropertyDescriptor,Pe=Object.defineProperty,Se=Object.getPrototypeOf,Ge=Object.create,Ze=Array.prototype.slice,Me="addEventListener",Oe="removeEventListener",Ae=Zone.__symbol__(Me),ue=Zone.__symbol__(Oe),oe="true",ie="false",fe=Zone.__symbol__("");function ze(e,t){return Zone.current.wrap(e,t)}function Le(e,t,n,r,s){return Zone.current.scheduleMacroTask(e,t,n,r,s)}const $=Zone.__symbol__,Re=typeof window<"u",ge=Re?window:void 0,X=Re&&ge||"object"==typeof self&&self||global,tt="removeAttribute";function xe(e,t){for(let n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=ze(e[n],t+"_"+n));return e}function pe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,ve=!("nw"in X)&&typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process),Ce=!ve&&!Fe&&!(!Re||!ge.HTMLElement),je=typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process)&&!Fe&&!(!Re||!ge.HTMLElement),we={},$e=function(e){if(!(e=e||X.event))return;let t=we[e.type];t||(t=we[e.type]=$("ON_PROPERTY"+e.type));const n=this||e.target||X,r=n[t];let s;return Ce&&n===ge&&"error"===e.type?(s=r&&r.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===s&&e.preventDefault()):(s=r&&r.apply(this,arguments),null!=s&&!s&&e.preventDefault()),s};function ce(e,t,n){let r=Te(e,t);if(!r&&n&&Te(n,t)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const s=$("on"+t+"patched");if(e.hasOwnProperty(s)&&e[s])return;delete r.writable,delete r.value;const l=r.get,f=r.set,u=t.slice(2);let E=we[u];E||(E=we[u]=$("ON_PROPERTY"+u)),r.set=function(k){let g=this;!g&&e===X&&(g=X),g&&("function"==typeof g[E]&&g.removeEventListener(u,$e),f&&f.call(g,null),g[E]=k,"function"==typeof k&&g.addEventListener(u,$e,!1))},r.get=function(){let k=this;if(!k&&e===X&&(k=X),!k)return null;const g=k[E];if(g)return g;if(l){let A=l.call(this);if(A)return r.set.call(this,A),"function"==typeof k[tt]&&k.removeAttribute(t),A}return null},Pe(e,t,r),e[s]=!0}function He(e,t,n){if(t)for(let r=0;r<t.length;r++)ce(e,"on"+t[r],n);else{const r=[];for(const s in e)"on"==s.slice(0,2)&&r.push(s);for(let s=0;s<r.length;s++)ce(e,r[s],n)}}const re=$("originalInstance");function Ee(e){const t=X[e];if(!t)return;X[$(e)]=t,X[e]=function(){const s=xe(arguments,e);switch(s.length){case 0:this[re]=new t;break;case 1:this[re]=new t(s[0]);break;case 2:this[re]=new t(s[0],s[1]);break;case 3:this[re]=new t(s[0],s[1],s[2]);break;case 4:this[re]=new t(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},se(X[e],t);const n=new t(function(){});let r;for(r in n)"XMLHttpRequest"===e&&"responseBlob"===r||function(s){"function"==typeof n[s]?X[e].prototype[s]=function(){return this[re][s].apply(this[re],arguments)}:Pe(X[e].prototype,s,{set:function(l){"function"==typeof l?(this[re][s]=ze(l,e+"."+s),se(this[re][s],l)):this[re][s]=l},get:function(){return this[re][s]}})}(r);for(r in t)"prototype"!==r&&t.hasOwnProperty(r)&&(X[e][r]=t[r])}function ae(e,t,n){let r=e;for(;r&&!r.hasOwnProperty(t);)r=Se(r);!r&&e[t]&&(r=e);const s=$(t);let l=null;if(r&&(!(l=r[s])||!r.hasOwnProperty(s))&&(l=r[s]=r[t],pe(r&&Te(r,t)))){const u=n(l,s,t);r[t]=function(){return u(this,arguments)},se(r[t],l)}return l}function rt(e,t,n){let r=null;function s(l){const f=l.data;return f.args[f.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(f.target,f.args),l}r=ae(e,t,l=>function(f,u){const E=n(f,u);return E.cbIdx>=0&&"function"==typeof u[E.cbIdx]?Le(E.name,u[E.cbIdx],E,s):l.apply(f,u)})}function se(e,t){e[$("OriginalDelegate")]=t}let We=!1,Ne=!1;function st(){if(We)return Ne;We=!0;try{const e=ge.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ne=!0)}catch{}return Ne}Zone.__load_patch("ZoneAwarePromise",(e,t,n)=>{const r=Object.getOwnPropertyDescriptor,s=Object.defineProperty,f=n.symbol,u=[],E=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],k=f("Promise"),g=f("then"),A="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){const d=h&&h.rejection;d?console.error("Unhandled Promise rejection:",d instanceof Error?d.message:d,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",d,d instanceof Error?d.stack:void 0):console.error(h)}},n.microtaskDrainDone=()=>{for(;u.length;){const h=u.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(d){S(d)}}};const N=f("unhandledPromiseRejectionHandler");function S(h){n.onUnhandledError(h);try{const d=t[N];"function"==typeof d&&d.call(this,h)}catch{}}function H(h){return h&&h.then}function P(h){return h}function F(h){return o.reject(h)}const z=f("state"),R=f("value"),p=f("finally"),Q=f("parentPromiseValue"),B=f("parentPromiseState"),Y="Promise.then",j=null,y=!0,U=!1,T=0;function L(h,d){return a=>{try{K(h,d,a)}catch(_){K(h,!1,_)}}}const O=function(){let h=!1;return function(a){return function(){h||(h=!0,a.apply(null,arguments))}}},te="Promise resolved with itself",de=f("currentTaskTrace");function K(h,d,a){const _=O();if(h===a)throw new TypeError(te);if(h[z]===j){let w=null;try{("object"==typeof a||"function"==typeof a)&&(w=a&&a.then)}catch(C){return _(()=>{K(h,!1,C)})(),h}if(d!==U&&a instanceof o&&a.hasOwnProperty(z)&&a.hasOwnProperty(R)&&a[z]!==j)le(a),K(h,a[z],a[R]);else if(d!==U&&"function"==typeof w)try{w.call(a,_(L(h,d)),_(L(h,!1)))}catch(C){_(()=>{K(h,!1,C)})()}else{h[z]=d;const C=h[R];if(h[R]=a,h[p]===p&&d===y&&(h[z]=h[B],h[R]=h[Q]),d===U&&a instanceof Error){const v=t.currentTask&&t.currentTask.data&&t.currentTask.data[A];v&&s(a,de,{configurable:!0,enumerable:!1,writable:!0,value:v})}for(let v=0;v<C.length;)ne(h,C[v++],C[v++],C[v++],C[v++]);if(0==C.length&&d==U){h[z]=T;let v=a;try{throw new Error("Uncaught (in promise): "+function l(h){return h&&h.toString===Object.prototype.toString?(h.constructor&&h.constructor.name||"")+": "+JSON.stringify(h):h?h.toString():Object.prototype.toString.call(h)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(D){v=D}E&&(v.throwOriginal=!0),v.rejection=a,v.promise=h,v.zone=t.current,v.task=t.currentTask,u.push(v),n.scheduleMicroTask()}}}return h}const W=f("rejectionHandledHandler");function le(h){if(h[z]===T){try{const d=t[W];d&&"function"==typeof d&&d.call(this,{rejection:h[R],promise:h})}catch{}h[z]=U;for(let d=0;d<u.length;d++)h===u[d].promise&&u.splice(d,1)}}function ne(h,d,a,_,w){le(h);const C=h[z],v=C?"function"==typeof _?_:P:"function"==typeof w?w:F;d.scheduleMicroTask(Y,()=>{try{const D=h[R],Z=!!a&&p===a[p];Z&&(a[Q]=D,a[B]=C);const M=d.run(v,void 0,Z&&v!==F&&v!==P?[]:[D]);K(a,!0,M)}catch(D){K(a,!1,D)}},a)}const x=function(){},m=e.AggregateError;class o{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(d){return K(new this(null),y,d)}static reject(d){return K(new this(null),U,d)}static any(d){if(!d||"function"!=typeof d[Symbol.iterator])return Promise.reject(new m([],"All promises were rejected"));const a=[];let _=0;try{for(let v of d)_++,a.push(o.resolve(v))}catch{return Promise.reject(new m([],"All promises were rejected"))}if(0===_)return Promise.reject(new m([],"All promises were rejected"));let w=!1;const C=[];return new o((v,D)=>{for(let Z=0;Z<a.length;Z++)a[Z].then(M=>{w||(w=!0,v(M))},M=>{C.push(M),_--,0===_&&(w=!0,D(new m(C,"All promises were rejected")))})})}static race(d){let a,_,w=new this((D,Z)=>{a=D,_=Z});function C(D){a(D)}function v(D){_(D)}for(let D of d)H(D)||(D=this.resolve(D)),D.then(C,v);return w}static all(d){return o.allWithCallback(d)}static allSettled(d){return(this&&this.prototype instanceof o?this:o).allWithCallback(d,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(d,a){let _,w,C=new this((M,V)=>{_=M,w=V}),v=2,D=0;const Z=[];for(let M of d){H(M)||(M=this.resolve(M));const V=D;try{M.then(G=>{Z[V]=a?a.thenCallback(G):G,v--,0===v&&_(Z)},G=>{a?(Z[V]=a.errorCallback(G),v--,0===v&&_(Z)):w(G)})}catch(G){w(G)}v++,D++}return v-=2,0===v&&_(Z),C}constructor(d){const a=this;if(!(a instanceof o))throw new Error("Must be an instanceof Promise.");a[z]=j,a[R]=[];try{const _=O();d&&d(_(L(a,y)),_(L(a,U)))}catch(_){K(a,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return o}then(d,a){let _=this.constructor?.[Symbol.species];(!_||"function"!=typeof _)&&(_=this.constructor||o);const w=new _(x),C=t.current;return this[z]==j?this[R].push(C,w,d,a):ne(this,C,w,d,a),w}catch(d){return this.then(null,d)}finally(d){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=o);const _=new a(x);_[p]=p;const w=t.current;return this[z]==j?this[R].push(w,_,d,d):ne(this,w,_,d,d),_}}o.resolve=o.resolve,o.reject=o.reject,o.race=o.race,o.all=o.all;const c=e[k]=e.Promise;e.Promise=o;const b=f("thenPatched");function I(h){const d=h.prototype,a=r(d,"then");if(a&&(!1===a.writable||!a.configurable))return;const _=d.then;d[g]=_,h.prototype.then=function(w,C){return new o((D,Z)=>{_.call(this,D,Z)}).then(w,C)},h[b]=!0}return n.patchThen=I,c&&(I(c),ae(e,"fetch",h=>function J(h){return function(d,a){let _=h.apply(d,a);if(_ instanceof o)return _;let w=_.constructor;return w[b]||I(w),_}}(h))),Promise[t.__symbol__("uncaughtPromiseErrors")]=u,o}),Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,n=$("OriginalDelegate"),r=$("Promise"),s=$("Error"),l=function(){if("function"==typeof this){const k=this[n];if(k)return"function"==typeof k?t.call(k):Object.prototype.toString.call(k);if(this===Promise){const g=e[r];if(g)return t.call(g)}if(this===Error){const g=e[s];if(g)return t.call(g)}}return t.call(this)};l[n]=t,Function.prototype.toString=l;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});let ye=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ye=!1}const it={useG:!0},ee={},qe={},Be=new RegExp("^"+fe+"(\\w+)(true|false)$"),Xe=$("propagationStopped");function ct(e,t){const n=(t?t(e):e)+ie,r=(t?t(e):e)+oe,s=fe+n,l=fe+r;ee[e]={},ee[e][ie]=s,ee[e][oe]=l}function at(e,t,n,r){const s=r&&r.add||Me,l=r&&r.rm||Oe,f=r&&r.listeners||"eventListeners",u=r&&r.rmAll||"removeAllListeners",E=$(s),k="."+s+":",g="prependListener",A="."+g+":",N=function(R,p,Q){if(R.isRemoved)return;const B=R.callback;let Y;"object"==typeof B&&B.handleEvent&&(R.callback=y=>B.handleEvent(y),R.originalDelegate=B);try{R.invoke(R,p,[Q])}catch(y){Y=y}const j=R.options;return j&&"object"==typeof j&&j.once&&p[l].call(p,Q.type,R.originalDelegate?R.originalDelegate:R.callback,j),Y};function S(R,p,Q){if(!(p=p||e.event))return;const B=R||p.target||e,Y=B[ee[p.type][Q?oe:ie]];if(Y){const j=[];if(1===Y.length){const y=N(Y[0],B,p);y&&j.push(y)}else{const y=Y.slice();for(let U=0;U<y.length&&(!p||!0!==p[Xe]);U++){const T=N(y[U],B,p);T&&j.push(T)}}if(1===j.length)throw j[0];for(let y=0;y<j.length;y++){const U=j[y];t.nativeScheduleMicroTask(()=>{throw U})}}}const H=function(R){return S(this,R,!1)},P=function(R){return S(this,R,!0)};function F(R,p){if(!R)return!1;let Q=!0;p&&void 0!==p.useG&&(Q=p.useG);const B=p&&p.vh;let Y=!0;p&&void 0!==p.chkDup&&(Y=p.chkDup);let j=!1;p&&void 0!==p.rt&&(j=p.rt);let y=R;for(;y&&!y.hasOwnProperty(s);)y=Se(y);if(!y&&R[s]&&(y=R),!y||y[E])return!1;const U=p&&p.eventNameToString,T={},L=y[E]=y[s],O=y[$(l)]=y[l],te=y[$(f)]=y[f],de=y[$(u)]=y[u];let K;p&&p.prepend&&(K=y[$(p.prepend)]=y[p.prepend]);const o=Q?function(a){if(!T.isExisting)return L.call(T.target,T.eventName,T.capture?P:H,T.options)}:function(a){return L.call(T.target,T.eventName,a.invoke,T.options)},c=Q?function(a){if(!a.isRemoved){const _=ee[a.eventName];let w;_&&(w=_[a.capture?oe:ie]);const C=w&&a.target[w];if(C)for(let v=0;v<C.length;v++)if(C[v]===a){C.splice(v,1),a.isRemoved=!0,0===C.length&&(a.allRemoved=!0,a.target[w]=null);break}}if(a.allRemoved)return O.call(a.target,a.eventName,a.capture?P:H,a.options)}:function(a){return O.call(a.target,a.eventName,a.invoke,a.options)},I=p&&p.diff?p.diff:function(a,_){const w=typeof _;return"function"===w&&a.callback===_||"object"===w&&a.originalDelegate===_},J=Zone[$("UNPATCHED_EVENTS")],h=e[$("PASSIVE_EVENTS")],d=function(a,_,w,C,v=!1,D=!1){return function(){const Z=this||e;let M=arguments[0];p&&p.transferEventName&&(M=p.transferEventName(M));let V=arguments[1];if(!V)return a.apply(this,arguments);if(ve&&"uncaughtException"===M)return a.apply(this,arguments);let G=!1;if("function"!=typeof V){if(!V.handleEvent)return a.apply(this,arguments);G=!0}if(B&&!B(a,V,Z,arguments))return;const me=ye&&!!h&&-1!==h.indexOf(M),_e=function W(a,_){return!ye&&"object"==typeof a&&a?!!a.capture:ye&&_?"boolean"==typeof a?{capture:a,passive:!0}:a?"object"==typeof a&&!1!==a.passive?{...a,passive:!0}:a:{passive:!0}:a}(arguments[2],me);if(J)for(let be=0;be<J.length;be++)if(M===J[be])return me?a.call(Z,M,V,_e):a.apply(this,arguments);const ht=!!_e&&("boolean"==typeof _e||_e.capture),Tt=!(!_e||"object"!=typeof _e)&&_e.once,mt=Zone.current;let dt=ee[M];dt||(ct(M,U),dt=ee[M]);const Et=dt[ht?oe:ie];let et,De=Z[Et],gt=!1;if(De){if(gt=!0,Y)for(let be=0;be<De.length;be++)if(I(De[be],V))return}else De=Z[Et]=[];const pt=Z.constructor.name,yt=qe[pt];yt&&(et=yt[M]),et||(et=pt+_+(U?U(M):M)),T.options=_e,Tt&&(T.options.once=!1),T.target=Z,T.capture=ht,T.eventName=M,T.isExisting=gt;const Ve=Q?it:void 0;Ve&&(Ve.taskData=T);const ke=mt.scheduleEventTask(et,V,Ve,w,C);return T.target=null,Ve&&(Ve.taskData=null),Tt&&(_e.once=!0),!ye&&"boolean"==typeof ke.options||(ke.options=_e),ke.target=Z,ke.capture=ht,ke.eventName=M,G&&(ke.originalDelegate=V),D?De.unshift(ke):De.push(ke),v?Z:void 0}};return y[s]=d(L,k,o,c,j),K&&(y[g]=d(K,A,function(a){return K.call(T.target,T.eventName,a.invoke,T.options)},c,j,!0)),y[l]=function(){const a=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const w=arguments[2],C=!!w&&("boolean"==typeof w||w.capture),v=arguments[1];if(!v)return O.apply(this,arguments);if(B&&!B(O,v,a,arguments))return;const D=ee[_];let Z;D&&(Z=D[C?oe:ie]);const M=Z&&a[Z];if(M)for(let V=0;V<M.length;V++){const G=M[V];if(I(G,v))return M.splice(V,1),G.isRemoved=!0,0===M.length&&(G.allRemoved=!0,a[Z]=null,"string"==typeof _)&&(a[fe+"ON_PROPERTY"+_]=null),G.zone.cancelTask(G),j?a:void 0}return O.apply(this,arguments)},y[f]=function(){const a=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const w=[],C=Ye(a,U?U(_):_);for(let v=0;v<C.length;v++){const D=C[v];w.push(D.originalDelegate?D.originalDelegate:D.callback)}return w},y[u]=function(){const a=this||e;let _=arguments[0];if(_){p&&p.transferEventName&&(_=p.transferEventName(_));const w=ee[_];if(w){const D=a[w[ie]],Z=a[w[oe]];if(D){const M=D.slice();for(let V=0;V<M.length;V++){const G=M[V];this[l].call(this,_,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}if(Z){const M=Z.slice();for(let V=0;V<M.length;V++){const G=M[V];this[l].call(this,_,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}}}else{const w=Object.keys(a);for(let C=0;C<w.length;C++){const D=Be.exec(w[C]);let Z=D&&D[1];Z&&"removeListener"!==Z&&this[u].call(this,Z)}this[u].call(this,"removeListener")}if(j)return this},se(y[s],L),se(y[l],O),de&&se(y[u],de),te&&se(y[f],te),!0}let z=[];for(let R=0;R<n.length;R++)z[R]=F(n[R],r);return z}function Ye(e,t){if(!t){const l=[];for(let f in e){const u=Be.exec(f);let E=u&&u[1];if(E&&(!t||E===t)){const k=e[f];if(k)for(let g=0;g<k.length;g++)l.push(k[g])}}return l}let n=ee[t];n||(ct(t),n=ee[t]);const r=e[n[ie]],s=e[n[oe]];return r?s?r.concat(s):r.slice():s?s.slice():[]}function _t(e,t){const n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",r=>function(s,l){s[Xe]=!0,r&&r.apply(s,l)})}function Ke(e,t,n,r,s){const l=Zone.__symbol__(r);if(t[l])return;const f=t[l]=t[r];t[r]=function(u,E,k){return E&&E.prototype&&s.forEach(function(g){const A=`${n}.${r}::`+g,N=E.prototype;try{if(N.hasOwnProperty(g)){const S=e.ObjectGetOwnPropertyDescriptor(N,g);S&&S.value?(S.value=e.wrapWithCurrentZone(S.value,A),e._redefineProperty(E.prototype,g,S)):N[g]&&(N[g]=e.wrapWithCurrentZone(N[g],A))}else N[g]&&(N[g]=e.wrapWithCurrentZone(N[g],A))}catch{}}),f.call(t,u,E,k)},e.attachOriginToPatched(t[r],f)}function Ue(e,t,n){if(!n||0===n.length)return t;const r=n.filter(l=>l.target===e);if(!r||0===r.length)return t;const s=r[0].ignoreProperties;return t.filter(l=>-1===s.indexOf(l))}function lt(e,t,n,r){e&&He(e,Ue(e,t,n),r)}function Je(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}Zone.__load_patch("util",(e,t,n)=>{const r=Je(e);n.patchOnProperties=He,n.patchMethod=ae,n.bindArguments=xe,n.patchMacroTask=rt;const s=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[s]=e[l]),e[s]&&(t[s]=t[l]=e[s]),n.patchEventPrototype=_t,n.patchEventTarget=at,n.isIEOrEdge=st,n.ObjectDefineProperty=Pe,n.ObjectGetOwnPropertyDescriptor=Te,n.ObjectCreate=Ge,n.ArraySlice=Ze,n.patchClass=Ee,n.wrapWithCurrentZone=ze,n.filterProperties=Ue,n.attachOriginToPatched=se,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Ke,n.getGlobalObjects=()=>({globalSources:qe,zoneSymbolEventNames:ee,eventNames:r,isBrowser:Ce,isMix:je,isNode:ve,TRUE_STR:oe,FALSE_STR:ie,ZONE_SYMBOL_PREFIX:fe,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Oe})});const Ie=$("zoneTask");function he(e,t,n,r){let s=null,l=null;n+=r;const f={};function u(k){const g=k.data;return g.args[0]=function(){return k.invoke.apply(this,arguments)},g.handleId=s.apply(e,g.args),k}function E(k){return l.call(e,k.data.handleId)}s=ae(e,t+=r,k=>function(g,A){if("function"==typeof A[0]){const N={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?A[1]||0:void 0,args:A},S=A[0];A[0]=function(){try{return S.apply(this,arguments)}finally{N.isPeriodic||("number"==typeof N.handleId?delete f[N.handleId]:N.handleId&&(N.handleId[Ie]=null))}};const H=Le(t,A[0],N,u,E);if(!H)return H;const P=H.data.handleId;return"number"==typeof P?f[P]=H:P&&(P[Ie]=H),P&&P.ref&&P.unref&&"function"==typeof P.ref&&"function"==typeof P.unref&&(H.ref=P.ref.bind(P),H.unref=P.unref.bind(P)),"number"==typeof P||P?P:H}return k.apply(e,A)}),l=ae(e,n,k=>function(g,A){const N=A[0];let S;"number"==typeof N?S=f[N]:(S=N&&N[Ie],S||(S=N)),S&&"string"==typeof S.type?"notScheduled"!==S.state&&(S.cancelFn&&S.data.isPeriodic||0===S.runCount)&&("number"==typeof N?delete f[N]:N&&(N[Ie]=null),S.zone.cancelTask(S)):k.apply(e,A)})}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("queueMicrotask",(e,t,n)=>{n.patchMethod(e,"queueMicrotask",r=>function(s,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})}),Zone.__load_patch("timers",e=>{const t="set",n="clear";he(e,t,n,"Timeout"),he(e,t,n,"Interval"),he(e,t,n,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{he(e,"request","cancel","AnimationFrame"),he(e,"mozRequest","mozCancel","AnimationFrame"),he(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const n=["alert","prompt","confirm"];for(let r=0;r<n.length;r++)ae(e,n[r],(l,f,u)=>function(E,k){return t.current.run(l,e,k,u)})}),Zone.__load_patch("EventTarget",(e,t,n)=>{(function i(e,t){t.patchEventPrototype(e,t)})(e,n),function Qe(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:n,zoneSymbolEventNames:r,TRUE_STR:s,FALSE_STR:l,ZONE_SYMBOL_PREFIX:f}=t.getGlobalObjects();for(let E=0;E<n.length;E++){const k=n[E],N=f+(k+l),S=f+(k+s);r[k]={},r[k][l]=N,r[k][s]=S}const u=e.EventTarget;u&&u.prototype&&t.patchEventTarget(e,t,[u&&u.prototype])}(e,n);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&n.patchEventTarget(e,n,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,t,n)=>{Ee("MutationObserver"),Ee("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,n)=>{Ee("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,n)=>{Ee("FileReader")}),Zone.__load_patch("on_property",(e,t,n)=>{!function ut(e,t){if(ve&&!je||Zone[e.symbol("patchEvents")])return;const n=t.__Zone_ignore_on_properties;let r=[];if(Ce){const s=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ot(){try{const e=ge.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];lt(s,Je(s),n&&n.concat(l),Se(s))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<r.length;s++){const l=t[r[s]];l&&l.prototype&&lt(l.prototype,Je(l.prototype),n)}}(n,e)}),Zone.__load_patch("customElements",(e,t,n)=>{!function ft(e,t){const{isBrowser:n,isMix:r}=t.getGlobalObjects();(n||r)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,n)}),Zone.__load_patch("XHR",(e,t)=>{!function E(k){const g=k.XMLHttpRequest;if(!g)return;const A=g.prototype;let S=A[Ae],H=A[ue];if(!S){const T=k.XMLHttpRequestEventTarget;if(T){const L=T.prototype;S=L[Ae],H=L[ue]}}const P="readystatechange",F="scheduled";function z(T){const L=T.data,O=L.target;O[l]=!1,O[u]=!1;const te=O[s];S||(S=O[Ae],H=O[ue]),te&&H.call(O,P,te);const de=O[s]=()=>{if(O.readyState===O.DONE)if(!L.aborted&&O[l]&&T.state===F){const W=O[t.__symbol__("loadfalse")];if(0!==O.status&&W&&W.length>0){const le=T.invoke;T.invoke=function(){const ne=O[t.__symbol__("loadfalse")];for(let q=0;q<ne.length;q++)ne[q]===T&&ne.splice(q,1);!L.aborted&&T.state===F&&le.call(T)},W.push(T)}else T.invoke()}else!L.aborted&&!1===O[l]&&(O[u]=!0)};return S.call(O,P,de),O[n]||(O[n]=T),y.apply(O,L.args),O[l]=!0,T}function R(){}function p(T){const L=T.data;return L.aborted=!0,U.apply(L.target,L.args)}const Q=ae(A,"open",()=>function(T,L){return T[r]=0==L[2],T[f]=L[1],Q.apply(T,L)}),Y=$("fetchTaskAborting"),j=$("fetchTaskScheduling"),y=ae(A,"send",()=>function(T,L){if(!0===t.current[j]||T[r])return y.apply(T,L);{const O={target:T,url:T[f],isPeriodic:!1,args:L,aborted:!1},te=Le("XMLHttpRequest.send",R,O,z,p);T&&!0===T[u]&&!O.aborted&&te.state===F&&te.invoke()}}),U=ae(A,"abort",()=>function(T,L){const O=function N(T){return T[n]}(T);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===t.current[Y])return U.apply(T,L)})}(e);const n=$("xhrTask"),r=$("xhrSync"),s=$("xhrListener"),l=$("xhrScheduled"),f=$("xhrURL"),u=$("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function nt(e,t){const n=e.constructor.name;for(let r=0;r<t.length;r++){const s=t[r],l=e[s];if(l){if(!pe(Te(e,s)))continue;e[s]=(u=>{const E=function(){return u.apply(this,xe(arguments,n+"."+s))};return se(E,u),E})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function n(r){return function(s){Ye(e,r).forEach(f=>{const u=e.PromiseRejectionEvent;if(u){const E=new u(r,{promise:s.promise,reason:s.rejection});f.invoke(E)}})}}e.PromiseRejectionEvent&&(t[$("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[$("rejectionHandledHandler")]=n("rejectionhandled"))})}},Te=>{Te(Te.s=404)}]);