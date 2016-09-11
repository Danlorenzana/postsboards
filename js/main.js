// var myArray = ['January', 'February', 'March'];
// var rand = myArray[Math.floor(Math.random() * myArray.length)];

// console.log(rand)
// var newDiv = document.createElement('div')
// var rows = document.getElementById('rows')
// rows.appendChild(newDiv)
// rows.className = "col-md-6"
// newDiv.setAttributes(id, "boards")
// var boards = document.getElementById('boards')
var something = timeStamp()
console.log(something)

function posting() {
	var box = document.createElement('div')
	box.className = "boxee"
	allposts.appendChild(box)
	var item1 = document.getElementById('thePoster').value
	var user = document.createTextNode(item1)
	var newItem1 = document.createElement('h3')
	newItem1.appendChild(user)
	var item2 = document.getElementById('theMessage').value
	var toSay = document.createTextNode(item2)
	var newItem2 = document.createElement('p')
	newItem2.appendChild(toSay)
	newItem1.className = "userHeader"
	newItem2.className = "boardtext"
	box.appendChild(newItem1)
	box.appendChild(newItem2)
	// box.appendChild(newItem3)

	// var postTime = "howdy"
	// var newItem3 = document.createElement('p')
	// newItem3.appendChild(postTime)
}	

/**
 * Return a timestamp with the format "m/d/yy h:MM:ss TT"
 * @type {Date}
 */

function timeStamp() {
// Create a date object with the current time
  var now = new Date();

// Create an array with the current month, day and time
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

// Create an array with the current hour, minute and second
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

// Determine AM or PM suffix based on the hour
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

// Convert hour from military time
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

// If hour is 0, set it to 12
  time[0] = time[0] || 12;

// If seconds and minutes are less than 10, add a zero
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

// Return the formatted string
  return date.join("/") + " " + time.join(":") + " " + suffix;
}
