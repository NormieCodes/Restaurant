import dosa from '../assets/dosa-banner.jpg'
import iv from '../assets/iv-banner.jpg'
import rice from '../assets/rice-banner.jpg'
import upma from '../assets/upma-banner.jpg'
import desert from '../assets/desert-banner.jpeg'
import beverages from '../assets/beverages-banner.webp'
import chinese from '../assets/noodles-banner.webp'
import thali from '../assets/thali-banner.jpg'
import menu from '../assets/menu-bg.jpg'


const menuCategories = [
  {name: "Idli and Vada", image: iv},
  {name: "Dosa", image: dosa},
  {name: "Lights Eats", image: upma},
  {name: "Rice Items", image: rice},
  {name: "Deserts", image: desert},
  {name: "Beverages", image: beverages},
  {name: "Chinese (Angara Grill)", image: chinese},
  {name: "Combos", image: thali}
];

function Menu() {
  return (
    <>
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-green-600 to-transparent my-4"></div>

      <h3 className="text-3xl font-bold p-4 text-center">WHAT WE
        <span className="text-green-800 italic"> SERVE</span> !
      </h3>

      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-4"></div>
      
      <section className="select-none mb-6 relative overflow-hidden">
        {/* background */}
        <img className='absolute inset-0 w-full h-full object-cover'
        src={menu} alt="menu-background" />
        <div className='absolute inset-0 bg-black/60 inset-shadow-md pointer-events-none'></div>

        {/* Menu Container */}
        <div className="grid gap-4 max-w-6xl mx-auto px-6 py-4 my-4 grid-cols-3 ">

          {/* Menu Item Cards */}
          {menuCategories.map((item) => (
            <div className="flex flex-col justify-center items-center relative cursor-pointer my-6 shadow-2xl border-black border rounded-lg" key={item.name}>

              <img className='object-cover h-[120px] w-full rounded-lg' src={item.image} alt={item.name} />

              <div className='w-full bg-black absolute h-full bg-opacity-40 hover:bg-opacity-30'></div>

              <p className="text-center text-md font-mono absolute bottom-2 text-white bg-black bg-opacity-35 px-2 font-semibold rounded-xl">{item.name}</p>
            </div>
          ))};

        </div>
      </section>
    </>
  );
}
export default Menu;