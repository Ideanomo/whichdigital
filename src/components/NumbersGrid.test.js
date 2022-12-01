import React from "react";
import NumbersGrid from "./NumbersGrid";
import createArray from "../utilities/createArray";
import { render, screen, within } from "@testing-library/react";

const testArray = createArray(144).map((n) => n.number);

test("Grid should have 144 items", () => {
  render(<NumbersGrid />);
  const list = screen.getByRole("list", {
    className: /numbersGrid/,
  });

  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(items.length).toBe(144);
});

test("It should render numbers in a specific order by DOM snapshot", () => {
  render(<NumbersGrid />);

  const list = screen.getByRole("list", {
    className: /numbersGrid/i,
  });

  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  const numberValues = items.map((item) => item.number);
  let isSequential = false;

  for (var i = 1, len = numberValues.length; i < len; i++) {
    if (numberValues[i] < numberValues[i - 1]) {
      isSequential = false;
    }
  }
  isSequential = true;

  expect(isSequential).toBe(true);
});
