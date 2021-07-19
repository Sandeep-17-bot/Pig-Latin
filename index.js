var  btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://api.funtranslations.com/translate/minion.json"
var serverUrl = "https://api.funtranslations.com/translate/valspeak.json"

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error){
    console.log("errored occured", error);
    alert("Your limit has been reached! Try again after sometime")
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)
