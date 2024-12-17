// composables/useElements.ts
import { v4 as uuidv4 } from "uuid";
import type { ElementType, Vector2D, CanvasElement } from "../types/elements";
import { useCanvasStore } from "../stores/canvas";

export function useElements() {
  const store = useCanvasStore();

  const createElement = (
    type: ElementType,
    position: Vector2D,
    content?: string
  ): CanvasElement => {
    const baseElement = {
      id: uuidv4(),
      position,
      width: 100,
      height: 100,
      rotation: 0,
      selected: false,
    };

    let element: CanvasElement;

    switch (type) {
      case "rectangle":
        element = {
          ...baseElement,
          type: "rectangle",
          fill: "#000000",
        };
        break;

      case "text":
        element = {
          ...baseElement,
          type: "text",
          content: content || "New Text",
          fontSize: 16,
          fontFamily: "Arial",
        };
        break;

      default:
        throw new Error(`Unsupported element type: ${type}`);
    }

    store.addElement(element);
    return element;
  };

  return {
    createElement,
  };
}
