<template>
    <div class="block m-4">
        <button class="bg-orange hover:bg-primary px-4 py-2 text-white rounded-lg" @click="push">Orqaga</button>
    </div>
    <div class="justify-center  items-center flex ">
        <div class="mx-auto  text-center px-10 py-8">
            <span class="font-[700] text_size">Kategoriya qo'shish</span><br />
            <input class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
                v-model="category.name" type="text" placeholder="Kategoriya nomi" name="" id="" /> <br>
            <button
                class="add_btn p-3 border-[1px] rounded-md w-[300px] text-md mt-2 bg-orange hover:bg-primary duration-500 ease-in-out"
                @click.prevent="handleClick" type="submit">
                {{ 'Qo`shish' }}
            </button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue';
import { useAdmin } from '@/features/admin/composables/admin';
import { adminRoute } from '@/constants/routes/admin';

import { errorToast } from '@/utils/toast';
import { useCategory } from '@/features/admin/composables/category';
const { addCategory } = useCategory();

const { router } = useAdmin();

function push() {
    router.push({ name: adminRoute.RT_CATEGORY });
}

const category = reactive({
    name: '',
});

async function handleClick() {

    if (
        !category.name.length
    ) {
        errorToast('To`liq kiriting');
        return
    }
    let formData = new FormData();

    formData.append('name', category.name)

    await addCategory(formData);

    category.name = '';
};
</script>
  
<style scoped></style>
  