(function() {
     function CurrentRoomCtrl($state, Room, $firebaseArray, $firebaseObject, $cookies) {
        var ref = firebase.database().ref("messages");
		var vm = this;
		vm.roomId = $state.params.roomId;
		var roomsRef = firebase.database().ref("rooms");
		vm.getRoomName = function(roomId){
			vm.roomName = $firebaseObject(roomsRef.child(roomId));
			return vm.roomName
			console.log(roomId)
		} 
		
		vm.name = $firebaseObject(roomsRef.child(vm.roomId));
		 
		vm.getCurrentRoom = function() {
			vm.currentRoom = Room.getRoom(vm.roomId);
			console.log("current room:" + vm.currentRoom);
		}
		vm.getByRoomId = $firebaseArray(ref.child(vm.roomId));
		vm.send = function(newMessage) {
			vm.getByRoomId.$add({
				content: newMessage,
				username: $cookies.get('blocChatCurrentUser')
			});
			vm.newMessage = '';
		}
		
		
			
//			function() {
//			// Pass this to Firebase
//			vm.currentRoom = Room.getRoom();
//			console.log("current room:" + vm.currentRoom)
//		}
		
		

     }

     angular
         .module('blocChat')
         .controller('CurrentRoomCtrl', ['$state', 'Room', '$firebaseArray', '$firebaseObject', '$cookies', CurrentRoomCtrl]);
 })();