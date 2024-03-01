import React from "react";
import { useUi } from "./UiContext";

const Context = () => {
  const { dark } = useUi();

  return <h1>{dark ? "dark" : "light"}</h1>;
};

export default Context;
