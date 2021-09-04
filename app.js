let txtInput = document.querySelector("#txt-input");
let btnTranslate = document.querySelector("#btn-translate");
let txtOutput = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured" + error);
  alert("Something is wrong with server please try after sometime.");
}

function clickEventHandler() {
  let inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      txtOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
