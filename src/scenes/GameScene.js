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

    console.log(this.sys.canvas.width, this.sys.canvas.height)

    let back = this.add.image(0, 0, 'back')
    back.width = this.sys.canvas.width / 10
    back.height = this.sys.canvas.height
    Phaser.Display.Align.In.Center(back, this.add.zone(400, 300, 800, 600))
  }
  update () {
    
  }
}