import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import Teacher from './Component/Teacher'
import About from './Component/About'
import Contact from './Component/Contact'
import PageFound from './Component/PageFound'
import 'remixicon/fonts/remixicon.css'
import Testing from "./Component/Testing"
import 'animate.css';



const App =()=>{
  return( 
 
   <div>
     <BrowserRouter>
     <Routes>

       <Route path='/' element={<Home />} />
       <Route path='/teacher' element={<Teacher />} />
       <Route path='/about-us' element={<About />} />
       <Route path='/contact-us' element={<Contact />} />
       <Route path='/testing' element={<Testing />} />



       <Route path='/*' element={<PageFound />} />
      
     </Routes>   
   </BrowserRouter>

  </div>


  )
}
export default App
