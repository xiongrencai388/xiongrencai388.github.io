import{f as M,y as n,z as s,D as S,u as P,A as t,F as v,G as F,B as b}from"./vue.esm-bundler-uHHmxH7B.js";import{u as L}from"./pinia-FyXulLgP.js";import{M as w}from"./MyHeader-DnoVQbrO.js";import"./MyButton-28a3O36e.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const k={class:"content-wrapper"},a=M({__name:"MyPage",setup(B){const r=L();function d(){r.login({id:1})}function g(){r.logout()}function f(){}return(y,I)=>(n(),s("div",null,[S(w,{isLoggedIn:P(r).isLoggedIn,onLogin:d,onLogout:g,onSignUp:f},null,8,["isLoggedIn"]),t("main",null,[t("div",k,[(n(),s(v,null,F(10,_=>t("div",{class:"content",key:_},b(y.$t("page.content").repeat(20)),1)),64))])])]))}});a.__docgenInfo={exportName:"default",displayName:"MyPage",description:"",tags:{},sourceFiles:["D:/Study/EucaliaStudy/Storyboot/storybook-7-vue-3-sample/src/components/MyPage.vue"]};const E={title:"MyPage",component:a,render:()=>({components:{MyPage:a},template:"<MyPage />"})},e={},o={parameters:{viewport:{defaultViewport:"mobile"}}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const h=["ForPc","ForMobile"];export{o as ForMobile,e as ForPc,h as __namedExportsOrder,E as default};