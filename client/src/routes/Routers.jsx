import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'

import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/doctors' element={<Doctors />} />
    <Route path='/doctors/:id' element={<DoctorDetails />} />
    <Route path='*' element={<h1>404 Not Found</h1>} />
  </Routes>
}

export default Routers