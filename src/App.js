import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Page/Home/Index';
import About from './Page/About/About'
import Contact from './Page/Contact/Contact'
import Packages from './Page/Package/Package';
import AddPackage from './Components/Packet/addPackage/AddPackage';
import ViewPackages from './Components/Packet/viewPackages/viewPackages';
import UpdatePackage from './Components/UpdatePackage/UpdatePackage/UpdatePackage';
import UpdateForms from './Components/UpdatePackage/UpdateForm/UpdateForm';
import Form from './Components/Packet/form/form';
import Login from './Page/Login/login';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />}>Login Form</Route>
        <Route path='/' className="active" element={<Home/>}>Home</Route>
        <Route path='/package' element={<Packages/>}>Package</Route>
        <Route path='/addpackage' element={<AddPackage/>}>Add Package</Route>
        <Route path='/updatepackage' element={<UpdatePackage isEdit={true}/>}>Update Package</Route>
        <Route path='/form' element={<Form/>}>Form Input</Route>
        <Route path='/updateform' element={<UpdateForms/>}>Update Form</Route>
        <Route path='/view' element={<ViewPackages/>}>View Package</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
