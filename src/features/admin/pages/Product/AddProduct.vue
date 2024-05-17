<template>
  <div class="block m-4">
    <button class="bg-orange px-4 py-2 text-white rounded-lg" @click="push">
      Orqaga
    </button>
  </div>
  <div class="justify-center items-center flex">
    <div class="mx-auto text-center px-10 py-8">
      <span class="font-[700] text_size">Mahsulot qo'shish</span><br />
      <input
        class="add_input for_margin border-black border-[1px] p-3 outline-none mt-5 rounded-md text-black text-xs"
        v-model="product.name"
        type="text"
        placeholder="Mahsulot nomi"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="product.price"
        type="text"
        placeholder="Mahsulot narxi"
        name=""
        id=""
      />
      <br />
      <input
        class="add_input for_margin border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="product.reduced_price"
        type="text"
        placeholder="Mahsulotni arzonlashtirilgan narxi"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="product.description"
        type="text"
        placeholder="Mahsulot haqida batafsil"
        name=""
        id=""
      />
      <br/>
      <input
        class="add_input for_margin border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="product.value"
        type="text"
        placeholder="Mahsulot qiymati"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="product.category_id"
        type="text"
        placeholder="Mahsulot kategoriyasini id raqami"
        name=""
        id=""
      />
      <br />
      <input
        @change="handleUploadFile"
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        type="file"
        ref="file"
        placeholder="Mahsulot rasmi"
        accept=".png, .jpg, .jpeg"
        name=""
        id="imageUpload"
      />
      <br />
      <button
        class="add_btn p-3 border-[1px] rounded-md text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out"
        @click.prevent="handleClick"
        type="submit"
      >
        {{ "Qo`shish" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useAdmin } from "@/features/admin/composables/admin";
import { adminRoute } from "@/constants/routes/admin";
import { errorToast } from "@/utils/toast";
import { useProduct } from "@/features/products/composables/product";
const { addProduct } = useProduct();

const { router } = useAdmin();

function push() {
  router.push({ name: adminRoute.RT_PRODUCTS });
}

const product = reactive({
  name: "",
  price: "",
  reduced_price: "",
  description: "",
  value: "",
  image: "",
  category_id: "",
});

async function handleClick() {
  if (
    !product.name.length &&
    !product.price.length &&
    !product.reduced_price.length &&
    !product.description.length &&
    !product.value.length &&
    !product.category_id.length
  ) {
    errorToast("To`liq kiriting!");
    return;
  }
  let formData = new FormData();

  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("reduced_price", product.reduced_price);
  formData.append("description", product.description);
  formData.append("value", product.value);
  formData.append("category_id", product.category_id);

  await addProduct(product);

  product.name = "";
  product.image = "";
  product.price = "";
  product.reduced_price = "";
  product.description = "";
  product.value = "";
  product.category_id = "";
}

const handleUploadFile = async (event: any) => {
  product.image = event?.target.files[0];
};
</script>

<style scoped></style>
