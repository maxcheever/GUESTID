//Create event listener for "Submit" button
document.getElementById("submitButton").addEventListener("click", outputOfText);

function outputOfText(){
    //Set the output text to the input text
    //document.getElementById("outputText").innerText = document.getElementById("text-input").value

    //Set the output to a hard-coded input for showcase demonstration
    document.getElementById("outputText").innerText = "Summary extracted:\nThe pressure of Austria and Russia on the northern Ottoman frontiers since the beginning of the 18th century had encouraged insubordination among local governors in the largely decentralized Arab provinces of Ottoman Syria. At the same time, Tsarina Catherine the Great, lacking an organized Russian fleet in the Black Sea, drew up plans with Count Alexei Grigoryevich Orlov to detach a large number of ships from the Baltic Fleet and deploy them to the Mediterranean. Russia hoped they would attack the Turkish Straits from the rear, and that its naval presence in the Aegean Sea would provoke a Greek rebellion."

    //Run analyze.py to start HTML scraper
    $.ajax({
        url: "analyze.py",
        context: document.body});
    }