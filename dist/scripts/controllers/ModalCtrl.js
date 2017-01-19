(function() {
	function ModalCtrl($uibModalInstance, Room) {
		var vm = this;
		vm.newRoom = {};
		 
		vm.createRoom = function() {
			// Pass this to Firebase
			Room.create(vm.newRoom.name);
			$uibModalInstance.dismiss('cancel');
		}
		 
		vm.closeModal = function() {
			$uibModalInstance.dismiss('cancel');
		}
		
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
 })();