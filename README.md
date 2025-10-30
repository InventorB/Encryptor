# Encryptor
View the demo [here](https://encryptor.bwagner.dev/Home.html)

Encryptor is a simple symmetric key text encryption tool implemented using JavaScript and HTML. It features a basic encryption/decryption method and incorporates a Diffie-Hellman key exchange to securely generate a shared secret key. This shared secret key is then used for encrypting and decrypting text messages.
<p align="center" >
<img width="500" height="384" alt="image" src="https://github.com/user-attachments/assets/f6a54bb1-82b1-40e8-868c-7aee44216ec7" />

</p>


## Features and Functionality

*   **Encryption/Decryption Functionality:** Encrypts and decrypts text messages using a symmetric key algorithm.  The script uses a substitution cipher coupled with multiplication for over 1 million total possibilities. Someone determined could crack the code, but it's enough to protect a casual message.
*   **Diffie-Hellman Key Exchange:** Securely generates a shared secret key between two parties using the Diffie-Hellman algorithm. This is implemented across `Stepone.html` and `Steptwo.html`.
*   **Simple, Mobile Friendly Interface:** Provides a simple HTML-based user interface for easy encryption and decryption. Laptop, tablet, phone all work!
*   **URL Sharing:** Allows sharing encrypted messages and keys via URL parameters. No more copying keys!
*   **Message Sharing:** Easy links make sharing over SMS/iMessage a walk in the park.
*   **Key Validation:** Errors are alerted to the user.

## Technology Stack

*   HTML
*   CSS (for styling - `style.css`)
*   JavaScript (`scripts/Encryptor.js`, `scripts/Stepone.js`, `scripts/Steptwo.js`)

## Prerequisites

This project runs on HTML, CSS, and JS files. You can open files from the browser, or host on any static web server, like I do with Caddy or Github Pages.

## Usage Guide

### Encryption/Decryption:

1.  Open `Encryptor.html` in your browser.
2.  Enter the text you want to encrypt in the top text area.
3.  Enter an encryption code between 1 and 1000000 in the second text area.
4.  Click the "Run encryptor" button.
5.  The encrypted (or decrypted) text will appear in the "Result" text area.
6.  You can copy the encrypted text using the "Copy text" button, or copy a URL that includes the encrypted text using the "Copy filled URL" button.

**Encryption:**

*   The `encrypt()` function in `scripts/Encryptor.js` performs the encryption.
*   It converts the input text to a numeric representation using a predefined character mapping.
*   This numeric representation is then multiplied by the user-provided key.
*   The result is prefixed with a "~" to signify an encrypted message.

**Decryption:**

*   The `encrypt()` function in `scripts/Encryptor.js` also handles decryption.
*   If the input text starts with "~", it's treated as encrypted.
*   The function removes the "~", divides the numeric value by the key, and reverses the character mapping.

### Diffie-Hellman Key Exchange:

1.  Open `Home.html` in your browser.
2.  Click on "Securely Generate Key, Step 1" to open `Stepone.html`.
3.  Enter a random number between 1 and 99999 in the text area.  **REMEMBER THIS NUMBER!** This is your *private number*.
4.  Click the "Encrypt" button.
5.  Note down your *public number* that is displayed.  This is the number you will share with the other party.
6.  Share your *public number* with the other person.
7.  Once both parties have completed Step 1, proceed to Step 2.
8.  Enter your *private number* in the first text area.
9. Enter the *public number* you received from the other party in the second text area.
10. Click the "Encrypt" button.
11. The "Result" will display the shared secret key.
12. You can now go to the encryptor with this key that nobody else knows!

