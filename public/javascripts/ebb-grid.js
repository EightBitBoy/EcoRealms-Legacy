var EBB = {};

EBB.Grid = function(){
    console.log('Creating a new grid!');
};

EBB.Grid.prototype = {
    constructor: EBB.Grid,

    addLine: function() {
        console.log('Adding a line!');
	},

    foobar: function() {
        console.log('Doing foobar!');
    }
};

EBB.Point = function(x, y){
    this.x = x;
    this.y = y;
};
