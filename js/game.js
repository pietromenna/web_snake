// Any drawable point

var Point = function(x, y) {
    if (x >= 0 && x <= 60 && y >= 0 && y <= 60)
        return {x, y};
    else {
        throw 'Invalid point';
    }
}

function Game(){
    this.snake = [new Point(30,30),new Point(31,30),new Point(32,30), new Point(33,30) ];
    this.direction = 'UP';
    this.food = [];
    this.score = 0;
}

function clearCanvas() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas_height = canvas.height;
    canvas_width = canvas.width;
    context.fillStyle = "black";
    context.fillRect(0,0,canvas_height,canvas_width);
}

function drawPoint(point, color) {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas_height = canvas.height;
    canvas_width = canvas.width;
    var x_size = canvas_width / 60;
    var y_size = canvas_height / 60;
    var x_offset = point.x * x_size;
    var y_offset = point.y * y_size;
    context.fillStyle = color;
    context.fillRect(x_offset,y_offset,x_size,y_size);
}

Game.prototype.createFutureHeadPoint = function(head) {
    switch(this.direction){
        case 'LEFT':
            if ((head.x - 1) >= 0)
            {
                return new Point((head.x - 1), head.y)
            }
            break;
        case 'RIGHT':
            if ((head.x + 1) <= 60)
            {
                return new Point((head.x + 1), head.y)
            }
            break;
        case 'UP':
            if ((head.y - 1) >= 0)
            {
                return new Point(head.x, head.y - 1)
            }
            break;
        case 'DOWN':
            if ((head.y + 1) <= 60)
            {
                return new Point(head.x, head.y + 1)
            }
            break;
        };
};

Game.prototype.updateGame = function() {
    //Listen for key strokes

    //Snake Movements TODO: own function
    var newSnake = new Array();
    var futureHead = this.createFutureHeadPoint(this.snake[0]);
    newSnake.push(futureHead);
    for(var i=1; i<this.snake.length;i++){
        newSnake.push(this.snake[i-1]);
    }
    this.snake = newSnake;
    //Check if ete anything
};


Game.prototype.tick = function() {
    //Update the Game
    this.updateGame();
    //Draw stuff
    clearCanvas();
    for (var i=0; i < this.snake.length; i++){
        drawPoint(this.snake[i],"green");
    }
};