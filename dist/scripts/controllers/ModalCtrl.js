(function() {
     function ModalCtrl($uibModalInstance) {
		this.closeModal = function() {
			console.log("hi");
			$uibModalInstance.dismiss('cancel');
		};
		
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ModalCtrl);
 })();

