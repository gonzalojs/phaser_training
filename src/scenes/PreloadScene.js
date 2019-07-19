class PreloadScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'PreloadScene'
    })
  }
  preload () {
    let logo = this.add.image(400, 200, 'logo')
    logo.setScale(0.1)

  }
  create () {
    console.log('Preload Scene')
  }
  update () {

  }
}