import './App.css';
import Dashboard from './Components/ChairDashboard/Dashboard';
import Sidebar from './Components/Common/Sidebar';
import RollCallDashboard from './Components/RollCall/RollCallDashboard';

function App() {
  return (
    <>
    <div className="flex">
    <Sidebar />
    <div className="flex-grow">
      <RollCallDashboard/>
    </div>
  </div>
    </>
  );
}

export default App;
