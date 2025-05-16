// Defined the onclick function
		// The Encryptor works by iterating over every letter. It finds the position in the list, and then gets the value of the other list.
		// The ~ signals a encrypted message, and the lack of it signals the program to encrypt it.
		// A would become 11, a would be 12, B would be 13...
		// A zero is placed in between each character to make decryption easier later.
		// So far, "Braden" becomes "~13049012018021041"
		// Then this is made an integer, and multiplied by the number acting as a key. 
		// The decryptor divides by this, and then swaps the nums with the message characters.
		// With over a million keys, this is very strong to make it hard for any amateur to crack.
		// It is not designed to be impossible to crack, but enough to deter most people.
		function startencrypt() {
			try {
				encrypt()
			} catch {
				alert("Something broke (invalid character?). Try something else.")
			}
		}

      function encrypt() {
			// Get the multiplier
		var multiplier = Number(document.getElementById('numId').value)
		// List of characters that work in the encryptor.
		var letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z","0","1","2","3","4","5","6","7","8","9","!",",",".","(",")","?","$","#","@",":",";","‘","’","/","+","-","*","'"," "]
		var numbers = []
		var end_msg
		var text = ""
		// Make another list with numbers (11,12,13,14,15,16,17,18,19,21,22,23)
		for (var i=1; i<=9; i++) {
			for (var ii = 1; ii <= 9;ii++) {
				var ind = String(i)+ String(ii)
				numbers.push(ind)
			}
		}
		console.log(letters);
		console.log(numbers);		
		var input = document.getElementById("textId").value
		document.getElementById("startbox").value = input
		var input_string = String(input)
		var output = "~"
		var validMultiplier
		Number(multiplier)
		// Confirms the key is a valid range
		if (multiplier <= 1000000 && multiplier >= 1) {
			validMultiplier = true
			console.log("Key Valid")
		} else {
			validMultiplier = false
			alert("Multiplier is not a valid number from 1 to 1000000. Pick something else.")
			console.log("Wrong range for key")
		}
		if (validMultiplier){
		if(String(input).substring(0,1)=="~") {
			// Decryptor
			end_msg = "Decrypted"
			input = BigInt(input.substring(1,input.length))
			input = input / BigInt(multiplier)
			input = String(input)
			while (input.indexOf(0) > 0) {
			input = input.substring(0,input.indexOf(0)) + input.substring((input.indexOf(0)+1), input.length)
			}
			var output_de = ""
			for (var i = 0; i<input.length;i++) {
				var character = input.substring(i,i+2)
				var location = numbers.indexOf(character)
				output_de = output_de + letters[location]
				i= i+1
			}
			output = output_de
		} else {
			// Encryptor
			end_msg = "Encrypted"
			for (var i = 0; i < input.length;i++) {
				// Get the character
				var character = input[i]
				// Get the index in the list of that char
				console.log(character);
				var index;
				index = letters.indexOf(character);
				// Get the char from the index of the other list
				output = output + "0" + numbers[index]
			}
			output = output.substring(1)
			//console.log("output:" + output)
			//console.log("output1" + output.substring(1))
			console.log("Output = " + output)
			output = BigInt(output)
			output = output * BigInt(multiplier)
			output = "~" + String(output)
		}
		document.getElementById('resultinternal').textContent = output;
		resultpage()
        }
	}
	function resetfield(id) {
        // Called when clicked on a field.
		// If a field's text is not changed, then clear it.
		// Id is the name of the box I can look at and change the value with.
		// Makes the code work with many boxes.
		if (id =="textId") {
			// Box textId has text "Type something secret here!", so look for that
			var searchfor = "Type something secret here!"
		} else if (id =="numId") {
			var searchfor = "Encryptor Code"
		}
        var field = "" + document.getElementById(id).value
        if (field.indexOf(searchfor) > -1) {
            // Make it blank
			document.getElementById(id).value = ""  
        } else {
            console.log("Field not changed");
            }
        }
	function resultpage() {
		// Function that cleans up HTML and displays result from encrypt function.
		document.getElementById("numId").hidden = 'none';
		document.getElementById("textId").hidden = 'none';
		document.getElementById("copyBtn").hidden = 'none';
		// Unhide the result element
		document.getElementById("result").hidden = '';
		document.getElementById("resultbox").hidden = '';
		document.getElementById("startbox").hidden = '';
		// Save the result to be used later
		var result = document.getElementById("resultinternal").textContent;
		// Fill the result element
		document.getElementById("resultbox").value = result;
		document.getElementById("resultbox").readOnly = true;
		document.getElementById("startbox").readOnly = true;
		// Unhide the original message element that was filled previously
		document.getElementById("originalmessage").hidden = '';
		// Unhide the buttons
		document.getElementById("copy").hidden = '';
		document.getElementById("sharetofriend").hidden = '';
		document.getElementById("restart").hidden = '';
	}
	function copy() {
		// When called get the result from a hidden html element, and then store it in the clipboard
		// resultinternal is a hidden element to store the data, and acts like a global variable
		text = document.getElementById("resultinternal").textContent;
		console.log("Recieved text: " + text);
		navigator.clipboard.writeText(text)
			.then(() => {
				alert("Sucessfully copied text. Paste in any box by double tapping and then clicking paste.")
			})
			.catch(err => {
			alert('Error in copying text: ', err);
			});
	}
	function message() {
		// Open the Imessage send prompt for easier sending.
		// Only confirmed compatibility on Mac, Ipad, and Iphone
		// Android seems to not work this way
		var result = document.getElementById("resultinternal").textContent;
		var url = ("sms://?&body=" + result);
        redirect(url); 
	}
	function redirect(url) {
		// Takes a url as a parameter and redirects the page to that url
        // A input of "Home.html" in the "EncryptionProject/" folder redirects on the codehs.me site to 
        // bradenwagner.codehs.me/EncryptionProject/Home.html
        window.location.href=url;
    }
	window.addEventListener("load", function() {
		const queryString = window.location.search;
		const params = new URLSearchParams(queryString);
		const query = params.get("query");
		console.log("Query:" + query);
		if(query){
		document.getElementById("textId").value = query;
		console.log("Set Query:" + query);
		} else {
			document.getElementById("textId").value = "Type something secret here!";
		}
	});