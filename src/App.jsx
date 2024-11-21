import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import OverviewReports from './components/OverviewReports';
import ControlPanel from './components/ControlPanel';
import SwitchAccount from './components/SwitchAccount';
import PerformanceReport from './components/PerformanceReport';
import ChangePassword from './components/ChangePassword';
import ActiveAlerts from './components/ActiveAlerts';
import InventoriesOverview from './components/InventoriesOverview';

function App() {
 

  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/reports/overview" element={<OverviewReports />} />
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/switch-account" element={<SwitchAccount />} />
          <Route path="/performance-report" element={<PerformanceReport />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/active-alerts" element={<ActiveAlerts />} />
          <Route path="/inventories/overview" element={<InventoriesOverview />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
