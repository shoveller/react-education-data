import React from "react";

export const Element = () => <h1>hello world!</h1>;

export const HelloJSX = () =>
  React.createElement("h1", { children: "hello world!" });
