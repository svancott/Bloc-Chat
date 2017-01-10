(function() {
     function ModalCtrl(Modal) {
        this.open = function() { 
			
			
			$uibModal.open()}
		
		
		$scope.close = function() { $close(Room) }
		$scope.submitData = function() {}
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['RoomCtrl', 'ui.bootstrap', ModalCtrl]);
 })();
