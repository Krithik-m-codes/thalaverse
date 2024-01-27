import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLE_API_KEY = "AIzaSyC8xYSlkwByqGRElO4H9FA7Dasaa_yDJvE";

function App() {
  // Access your API key (see "Set up your API key" above)

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

  async function genRun(input) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = input;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(prompt);
    console.log("writing");
    console.log(text);
    console.log("done");
    document.getElementById("output").style.className =
      "m-10 p-10 bg-white text-black rounded-md";
    document.getElementById("output").innerHTML = "<pre>" + text + "</pre>";
  }

  const capCheck = (e) => {
    e.preventDefault();
    genRun(
      "what ever the name is given in the end use it to name a guy who's born with a magic power and narrate a small poem : " +
        e.target.name.value
    );

    if (e.target.name.value === "thala") {
      document.getElementById("app").style.backgroundImage =
        "url('https://wallpapercave.com/wp/wp12016875.jpg')";

      document.getElementById("app").style.overflow = "hidden";
      document.getElementById("app").style.backgroundSize = "cover";
      document.getElementById("app").style.backgroundRepeat = "no-repeat";
      document.getElementById("app").style.backgroundPosition = "center";
      document.getElementById("app").style.backgroundAttachment = "fixed";
      document.getElementById("formContainer").style.display = "none";
    } else {
      document.getElementById("app").style.background = "red";
      document.getElementById("app").style.backgroundSize = "auto";
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen max-h-max bg-slate-900 justify-center items-center flex flex-col gap-20"
        id="app"
      >
        <div>
          <h1 className="text-4xl font-bold text-white">
            Are you thala <b className=" text-yellow-300">cap</b> checker
          </h1>
        </div>
        <div id="formContainer">
          <form
            onSubmit={capCheck}
            className="flex flex-col gap-10 bg-slate-800 p-10 rounded "
          >
            <label className="text-white text-xl" htmlFor="name">
              Enter your name :
            </label>
            <input
              type="text"
              className="bg-gray-900 text-white w-96 h-12 rounded-lg text-center"
              placeholder="Enter your name"
              name="name"
              id="name"
            />
            <input
              type="submit"
              className="bg-yellow-300 w-96 h-12 rounded-lg text-center cursor-pointer "
              value="Check your cap status "
              name="submit"
              id="submit"
            />
          </form>
        </div>
        <div
          className="m-10 p-5  bg-slate-400 text-black rounded-md "
          id="output"
        ></div>
      </div>
    </>
  );
}

export default App;
