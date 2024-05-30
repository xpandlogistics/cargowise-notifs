const codeFrame = document.getElementById("previewCode");
const previewFrame = document.getElementById("previewTemplate");
const resetButton = document.getElementById("resetButton");

const selectorInput = document.getElementById("templateSelector");

const resetBothFrames = () => {
  let textOption = selectorInput.options[0];

  resetButton.addEventListener("click", () => {
    codeFrame.srcdoc = "";
    previewFrame.srcdoc = "";

    textOption.selected = "selected";
  });
};

document.addEventListener("DOMContentLoaded", resetBothFrames);
