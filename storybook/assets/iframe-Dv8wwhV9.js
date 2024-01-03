import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="modulepreload",p=function(i,_){return new URL(i,_).href},O={},o=function(_,n,c){let e=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link");e=Promise.all(n.map(r=>{if(r=p(r,c),r in O)return;O[r]=!0;const l=r.endsWith(".css"),E=l?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":d,l||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),l)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>_()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});f.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/MyButton.stories.ts":async()=>o(()=>import("./MyButton.stories-BVGJTyQr.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/stories/MyHeader.mdx":async()=>o(()=>import("./MyHeader-7E8WdBsj.js").then(i=>i.M),__vite__mapDeps([5,6,7,8,9,10,11,12,13,2,1,3,4,14,15,16]),import.meta.url),"./src/stories/MyHeader.stories.ts":async()=>o(()=>import("./MyHeader.stories-DrLJ2viD.js").then(i=>i.M),__vite__mapDeps([15,13,2,1,3,4,14]),import.meta.url),"./src/stories/MyPage.stories.ts":async()=>o(()=>import("./MyPage.stories-F89TnOf9.js"),__vite__mapDeps([17,2,18,13,1,3,4,14,19]),import.meta.url),"./src/stories/SignUpForm.stories.ts":async()=>o(()=>import("./SignUpForm.stories-DVysH4c3.js"),__vite__mapDeps([20,2,3,7,12,9,21,10,22]),import.meta.url),"./src/storybook/Pages.stories.ts":async()=>o(()=>import("./Pages.stories-2CyRbo4X.js"),__vite__mapDeps([23,24,2]),import.meta.url)};async function w(i){return P[i]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:y}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-KtYG-35v.js"),__vite__mapDeps([25,26,2]),import.meta.url),o(()=>import("./entry-preview-docs-V3NyCEJU.js"),__vite__mapDeps([27,11,7,8,9,2]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([28,12]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([29,12]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([30,12]),import.meta.url),o(()=>import("./preview-Zs4f8maX.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-70qxeh8F.js"),__vite__mapDeps([31,7]),import.meta.url),o(()=>import("./preview-UC2qMYT1.js"),__vite__mapDeps([32,2,18,24,3,26]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new y({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:I});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./MyButton.stories-BVGJTyQr.js","./MyButton-nCu5LGPX.js","./vue.esm-bundler-uHHmxH7B.js","./_plugin-vue_export-helper-x3n3nnut.js","./MyButton-1lqeqy8g.css","./MyHeader-7E8WdBsj.js","./index-88MHLzpM.js","./_commonjsHelpers-4gQjN7DL.js","./doctrine-qHFmDLFQ.js","./_baseIsEqual-8CTTe9z8.js","./uniq-hS-Gbbdw.js","./index-l8anBc4L.js","./index-PPLHz8o0.js","./MyHeader-aHTRWg8T.js","./MyHeader-JHlKFH66.css","./MyHeader.stories-DrLJ2viD.js","./index-J4fTfMz-.js","./MyPage.stories-F89TnOf9.js","./pinia-FyXulLgP.js","./MyPage-l4SIks5M.css","./SignUpForm.stories-DVysH4c3.js","./index-oRJpL3FP.js","./SignUpForm-6mCNpVkT.css","./Pages.stories-2CyRbo4X.js","./vue-router-dG2N6WEY.js","./entry-preview-KtYG-35v.js","./chunk-UXHY756F-HDuxx3zr.js","./entry-preview-docs-V3NyCEJU.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-70qxeh8F.js","./preview-UC2qMYT1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}