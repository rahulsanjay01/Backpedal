//Get the string from the page
//controller function
function getValue(){
   
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    
    if (userString.length > 2 || userString.length === "         " ) {
    let revString = reverseString(userString);
    
    displayString(revString);
    }
    else {
        alert("You must enter three or more characters!");
    }
}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    //reverse a string using a for-loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}


//Display the reversed string to the user
//view Function
function displayString(revString){

    //write to the page
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revString}`;
    //show the alert 
    document.getElementById("alert").classList.remove("invisible");
}