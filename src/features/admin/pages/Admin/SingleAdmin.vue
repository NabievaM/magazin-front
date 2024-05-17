<template>
  <button
    @click="backList"
    class="py-2 px-4 rounded-lg bg-orange mx-3 my-3 text-white hover:bg-[#3BB77E]"
  >
    Orqaga
  </button>
  <div class="flex px-12 py-8 gap-14">
    <div>
      <div class="block text-xl text-gray-700 font-semibold mb-4">
        <span class="text-slate-400 font-normal text-[14px]"
          >Admin id raqami:
        </span>
        {{ singleAdmin?.id }}
      </div>

      <div class="text-2xl text-gray-700 font-semibold mb-7">
        {{ singleAdmin?.full_name }}
      </div>

      <div class="mb-7 font-semibold text-[20px]">
        {{ singleAdmin?.phone }}
      </div>

      <div class="mb-7">
        <span class="text-slate-400 text-[14px]">Manzil: </span>
        {{ singleAdmin?.address }}
      </div>

      <div class="mb-7">
        <span class="text-slate-400 text-[14px]">Email: </span>
        {{ singleAdmin?.email }}
      </div>

      <div class="mb-7">
        <span class="text-slate-400 text-[14px]">Faol: </span>
        {{ singleAdmin?.is_active }}
      </div>

      <div class="mb-7">
        <span class="text-slate-400 text-[14px]">Super Admin: </span>
        {{ singleAdmin?.is_superAdmin }}
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
    class="modal h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"
  >
    <div class="modal_width mx-auto text-center bg-slate-400 rounded-lg">
      <div class="flex justify-between">
        <span class="font-[700] text_size">Adminni tahrirlash: </span>
        <i
          @click="canceledUpdate"
          class="bx bx-x bx-black bx-md hover:bg-red-500 hover:text-white rounded-full h-[36px]"
        ></i>
      </div>
      <input
        class="for_margin add_input border-black border-[1px] p-3 outline-none mt-5 rounded-md text-black text-xs"
        v-model="updated.full_name"
        type="text"
        placeholder="Ism Sharif"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.phone"
        type="text"
        placeholder="Telefon raqam"
        name=""
        id=""
      />
      <br />
      <input
        class="for_margin add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.address"
        type="text"
        placeholder="Manzil"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="updated.email"
        type="text"
        placeholder="Email"
        name=""
        id=""
      />
      <br />
      <div
        class="for_margin add_input inline-block bg-white text-black mt-2 border-black border-[1px] p-[1px] rounded-md"
      >
        <label for="is_active">Faolligi</label>
        <input
          class="add_input"
          v-model="updated.is_active"
          type="checkbox"
          name="value"
          id="is_active"
        />
      </div>
      <div
        class="add_input mt-2 inline-block bg-white text-black border-black border-[1px] p-[1px] rounded-md"
      >
        <label for="is_superAdmin">Super Adminligi</label>
        <input
          class="for_margin add_input"
          v-model="updated.is_superAdmin"
          type="checkbox"
          name=""
          id="is_superAdmin"
        />
      </div>
      <br />
      <button
        class="p-3 border-[1px] rounded-md add_btn text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out"
        @click="saved"
        type="submit"
      >
        Saqlash
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAdmin } from "@/features/admin/composables/admin";
import { onMounted, ref, reactive } from "vue";
import { adminRoute } from "@/constants/routes/admin";
import router from "@/router";
const { route, updateAdmin, deleteAdmin, fetchOneAdmin, singleAdmin } =
  useAdmin();

const showDelete = ref(false);
async function showDeleteModal() {
  showDelete.value = true;
}

async function canceled() {
  showDelete.value = false;
}

async function deleted() {
  const id = String(route.params.id);
  await deleteAdmin(id);
}

const showUpdate = ref(false);

const updated = reactive({
  id: String(route.params.id),
  full_name: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  is_active: true,
  is_superAdmin: false,
});

async function edited() {
  const admin = singleAdmin.value;
  updated.id = admin.id;
  updated.full_name = admin.full_name;
  updated.phone = admin.phone;
  updated.address = admin.address;
  updated.email = admin.email;
  updated.password = admin.password;
  updated.is_active = admin.is_active;
  updated.is_superAdmin = admin.is_superAdmin;

  showUpdate.value = true;
}

async function canceledUpdate() {
  showUpdate.value = false;
}

const backList = async () => {
  router.push({ name: adminRoute.RT_ADMINS });
};

async function saved() {
  await updateAdmin(updated);
  showUpdate.value = false;
}

onMounted(async () => {
  const id = String(route.params.id);
  await fetchOneAdmin(id);
});
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
