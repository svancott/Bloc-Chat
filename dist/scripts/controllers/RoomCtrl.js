(function() {
     function RoomCtrl(Room, $uibModal) {
        var vm = this;
		vm.rooms = Room.all;
		
		
		vm.setCurrentRoom = function (room) {
			console.log(room);
			vm.currentRoom = room;
		}
			
		vm.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl',
				controllerAs: '$modal'
			});
		};

     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
 })();


 //*Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.