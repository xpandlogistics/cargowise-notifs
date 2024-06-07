const previewCode = document.getElementById("codePreview");
const templatePreview = document.getElementById("templatePreview");
const resetButton = document.getElementById("resetButton");

const selectorInput = document.getElementById("templateSelector");

const resetBothFrames = () => {
  let textOption = selectorInput.options[0];

  resetButton.addEventListener("click", () => {
    previewCode.srcdoc = "";
    templatePreview.srcdoc = "";

    textOption.selected = "selected";
  });
};

document.addEventListener("DOMContentLoaded", resetBothFrames);
