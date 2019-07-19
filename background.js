class Background {

        constructor(ctx, w, h) {
            

            this.ctx = ctx

            this.gameWidth = w

            this.gameHeight = h

            this.image = new Image()
            this.image.src = "images/habitacion2.jpg"

            this.posX = 0
            this.posY = 0 
        }
        draw() {
            this.ctx.drawImage(this.image, this.posX, this.posY, this.gameWidth, this.gameHeight)
}
  }