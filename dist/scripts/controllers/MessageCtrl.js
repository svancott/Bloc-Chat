(function() {
     function MessageCtrl(Message) {
        var x = this;
		 
		x.getMessages = function() {
			// Pass this to Firebase
			Message.getByRoomId();
		}
     }

     angular
         .module('blocChat')
         .controller('MessageCtrl', ['Message', MessageCtrl]);
 })();
