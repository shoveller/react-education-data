import React from "react";
import { MinusButton } from "./MinusButton";
import { PlusButton } from "./PlusButton";
import { NumberViewer } from "./NumberViewer";

export const PropsDrilling = (props) => {
  const [number, setNumber] = React.useState(0);
  const onMinus = React.useCallback(() => setNumber((value) => value - 1), []);
  const onPlus = React.useCallback(() => setNumber((value) => value + 1), []);

  return (
    <>
      <MinusButton onClick={onMinus} />
      <NumberViewer value={number} />
      <PlusButton onClick={onPlus} />
      {props.children}
    </>
  );
};
