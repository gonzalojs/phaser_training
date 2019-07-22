class LesscakeScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'LesscakeScene'
    })
  }
  preload () {

  }

  create () {
    console.log('LesscakeScene Scene...')

    this.player = this.physics.add.sprite(100, 100, 'player')

    this.coin = this.physics.add.sprite(300, 300, 'coin')
  }

  update () {

  }
}