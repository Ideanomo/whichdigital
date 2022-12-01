import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the grid", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/Multiples App/);
});
