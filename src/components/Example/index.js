import React, { useState } from "react";
import * as htmlToImage from "html-to-image";

import "./appl.css";
// import "./example.css";

const Example = () => {
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
    // <div className="photos__column">
    //   <div className="hide-featured-badge hide-favorite-badge">
    //     <article
    //       className="photo-item photo-item--overlay js-photo-modal-navigator-watching"
    //       data-aspect-ratio="0.614358153189218"
    //       data-meta-title="Unrecognizable person diving in blue seawater · Free Stock Photo"
    //       data-photo-modal-medium-id="4628217"
    //       style={{ paddingTop: `162.77150304083406%` }}
    //     >
    //       <a
    //         className="js-photo-link photo-item__link"
    //         style={{ background: `rgb(71,114,150)` }}
    //         title="Unrecognizable person diving in blue seawater"
    //         href="/photo/unrecognizable-person-diving-in-blue-seawater-4628217/"
    //       >
    //         <img
    //           srcset="https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 500w, https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 1000w"
    //           sizes="(max-width: 540px) 250px, 500px"
    //           className="photo-item__img"
    //           alt="Unrecognizable person diving in blue seawater"
    //           data-image-width="4604"
    //           data-image-height="7494"
    //           data-big-src="https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
    //           data-large-src="https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
    //           data-tiny-src="https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
    //           data-tiny-srcset="https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x"
    //           src="https://images.pexels.com/photos/4628217/pexels-photo-4628217.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
    //         />
            
    //       </a>
    //       <a
    //         className="photo-item__photographer"
    //         data-overview-tooltip-user-id="3028574"
    //         href="/@alohaphotostudio"
    //         data-overview-tooltip-initiated="true"
    //         style={{ cursor: `pointer` }}
    //       >
    //         <img
    //           className="photo-item__avatar"
    //           height="30"
    //           width="30"
    //           role="presentation"
    //           data-overview-tooltip-pointer-element="true"
    //           src="https://images.pexels.com/users/avatars/3028574/daniel-torobekov-907.jpeg?auto=compress&amp;fit=crop&amp;h=60&amp;w=60"
    //         />
    //         <span className="photo-item__name">Daniel Torobekov</span>
    //       </a>
    //       <div className="photo-item__info">
    //         <a
    //           className="js-download rd__button rd__button--download rd__button--no-padding rd__button--text-white rd__button--with-icon"
    //           data-medium-id="4628217"
    //           data-request-path="/after_download_modal/"
    //           download=""
    //           href="/photo/4628217/download/"
    //         >
    //           <i className="rd__button--download--not-active--icon rd__svg-icon">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //           </i>
    //         </a>
    //         <button
    //           className="js-collect js-collect-4628217 rd__button rd__button--collect rd__button--no-padding rd__button--text-white rd__button--with-icon"
    //           data-photo-id="4628217"
    //           data-initialized="true"
    //         >
    //           <i className="rd__button--collect--not-active--icon rd__svg-icon">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    //             </svg>
    //           </i>
    //           <i
    //             className="rd__button--collect--active--icon rd__svg-icon"
    //             style={{ display: `none` }}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    //             </svg>
    //           </i>
    //         </button>
    //         <button
    //           className="js-like js-like-4628217 rd__button rd__button--like rd__button--no-padding rd__button--text-white rd__button--with-icon"
    //           data-photo-id="4628217"
    //           data-initialized="true"
    //         >
    //           <i className="rd__button--like--not-active--icon rd__svg-icon">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
    //             </svg>
    //           </i>
    //           <i
    //             className="rd__button--like--active--icon rd__svg-icon"
    //             style={{ display: `none` }}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    //             </svg>
    //           </i>
    //         </button>
    //       </div>
    //     </article>
    //   </div>
    // </div>
  );
};

export default Example;
