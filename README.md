# ChitChat

![smiley logo](https://www.chargify.com/images/icons/grinning-052e9db6.png)

Welcome to ChitChat!
A real-time chat application built with AngularJS and Firebase.

After building my [Time2Jam](https://github.com/svancott/Time2Jam) app using AngularJS, I wanted to build another app using the framework, and decided on **_ChitChat_**. It’s a real time chat application built with Angular that uses Google's Firebase Cloud Messaging.

Firebase is a mobile platform designed to help develop high-quality apps. I used it to store the database for **_ChitChat_** and found it very useful. Once I got the hang of the `$firebaseArray` service, it was easy to pull the data that I wanted off the database. I used UI Bootstrap to create the app’s modals. UI Bootstrap and its many components are a great help in developing apps with Angular. Lastly, to make and store the users' screen names, I used `ngCookies` and the `$cookies` service, which make it easy to store information in the browser for future use.

I hit a few roadblocks while making **_ChitChat_** and did quite a bit of research while trying to get unstuck. One of the main issues I had was displaying each chat room's messages individually when the name of the room was clicked. According to Firebase, it’s good practice to keep your data structures as flat as possible, meaning don’t nest your data too deeply. Although for my purposes, nesting all the data would have been **much** easier, I decided I wanted to follow their advice and keep my data structures nice and flat. I made separate paths for the rooms and messages, but then had to figure out how to connect the two. How could I get the messages from a certain room to display while being stored in a completely separate path?

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
So let’s say that you're on the landing page of **_ChitChat_**. The list of available rooms is automatically displayed using the data from our Firebase database. If you click on ‘Steve’s Room’, the ‘home’ template will display in the view. In our `$stateProvider` service we made the url for the ‘home’ state to include the roomID. We can now take that roomID from the url and use it to call the `$firebaseArray` service, but this time on the ‘messages’ path. All that's left to do now is make the roomId a method in our Messages Controller by pulling it from $state.params, and then put that into the Firebase's child() method. It looks like this:

```javascript
this.roomId = $state.params.roomId;
this.getMessagesByRoomId = $firebaseArray(firebase.database().ref("messages").child(this.roomId));
```
And there you have it, each room displaying it own messages. Easier said than done :)

While building the app, I tried to keep my files organized as well as possible. Although it’s just a simple app for now with a relatively small number of scripts, I know it’s good practice to keep them all in order, so I have separate directories for my templates, controllers and services. By keeping an app organized like this, its easy to expand it later if need be, or if other developers want to work on it.

I had a lot of fun building **_ChitChat_** and learned a lot along the way. I enjoyed using Firebase for my database and would definitely recommend it. I am continually impressed by the power and versatility of the AngularJS framework. The more I code and practice building apps, the more I want to learn! With the right tools, anything is possible!

Feel free to check out my site:
[SteveVancott.com](http://SteveVancott.com)

or some more of my projects:
[Github](https://github.com/svancott)

# About me

I'm a developer who's passionate about writing good code and loves the satisfaction of solving problems.

I've developed several apps using JavaScript, AngularJS, jQuery, and Ruby on Rails, using Git/Github as well as Heroku.

I'm also experienced HTML5 and CSS, and have worked with SQL and Firebase.

Currently, I'm looking for a developer role at a company that's as passionate as I am about doing good work.

[Check out more at my site!](http://stevevancott.com)

Feel free to email me at thevanicotti@gmail.com
