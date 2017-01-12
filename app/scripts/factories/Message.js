(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		
		var messages = $firebaseArray(ref);
		
		return {
			all: messages,
			getByRoomId: function (roomId) {
				messages.orderByChild("roomId").equalTo(roomId);
			},
		};
	
		
		
		
		//console.log(ref.orderByChild("roomId").equalTo("-KaHyV1KR0vD9Qyh2ajz");
		
		
		
		
	}
	
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message])
})();