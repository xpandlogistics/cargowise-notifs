const generatePreview = () => {
  const previewButton = document.getElementById("previewButton");
  const templatePreview = document.getElementById("templatePreview");
  const templateSelector = document.getElementById("templateSelector");

  function loadTemplate(templateId, templateContent) {
    const styles = document.querySelector("style").innerHTML;
    const content = `<html><head><style>${styles}</style></head><body><div id="${templateId}">${templateContent}</div></body></html>`;
    templatePreview.srcdoc = content;
  }

  previewButton.addEventListener("click", function () {
    const selectedTemplateId = templateSelector.value;
    // console.log("1", selectedTemplateId);

    const selectedTemplateContent =
      document.getElementById(selectedTemplateId).innerHTML;
    // console.log("2", selectedTemplateContent);

    loadTemplate(selectedTemplateId, selectedTemplateContent);
  });
};

document.addEventListener("DOMContentLoaded", generatePreview);
