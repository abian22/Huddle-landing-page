import './App.css'
import windows from './assets/illustration-mockups.svg'
import logo from './assets/logo.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/facebook.svg'
import twitter from './assets/twitter.svg'

function App() {
  return (
    <>
      <div className="hidden bg-success bg-info bg-danger bg-warning"></div>
      <img src={logo} className=" mb-20 " />
      <div className="flex max-[600px]:flex-col">
        <img src={windows} className="mr-8 " />
        <div className=" text-left">
          <div className="headtext text-4xl mt-6 text-white max-[600px]:text-center ">
            Build The Community <br></br> Your Fans Will Love
          </div>
          <br></br>
          <p className=" bodytext text-white text-left mt-5 text-md max-[600px]:text-center">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion
          </p>
          <button className=" button bg-white text-[#674BAF] rounded-full mt-5 w-40 shadow-xl max-[600px]:flex max-[600px]:justify-center max-[600px]:ml-32">
            Register
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-16 max-[600px]:justify-center mt-12">
        <img
          src={facebook}
          className=" flex border h-12 rounded-3xl p-2 border-black"
        />
        <img
          src={instagram}
          className=" flex border h-12 rounded-3xl p-2 border-black"
        />
        <img
          src={twitter}
          className=" flex border h-12 rounded-3xl p-2 border-black"
        />
      </div>
    </>
  );
}

export default App
