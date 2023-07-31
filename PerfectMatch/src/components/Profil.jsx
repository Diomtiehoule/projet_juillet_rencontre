import React ,{useState , useEffect}from 'react';
import '../components/css/profil.css'
import NavbarUser from './navbarUser';
import { Link , useParams } from 'react-router-dom';
import { getDocs , userCollection , db , doc , deleteDoc} from '../DB/firebaseConfig';
import Footer from './Footer';

function Profil() {

    // recuperer les information de l'utilisateur connecté
    const [userInfo , setUserInfo] = useState({})
    let { id } = useParams()
     console.log('ID' , id)
 
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
 
       console.log(userInfo)
    //    fin de la function pour recuperer  les info de l'utilsateur

    async function deleteAccount(){
      await deleteDoc(userCollection , id)
      console.log("supprimer");
    }
    return (
        <>
        < NavbarUser />
            <div className="user-profil-photo">
                <div className="photo-user">

                </div>
                <p>Identifiant : {userInfo.identifiant}</p>
            </div>

            <div className="option-profilUser">
            <div className="add-photo">
                <p><Link to={`/photo/${id}`}>Ajouter une photo</Link></p>
            </div>
            
            <div className="voir-profil">
                <p><Link to={`/userProfile/${id}`}>Voir mon Profile</Link></p>
            </div>
            </div>

            <div className="optionUser">
                <ul>
                    <li><Link to={`/galerie/${id}`}>Photo <i class="fa-solid fa-chevron-right"></i></Link></li>
                    <div className="border-option"></div>
                    <li><Link to={`/userProfile/${id}`}>Profile <i class="fa-solid fa-chevron-right"></i></Link></li>
                    <div className="border-option"></div>
                    <li><Link to={'/'}>Déconnexion <i class="fa-solid fa-chevron-right"></i></Link>
                    </li>
                    <div className="border-option"></div>
                    <li><Link to={`/`}  className='delete-account' onClick={deleteAccount}>Supprimer mon compte <i class="fa-solid fa-chevron-right"></i></Link>
                    </li>
                    <div className="border-option"></div>
                </ul>
            </div>
            
            < Footer />
        </>
    );
}

export default Profil;