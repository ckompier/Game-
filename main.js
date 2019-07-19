const Game = {
    canvas:undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    framesCounter: 0, // recuerda llamarlo aqui
    fps: 60,
    keys: {
        TOP_KEY: 38,
        DOWN_KEY: 40,
        RIGHT_KEY: 39,
        LEFT_KEY: 37,

    
    },


init: function() {
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.width = window.innerWidth *.90
    this.height = window.innerHeight * .90
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.start()
},

start: function() {
    this.reset()
    this.interval = setInterval(() => {
        this.framesCounter++
        this.clear()
        this.drawAll()
        this.isCollision()
        this.win()
        
    }, 1000/this.fps)
},


reset: function() {
    this.grid = new Mapfog (this.ctx, this.width, this.height, this.map)
    this.roomba = new Roomba(this.ctx,this.width, this.height, this.keys, this.grid.map)
    this.enemies = new Enemigos (this.ctx,this.width, this.height,this.grid.map)
    this.enemi = new Enemigoup (this.ctx,this.width, this.height,this.grid.map)
    this.enemi2 = new Enemigodown (this.ctx,this.width, this.height,this.grid.map)
    this.enemi3  = new Enemigo4 (this.ctx,this.width, this.height,this.grid.map)
    this.background = new Background (this.ctx,this.width, this.height)

},

drawAll: function() {

this.background.draw()
this.grid.drawGrid()
this.roomba.drawRoomba()
this.enemies.drawEnemies(this.framesCounter)
this.enemies.moveEnemies(this.framesCounter)
this.enemi.drawEnemi(this.framesCounter)
this.enemi.moveEnemi(this.framesCounter)
this.enemi2.drawEnemi2(this.framesCounter)
this.enemi2.moveEnemi2(this.framesCounter)
this.enemi3.drawEnemi3(this.framesCounter)
this.enemi3.moveEnemi3(this.framesCounter)
},


isCollision: function () {

//    console.log(this.roomba.posX == this.enemies.posX && this.roomba.posY == this.enemies.posY)
    if (this.roomba.posX == this.enemies.posY && this.roomba.posY == this.enemies.posX )
    
       {
        console.warn ("cambia")

        this.changeMoves()

       } 
       if (this.roomba.posX == this.enemi.posY && this.roomba.posY == this.enemi.posX ) {
            console.log("funciona2")
            this.gameOver()

           } 
        if ((this.roomba.posX == this.enemi2.posY && this.roomba.posY == this.enemi2.posX )){
            console.log("funciona3")

            this.gameOver()

           }

           if ((this.roomba.posX == this.enemi3.posY && this.roomba.posY == this.enemi3.posX )){
            console.log("funciona3")

            this.gameOver()

           }
       },
    

    
    
    



// moveAll: function() {

// this.player.move()
// },

// isCollision: function() {           // funcion para comprobar colisiones

//     this.obstacles.some( obs => {

//       if(this.player.posX+this.player.width >= obs.posX
//         &&this.player.posY+this.player.height >= obs.posY
//         &&this.player.posX<= obs.posX+obs.width){
        
//           //fin del juego, detenemos intervalo

//           this.gameOver()
//       }

//     })

//   },


changeMoves: function() {

this.roomba.dX*= (-1)


},

win: function() {
    console.log(this.grid.map.every(elm => elm.every(casilla => casilla == 1)))
    if (this.grid.map.every(elm => elm.every(casilla => casilla == 1)))
       { 
           console.log("se cumple")
            this.winOver()
       }
},



clear: function() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
},

gameOver: function() { 
    
    //Gameover detiene el juego.
    clearInterval(this.interval)
    // this.gif = new gif ()
    // this.gif.src = "https://giphy.com/gifs/3oz8xsuGvBn03H1boY/html5"
    this.ctx.font = "bold 400px ubuntu"
    this.ctx.fillStyle = "black"
    this.ctx.textAlign = "center"
    this.ctx.fillText("You Loose", window.innerWidth /2, (window.innerHeight/2))
  },

winOver: function() {
   let image = new Image ()
    image.src = "images/winner.png"
    image.onload = () => {
        this.ctx.drawImage(image,window.innerWidth / 3 , (window.innerHeight/3), 1000, 1200)
    }

    // this.ctx.font = "bold 400px ubuntu"
    // this.ctx.fillStyle = "white"
    // this.ctx.textAlign = "center"
    // this.ctx.fillText("You win", window.innerWidth /2, (window.innerHeight/2))
    clearInterval(this.interval)

},


}
