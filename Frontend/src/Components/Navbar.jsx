function Navbar () {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-green-800 border-b-2 border-b-black">
        <h1 className="font-extrabold font-mono text-xl cursor-pointer">Simply South</h1>

        <ul className="flex gap-6 font-semibold justify-end">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar