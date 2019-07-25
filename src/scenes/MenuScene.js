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

    const PANEL = this.add.image(0, 0, 'grey_panel')
    Phaser.Display.Align.In.Center(PANEL, this.add.zone(400, 300, 800, 600))
  }

  update () {

  }

  resize (i, w, h) {
    i.displayWidth = w
    i.displayHeight = h
  }

}