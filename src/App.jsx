import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import OverviewReports from "./components/OverviewReports";
import ControlPanel from "./components/ControlPanel";
import SwitchAccount from "./components/SwitchAccount";
import PerformanceReport from "./components/PerformanceReport";
import ChangePassword from "./components/ChangePassword";
import ActiveAlerts from "./components/ActiveAlerts";
import InventoriesOverview from "./components/InventoriesOverview";
import SignIn from "./components/signin/store/SignIn";
import Footer from "./components/footer/Footer";
import ArticleEditors from "./components/ArticleEditors";
import AddNewArticle from "./components/AddNewArticle";
import AdAccountManagement from "./components/AdAccountManagement";
import ManageCampaign from "./components/ManageCampaign";
import AssignUsers from "./components/AssignUsers";
import SignUp from "./components/SignUp";
import { useEffect } from "react";

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const userExist = !!localStorage.getItem("emailId")
  

  useEffect(()=> {
    if (userExist && location.pathname === "/sign-in" || userExist && location.pathname === "/sign-up") {
      navigate(-1);
    }
    else if (!userExist && location.pathname === "/sign-up") {
      navigate("/sign-up");
    }
    else if (!userExist && location.pathname !== "/sign-in") {
      navigate("/sign-in");
    }
  }, [userExist, navigate])
 


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports/overview" element={<OverviewReports />} />
        <Route path="/control-panel" element={<ControlPanel />} />
        <Route path="/switch-account" element={<SwitchAccount />} />
        <Route path="/performance-report" element={<PerformanceReport />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/active-alerts" element={<ActiveAlerts />} />
        <Route path="/article-editors" element={<ArticleEditors />} />
        <Route path="/inventories/overview" element={<InventoriesOverview />} />
        <Route path="/add-new-article" element={<AddNewArticle />} />
        <Route
          path="/ad-account-management"
          element={<AdAccountManagement />}
        />
        <Route path="/manage-campaign" element={<ManageCampaign />} />
        <Route path="/assign-user" element={<AssignUsers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
