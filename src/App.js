import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import store from "./store/store";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
   <Provider store={store}>
     <Router>
    <Navbar/>
    <Routes>
    <Route path ={"/"} element={<Register/>}/>
     <Route path ={"/cart"} element={<Cart/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
    </Routes>
    <ToastContainer />
    </Router>
   </Provider>
  );
}

export default App;
