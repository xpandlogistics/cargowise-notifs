const generateCode = () => {
  const templateSelector = document.getElementById("templateSelector");
  const codePreview = document.getElementById("codePreview");
  const templatePreview = document.getElementById("templatePreview");

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
        <style>
          .hljs {
            background: transparent;
            font-size: 16px;
          }
        </style>
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

    codePreview.srcdoc = content;
    templatePreview.srcdoc = "";
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
