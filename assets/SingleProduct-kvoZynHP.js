import{d as X,r as h,C as V,x as Y,o as f,c as g,a as e,A as n,g as u,t as c,b as i,j as v,v as r,F as Z,h as $,q as ee,p as te,m as se}from"./index-LtyIX4JV.js";import{u as ae}from"./product-C02NyAOF.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Cx90Xcev.js";import"./toast-TE3UIvq8.js";const a=p=>(te("data-v-e0718149"),p=p(),se(),p),le={class:"admin_singleProduct"},de={class:"admin_singleProduct_img"},ne=["src"],ie=a(()=>e("i",{class:"bx bx-edit-alt"},null,-1)),ce={class:"admin_singleProduct_desc"},re={class:"block text-xl text-gray-700 font-semibold mb-4"},ue=a(()=>e("span",{class:"text-slate-400 font-normal text-[14px]"},"Mahsulot id raqami: ",-1)),pe={class:"text-2xl text-gray-700 font-semibold mb-7"},xe={key:0,class:"flex gap-2 items-baseline font-semibold mb-7"},me=a(()=>e("span",{class:"text-slate-400 font-normal text-[14px]"},"Narx: ",-1)),_e={class:"text-slate-300 text-[14px]"},be=a(()=>e("div",{class:"bg-yellow px-1 rounded-md ml-12"},"Aksiya",-1)),he={key:1,class:"font-semibold mb-7"},fe=a(()=>e("span",{class:"text-slate-400 font-normal text-[14px]"},"Narx: ",-1)),ge={class:"mb-7 font-semibold text-[20px]"},ve={class:"mb-7"},ye=a(()=>e("span",{class:"text-slate-400 text-[14px]"},"Sotuvda mavjud: ",-1)),ke={class:"mb-7"},we=a(()=>e("span",{class:"text-slate-400 text-[14px]"},"Kategoriya: ",-1)),Se=a(()=>e("i",{class:"bx bx-trash"},null,-1)),Ce=[Se],Ue=a(()=>e("i",{class:"bx bx-edit-alt text-primary"},null,-1)),qe=[Ue],Me={class:"modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"},Pe=a(()=>e("div",{class:"mb-3 text-2xl"},null,-1)),je={class:"modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"},Ie={class:"modal_width mx-auto text-center px-10 py-8 bg-slate-400 rounded-lg"},ze=a(()=>e("span",{class:"font-[700] text_size"},"Mahsulotni tahrirlash: ",-1)),Ve=a(()=>e("br",null,null,-1)),Be=a(()=>e("br",null,null,-1)),De=a(()=>e("br",null,null,-1)),Re={class:"modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"},Ne={class:"mx-auto text-center px-5 py-3 bg-slate-400 rounded-md"},Oe=a(()=>e("span",{class:"font-[700] text-3xl"},"Rasmni tahrirlash: ",-1)),Te=a(()=>e("br",null,null,-1)),Fe=X({__name:"SingleProduct",setup(p){const{singleProduct:l,fetchOneProduct:B,route:x,deleteProduct:D,updateProduct:R,updateProductImage:N}=ae(),O="https://api.uzbekstore.uz/api".replace("uz/api","uz/"),b=h(!1);async function T(){b.value=!0}async function F(){b.value=!1}async function A(){const s=String(x.params.id);await D(s)}const m=h(!1),_=h(!1),t=V({id:String(x.params.id),name:"",price:"",reduced_price:"",qr_code:"",description:"",value:"",category_id:""}),y=V({id:String(x.params.id),image:""});async function E(){const s=l.value;t.id=s.id,t.name=s.name,t.price=s.price,t.reduced_price=s.reduced_price,t.qr_code=s.qr_code,t.description=s.description,t.value=s.value,t.category_id=s.category_id,m.value=!0}async function K(){m.value=!1}const L=async()=>{$.push({name:ee.RT_PRODUCTS})};async function G(){await R(t),m.value=!1}async function H(){await N(y),_.value=!1}async function J(){_.value=!0}async function Q(){_.value=!1}const W=async s=>{y.image=s==null?void 0:s.target.files[0]};return Y(async()=>{const s=String(x.params.id);await B(s)}),(s,o)=>{var k,w,S,C,U,q,M,P,j,I,z;return f(),g(Z,null,[e("button",{onClick:L,class:"py-2 px-4 rounded-lg bg-orange mx-3 my-3 text-white hover:bg-[#3BB77E]"}," Orqaga "),e("div",le,[e("div",de,[e("img",{src:n(O)+((k=n(l))==null?void 0:k.image),alt:""},null,8,ne),e("div",{onClick:J,class:"text-slate-400 cursor-pointer text-lg text-center mt-3"},[u(" Rasmni tahrirlash "),ie])]),e("div",ce,[e("div",re,[ue,u(" "+c((w=n(l))==null?void 0:w.id),1)]),e("div",pe,c((S=n(l))==null?void 0:S.name),1),(C=n(l))!=null&&C.reduced_price?(f(),g("div",xe,[me,e("div",null,c((U=n(l))==null?void 0:U.reduced_price),1),e("s",_e,c((q=n(l))==null?void 0:q.price),1),be])):(f(),g("div",he,[fe,u(" "+c((M=n(l))==null?void 0:M.price),1)])),e("div",ge,c((P=n(l))==null?void 0:P.description),1),e("div",ve,[ye,u(" "+c((j=n(l))==null?void 0:j.value),1)]),e("div",ke,[we,u(" "+c((z=(I=n(l))==null?void 0:I.category)==null?void 0:z.name),1)]),e("div",{class:"flex gap-4"},[e("button",{onClick:T,class:"text-3xl text-red-500 text-right"},Ce),e("button",{onClick:E,class:"text-3xl"},qe)])])]),i(e("div",Me,[Pe,e("div",{class:"flex justify-around gap-2"},[e("button",{onClick:F,class:"bg-slate-400 p-2 rounded-xl text-lg"}," Bekor qilish "),e("button",{onClick:A,class:"bg-red-500 p-2 rounded-xl text-lg"}," O'chirish ")])],512),[[v,b.value]]),i(e("div",je,[e("div",Ie,[e("div",{class:"flex justify-between"},[ze,e("i",{onClick:K,class:"bx bx-x bx-black bx-md hover:bg-red-500 hover:text-white rounded-full h-[36px]"})]),i(e("input",{class:"for_margin add_input border-black border-[1px] p-3 outline-none mt-5 rounded-md text-black text-xs","onUpdate:modelValue":o[0]||(o[0]=d=>t.name=d),type:"text",placeholder:"Mahsulot nomi",name:"name",id:""},null,512),[[r,t.name]]),i(e("input",{class:"add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":o[1]||(o[1]=d=>t.price=d),type:"text",placeholder:"Mahsulot narxi",name:"price",id:""},null,512),[[r,t.price]]),Ve,i(e("input",{class:"add_input for_margin border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":o[2]||(o[2]=d=>t.reduced_price=d),type:"text",placeholder:"Mahsulotni arzonlashtirilgan narxi",name:"reduced_price",id:""},null,512),[[r,t.reduced_price]]),i(e("input",{class:"add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":o[3]||(o[3]=d=>t.description=d),type:"text",placeholder:"Mahsulot haqida batafsil",name:"description",id:""},null,512),[[r,t.description]]),Be,i(e("input",{class:"add_input for_margin border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":o[4]||(o[4]=d=>t.value=d),type:"text",placeholder:"Mahsulot qiymati",name:"value",id:""},null,512),[[r,t.value]]),i(e("input",{class:"add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs","onUpdate:modelValue":o[5]||(o[5]=d=>t.category_id=d),type:"number",placeholder:"Mahsulot kategoriyasini id raqami",name:"category_id",id:""},null,512),[[r,t.category_id]]),De,e("button",{class:"add_btn p-3 border-[1px] rounded-md w-[300px] text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out",onClick:G,type:"submit"}," Saqlash ")])],512),[[v,m.value]]),i(e("div",Re,[e("div",Ne,[e("div",{class:"flex justify-between mb-3"},[Oe,e("i",{onClick:Q,class:"bx bx-x bx-black bx-md hover:bg-red-500 hover:text-white rounded-full h-[36px]"})]),e("input",{onChange:W,class:"border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs",type:"file",ref:"file",placeholder:"Mahsulot rasmi",accept:".png, .jpg, .jpeg",name:"",id:"imageUpload"},null,544),Te,e("button",{class:"p-3 border-[1px] rounded-md w-[300px] text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out",onClick:H,type:"submit"}," Saqlash ")])],512),[[v,_.value]])],64)}}}),He=oe(Fe,[["__scopeId","data-v-e0718149"]]);export{He as default};