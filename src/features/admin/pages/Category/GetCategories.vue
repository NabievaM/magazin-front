<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else-if="categorylist.length !== 0">
    <table class="w-full text-center">
      <tr class="border-y-[1px]">
        <th class="py-2 fontsize">ID</th>
        <th class="fontsize">Nomi</th>
      </tr>
      <tr class="border-y-[1px]" v-for="(category, index) in categorylist" :key="index">
        <td class="py-2 text-[15px]">{{ category.id }}</td>
        <td class="text-[15px]">{{ category.name }}</td>
        <td class="text-2xl flex gap-4">
          <button @click="edited(category)">
            <i class="bx bx-edit text-primary"></i>
          </button>
          <button @click="showDeleteModal(category)">
            <i class="bx bx-trash text-red-500"></i>
          </button>
        </td>
      </tr>
      <div v-show="showDelete"
        class="modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white">
        <div class="mb-3 text-2xl">
          <b>{{ selectedCategoryName }} </b> kategoriyasini o'chirish:
        </div>
        <div class="flex justify-around gap-2">
          <button @click="canceled" class="bg-slate-400 p-2 rounded-xl text-lg">
            Bekor qilish
          </button>

          <button @click="() => deleted(selectedCategoryId)" class="bg-red-500 p-2 rounded-xl text-lg">
            O'chirish
          </button>
        </div>
      </div>

      <div v-show="showUpdate"
        class="modal h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white">
        <div class="modal_width bg-slate-400 rounded-lg py-3 px-3">
          <div class="flex justify-between w-[100%]">
            <div class="text-2xl mx-auto w-[100%]">
              <div class="flex justify-between">
                <p class="text_size">Tahrirlash :</p>
                <i @click="canceledUpdate"
                  class="bx bx-x bx-black bx-md h-[37px] hover:bg-red-500 hover:text-white rounded-full"></i>
              </div>
              <div>
                <input class="add_input p-1 outline-none rounded-lg mt-2 w-[100%] text-lg text-black" v-model="selectedCategoryName"
                  type="text" name="name" id="" />
              </div>
            </div>
          </div>
          <button @click="saved"
            class="add_btn p-2 bg-orange mt-3 w-[100px] rounded-lg text-xl hover:bg-primary hover:text-white">
            Saqlash
          </button>
        </div>
      </div>
    </table>
  </div>
  <div v-else>
    <Empty />
  </div>
</template>

<script setup lang="ts">
import { useCategory } from "@/features/admin/composables/category";
import Loading from "@/components/loading.vue";
import Empty from "@/components/empty.vue";
import { ref, reactive } from "vue";
const { loading, categorylist, deleteCategory, updateCategory } = useCategory();

async function deleted(id: any) {
  await deleteCategory(id);
}

const showDelete = ref(false);
const selectedCategoryId = ref(null);
const selectedCategoryName = ref("");

async function showDeleteModal(category: any) {
  selectedCategoryId.value = category.id;
  selectedCategoryName.value = category.name;
  showDelete.value = true;
}

async function canceled() {
  showDelete.value = false;
}

const updated = reactive({
  id: ref(null),
  name: "",
});
const showUpdate = ref(false);

async function edited(category: any) {
  selectedCategoryId.value = category.id;
  selectedCategoryName.value = category.name;
  updated.id = category.id;
  updated.name = category.name;
  showUpdate.value = true;
}

async function canceledUpdate() {
  showUpdate.value = false;
}

async function saved() {
  // selectedCategoryId.value = category.id;
  updated.id = selectedCategoryId.value;
  updated.name = selectedCategoryName.value;
  await updateCategory(updated);
}

</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
