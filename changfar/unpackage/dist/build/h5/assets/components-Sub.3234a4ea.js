import{k as e,a,c as l,b as o,w as t,F as s,l as n,i as u,g as c,m as d,p}from"./index.df3ca6f8.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";const i=r({setup(){let a=e("");return{toGo:function(){0!=a.value.length&&n({url:"../pages/index/index"})},toBack:function(){n({url:"../pages/index/index"})},inputWords:a}}},[["render",function(e,n,r,i,_,f){const x=u,m=p;return a(),l(s,null,[o(x,{class:"top_box"},{default:t((()=>[o(x,{onClick:i.toBack},{default:t((()=>[c("《")])),_:1},8,["onClick"]),o(x,{class:"top_text"},{default:t((()=>[c("发布动态")])),_:1}),o(x,{class:d(""==i.inputWords?"button_none":"button"),onClick:i.toGo},{default:t((()=>[c("发表")])),_:1},8,["class","onClick"])])),_:1}),o(x,{class:"input_box"},{default:t((()=>[o(m,{cols:"36",modelValue:i.inputWords,"onUpdate:modelValue":n[0]||(n[0]=e=>i.inputWords=e),rows:"10",maxlength:"200","placeholder-class":"place",placeholder:"想说什么随便说"},null,8,["modelValue"])])),_:1})],64)}],["__scopeId","data-v-62a7e2e7"]]);export{i as default};