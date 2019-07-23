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

    //player movement
    this.arrow = this.input.keyboard.createCursorKeys()

    //score
    this.score = 0
    let style = {
      font: '20px Arial',
      fill: '#fff'
    }
    this.scoreText = this.add.text(20, 20, `score: `, style)
    this.scoreNumber = this.add.text(80, 20, this.score, style)
  }

  update () {

    //overlaping player and coin
    if (this.physics.overlap(this.player, this.coin)) {
      //call hit
      this.hit()
    }

    //player movement
    if (this.arrow.right.isDown) {
      this.player.x += 3
    } else if (this.arrow.left.isDown) {
      this.player.x -= 3
    }

    if ( this.arrow.down.isDown) {
      this.player.y += 3
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3
    }
  }

  hit () {
    //@ player touch the coin:
    //score goes up by 10
    //coin gets move to random position

    //change the position
    this.coin.x = Phaser.Math.Between(100, 600)
    this.coin.y = Phaser.Math.Between(100, 300)

    //increment the score
    this.score += 10

    if (this.score % 100 === 0) {
      this.sound.play('bonus')
    }

    //display updated score
    this.scoreNumber.setText(this.score)

    //tween for juice
    this.tweens.add({
      targets: this.player,
      duration: 200, //200 ms
      scaleX: 1.2, //scale vertically by 20%
      scaleY: 1.2, //scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    })

    this.tweens.add({
      targets: this.scoreNumber,
      duration: 80, //80 ms
      scaleX: 1.8, //scale vertically by 20%
      scaleY: 1.8, //scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    })

    this.sound.play('pickup')
  }
}