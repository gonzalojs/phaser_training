let zone, minizone, otrazone;

class MenuScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'MenuScene'
    })
  }

  preload () {
    this.cameras.main.setBackgroundColor('#FFD700')
  }

  create () {
    console.log('Menu Scene!')
    zone = this.add.zone(400, 300).setSize(350, 450)
    minizone = this.add.zone(0, 0).setSize(150, 200)
    otrazone = this.add.zone(0, 0).setSize(250, 200)
    this.physics.world.enable(zone, 0)
    this.physics.world.enable(minizone, 0)
    this.physics.world.enable(otrazone, 0)
    zone.body.setAllowGravity(false)
    zone.body.moves = false
    minizone.body.moves = false
    otrazone.body.moves = false
    zone.body.debugBodyColor = '#000080'
    minizone.body.debugBodyColor = '#FFFFFF'
    otrazone.body.debugBodyColor = '#000000'

    Phaser.Display.Align.In.TopLeft(minizone, zone)
    Phaser.Display.Align.In.BottomRight(otrazone, zone)



/*     const GREY_PANEL = this.add.image(0, 0, 'grey_panel')
    Phaser.Display.Align.In.TopLeft(GREY_PANEL, zone)

    const BLUE_BTN = this.add.image(0, 0, 'blue_btn')
    Phaser.Display.Align.In.TopRight(BLUE_BTN, zone) */

/*     zone.body.debugBodyColor = 0x00ffff */

  }

  update () {

  }

  resize (i, w, h) {
    i.displayWidth = w
    i.displayHeight = h
  }

}