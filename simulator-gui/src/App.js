import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Cell from "./components/Cell/Cell";
const ENDPOINT = "http://127.0.0.1:4000";

function App() {
  const [leds, setLeds] = useState([]);
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    
    socket.on("text", setLeds);

    return(() => socket.off("text", setLeds));
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