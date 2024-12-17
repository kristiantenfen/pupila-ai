import type { Vector2D } from "../types/elements";

export function useTransform() {
  const moveElement = (position: Vector2D, delta: Vector2D): Vector2D => {
    return {
      x: position.x + delta.x,
      y: position.y + delta.y,
    };
  };

  const resizeElement = (
    width: number,
    height: number,
    scale: Vector2D
  ): { width: number; height: number } => {
    return {
      width: width * scale.x,
      height: height * scale.y,
    };
  };

  return {
    moveElement,
    resizeElement,
  };
}
