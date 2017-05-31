(function() {
     function RoomCtrl(Room, $uibModal) {
        var vm = this;
		vm.rooms = Room.all;

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
