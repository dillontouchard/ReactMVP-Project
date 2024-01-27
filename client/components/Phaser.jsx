import React, { useEffect } from "react";

const GameScreen = () => {
    useEffect(() => {

        const gamecanvas = document.getElementById('gamescreen')
        const gamewidth = gamecanvas.width;
        const gameheight = gamecanvas.height;
        
    
        // Phaser initialization code
        const config = {
          type: Phaser.WEBGL,
          width: gamewidth,
          height: gameheight,
          canvas: gamecanvas,
          physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
          },
          scene: {
            preload: preload,
            create: create,
            update: update,
          },
        };
    
        const game = new Phaser.Game(config);
        var player;
        var background;
        var backgroundSpeed = 1;
        var backgroundGroup;
    
        function preload() {
          // Phaser preload code
          this.load.image('Chicken', 'components/assets/Chicken.png')
          this.load.image('Background', 'components/assets/ChickenRunBG.png')
        }

        function create() {
          // Phaser create code
          backgroundGroup = this.add.group();

          for (let i = 0; i < 3; i++) {
            const bg = this.add.image(gamewidth / 2 + i * gamewidth, gameheight / 2, "Background")
            bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height).setOrigin();
            backgroundGroup.add(bg);
          }

          // background = this.add.image(gamewidth / 2, gameheight / 2, 'Background');
          // background.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height).setOrigin();
          player = this.physics.add.sprite(gamewidth / 2.8, gameheight / 1.5, 'Chicken');
          player.setScale(0.12);
          this.physics.world.enable(player);
          player.setCollideWorldBounds(true);
          player.body.setSize(player.width, player.height);
          player.body.gravity.y = 50;
          
          this.input.keyboard.on('keydown-SPACE', function (event) {
            // console.log(event);
            if (player.body.onFloor()) {
                player.setVelocityY(-125); // Set the jump velocity
            }
          });


          this.physics.world.setBounds(0, 0, gamewidth * 3, gameheight / 1.22);
          // Uncomment this line to enable debugging for physics
          //this.physics.world.createDebugGraphic();
          
        }
    
        function update() {
          // Phaser update code
          backgroundGroup.children.iterate((bg) => {
            bg.x -= backgroundSpeed;
            if(bg.x <= -gamewidth / 2) {
              bg.x += gamewidth * 3;
            }
          });
          
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