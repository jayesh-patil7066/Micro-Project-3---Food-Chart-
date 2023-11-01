const foodData = require('./foodchart.json');
  // List all the food items
  const allFoodItems = foodData.map(item => item.foodname);
  console.log("All Food Items:", allFoodItems);
  
  // List all the food items with category vegetables
  const vegetables = foodData.filter(item => item.category === "Vegetable").map(item => item.foodname);
  console.log("Vegetables:", vegetables);
  
  // List all the food items with category fruit
  const fruits = foodData.filter(item => item.category === "Fruit").map(item => item.foodname);
  console.log("Fruits:", fruits);
  
  // List all the food items with category protein
  const proteins = foodData.filter(item => item.category === "Protein").map(item => item.foodname);
  console.log("Proteins:", proteins);
  
  // List all the food items with category nuts
  const nuts = foodData.filter(item => item.category === "Nuts").map(item => item.foodname);
  console.log("Nuts:", nuts);
  
  // List all the food items with category grains
  const grains = foodData.filter(item => item.category === "Grain").map(item => item.foodname);
  console.log("Grains:", grains);
  
  // List all the food items with category dairy
  const dairy = foodData.filter(item => item.category === "Dairy").map(item => item.foodname);
  console.log("Dairy:", dairy);
  
  // List all the food items with calorie above 100
  const above100Calories = foodData.filter(item => item.calorie > 100).map(item => item.foodname);
  console.log("Food items with calorie above 100:", above100Calories);
  
  // List all the food items with calorie below 100
  const below100Calories = foodData.filter(item => item.calorie < 100).map(item => item.foodname);
  console.log("Food items with calorie below 100:", below100Calories);
  
  // List all the food items with highest protein content to lowest
  const sortedByProtein = foodData.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
  console.log("Food items sorted by protein content (highest to lowest):", sortedByProtein);
  
  // List all the food items with lowest carb content to highest
  const sortedByCarb = foodData.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);
  console.log("Food items sorted by carbohydrate content (lowest to highest):", sortedByCarb);
  
