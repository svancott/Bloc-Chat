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
            });

    }

	function ChitChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('chitChatCurrentUser');
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/createUserModal.html',
				controller: 'CreateUserModalCtrl',
				controllerAs: '$createUserModal',
				backdrop: 'static',
				keyboard: 'false'
			});
		}
	}

    angular
         .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
         .config(config)
		 .run(['$cookies', '$uibModal', ChitChatCookies]);

 })();
