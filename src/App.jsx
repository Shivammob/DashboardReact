import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
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
import SigninHeader from "./components/header/SigninHeader";
import ArticleEditors from "./components/ArticleEditors";
import AddNewArticle from "./components/AddNewArticle";
import AdAccountManagement from "./components/AdAccountManagement";
import ManageCampaign from "./components/ManageCampaign";
import AssignUsers from "./components/AssignUsers";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const isSignInPage = location.pathname === "/sign-in";
  const isSignUpPage = location.pathname === "/sign-up";

  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/user", {
  //         method: "GET",
  //         credentials: "include", // Include cookies with the request
  //       });
  //       if(response.ok) {
  //         const data = await response.json();
  //         setUser(data.user);
  //       }
       
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchUser();
  // }, []);


  const handleSignOut = async () => {
    alert("Are you sure you want to logout")
    try {
        const response = await fetch('http://localhost:5000/sign_out', {
            method: 'POST',
            credentials: 'include', 
        });

        if (response.ok) {
            console.log('Sign out successful');
        } else {
            console.error('Sign out failed');
        }
    } catch (error) {
        console.error('Error signing out:', error);
    }
};



// console.log(user, "app")
  return (
    <>
        {isSignInPage || isSignUpPage ? <SigninHeader/> : <Header handleSignOut={handleSignOut} />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports/overview" element={<OverviewReports />} />
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/switch-account" element={<SwitchAccount />} />
          <Route path="/performance-report" element={<PerformanceReport />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/active-alerts" element={<ActiveAlerts />} />
          <Route path="/article-editors" element={<ArticleEditors />} />
          <Route path="/inventories/overview" element={<InventoriesOverview />}/>
          <Route path="/add-new-article" element={<AddNewArticle />}/>
          <Route path="/ad-account-management" element={<AdAccountManagement />}/>
          <Route path="/manage-campaign" element={<ManageCampaign />}/>
          <Route path="/assign-user" element={<AssignUsers />}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        {isSignInPage || isSignUpPage && <Footer/>}
      </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
