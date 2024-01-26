import React, { useEffect } from "react";
import * as Phaser from "phaser";

const App = () => {
  useEffect(() => {
    // Phaser initialization code
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
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
      // Phaser create code
    }

    function update() {
      // Phaser update code
    }

    // Cleanup Phaser when the component is unmounted
    return () => {
      game.destroy(true);
    };
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
  <>
    <div id="phaser-container"></div>;
  </>
  )
};
export default App;
