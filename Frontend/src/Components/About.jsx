
function About () {
  return (
  <>
    <section className="min-h-screen">
      <h3 className="text-3xl text-center pt-6 pb-2 font-bold">
        Why Choose Us?
      </h3>
      {/* Divider */}
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
      
      {/* grid container */}
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto px-6 p-4 my-2">

        {/*cards*/}
        <div className="aspect-square shadow-2xl border border-gray-400 rounded-xl flex flex-col justify-center items-center ">
          <p className="text-center text-5xl leading-tight">
            👪
          </p>
          <p className="text-center p">Home Style Food</p>
        </div>

        <div className="aspect-square shadow-2xl border border-gray-400 rounded-xl flex flex-col justify-center items-center ">
          <p className="text-center text-5xl leading-tight">
            ❤️
          </p>
          <p className="text-center p">Made with Love</p>
        </div>

        <div className="aspect-square shadow-2xl border border-gray-400 rounded-xl flex flex-col justify-center items-center">
          <p className="text-center text-5xl leading-tight">
            🌿
          </p>
          <p className="text-center p">100% Veg</p>
        </div>
      </div>

    </section>
  </>
  );
}

export default About