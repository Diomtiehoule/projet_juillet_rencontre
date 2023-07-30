import { Route , BrowserRouter , Router , Routes} from 'react-router-dom';
import Register from './components/Register';
import NavbarHome from './components/navbarHome';
import NavbarUser from './components/navbarUser';
import MoreInfo from './components/MoreInfo';
import Profil from './components/Profil';
import Login from './components/Login';
import Assistance from './components/Assistance';
import UserProfile from './components/UserProfile';
import Message from './components/Message';
import Home from './components/Home';
import Rencontre from './components/Rencontre'
import InfoUser from './components/InfoUser'
import Photo from './components/Photo';
import Footer from './components/Footer';

function App() {
  return ( 
    <>
    
    < BrowserRouter>
        <Routes>
           < Route path='/' element={<Home />} />
           < Route path='/profil/:id' element={<Profil />} />
           < Route path='/userProfile/:id' element={<UserProfile />} />
           < Route path='/assistance/:id' element={<Assistance />} />
           < Route path='/rencontre/:id' element={<Rencontre />} />
           < Route path='/moreInfo/:id' element={<MoreInfo />} />
           < Route path='/infoUser/:id/id' element={<InfoUser />} />
           < Route path='/message/:id' element={<Message />} />
           < Route path='/login' element={<Login />} />
           < Route path='/register' element={<Register />} />
           < Route path='/photo/:id' element={<Photo />} />
        </Routes>
    </BrowserRouter>
    < InfoUser />
    {/* < Rencontre /> */}
    {/* < NavbarUser /> */}
    {/* < NavbarHome /> */}
    {/* < Register /> */}
    </>
  )
}

export default App
