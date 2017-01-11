(function() {
     function ModalCtrl($scope, $uibModal) {
		this.hi = function() {
			console.log("hi");
		};
		
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
 })();

