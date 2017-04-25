(function() {
     function CurrentRoomCtrl($state, Room, $firebaseArray, $firebaseObject, $cookies) {
        var vm = this;

		var ref = firebase.database().ref("messages");
		var roomsRef = firebase.database().ref("rooms");

		vm.roomId = $state.params.roomId;

		vm.roomName = $firebaseObject(roomsRef.child(vm.roomId));

		vm.getByRoomId = $firebaseArray(ref.child(vm.roomId));
		vm.send = function(newMessage) {
			vm.getByRoomId.$add({
				content: newMessage,
				username: $cookies.get('chitChatCurrentUser')
			});
			vm.newMessage = '';
		}

     }

     angular
         .module('blocChat')
         .controller('CurrentRoomCtrl', ['$state', 'Room', '$firebaseArray', '$firebaseObject', '$cookies', CurrentRoomCtrl]);
 })();
