//TODO declare three.js as dependency

var EBB = {};

EBB.Point = function(x, y){
    this.x = x;
    this.y = y;
};

EBB.Line = function (start, end) {
    //EBB.Point
    this.start = start;
    //EBB.Point
    this.end = end;
};

EBB.Grid = function(){
    console.log('Creating a new grid!');

    //EBB.Point
    this.points = [];
    //EBB.Point
    this.lines = [];
};

EBB.Grid.prototype = {
    constructor: EBB.Grid,

    addLine: function(x1, y1, x2, y2) {
        console.log('Adding a line!');
	},

    foobar: function() {
        console.log('Doing foobar!');
    }
};
