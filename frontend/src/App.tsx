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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />}>
          <Route index element={<AboutProject />} />
          <Route path="team" element={<OurTeam />} />
        </Route>
        <Route path="admin" element={<AdminLogin />} />
        <Route path="user" element={<UserLogin />}>
          <Route path="create-user" element={<CreateUser />} />
        </Route>
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
