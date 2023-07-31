import React , {useState , useEffect }from 'react';
import { useParams , Link } from 'react-router-dom';
import { getDocs , userCollection , db , doc} from '../DB/firebaseConfig';
import NavbarUser from './navbarUser';
import UserList from './UserList';
import Footer from './Footer';

function Rencontre() {

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


     const [ utilisateurs , setUtilisateurs ] = useState(null)

     useEffect(()=>{
      fetch('http://localhost:5000/utilisateurs')
        .then((response) =>{
          return response.json();
        })
        .then((data) =>{
          setUtilisateurs(data)
        })
     })

    return (
      <>
    
       <div className='body-Rencontre'>
            <NavbarUser /> 
            {utilisateurs && < UserList  utilisateurs = { utilisateurs } title={'Rencontrer des gens'} />} 
        </div>

        < Footer />
      </>
       
    );
}

export default Rencontre;