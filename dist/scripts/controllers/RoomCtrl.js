(function() {
     function RoomCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
		this.messages = Message.all;
		this.getMessages = Message.getByRoomId;
		  
		this.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl',
				controllerAs: '$modal'
			});
		};
		
     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
 })();


 //*Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.