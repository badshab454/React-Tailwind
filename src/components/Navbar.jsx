const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-between items-center h-16 max-w-[80%] mx-auto text-white">
        <h1 className="w-full text-2xl text-[#00df9a] font-bold">
          <a href="#">REACT</a>
        </h1>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Resourses</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
