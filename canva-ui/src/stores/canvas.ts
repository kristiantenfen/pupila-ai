import { defineStore } from "pinia";
import type { CanvasElement, ElementType, Vector2D } from "../types/elements";

interface CanvasState {
  elements: Map<string, CanvasElement>;
  selectedIds: Set<string>;
  activeTool: ElementType;
}

export const useCanvasStore = defineStore("canvas", {
  state: (): CanvasState => ({
    elements: new Map(),
    selectedIds: new Set(),
    activeTool: "select",
  }),

  actions: {
    setActiveTool(tool: ElementType) {
      this.activeTool = tool;
    },

    addElement(element: CanvasElement) {
      this.elements.set(element.id, element);
    },

    updateElement(id: string, updates: Partial<CanvasElement>) {
      const element = this.elements.get(id);
      if (element) {
        // Type guard to ensure type safety when merging updates
        if (element.type === "rectangle") {
          this.elements.set(id, { ...element, ...updates } as CanvasElement);
        } else if (element.type === "text") {
          // For text elements, ensure required text properties are preserved
          this.elements.set(id, {
            ...element,
            ...updates,
            content: "content" in updates ? updates.content : element.content,
            fontSize:
              "fontSize" in updates ? updates.fontSize : element.fontSize,
            fontFamily:
              "fontFamily" in updates ? updates.fontFamily : element.fontFamily,
          } as CanvasElement);
        }
      }
    },

    setSelected(ids: string[]) {
      this.selectedIds = new Set(ids);
    },

    deleteSelected() {
      this.selectedIds.forEach((id) => {
        this.elements.delete(id);
      });
      this.selectedIds.clear();
    },
  },
});
