import React , { useState , useEffect }from 'react';
import { userCollection , db , doc , getDocs } from '../DB/firebaseConfig';
import { onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';
import { useParams } from 'react-router-dom';

function Message(props) {


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

    const [ message , setMessage ] = useState([])

    // useEffect(()=>{
    //     userCollection.orderBy('createAt').limit(50).onSnapshot(snapshot=>{
    //         setMessage(snapshot.doc.map (doc => doc.data()))
    //     })
    // })
    return (
        <div>
            chat
            {message.map((id , text , photoURL)=>{
                <div key={id}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            })}

            < SendMessage />
        </div>
    );
}

export default Message;