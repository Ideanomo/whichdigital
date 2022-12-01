import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders the form", () => {
  render(<Form />);
  expect(screen.getByRole("button")).toBeEnabled();
});
