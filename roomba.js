class Roomba {
    constructor(ctx, w, h, keys ,map) {         //keys
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h
        
        
        this.image = new Image ()
        this.image.src = "images/Recurso 1.png"

        this.map =  map

        this.y0 = 0 //Intocable
        this.i0 = 0
        this.posY = this.y0   //Se modificará, representa la x y la y del roomba n el grid
        this.posX = this.i0


        this.width = this.gameWidth/11
        this.height = this.gameHeight/11
        
        this.y = (this.height*this.posY)// this.x = (this.height*this.posY)
        this.x = (this.width*this.posX)// this.y = (this.width*this.posX) 

        this.direction = "DOWN"
        // this.inicio = {
        //     direction : "S",
        //     i: 0,
        //     y: 0,
        //   };

        this.image.frames = 3         //Indicamos el numero de frames que tiene la imagen
        this.image.framesIndex = 0
        
        
        
        this.dX = 1
        this.dY = 1
    

        this.keys = keys
        
        this.setListeners()
          
        
    }


    
    
    change0For1 = function() {   // Formula para quitar los fucking cuadraditos

    if (this.map[this.posX][this.posY] ==  0) {    //mapa[coordenadaX de la roomba][coordenada Y de la roomba]
        this.map[this.posX][this.posY] = 1 }
    
    }

    animate1(framesCounter){ 
        console.log(framesCounter)
        if(framesCounter%5==0) {
          this.image.framesIndex++              //Cambiamos el frame de la imagen cada 5 fps.
          if(this.image.framesIndex>2) {
            this.image.framesIndex = 0
          }
        }
        
      }

    drawRoomba = function(framesCounter) {
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
                this.height),
          
                this.animate1(framesCounter)


        //    this.inicio
        


        //  if (this.posY < 0)         //izquierda
        //  if (this.posY > this.map.lenght) //derecha
        //  if (this.posX > this.map[0].lenght) //abajo
        //  if (this.posX < 0)                         //arriba                        // if(this.posX < this.gameWidth - this.x ||this.posX > this.x)
                                                          // if(this.posX < this.gameWidth - this.x ||this.posX > this.x)
                                                          // if(this.posX < this.gameWidth - this.x ||this.posX > this.x)
                                                          // if(this.posX < this.gameWidth - this.x ||this.posX > this.x)
                                                         // console.log ("no pasar")

                                                        // if(this.posY < this.GameHeight - this.y || this.posY > this.y)

        
    }
    
    moveLeft = function () {

        switch (this.direction) {     //-----------------------------------
            case "UP":
                
                    this.posY = this.posY +this.dY;
                    this.x = (this.width*[this.posY])       // this.direction = "LEFT";
                break;

            case "RIGHT":
                    this.posX = this.posX -this.dX;                                  
                    this.x = (this.width*this.posX)         // this.direction = "UP";
                break;

            case "DOWN":
                if (this.posY -this.dY < 0) {} else { 
                    this.posY = this.posY -this.dY;
                    this.x = (this.width*[this.posY])
                }       // this.direction = "RIGTH"
                break;

            case "LEFT":
                    this.posX = this.posX +this.dX;                                  
                    this.x = (this.width*this.posX)                        // this.direction = "DOWN"
                break;
        }

    }

    moveRight = function () {

        switch (this.direction) {
            case "UP":
                    this.posY = this.posY -this.dY;
                    this.x = (this.width*this.posY)// this.direction = "RIGHT";
                break;

            case "RIGHT":
                    this.posX = this.posX +this.dX;        // original formula guachi
                    this.x = (this.width*this.posX)// this.direction = "DOWN";
                break;

            case "DOWN":
                    if (this.posY +this.dY > 10) {} else { 
                    this.posY = this.posY +this.dY;
                    this.x = (this.width*this.posY)
                }
                    // this.direction = "LEFT"
                break;

            case "LEFT":
                    this.posX = this.posX -this.dX;                                  
                    this.x = (this.width*this.posX)                           // this.direction = "UP"
                break;
        }

    }

    moveUp = function () {    //----------------------------------------------

        switch (this.direction) {
            case "UP": 
                    this.posX = this.posX +this.dX;
                    this.y = ((this.height*this.posX))// this.y = this.y -1;

                break;

            case "RIGHT":
                    this.posY = this.posY +this.dY;                                  
                    this.x = ((this.height*this.posY))  // this.x = this.x -1;
                break;

            case "DOWN":
                    if (this.posX-this.dX < 0) {}else {   
                    this.posX = this.posX -this.dX;
                    this.y = ((this.height*this.posX))
                }
                    // this.y = this.y +1;
                break;

            case "LEFT":
                    this.posY = this.posY -this.dY;                                  
                    this.x = ((this.height*this.posY))// this.x = this.x +1;
                break;
        }

    }

    moveDown = function () {
        // if(this.y + 1 <= 10 || this.x - 1 < 0 || this.x + 1 >= 10 || this.y - 1 < 0){  
        switch (this.direction) {
            case "UP":
                    this.posX = this.posX -this.dX;
                    this.y = (this.height*this.posX)// this.y = this.y +1;
                
                break;

            case "RIGHT":
                    this.posY = this.posY+this.dY;                                  
                    this.x = (this.height*this.posY)// this.x = this.x -1;
                break;

            case "DOWN":
                // console.log(this.posY)
                if (this.posX +this.dX > 10){} else { 
                    this.posX = this.posX +this.dX;
                    this.y = ((this.height*this.posX))     //this.y = this.y -1;
                }
                break;

            case "LEFT":
                    this.posY = this.posY -this.dY;                                  
                    this.x = (this.height*this.posY)// this.x = this.x +1;
                break;
            }
        // }

    }

    setListeners() {
        document.onkeydown = (e) => {
            switch(e.keyCode) {
                case this.keys.TOP_KEY:
                    console.log("arriba")
                    this.moveUp()
                    break;
                    
                    case this.keys.RIGHT_KEY:
                        console.log("derecha")
                        this.moveRight()
                        break;
                        
                        case this.keys.LEFT_KEY:
                            console.log("izquierda")
                            this.moveLeft()
                            break;
                            
                            case this.keys.DOWN_KEY:
                                console.log("abajo")
                                this.moveDown()
                                break;
                                
                                
                            }
                            this.change0For1()
                        }
    }



}