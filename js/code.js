const generateCode = () => {
  const templateSelector = document.getElementById("templateSelector");
  const previewCode = document.getElementById("previewCode");
  const previewTemplate = document.getElementById("previewTemplate");

  const escapeHTML = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const loadCode = (templateContent) => {
    const escapedContent = escapeHTML(templateContent);
    const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
      </head>
      <body>
        <pre><code class="html">${escapedContent}</code></pre>
        <script>
          document.addEventListener('DOMContentLoaded', (event) => {
            hljs.highlightAll();
          });
        </script>
      </body>
      </html>
    `;

    previewCode.srcdoc = content;
    previewTemplate.srcdoc = "";
  };

  templateSelector.addEventListener("change", function () {
    selectedTemplateId = templateSelector.value;

    // Get selected template id's innerHTML
    const selectedTemplateContent =
      document.getElementById(selectedTemplateId).innerHTML;
    loadCode(selectedTemplateContent);
  });
};

document.addEventListener("DOMContentLoaded", generateCode);
