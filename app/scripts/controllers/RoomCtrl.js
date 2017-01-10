(function() {
     function RoomCtrl(Room, $scope) {
        $scope.rooms = Room.all;
		
     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$scope', RoomCtrl]);
 })();


 //*Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.