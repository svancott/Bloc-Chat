(function() {
     function RoomCtrl(Room, Message, $uibModal, $scope) {
        this.rooms = Room.all;
		$scope.getMessages = function (roomId) {
			Message.getByRoomId("'" + roomId + "'");
		};
		this.activeRoom = function (room) {
			$scope.activeRoom = room;
		}
		this.messages = Message.messages
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
         .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$scope', RoomCtrl]);
 })();


 //*Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.