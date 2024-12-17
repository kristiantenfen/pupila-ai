<template>
  <div ref="canvasContainer" class="relative w-full h-full">
    <canvas ref="canvas" class="absolute top-0 left-0" />
    <canvas
      ref="overlayCanvas"
      class="absolute top-0 left-0 pointer-events-none"
    />
    <ToolBar v-model="activeTool" class="absolute top-4 left-4" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useCanvasStore } from "../../stores/canvas";
import { useElements } from "../../composables/useElements";
import type {
  Vector2D,
  ElementType,
  CanvasElement,
} from "~/src/types/elements";
import ToolBar from "./ToolBar.vue";

const canvasContainer = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const overlayCanvas = ref<HTMLCanvasElement>();
const ctx = ref<CanvasRenderingContext2D>();
const overlayCtx = ref<CanvasRenderingContext2D>();
const store = useCanvasStore();
const { createElement } = useElements();

const isDragging = ref(false);
const lastMousePos = ref<Vector2D>({ x: 0, y: 0 });

const activeTool = computed({
  get: () => store.activeTool,
  set: (value: ElementType) => store.setActiveTool(value),
});

onMounted(() => {
  initCanvas();
  setupEventListeners();
  startRenderLoop();
});

onUnmounted(() => {
  cleanup();
});

const initCanvas = () => {
  if (!canvasContainer.value || !canvas.value || !overlayCanvas.value) return;

  const { width, height } = canvasContainer.value.getBoundingClientRect();

  canvas.value.width = width;
  canvas.value.height = height;
  ctx.value = canvas.value.getContext("2d")!;

  overlayCanvas.value.width = width;
  overlayCanvas.value.height = height;
  overlayCtx.value = overlayCanvas.value.getContext("2d")!;
};

const setupEventListeners = () => {
  if (!canvas.value) return;

  canvas.value.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
};

const cleanup = () => {
  if (!canvas.value) return;

  canvas.value.removeEventListener("mousedown", handleMouseDown);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
};

const handleMouseDown = (e: MouseEvent) => {
  if (!canvas.value) return;

  const rect = canvas.value.getBoundingClientRect();
  const mousePos = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };

  lastMousePos.value = mousePos;
  isDragging.value = true;

  if (store.activeTool !== "select") {
    createElement(store.activeTool, mousePos);
    return;
  }

  const clickedElement = findElementAtPosition(mousePos);
  if (clickedElement) {
    store.setSelected([clickedElement.id]);
  } else {
    store.setSelected([]);
  }
};

const handleMouseMove = (e: MouseEvent) => {
  if (!canvas.value || !isDragging.value) return;

  const rect = canvas.value.getBoundingClientRect();
  const currentPos = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };

  const delta = {
    x: currentPos.x - lastMousePos.value.x,
    y: currentPos.y - lastMousePos.value.y,
  };

  if (store.selectedIds.size > 0) {
    store.selectedIds.forEach((id) => {
      const element = store.elements.get(id);
      if (element) {
        store.updateElement(id, {
          position: {
            x: element.position.x + delta.x,
            y: element.position.y + delta.y,
          },
        });
      }
    });
  }

  lastMousePos.value = currentPos;
};

const handleMouseUp = () => {
  isDragging.value = false;
};

const render = () => {
  if (!ctx.value || !overlayCtx.value) return;

  ctx.value.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  overlayCtx.value.clearRect(
    0,
    0,
    overlayCanvas.value!.width,
    overlayCanvas.value!.height
  );

  store.elements.forEach((element) => {
    renderElement(ctx.value!, element);
  });

  store.selectedIds.forEach((id) => {
    const element = store.elements.get(id);
    if (element) {
      renderSelectionBox(overlayCtx.value!, element);
    }
  });
};

const renderElement = (
  context: CanvasRenderingContext2D,
  element: CanvasElement
) => {
  context.save();
  context.translate(element.position.x, element.position.y);
  context.rotate(element.rotation);

  if (element.type === "rectangle") {
    context.fillStyle = element.fill;
    context.fillRect(0, 0, element.width, element.height);
  } else if (element.type === "text") {
    context.font = `${element.fontSize}px ${element.fontFamily}`;
    context.fillText(element.content, 0, element.fontSize);
  }

  context.restore();
};

const renderSelectionBox = (
  context: CanvasRenderingContext2D,
  element: CanvasElement
) => {
  context.strokeStyle = "#0095ff";
  context.lineWidth = 2;
  context.strokeRect(
    element.position.x - 2,
    element.position.y - 2,
    element.width + 4,
    element.height + 4
  );
};

const startRenderLoop = () => {
  const animate = () => {
    render();
    requestAnimationFrame(animate);
  };
  animate();
};

const findElementAtPosition = (pos: Vector2D): CanvasElement | undefined => {
  return Array.from(store.elements.values())
    .reverse()
    .find((element) => isPointInElement(pos, element));
};

const isPointInElement = (point: Vector2D, element: CanvasElement): boolean => {
  return (
    point.x >= element.position.x &&
    point.x <= element.position.x + element.width &&
    point.y >= element.position.y &&
    point.y <= element.position.y + element.height
  );
};
</script>

<style scoped>
canvas {
  touch-action: none;
  user-select: none;
}
</style>
