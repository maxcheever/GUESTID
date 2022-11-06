//Create event listener for "Submit" button
document.getElementById("submitButton").addEventListener("click", outputOfText);

function outputOfText(){
    //Set the output text to the input text
    //document.getElementById("outputText").innerText = document.getElementById("text-input").value

    //Set the output to a hard-coded input for showcase demonstration
    document.getElementById("outputText").innerText = "Output text goes here"

    //Run analyze.py to start HTML scraper
    $.ajax({
        url: "analyze.py",
        context: document.body});
    }