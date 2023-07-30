import React , {useState , useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { getDocs , userCollection , db , doc} from '../DB/firebaseConfig';

function UpdateUser(props) {

     // recuperer l'id de l'utilisateur connecter et ses information
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
     //   fin de la funntion pour recuperer
    return (
        <div>
            
        </div>
    );
}

export default UpdateUser;