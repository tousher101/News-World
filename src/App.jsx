import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'
import NavBar from './Component/NavBar'
import { useNews } from './ContextApp/NewsContext';
import Load from './Component/Load';







function App() {
 
const {ProgressEvent,SetProgress}=useNews();


  return (
    <>
     <NavBar/>
      <Load/>
     <Outlet/>
    <Footer/>
    </>
  )
}

export default App
