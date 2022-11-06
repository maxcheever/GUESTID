from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
from bs4 import BeautifulSoup
key = "a047aefdcabf40deb66cbf49ebb6566f"
endpoint = "https://conversate-analysis.cognitiveservices.azure.com/"

## parse contents of html
with open('index.html', 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')
    ## get input text
    text = str(soup.textarea.contents[0])

## authenticate client
def authenticate_client():
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(
            endpoint=endpoint, 
            credential=ta_credential)
    return text_analytics_client

client = authenticate_client()

## analyze input text
def sample_extractive_summarization(client, text):
    from azure.core.credentials import AzureKeyCredential
    from azure.ai.textanalytics import (
        TextAnalyticsClient,
        ExtractSummaryAction
    ) 

    document = [
        text
    ]

    poller = client.begin_analyze_actions(
        document,
        actions=[
            ExtractSummaryAction(),
        ],
    )

    document_results = poller.result()
    for result in document_results:
        extract_summary_result = result[0]
        if extract_summary_result.is_error:
            print("...Is an error with code '{}' and message '{}'".format(
                extract_summary_result.code, extract_summary_result.message
            ))
        else:
            return "Summary extracted: \n{}".format(" ".join([sentence.text for sentence in extract_summary_result.sentences]))

output = sample_extractive_summarization(client, text) # summary
soup.find("div", {"id": "outputText"}).string = output # set output value to summary
print(soup.find("div", {"id": "outputText"}).contents)
with open('index.html', 'w') as f: # write new html to file
    f.write(str(soup.prettify()))

