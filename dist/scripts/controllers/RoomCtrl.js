(function() {
      function RoomCtrl() {
        this.room = Room;
     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();