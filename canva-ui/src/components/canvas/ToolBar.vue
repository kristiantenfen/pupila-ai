<!-- components/canvas/ToolBar.vue -->
<template>
  <div class="toolbar bg-white shadow-md rounded-lg p-2 flex gap-2">
    <div class="tool-group border-r pr-2">
      <button
        v-for="tool in tools"
        :key="tool.type"
        class="tool-button p-2 rounded hover:bg-gray-100"
        :class="{ 'bg-blue-100': modelValue === tool.type }"
        @click="$emit('update:modelValue', tool.type)"
      >
        <span class="material-icons">{{ tool.icon }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElementType } from "../../types/elements";

// Props e Emits
defineProps<{
  modelValue: ElementType;
}>();

defineEmits<{
  "update:modelValue": [value: ElementType];
}>();

// Ferramentas disponíveis
const tools = [
  { type: "select" as const, icon: "pan_tool" },
  { type: "rectangle" as const, icon: "rectangle" },
  { type: "text" as const, icon: "text_fields" },
];
</script>

<style scoped>
.tool-button {
  @apply w-10 h-10 flex items-center justify-center transition-colors;
}
</style>
