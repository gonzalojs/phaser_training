let zone;

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
    zone = this.add.zone(400, 300).setSize(350, 450)
    this.physics.world.enable(zone, 0)
    zone.body.setAllowGravity(false)
    zone.body.moves = false
    zone.body.debugBodyColor = '#000080'

    console.log(zone)
    this.cameras.main.setBackgroundColor('#FFD700')


    const GREY_PANEL = this.add.image(0, 0, 'grey_panel')
    Phaser.Display.Align.In.TopLeft(GREY_PANEL, zone)

    const BLUE_BTN = this.add.image(0, 0, 'blue_btn')
    Phaser.Display.Align.In.TopRight(BLUE_BTN, zone)

/*     zone.body.debugBodyColor = 0x00ffff */

  }

  update () {

  }

  resize (i, w, h) {
    i.displayWidth = w
    i.displayHeight = h
  }

}