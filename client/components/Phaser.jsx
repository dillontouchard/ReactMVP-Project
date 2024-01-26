import React, { useEffect } from "react";

const GameScreen = () => {
    useEffect(() => {
    
        const gamecanvas = document.getElementById('gamescreen')
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        // Phaser initialization code
        const config = {
          type: Phaser.WEBGL,
          width: windowWidth,
          height: windowHeight,
          canvas: gamecanvas,
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
    return (
        <>
            <canvas id="gamescreen"></canvas>
        </>
    )
}

export default GameScreen;