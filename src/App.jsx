// Code for the App component goes here.
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import ShareList from "./components/ShareList.jsx";

function App() {
  let [state, setState] = useState({
    value: " ",
    copied: false,
  });

  let x = document.getElementById("audio-thala");

  function playAudio() {
    x.play();
  }

  function pauseAudio() {
    x.pause();
  }

  const capCheck = (e) => {
    e.preventDefault();
    console.log(e.target.thala.value);
    if (
      e.target.thala.value === "thala" ||
      e.target.thala.value === "dhoni" ||
      e.target.thala.value === "krithik" ||
      e.target.thala.value === "7"
    ) {
      playAudio();
      document.getElementById("app").style.background =
        "url('/bg-thala-vid.mp4') repeat center center fixed";
      document.getElementById("app").style.backgroundSize = "cover";
      document.getElementById("app").style.animation = "videoPlay infinite";
      document.getElementById("app").style.pointerEvents = "none";
      alert("You are a thala cap checker");
    } else {
      alert("You are not a thala cap checker");
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen max-h-max bg-[url('/bg-thala.jpeg')] bg-center bg-cover justify-center items-center flex flex-col gap-20 relative overflow-hidden"
        id="app"
      >
        <div className="absolute bottom-10 rounded-full left-10 w-10 h-10 bg-white bg-opacity-50">
          <audio src="/bhole_jo_koyal.mp3" id="audio-thala"></audio>
          <img
            src="/thala.png"
            className="animate-[spin_3s_linear_infinite] rounded-full w-10 h-10"
            alt="thala"
            onClick={pauseAudio}
          />
          <div></div>
        </div>

        {/*Side header*/}
        <div className="absolute top-10 left-10 bg-yellow-500 rounded-md bg-clip-padding px-5 py-2 backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
          <h1 className=" text-md font-bold text-white ">
            Are you thala <b className=" text-yellow-300">cap</b> checker
          </h1>
        </div>

        <div
          id="formContainer"
          className="flex flex-col gap-10 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-200 px-10 py-4"
        >
          <form
            onSubmit={capCheck}
            className="flex flex-col gap-6 bg-transparent p-10 rounded  relative"
          >
            <div className="flex gap-4 rounded">
              <input
                type="text"
                className="bg-gray-800 text-white w-96 h-15 rounded-lg text-left p-5"
                placeholder="Enter your thala cap number"
                onChange={({ target: { value } }) =>
                  setState({ value, copied: false })
                }
                name="thala"
                id="thala"
              />
              <CopyToClipboard
                text={state.value}
                onCopy={() => setState({ copied: true })}
              >
                <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600">
                  <img
                    width="32"
                    height="32"
                    className="object-contain font-bold"
                    src="https://img.icons8.com/pastel-glyph/64/FFFFFF/clipboard--v3.png"
                    alt="clipboard--v3"
                  />
                </button>
              </CopyToClipboard>

              {state.copied ? (
                <span
                  className="absolute right-1/4 top-14 text-center px-2 py-1 rounded-lg stroke-emerald-200"
                  style={{ color: "red", backgroundColor: "white" }}
                >
                  Copied.
                </span>
              ) : null}
            </div>

            <input
              type="submit"
              className="bg-yellow-300 w-56 h-12 rounded-lg text-center cursor-pointer hover:bg-yellow-400 hover:border self-center"
              value="Check your cap status "
              name="submit"
              id="submit"
            />
          </form>
          {/*Share list compoent is used here*/}
          <ShareList />
        </div>
      </div>
    </>
  );
}

export default App;
