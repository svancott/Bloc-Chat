(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
			.state('home', {
                url: '/rooms/:roomId',
				controller: 'CurrentRoomCtrl as $currentRoom',
                templateUrl: '/templates/home.html'
            })
		
			.state('modal', {
				
				url: '/',
				contorller: 'ModalCtrl as modal',
				templateUrl: '/templates/modal.html'
			});
           
    }
	
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/createUserModal.html',
				controller: 'CreateUserModalCtrl',
				controllerAs: '$createUserModal'
			});
		}
	}
    
    angular
         .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
         .config(config)
		 .run(['$cookies', '$uibModal', BlocChatCookies]);
	
 })();



 