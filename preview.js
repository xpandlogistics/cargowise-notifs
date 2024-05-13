const generatePreview = () => {
  const content = `<html><body><p>yo</p></body></html>`;

  const previewFrame = document.getElementById("previewFrame");

  function loadTemplate(template) {
    previewFrame.srcdoc = template;
  }

  document.getElementById("preview").addEventListener("click", function () {
    loadTemplate(content);
  });
};

document.addEventListener("DOMContentLoaded", generatePreview);
