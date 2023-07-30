import React, { useState , useEffect} from 'react';
import '../components/css/navbarUser.css'
import { Link , useParams} from 'react-router-dom';
import { getDocs , userCollection } from '../DB/firebaseConfig';


function navbarUser() {

    // recuperer l'id de l'utilisateur connecter et ses information
    const [userInfo , setUserInfo] = useState({})
    let { id } = useParams()
   //  console.log('ID' , id)

    async function GetInfosUser(id) {
        try {
          const querySnapshot = await getDocs(userCollection);
          for (const doc of querySnapshot.docs) {
            const documentData = doc.data();
            const documentId = doc.id;
            if (id === documentId) {
              setUserInfo(documentData);
              console.log(userInfo)
            }
          }
          console.log("DashBoard");
        } catch (error) {
          console.error("Une erreur s'est produite lors de la récupération des documents :", error);
        }
      }
    
      useEffect(() => {
        GetInfosUser(id);
      }, [id]);

     //  console.log(userInfo)
    //   fin de la funntion pour recuperer

    const [ showLink , setShowLinks] = useState(false)
    const handleShowLinks = () =>{
        setShowLinks(!showLink)
    }
    return (
       <>
       <nav className={`navUser ${showLink ?"show-nav": "hide-bar"}`}>
                <div className='logo'><span>our</span>Match</div>
                <ul className='navbar_links'>
                    <li className='navbar_item slideInDown-1' ><Link to={`/profil/${id}`} className='navbar_link'>Profil</Link></li>
                    <li className='navbar_item slideInDown-2' ><Link to={`/rencontre/${id}`} className='navbar_link'>Rencontre</Link></li>
                    <li className='navbar_item slideInDown-3' ><Link to={`/message/${id}`} className='navbar_link'>Message</Link></li>
                    <li className='navbar_item slideInDown-4' ><Link to={`/assistance/${id}`} className='navbar_link'>Assistance</Link></li>
                </ul>
                <button className='navbar_burger' onClick={handleShowLinks} >
                    <span className='burger-bar' ></span>
                </button>
            </nav>
       </>
             
    );
}

export default navbarUser;