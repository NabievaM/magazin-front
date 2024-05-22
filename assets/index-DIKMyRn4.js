import{a as e,e as a,s as i,b as u}from"./toast-L9_XbE0d.js";import{E as d,h as s,q as c}from"./index-hYmgoq33.js";const o="http://5.182.26.68:3000/api";function l(){return e.get(o+"/product/all ")}function h(t){return e({url:o+"/product/create",method:"post",data:t,headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}})}function f(t){return e.get(o+`/product/search?name=${t==null?void 0:t.name}`)}function g(t){return e.get(o+`/product/${t}`)}function p(t){return e.put(o+`/product/${t.id}`,t)}function m(t){return e({url:`${o}/product/file/${t.id}`,method:"put",data:t,headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}})}function y(t){return e.delete(o+`/product/${t}`)}const k=d("product",{state:()=>({products:[],searchProductName:[],singleProduct:{},loading:!1,meta:{total:0}}),actions:{async addProduct(t){var r;this.loading=!0;try{if((await h(t)).status!==201){a("Mahsulot yaratishda xatolik! Qayta urinib ko'ring");return}this.loading=!1,i("Mahsulot qo'shildi!"),s.push({name:c.RT_PRODUCTS})}catch(n){if(u.isAxiosError(n)){if(((r=n.response)==null?void 0:r.status)===400){a("To'liq kiriting!");return}a("Xatolik yuz berdi!")}}},async fetchAllProduct(){this.loading=!0;try{const t=await l();if(t.status!==200)return;this.loading=!1,this.products=t==null?void 0:t.data}catch(t){t instanceof Error&&a("Xatolik yuz berdi!")}},async fetchOneProduct(t){this.loading=!0;try{const r=await g(t);if(r.status!==200)return;this.loading=!1,this.singleProduct=r==null?void 0:r.data}catch(r){if(r instanceof Error){a("Xatolik yuz berdi!");return}}},async updateProduct(t){this.loading=!0;try{if((await p(t)).status!==200){a("Mahsulot tahrirlanmadi!");return}this.loading=!1,i("Mahsulot tahrirlandi!"),s.go(0)}catch(r){if(r instanceof Error){a(r.message);return}}},async updateProductImage(t){this.loading=!0;try{if((await m(t)).status!==200){a("Rasm tahrirlanmadi!");return}this.loading=!1,i("Rasm tahrirlandi!"),s.go(0)}catch(r){if(r instanceof Error){a(r.message);return}}},async SearchProductByName(t){this.loading=!0;try{const r=await f(t);if(r.status!==200)return;this.loading=!1,this.searchProductName=r==null?void 0:r.data}catch(r){if(r instanceof Error){a(r.message);return}}},async deleteProduct(t){this.loading=!0;try{if((await y(t)).status!==200){a("Mahsulot o'chirilmadi!");return}this.loading=!1,i("Mahsulot o'chirildi!"),s.push({name:c.RT_PRODUCTS})}catch(r){if(r instanceof Error){a("Xatolik yuz berdi!");return}}}}});export{k as u};
