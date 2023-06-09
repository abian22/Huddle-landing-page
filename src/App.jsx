import './App.css'

function App() {
  return (
    <>
      <div>
        <img src="../images/logo.svg" className=" mb-20" />
        <div className="flex">
          <img src="../images/illustration-mockups.svg" className="mr-8" />
          <div className=" text-left">
            <div className="headtext text-4xl ">
              Build The Community <br></br> Your Fans Will Love
            </div>
            <br></br>
            <p className=" bodytext text-left mt-5 text-md">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion
            </p>
            <button className=" bodytext bg-white text-[#674BAF] rounded-full mt-5 w-40 shadow-xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
