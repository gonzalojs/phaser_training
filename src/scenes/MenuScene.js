class MenuScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'MenuScene'
    })
  }

  preload () {

  }

  create () {
    console.log('Menu Scene!')
    this.cameras.main.setBackgroundColor('#FFD700')
  }

  update () {

  }
}