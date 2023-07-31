import React , { useState , useEffect }from 'react';
import { userCollection , db , doc , getDocs } from '../DB/firebaseConfig';
import SendMessage from './SendMessage';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import NavbarUser from './navbarUser';
import '../components/css/message.css';

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
    //     db.collection('users').orderBy('createAt').limit(50).onSnapshot(snapshot=>{
    //         setMessage(snapshot.doc.map (doc => doc.data()))
    //     })
    // })
    return (
        <div className='body-message'>
          < NavbarUser />
          <h2> chat </h2>
            
            {message.map((id , text , photoURL)=>{
                <div key={id}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            })}

            < SendMessage />

{/* <div className="container">
      <div className="nav-bar">
      	<a>Chat</a>
        <div className="close">
         	<div className="line one"></div>
         	<div className="line two"></div>
        </div>
      </div>
      <div className="messages-area">
        
        <div className="message one"></div>
        <div className="message two"></div>
        <div className="message three"></div>
        <div className="message four"></div>
        <div className="message five"></div>
        <div className="message six"></div>
      </div>
      <div className="sender-area">
        <div className="input-place">
        	<input placeholder="Send a message." classNameName="send-input" type="text" />
            <div className="send">
				<svg className="send-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path fill="#6B6C7B" d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"></path></g></g></svg>
        	</div>
      	</div>
      </div>
    <div></div></div> */}

            {/* < Footer /> */}
        </div>
    );
}

export default Message;