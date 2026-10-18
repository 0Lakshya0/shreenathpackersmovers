import { render } from "@testing-library/react";
import { act } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QuoteForm } from "@/components/quote-form";

afterEach(() => {
  vi.restoreAllMocks();
});

function setFieldValue(field: HTMLInputElement | HTMLSelectElement, value: string) {
  act(() => {
    const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(field), "value")?.set;
    setter?.call(field, value);
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("three-step quote form", () => {
  it("collects route, move details and contact before opening a reviewable WhatsApp enquiry", () => {
    const openWindow = vi.spyOn(window, "open").mockReturnValue(null);
    const view = render(<QuoteForm />);

    expect(view.getByText(/0\/3/)).toBeInTheDocument();
    setFieldValue(view.getByLabelText("From city") as HTMLInputElement, "Indore");
    setFieldValue(view.getByLabelText("To city") as HTMLInputElement, "Mumbai");
    act(() => view.getByRole("button", { name: /Continue to move size/ }).click());

    setFieldValue(view.getByLabelText("Move size") as HTMLSelectElement, "2 BHK");
    act(() => view.getByRole("button", { name: /Continue to your details/ }).click());

    setFieldValue(view.getByLabelText("Your name") as HTMLInputElement, "Asha");
    setFieldValue(view.getByLabelText("Phone number") as HTMLInputElement, "7000568402");
    act(() => view.getByRole("button", { name: /Get Free Quote/ }).click());

    expect(openWindow).toHaveBeenCalledOnce();
    expect(openWindow).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/917000568402"),
      "_blank",
      "noopener,noreferrer",
    );
    expect(openWindow.mock.calls[0]?.[0]).toContain("Moving%20to%3A%20Mumbai");
  });
});
