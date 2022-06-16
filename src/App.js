import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LookingSome from './components/Manikhan/LookingSome';
import WorkWithMe from './components/workwithme/WorkWihMe';
import Portfolio from './components/Portofolio/Portfolio';
import Servies from './components/Services/Services';
import FiverUpwork from './components/FiverUpwrok/FiverUpwork';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>
   <Header/>
    <main>
      <Home/>
      <LookingSome/>
      <WorkWithMe/>
      <Portfolio/>
      <Servies/>
      <FiverUpwork/>
      <Process/>
      <Testimonials/>
      <Contact/>
    </main>
     <Footer/>
    </>
  );
}

export default App;
