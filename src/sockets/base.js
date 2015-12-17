var fs = require('fs');
var store = __dirname+ './../storage/';
module.exports.attatch = function(io){
    //attatch all events here :)
    io.on('connection', function(socket){
        console.log('a user connected');
        io.emit('new.user.up',{status:'ok'});
        
        //listen all client events here on socket
        // socket.on('received', function(data){
        //     console.log(data);
        // })
        socket.on('mp3',function(data){

            var songTitle = data.title;
                if (songTitle) {
                var songPath = store+'songs/'+songTitle + ".mp3";
                var readStream = fs.createReadStream(songPath, 
                                             {'flags': 'r',
                                              'encoding': 'binary', 
                                              'mode': 0666, 
                                              'bufferSize': 64 * 1024});
                readStream.on('data',function(data){
                    //console.log(typeof data);
                    socket.send(data);
                });
            }else{
                console.log('hmmm');
            }

        });//end socket

    });

}



