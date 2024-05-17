<template>
  <main>
    <component :is="route.meta.layoutComponent">
      <slot />
    </component>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped></style>
