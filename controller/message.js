/**
 * Created by Siraj on 2016-06-06.
 */
myApp.controller('messageCtrl',function($scope,$rootScope,$location, $http){

    $scope.submit= function(){
       // console.log("hello");
        socket.emit('chat message',$scope.m);
       // return false;




    }

    socket.on('chat message', function(msg){

        console.log(msg);
        text(msg);
        $('#messages').append($('<li>').text(msg));
    });

});