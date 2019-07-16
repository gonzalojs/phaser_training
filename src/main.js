const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'container',
  scene: [
    PreloadScene,
    BootScene,
    TitleScene,
    GameScene
  ]
}

const game = new Phaser.Game(config)