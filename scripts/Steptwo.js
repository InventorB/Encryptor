var sharedsecret = 0;
    function redirect(url) {
        // Takes a url as a parameter and redirects the page to that url
        // A input of "Home.html" in the "EncryptionProject/" folder redirects on the codehs.me site to 
        // bradenwagner.codehs.me/EncryptionProject/Home.html
        if(sharedsecret != 0) {
            url = url + "?code=" + sharedsecret;
            window.location.href = url;
        } else {
            window.location.href = url;
        }
    }
    function resetfield(number) {
        // Alphabet is the internal name for the text if the box should be cleared.
        // Since both boxes with start with "NUMBER" the both can
        var alphabet = "NUMBER"
        // Field stores the text box
        // Number is the variable passed in with the id of the text box to clear and look at
        var field = "" + document.getElementById(number).value
        // If condition text is in box, clear it
        if (field.indexOf(alphabet) > -1) {
            // Clear text
            document.getElementById(number).value = ""  
        } else {
            // Otherwise leave a note in the console and do nothing
            console.log("Field not changed");
            }
        }
        function encrypt() {
            // Second encryptor does the math privatenum^publicnum MOD 99999
            //-------------------------------
            // Get both boxes (private and public) and make them BigInt's
            var privatenum = BigInt(document.getElementById("privatenumber").value);
            var publicnum = BigInt(document.getElementById("publicnumber").value);
            // Make the modulus a bigint
            var MODULUS = BigInt(99999);
            if (privatenum <= 99999 && privatenum >=1 && publicnum <= 99999 && privatenum >= 1) {
                // Multiply publicnum ^ privatenum
                var stepone = publicnum ** privatenum;
                // Then take modulus of the multiplication
                var sharedsecretB = BigInt(stepone) % MODULUS;
                // Make sharedsecret a number so it is just a number
                // Bigint ends with a n (ex 560n) and we dont want that
                sharedsecret = Number(sharedsecretB);
                // Give proper value to text box
                document.getElementById("result").textContent = ("Result: " + sharedsecret);
                // Unhide the result
                document.getElementById("result").hidden = '';
                // Hide the input boxes and their instructions
                document.getElementById("privatenotice").hidden = 'none';
                document.getElementById("privatenumber").hidden = 'none';
                document.getElementById("publicnotice").hidden = 'none';
                document.getElementById("publicnumber").hidden = 'none';
                // Hide the header
                document.getElementById("h3").hidden = 'none';
                // Unhide the next steps
                document.getElementById("step0").hidden = '';
                document.getElementById("step1").hidden = '';
                document.getElementById("step2").hidden = '';
                document.getElementById("step3").hidden = '';
                // Hide the line breaks
                document.getElementById("lines1").hidden = 'none';
                document.getElementById("lines2").hidden = 'none';
                // Remove the encrypt button
                document.getElementById("encryptbutton").hidden = 'none';
                // Unhide the to the encryptor button
                document.getElementById("totheencryptor").hidden = '';

            } else {
                // Log if the number is not valid or something strange happened
                console.log("Not a valid number");
            }

        }
        window.addEventListener("load", function() {
		const queryString = window.location.search;
		const params = new URLSearchParams(queryString);
		const public = params.get("public");
		console.log("Public:" + public);
		if(public){
		document.getElementById("publicnumber").value = public;
		console.log("Public Key:" + public);
		} else {
			document.getElementById("publicnumber").value = "YOUR PRIVATE NUMBER.";
		}
	});