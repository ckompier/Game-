class Mapfog {
    constructor(ctx, width, height){
    
        this.ctx = ctx,
        this.width = width,
        this.height = height,
        this.map =  [

 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,],
 [ 0,0,0,0,0,0,0,0,0,0,0,]

]
console.log(this.map)

}

//mapFog[y][x]
drawGrid = function() {
    for (let i = 0; i < this.map.length; i++) {

        for (let y = 0; y < this.map[i].length; y++)
        {
        switch (this.map[i][y])
        {
            case 0:
                this.ctx.fillStyle = "rgba(150, 150, 150, 0.8)"
                break;
                
                case 1: 
                this.ctx.fillStyle = "rgba(150, 150, 150, 0)"
                break
            }
            this.ctx.fillRect((this.width/this.map.length*[y]),(this.height/this.map[i].length*[i]) ,(this.width/this.map.length), (this.height/this.map[i].length))


        }
    
    }


    
}

}