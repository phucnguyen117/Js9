function ApprovalsList() {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h3 className="text-lg font-bold mb-2">Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center border-2 rounded-lg p-1 font-bold">
          <span>$145</span>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2">
              Approve
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
              Deny
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-2 rounded-lg p-1 font-bold">
          <span>$213</span>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2">
              Approve
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
              Deny
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-2 rounded-lg p-1 font-bold">
          <span>$814</span>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2">
              Approve
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalsList;