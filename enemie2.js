class Enemigoup {
    constructor (ctx, w, h ,map ) {


        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h

        this.image = new Image ()
        this.image.src = "images/topdown_shooter/monster/slime1_front.png"

        this.map =  map

        this.y0 =1 //Intocable
        this.i0 = 4
        // this.i1= 1
        this.posY = this.y0   //Se modificará, representa la x y la y del enemigo n el grid
        this.posX = this.i0

        this.image.frames = 4           //Indicamos el numero de frames que tiene la imagen
        this.image.framesIndex = 0

        this.width = this.gameWidth/11
        this.height = this.gameHeight/11
        
        this.y = (this.height*this.posY)// this.x = (this.height*this.posY)
        this.x = (this.width*this.posX)

        this.dX = 1


    }

    animate(framesCounter){ 
        console.log(framesCounter)
        if(framesCounter%5==0) {
          this.image.framesIndex++              //Cambiamos el frame de la imagen cada 5 fps.
          if(this.image.framesIndex>3) {
            this.image.framesIndex = 0
          }
        }
        
      }

    drawEnemi(framesCounter) {
        console.log(this.posX, this.posY)
        this.ctx.drawImage(
          this.image, 
          this.image.framesIndex * Math.floor(this.image.width/this.image.frames),  //Punto x donde empieza a recortar
          0,                                                                        //Punto y donde empieza a recortar
          Math.floor(this.image.width/this.image.frames),                           //Punto x donde termina de recortar
          this.image.height,                                                        //Punto y donde termina de recortar
          this.x, 
          this.y, 
          this.width, 
          this.height)
    
          this.animate(framesCounter)
}


    moveEnemi = function(framesCounter) {
      
        if(framesCounter%60==0) {
                    
          this.posY = this.posY -this.dX;                                  
          this.y = (this.height*this.posY)  

        if (this.posY +1 == 1) {
            this.dX *= -1
         } else 
         if (this.posY +1  == 9)         //!!!!!!REVERSE
          {  
                                                          console.log(this.posY, "SOY LA POSY DE ENEMI")
            this.dX *= -1
                                                        }
    }

   }

   }