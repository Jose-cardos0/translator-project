import { useContext, useState } from "react";
import { MyContext } from "../context/ContextApp";

import Tesseract from "tesseract.js";

import { RiCloseLargeLine } from "react-icons/ri";

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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function closedImg(event) {
    setImg("");
    setText("");
  }

  return (
    <div
      className="flex flex-col items-center w-auto
    p-3 bg-white shadow-black shadow-sm h-5/6"
    >
      <div className="min-w-96">
        <h1
          className="font-semibold
         text-indigo-600 text-xl
          text-center
          mb-2"
        >
          INSIRA SUA IMAGEM
        </h1>
        <div class="flex items-center justify-center w-full">
          <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-indigo-50 border-indigo-300 hover:bg-indigo-100">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16V8M7 8l4 4m0 0l4-4m-4 4v8m0-8H4m4-4h12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-indigo-500">
                <span class="font-semibold">Clique para fazer upload</span> ou
                arraste o arquivo
              </p>
              <p class="text-xs text-indigo-500">
                SVG, PNG, JPG ou GIF (máx. 800x400px)
              </p>
            </div>
            <input
              id="file-upload"
              type="file"
              class="hidden"
              onChange={handleSelectImg}
            />
          </label>
        </div>
        {img && (
          <div className="flex items-center justify-center my-4 relative">
            <div className="flex items-center justify-center relative">
              <img
                src={img}
                className="max-w-72 max-h-72 flex items-center justify-center"
                alt="tranformar img em texto"
              />
              <button onClick={closedImg}>
                <RiCloseLargeLine
                  size={40}
                  color="white"
                  className="absolute top-1/2
                   left-1/2 -translate-x-1/2
                   opacity-50
                    -translate-y-1/2 bg-indigo-400
                     rounded-full p-1 cursor-pointer
                     hover:bg-gray-900"
                />
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={transImgAdnText}
          className="text-white w-full bg-gradient-to-br
        from-purple-600 to-blue-500
         hover:bg-gradient-to-bl 
         focus:ring-4 focus:outline-none
          focus:ring-blue-300
           dark:focus:ring-blue-800 
           font-medium rounded-lg text-sm 
           px-5 py-2.5 text-center me-2 my-2 "
        >
          Transformar
        </button>
      </div>
      <div class="flex flex-col items-start w-full">
        <label
          for="message"
          className="mb-2 text-sm font-medium text-indigo-600"
        >
          Seu texto:
        </label>
        <textarea
          value={text}
          id="message"
          rows="4"
          className="block p-4 w-full text-sm text-indigo-900 bg-indigo-50 border border-indigo-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          placeholder="Seu texto aparecerá aqui..."
        ></textarea>
        <p class="mt-1 text-xs text-indigo-500">Máximo de 500 caracteres.</p>
      </div>
    </div>
  );
}
