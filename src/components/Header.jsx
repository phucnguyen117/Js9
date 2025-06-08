function Header() {
  return (
    <div className="bg-while-800 text-black p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Dashboard
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;