// import { useState } from 'react'

function App() {
  const thalaStyles = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttLeHKJVfOMs7FfWMIGGR9gAfX8BcnEqShA&usqp=CAU')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "all 0.5s ease-in-out",
  };

  const capCheck = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    if (name === "thala") {
      alert("You are the thala cap checker");
      document.getElementById("app").style = JSON.stringify(thalaStyles);
    } else {
      alert("You are not the thala cap checker");
      document.getElementById("app").style = "bg-slate-red-900";
    }
  };

  return (
    <>
      <div
        className="w-full h-screen bg-slate-900 justify-center items-center flex flex-col gap-20"
        id="app"
        style={thalaStyles}
      >
        <div>
          <h1 className="text-4xl font-bold text-white">
            Are you thala <b className=" text-yellow-300">cap</b> checker
          </h1>
        </div>
        <div>
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
              className="bg-yellow-300 w-96 h-12 rounded-lg text-center"
              value="Check your cap status "
              name="submit"
              id="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
