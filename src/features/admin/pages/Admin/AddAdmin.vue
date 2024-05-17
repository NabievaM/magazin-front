<template>
  <div class="block m-4">
    <button class="bg-orange px-4 py-2 text-white rounded-lg" @click="push">
      Orqaga
    </button>
  </div>
  <div class="justify-center items-center flex">
    <div class="mx-auto text-center px-10 py-8">
      <span class="text_size font-[700]">Admin qo'shish</span><br />
      <input
        class="for_margin add_input border-black border-[1px] p-3 outline-none mt-5 rounded-md text-black text-xs"
        v-model="admin.full_name"
        type="text"
        placeholder="Ism Sharif"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="admin.phone"
        type="tel"
        @input="formatPhoneNumber"
        @focus="formatPhoneNumber"
        placeholder="+998(__)___-__-__"
        id="phone"
        maxlength="17"
      />
      <br />
      <input
        class="for_margin add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="admin.address"
        type="text"
        placeholder="Manzil"
        name=""
        id=""
      />
      <input
        class="add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="admin.email"
        type="text"
        placeholder="Email"
        name=""
        id=""
      />
      <br />
      <input
        class="for_margin add_input border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black text-xs"
        v-model="admin.password"
        type="text"
        placeholder="Parol"
        name=""
        id=""
      />
      <div
        class="add_input inline-block border-black border-[1px] p-[8px] rounded-md mt-2"
      >
        <label for="is_superAdmin">Super admin</label>
        <input
          class="ml-3"
          v-model="admin.is_superAdmin"
          placeholder="Admin"
          type="checkbox"
          name=""
          id="is_superAdmin"
        />
      </div>
      <br />
      <button
        class="add_btn p-3 border-[1px] rounded-md w-[300px] text-md mt-5 bg-orange hover:bg-primary duration-500 ease-in-out"
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
import { adminRoute } from "@/constants/routes/admin";
import { errorToast } from "@/utils/toast";
import { useAdmin } from "@/features/admin/composables/admin";
const { signup } = useAdmin();

const { router } = useAdmin();

function push() {
  router.push({ name: adminRoute.RT_ADMINS });
}

const admin = reactive({
  full_name: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  is_superAdmin: false,
});

async function handleClick() {
  if (
    !admin.full_name.length &&
    !admin.phone.length &&
    !admin.address.length &&
    !admin.email.length &&
    !admin.password.length
  ) {
    errorToast("To`liq kiriting!");
    return;
  }

  let formData = new FormData();

  formData.append("full_name", admin.full_name);
  formData.append("phone", admin.phone);
  formData.append("address", admin.address);
  formData.append("email", admin.email);
  formData.append("password", admin.password);

  await signup(admin);

  admin.full_name = "";
  admin.phone = "";
  admin.address = "";
  admin.email = "";
  admin.password = "";
  admin.is_superAdmin = false;
}

const formatPhoneNumber = (event: Event) => {
  let phoneNumber: string = (event.target as HTMLInputElement).value;

  // Faqat raqamlarni qabul qilish uchun chiqarib olish
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // Bosh joylarni to'ldirish
  if (phoneNumber.length < 3) {
    phoneNumber = "+998";
  } else if (phoneNumber.length < 5) {
    phoneNumber = "+998(" + phoneNumber.substring(3);
  } else if (phoneNumber.length < 8) {
    phoneNumber =
      "+998(" + phoneNumber.substring(3, 5) + ")" + phoneNumber.substring(5);
  } else if (phoneNumber.length < 11) {
    phoneNumber =
      "+998(" +
      phoneNumber.substring(3, 5) +
      ")" +
      phoneNumber.substring(5, 8) +
      "-" +
      phoneNumber.substring(8);
  } else if (phoneNumber.length < 14) {
    phoneNumber =
      "+998(" +
      phoneNumber.substring(3, 5) +
      ")" +
      phoneNumber.substring(5, 8) +
      "-" +
      phoneNumber.substring(8, 10) +
      "-" +
      phoneNumber.substring(10);
  }

  // Formatlangan qiymatni inputga o'rnatish
  (event.target as HTMLInputElement).value = phoneNumber;

  // Buyurtma obyektiga formatlangan telefon raqamini joylash
  admin.phone = phoneNumber;
};
</script>

<style scoped></style>
