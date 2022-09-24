<script setup lang="ts">
import type { Icon } from "../assets/icons";

export interface BIconProps {
  icon: Icon;
}

defineProps<BIconProps>();
</script>

<template>
  <article class="app" :draggable="true">
    <span
      :class="`app-icon-wrapper ${icon.draggable ? 'draggable' : ''}`"
      :id="icon.id"
    >
      <img :src="icon.img" :alt="icon.label" width="80" height="80" />
    </span>
    <label class="app-label" :for="icon.id">{{ icon.label }}</label>
  </article>
</template>

<style lang="scss" scoped>
.app {
  display: grid;
  justify-items: center;
}

.app-icon-wrapper {
  height: 80px;
  max-width: 80px;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &.img {
    width: 100%;
    height: auto;
  }

  &:hover {
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.4);
  }
}

.app-label {
  margin-top: 1rem;
  font-size: 12px;
}
</style>
