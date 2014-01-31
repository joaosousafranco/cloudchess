var init = function() {

/*
//--- start example JS ---
var board = new ChessBoard('board', 'start');
//--- end example JS ---
*/

    var board = new ChessBoard('board', {
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: false,
      onDrop: onDropChess
    });
    board.start();
    
    
    muzzley.on('onDropChess', function(obj, callback) {
      //alert(obj.newPosition);
      board.position(obj.newPosition);
    });
    
    
    function onDropChess (source, target, piece, newPos, oldPos, orientation) {
        if(JSON.stringify(oldPos)=="{}") return; //TODO: Modifiy this line to be more efficient
        muzzley.send('onDropChess', { "newPosition": ChessBoard.objToFen(newPos) });
    };
    
    
}; // end init()

$(document).ready(init);

