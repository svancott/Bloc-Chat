(function() {
     function CreateUserModalCtrl($uibModalInstance) {
		 var vm = this;
		 vm.newRoom = {};
		 
		vm.createRoom = function() {
			// Pass this to Firebase
			Room.create(vm.newRoom.name);
			$uibModalInstance.dismiss('cancel');
		}
		 
		vm.closeModal = function() {
			$uibModalInstance.dismiss('cancel');
		};
		//vm.test = "Test Modal Data";
     }

     angular
         .module('blocChat')
         .controller('CreateUserModalCtrl', ['$uibModalInstance', CreateUserModalCtrl]);
 })();