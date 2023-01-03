
import './App.css';
import {Link,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contacts from './components/Contacts';

function App() {


  return (
  <>
  <nav style={{backgroundColor:'black' ,color:'white'}} >
    <ul style={{display:'flex',justifyContent:'space-around', margin:'0' }} >
      <li><Link style={{color:'white', textDecoration:'none'}} to='/' >Kalvium❤️</Link></li>
      <div style={{display:'flex'}} >
      <li style={{marginRight:'5vh'}} ><Link style={{color:'white', textDecoration:'none'}} to='/Aboutus' >About us</Link></li>
      <li><Link style={{color:'white', textDecoration:'none'}} to='/Contact' >Contacts</Link></li>
      </div>
    </ul>
  </nav>

  <Routes>
    <Route path='/' element={<Home/>} />  
    <Route path='/Aboutus' element={<Aboutus/>}/>
    <Route path='/Contact' element={<Contacts/>}/>
    </Routes>
    
    </>
  )

}

export default App;
