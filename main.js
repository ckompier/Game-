const Game = {
    canvas:undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,


init: function() {
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.width = window.innerWidth *.98
    this.height = window.innerHeight * .98
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

        
    }, 1000/this.fps)
},


reset: function() {
    this.grid = new Mapfog (this.ctx, this.width, this.height, this.map)
    this.roomba = new Roomba(this.ctx,this.width, this.height)
    console.log(this.roomba)

},

drawAll: function() {

this.grid.drawGrid()
this.roomba.drawRoomba()

},

clear: function() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
}




}
