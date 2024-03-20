// Get references to the input, button, and output elements
const inputField = document.getElementById("strsInput");
const submitButton = document.getElementById("submit");
const outputDiv = document.getElementById("output");

// Define the pivotIndex function
const pivotIndex = nums => {
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b, 0) - nums[0];

  if (leftSum === rightSum) return 0;

  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
  }

  return -1;
};

// Define a function to handle input and display output
const handleInputAndDisplayOutput = () => {
  // Get input value
  const inputValue = inputField.value;
  // Parse input value as an array of numbers
  const nums = JSON.parse(inputValue);
  // Call pivotIndex function with the input
  const result = pivotIndex(nums);
  // Display the result in the output field
  outputDiv.textContent = "Output: " + result;
};

// Add event listener to the submit button
submitButton.addEventListener("click", handleInputAndDisplayOutput);

// Add global event listener for keypress event
document.addEventListener("keypress", function(event) {
  // Check if the pressed key is Enter
  if (event.key === "Enter") {
    // Call the handleInputAndDisplayOutput function
    handleInputAndDisplayOutput();
  }
});
