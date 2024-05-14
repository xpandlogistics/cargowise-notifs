const generatePreview = () => {
  const previewFrame = document.getElementById("previewFrame");

  function loadTemplate() {
    const domContent = document.getElementById("domContent").innerHTML;
    const styles = document.querySelector("style").innerHTML;

    const content = `<html><head><style>${styles}</style></head><body>${domContent}</body></html>`;
    previewFrame.srcdoc = content;
  }

  document.getElementById("preview").addEventListener("click", function () {
    loadTemplate();
  });
};

document.addEventListener("DOMContentLoaded", generatePreview);
