import dosa from '../assets/dosa.png'
import dosa2 from '../assets/dosa2.jpeg'
function Hero() {
  return (
    <>
      <section className='h-screen w-full relative overflow-hidden'>
        {/* background */}
        <img 
          className='absolute inset-0 w-full h-full object-cover'
          src={dosa2}   
          alt="background" />

        {/* dark overlay */}
        <div className='absolute inset-0 bg-black/60'></div>

      {/* content */}
      <div className='flex relative justify-between items-center h-screen px-10'>

        {/* left */}
        <div className='flex flex-col justify-center items-start h-full w-1/2 space-y-6'>
          <h1 className='text-6xl font-bold text-green-100 leading-tight'>Simply South</h1>
          <p className='p-1 text-xl text-pretty text-green-200 max-w-md underline'>Authentic South Indian food</p>
          <button className='px-5 py-2 text-white bg-green-600 rounded-lg text-center text-lg shadow-2xl hover:bg-green-800 duration-200'>
            Order Now
          </button>
        </div>

        {/* right */}
        <div className='flex w-1/2 justify-end'>
          <img className='w-[400px]' src={dosa} alt="dosa" />
        </div>
      </div>
        

        
      </section>
    </>
  );
}
export default Hero;