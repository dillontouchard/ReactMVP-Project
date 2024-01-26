import React, { useEffect, useState } from "react";
import * as Phaser from "phaser";

const App = () => {

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Phaser initialization code
    const config = {
      type: Phaser.AUTO,
      width: windowWidth,
      height: windowHeight,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      // Phaser preload code
    }

    function create() {
      // Access the fetched data here, for example:
      

      // Phaser create code
    }

    function update() {
      // Phaser update code
    }

    // Cleanup Phaser when the component is unmounted
    return () => {
      game.destroy(true);
    };
  }, []); // Include gameData in the dependency array to rerun the effect when it changes

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

  return (
    <>
      <canvas id="phaser-container"></canvas>
    </>
  );
};

export default App;
