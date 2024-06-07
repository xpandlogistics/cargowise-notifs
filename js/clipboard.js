const copyButton = document.getElementById("clipboard");
const templateSelector = document.getElementById("templateSelector");
const copyTooltip = document.querySelector(".tooltip");
const codePreview = document.getElementById("codePreview");

let selectedTemplateContent = "";

templateSelector.addEventListener("change", function () {
  const selectedTemplateId = templateSelector.value;
  selectedTemplateContent =
    document.getElementById(selectedTemplateId).innerHTML;
});

codePreview.onload = function () {
  let iframeDocument =
    codePreview.contentDocument || codePreview.contentWindow.document;

  if (iframeDocument.body.innerHTML.trim() !== "") {
    copyButton.classList.remove("hide");
  } else {
    copyButton.classList.add("hide");
  }
};

const copyToClipBoard = () => {
  const codeSnippet = selectedTemplateContent;
  navigator.clipboard
    .writeText(codeSnippet)
    .then(() => {
      copyTooltip.classList.remove("hide");

      setTimeout(() => {
        copyTooltip.classList.add("hide");
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

copyButton.addEventListener("click", copyToClipBoard);
