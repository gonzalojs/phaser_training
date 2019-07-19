class TitleScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'TitleScene'
    })
  }
  preload () {

  }
  create () {
    console.log('Title Scene!')

    this.gameButton = this.add.sprite(100, 200, 'button').setInteractive()
    this.gameButton.setScale(0.15)
    this.centerButton(this.gameButton, 1)

    this.gameText = this.add.text(0, 0, 'Play', {
      fontSize: '32px',
      fill: '#fff'
    })
    this.centerButtonText(this.gameText, this.gameButton)

    this.gameButton.on('pointerdown', function (pointer) {
      this.scene.start('GameScene')
    }.bind(this))

    this.input.on('pointerover', function (event, gameObject) {
      gameObject[0].setTexture('button')
    })

    //Options
    this.optionButton = this.add.sprite(300, 200, 'button').setInteractive()
    this.optionButton.setScale(0.2)
    this.centerButton(this.optionButton)

    this.optionText = this.add.text(0, 0, 'Options', {
      fontSize: '32px',
      fill: '#fff'
    })
    this.centerButtonText(this.optionText, this.optionButton)

    this.optionButton.on('pointerdown', function (pointer) {
      this.scene.start('Options')
    }.bind(this))


  }
  update () {
    
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    )
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    )
  }

}