## BASE

## BEFORE:
- DONE npm init --yes
- DONE npm install
- DONE npm install express
- DONE npm install body-parser
- DONE start script in package.json
- DONE format HTML

## SERVER SIDE:
- DONE call Express and body-parser
- DONE use express and body-parser
- DONE Identify Port
- DONE Serve up static files
- DONE Route GET
- 1. DONE res.send(data)
- DONE Route POST
- 1. DONE set data to req.body
- 2. DONE push data to global variable
- 3. DONE res.sendStatus(201);
- DONE Route DELETE
- 1. DONE clear data 
- 2. DONE res.sendStatus(204);
- DONE Start server
#### JS CODE:
- switch/break statement to handle calculation 
- event handler for each operator: event listener for each operator button, set operator to empty string, function for each operator, set value as operator string to each operator function

## CLIENT SIDE:
- DONE STATIC FOLDER: html, css, jquery, js
- DONE onReady
- 1. DONE event listener: equal-btn, clear-btn, operator buttons
- 2. DONE call getAnswer()
- DONE make a function for each operator button
- 1. DONE set value to each operator buttons
- POST event handler
- 1. DONE preventDefault
- 2. DONE set variable to req.body/data input value data
- 3. DONE AJAX request send data object to server
- 4. DONE empty data
- 5. DONE call getAnswer()
- DELETE event handler
- 1. DONE AJAX request delete data
- 2. DONE call getAnswer()
- GET event handler
- 1. DONE AJAX
- 2. DONE call render(response)
- 3. DONE render event handler
- 4. DONE clear data before appending
- 5. DONE append data to DOM