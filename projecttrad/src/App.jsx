import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [textAreaTo, setTextAreaTo] = useState("");
  const [textAreaFrom, setTextAreaFrom] = useState("");

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
      `https://api.mymemory.translated.net/get?q=${textAreaTo}!&langpair=${selectTo}|${selectFrom}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTextAreaFrom(data.responseData.translatedText);
      });
  }

  return (
    <div
      className="flex items-center justify-center
     min-h-screen min-w-full
     bg-indigo-500 flex-col "
    >
      <div
        className="flex flex-col items-center justify-center
        p-4 bg-white"
      >
        <div className="py-5">
          <h1>TRADUTOR</h1>
        </div>
        <div
          className="flex flex-col
         justify-center items-center"
        >
          <div
            className="flex border-t-2 min-w-full
           items-center justify-around "
          >
            <div className="flex flex-col w-full">
              <select
                value={selectTo}
                onChange={(e) => setSelectTo(e.target.value)}
                name=""
                id=""
                className="p-3 border border-black min-w-full"
              >
                {Object.keys(contries[0]).map((key, index) => (
                  <option value={key}>{contries[0][key]}</option>
                ))}
              </select>
              <textarea
                className="p-3 border border-black"
                name=""
                id=""
                value={textAreaTo}
                onChange={(e) => setTextAreaTo(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col w-full">
              <select
                value={selectFrom}
                onChange={(e) => setSelectFrom(e.target.value)}
                name=""
                id=""
                className="p-3 border
               border-black min-w-full "
              >
                {Object.keys(contriesFrom[0]).map((key, index) => (
                  <option value={key}>{contriesFrom[0][key]}</option>
                ))}
              </select>
              <textarea
                className="p-3 border border-black "
                name=""
                id=""
                value={textAreaFrom}
                onChange={(e) => setTextAreaFrom(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            onClick={handletranslate}
            className="bg-indigo-600 w-full mt-3 py-2 text-white font-semibold rounded-lg hover:bg-indigo-300 hover:text-black hover:font-semibold "
          >
            TRADUZIR
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
