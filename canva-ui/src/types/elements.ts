// types/elements.ts
export interface Vector2D {
  x: number;
  y: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export type ElementType = "rectangle" | "text" | "select";

export interface BaseElement {
  id: string;
  type: ElementType;
  position: Vector2D;
  width: number;
  height: number;
  rotation: number;
  selected: boolean;
}

export interface RectangleElement extends BaseElement {
  type: "rectangle";
  fill: string;
}

export interface TextElement extends BaseElement {
  type: "text";
  content: string;
  fontSize: number;
  fontFamily: string;
}

export type CanvasElement = RectangleElement | TextElement;
