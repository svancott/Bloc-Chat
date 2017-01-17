(function() {
     function CurrentRoomCtrl($state, Room) {
        var vm = this;
		vm.roomId = $state.params.roomId;
		vm.getCurrentRoom = function() {
			vm.currentRoom = Room.getRoom(vm.roomId);
			console.log("current room:" + vm.currentRoom);
		}
			
//			function() {
//			// Pass this to Firebase
//			vm.currentRoom = Room.getRoom();
//			console.log("current room:" + vm.currentRoom)
//		}

     }

     angular
         .module('blocChat')
         .controller('CurrentRoomCtrl', ['$state', 'Room', CurrentRoomCtrl]);
 })();