const generatePreview = () => {
  const previewButton = document.getElementById("previewButton");
  const previewTemplate = document.getElementById("previewTemplate");

  function loadTemplate(templateId, templateContent) {
    const styles = document.querySelector("style").innerHTML;
    const content = `<html><head><style>${styles}</style></head><body><div id="${templateId}">${templateContent}</div></body></html>`;
    previewTemplate.srcdoc = content;
  }

  previewButton.addEventListener("click", function () {
    const selectedTemplateId = templateSelector.value;
    const selectedTemplateContent =
      document.getElementById(selectedTemplateId).innerHTML;
    loadTemplate(selectedTemplateId, selectedTemplateContent);
  });
};

document.addEventListener("DOMContentLoaded", generatePreview);
