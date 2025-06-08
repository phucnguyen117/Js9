function Sidebar() {
  return (
    <div className="bg-gray-100 w-1/5 p-4 h-screen">
      <ul>
        <li className="py-2 text-gray-700 hover:text-blue-500 cursor-pointer font-bold">Orders</li>
        <li className="py-2 text-gray-700 hover:text-blue-500 cursor-pointer font-bold">Shipments</li>
        <li className="py-2 text-gray-700 hover:text-blue-500 cursor-pointer font-bold">Accounts</li>
        <li className="py-2 text-gray-700 hover:text-blue-500 cursor-pointer font-bold">Invoices</li>
      </ul>
    </div>
  );
}

export default Sidebar;