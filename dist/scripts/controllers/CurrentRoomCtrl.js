(function() {
     function CurrentRoomCtrl($state, Room, $firebaseArray, $firebaseObject) {
        var ref = firebase.database().ref("messages");
		var vm = this;
		vm.roomId = $state.params.roomId;
		var roomsRef = firebase.database().ref("rooms");
		vm.getRoomName = function(roomId){
			vm.roomName = $firebaseObject(roomsRef.child(roomId));
			return vm.roomName
			console.log(roomId)
		} 
		vm.getCurrentRoom = function() {
			vm.currentRoom = Room.getRoom(vm.roomId);
			console.log("current room:" + vm.currentRoom);
		}
		
			
//			function() {
//			// Pass this to Firebase
//			vm.currentRoom = Room.getRoom();
//			console.log("current room:" + vm.currentRoom)
//		}
		
		vm.getRoom = function(roomId) {
			
			
			vm.room = $firebaseArray(ref.child(roomId));
			
			return vm.room;
			console.log(vm.room);
		}

     }

     angular
         .module('blocChat')
         .controller('CurrentRoomCtrl', ['$state', 'Room', '$firebaseArray', '$firebaseObject', CurrentRoomCtrl]);
 })();