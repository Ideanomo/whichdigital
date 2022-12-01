import React, { useState } from "react";
import createArray from "../utilities/createArray";
import Form from "../components/Form";
import { v4 } from "uuid";

let pickedNumbers = [];

const NumbersGrid = () => {
  const total = createArray(144);
  const [numbersArray, setNumbersArray] = useState(total);

  const handleClick = (_number) => {
    let picked = _number;

    if (pickedNumbers.indexOf(picked) === -1) {
      pickedNumbers.push(picked);
    }

    const newArray = numbersArray.map(({ number }) => {
      if (number % picked === 0) {
        return {
          className: "multiple",
          number: number,
        };
      } else {
        return {
          className: "",
          number: number,
        };
      }
    });

    setNumbersArray(newArray);
  };

  return (
    <>
      <Form id="numbersGrid" onEnterNumber={handleClick} />
      <section>
        <ul aria-label="numbersGrid" className="grid">
          {numbersArray.map((obj) => (
            <li
              className={"card " + obj.className}
              key={v4()}
              onClick={() => handleClick(obj.number)}
            >
              {obj.number}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default NumbersGrid;
