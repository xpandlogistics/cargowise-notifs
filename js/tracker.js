const generateButton = document.getElementById("previewButton");

const trackIframeContent = (iframeId) => {
  const iframe = document.getElementById(iframeId);
  iframe.onload = () => {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(`1. Changes in ${iframeId}:`, mutation);
      });
    });

    observer.observe(iframeDoc, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    });

    if (iframeDoc.body.innerHTML.trim() !== "") {
      generateButton.disabled = false;
    } else {
      generateButton.disabled = true;
    }
  };
};

trackIframeContent("templatePreview");
trackIframeContent("codePreview");
