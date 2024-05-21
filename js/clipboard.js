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

  // Copy the text inside the text field
  navigator.clipboard.writeText(codeSnippet);

  // Alert the copied text
  alert("Copied the text: " + codeSnippet);
};

copyButton.addEventListener("click", copyToClipBoard);
