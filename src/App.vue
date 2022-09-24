<script setup lang="ts">
import { ref } from "vue";
import BIcon from "./components/BIcon.vue";
import icons from "./assets/icons";

const localIcons = ref(icons);
const apps = ref([]);

const initDragEvent = (id: string, index: number) => {
  const element = apps.value[index];
  const activeIconIndex = localIcons.value.findIndex((icon) => icon.id === id);
  if (!activeIconIndex) return;
  localIcons.value[activeIconIndex].draggable = true;
  console.log(localIcons.value);
};
</script>

<template>
  <header class="header">
    <h1>Explore Learning Test</h1>
  </header>
  <main class="wrapper">
    <template v-for="icon in icons" :key="icon.id">
      <BIcon :icon="icon" />
    </template>
  </main>
</template>

<style lang="scss" scoped>
.header {
  text-align: center;
  margin: 1rem 0 2rem;

  @include md {
    margin: 1rem 0 3rem;
  }
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;

  @include md {
    grid-template-columns: repeat(4, 1fr);
  }

  @include lg {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
