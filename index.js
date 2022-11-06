document.getElementById("submitButton").addEventListener("click", outputOfText);

function outputOfText(){
    //Set the output text to the input text
    document.getElementById("outputText").innerText = document.getElementById("text-input").value

    //Run analyze.py to start HTML scraper
    $.ajax({
        url: "analyze.py",
        context: document.body});
    }