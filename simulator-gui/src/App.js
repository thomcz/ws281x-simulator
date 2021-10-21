import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Cell from "./components/Cell/Cell";
import { LedGenerator } from "./LedGenerator";
const ENDPOINT = "http://127.0.0.1:4000";

function App() {
  const [leds, setLeds] = useState(LedGenerator(30));
  
  const updateLeds = (newLed) => {
    setLeds(previousLeds => {
      const index = previousLeds.findIndex(led => led.ledId === newLed.ledId)

      const updatedLeds = [...previousLeds]; 
      updatedLeds[index] = newLed
      
      return updatedLeds
    })
  }
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    
    socket.on("text", updateLeds);

    return(() => socket.off("text", updateLeds));
  }, []);

  return (
    <div>
      {leds.map(led=> (
        <Cell key={led.ledId} color={led.color} positionX="0" positionY="0" />
      ))}
    </div>
  );
}

export default App;