import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import OverviewReports from './OverviewReports';
import ControlPanel from './ControlPanel';
import SwitchAccount from './SwitchAccount';

function App() {
 

  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/reports" element={<OverviewReports />} />
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/switch-account" element={<SwitchAccount />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
