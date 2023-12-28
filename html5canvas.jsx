import html2canvas from "html2canvas";
import { useState } from "react";
export default function IDCard() {
  const [cardImage, setCardImage] = useState("");
  const handleDownload = () => {
    const idCardElement = document.getElementById("id-card");
    if (idCardElement) {
      html2canvas(idCardElement, {
        allowTaint: true,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        setCardImage(dataUrl);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "id-card.png";
        link.click();
      });
    }
  };
  return (
    <>
      <div id="id-card">This is downloadable div.</div>
      <Button onClick={handleDownload}>Download ID Card</Button>
    </>
  );
}
