import React, { useEffect, useState } from "react";
import * as Phaser from "phaser";
import GameScreen from "./Phaser";

const App = () => {
useEffect(() => {
 
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/chickenrun");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [])


  return (
    <>
      <div id="phaser-container">
        <GameScreen />
      </div>
    </>
  );
};

export default App;
