import{u as x}from"./admin-UHnXbqKR.js";import{L as A}from"./loading-B4JwlWj-.js";import{d as h,A as i,o as a,c as o,e as c,a as s,f as g,g as y,F as k,k as v,t as e,h as _,q as r}from"./index-QKdg0Wc9.js";import{_ as z}from"./button.vue_vue_type_script_setup_true_lang-B33KtfDc.js";import"./admin-BFzBxTn6.js";import"./toast-fzalL6XU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={key:0},D={key:1},N={class:"m-2 flex items-center justify-end"},C={class:"w-full text-center"},I=s("tr",{class:"border-y-[1px]"},[s("th",{class:"py-2 fontsize"},"ID"),s("th",{class:"fontsize"},"Familiya Ism"),s("th",{class:"fontsize"},[s("span",{class:"hide"},"Email")]),s("th",{class:"fontsize"},[s("span",{class:"hide"},"Manzil")]),s("th",{class:"fontsize"},[s("span",{class:"hide"},"Telefon raqam")]),s("th",{class:"fontsize"},[s("span",{class:"hide"},"Faol")]),s("th",{class:"fontsize"},[s("span",{class:"hide"},"Super Admin")])],-1),q=["onClick","data-id"],F={class:"py-2 text-[15px]"},L={class:"text-[15px]"},S={class:"text-[15px]"},T={class:"hide"},w={class:"text-[15px]"},B={class:"hide"},E={class:"text-[15px]"},M={class:"hide"},R={class:"text-[15px]"},V={class:"hide"},$={class:"text-[15px]"},G={class:"hide"},j={key:2,class:"text-center text-xl font-semibold mt-10"},H=h({__name:"GetAdmin",setup(p){const{loading:d,admins:n}=x();function m(l){_.push({name:r.RT_SINGLE_ADMIN,params:{id:l}})}const u=()=>{_.push({name:r.RT_ADD_ADMIN})};return(l,J)=>i(d)?(a(),o("div",b,[c(A)])):i(n).length!==0?(a(),o("div",D,[s("div",N,[c(z,{class:"p-2 bg-orange transition duration-700 ease-in-out hover:bg-primary font-semibold rounded-lg text-white float-right",onClick:u},{default:g(()=>[y(" Admin qo'shish ")]),_:1})]),s("table",C,[I,(a(!0),o(k,null,v(i(n),(t,f)=>(a(),o("tr",{onClick:K=>m(t.id),class:"border-y-[1px] cursor-pointer",key:f,"data-id":t.id},[s("td",F,e(t.id),1),s("td",L,e(t.full_name),1),s("td",S,[s("span",T,e(t.email),1)]),s("td",w,[s("span",B,e(t.address),1)]),s("td",E,[s("span",M,e(t.phone),1)]),s("td",R,[s("span",V,e(t.is_active),1)]),s("td",$,[s("span",G,e(t.is_superAdmin),1)])],8,q))),128))])])):(a(),o("div",j," Adminlarni faqat super admin ko'roladi! "))}}),Z=h({__name:"Admin",setup(p){return(d,n)=>(a(),o("div",null,[c(H)]))}});export{Z as default};