import React , {useState , useEffect}from 'react';
import { createUserWithEmailAndPassword , auth, addDoc, userCollection , getDocs , doc} from '../DB/firebaseConfig';
import { useParams } from 'react-router-dom';

function SendMessage(props) {

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

    const [ msg , setMsg ] = useState('')

    async function handleSendMessage(e){
        e.preventDefault()

        const  { uid , photoURL} = auth.currentUser
        await userCollection.addDoc({
            text : msg,
            photoURL,
            uid,
            createAt : Firebase.firestore.FieldValue.serverTimestamps()
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={handleSendMessage}>
                <input type="text" value={msg} onChange={(e)=>{setMsg(e.target.value)}} placeholder='message...'/>
                <button type='submit'>Envoyer</button>
            </form>
        </div>
    );
}

export default SendMessage;