import './App.css';
import Dashboard from './Components/ChairDashboard/Dashboard';
import Sidebar from './Components/Common/Sidebar';
import GSLDashboard from './Components/GSL/GSLDashboard';
import RollCallDashboard from './Components/RollCall/RollCallDashboard';

function App() {
  return (
    <>
    
    <div className="flex">
    <Sidebar />
    <div className="flex-grow">
      <GSLDashboard />
    </div>
  </div>
    
    </>
  );
}

export default App;
