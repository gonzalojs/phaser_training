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
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 200}
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    parent: 'container'
  }
}

const game = new Phaser.Game(config)