## Bloc Chat

![smiley logo](https://s.yimg.com/ny/api/res/1.2/FJNB95lIT8U5cyCzypUfnA--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjMwO2lsPXBsYW5l/http://l.yimg.com/os/publish-images/lifestyles/2014-04-15/8b9a9de0-c484-11e3-ac71-cf30696dc896_Classic-smiley-emoji.jpg)

A real-time chat application built with AngularJS and Firebase.

After building my [Bloc Jams](https://github.com/svancott/bloc-jams-angular) app using AngularJS, I wanted to build another app using the framework, and decided on **_Bloc Chat_**. It’s a real time chat application built with Angular that uses Google's Firebase Cloud Messaging.

Firebase is a mobile platform designed to help develop high-quality apps. I used it to store the database for **_Bloc Chat_** and found it very useful. Once I got the hang of the `$firebaseArray` service, it was easy to pull the data that I wanted off the database. I used UI Bootstrap to create the app’s modals. UI Bootstrap and its many components are a great help in developing apps with Angular. Lastly, to make and store the users' screen names, I used `ngCookies` and the `$cookies` service, which make it easy to store information in the browser for future use.

I hit a few roadblocks while making **_Bloc Chat_** and did quite a bit of research while trying to get unstuck. One of the main issues I had was displaying each chat room's messages individually when the name of the room was clicked. According to Firebase, it’s good practice to keep your data structures as flat as possible, meaning don’t nest your data too deeply. Although for my purposes, nesting all the data would have been **much** easier, I decided I wanted to follow their advice and keep my data structures nice and flat. I made separate paths for the rooms and messages, but then had to figure out how to connect the two. How could I get the messages from a certain room to display while being stored in a completely separate path?

To resolve the issue I turned to `$state params`. In index.html, I display the list of available rooms by using an ngRepeat. My Room Controller has a Room service injected in it which gets the data from the rooms path on Firebase. Each room name in the list of rooms displays as a link with an `<a>` tag, so I added a ui-sref for each link that inserts that room’s unique room ID (created by Firebase) to the url when that room is clicked.

```javascript
<div ng-repeat="room in roomData.rooms">
	<a ui-sref="home({roomId: room.$id})">
		{ { room.name } }
	</a>
</div>
```
In my app.js, I use the $stateProvider service to format my ‘home’ state.



```javascript
$stateProvider
	.state('home', {
		url: '/rooms/:roomId',
		controller: 'CurrentRoomCtrl as $currentRoom',
		templateUrl: '/templates/home.html'
});

```
So let’s say that you're on the landing page of **_Bloc Chat_**. The list of available rooms is automatically displayed using the data from our Firebase database. If you click on ‘Steve’s Room’, the ‘home’ template will display in the view. In our `$stateProvider` service we made the url for the ‘home’ state to include the roomID. We can now take that roomID from the url and use it to call the `$firebaseArray` service, but this time on the ‘messages’ path. All that's left to do now is make the roomId a method in our Messages Controller by pulling it from $state.params, and then put that into the Firebase's child() method. It looks like this:

```javascript
this.roomId = $state.params.roomId;
this.getMessagesByRoomId = $firebaseArray(firebase.database().ref("messages").child(this.roomId));
```
And there you have it, each room displaying it own messages. Easier said than done :)

While building the app, I tried to keep my files organized as well as possible. Although it’s just a simple app for now with a relatively small number of scripts, I know it’s good practice to keep them all in order, so I have separate directories for my templates, controllers and services. By keeping an app organized like this, its easy to expand it later if need be, or if other developers want to work on it.

I had a lot of fun building **_Bloc Chat_** and learned a lot along the way. I enjoyed using Firebase for my database and would definitely recommend it. I am continually impressed by the power and versatility of the AngularJS framework. The more I code and practice building apps, the more I want to learn! With the right tools, anything is possible!

Feel free to check out the finished product:
[Bloc Chat](https://github.com/svancott/Bloc-Chat)

or more projects like this at my site:
[SteveVancott.com](http://SteveVancott.com)
