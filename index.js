//TODO Categorize based on groups

let result = document.getElementById("result");

function calculateMeter() {
    let distanceMeter = parseFloat(document.getElementById("distanceMeter").value);
    result.innerHTML = (distanceMeter - 504.9) / 44.73;
};

function calculateMiles() {
    let distanceMiles = parseFloat(document.getElementById("distanceMiles").value);
    result.innerHTML = (35.97 * distanceMiles) - 11.29;
};

function categorize() {
    let genderVal = document.querySelector("input[name='gender']:checked").value //Assigns the gender that has been selected
    let ageVal = document.getElementById("age").value;
};