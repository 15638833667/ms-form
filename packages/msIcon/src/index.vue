
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClassName" class="ms-svg-icon-use" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
defineOptions({
  name: 'MsIcon',
});
import { computed } from 'vue';
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: 'ms-svg-icon',
  },
  color: {
    type: String,
    default: '#409eff',
  },
});

// 图标在 iconfont 中的名字
const iconClassName = computed(() => {
  return `#${props.iconName}`;
});

// 给图标添加上类名
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return 'svg-icon';
});
</script>
<style lang="scss" scoped>
.ms-svg-icon-use {
  width: 100%;
  height: 100%;
}
</style>