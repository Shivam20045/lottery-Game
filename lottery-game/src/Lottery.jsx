import { useState } from "react";
import "./Lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery(n , isSum) {
    let [ticket,setTicket]=useState(genTicket(n=3,isSum=15));
    let reGenTicket=()=>{
        setTicket(genTicket(n));
        
    }
    let isWinning=sum(ticket)===isSum;
  return (
    <>
      <div>Lottery!!!!!</div>
      <div className="ticket">
        <Ticket ticket={ticket}/>
      </div>
      <h3 >{isWinning && "You Won !!!!"}</h3>
      <button onClick={reGenTicket}>Generate Ticket!!!</button>
    </>
  );
}
