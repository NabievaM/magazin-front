<template>
  <div class="order bg-primary py-5 h-[300px] rounded-lg mt-20">
    <div class="mb-3 text-2xl text-white font-semibold">Buyurtma berish</div>
    <div class="mb-3">
      <label class="block mb-1 text-white text-[14px]" for="name"
        >To'liq ism sharif</label
      >
      <input
        class="order_input p-2 rounded-md focus:outline-none"
        v-model="order.full_name"
        type="text"
        placeholder="To'liq ism sharif"
        id="name"
      />
    </div>
    <div class="mb-3">
      <label class="block mb-1 text-[14px] text-white" for="phone"
        >Telefon raqam</label
      >
      <input
        class="order_input p-2 rounded-md focus:outline-none"
        v-model="order.phone"
        type="tel"
        @input="formatPhoneNumber"
        @focus="formatPhoneNumber"
        id="phone"
        maxlength="17"
        placeholder="+998(__)___-__-__"
      />
    </div>
    <div>
      <input v-model="order.product_id" type="hidden" />
    </div>
    <div
      class="p-2 bg-emerald-700 w-[130px] rounded-md text-white hover:bg-emerald-900 duration-500 ease-in-out"
    >
      <v-button @click.prevent="handleClick" class="mx-auto"
        >Tasdiqlash</v-button
      >
    </div>
  </div>

  <div class="single_product gap-14">
    <div class="singleProduct_img border">
      <img
        class="mx-auto"
        :src="image_url + singleProduct?.image"
        alt=""
      />
    </div>

    <div class="singleProduct_desc">
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
    </div>
  </div>

  <!-- Modal uchun -->
  <div
    v-if="orderPlaced"
    class="fixed top-0 bg-white left-0 w-full h-full flex items-center justify-center z-50"
  >
    <div class="absolute bg-white p-6 rounded-lg">
      <p class="text text-center text-5xl font-semibold text-gray-800 mb-4">
        Raxmat! Sizning buyurtmangiz qabul qilindi!
      </p>
      <p class="desc text-center mt-5 text-xl text-slate-800">
        Tez orada menejerlarimiz ko'rsatilgan ma'lumotlari yordamida siz bilan
        bog'lanishadi!
      </p>
      <div class="flex justify-center mt-5">
        <router-link
          class="bg-primary text-white text-center px-4 py-2 rounded-md hover:bg-emerald-600"
          to="/"
          >Asosiy sahifaga qaytish</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useProduct } from "@/features/products/composables/product";
import { addOrderObj } from "@/modules/interfaces";
import { useOrder } from "@/features/admin/composables/order";
import VButton from "@/components/base/button.vue";
import { errorToast } from "@/utils/toast";
const image_url = import.meta.env.VITE_BASE_URL.replace('uz/api', 'uz/');


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
  order.phone = phoneNumber;
};

const orderPlaced = ref(false);

const { singleProduct, fetchOneProduct, route } = useProduct();
const { addOrder } = useOrder();

const order = reactive<addOrderObj>({
  full_name: "",
  phone: "",
  product_id: "",
});

async function handleClick() {
  if (!order.full_name.length || order.phone.length !== 17) {
    errorToast("Malumotlaringizi to'liq kiriting");
    return;
  }

  await addOrder(order);

  order.full_name = "";
  order.phone = "";

  orderPlaced.value = true;
}

onMounted(async () => {
  const id = String(route.params.id);
  await fetchOneProduct(id);

  if (singleProduct.value) {
    order.product_id = singleProduct.value.id;
  }
});
</script>

<style scoped></style>
