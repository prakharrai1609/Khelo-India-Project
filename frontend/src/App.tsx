import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./components/home";
import { About } from "./components/about/about";
import AdminLogin from "./components/admin/adminLoginPage";
import UserLogin from "./components/user/userLoginPage"
import Footer from "./components/footer"
import ErrorNotFoundPage from "./components/ErrorNotFoundPage";
import OurTeam from './components/about/our-team'
import AboutProject from "./components/about/aboutProject";
import CreateUser from './components/user/createUser';
import ThankYouCreateUser from './components/user/thankyoucreateuser';
import { UserDashboard } from './components/user/userDashboard';
import AdminAuthenticationPage from './components/admin/adminLoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />}>
          <Route index element={<AboutProject />} />
          <Route path="team" element={<OurTeam />} />
        </Route>
        <Route path="admin" element={<AdminLogin />}>
          <Route path='register-admin' element={<AdminAuthenticationPage />} />
        </Route>
        <Route path="user" element={<UserLogin />}>
          <Route path="create-user" element={<CreateUser />} />
          <Route path="thank-you" element={<ThankYouCreateUser />} />
          <Route path="dashboard/*" element={<UserDashboard />} />
        </Route>
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
