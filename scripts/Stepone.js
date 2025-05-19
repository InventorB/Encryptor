var publicnumber = 0;
    function redirect(url) {
        // Takes a url as a parameter and redirects the page to that url
        // A input of "Home.html" in the "EncryptionProject/" folder redirects on the codehs.me site to 
        // bradenwagner.codehs.me/EncryptionProject/Home.html
        window.location.href=url;
    }
    function encrypt() {
        // Takes the number, and does the math (base)^num MOD 99999. Changes HTML content to show result.
        //
        // ---------------------------------------
        //
        // BigInts only work with other BigInts
        // Make the modulus a BigInt so that we can multiply it to very large numbers
        var MODULUS_VALUE = BigInt(99999);
        // Make the base also a BigInt
        var BASE=BigInt(5);
        // Define multiplied for the end
        var multiplied;
        // Green is the internal name for this
        var green;
        // Get the string from the textbox
        var private_str = document.getElementById('number').value;
        // Convert it to a number
        var private_int = Number(private_str)
        // Upgrade it to a BigInt to be up to very big
        private_bint = BigInt(private_int);
        // If the number is valid, then work on it
        if (private_int > 1 && private_int <= 99999) {
            // Multiply it by their number
            multiplied = BASE ** private_bint;
            // Divide it by the modulus value
            // Green is the internal name for the 
            green = multiplied % MODULUS_VALUE
            // Variable that holds the content of the public number
            publicnumber = green;
            var replace = ("Your public number is: " + green);
            // Make the public number element
            document.getElementById('publicnumber').textContent = replace;
            // Store the private int in a variable
            var privateinttext= ("Your private number is: " + private_int);
            // Fill the "publicnumberforshare" element for later use
            document.getElementById('publicnumberforshare').textContent = green;
            // Fill the private number for later use
            document.getElementById('privatenumber').textContent = privateinttext;
            // Hide the text box used to take in the number
            document.getElementById("number").style.display = 'none';
            // Hide the encrypt button
            document.getElementById("encryptbutton").style.display = 'none';
            // Hide the text warning above
            document.getElementById("generaltext").style.display = 'none';
            // Hide the Step One Text
            document.getElementById("h2").hidden = 'none';
            // Unhide the public and private numbers, and their notices
            document.getElementById("privatenumber").hidden = '';
            document.getElementById("publicnumber").hidden = '';
            document.getElementById("privatenotice").hidden = '';
            document.getElementById("publicnotice").hidden = '';
            document.getElementById("stepnotice").hidden = '';
            // Unhide the button to send the number to a friend
            document.getElementById("sendtofriend").hidden = '';
            document.getElementById("sendtofriend").hidden = '';
            document.getElementById("sharetofriendurl").hidden = '';


        } else if (private_int >= 99999) {
           // else if above warns the user if the number is too big
            alert("Due to browser integer limitations, your code can't be bigger than 99999. Please input a smaller number.");
        } else {
            // Code comes here if it is not a valid number, of something weird happened
            // Shows a popup warning the user if the code is bad
            alert("Not valid");
        }
    }
    function resetfield(number) {
        // Called when a user clicks on a box
        // If the number box contains the original text on call, clear it
        if (document.getElementById('number').value == "Enter that here.") {
        // Clear the box if condition is true
        document.getElementById('number').value = ""
        }
        // Otherwise do nothing
    }
    function sendlink(number) {
        // Open this message straight in messages.
		// Only confirmed compatibility on Mac, Ipad, and Iphone
		// Android seems to not work this way
        // Define the url
        var url= ("sms://?&body=Public Number: " + number);
        // Call the redirect function to open the url
        redirect(url);
        }
    function messageURL() {
    // Open the Imessage send prompt for easier sending.
    // Only confirmed compatibility on Mac, Ipad, and Iphone
    // Android seems to not work this way
    const { origin, pathname } = window.location;
// Remove the last part of the path (the filename)
    const pathOnly = pathname.substring(0, pathname.lastIndexOf('/'));

    const fullPath = origin + pathOnly;
    var result = fullPath + "/Steptwo.html" + "?public=" + publicnumber;
    var url = ("sms://?&body=" + "Key Pairing:" + result);
    redirect(url); 
    }