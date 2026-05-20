import { useState } from "react";
import Lottery from "./Lottery";
import "./App.css";
import Ticket from "./Ticket";
function App() {
  return (
    <>
      <Lottery size={3} isWinning={15}/>
    </>
  );
}

export default App;
