<script setup lang="ts">
import { reactive } from "vue";
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import BIcon from "./components/BIcon.vue";
import icons from "./assets/icons";

const localIcons = reactive(icons);

const drop = (event) => {
  console.log(event);
};
</script>

<template>
  <header class="header">
    <h1>Explore Learning Test</h1>
  </header>
  <Draggable class="wrapper" :list="localIcons" @change="drop">
    <template v-for="icon in localIcons" :key="icon.id">
      <BIcon :icon="icon" :class="icon.elementState" />
    </template>
  </Draggable>
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
