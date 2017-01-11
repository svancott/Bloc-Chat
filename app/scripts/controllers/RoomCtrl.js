(function() {
     function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
		this.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl'
			});
		};
		
		this.createRoom = function(roomName) {
			console.log("creating room");
			rooms.$add({ name: roomName, dateCreated: Firebase.ServerValue.TIMESTAMP });
		};
		this.hi = function() {
			console.log("hi");
		}
		this.cancelModal = function() {
			console.log("hi");
			this.modalInstance.dismiss('cancel');
		};
     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
 })();


 //*Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.