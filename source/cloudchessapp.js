

(function (CloudChess, undefined) {

    CloudChat.chessGuest = {
        load : function(callback){
            callback(new CloudChat.User({
                name : CloudChat.Strings.guid().substring(0,5),
                provider : 'chessGuest',
                email : null,
                link : null,
                id : CloudChat.Strings.guid(),
                token : CloudChat.Strings.guid()
            }));
        }
    }

    CloudChess.setup = {
        board : {
        	pieceTheme: '../libs/chessboardjs-0.3.0/img/chesspieces/wikipedia/{piece}.png',
			showNotation: false,
			draggable: true,
			dropOffBoard: 'snapback'
        }       
    }

    CloudChess.user = null;

    CloudChat.EventManager.subscribe("loggedin",function(user){  
        CloudChess.user = user;
        setTimeout(function(){
            CloudChat.EventManager.publish("openroom",new CloudChat.Room(
                { 
                    name: "cloudchess", 
                    active: true,
                    id : "cloudchess" 
                })
            );                
        },100);                                      
    });

    CloudChat.EventManager.subscribe("loginfailed",function(provider){
        console.error("Failed to login with",provider);
    });

    CloudChat.EventManager.subscribe("receivedmessage",function(message){            
        if(message.room == "cloudchess"){
            setTimeout(function(){                
                var $target = $('#chat-messages'); 
                $target.animate({scrollTop: $target.height()}, 1000);
                setTimeout(function(){
                    $target.stop();
                },1500);                    
            },50);    
        }            
    });

    CloudChat.EventManager.subscribe("peerroomopened",function(room){ 
        console.log("Peer room opened:",room);

        var storageService = CloudChess.RealtimeStorageService.getInstance();

        storageService.game(room.id,function(game){
            if(!game){
                var newGame = new CloudChess.Game({
                    id : room.id,
                    white : CloudChess.user.id
                });

                storageService.createGame(newGame,function(game){
                    CloudChat.api.sendMessage(CloudChess.user,room.id,"game");
                    CloudChat.EventManager.publish("currentGame",game); 
                });
            }else{                
                CloudChat.api.sendMessage(CloudChess.user,room.id,"game");
                CloudChat.EventManager.publish("currentGame",game); 
            }
        });
    });

    $(function(){
        $("#chat-messagetextbox").keyup(function(event){
            if(event.keyCode == 13){
                $("#chat-sendbutton").click();
            }
        });
    });
})(window.CloudChess = window.CloudChess || {});