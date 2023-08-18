 // This list represents the Calories of the food carried by five Elves:

  //   The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
  //   The second Elf is carrying one food item with 4000 Calories.
  //   The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
  //   The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
  //   The fifth Elf is carrying one food item with 10000 Calories.

   // * Array of Arrays of Elf
  const elfGroup = {
    "First Elf" : [ 1000, 2000, 3000 ],
    "Second Elf" : [ 4000 ],
    "Third Elf" : [ 5000, 6000 ],
    "Fourth Elf" : [ 7000, 8000, 9000 ],
    "Fifth Elf" : [ 10000 ],
  }

// * Calorie Counter Function 
const calorieCounter = (elves) => {
  const elfNames = Object.keys(elves);
  let maxCalories = 0;
  let elfMaxCalories = null;

    // * Iterate to the elfGroup{} to compute total calories of each elf.
    elfNames.forEach(elfName => {
      const elfCalories = elves[elfName];
      let sum = 0;
  
      elfCalories.forEach(calorie => {
        sum += calorie;
      });

      // * print the total calories of each Elf.
      console.log(`${elfName} has total of ${sum} calories`);

      // * Check which elf has the highest calorie
      if (sum > maxCalories) {
        maxCalories = sum;
        elfMaxCalories = elfName;
      }
    });

    // * logs the Elf carrying the most Calories. How many total Calories is that Elf carrying?
    console.log('')
    console.log(`But the ${elfMaxCalories} had ${maxCalories} calories and had the most calories!`)
}

calorieCounter(elfGroup);


  


