import{k as F,b as V,m as H,l as Y,e as Z,w as G,r as $,o as k,a as U,t as A,q as T,v as tt,n as et,x as st,g as nt}from"./vue.esm-bundler-uHHmxH7B.js";var ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let q;const E=t=>q=t,B=Symbol();function I(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var p;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(p||(p={}));function ct(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(B,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const D=()=>{};function O(t,o,s,e=D){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function j(t,...o){t.slice().forEach(s=>{s(...o)})}const rt=t=>t();function L(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];I(r)&&I(e)&&t.hasOwnProperty(s)&&!k(e)&&!U(e)?t[s]=L(r,e):t[s]=e}return t}const ut=Symbol();function at(t){return!I(t)||!t.hasOwnProperty(ut)}const{assign:v}=Object;function ft(t){return!!(k(t)&&t.effect)}function it(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let P;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((g,m)=>(g[m]=H(nt(()=>{E(s);const _=s._s.get(t);return f[m].call(_,_)})),g),{}))}return P=J(t,b,o,s,e,!0),P}function J(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),P={deep:!0};let b,y,g=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),V({});let R;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:p.patchFunction,storeId:t,events:_}):(L(e.state.value[t],c),n={type:p.patchObject,payload:c,storeId:t,events:_});const h=R=Symbol();et().then(()=>{R===h&&(b=!0)}),y=!0,j(g,n,e.state.value[t])}const N=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:D;function z(){f.stop(),g=[],m=[],e._s.delete(t)}function K(c,n){return function(){E(e);const h=Array.from(arguments),S=[],x=[];function Q(i){S.push(i)}function X(i){x.push(i)}j(m,{args:h,name:c,store:l,after:Q,onError:X});let C;try{C=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw j(x,i),i}return C instanceof Promise?C.then(i=>(j(S,i),i)).catch(i=>(j(x,i),Promise.reject(i))):(j(S,C),C)}}const M={_p:e,$id:t,$onAction:O.bind(null,m),$patch:W,$reset:N,$subscribe(c,n={}){const h=O(g,c,n.detached,()=>S()),S=f.run(()=>G(()=>e.state.value[t],x=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:p.direct,events:_},x)},v({},P,n)));return h},$dispose:z},l=$(M);e._s.set(t,l);const w=(e._a&&e._a.runWithContext||rt)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in w){const n=w[c];if(k(n)&&!ft(n)||U(n))u||(d&&at(n)&&(k(n)?n.value=d[c]:L(n,d[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=K(c,n);w[c]=h,a.actions[c]=n}}return v(l,w),v(A(l),w),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(l.$state,d),b=!0,y=!0,l}function lt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,P){const b=Y();return a=a||(b?Z(B,null):null),a&&E(a),a=q,a._s.has(e)||(u?J(e,o,r,a):it(e,r,a)),a._s.get(e)}return f.$id=e,f}const vt=lt("currentUser",{state:()=>({user:null}),getters:{isLoggedIn(){return!!this.user}},actions:{login(t){this.user=t},logout(){this.user=null}}}),yt=ct();export{yt as p,vt as u};