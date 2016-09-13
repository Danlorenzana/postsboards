
var numberList = []

function posting() {
	
	var userValue = document.getElementById('thePoster').value
	var messageValue = document.getElementById('theMessage').value
	console.log(theMessage.value)
	if (userValue === "" || messageValue === " ") {
		console.log("failed")
		alert("Field(s) left empty")
	return
	}

	var userText = document.createTextNode(userValue)
	
	var messageText = document.createTextNode(messageValue)

	

	var box = document.createElement('div')
	allposts.appendChild(box)

	
	var userName = document.createElement('h3')
	userName.appendChild(userText)

	
	
	var messageCopy = document.createElement('p')
	messageCopy.appendChild(messageText)

	userName.className = "userHeader"
	messageCopy.className = "boardtext"
	box.appendChild(userName)
	box.appendChild(messageCopy)
	
	
	var newValue = numberList.length + 1 
	
	numberList.push(newValue)
	// console.log(numberList)
	// sort odd/even values for alternate colors
	for (var i = 0; i < numberList.length; ++i) { 
	    if ((numberList[i] % 2) === 0) {
	        // evenList.push(numberList[i]);
	        // console.log("even")
	        box.className = "boxEven"
	    }
	    else {
	    	// console.log("odd")
	    	box.className = "boxOdd"
	    }
	}
}	

