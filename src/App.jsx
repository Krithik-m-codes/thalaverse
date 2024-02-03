import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  // Access your API key (see "Set up your API key" above)

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

  async function genRun(input) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = input;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log(prompt);
    console.log("writing");
    console.log(text);
    console.log("done");
    document.getElementById("output").innerHTML = text;
  }

  const capCheck = (e) => {
    e.preventDefault();
    genRun(
      ` # I am gonna give you a word or sentence or prompt, somehow establish a connection with the number 7. and if it it established say THALA FOR A REASON rather than connection established\
      # For Example: \
      2023 = 2+2+3 =7,\
      Gaurav = 1st letter G = 7th letter, \
      Sunset has 6 letters + 1 word = 7,\
      Lol : 'Lol' has 3 letters and 'Haha' has 4 letters, together they make 7 letters.\
      Development: Development can be broken down into two words 'develop' and 'ment' develop is a 7 letter word = 7,\
      Rohit: The sum of the numerical positions of the letters (R=18, O=15, H=8, I=9, T=20) is 70, and 7 + 0 = 7, \
      Had break up with Girlfriend: You had break up with your gf because your luck was on 7th planet\
      #GENERATE WITH ANY ONE OF TRICK FROM THE ABOVE, SOMETIMES ROAST IN THE RESPONSE\
      #KINDLY RECHECK AND VERIFY IF THE LOGIC IS CORRECT OR NOT\
      ## DON'T GENERATE MORE THAN 1 SENTENCE\n HERE IS MY WORD:${e.target.name.value}`
    );
    // console.log(e.target.name.value);

    // if (e.target.name.value === "thala") {
    //   document.getElementById("app").style.backgroundImage =
    //     "url('https://wallpapercave.com/wp/wp12016875.jpg')";

    //   document.getElementById("app").style.overflow = "hidden";
    //   document.getElementById("app").style.backgroundSize = "cover";
    //   document.getElementById("app").style.backgroundRepeat = "no-repeat";
    //   document.getElementById("app").style.backgroundPosition = "center";
    //   document.getElementById("app").style.backgroundAttachment = "fixed";
    //   document.getElementById("formContainer").style.display = "none";
    //   document.getElementById("output").style.display = "block";
    // } else {
    //   document.getElementById("app").style.background = "red";
    //   document.getElementById("app").style.backgroundSize = "auto";

    // }
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
          className="m-10 p-5 min-h-10 min-w-[470px] bg-slate-400 text-black rounded-md text-center text-xl font-bold"
          id="output"
        >
          <p>THIS SONG FOR SOUPBOI&apos;S U</p>
        </div>
      </div>
    </>
  );
}

export default App;
