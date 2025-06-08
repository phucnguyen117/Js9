import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CardChart from './components/CardChart';
import ApprovalsList from './components/ApprovalsList';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-50">
          <CardChart />
          <ApprovalsList />
        </div>
      </div>
    </div>
  );
}

export default App;