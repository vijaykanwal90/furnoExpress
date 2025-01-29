// import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ContactUs from './sections/ContactUs'
import Footer from './sections/Footer'
import Customize from './components/Customize'
import { Route, Routes ,Router} from 'react-router'
const App = () => {
  return (
  
    <main className='flex flex-col items-center justify-center w-8xl'>
      
      <Navbar />
  
     
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/customize" element={<Customize/>}/>
      </Routes>
      
      
      
    </main>
   
  )
}

export default App