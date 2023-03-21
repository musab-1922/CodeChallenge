const prompt = require('prompt-sync')();
  // gets grade as inputs
  let grade = prompt("Please enter your grade");
  if (grade >= 1 && grade <=100) {
    switch (true) {
	// If score is 79 or greater
	case grade >= 79:
    console.log ("Your grade is A");
		break;
	// If score is 60 or greater
	case grade >= 60:
    console.log ("Your grade is B");
		break;
	// If score is 49 or greater
	case grade >= 49:
    console.log ("Your grade is C");
		break;
	// If score is 40 or greater
	case grade >= 40:
    console.log ("Your grade is D");
		break;
	// Anything 40 or below is failing
	default:
    console.log("Your grade is E");
}
  } else {
    console.log("Please input correct grade");
  }