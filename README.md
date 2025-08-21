# Encryptor

Encryptor is a simple symmetric key text encryption tool implemented using JavaScript and HTML. It features a basic encryption/decryption method and incorporates a Diffie-Hellman key exchange to securely generate a shared secret key. This shared secret key is then used for encrypting and decrypting text messages.

[https://github.com/InventorB/Encryptor](https://github.com/InventorB/Encryptor)

## Features and Functionality

*   **Text Encryption/Decryption:** Encrypts and decrypts text messages using a symmetric key algorithm.  The script uses a substitution cipher coupled with multiplication by a user-defined key.
*   **Diffie-Hellman Key Exchange:** Securely generates a shared secret key between two parties using the Diffie-Hellman algorithm. This is implemented across `Stepone.html` and `Steptwo.html`.
*   **User-Friendly Interface:** Provides a simple HTML-based user interface for easy encryption and decryption.
*   **URL Sharing:** Allows sharing encrypted messages and keys via URL parameters.  This is useful for transferring data or keys between parties.
*   **Message Sharing:** Supports direct message sharing (SMS) of encrypted text and URLs, primarily optimized for iOS (iMessage).
*   **Key Validation:** Basic validation to ensure keys are within an acceptable range.

## Technology Stack

*   HTML
*   CSS (for styling - `style.css`)
*   JavaScript (`scripts/Encryptor.js`, `scripts/Stepone.js`, `scripts/Steptwo.js`)

## Prerequisites

This project runs on HTML, CSS, and JS files. You can open files from the browser, or host on any static web server, like I do with Caddy.

## Usage Guide

### Encryption/Decryption:

1.  Open `Encryptor.html` in your browser.
2.  Enter the text you want to encrypt in the top text area (the one that defaults to "Type something secret here!").
3.  Enter an encryption code between 1 and 1000000 in the second text area (the one that defaults to "Encryptor Code").
4.  Click the "Run encryptor" button.
5.  The encrypted (or decrypted) text will appear in the "Result" text area.
6.  You can copy the encrypted text using the "Copy text" button, or copy a URL that includes the encrypted text using the "Copy filled URL" button.

**Encryption Process:**

*   The `encrypt()` function in `scripts/Encryptor.js` performs the encryption.
*   It converts the input text to a numeric representation using a predefined character mapping.
*   This numeric representation is then multiplied by the user-provided key.
*   The result is prefixed with a "~" to signify an encrypted message.

**Decryption Process:**

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
8.  Click on "Securely Generate Key, Step 2" from `Home.html` or the "To Step Two" button in `Stepone.html` to open `Steptwo.html`.
9.  Enter your *private number* in the first text area.
10. Enter the *public number* you received from the other party in the second text area.
11. Click the "Encrypt" button.
12. The "Result" will display the shared secret key.
13. Click "To the Encryptor!" to use this key for encrypting/decrypting messages, the key will automatically fill the `Encryptor Code` field.

**Diffie-Hellman Process (Step 1 - `Stepone.html`):**

*   The `encrypt()` function in `scripts/Stepone.js` calculates the public number using the formula:  `5 ^ private_number MOD 99999`.
*   The private number must be between 1 and 99999.
*   The function reveals the public number and hides the input fields.

**Diffie-Hellman Process (Step 2 - `Steptwo.html`):**

*   The `encrypt()` function in `scripts/Steptwo.js` calculates the shared secret using the formula: `public_number ^ private_number MOD 99999`.
*   The private and public numbers must be between 1 and 99999.
*  The function grabs URL parameters, allowing the public number to be transfered via URL
*   It displays the shared secret and hides the input fields.
*   The resulting shared secret can be passed as a `code` URL parameter to the Encryptor page `Encryptor.html`.
