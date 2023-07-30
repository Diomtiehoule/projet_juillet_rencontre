import React ,{useState , useEffect}from 'react';
import '../components/css/userListe.css'
import { getDocs , db , userCollection , doc  } from '../DB/firebaseConfig';
import NavbarUser from './navbarUser';
import { Link , useParams , useNavigate} from 'react-router-dom';

function UserList({utilisateurs , title}) {

  let navigate = useNavigate()
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
    
    // function recupId(){
                                  
    //   let item = {blog.id}
    //   console.log(item)
    //   navigate(`/infoUser/${id}/{item}`) 
    // }
    function handlPhotoClick(userId){
      console.log('id utlisateur :', userId)
    }
   
    return (
        <>
        
      <div className='userList'>
         <h2>{title}</h2>
        {
         utilisateurs.map((blog)=>(
          <div className="info-user" key={blog.id}>
            <div className='first-part'>
                  <div className="info-photo-user" onClick={()=>{handlPhotoClick(blog.id)}}>
                       <img src={blog.photo} alt=""
                        />
                     </div>
                        <div className="info-principale-user">
                        <p><i className="fa-solid fa-user"></i> {blog.nom} , {blog.age}</p>
                        <p><i className="fa-solid fa-person"></i> {blog.sexe} / {blog.statut}</p>
                        <p><i className="fa-solid fa-location-dot"></i> {blog.residence}</p>
                        </div>
           </div>
                        

              <div className="icon-userList">
              <i className="fa fa-thin fa-heart"></i>

                        

                        </div>
                        
                    </div>
                ))
            }
        </div>
        </>
       
        
    );
}

export default UserList;