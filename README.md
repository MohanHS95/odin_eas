# odin_eas

The game Etch-a-Sketch was created for this project. 

The first task was to create a 16 x 16 grid of square divs. This was achieved by using a loop within a loop structure where the inner loop appended squares to the outer loop controlled row of squares. Using flexbox in CSS, these rows were displayed with a primary axis of column. 

Next a "hover" effect was added to the squares where all the squares were selected and put into a NodeList which allowed for DOM manipulation for each square to change color upon a "mouseover" event. 

The task to add a button on the top of the screen that would prompt the user to enter a number between 1 and 100 to change the size of the grid required putting the whole code inside a function "createGame" so it could be accessed through user input. The function is initially called in the code with the input set at 64 and changes based on the users input when they press the reset button. This is handled by a "resetGame" function which has an if-else statement where if the input is between 1 and 100, it clears the grid and adds another one with the specified input or prompts the user to pick a number between 1 and 100. 

For the first portion of the extra credit section, a getRGB function was created within the primary script body. It utilizes a loop that runs 3 times and each time generates a random number between 0 and 255 and a comma, appending both to a string "rgb(" and at the end slices the string with a ")" at the end. 

The function is called through an rgbColor variable and the attribute is set within the mouseover event where if a square does not have a background color already, it is set with the rgbColor variable. 
