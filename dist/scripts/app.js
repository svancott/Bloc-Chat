(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
			.state('home', {
                url: '/',
				controller: 'RoomCtrl as roomData',
                templateUrl: '/templates/home.html'
            })
		
			.state('modal', {
				
				url: '/',
				contorller: 'ModalCtrl as modal',
				templateUrl: '/templates/modal.html'
			
			});
           
    }
    
    angular
         .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
         .config(config);
 })();



 