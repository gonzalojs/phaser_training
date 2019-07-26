let zone, minizone, otrazone, botzone, area, sml, sml2, lng, lng2;

class MenuScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'MenuScene'
    })
  }

  preload () {
    console.log('Menu Scene!')
    this.cameras.main.setBackgroundColor('#FFD700')
  }

  create () {
    //botones aer que tal
    const blue_btn = this.add.image(0, 0, 'blue_btn')
    const green_block = this.add.image(0, 0, 'green_block')
    const orange_block = this.add.image(0, 0, 'orange_block')
    const green_btn = this.add.image(0, 0, 'green_btn')
    const orange_btn = this.add.image(0, 0, 'orange_btn')

    //mini = top; otra = mid
    area = this.add.zone(400, 300, 800, 600)
    zone = this.add.zone(0, 0).setSize(350, 450)
    minizone = this.add.zone(0, 0).setSize(350, 150)
    otrazone = this.add.zone(0, 0).setSize(350, 150)
    botzone = this.add.zone(0, 0).setSize(350, 150)
    sml = this.add.zone(0, 0).setSize(175, 75)
    sml2 = this.add.zone(0, 0).setSize(175, 75)
    lng = this.add.zone(0, 0).setSize(350, 75)
    lng2 = this.add.zone(0, 0).setSize(350, 75)
    this.physics.world.enable(zone, 0)
    this.physics.world.enable(minizone, 0)
    this.physics.world.enable(otrazone, 0)
    this.physics.world.enable(botzone, 0)
    this.physics.world.enable(sml, 0)
    this.physics.world.enable(sml2, 0)
    this.physics.world.enable(lng, 0)
    this.physics.world.enable(lng2, 0)
    zone.body.setAllowGravity(false)
    zone.body.moves = false
    minizone.body.moves = false
    otrazone.body.moves = false
    botzone.body.moves = false
    sml.body.moves = false
    sml2.body.moves = false
    lng.body.moves = false
    lng2.body.moves = false
/*     zone.body.debugBodyColor = '#000080'
    minizone.body.debugBodyColor = '#FFFFFF'
    otrazone.body.debugBodyColor = '#000000'
    botzone.body.debugBodyColor = '#000000'
    sml.body.debugBodyColor = '#000000'
    sml2.body.debugBodyColor = '#000000' */

    Phaser.Display.Align.In.Center(zone, area)
    Phaser.Display.Align.In.TopCenter(minizone, zone)
    Phaser.Display.Align.In.Center(otrazone, zone)
    Phaser.Display.Align.In.BottomCenter(botzone, zone)
    Phaser.Display.Align.In.LeftCenter(sml, otrazone)
    Phaser.Display.Align.In.RightCenter(sml2, otrazone)

    //button display
    Phaser.Display.Align.In.Center(blue_btn, minizone)
    Phaser.Display.Align.In.Center(green_block, sml)
    Phaser.Display.Align.In.Center(orange_block, sml2)

    Phaser.Display.Align.In.TopCenter(lng, botzone)
    Phaser.Display.Align.In.BottomCenter(lng2, botzone)
    Phaser.Display.Align.In.Center(orange_btn, lng)
    Phaser.Display.Align.In.Center(green_btn, lng2)




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