# Encryptor

Encryptor is a simple symmetric key text encryption tool implemented using JavaScript and HTML. It features a basic encryption/decryption method and incorporates a Diffie-Hellman key exchange to securely generate a shared secret key. This shared secret key is then used for encrypting and decrypting text messages.

[https://github.com/InventorB/Encryptor](https://github.com/InventorB/Encryptor)

## Features and Functionality

*   **Text Encryption/Decryption:** Encrypts and decrypts text messages using a symmetric key algorithm.  The script uses a substitution cipher coupled with multiplication for over 1 million total possibilities. Someone determined could crack the code, but it's enough to protect a casual message.
*   **Diffie-Hellman Key Exchange:** Securely generates a shared secret key between two parties using the Diffie-Hellman algorithm. This is implemented across `Stepone.html` and `Steptwo.html`.
*   **Simple Interface:** Provides a simple HTML-based user interface for easy encryption and decryption.
*   **URL Sharing:** Allows sharing encrypted messages and keys via URL parameters. No more copying keys!
*   **Message Sharing:** Supports direct message sharing (SMS) of encrypted text and URLs for easy sharing.
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
2.  Enter the text you want to encrypt in the top text area.
3.  Enter an encryption code between 1 and 1000000 in the second text area.
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
8.  Enter your *private number* in the first text area.
9. Enter the *public number* you received from the other party in the second text area.
10. Click the "Encrypt" button.
11. The "Result" will display the shared secret key.
12. You can now go to the encryptor with this key that nobody else knows!

