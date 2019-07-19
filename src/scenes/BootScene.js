class BootScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'BootScene'
    })
  }
  preload () {
    let logo = this.load.image('logo', 'src/sprites/logo.png')

  }
  create () {
    this.scene.start('PreloadScene')
  }
  update () {

  }
}