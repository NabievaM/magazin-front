import{d as E,r as w,C as F,x as T,o as N,c as O,a as e,g as c,t as d,A as r,b as i,j as A,v as m,D as S,F as R,h as L,q as G,p as H,m as J}from"./index-hYmgoq33.js";import{u as K}from"./admin-Dmzb9lmq.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./admin-DqHfCAtS.js";import"./toast-L9_XbE0d.js";const s=p=>(H("data-v-04271e02"),p=p(),J(),p),Q={class:"flex px-12 py-8 gap-14"},W={class:"block text-xl text-gray-700 font-semibold mb-4"},X=s(()=>e("span",{class:"text-slate-400 font-normal text-[14px]"},"Admin id raqami: ",-1)),Y={class:"text-2xl text-gray-700 font-semibold mb-7"},Z={class:"mb-7 font-semibold text-[20px]"},$={class:"mb-7"},ee=s(()=>e("span",{class:"text-slate-400 text-[14px]"},"Manzil: ",-1)),te={class:"mb-7"},se=s(()=>e("span",{class:"text-slate-400 text-[14px]"},"Email: ",-1)),ae={class:"mb-7"},ne=s(()=>e("span",{class:"text-slate-400 text-[14px]"},"Faol: ",-1)),le={class:"mb-7"},oe=s(()=>e("span",{class:"text-slate-400 text-[14px]"},"Super Admin: ",-1)),ie=s(()=>e("i",{class:"bx bx-trash"},null,-1)),de=[ie],re=s(()=>e("i",{class:"bx bx-edit-alt text-primary"},null,-1)),ce=[re],pe={class:"modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"},ue=s(()=>e("div",{class:"mb-3 text-2xl"},null,-1)),me={class:"modal h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"},xe={class:"modal_width mx-auto text-center bg-slate-400 rounded-lg"},_e=s(()=>e("span",{class:"font-[700] text_size"},"Adminni tahrirlash: ",-1)),be=s(()=>e("br",null,null,-1)),he=s(()=>e("br",null,null,-1)),fe={class:"for_margin add_input inline-block bg-white text-black mt-2 border-black border-[1px] p-[1px] rounded-md"},ve=s(()=>e("label",{for:"is_active"},"Faolligi",-1)),ge={class:"add_input mt-2 inline-block bg-white text-black border-black border-[1px] p-[1px] rounded-md"},ke=s(()=>e("label",{for:"is_superAdmin"},"Super Adminligi",-1)),ye=s(()=>e("br",null,null,-1)),we=E({__name:"SingleAdmin",setup(p){const{route:x,updateAdmin:C,deleteAdmin:U,fetchOneAdmin:V,singleAdmin:o}=K(),_=w(!1);async function M(){_.value=!0}async function q(){_.value=!1}async function B(){const a=String(x.params.id);await U(a)}const u=w(!1),t=F({id:String(x.params.id),full_name:"",phone:"",address:"",email:"",password:"",is_active:!0,is_superAdmin:!1});async function D(){const a=o.value;t.id=a.id,t.full_name=a.full_name,t.phone=a.phone,t.address=a.address,t.email=a.email,t.password=a.password,t.is_active=a.is_active,t.is_superAdmin=a.is_superAdmin,u.value=!0}async function I(){u.value=!1}const j=async()=>{L.push({name:G.RT_ADMINS})};async function z(){await C(t),u.value=!1}return T(async()=>{const a=String(x.params.id);await V(a)}),(a,n)=>{var b,h,f,v,g,k,y;return N(),O(R,null,[e("button",{onClick:j,class:"py-2 px-4 rounded-lg bg-orange mx-3 my-3 text-white hover:bg-[#3BB77E]"}," Orqaga "),e("div",Q,[e("div",null,[e("div",W,[X,c(" "+d((b=r(o))==null?void 0:b.id),1)]),e("div",Y,d((h=r(o))==null?void 0:h.full_name),1),e("div",Z,d((f=r(o))==null?void 0:f.phone),1),e("div",$,[ee,c(" "+d((v=r(o))==null?void 0:v.address),1)]),e("div",te,[se,c(" "+d((g=r(o))==null?void 0:g.email),1)]),e("div",ae,[ne,c(" "+d((k=r(o))==null?void 0:k.is_active),1)]),e("div",le,[oe,c(" "+d((y=r(o))==null?void 0:y.is_superAdmin),1)]),e("div",{class:"flex gap-4"},[e("button",{onClick:M,class:"text-3xl text-red-500 text-right"},de),e("button",{onClick:D,class:"text-3xl"},ce)])])]),i(e("div",pe,[ue,e("div",{class:"flex justify-around gap-2"},[e("button",{onClick:q,class:"bg-slate-400 p-2 rounded-xl text-lg"}," Bekor qilish "),e("button",{onClick:B,class:"bg-red-500 p-2 rounded-xl text-lg"}," O'chirish ")])],512),[[A,_.value]]),i(e("div",me,[e("div",xe,[e("div",{class:"flex justify-between"},[_e,e("i",{onClick:I,class:"bx bx-x bx-black bx-md hover:bg-red-500 hover:text-white rounded-full h-[36px]"})]),i(e("input",{class:"for_margin add_input border-black border-[1px] p-3 outline-none mt-5 rounded-md text-black text-xs","onUpdate:modelValue":n[0]||(n[0]=l=>t.full_name=l),type:"text",placeholder:"Ism Sharif",name:"",id:""},null,512),[[m,t.full_name]]),i(e("input",{class:"add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":n[1]||(n[1]=l=>t.phone=l),type:"text",placeholder:"Telefon raqam",name:"",id:""},null,512),[[m,t.phone]]),be,i(e("input",{class:"for_margin add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":n[2]||(n[2]=l=>t.address=l),type:"text",placeholder:"Manzil",name:"",id:""},null,512),[[m,t.address]]),i(e("input",{class:"add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":n[3]||(n[3]=l=>t.email=l),type:"text",placeholder:"Email",name:"",id:""},null,512),[[m,t.email]]),he,e("div",fe,[ve,i(e("input",{class:"add_input","onUpdate:modelValue":n[4]||(n[4]=l=>t.is_active=l),type:"checkbox",name:"value",id:"is_active"},null,512),[[S,t.is_active]])]),e("div",ge,[ke,i(e("input",{class:"for_margin add_input","onUpdate:modelValue":n[5]||(n[5]=l=>t.is_superAdmin=l),type:"checkbox",name:"",id:"is_superAdmin"},null,512),[[S,t.is_superAdmin]])]),ye,e("button",{class:"p-3 border-[1px] rounded-md add_btn text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out",onClick:z,type:"submit"}," Saqlash ")])],512),[[A,u.value]])],64)}}}),Me=P(we,[["__scopeId","data-v-04271e02"]]);export{Me as default};
