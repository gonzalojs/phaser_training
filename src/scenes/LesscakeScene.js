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
    this.cameras.main.setBackgroundColor('#3498db')

    this.player = this.physics.add.sprite(100, 100, 'player')

    this.coin = this.physics.add.sprite(300, 300, 'coin')

    //score
    this.score = 0
    let style = {
      font: '20px Arial',
      fill: '#fff'
    }
    this.scoreText = this.add.text(20, 20, `score: ${this.score}`, style)
  }

  update () {

  }
}