import './App.css';
import Header from './page/Shared/Header/Header';
import Footer from './page/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home/Home';
import About from './page/About/About';
import Blogs from './page/Blogs/Blogs';
import NotFound from './page/Shared/NotFound/NotFound';
import ServiceDetail from './page/ServiceDetail/ServiceDetail';
import Login from './page/Login/Login/Login';
import Register from './page/Login/Register/Register';
import RequireAuth from './page/Login/RequireAuth/RequireAuth';
import CheckOut from './page/CheckOut/CheckOut';

function App() {
  return (
    <div >
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <CheckOut/>
            </RequireAuth>
          }></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
