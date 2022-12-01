const createArray = (length) =>
  [...Array(length)].map((_, idx) => ({
    number: idx + 1,
    className: "",
  }));

export default createArray;
