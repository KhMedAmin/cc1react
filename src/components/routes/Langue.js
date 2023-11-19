import React from "react";
import Contenu from "./Composents/Contenu/Contenu";
import ToggleLangs from "./Composents/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";


export default function Langue() {
  return (
    <div>
      <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
    </div>
  )
}
