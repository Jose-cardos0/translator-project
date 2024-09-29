import { useState, useContext } from "react";
import "./App.css";

import { TesseractApp } from "./tesseract/Tesseract";
import { MyContext } from "./context/ContextApp";

function App() {
  const [count, setCount] = useState(0);
  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [textAreaTo, setTextAreaTo] = useState("");
  const [textAreaFrom, setTextAreaFrom] = useState("");

  const { text } = useContext(MyContext);

  const contries = [
    {
      sl: "Idioma",
      en: "Inglês",
      es: "Espanhol",
      it: "Italiano",
      ja: "Japonês",
      pt: "Português",
    },
  ];

  const contriesFrom = [
    {
      sl: "Idioma",
      en: "Inglês",
      es: "Espanhol",
      it: "Italiano",
      ja: "Japonês",
      pt: "Português",
    },
  ];

  async function handletranslate() {
    fetch(
      `https://api.mymemory.translated.net/get?q=${text}!&langpair=${selectFrom}|${selectTo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTextAreaFrom(data.responseData.translatedText);
      });
  }

  return (
    <div
      className="bg-indigo-400
     min-h-screen min-w-full p-7
    gap-2 flex-row "
    >
      <div className="bg-white">
        <TesseractApp />

        <div
          className="flex flex-col 
       bg-white shadow-black shadow-sm min-w-96 px-5"
        >
          <div className="py-2">
            <h1
              className="font-semibold 
            text-center text-indigo-600 text-xl"
            >
              TRADUTOR
            </h1>
          </div>
          <div
            className="flex flex-col min-h-full min-w-full m-auto
         "
          >
            <div
              className="flex-row border-t-2 min-w-full
           items-center justify-around h-auto"
            >
              <div className="flex mb-4 flex-col w-full min-h-full">
                <select
                  value={selectFrom}
                  onChange={(e) => setSelectFrom(e.target.value)}
                  name=""
                  id=""
                  className="
                min-w-full block w-full p-3 text-sm 
                 text-indigo-900 bg-indigo-50 border
                  border-indigo-300
                    focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {Object.keys(contries[0]).map((key, index) => (
                    <option value={key}>{contries[0][key]}</option>
                  ))}
                </select>
                <textarea
                  className="min-h-28 block p-4 w-full text-sm text-indigo-900
                 bg-indigo-50 border border-indigo-300  focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                  name=""
                  id=""
                  value={textAreaTo}
                  placeholder={text}
                  onChange={(e) => setTextAreaTo(e.target.value)}
                ></textarea>
              </div>
              <div className="flex flex-col w-full">
                <select
                  value={selectTo}
                  onChange={(e) => setSelectTo(e.target.value)}
                  name=""
                  id=""
                  className="
                min-w-full block w-full p-3 text-sm
                 text-indigo-900 bg-indigo-50 border
                  border-indigo-300  focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {Object.keys(contriesFrom[0]).map((key, index) => (
                    <option value={key}>{contriesFrom[0][key]}</option>
                  ))}
                </select>
                <textarea
                  className="min-h-28 block p-4 w-full text-sm
                 text-indigo-900
                 bg-indigo-50 border
                  border-indigo-300  focus:ring-indigo-500
                   focus:border-indigo-500 resize-none"
                  name=""
                  id=""
                  value={textAreaFrom}
                  onChange={(e) => setTextAreaFrom(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              onClick={handletranslate}
              className="text-white w-full bg-gradient-to-br
             from-purple-600 to-blue-500
              hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none
               focus:ring-blue-300
                dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm 
                px-5 py-2.5 text-center me-2 my-2 "
            >
              TRADUZIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
