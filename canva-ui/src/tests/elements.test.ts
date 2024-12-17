import { describe, it, expect } from "vitest";
import { useElements } from "../composables/useElements";

describe("useElements", () => {
  it("should create an element with correct properties", () => {
    const { createElement } = useElements();
    const element = createElement("rectangle", { x: 0, y: 0 });

    expect(element).toHaveProperty("id");
    expect(element.type).toBe("rectangle");
    expect(element.position).toEqual({ x: 0, y: 0 });
  });
});
