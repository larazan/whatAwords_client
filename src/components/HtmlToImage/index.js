import React, { useState } from "react";
import * as htmlToImage from "html-to-image";

const HtmlToImage = () => {
  const [time, setTime] = useState(0);

  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style = "display:none;";
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };

  const exportAsPicture = () => {
    var t0 = performance.now();

    var data = document.getElementsByClassName("htmlToImageVis");

    for (var i = 0; i < data.length; ++i) {
      htmlToImage.toPng(data[i]).then((dataUrl) => {
        saveAs(dataUrl, "my-node.png");
      });
    }

    var t1 = performance.now();

    var t = t1 - t0;

    setTime(t.toFixed(3));
  };

  const visualizations = [
    { id: 1, name: "Visualization 1", vis: "😀" },
    { id: 2, name: "Visualization 2", vis: "😄" },
    { id: 3, name: "Visualization 3", vis: "😁" },
    { id: 4, name: "Visualization 4", vis: "😆" },
    { id: 5, name: "Visualization 5", vis: "😅" },
  ];

  return (
    <div>
      <h1>HTML TO IMAGE</h1>
      {visualizations.map((vi) => {
        return (
        <div className="htmlToImageVis" id={'image-' + vi.id}>
            <h3>{vi.name} - {'(to image)'}</h3>
            <p>{vi.vis}</p>
        </div>);
      })}
      <button onClick={exportAsPicture}>capture</button>
      <p>TOTAL TIME: {time} ms</p>
    </div>
  );
};

export default HtmlToImage;
