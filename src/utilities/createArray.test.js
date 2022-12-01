import createArray from "../utilities/createArray";

test("Creates array", () => {
  expect(createArray(10)).toHaveLength(10);
});

const gridItems = [
  {
    number: 1,
    className: "",
  },
  {
    number: 2,
    className: "",
  },
  {
    number: 3,
    className: "",
  },
];

test("Create numbers array with 3 indexes", () => {
  expect(createArray(3)).toEqual(gridItems);
});

test("Build a numbers object", () => {
  const result = gridItems[1];

  expect(createArray(3)[1]).toEqual(result);
});
