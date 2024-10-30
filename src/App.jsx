
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoute from './utils/protectedRoute'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Create from './pages/Create'
import UserPosts from './components/UserPosts'
function App() {

  return (
    <>

   <Routes>
   
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route element={<ProtectedRoute/>}>

    <Route path='/' element={<Home/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/users/:userName/posts' element={<UserPosts />} />
    <Route path='/create' element={<Create/>}/>


    </Route>
   </Routes>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />
    </>
  )
}

export default App
