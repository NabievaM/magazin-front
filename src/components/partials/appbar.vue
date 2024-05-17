<template>
    <nav class="app-bar w-[100%] bg-slate-300" :class="{ appBar: !permanent }">
        <button @click="onSidebarToggle" class="toggle-button">
            <i class="bx bx-menu px-7"></i>
        </button>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const permanent = ref<boolean>(false);

const emit = defineEmits<{
    (e: "toggleSidebar", permanent: boolean): void;
}>();

function onSidebarToggle(): void {
    permanent.value = !permanent.value;
    emit("toggleSidebar", permanent.value);
}
</script>

<style scoped>
.app-bar {
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.toggle-button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>
