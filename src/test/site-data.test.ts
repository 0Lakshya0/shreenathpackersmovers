import { describe, expect, it } from "vitest";
import { FAQ_ITEMS, SERVICES } from "@/lib/site-data";

describe("enterprise logistics content", () => {
  it("lists eight distinct services for the homepage grid", () => {
    expect(SERVICES).toHaveLength(8);
    expect(new Set(SERVICES.map((service) => service.slug)).size).toBe(8);
    expect(new Set(SERVICES.map((service) => service.icon)).size).toBe(8);
  });

  it("keeps the FAQ focused on the four requested topics", () => {
    expect(FAQ_ITEMS).toHaveLength(4);
    expect(FAQ_ITEMS.map((item) => item.category)).toEqual([
      "Transit protection",
      "Packing standards",
      "Domestic network",
      "Shipment updates",
    ]);
  });
});
