import React from "react";
import { MinusButton } from "./MinusButton";
import { PlusButton } from "./PlusButton";
import { NumberViewer } from "./NumberViewer";
import { CountContextProvider } from "./CountContext";

export const ContextAPITest = (props) => {
  return (
    <CountContextProvider>
      <MinusButton />
      <NumberViewer />
      <PlusButton />
      {props.children}
    </CountContextProvider>
  );
};
