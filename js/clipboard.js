const copyButton = document.getElementById("clipboard");
const templateSelector = document.getElementById("templateSelector");

let selectedTemplateContent = "";

templateSelector.addEventListener("change", function () {
  const selectedTemplateId = templateSelector.value;

  // Get selected template id's innerHTML
  selectedTemplateContent =
    document.getElementById(selectedTemplateId).innerHTML;
});

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
