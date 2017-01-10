(function() {
     function ModalCtrl($scope, $modal) {
        $scope.open = function() {
			console.log('opening pop up');
			
			var modalInstance = $modal.open({
				templateUrl: 'modal.html',
			});
		}	
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl',['$scope', '$modal', ModalCtrl]);
 })();

 //* var modal = this;
//		modal.open = function (size, parentSelector) {
//			var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			
//			var modalInstance = $uibModal.open({
//				ariaLabelledBy: 'modal-title',
//				ariaDescripedBy: 'modal-body',
//				templateUrl: 'modal.html'
//				controller: 'ModalCtrl',
//				controllerAs: 'modal'
//				size: size,
//				appendTo: parentElem,
//				resolve: {
//					return modal,
//				}
//			});
		
		
//		}