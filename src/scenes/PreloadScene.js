class PreloadScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'PreloadScene'
    })
  }
  preload () {
    let logo = this.add.image(400, 200, 'logo')
    logo.setScale(0.1)

    //progress bar
    let progressBar = this.add.graphics()
    let progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(240, 270, 320, 50)

    let width = this.cameras.main.width
    let height = this.cameras.main.height
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })
    loadingText.setOrigin(0.5, 0.5)

    let percenText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: "#ffffff"
      }
    })
    percenText.setOrigin(0.5, 0.5)

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: 'ffffff'
      }
    })
    assetText.setOrigin(0.5, 0.5)

    //update progress bar
    this.load.on('progress', (value) => {
      percenText.setText(parseInt(value * 100) + '%')
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(250, 280, 300 * value, 30)
    })

    this.load.on('fileprogress', () => {
      assetText.setText('Loading asset: ' + File.key)
    })

    //remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy()
      progressBox.destroy()
      loadingText.destroy()
      percenText.destroy()
      assetText.destroy()
      this.ready()
    }.bind(this))

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this)

    //load assets for the game
    this.load.image('logos', 'src/sprites/logos.jpg')
  }
  create () {
    console.log('Preload Scene')
  }
  update () {

  }

  init () {
    this.readyCount = 0
  }

  ready () {
    this.readyCount++
    if (this.readyCount === 2) {
      console.log('ready')
      this.scene.start('TitleScene')
    }
  }
}