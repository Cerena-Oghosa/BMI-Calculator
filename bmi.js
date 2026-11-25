const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight-el");
const heightInput = document.getElementById("height-el");
const errorEl = document.getElementById("error-el");
const resultEl = document.getElementById("result-el");
const valueEl = document.getElementById("bmi-value");
const categoryEl = document.getElementById("bmi-category");
const resultSection = document.getElementById("result");


//  function for error message
function showError(message) {
    errorEl.textContent = message;
    resultSection.hidden = true;
}

//  function for bmi categories
function bmiCategory(bmi) {
    if(bmi < 18.5) return  "Underweight";
    if(bmi < 25) return "Healthy";
    if(bmi < 30) return "Overweight";
    return "Obese";
}

// handling form submission
form.addEventListener("submit", function(event){
    event.preventDefault();
    errorEl.textContent = "";

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

        if(isNaN(weight) || isNaN(height)){
            showError("Please enter both your weight and height")
            return;
        }
        if (weight <=0 || height <=0){
            showError("Weight and Height must not be less than or zero ")
            return;
        }
        if(height <= 0.5 || height > 3){
            showError("Height must be in meters (e.g 1.75)")
            return;
        }

        const bmi = weight / (height * height);
        const category = bmiCategory(bmi);

        valueEl.textContent = bmi.toFixed(2);
        categoryEl.textContent = category;
        resultSection.hidden = false;
        resultEl.textContent = "BMI is only a rough guide, not a medical diagnosis."

});

// Function for reset
form.addEventListener("reset", function () {
    errorEl.textContent = "";
    resultEl.textContent = "";
    valueEl.textContent = "";
    categoryEl.textContent = "";
    resultSection.hidden = true;
});