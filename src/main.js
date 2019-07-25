const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'container',
  scene: [
    BootScene,
    PreloadScene,
    TitleScene,
    GameScene,
    LesscakeScene,
    DudeScene,
    MenuScene
  ],
  physics: {
    default: 'arcade'
  },
}

const game = new Phaser.Game(config)