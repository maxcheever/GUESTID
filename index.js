document.getElementById("submitButton").addEventListener("click", outputOfText);

function outputOfText(){
    document.getElementById("outputText").innerText = document.getElementById("text-input").value
}