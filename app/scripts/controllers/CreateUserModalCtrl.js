(function() {
     function CreateUserModalCtrl($uibModalInstance, $cookies) {
		 var vm = this;
		 vm.newUser = {};
		 
		 vm.createUser = function() {
			$cookies.put('blocChatCurrentUser', vm.newUser.name);
				if (vm.newUser.name == '') {
					alert("Please enter a valid username");
					return false;
				}
			$uibModalInstance.dismiss('cancel');
		 };
//		 vm.currentUser = $cookies.get('blocChatCurrentUser');
//		 vm.createRoom = function() {
//			// Pass this to Firebase
//			Room.create(vm.newRoom.name);
//			$uibModalInstance.dismiss('cancel');
//		 }
//		 
//		 vm.closeModal = function() {
//			$uibModalInstance.dismiss('cancel');
//		 };
		
     }

     angular
         .module('blocChat')
         .controller('CreateUserModalCtrl', ['$uibModalInstance', '$cookies', CreateUserModalCtrl]);
 })();