# Smart Autocomplete System

A web-based autocomplete system using Trie data structure, built with Node.js and JavaScript.


## Install Node
Download node.js thorugh <br>
https://nodejs.org/en
<br>
Complete the setup and Open VS Code .
<br>
Enter the following into terminal <br>
```
npm init -y 
npm install express
```
<br>
to install express to run your code effeciently.
<br>

## Features

- Suggests words based on prefix input
- Highlights matching prefix
- Allows adding new words to dictionary
- Updates stored words.txt file

## Setup

```bash
npm install
node server.js
```

This is how the filee directory should look like
<br>

smart-autocomplete/<br>
├── server.js<br>
├── words.txt<br>
└── public/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ├── index.html<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ├── script.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   └── style.css<br>


<hr>
📈 Time Complexity<br>
Operation	Complexity<br>
Insertion	O(n)<br>
Prefix Search	O(n)<br>
Suggestion Generation	O(k) where k is total matched suggestions<br>

## Output 
<br><br>
Trie built with [N] words.
<br>
Server running at http://localhost:3000
<br>
open this in browser and see the final results
