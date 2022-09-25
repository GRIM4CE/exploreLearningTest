<script setup lang="ts">
import { reactive, ref } from "vue";
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import BIcon from "./components/BIcon.vue";
import icons from "./assets/icons";

const localIcons = reactive(icons);

const getIconIndex = (id: string) =>
  localIcons.findIndex((icon) => icon.id === id);

const iconSelected = (event: MouseEvent | TouchEvent, id: string) => {
  const icon = localIcons[getIconIndex(id)];
  icon.elementState = "selected";
  setTimeout(() => {
    icon.elementState = "drag";
  }, 500);
};

const deselectIcons = () => {
  localIcons.forEach((icon) => {
    icon.elementState = "";
  });
};
</script>

<template>
  <header class="header">
    <h1>Explore Learning Test</h1>
  </header>
  <Draggable
    class="wrapper"
    :list="localIcons"
    @end="deselectIcons()"
    @mouseup="deselectIcons()"
    @touchend="deselectIcons()"
    delay="500"
  >
    <div v-for="icon in localIcons" :key="icon.id">
      <BIcon
        @mousedown="iconSelected($event, icon.id)"
        @touchstart="iconSelected($event, icon.id)"
        :icon="icon"
        :class="icon.elementState"
      />
    </div>
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
