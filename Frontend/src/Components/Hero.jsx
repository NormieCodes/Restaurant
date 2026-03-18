import dosa from '../assets/dosa.jpeg'

function Hero() {
  return (
    <>
      <section className='flex justify-between items-center h-screen w-full bg-gradient-to-b from-green-800 to-white relative'>
      {/* left */}
        <div className='bg-red-500 h-full w-2/4 relative'>
          <h1 className='text-3xl font-bold absolute b-3'>Simply South</h1>
        </div>

        <div className='bg-blue-500 h-full w-2/4'></div>
      </section>
    </>
  );
}
export default Hero;