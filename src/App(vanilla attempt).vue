<script setup lang="ts">
import { reactive, ref } from "vue";
import BIcon from "./components/BIcon.vue";
import icons from "./assets/icons";

const localIcons = reactive(icons);
const dragged = ref<string | null>(null);

const getIconIndex = (id: string) =>
  localIcons.findIndex((icon) => icon.id === id);

const reorderLocalIcons = (draggedIconId: string, droppedIconId: string) => {
  const draggedIconIndex = getIconIndex(draggedIconId);
  const droppedIconIndex = getIconIndex(droppedIconId);
  const draggedIcon = localIcons.splice(draggedIconIndex, 1)[0];
  draggedIcon.draggable = false;
  localIcons.splice(droppedIconIndex, 0, draggedIcon);
};

const iconSelected = (event: MouseEvent | TouchEvent, id: string) => {
  const icon = localIcons[getIconIndex(id)];
  icon.elementState = "selected";
  setTimeout(() => {
    if (!event.target || icon.elementState === "") return;
    icon.elementState = "drag";
    icon.draggable = true;
    dragged.value = id;
  }, 500);
};

const deselectIcons = () => {
  dragged.value = null;
  localIcons.forEach((icon) => {
    icon.elementState = "";
    icon.draggable = false;
  });
};

const drop = (event: DragEvent, droppedIconId: string) => {
  const draggedIconId = dragged.value;
  if (!draggedIconId) return;
  const draggedIconIndex = getIconIndex(draggedIconId);
  if (draggedIconIndex === -1 || !localIcons[draggedIconIndex].draggable)
    return;
  reorderLocalIcons(draggedIconId, droppedIconId);
  deselectIcons();
};
</script>

<template>
  <header class="header">
    <h1>Explore Learning Test</h1>
  </header>
  <main
    ref="draggableContainer"
    class="wrapper"
    @dragover="$event.preventDefault()"
    @mouseup="deselectIcons()"
    @touchend="deselectIcons()"
  >
    <template v-for="icon in localIcons" :key="icon.id">
      <BIcon
        :icon="icon"
        :draggable="icon.draggable"
        @mousedown="iconSelected($event, icon.id)"
        @touchstart="iconSelected($event, icon.id)"
        @drop="drop($event, icon.id)"
        @touchmove="drop($event, icon.id)"
        :class="icon.elementState"
      />
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
