import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashBoard } from './components/Dashboard/DashBoard'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import { FourthSection } from './components/FourthSection';
import { Features } from './components/Features';
import { PricingForm } from './components/PricingForm';
import { Review } from './components/Review';
import { ContactForm } from './components/ContactForm';
import { Login } from './components/Login/index';
import { Register } from './components/Auth/Register';
import { Home } from './components/Home/index';
import { ChattingBot } from './components/ChattingBot';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Navbar3 } from './components/Navbar3';
import { NavBarTwo } from './components/NavBarTwo';
import { Profile } from './components/UserProfile'; // Import UserProfile component
import { Payment } from './components/DashPayment';
import { DashRouter } from './components/Dashboard/DashRouter';
import { Help } from './components/Help';
import { Footer } from './components/Footer';
import { AboutUs } from "./components/AboutUs";
import { Termsandcondition } from "./components/termsCond";
import { ReturnPolicy } from "./components/ReturnPolicy";
import { Privacy } from "./components/Privacy";
import { ForgotPassword } from "./components/ForgotPassword";
import { Successful } from "./components/Successful";
import { Logout } from "./components/Logout";
import { VerificationPending } from "./components/Verificationpending";
import { ResetPassword } from "./components/ResetPassword";
import { ReviewUpdate } from "./components/ReviewUpdate";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar /><Hero /><SecondSection /><ThirdSection /><FourthSection /><Features /><PricingForm /><Review /><ContactForm /><Footer /></div>} />
        <Route path="/home" element={<div><Navbar3 /><Hero /><SecondSection /><ThirdSection /><FourthSection /><Features /><PricingForm /><Review /><ContactForm /><Footer /></div>} />
        <Route path="/login" element={<div><Navbar /><Login /></div>} />
        <Route path="/register" element={<div><Navbar /><Register /></div>} />
        <Route path="/Home" element={<div><Navbar /><Home /></div>} />
        <Route path="/chatBot" element={<div><ChattingBot /></div>} />
        <Route path="/SignUp" element={<div><NavBarTwo /><SignUp /></div>} />
        <Route path="/SignIn" element={<div><NavBarTwo /><SignIn /></div>} />
        <Route path="/AboutUs" element={<div><AboutUs /></div>} />
        <Route path="/payment" element={<div><Payment /></div>} />
        <Route path="/pricing" element={<div><PricingForm /></div>} />
        <Route path="/Terms" element={<div><Termsandcondition /></div>} />
        <Route path="/ReturnPolicy" element={<div><ReturnPolicy/></div>} />
        <Route path="/Privacy" element={<div><Privacy/></div>} />
        <Route path="/ForgotPassword" element={<div><NavBarTwo/><ForgotPassword/></div>} />
        <Route path="/Successful" element={<div><Successful/></div>} />
        <Route path="/Verification" element={<div><VerificationPending/></div>} />
        <Route path="/ResetPassword" element={<div><NavBarTwo/><ResetPassword/></div>} />
        <Route path="/Review" element={<div><Review/></div>} />
        <Route path="/Help" element={<div><Help/></div>} />



        {/* <Route path="/ReviewUpdate" element={<div><ReviewUpdate/></div>} /> */}





        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<DashRouter />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="Review" element={<ReviewUpdate />} />
          <Route path="help" element={<Help />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
