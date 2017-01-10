(function() {
     function ModalCtrl($uibModal) {
        var modal = this;
		modal.open = function (size, parentSelector) {
			var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			
			var modalInstance = $uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescripedBy: 'modal-body',
				templateUrl: 'modal.html'
				controller: 'ModalCtrl',
				controllerAs: 'modal'
				size: size,
				appendTo: parentElem,
				resolve: {
					return modal,
				}
			});
		
		
		}
			
			
			
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['RoomCtrl', 'Room', 'ui.bootstrap', ModalCtrl]);
 })();
