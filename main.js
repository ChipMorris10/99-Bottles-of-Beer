// Set a variable
for (var i = 99; i > 0; i--) {

// As long as i is greater than 2, perfrom this
  if (i > 2)
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer, take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.");

// When i gets to 2, perform this - the only difference between this and above is the last bottle is singular
  else if (i >= 2)
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer, take one down, pass it around, " + (i - 1) + " bottle of beer on the wall.");

// When i gets to one, perform this
  else if (i = 1)
    console.log("1 bottle of beer on the wall, one bottle of beer, take it down, pass it around, no more bottles of beer on the wall.");
}
