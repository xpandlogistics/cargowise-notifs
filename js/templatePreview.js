const generatePreview = () => {
  const previewButton = document.getElementById("previewButton");
  const templatePreview = document.getElementById("templatePreview");
  const templateSelector = document.getElementById("templateSelector");

  function loadTemplate(templateId, templateContent) {
    // const styles = document.querySelector("style").innerHTML;
    // const content = `<html><head><style>${styles}</style></head><body><div id="${templateId}">${templateContent}</div></body></html>`;

    const content = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
    ">
    <table
      id="${templateId}"
      class="container"
      style="
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #f4f4f4;
        border-collapse: collapse;
      ">
      <tbody>
        <tr>
          <td>
            <table
              class="header"
              role="banner"
              style="
                margin: 0 auto;
                padding: 15px;
                text-align: center;
                width: 600px;
                max-width: 100%;
                background: #fafafa;
              ">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://xpandportal.blob.core.windows.net/xportal/Images/Brand%20Assets/Logos/xpand-favicon-transparent.png"
                      width="80"
                      alt="Xpand Logistics"
                      style="max-width: 150px" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style="
                margin: 0 auto;
                padding: 20px;
                width: 600px;
                max-width: 100%;
                background: #ffffff;
              ">
              <tbody>
                <tr>
                  <td>
                    <h2>[Title (Email Type)]</h2>
                    <p>Dear [Client Name],</p>
                    <p>
                      Your shipment with tracking number
                      <b>[Tracking Number]</b> has been successfully processed.
                    </p>
                    <p>[Relevant Information or Action Required]</p>
                    <p class="signature">
                      Thank you for choosing us.
                      <br />
                      <br />
                      Happy Shipping,
                      <br />
                      <a
                        href="https://www.xpandlogistics.co.uk/"
                        style="
                          color: #0066cc;
                          text-decoration: none;
                          font-weight: bold;
                        "
                        >XPand Logistics</a
                      >
                    </p>
                    ${templateContent}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style="
                margin: 0 auto;
                width: 600px;
                max-width: 100%;
                padding: 25px;
                background: #fafafa;
                text-align: center;
              ">
              <tbody>
                <tr>
                  <td>
                    <table class="footer-media" style="margin: 0 auto">
                      <tbody>
                        <tr>
                          <td>
                            <ul
                              style="
                                list-style-type: none;
                                display: inline-flex;
                                padding: 0;
                                margin: 0;
                              ">
                              <li style="margin: 0 10px">
                                <a
                                  href="https://www.linkedin.com/company/x-pand-international-freight-ltd/"
                                  style="color: #0066cc; text-decoration: none">
                                  <img
                                    src="https://xpandcampaigns.blob.core.windows.net/icons/linkedin.png"
                                    alt="linkedin"
                                    style="width: 25px" />
                                </a>
                              </li>
                              <li style="margin: 0 10px">
                                <a
                                  href="https://x.com/XPandFreight"
                                  style="color: #0066cc; text-decoration: none">
                                  <img
                                    src="https://xpandcampaigns.blob.core.windows.net/icons/twitter.png"
                                    alt="twitter"
                                    style="width: 25px" />
                                </a>
                              </li>
                              <li style="margin: 0 10px">
                                <a
                                  href="https://www.instagram.com/xpandlogistics/"
                                  style="color: #0066cc; text-decoration: none">
                                  <img
                                    src="https://xpandcampaigns.blob.core.windows.net/icons/instagram.png"
                                    alt="instagram"
                                    style="width: 25px" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      class="footer-content"
                      style="margin: 0 auto; text-align: center">
                      <tbody>
                        <tr>
                          <td>
                            <p
                              class="address"
                              style="color: #888888; font-size: 12px">
                              Unit 8A, Festival Way
                              <br />
                              Basildon
                              <br />
                              SS14 3WB
                              <br />
                              T: +44 (0) 1268 211 531
                            </p>
                            <p
                              class="copyright"
                              style="
                                font-style: italic;
                                font-size: 10px;
                                color: #888888;
                                margin-bottom: 0;
                              ">
                              Copyright &copy; 2024 XPand Logistics. All Rights
                              Reserved.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
  `;
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
