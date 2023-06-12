import './App.css'

function App() {
  return (
    <>
     <div className="hidden bg-success bg-info bg-danger bg-warning"></div>
        <img src="../images/logo.svg" className=" mb-20 " />
        <div className="flex max-[600px]:flex-col">
          <img src="../images/illustration-mockups.svg" className="mr-8 " />
          <div className=" text-left">
            <div className="headtext text-4xl text-white max-[600px]:text-center ">
              Build The Community <br></br> Your Fans Will Love
            </div>
            <br></br>
            <p className=" bodytext text-white text-left mt-5 text-md max-[600px]:text-center">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion
            </p>
            <button className=" button bg-white text-[#674BAF] rounded-full mt-5 w-40 shadow-xl max-[600px]:ml-32">
              Register
            </button>
          </div>
          </div>
        <div className='flex justify-end mr-16 max-[600px]:justify-center mt-12'>
          <img src="../images/facebook.svg" className=' flex border h-12 rounded-3xl p-2 border-black' />
          <img src="../images/instagram.svg" className=' flex border h-12 rounded-3xl p-2 border-black' />
          <img src="../images/twitter.svg" className=' flex border h-12 rounded-3xl p-2 border-black' />
          </div>
    </>
  );
}

export default App
