import{d as m,r as u,i as b,o as r,c as p,b as f,j as h,a as e,F as g,k,l as y,f as d,t as $,e as i,g as D,p as v,m as S,n as I,q as a,s as B}from"./index-hYmgoq33.js";import{_ as M}from"./button.vue_vue_type_script_setup_true_lang-BjmFCSYZ.js";import{u as A}from"./admin-DqHfCAtS.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./toast-L9_XbE0d.js";const T=t=>(v("data-v-65943cab"),t=t(),S(),t),O={class:"text-left !h-screen bg-slate-200"},j=T(()=>e("div",{class:"px-5"},[e("div",{class:"flex justify-center mb-[150px] pt-[18px]"},[e("span",{class:"me-2 w-[6px] bg-[#F8D442]"}),e("h2",{class:"uppercase text-[20px] font-[700]"},"crud operations")])],-1)),E=T(()=>e("i",{class:"bx bx-log-out text-[#fcb900] text-3xl"},null,-1)),N={class:"modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"},q=m({__name:"sidebar",props:{permanent:{type:Boolean},routes:{}},setup(t){const o=A(),s=u(!1);async function n(){s.value=!0}async function l(){s.value=!1}const _=()=>{o.clearUser()};return(c,J)=>{const C=b("router-link");return r(),p(g,null,[f(e("nav",O,[j,e("div",null,[(r(!0),p(g,null,k(c.routes,(x,R)=>(r(),y(C,{key:R,to:{name:x.name},class:"block w-5/6 transition-all text-center text-[18px] rounded-md mx-auto mb-3 p-2"},{default:d(()=>[e("span",null,$(x.text),1)]),_:2},1032,["to"]))),128))]),i(M,{class:"w-3/6 flex justify-center mx-auto p-2 my-10 items-center text-lg",icon:"mdi-logout",color:"grey-lighten-2",onClick:n},{default:d(()=>[E,D(" Chiqish ")]),_:1})],512),[[h,c.permanent]]),f(e("div",N,[e("div",{class:"flex justify-around gap-2"},[e("button",{onClick:l,class:"bg-slate-400 p-2 rounded-xl text-lg"}," Bekor qilish "),e("button",{onClick:_,class:"bg-red-500 p-2 rounded-xl text-lg"}," Chiqish ")])],512),[[h,s.value]])],64)}}}),L=w(q,[["__scopeId","data-v-65943cab"]]),F=t=>(v("data-v-1aa99e16"),t=t(),S(),t),U=F(()=>e("i",{class:"bx bx-menu px-7"},null,-1)),V=[U],z=m({__name:"appbar",emits:["toggleSidebar"],setup(t,{emit:o}){const s=u(!1),n=o;function l(){s.value=!s.value,n("toggleSidebar",s.value)}return(_,c)=>(r(),p("nav",{class:I(["app-bar w-[100%] bg-slate-300",{appBar:!s.value}])},[e("button",{onClick:l,class:"toggle-button"},V)],2))}}),G=w(z,[["__scopeId","data-v-1aa99e16"]]),P={class:"!h-screen flex"},Y={class:""},H={class:"w-full overflow-y-scroll h-screen"},ee=m({__name:"admin",setup(t){const o=u(!0),s=u([{text:a.MT_ADMINS,name:a.RT_ADMINS},{text:a.MT_CATEGORY,name:a.RT_CATEGORY},{text:a.MT_PRODUCTS,name:a.RT_PRODUCTS},{text:a.MT_ORDER,name:a.RT_ORDER}]),n=()=>{o.value=!o.value};return(l,_)=>{const c=b("container");return r(),p("div",P,[e("div",Y,[i(L,{permanent:o.value,routes:s.value},null,8,["permanent","routes"])]),e("div",H,[i(G,{onToggleSidebar:n,class:"h-[15%]"}),e("main",null,[i(c,null,{default:d(()=>[B(l.$slots,"default")]),_:3})])])])}}});export{ee as default};
