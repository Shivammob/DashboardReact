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
        <Dashboard/>
        {/* <OverviewReports/> */}
        {/* <ControlPanel/> */}
        {/* <SwitchAccount/> */}
        {/* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/technology" element={<Technology />} />
        </Routes> */}
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
