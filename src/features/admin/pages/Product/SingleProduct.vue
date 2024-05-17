<template>
  <button
    @click="backList"
    class="py-2 px-4 rounded-lg bg-orange mx-3 my-3 text-white hover:bg-[#3BB77E]"
  >
    Orqaga
  </button>
  <div class="admin_singleProduct">
    <div class="admin_singleProduct_img">
      <img :src="'http://localhost:3000/' + singleProduct?.image" alt="" />
      <div
        @click="editedImage"
        class="text-slate-400 cursor-pointer text-lg text-center mt-3"
      >
        Rasmni tahrirlash
        <i class="bx bx-edit-alt"></i>
      </div>
    </div>

    <div class="admin_singleProduct_desc">
      <div class="block text-xl text-gray-700 font-semibold mb-4">
        <span class="text-slate-400 font-normal text-[14px]"
          >Mahsulot id raqami:
        </span>
        {{ singleProduct?.id }}
      </div>

      <div class="text-2xl text-gray-700 font-semibold mb-7">
        {{ singleProduct?.name }}
      </div>

      <div
        class="flex gap-2 items-baseline font-semibold mb-7"
        v-if="singleProduct?.reduced_price"
      >
        <span class="text-slate-400 font-normal text-[14px]">Narx: </span>
        <div>
          {{ singleProduct?.reduced_price }}
        </div>
        <s class="text-slate-300 text-[14px]">
          {{ singleProduct?.price }}
        </s>
        <div class="bg-yellow px-1 rounded-md ml-12">Aksiya</div>
      </div>

      <div class="font-semibold mb-7" v-else>
        <span class="text-slate-400 font-normal text-[14px]">Narx: </span>
        {{ singleProduct?.price }}
      </div>

      <div class="mb-7 font-semibold text-[20px]">
        {{ singleProduct?.description }}
      </div>

      <div class="mb-7">
        <span class="text-slate-400 text-[14px]">Sotuvda mavjud: </span>
        {{ singleProduct?.value }}
      </div>

      <div class="mb-7">
        <span class="text-slate-400 text-[14px]">Kategoriya: </span>
        {{ singleProduct?.category?.name }}
      </div>

      <div class="flex gap-4">
        <button
          @click="showDeleteModal"
          class="text-3xl text-red-500 text-right"
        >
          <i class="bx bx-trash"></i>
        </button>

        <button @click="edited" class="text-3xl">
          <i class="bx bx-edit-alt text-primary"></i>
        </button>
      </div>
    </div>
  </div>

  <div
    v-show="showDelete"
    class="modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"
  >
    <div class="mb-3 text-2xl"></div>
    <div class="flex justify-around gap-2">
      <button @click="canceled" class="bg-slate-400 p-2 rounded-xl text-lg">
        Bekor qilish
      </button>

      <button @click="deleted" class="bg-red-500 p-2 rounded-xl text-lg">
        O'chirish
      </button>
    </div>
  </div>

  <div
    v-show="showUpdate"
    class="modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"
  >
    <div
      class="modal_width mx-auto text-center px-10 py-8 bg-slate-400 rounded-lg"
    >
      <div class="flex justify-between">
        <span class="font-[700] text_size">Mahsulotni tahrirlash: </span>
        <i
          @click="canceledUpdate"
          class="bx bx-x bx-black bx-md hover:bg-red-500 hover:text-white rounded-full h-[36px]"
        ></i>
      </div>
      <input
        class="for_margin add_input border-black border-[1px] p-3 outline-none mt-5 rounded-md text-black text-xs"
        v-model="updated.name"
        type="text"
        placeholder="Mahsulot nomi"
        name="name"
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.price"
        type="text"
        placeholder="Mahsulot narxi"
        name="price"
        id=""
      />
      <br />
      <input
        class="add_input for_margin border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.reduced_price"
        type="text"
        placeholder="Mahsulotni arzonlashtirilgan narxi"
        name="reduced_price"
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.description"
        type="text"
        placeholder="Mahsulot haqida batafsil"
        name="description"
        id=""
      />
      <br />
      <input
        class="add_input for_margin border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.value"
        type="text"
        placeholder="Mahsulot qiymati"
        name="value"
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.category_id"
        type="number"
        placeholder="Mahsulot kategoriyasini id raqami"
        name="category_id"
        id=""
      />
      <br />
      <button
        class="add_btn p-3 border-[1px] rounded-md w-[300px] text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out"
        @click="saved"
        type="submit"
      >
        Saqlash
      </button>
    </div>
  </div>

  <div
    v-show="showUpdateImage"
    class="modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"
  >
    <div class="mx-auto text-center px-5 py-3 bg-slate-400 rounded-md">
      <div class="flex justify-between mb-3">
        <span class="font-[700] text-3xl">Rasmni tahrirlash: </span>
        <i
          @click="canceledUpdateImage"
          class="bx bx-x bx-black bx-md hover:bg-red-500 hover:text-white rounded-full h-[36px]"
        ></i>
      </div>
      <input
        @change="handleUploadFile"
        class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        type="file"
        ref="file"
        placeholder="Mahsulot rasmi"
        accept=".png, .jpg, .jpeg"
        name=""
        id="imageUpload"
      />
      <br />
      <button
        class="p-3 border-[1px] rounded-md w-[300px] text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out"
        @click="savedImage"
        type="submit"
      >
        Saqlash
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from "@/features/products/composables/product";
import { onMounted, ref, reactive } from "vue";
import { adminRoute } from "@/constants/routes/admin";
import router from "@/router";
const {
  singleProduct,
  fetchOneProduct,
  route,
  deleteProduct,
  updateProduct,
  updateProductImage,
} = useProduct();

const showDelete = ref(false);
async function showDeleteModal() {
  showDelete.value = true;
}

async function canceled() {
  showDelete.value = false;
}

async function deleted() {
  const id = String(route.params.id);
  await deleteProduct(id);
}

const showUpdate = ref(false);
const showUpdateImage = ref(false);

const updated = reactive({
  id: String(route.params.id),
  name: "",
  price: "",
  reduced_price: "",
  qr_code: "",
  description: "",
  value: "",
  category_id: "",
});

const updateImage = reactive({
  id: String(route.params.id),
  image: "",
});

async function edited() {
  const product = singleProduct.value;
  updated.id = product.id;
  updated.name = product.name;
  updated.price = product.price;
  updated.reduced_price = product.reduced_price;
  updated.qr_code = product.qr_code;
  updated.description = product.description;
  updated.value = product.value;
  updated.category_id = product.category_id;

  showUpdate.value = true;
}

async function canceledUpdate() {
  showUpdate.value = false;
}

const backList = async () => {
  router.push({ name: adminRoute.RT_PRODUCTS });
};

async function saved() {
  await updateProduct(updated);
  showUpdate.value = false;
}

async function savedImage() {
  await updateProductImage(updateImage);
  showUpdateImage.value = false;
}

async function editedImage() {
  showUpdateImage.value = true;
}

async function canceledUpdateImage() {
  showUpdateImage.value = false;
}

const handleUploadFile = async (event: any) => {
  updateImage.image = event?.target.files[0];
};

onMounted(async () => {
  const id = String(route.params.id);
  await fetchOneProduct(id);
});
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
