let result = document.getElementById("result");
let category = document.getElementById("category");
let tableMale = document.getElementById("men");
let tableFemale = document.getElementById("women");

function calculateMeter() {
    let genderVal = document.querySelector("input[name='gender']:checked").value //Assigns the gender that has been selected
    let ageVal = document.getElementById("age").value
    let distanceMeter = parseFloat(document.getElementById("distanceMeter").value);
    let tempResult = ((distanceMeter - 504.9) / 44.73);
    result.innerHTML = tempResult + " mL/kg/min";
    category.style.backgroundColor = "#0d1520"

    //Pop up performance categorization table based on gender
    if (genderVal === "male") {
        tableMale.style.opacity = 1;
        tableFemale.style.opacity = 0;
        //Categorize based on age
        if (ageVal > 19 && ageVal < 30) {
            //Categorize based on score
            if (tempResult >= 55.4) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 55.4 && tempResult >= 51.1) {
                category.innerHTML = "You are Excellent!";
            } else if (tempResult < 51.1 && tempResult >= 45.4) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 45.4 && tempResult >= 41.7) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 29 && ageVal < 40) {
            if (tempResult >= 54) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 54 && tempResult >= 48.3) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 48.3 && tempResult >= 44) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 44 && tempResult >= 40.5) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 39 && ageVal < 50) {
            if (tempResult >= 52.5) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 52.5 && tempResult >= 46.4) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 46.4 && tempResult >= 42.4) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 42.4 && tempResult >= 38.5) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 49 && ageVal < 60) {
            if (tempResult >= 48.9) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 48.9 && tempResult >= 43.4) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 43.4 && tempResult >= 39.2) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 39.2 && tempResult >= 35.6) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 59 && ageVal < 70) {
            if (tempResult >= 45.7) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 45.7 && tempResult >= 39.5) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 39.5 && tempResult >= 35.5) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 35.5 && tempResult >= 32.3) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 69 && ageVal < 80) {
            if (tempResult >= 42.1) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 42.1 && tempResult >= 36.7) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 36.7 && tempResult >= 32.3) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 32.3 && tempResult >= 29.4) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else {
            category.innerHTML = "Outside available age range!"
        }
    } else if (genderVal === "female") {
        tableFemale.style.opacity = 1;
        tableMale.style.opacity = 0;

        //Categorize based on age
        if (ageVal > 19 && ageVal < 30) {
            //Categorize based on score
            if (tempResult >= 49.6) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 49.6 && tempResult >= 43.9) {
                category.innerHTML = "You are Excellent!";
            } else if (tempResult < 43.9 && tempResult >= 39.5) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 39.5 && tempResult >= 36.1) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 29 && ageVal < 40) {
            if (tempResult >= 47.4) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 47.4 && tempResult >= 42.4) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 42.4 && tempResult >= 37.8) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 37.8 && tempResult >= 34.4) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 39 && ageVal < 50) {
            if (tempResult >= 45.3) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 45.3 && tempResult >= 39.7) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 39.7 && tempResult >= 36.3) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 36.3 && tempResult >= 33) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 49 && ageVal < 60) {
            if (tempResult >= 41.1) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 41.1 && tempResult >= 36.7) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 36.7 && tempResult >= 33) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 33 && tempResult >= 30.1) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 59 && ageVal < 70) {
            if (tempResult >= 37.8) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 37.8 && tempResult >= 33) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 33 && tempResult >= 30) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 30 && tempResult >= 27.5) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else if (ageVal > 69 && ageVal < 80) {
            if (tempResult >= 36.7) {
                category.innerHTML = "You are Superior!";
            } else if (tempResult < 36.7 && tempResult >= 30.9) {
                category.innerHTML = "You are Excellent!"
            } else if (tempResult < 30.9 && tempResult >= 28.1) {
                category.innerHTML = "You are Good!";
            } else if (tempResult < 28.1 && tempResult >= 25.9) {
                category.innerHTML = "Your performance is Fair!";
            } else {
                category.innerHTML = "Your performance is Poor!";
            }
        } else {
            category.innerHTML = "Outside available age range!"
        }
    } else {
        result.innerHTML = "Please choose a gender"
    }
};

function calculateMiles() {
    let genderVal = document.querySelector("input[name='gender']:checked").value //Assigns the gender that has been selected
    let distanceMiles = parseFloat(document.getElementById("distanceMiles").value);
    let tempResult = ((35.97 * distanceMiles) - 11.29)
    result.innerHTML = tempResult + " mL/kg/min";

    //Pop up performance categorization table based on gender
    if (genderVal === "male") {
        tableMale.style.opacity = 1;
        tableFemale.style.opacity = 0;
    } else if (genderVal === "female") {
        tableFemale.style.opacity = 1;
        tableMale.style.opacity = 0;
    } else {
        result.innerHTML = "Please choose a gender"
    }
};

function removeTutorial() {
    let tutorialbg = document.getElementById("bg-blur");
    tutorialbg.remove();
    let tutorial = document.getElementById("tutorial");
    tutorial.remove();
    let buster = document.getElementById("buster");
    buster.remove();
}
