class Roomba {
    constructor(ctx, w, h) {         //keys
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h
        
        this.image = new Image ()
        this.image.src = "images/kisspng-irobot-roomba-652-robotic-vacuum-cleaner-irobot-ro-5af260fc5e5178.2558045715258339803863.jpg"
        

        this.width = 100
        this.height = 100

        // this.inicio = {
        //     direction : "S",
        //     i: 0,
        //     y: 0,
        //   };

          this.vel = 1
    
         
          
    
    }

    drawRoomba = function() {
        this.ctx.drawImage(

           this.image, 0,0,
           this.width,
           this.height,
        //    this.inicio


        )
    }
    


}