"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const locale = "da";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  // Shows the "default" language (set via the locale variable).
  showLang(locale);

  addEventListeners();
}

function addEventListeners() {
  // Adds eventListeners to the options. Note the use of "change" instead of "click".
  document.querySelector("#selectLang").addEventListener("change", updateLang);
}

function updateLang() {
  // Gets the value from the selected dropdown option.
  let selectedLang = document.querySelector("#selectLang").value;

  showLang(selectedLang);
}

function showLang(lang) {
  /* If the lang parameter equals da the language is set to danish, and vice versa for german/de.
     Could be done in a more concise manner with use of the ternary operator, but I don't really understand it yet. 
  */
  if (lang === "da") {
    document.querySelector(texts.da.texts[0].location).textContent =
      texts.da.texts[0].text;
    document.querySelector(texts.da.texts[1].location).textContent =
      texts.da.texts[1].text;
  } else {
    document.querySelector(texts.de.texts[0].location).textContent =
      texts.de.texts[0].text;
    document.querySelector(texts.de.texts[1].location).textContent =
      texts.de.texts[1].text;
  }

  // nedenstående udkommenteret da jeg gerne vil forstå det bedre, før jeg bruger det

  /*
  const languageTexts = lang === "da" ? texts.da.texts : texts.de.texts;

  document.querySelector(languageTexts[0].location).textContent = languageTexts[0].text;
  document.querySelector(languageTexts[1].location).textContent = languageTexts[1].text;
*/
}
