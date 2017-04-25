(function() {
     function CreateUserModalCtrl($uibModalInstance, $cookies) {
  		 var vm = this;
  		 vm.newUser = {};

  		 vm.createUser = function() {
  			$cookies.put('chitChatCurrentUser', vm.newUser.name);
  				if (vm.newUser.name == '') {
  					alert("Please enter a valid username");
  					return false;
  				}
  			$uibModalInstance.dismiss('cancel');
  		 };
     }

     angular
         .module('blocChat')
         .controller('CreateUserModalCtrl', ['$uibModalInstance', '$cookies', CreateUserModalCtrl]);
 })();
