class GameScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'GameScene'
    })
  }
  preload () {

  }
  create () {
    console.log('Game Scene!')
    const ORANGE_ZONE = this.add.zone(50, 25, 100, 50)
    const BACK = this.add.image(0, 0, 'back')
    const TOP_LEFT = this.add.image(0, 0, 'orange')
    const TOP_CENTER = this.add.image(0, 0, 'orange')
    const TOP_RIGHT = this.add.image(0, 0, 'orange')
    const MIDDLE_LEFT = this.add.image(0, 0, 'orange')
    const MIDDLE_CENTER = this.add.image(0, 0, 'orange')
    const MIDDLE_RIGHT = this.add.image(0, 0, 'orange')
    const BOTTOM_LEFT = this.add.image(0, 0, 'orange')
    const BOTTOM_CENTER = this.add.image(0, 0, 'orange')
    const BOTTOM_RIGHT = this.add.image(0, 0, 'orange')



    Phaser.Display.Align.In.Center(BACK, this.add.zone(400, 300, 800, 600))

    //center sprite in the picture
    Phaser.Display.Align.In.TopLeft(TOP_LEFT, BACK)
    Phaser.Display.Align.In.TopCenter(TOP_CENTER, BACK)
    Phaser.Display.Align.In.TopRight(TOP_RIGHT, BACK)
    Phaser.Display.Align.In.LeftCenter(MIDDLE_LEFT, BACK)
    Phaser.Display.Align.In.Center(MIDDLE_CENTER, BACK)
    Phaser.Display.Align.In.RightCenter(MIDDLE_RIGHT, BACK)
    Phaser.Display.Align.In.BottomLeft(BOTTOM_LEFT, BACK)
    Phaser.Display.Align.In.BottomCenter(BOTTOM_CENTER, BACK)
    Phaser.Display.Align.In.BottomRight(BOTTOM_RIGHT, BACK)

    this.lesscakeButton = TOP_LEFT.setInteractive()
    this.lessCakeText = this.add.text(0, 0, 'LessCake', {
      fontSize: '16px',
      fill: '#fff'
    })
    Phaser.Display.Align.In.Center(this.lessCakeText, ORANGE_ZONE)

    this.lesscakeButton.on('pointerdown', function (pointer) {
      this.scene.start('LesscakeScene')
      this.click()
    }.bind(this))
  }
  update () {
    
  }

  click () {
    this.sound.play('click')
  }
}