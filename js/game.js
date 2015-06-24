var Point = function(x, y) {
    return {x, y};
}

function Game(){
    var snake = [];
    var direction = '';
    var food = [];
    var score = 0;
}

Game.prototype.tick = function() {
    
};

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
    var x_offset = point.x;
    var y_offset = point.y;
    context.fillStyle = color;
    context.fillRect(x_offset,y_offset,x_size,y_size);
}