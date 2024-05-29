const copyButton = document.getElementById("clipboard");
const templateSelector = document.getElementById("templateSelector");
const copyTooltip = document.querySelector(".tooltip");
const codeSnippetContainer = document.getElementById("previewCode");

let selectedTemplateContent = "";

templateSelector.addEventListener("change", function () {
  const selectedTemplateId = templateSelector.value;
  selectedTemplateContent =
    document.getElementById(selectedTemplateId).innerHTML;
});

codeSnippetContainer.onload = function () {
  let iframeDocument =
    codeSnippetContainer.contentDocument ||
    codeSnippetContainer.contentWindow.document;

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
