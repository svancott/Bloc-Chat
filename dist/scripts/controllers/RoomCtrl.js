(function() {
     function RoomCtrl(Room, Message, $uibModal) {
        var vm = this;
		vm.rooms = Room.all;
		vm.messages = Message.messages
		
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
//		vm.getMessages = function() {
//			
//			console.log(vm.currentRoom.$id);
//			Message.getByRoomId('"' + vm.currentRoom.$id + '"')
//		}

     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
 })();


 //*Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.