import { useContext, useState } from "react";
import { MyContext } from "../context/ContextApp";

import Tesseract from "tesseract.js";

export function TesseractApp() {
  const { text, setText } = useContext(MyContext);
  const [img, setImg] = useState();

  function handleSelectImg(event) {
    const file = event.target.files[0];
    if (file) {
      const previWer = URL.createObjectURL(file);
      setImg(previWer);
    }
  }

  function transImgAdnText() {
    if (!img) {
      return;
    }

    Tesseract.recognize(img, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        setText(text);
        setImg();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div>
        <h1>Insira sua img</h1>
        <input type="file" onChange={handleSelectImg} />
        {img && (
          <div>
            <img src={img} alt="tranformar img em texto" />
          </div>
        )}
      </div>
      <div>
        <button onClick={transImgAdnText}>Transformar</button>
      </div>
      <div>
        <textarea name="" value={text} id=""></textarea>
      </div>
    </div>
  );
}
